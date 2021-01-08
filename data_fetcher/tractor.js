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

const compileDayStateData = async (dayOfYear, dashGeo, dotGeo, termArr, itr) => {

  console.log(termArr);
  try {
    let trends = await googleTrends.interestOverTime({
        keyword: termArr,
        geo: dashGeo,
        startTime: new Date(dayOfYear),
        endTime: new Date(dayOfYear)
      })

    let file = fs.writeFileSync(`./data/${dayOfYear}/${dotGeo}-${dayOfYear}.json`, trends);
    console.log('Successfully wrote file')
    // await sleep(750); // sleep to avoid api rate limit
  } catch(err) {
    console.log(`FAILING ON date=${dayOfYear}, i=${itr}...`);
    console.log(err);
    process.exit();
  }
}

const setupDayFiles = async (dayOfYear, daySearchTerms, itr) => {
  for (let i = 0; i < dashGeos.length; i++) {
    const dashGeo = dashGeos[i];
    const dotGeo = dotGeos[i];
    try {
      await compileDayStateData(dayOfYear, dashGeo, dotGeo, daySearchTerms, itr);
      console.log(`Successfully compiled dayState data for: ${dashGeo}`);
    } catch {
      console.log(err)
    }
  }
}

const adjustSizing = (stateObj) => {
  const longestWord = stateObj.name.split(' ').reduce((longest, currentWord) => {
    return currentWord.length > longest.length ? currentWord : longest;
  }, "");
  if (longestWord.length >= 10 && !stateObj.label.x) {
    stateObj.label.width = "125";
    stateObj.label.minFontSize = "14";
  }
}

let colorNum = 0;
let colorMap = {};

const combineAndFormatDayData = async (dayOfYear, daySearchTerms) => {
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
      colorNum = (colorNum + 10) % 100;
    }
    console.log(colorMap[term]);
    return colorMap[term];
  }

  for (let i = 0; i < dotGeos.length; i++) {
    const dotGeo = dotGeos[i];
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
    stateObj['label'] = posInfo['label'];
    adjustSizing(stateObj);
    
    combinedData.push(stateObj);
    console.log(`Pushed data for: ${dotGeo}`);
  }
  return combinedData;
}

const runTractor = async () => {
  for (let i = 106; i < daysOfYear.length; i++) {
    const dayOfYear = daysOfYear[i];
    const daySearchTerms = allSearchTerms[dayOfYear];

    console.log(`START FILE SETUP: ${dayOfYear}`)
    console.log(`i=${i}`)
    await setupDayFiles(dayOfYear, daySearchTerms, i)
    console.log(`FINISH FILE SETUP: ${dayOfYear}`)

    console.log('----------------------')
    console.log('night night...')
    console.log('----------------------')
    await sleep(5000); // sleep to avoid api rate limit
    console.log('----------------------')
    console.log('wakey wakey')
    console.log('----------------------')
  }
}




const compileAllData = async () => {
  let allData2020 = {};

  for (let i = 0; i < 365; i++) {
    const dayOfYear = daysOfYear[i];
    const daySearchTerms = allSearchTerms[dayOfYear];

    let dayData = await combineAndFormatDayData(dayOfYear, allSearchTerms[dayOfYear]);
    allData2020[dayOfYear] = dayData;
  }
  // console.log(allData2020)
  fs.writeFileSync(`./all_us_trends_2020.json`, JSON.stringify(allData2020));
}

const run = async () => {
  await runTractor();
  // await compileAllData();
}

run();