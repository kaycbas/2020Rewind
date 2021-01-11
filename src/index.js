const {
  daysOfYear
} = require('./util');

// USE THESE DOCS: https://api.anychart.com/anychart.charts.Map

anychart.onDocumentReady(() => {

  // create map
  let map = anychart.map();
  // map.title('2020 in Search')

  let allData = require('./trends_2020.json');
  let states = allData["2020-1-1"];
  // let states = require('../temp.json');

  // create data set
  let dataSet = anychart.data.set(states);

  // create choropleth series
  series = map.choropleth(dataSet);

  // enable labels
  series.labels(true);
  labels = series.labels();
    
  // labels setting
  labels.fontColor('white');
  labels.fontSize("14px");
  labels.fontFamily('Roboto');
  labels.fontWeight('bold');
  labels.offsetY(-10);
  labels.connectorStroke({ color: '#DCDCDC' , thickness: 2 });
  labels.padding(6);
  labels.hAlign('center')

  map.overlapMode(true);
  // map.overlapMode("no-overlap");

  series.geoIdField('id');

  map.background().fill('#1b262c')

  series.stroke("#1b262c");

  // set map color settings
  series.colorScale(anychart.scales.ordinalColor([
    {from:0, to:9, color: '#F94144'},
    {from:10, to:19, color: '#F3722C'},
    {from:20, to:29, color: '#F7B926'},
    {from:30, to:39, color: '#90BE6D'},
    {from:40, to:49, color: '#43AA8B'},
    {from:50, to:59, color: '#4D908E'},
    {from:60, to:69, color: '#577590'},
    {from:70, to:70, color: '#277DA1'},
    {from:80, to:90, color: '#8F43AB'}
  ]));
  series.hovered().fill('#577590');

  map.geoData(anychart.maps['united_states_of_america']);

  map.container('container');

  map.draw();

  addEventListeners(allData, dataSet);
});

const getMonthDayStr = (date) => {
  let month = date.toLocaleString('default', { month: 'short' });
  let day = date.getUTCDate();
  return month.concat(' ', day, ', ');
}

const addEventListeners = (allData, dataSet) => {
  let slider = document.querySelector(".rs-range");
  let playButton = document.querySelector('.play-button');
  let monthDayLabel = document.querySelector('.month-day');
  let yearLabel = document.querySelector('.year');
  let date = new Date(daysOfYear[0]);
  let playing = false;
  
  monthDayLabel.innerHTML = getMonthDayStr(date);
  yearLabel.innerHTML = date.getFullYear();

  const updateState = () => {
    dataSet.data(allData[daysOfYear[slider.value]])

    let date = new Date(daysOfYear[slider.value]);
    monthDayLabel.innerHTML = getMonthDayStr(date); 
    yearLabel.innerHTML = date.getFullYear();
  }

  slider.oninput = () => {
    updateState();
  }

  slider.onchange = () => {
    const timestamp = Math.floor((slider.value/365)*182)
    document.querySelector('#audio').currentTime = timestamp;
  }

  let playInterval;
  playButton.addEventListener('click', () => {
    const play = () => {
      if (slider.value < 365) {
        let val = Number(slider.value);
        slider.value = val + 1;
        updateState();
      } else {
        let credits = document.querySelector('.credits');
        let main = document.querySelector('.main');
        credits.classList.add('visible');
        main.classList.add('invisible');
      }
    }
    if (!playing) {
      play();
      document.querySelector('#audio').play();
      playInterval = setInterval(() => play(), 500);
      playing = true;
    } else {
      document.querySelector('#audio').pause();
      clearInterval(playInterval);
      playing = false;
    }
  })

}
