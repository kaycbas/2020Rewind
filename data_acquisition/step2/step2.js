const googleTrends = require('google-trends-api');
const fs = require('fs');
const {
  allSearchTerms,
  dashGeos,
  dotGeos,
  daysOfYear,
  pos
} = require('./util');

const sleep = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const adjustSizing = (stateObj) => {
  let longestWord = stateObj['name'].split(' ').reduce((longest, current) => {
    return current.length > longest.length ? current : longest;
  }, "");
  if (longestWord.length >= 10 && !stateObj.label['x']) {
    stateObj.label.width = "125";
    stateObj.label.minFontSize = "16";
  }
  if (stateObj.label.y) {
    delete stateObj.label.width;
  }
  if (stateObj.name === 'beirut') {
    stateObj.name = "Beirut";
  }
}

let colorNum = 0;
let colorMap = {};

const processDayData = async (dayOfYear, daySearchTerms) => {
  let combinedData = [];

  let termCounts = {};
  for (let i = 0; i < daySearchTerms.length; i++) {
    const term = daySearchTerms[i];
    termCounts.term = 0;
  }
  const maxTerm = () => (
    Object.keys(termCounts).reduce((a, b) => (
      termCounts[a] > termCounts[b] ? a : b
    ))
  )
  
  const getColor = term => {
    if (!(term in colorMap)) {
      colorMap[term] = colorNum;
      colorNum = (colorNum + 10) % 90;
    }
    return colorMap[term];
  }

  for (let i = 0; i < dotGeos.length; i++) {
    const dotGeo = dotGeos[i];
    console.log(`Compiling: ${dotGeo} for ${dayOfYear}`);

    const stateData = require(`./data/${dayOfYear}/${dotGeo}-${dayOfYear}.json`); 
    let timelineData = stateData.default.timelineData;
    let trendiestTerm = '';
    let idx = 0;
    if (timelineData[0]) {
      let trendScores = timelineData[0].value;
      idx = trendScores.indexOf(Math.max(...trendScores));
      trendiestTerm = daySearchTerms[idx];
      termCounts[trendiestTerm] += 1;
    } else {
      trendiestTerm = maxTerm();
      idx = daySearchTerms.indexOf(trendiestTerm);
    }

    console.log(daySearchTerms)
    console.log(trendiestTerm)

    let stateObj = {
      "id": dotGeo, 
      "value": getColor(trendiestTerm),
      "name": trendiestTerm
    };

    let posInfo = pos[dotGeo];
    if (posInfo['middle-x']) {
      stateObj['middle-x'] = posInfo['middle-x'];
    } 
    if (posInfo['middle-y']) {
      stateObj['middle-y'] = posInfo['middle-y'];
    }
    stateObj['label'] = Object.assign({}, posInfo['label']);
    adjustSizing(stateObj);
    
    combinedData.push(stateObj);
    console.log(`Pushed data for: ${dotGeo}`);
  }
  return combinedData;
}


const fetchStateData = async (dayOfYear, dashGeo, dotGeo, termArr, itr) => {
  console.log(termArr);
  try {
    let trends = await googleTrends.interestOverTime({
        keyword: termArr,
        geo: dashGeo,
        startTime: new Date(dayOfYear),
        endTime: new Date(dayOfYear)
      })

    let file = fs.writeFileSync(`./step2/data/${dayOfYear}/${dotGeo}-${dayOfYear}.json`, trends);
    console.log('Successfully wrote file')
    await sleep(500); // sleep to avoid api rate limit
  } catch(err) {
    console.log(`FAILING ON date=${dayOfYear}, i=${itr}...`);
    console.log(err);
    process.exit();
  }
}

const fetchDayData = async (dayOfYear, daySearchTerms, itr) => {
  for (let i = 0; i < dashGeos.length; i++) {
    const dashGeo = dashGeos[i];
    const dotGeo = dotGeos[i];
    try {
      await fetchStateData(dayOfYear, dashGeo, dotGeo, daySearchTerms, itr);
      console.log(`Successfully compiled dayState data for: ${dashGeo}`);
    } catch {
      console.log(err)
    }
  }
}

const processData = async () => {
  let allData2020 = {};

  // for (let i = 0; i < daysOfYear.length; i++) {
  for (let i = 0; i < 1; i++) {
    const dayOfYear = daysOfYear[i];
    const daySearchTerms = allSearchTerms[dayOfYear];

    let dayData = await processDayData(dayOfYear, allSearchTerms[dayOfYear]);
    allData2020[dayOfYear] = dayData;
  }
  fs.writeFileSync(`./step2/all_us_trends_2020.json`, JSON.stringify(allData2020));
}

const fetchData = async () => {
  for (let i = 0; i < daysOfYear.length; i++) {
    const dayOfYear = daysOfYear[i];
    const daySearchTerms = allSearchTerms[dayOfYear];

    console.log(`START FILE SETUP: ${dayOfYear}`)
    console.log(`i=${i}`)
    await fetchDayData(dayOfYear, daySearchTerms, i)
    console.log(`FINISH FILE SETUP: ${dayOfYear}`)

    console.log('----------------------')
    console.log('night night...')
    console.log('----------------------')
    await sleep(30000); // sleep to avoid api rate limit
    console.log('----------------------')
    console.log('wakey wakey')
    console.log('----------------------')
  }
}

const run = async () => {
  // await fetchData();
  await processData();
}

run();

