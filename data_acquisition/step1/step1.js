const googleTrends = require('google-trends-api');
const fs = require('fs');
const { daysOfYear } = require('../util');
const { allTerms } = require('./all_terms');

const sleep = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

const calcAllTerms = async (allTerms) => {
    try {
        const topTerms = {};
        const topTermsScores = {};
        for (let i = 160; i < daysOfYear.length; i++) {
            console.log(`~~~ i=${i} ~~~`)
            shuffle(allTerms);
            const dayOfYear = daysOfYear[i];
            console.log(`CALCULATING ${dayOfYear}...`);
            await calcTerms(allTerms, dayOfYear, topTerms, topTermsScores);

            console.log('night night ----------');
            await sleep(10000); // sleep to avoid api rate limit
            console.log('wakey wakey ----------');
        }
        fs.writeFileSync('all_top_terms.json', JSON.stringify(topTerms));
    } catch(err) {
        console.log(`FAILING IN: calcAllTerms`);
        console.log(err);
        process.exit();
    }
}

const calcTerms = async (allTerms, date, topTerms, topTermsScores) => {
        const trendiestTerm = "Coronavirus";
        console.log(`BENCHMARK TERM IS: ${trendiestTerm}`);
        const scores = {};

        let start = 0;
        while (start < allTerms.length) {
            console.log(`start: ${start}`);
            let termArr = [trendiestTerm];
            for (let i = 0; i < 4 && start + i < allTerms.length; i++) {
                let term = allTerms[start+i];
                termArr.push(term);
            }
            let trends = await queryGoogle(termArr, date);
            await sleep(500);
            addScores(termArr, trends, scores);

            start += 4;
        }
        let scoresArr = [];
        for (let term in scores) {
            scoresArr.push([term, scores[term]]);
        }
        scoresArr.sort((a, b) => b[1] - a[1]);
        let top20scores = scoresArr.slice(0, 30);
        let top5 = top20scores.map(el => el[0]).slice(0, 5);
        topTerms[date] = top5;
        topTermsScores[date] = top20scores;

        fs.writeFileSync(`scores/${date}.json`, JSON.stringify(topTermsScores));
        fs.writeFileSync(`terms/${date}.json`, JSON.stringify(topTerms));
}

const addScores = (termArr, trends, scores) => {
    let trendScores = trends.default.timelineData[0].value;
    for (let i = 0; i < trendScores.length; i++) {
        const term = termArr[i];
        const score = trendScores[i];
        // scores.push([term, score]);
        scores[term] = score;
    }
}

const determineBenchmark = async (allTerms, date) => {
    console.log('DETERMINING BENCHMARK TERM...');
        let trendiestTerm = allTerms[0];
        let start = 1;
        while (start < allTerms.length) {
            console.log(`start: ${start}`);

            let termArr = [trendiestTerm];
            for (let i = 0; i < 4 && start + i < allTerms.length; i++) {
                let term = allTerms[start+i];
                termArr.push(term);
            }

            let trends = await queryGoogle(termArr, date);
            trendiestTerm = mostTrendy(trends, termArr);

            start += 4;
            console.log(`trendiest: ${trendiestTerm}`);
        }
        return trendiestTerm;
}

const queryGoogle = async (termArr, date) => {
    let trends = await googleTrends.interestOverTime({
        keyword: termArr,
        geo: 'US',
        startTime: new Date(date),
        endTime: new Date(date)
    })
    return JSON.parse(trends);
}

const mostTrendy = (trends, termArr) => {
    let trendScores = trends.default.timelineData[0].value;
    idx = trendScores.indexOf(Math.max(...trendScores));
    trendiestTerm = termArr[idx];
    return trendiestTerm;
}

calcAllTerms(allTerms);