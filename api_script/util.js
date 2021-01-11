const fs = require('fs');

// Create formatted daysOfYear array
let daysOfYear = [];
for (let d = new Date(2020, 0, 1); d <= new Date(2020, 11, 31); d.setDate(d.getDate() + 1)) {
    let year = d.getFullYear();
    let month = d.getMonth() + 1;
    let day = d.getDate();
    let formattedDate = [year, month, day].join('-');
    daysOfYear.push(formattedDate);
}
// console.dir(daysOfYear, {'maxArrayLength': null});

// Create data file structure
const setupFileStruct = () => {
    for (let i = 0; i < daysOfYear.length; i++) {
      const dir = "./data/".concat(daysOfYear[i]);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, {
          recursive: true
        });
      }
    }
}
setupFileStruct();

// Top search terms each day
const allSearchTerms = {
    '2020-1-1': ['The Mandalorian', 'Billie Eilish', 'Baby Yoda', 'Iran missile', 'Iran General'],
    '2020-1-2': ['The Mandalorian', 'Billie Eilish', 'Baby Yoda', 'Iran missile', 'Iran General'],
    '2020-1-3': ['The Mandalorian', 'Billie Eilish', 'Baby Yoda', 'Iran missile', 'Iran General'],
    '2020-1-4': ['The Mandalorian', 'Billie Eilish', 'Baby Yoda', 'Iran missile', 'Iran General'],
    '2020-1-5': ['The Mandalorian', 'Billie Eilish', 'Baby Yoda', 'Iran missile', 'Iran General'],
    '2020-1-6': ['The Mandalorian', 'Billie Eilish', 'Baby Yoda', 'Iran Missile', 'Iran General'],
    '2020-1-7': ['The Mandalorian', 'Billie Eilish', 'Baby Yoda', 'Iran Missile', 'Ukraine Plane Crash'],
    '2020-1-8': ['The Mandalorian', 'Billie Eilish', 'Baby Yoda', 'Prince Harry', 'Ukraine Plane Crash'],
    '2020-1-9': ['The Mandalorian', 'Billie Eilish', 'Baby Yoda', 'Prince Harry', 'Ukraine Plane Crash'],
    '2020-1-10': ['Ukraine Plane Crash', 'Prince Harry', 'Iran General', 'Iran Missile', 'Meghan Markle'],
    '2020-1-11': ['Ukraine Plane Crash', 'Prince Harry', 'Iran General', 'Iran Missile', 'Meghan Markle'],
    '2020-1-12': ['Ukraine Plane Crash', 'Prince Harry', 'Iran General', 'Iran Missile', 'Meghan Markle'],
    '2020-1-13': ['Ukraine Plane Crash', 'Prince Harry', 'Iran General', 'Iran Missile', 'Meghan Markle'],
    '2020-1-14': ['Ukraine Plane Crash', 'Prince Harry', 'Iran General', 'Iran Missile', 'Meghan Markle'],
    '2020-1-15': ['Ukraine Plane Crash', 'Prince Harry', 'Iran General', 'Iran Missile', 'Meghan Markle'],
    '2020-1-16': ['Ukraine Plane Crash', 'Prince Harry', 'Iran General', 'Iran Missile', 'Meghan Markle'],
    '2020-1-17': ['Ukraine Plane Crash', 'Prince Harry', 'Iran General', 'Iran Missile', 'Meghan Markle'],
    '2020-1-18': ['Ukraine Plane Crash', 'Prince Harry', 'Iran General', 'Iran Missile', 'Meghan Markle'],
    '2020-1-19': ['Ukraine Plane Crash', 'Prince Harry', 'Iran General', 'Iran Missile', 'Meghan Markle'],
    '2020-1-20': ['Ukraine Plane Crash', 'Prince Harry', 'Iran General', 'Iran Missile', 'Meghan Markle'],
    '2020-1-21': ['Ukraine Plane Crash', 'Prince Harry', 'Wuhan', 'Billie Eilish', 'Meghan Markle'],
    '2020-1-22': ['Ukraine Plane Crash', 'Prince Harry', 'Wuhan', 'Billie Eilish', 'Meghan Markle'],
    '2020-1-23': ['Ukraine Plane Crash', 'Prince Harry', 'Wuhan', 'Billie Eilish', 'Meghan Markle'],
    '2020-1-24': ['Impeachment', 'Prince Harry', 'Wuhan', 'Billie Eilish', 'Meghan Markle'],
    '2020-1-25': ['Impeachment', 'Prince Harry', 'Wuhan', 'Billie Eilish', 'Meghan Markle'],
    '2020-1-26': ['Impeachment', 'Prince Harry', 'Meghan Markle', 'Wuhan', 'Kobe Bryant'],
    '2020-1-27': ['Impeachment', 'Prince Harry', 'Meghan Markle', 'Wuhan', 'Kobe Bryant'],
    '2020-1-28': ['Impeachment', 'Prince Harry', 'Meghan Markle', 'Wuhan', 'Kobe Bryant'],
    '2020-1-29': ['Impeachment', 'Prince Harry', 'Meghan Markle', 'Wuhan', 'Kobe Bryant'],
    '2020-1-30': ['Impeachment', 'Prince Harry', 'Meghan Markle', 'Wuhan', 'Kobe Bryant'],
    '2020-1-31': ['Impeachment', 'Prince Harry', 'Meghan Markle', 'Wuhan', 'Kobe Bryant'],
    '2020-2-1': ['Impeachment', 'Prince Harry', 'Meghan Markle', 'Wuhan', 'Kobe Bryant'],
    '2020-2-2': ['Impeachment', 'Shakira', 'Meghan Markle', 'Wuhan', 'Kobe Bryant'],
    '2020-2-3': ['Impeachment', 'Shakira', 'Iowa Caucus', 'Wuhan', 'Kobe Bryant'],
    '2020-2-4': ['Impeachment', 'Shakira', 'Iowa Caucus', 'Wuhan', 'Kobe Bryant'],
    '2020-2-5': ['Prince Harry', 'Iowa Caucus', 'Wuhan', 'Kobe Bryant'],
    '2020-2-6': ['Shakira', 'Iowa Caucus', 'Wuhan', 'Kobe Bryant'],
    '2020-2-7': ['Shakira', 'Iowa Caucus', 'Wuhan', 'Kobe Bryant', 'Parasite'],
    '2020-2-8': ['Shakira', 'Iowa Caucus', 'Wuhan', 'Kobe Bryant', 'Parasite'],
    '2020-2-9': ['Shakira', 'Iowa Caucus', 'Wuhan', 'Kobe Bryant', 'Parasite'],
    '2020-2-10': ['Shakira', 'Iowa Caucus', 'Wuhan', 'Kobe Bryant', 'Parasite'],
    '2020-2-11': ['Shakira', 'Iowa Caucus', 'Wuhan', 'Kobe Bryant', 'Parasite'],
    '2020-2-12': ['Shakira', 'Iowa Caucus', 'Wuhan', 'Kobe Bryant', 'Parasite'],
    '2020-2-13': ['Shakira', 'Iowa Caucus', 'Wuhan', 'Kobe Bryant', 'Parasite'],
    '2020-2-14': ['Ryan Newman', 'Iowa Caucus', 'Wuhan', 'Kobe Bryant', 'Parasite'],
    '2020-2-15': ['Ryan Newman', 'Iowa Caucus', 'Wuhan', 'The Weeknd', 'Parasite'],
    '2020-2-16': ['Ryan Newman', 'Iowa Caucus', 'Pop Smoke', 'The Weeknd', 'Parasite'],
    '2020-2-17': ['Ryan Newman', 'Bernie Sanders', 'Pop Smoke', 'Parasite', 'Harvey Weinstein'],
    '2020-2-18': ['Ryan Newman', 'Bernie Sanders', 'Pop Smoke', 'Parasite', 'Harvey Weinstein'],
    '2020-2-19': ['Ryan Newman', 'Bernie Sanders', 'Pop Smoke', 'Parasite', 'Harvey Weinstein'],
    '2020-2-20': ['Ryan Newman', 'Bernie Sanders', 'Pop Smoke', 'Parasite', 'Harvey Weinstein'],
    '2020-2-21': ['Ryan Newman', 'Bernie Sanders', 'Pop Smoke', 'Parasite', 'Harvey Weinstein'],
    '2020-2-22': ['Ryan Newman', 'Bernie Sanders', 'Pop Smoke', 'Parasite', 'Harvey Weinstein'],
    '2020-2-23': ['Ryan Newman', 'Bernie Sanders', 'Harvey Weinstein', 'The Weeknd'],
    '2020-2-24': ['Ryan Newman', 'Bernie Sanders', 'Harvey Weinstein', 'The Weeknd'],
    '2020-2-25': ['Shakira', 'Bernie Sanders', 'Harvey Weinstein', 'Stock Market'],
    '2020-2-26': ['Shakira', 'Bernie Sanders', 'Harvey Weinstein', 'Stock Market'],
    '2020-2-27': ['Shakira', 'Bernie Sanders', 'Harvey Weinstein', 'Stock Market'],
    '2020-2-28': ['Shakira', 'Bernie Sanders', 'Harvey Weinstein', 'Stock Market'],
    '2020-2-29': ['Shakira', 'Bernie Sanders', 'Harvey Weinstein', 'Stock Market'],
    '2020-3-1': ['Super Tuesday', 'Bernie Sanders', 'Harvey Weinstein', 'Stock Market'],
    '2020-3-2': ['Super Tuesday', 'Bernie Sanders', 'Harvey Weinstein', 'Stock Market'],
    '2020-3-3': ['Super Tuesday', 'Bernie Sanders', 'Harvey Weinstein', 'Stock Market'],
    '2020-3-4': ['Super Tuesday', 'Bernie Sanders', 'Harvey Weinstein', 'Stock Market'],
    '2020-3-5': ['Super Tuesday', 'Bernie Sanders', 'Harvey Weinstein', 'Stock Market'],
    '2020-3-6': ['Super Tuesday', 'Bernie Sanders', 'Harvey Weinstein', 'Stock Market'],
    '2020-3-7': ['Super Tuesday', 'Bernie Sanders', 'Pandemic', 'Stock Market'],
    '2020-3-8': ['Elizabeth Warren', 'Coronavirus', 'Bernie Sanders', 'Pandemic', 'Harvey Weinstein'],
    '2020-3-9': ['Elizabeth Warren', 'Coronavirus', 'Bernie Sanders', 'Pandemic', 'Harvey Weinstein'],
    '2020-3-10': ['Stock Market', 'Coronavirus', 'Bernie Sanders', 'Pandemic', 'Harvey Weinstein'],
    '2020-3-11': ['Stock Market', 'Coronavirus', 'Bernie Sanders', 'Pandemic', 'Harvey Weinstein'],
    '2020-3-12': ['Stock Market', 'Coronavirus', 'Bernie Sanders', 'Pandemic', 'Harvey Weinstein'],
    '2020-3-13': ['Stock Market', 'Coronavirus', 'Bernie Sanders', 'Pandemic', 'Harvey Weinstein'],
    '2020-3-14': ['Stock Market', 'Coronavirus', 'Bernie Sanders', 'Pandemic', 'Harvey Weinstein'],
    '2020-3-15': ['Stock Market', 'Coronavirus', 'Lockdown', 'Pandemic', 'Quarantine'],
    '2020-3-16': ['Stock Market', 'Coronavirus', 'Lockdown', 'Pandemic', 'Quarantine'],
    '2020-3-17': ['Stock Market', 'Coronavirus', 'Lockdown', 'Pandemic', 'Quarantine'],
    '2020-3-18': ['Stock Market', 'Coronavirus', 'Lockdown', 'Pandemic', 'Quarantine'],
    '2020-3-19': ['Stock Market', 'Coronavirus', 'Lockdown', 'Pandemic', 'Quarantine'],
    '2020-3-20': ['Stock Market', 'Coronavirus', 'Lockdown', 'Pandemic', 'Quarantine'],
    '2020-3-21': ['Stock Market', 'Coronavirus', 'Lockdown', 'Pandemic', 'Quarantine'],
    '2020-3-22': ['Stock Market', 'Coronavirus', 'Lockdown', 'Pandemic', 'Unemployment'],
    '2020-3-23': ['Stock Market', 'Coronavirus', 'Lockdown', 'Pandemic', 'Unemployment'],
    '2020-3-24': ['Stock Market', 'Coronavirus', 'Lockdown', 'Pandemic', 'Unemployment'],
    '2020-3-25': ['Stock Market', 'Coronavirus', 'Lockdown', 'Tiger King', 'Unemployment'],
    '2020-3-26': ['Stock Market', 'Coronavirus', 'Lockdown', 'Tiger King', 'Unemployment'],
    '2020-3-27': ['Furlough', 'Coronavirus', 'Lockdown', 'Tiger King', 'Unemployment'],
    '2020-3-28': ['Furlough', 'Coronavirus', 'Lockdown', 'Tiger King', 'Unemployment'],
    '2020-3-29': ['Furlough', 'Lockdown', 'Tiger King', 'Stock Market','Quarantine'],
    '2020-3-30': ['Furlough', 'Lockdown', 'Tiger King', 'Stock Market','Quarantine'],
    '2020-3-31': ['Furlough', 'Lockdown', 'Tiger King', 'Stock Market','Quarantine'],
    '2020-4-1': ['Furlough', 'Lockdown', 'Tiger King', 'Stock Market','Quarantine'],
    '2020-4-2': ['Furlough', 'Lockdown', 'Tiger King', 'Stock Market','Quarantine'],
    '2020-4-3': ['Furlough', 'Lockdown', 'Tiger King', 'Stock Market','Quarantine'],
    '2020-4-4': ['Furlough', 'Lockdown', 'Tiger King', 'Stock Market','Quarantine'],
    '2020-4-5': ['World Health Organization', 'Lockdown', 'Tiger King', 'Quarantine'],
    '2020-4-6': ['World Health Organization', 'Lockdown', 'Tiger King', 'Quarantine'],
    '2020-4-7': ['World Health Organization', 'Lockdown', 'Tiger King', 'Quarantine'],
    '2020-4-8': ['World Health Organization', 'Lockdown', 'Tiger King', 'Quarantine'],
    '2020-4-9': ['World Health Organization', 'Lockdown', 'Tiger King', 'Quarantine'],
    '2020-4-10': ['Stimulus Check', 'Lockdown', 'Tiger King', 'Quarantine', 'Furlough'],
    '2020-4-11': ['Stimulus Check', 'Lockdown', 'Tiger King', 'Quarantine', 'Furlough'],
    '2020-4-12': ['Stimulus Check', 'IRS', 'Tiger King', 'Quarantine', 'Furlough'],
    '2020-4-13': ['Stimulus Check', 'IRS', 'Tiger King', 'Quarantine', 'Furlough'],
    '2020-4-14': ['Stimulus Check', 'IRS', 'Tiger King', 'Quarantine', 'Furlough'],
    '2020-4-15': ['Stimulus Check', 'IRS', 'Tiger King', 'Quarantine', 'Furlough'],
    '2020-4-16': ['Stimulus Check', 'IRS', 'Tiger King', 'Quarantine', 'Furlough'],
    '2020-4-17': ['Stimulus Check', 'IRS', 'Tiger King', 'Quarantine', 'Furlough'],
    '2020-4-18': ['Stimulus Check', 'Pandemic', 'Tiger King', 'Quarantine', 'Furlough'],
    '2020-4-19': ['Stimulus Check', 'Pandemic', 'Kim Jong Un', 'Quarantine', 'Furlough'],
    '2020-4-20': ['Stimulus Check', 'Pandemic', 'Kim Jong Un', 'Quarantine', 'Furlough'],
    '2020-4-21': ['Stimulus Check', 'Pandemic', 'Kim Jong Un', 'Quarantine', 'Furlough'],
    '2020-4-22': ['UFO', 'Pandemic', 'Kim Jong Un', 'Tiger King', 'Shakira'],
    '2020-4-23': ['UFO', 'Pandemic', 'Kim Jong Un', 'Tiger King', 'Shakira'],
    '2020-4-24': ['UFO', 'Pandemic', 'Kim Jong Un', 'Tiger King', 'Shakira'],
    '2020-4-25': ['UFO', 'Pandemic', 'Kim Jong Un', 'Tiger King', 'Shakira'],
    '2020-4-26': ['UFO', 'Pandemic', 'Kim Jong Un', 'Tiger King', 'Shakira'],
    '2020-4-27': ['UFO', 'Pandemic', 'Kim Jong Un', 'Tiger King', 'Shakira'],
    '2020-4-28': ['UFO', 'Pandemic', 'Kim Jong Un', 'Tiger King', 'Shakira'],
    '2020-4-29': ['UFO', 'Pandemic', 'Kim Jong Un', 'Tiger King', 'Shakira'],
    '2020-4-30': ['UFO', 'Kim Jong Un', 'Pandemic', 'Elon Musk', 'Shakira'],
    '2020-5-1': ['UFO', 'Kim Jong Un', 'Pandemic', 'Elon Musk', 'Shakira'],
    '2020-5-2': ['UFO', 'Kim Jong Un', 'Pandemic', 'Elon Musk', 'Shakira'],
    '2020-5-3': ['UFO', 'Kim Jong Un', 'Pandemic', 'Elon Musk', 'Shakira'],
    '2020-5-4': ['Pandemic', 'Elon Musk', 'Ahmaud Arbery', 'Elon Musk Baby', 'Murder Hornet'],
    '2020-5-5': ['Pandemic', 'Elon Musk', 'Ahmaud Arbery', 'Elon Musk Baby', 'Murder Hornet'],
    '2020-5-6': ['Pandemic', 'Elon Musk', 'Ahmaud Arbery', 'Elon Musk Baby', 'Murder Hornet'],
    '2020-5-7': ['Pandemic', 'Elon Musk', 'Ahmaud Arbery', 'Elon Musk Baby', 'Murder Hornet'],
    '2020-5-8': ['Pandemic', 'Elon Musk', 'Ahmaud Arbery', 'Elon Musk Baby', 'Murder Hornet'],
    '2020-5-9': ['Pandemic', 'Elon Musk', 'Ahmaud Arbery', 'Elon Musk Baby', 'Murder Hornet'],
    '2020-5-10': ['Pandemic', 'Elon Musk', 'Ahmaud Arbery', 'Elon Musk Baby', 'Murder Hornet'],
    '2020-5-11': ['Pandemic', 'Elon Musk', 'Ahmaud Arbery', 'Elon Musk Baby', 'Murder Hornet'],
    '2020-5-12': ['Pandemic', 'Elon Musk', 'Ahmaud Arbery', 'Elon Musk Baby', 'Murder Hornet'],
    '2020-5-13': ['Pandemic', 'Elon Musk', 'Ahmaud Arbery', 'Elon Musk Baby', 'Murder Hornet'],
    '2020-5-14': ['Pandemic', 'Elon Musk', 'Ahmaud Arbery', 'Elon Musk Baby', 'Murder Hornet'],
    '2020-5-15': ['Pandemic', 'Elon Musk', 'Ahmaud Arbery', 'Elon Musk Baby', 'Murder Hornet'],
    '2020-5-16': ['Pandemic', 'Elon Musk', 'Ahmaud Arbery', 'Elon Musk Baby', 'Murder Hornet'],
    '2020-5-17': ['Pandemic', 'Elon Musk', 'Ahmaud Arbery', 'Elon Musk Baby', 'Murder Hornet'],
    '2020-5-18': ['Pandemic', 'Elon Musk', 'Ahmaud Arbery', 'Elon Musk Baby', 'Murder Hornet'],
    '2020-5-19': ['Pandemic', 'Elon Musk', 'Elon Musk Baby', 'SpaceX', 'George Floyd'],
    '2020-5-20': ['Pandemic', 'Elon Musk', 'Elon Musk Baby', 'SpaceX', 'George Floyd'],
    '2020-5-21': ['Pandemic', 'Elon Musk', 'Elon Musk Baby', 'SpaceX', 'George Floyd'],
    '2020-5-22': ['George Floyd', 'Pandemic', 'Elon Musk', 'The Weeknd', 'SpaceX'],
    '2020-5-23': ['George Floyd', 'Pandemic', 'Elon Musk', 'The Weeknd', 'SpaceX'],
    '2020-5-24': ['George Floyd', 'Pandemic', 'Black Lives Matter', 'The Weeknd', 'SpaceX'],
    '2020-5-25': ['George Floyd', 'Pandemic', 'Black Lives Matter', 'The Weeknd', 'SpaceX'],
    '2020-5-26': ['George Floyd', 'Pandemic', 'Black Lives Matter', 'The Weeknd', 'SpaceX'],
    '2020-5-27': ['George Floyd', 'Pandemic', 'Black Lives Matter', 'The Weeknd', 'SpaceX'],
    '2020-5-28': ['George Floyd', 'Pandemic', 'Black Lives Matter', 'The Weeknd', 'SpaceX'],
    '2020-5-29': ['George Floyd', 'Pandemic', 'Black Lives Matter', 'The Weeknd', 'SpaceX'],
    '2020-5-30': ['George Floyd', 'Jeffrey Epstein', 'Black Lives Matter', 'Breonna Taylor', 'SpaceX'],
    '2020-5-31': ['George Floyd', 'Jeffrey Epstein', 'Black Lives Matter', 'Breonna Taylor', 'SpaceX'],
    '2020-6-1': ['George Floyd', 'Jeffrey Epstein', 'Black Lives Matter', 'Breonna Taylor', 'SpaceX'],
    '2020-6-2': ['George Floyd', 'Jeffrey Epstein', 'Protests', 'Breonna Taylor', 'SpaceX'],
    '2020-6-3': ['George Floyd', 'Jeffrey Epstein', 'Protests', 'Breonna Taylor', 'SpaceX'],
    '2020-6-4': ['George Floyd', 'Jeffrey Epstein', 'Protests', 'Breonna Taylor', 'SpaceX'],
    '2020-6-5': ['George Floyd', 'Jeffrey Epstein', 'Protests', 'Breonna Taylor', 'Black Lives Matter'],
    '2020-6-6': ['George Floyd', 'Jeffrey Epstein', 'Protests', 'Breonna Taylor', 'Black Lives Matter'],
    '2020-6-7': ['George Floyd', 'Jeffrey Epstein', 'Protests', 'Breonna Taylor', 'Black Lives Matter'],
    '2020-6-8': ['George Floyd', 'Jeffrey Epstein', 'Protests', 'Breonna Taylor', 'Black Lives Matter'],
    '2020-6-9': ['George Floyd', 'Jeffrey Epstein', 'Protests', 'Breonna Taylor', 'Black Lives Matter'],
    '2020-6-10': ['George Floyd', 'Jeffrey Epstein', 'Protests', 'Breonna Taylor', 'Black Lives Matter'],
    '2020-6-11': ['George Floyd', 'Jeffrey Epstein', 'Protests', 'PS5', 'Black Lives Matter'],
    '2020-6-12': ['George Floyd', 'Jeffrey Epstein', 'Protests', 'PS5', 'Black Lives Matter'],
    '2020-6-13': ['George Floyd', 'Pandemic', 'Protests', 'PS5', 'Black Lives Matter'],
    '2020-6-14': ['George Floyd', 'Juneteenth', 'Protests', 'PS5', 'Black Lives Matter'],
    '2020-6-15': ['George Floyd', 'Juneteenth', 'Protests', 'PS5', 'Black Lives Matter'],
    '2020-6-16': ['George Floyd', 'Juneteenth', 'Protests', 'PS5', 'Black Lives Matter'],
    '2020-6-17': ['George Floyd', 'Juneteenth', 'Protests', 'PS5', 'Black Lives Matter'],
    '2020-6-18': ['George Floyd', 'Juneteenth', 'Bubba Wallace', 'PS5', 'Black Lives Matter'],
    '2020-6-19': ['George Floyd', 'Juneteenth', 'Bubba Wallace', 'PS5', 'Black Lives Matter'],
    '2020-6-20': ['George Floyd', 'Juneteenth', 'Bubba Wallace', 'PS5', 'Black Lives Matter'],
    '2020-6-21': ['George Floyd', 'Juneteenth', 'Bubba Wallace', 'PS5', 'Black Lives Matter'],
    '2020-6-22': ['George Floyd', 'Pandemic', 'Bubba Wallace', 'PS5', 'Black Lives Matter'],
    '2020-6-23': ['George Floyd', 'Pandemic', 'Bubba Wallace', 'PS5', 'Black Lives Matter'],
    '2020-6-24': ['George Floyd', 'Pandemic', 'Bubba Wallace', 'PS5', 'Black Lives Matter'],
    '2020-6-25': ['George Floyd', 'Pandemic', 'Bubba Wallace', 'PS5', 'Black Lives Matter'],
    '2020-6-26': ['George Floyd', 'Pandemic', 'Bubba Wallace', 'PS5', 'Black Lives Matter'],
    '2020-6-27': ['George Floyd', 'Pandemic', 'Bubba Wallace', 'PS5', 'Black Lives Matter'],
    '2020-6-28': ['George Floyd', 'Pandemic', 'Bubba Wallace', 'PS5', 'Black Lives Matter'],
    '2020-6-29': ['George Floyd', 'Pandemic', 'Bubba Wallace', 'PS5', 'Black Lives Matter'],
    '2020-6-30': ['George Floyd', 'Pandemic', 'Bubba Wallace', 'PS5', 'Black Lives Matter'],
    '2020-7-1': ['Naya Rivera', 'Pandemic', 'Bubba Wallace', 'PS5', 'Black Lives Matter'],
    '2020-7-2': ['Naya Rivera', 'Pandemic', 'Bubba Wallace', 'PS5', 'Black Lives Matter'],
    '2020-7-3': ['Naya Rivera', 'Pandemic', 'Bubba Wallace', 'PS5', 'Black Lives Matter'],
    '2020-7-4': ['Naya Rivera', 'Pandemic', 'Bubba Wallace', 'PS5', 'Black Lives Matter'],
    '2020-7-5': ['Naya Rivera', 'Pandemic', 'Kanye West', 'PS5', 'Black Lives Matter'],
    '2020-7-6': ['Naya Rivera', 'Kanye West', 'The Box', 'PS5', 'Black Lives Matter'],
    '2020-7-7': ['Naya Rivera', 'Kanye West', 'The Box', 'PS5', 'Black Lives Matter'],
    '2020-7-8': ['Naya Rivera', 'Kanye West', 'The Box', 'PS5', 'Black Lives Matter'],
    '2020-7-9': ['Naya Rivera', 'Kanye West', 'The Box', 'PS5', 'Black Lives Matter'],
    '2020-7-10': ['Naya Rivera', 'Kanye West', 'The Box', 'PS5', 'Black Lives Matter'],
    '2020-7-11': ['Naya Rivera', 'Kanye West', 'The Box', 'PS5', 'Black Lives Matter'],
    '2020-7-12': ['Naya Rivera', 'Kanye West', 'The Box', 'PS5', 'Black Lives Matter'],
    '2020-7-13': ['Naya Rivera', 'Kanye West', 'The Box', 'PS5', 'Black Lives Matter'],
    '2020-7-14': ['Naya Rivera', 'Kanye West', 'The Box', 'PS5', 'Black Lives Matter'],
    '2020-7-15': ['Naya Rivera', 'Kanye West', 'The Box', 'PS5', 'Black Lives Matter'],
    '2020-7-16': ['Naya Rivera', 'Kanye West', 'The Box', 'PS5', 'Black Lives Matter'],
    '2020-7-17': ['Naya Rivera', 'Kanye West', 'The Box', 'PS5', 'Black Lives Matter'],
    '2020-7-18': ['Naya Rivera', 'Kanye West', 'The Box', 'PS5', 'Black Lives Matter'],
    '2020-7-19': ['Naya Rivera', 'Kanye West', 'The Box', 'PS5', 'Black Lives Matter'],
    '2020-7-20': ['Naya Rivera', 'Kanye West', 'The Box', 'PS5', 'Black Lives Matter'],
    '2020-7-21': ['Naya Rivera', 'Kanye West', 'The Box', 'PS5', 'Black Lives Matter'],
    '2020-7-22': ['Joe Biden', 'Kanye West', 'The Box', 'PS5', 'Black Lives Matter'],
    '2020-7-23': ['Joe Biden', 'Kanye West', 'The Box', 'PS5', 'Black Lives Matter'],
    '2020-7-24': ['Joe Biden', 'Kanye West', 'The Box', 'Kamala Harris', 'Black Lives Matter'],
    '2020-7-25': ['Joe Biden', 'Kanye West', 'The Box', 'Kamala Harris', 'Black Lives Matter'],
    '2020-7-26': ['Joe Biden', 'Kanye West', 'The Box', 'Kamala Harris', 'Black Lives Matter'],
    '2020-7-27': ['Joe Biden', 'Kanye West', 'The Box', 'Kamala Harris', 'Black Lives Matter'],
    '2020-7-28': ['Joe Biden', 'Kanye West', 'The Box', 'Kamala Harris', 'Black Lives Matter'],
    '2020-7-29': ['Joe Biden', 'Kanye West', 'The Box', 'Kamala Harris', 'Black Lives Matter'],
    '2020-7-30': ['Joe Biden', 'Kanye West', 'The Box', 'Kamala Harris', 'Black Lives Matter'],
    '2020-7-31': ['Joe Biden', 'Kanye West', 'The Box', 'Kamala Harris', 'Black Lives Matter'],
    '2020-8-1': ['beirut', 'Joe Biden', 'Kamala Harris', 'WAP', 'Fall Guys'],
    '2020-8-2': ['beirut', 'Joe Biden', 'Kamala Harris', 'WAP', 'Fall Guys'],
    '2020-8-3': ['beirut', 'Joe Biden', 'Kamala Harris', 'WAP', 'Fall Guys'],
    '2020-8-4': ['beirut', 'Joe Biden', 'Kamala Harris', 'WAP', 'Fall Guys'],
    '2020-8-5': ['beirut', 'Joe Biden', 'Kamala Harris', 'WAP', 'Fall Guys'],
    '2020-8-6': ['beirut', 'Joe Biden', 'Kamala Harris', 'WAP', 'Fall Guys'],
    '2020-8-7': ['beirut', 'Joe Biden', 'Kamala Harris', 'WAP', 'Fall Guys'],
    '2020-8-8': ['beirut', 'Joe Biden', 'Kamala Harris', 'WAP', 'Fall Guys'],
    '2020-8-9': ['beirut', 'Joe Biden', 'Kamala Harris', 'WAP', 'Fall Guys'],
    '2020-8-10': ['beirut', 'Joe Biden', 'Kamala Harris', 'WAP', 'Fall Guys'],
    '2020-8-11': ['beirut', 'Joe Biden', 'Kamala Harris', 'WAP', 'Fall Guys'],
    '2020-8-12': ['beirut', 'Joe Biden', 'Kamala Harris', 'WAP', 'Fall Guys'],
    '2020-8-13': ['beirut', 'Joe Biden', 'Kamala Harris', 'WAP', 'Fall Guys'],
    '2020-8-14': ['beirut', 'Joe Biden', 'Kamala Harris', 'WAP', 'Fall Guys'],
    '2020-8-15': ['beirut', 'Joe Biden', 'Kamala Harris', 'WAP', 'Fall Guys'],
    '2020-8-16': ['Joe Biden', 'Kamala Harris', 'WAP', 'Chadwick Boseman', 'Hurricane Laura'],
    '2020-8-17': ['Joe Biden', 'Kamala Harris', 'WAP', 'Chadwick Boseman', 'Hurricane Laura'],
    '2020-8-18': ['Joe Biden', 'Kamala Harris', 'WAP', 'Chadwick Boseman', 'Hurricane Laura'],
    '2020-8-19': ['Joe Biden', 'Kamala Harris', 'WAP', 'Chadwick Boseman', 'Hurricane Laura'],
    '2020-8-20': ['Joe Biden', 'Jacob Blake', 'WAP', 'Chadwick Boseman', 'Hurricane Laura'],
    '2020-8-21': ['Joe Biden', 'Jacob Blake', 'WAP', 'Chadwick Boseman', 'Hurricane Laura'],
    '2020-8-22': ['Joe Biden', 'Jacob Blake', 'WAP', 'Chadwick Boseman', 'Hurricane Laura'],
    '2020-8-23': ['Joe Biden', 'Jacob Blake', 'WAP', 'Chadwick Boseman', 'Hurricane Laura'],
    '2020-8-24': ['Joe Biden', 'Jacob Blake', 'WAP', 'Chadwick Boseman', 'Hurricane Laura'],
    '2020-8-25': ['Joe Biden', 'Jacob Blake', 'WAP', 'Chadwick Boseman', 'Hurricane Laura'],
    '2020-8-26': ['Joe Biden', 'Jacob Blake', 'WAP', 'Chadwick Boseman', 'Hurricane Laura'],
    '2020-8-27': ['Joe Biden', 'Jacob Blake', 'WAP', 'Chadwick Boseman', 'Hurricane Laura'],
    '2020-8-28': ['Joe Biden', 'Jacob Blake', 'WAP', 'Chadwick Boseman', 'Hurricane Laura'],
    '2020-8-29': ['Zoom', 'Kamala Harris', 'Joe Biden', 'Chadwick Boseman', 'Hurricane Laura'],
    '2020-8-30': ['Zoom', 'Kamala Harris', 'Joe Biden', 'Chadwick Boseman', 'Hurricane Laura'],
    '2020-8-31': ['Zoom', 'Kamala Harris', 'Joe Biden', 'Chadwick Boseman', 'Hurricane Laura'],
    '2020-9-1': ['Zoom', 'Kamala Harris', 'Joe Biden', 'Chadwick Boseman', 'Hurricane Laura'],
    '2020-9-2': ['Zoom', 'Kamala Harris', 'Joe Biden', 'Chadwick Boseman', 'Hurricane Laura'],
    '2020-9-3': ['Zoom', 'Kamala Harris', 'Joe Biden', 'Chadwick Boseman', 'Hurricane Laura'],
    '2020-9-4': ['Zoom', 'Kamala Harris', 'Joe Biden', 'Chadwick Boseman', 'Hurricane Laura'],
    '2020-9-5': ['Zoom', 'Kamala Harris', 'Joe Biden', 'Chadwick Boseman', 'Hurricane Laura'],
    '2020-9-6': ['PS5', 'Breonna Taylor', 'Joe Biden', 'Among Us', 'Ruth Bader Ginsburg'],
    '2020-9-7': ['PS5', 'Breonna Taylor', 'Joe Biden', 'Among Us', 'Ruth Bader Ginsburg'],
    '2020-9-8': ['PS5', 'Breonna Taylor', 'Joe Biden', 'Among Us', 'Ruth Bader Ginsburg'],
    '2020-9-9': ['PS5', 'Breonna Taylor', 'Joe Biden', 'Among Us', 'Ruth Bader Ginsburg'],
    '2020-9-10': ['PS5', 'Breonna Taylor', 'Joe Biden', 'Among Us', 'Ruth Bader Ginsburg'],
    '2020-9-11': ['PS5', 'Breonna Taylor', 'Joe Biden', 'Among Us', 'Ruth Bader Ginsburg'],
    '2020-9-12': ['PS5', 'Breonna Taylor', 'Joe Biden', 'Among Us', 'Ruth Bader Ginsburg'],
    '2020-9-13': ['PS5', 'Breonna Taylor', 'Joe Biden', 'Among Us', 'Ruth Bader Ginsburg'],
    '2020-9-14': ['PS5', 'Breonna Taylor', 'Joe Biden', 'Among Us', 'Ruth Bader Ginsburg'],
    '2020-9-15': ['PS5', 'Breonna Taylor', 'Joe Biden', 'Among Us', 'Ruth Bader Ginsburg'],
    '2020-9-16': ['PS5', 'Breonna Taylor', 'Joe Biden', 'Among Us', 'Ruth Bader Ginsburg'],
    '2020-9-17': ['PS5', 'Breonna Taylor', 'Joe Biden', 'Among Us', 'Ruth Bader Ginsburg'],
    '2020-9-18': ['PS5', 'Breonna Taylor', 'Joe Biden', 'Among Us', 'Ruth Bader Ginsburg'],
    '2020-9-19': ['PS5', 'Breonna Taylor', 'Joe Biden', 'Among Us', 'Ruth Bader Ginsburg'],
    '2020-9-20': ['PS5', 'Breonna Taylor', 'Joe Biden', 'Among Us', 'Ruth Bader Ginsburg'],
    '2020-9-21': ['PS5', 'Breonna Taylor', 'Joe Biden', 'Among Us', 'Ruth Bader Ginsburg'],
    '2020-9-22': ['PS5', 'Breonna Taylor', 'Joe Biden', 'Among Us', 'Ruth Bader Ginsburg'],
    '2020-9-23': ['PS5', 'Breonna Taylor', 'Joe Biden', 'Among Us', 'Ruth Bader Ginsburg'],
    '2020-9-24': ['PS5', 'Breonna Taylor', 'Joe Biden', 'Among Us', 'Ruth Bader Ginsburg'],
    '2020-9-25': ['PS5', 'Breonna Taylor', 'Joe Biden', 'Among Us', 'Ruth Bader Ginsburg'],
    '2020-9-26': ['PS5', 'Breonna Taylor', 'Joe Biden', 'Among Us', 'Ruth Bader Ginsburg'],
    '2020-9-27': ['PS5', 'Breonna Taylor', 'Joe Biden', 'Among Us', 'Lakers'],
    '2020-9-28': ['PS5', 'Breonna Taylor', 'Joe Biden', 'Among Us', 'Lakers'],
    '2020-9-29': ['PS5', 'Breonna Taylor', 'Joe Biden', 'Among Us', 'Lakers'],
    '2020-9-30': ['PS5', 'Breonna Taylor', 'Joe Biden', 'Among Us', 'Lakers'],
    '2020-10-1': ['PS5', 'Eddie Van Halen', 'Joe Biden', 'Among Us', 'Lakers'],
    '2020-10-2': ['Amy Coney Barrett', 'Eddie Van Halen', 'Kamala Harris', 'Among Us', 'Lakers'],
    '2020-10-3': ['Amy Coney Barrett', 'Eddie Van Halen', 'Kamala Harris', 'Among Us', 'Lakers'],
    '2020-10-4': ['Amy Coney Barrett', 'Eddie Van Halen', 'Kamala Harris', 'Among Us', 'Lakers'],
    '2020-10-5': ['Amy Coney Barrett', 'Eddie Van Halen', 'Kamala Harris', 'Among Us', 'Lakers'],
    '2020-10-6': ['Amy Coney Barrett', 'Eddie Van Halen', 'Kamala Harris', 'Among Us', 'Lakers'],
    '2020-10-7': ['Amy Coney Barrett', 'Eddie Van Halen', 'Kamala Harris', 'Among Us', 'Lakers'],
    '2020-10-8': ['Amy Coney Barrett', 'Eddie Van Halen', 'Kamala Harris', 'Among Us', 'Lakers'],
    '2020-10-9': ['Amy Coney Barrett', 'Eddie Van Halen', 'Kamala Harris', 'Among Us', 'Lakers'],
    '2020-10-10': ['Amy Coney Barrett', 'Eddie Van Halen', 'Kamala Harris', 'Among Us', 'Lakers'],
    '2020-10-11': ['Amy Coney Barrett', 'Eddie Van Halen', 'Kamala Harris', 'Borat 2', 'iPhone 12'],
    '2020-10-12': ['Hunter Biden', 'Amy Coney Barrett', 'Kamala Harris', 'Borat 2', 'iPhone 12'],
    '2020-10-13': ['Hunter Biden', 'Amy Coney Barrett', 'Kamala Harris', 'Borat 2', 'iPhone 12'],
    '2020-10-14': ['Hunter Biden', 'Amy Coney Barrett', 'Kamala Harris', 'Borat 2', 'iPhone 12'],
    '2020-10-15': ['Hunter Biden', 'Amy Coney Barrett', 'Kamala Harris', 'Borat 2', 'iPhone 12'],
    '2020-10-16': ['Hunter Biden', 'Amy Coney Barrett', 'Kamala Harris', 'Borat 2', 'iPhone 12'],
    '2020-10-17': ['Hunter Biden', 'Amy Coney Barrett', 'Kamala Harris', 'Borat 2', 'iPhone 12'],
    '2020-10-18': ['Hunter Biden', 'Amy Coney Barrett', 'Kamala Harris', 'Borat 2', 'iPhone 12'],
    '2020-10-19': ['Hunter Biden', 'Amy Coney Barrett', 'Kamala Harris', 'Borat 2', 'iPhone 12'],
    '2020-10-20': ['Hunter Biden', 'Amy Coney Barrett', 'Kamala Harris', 'Borat 2', 'iPhone 12'],
    '2020-10-21': ['Hunter Biden', 'Amy Coney Barrett', 'Kamala Harris', 'Borat 2', 'iPhone 12'],
    '2020-10-22': ['Hunter Biden', 'Amy Coney Barrett', 'Kamala Harris', 'Borat 2', 'iPhone 12'],
    '2020-10-23': ['Hunter Biden', 'Cyberpunk 2077', 'Kamala Harris', 'Borat 2', 'iPhone 12'],
    '2020-10-24': ['Hunter Biden', 'Cyberpunk 2077', 'Kamala Harris', 'Election Day', 'Election Results'],
    '2020-10-25': ['Hunter Biden', 'Cyberpunk 2077', 'Kamala Harris', 'Election Day', 'Election Results'],
    '2020-10-26': ['Hunter Biden', 'Cyberpunk 2077', 'Kamala Harris', 'Election Day', 'Election Results'],
    '2020-10-27': ['Hunter Biden', 'Cyberpunk 2077', 'Kamala Harris', 'Election Day', 'Election Results'],
    '2020-10-28': ['Hunter Biden', 'Cyberpunk 2077', 'Kamala Harris', 'Election Day', 'Election Results'],
    '2020-10-29': ['Hunter Biden', 'Cyberpunk 2077', 'Kamala Harris', 'Election Day', 'Election Results'],
    '2020-10-30': ['Hunter Biden', 'Cyberpunk 2077', 'Kamala Harris', 'Election Day', 'Election Results'],
    '2020-10-31': ['Hunter Biden', 'Cyberpunk 2077', 'Kamala Harris', 'Election Day', 'Election Results'],
    '2020-11-1': ['PS5', 'Cyberpunk 2077', 'Kamala Harris', 'Election Day', 'Election Results'],
    '2020-11-2': ['PS5', 'Xbox X', 'Kamala Harris', 'Election Day', 'Election Results'],
    '2020-11-3': ['PS5', 'Xbox X', 'Kamala Harris', 'Election Day', 'Election Results'],
    '2020-11-4': ['PS5', 'Xbox X', 'Kamala Harris', 'Election Day', 'Election Results'],
    '2020-11-5': ['PS5', 'Xbox X', 'Kamala Harris', 'Election Day', 'Election Results'],
    '2020-11-6': ['PS5', 'Xbox X', 'Kamala Harris', 'Election Day', 'Election Results'],
    '2020-11-7': ['PS5', 'Xbox X', 'Kamala Harris', 'Election Day', 'Election Results'],
    '2020-11-8': ['PS5', 'Xbox X', 'Kamala Harris', 'Election Day', 'Election Results'],
    '2020-11-9': ['PS5', 'Xbox X', 'Kamala Harris', 'Election Day', 'Election Results'],
    '2020-11-10': ['PS5', 'Xbox X', 'Kamala Harris', 'Election Day', 'Election Results'],
    '2020-11-11': ['PS5', 'Xbox X', 'Kamala Harris', 'Election Day', 'Election Results'],
    '2020-11-12': ['PS5', 'Xbox X', 'Kamala Harris', 'Election Day', 'Election Results'],
    '2020-11-13': ['PS5', 'Xbox X', 'Kamala Harris', 'Election Day', 'Election Results'],
    '2020-11-14': ['PS5', 'Xbox X', 'Kamala Harris', 'Election Day', 'Election Results'],
    '2020-11-15': ['PS5', 'Xbox X', 'The Mandalorian', 'UFC', 'Covid Vaccine'],
    '2020-11-16': ['PS5', 'Xbox X', 'The Mandalorian', 'UFC', 'Covid Vaccine'],
    '2020-11-17': ['PS5', 'Xbox X', 'The Mandalorian', 'UFC', 'Covid Vaccine'],
    '2020-11-18': ['PS5', 'Xbox X', 'The Mandalorian', 'UFC', 'Covid Vaccine'],
    '2020-11-19': ['PS5', 'Xbox X', 'The Mandalorian', 'UFC', 'Covid Vaccine'],
    '2020-11-20': ['PS5', 'Xbox X', 'The Mandalorian', 'UFC', 'Covid Vaccine'],
    '2020-11-21': ['PS5', 'Xbox X', 'The Mandalorian', 'UFC', 'Covid Vaccine'],
    '2020-11-22': ['PS5', 'Xbox X', 'The Mandalorian', 'UFC', 'Covid Vaccine'],
    '2020-11-23': ['PS5', 'Xbox X', 'The Mandalorian', 'UFC', 'Covid Vaccine'],
    '2020-11-24': ['PS5', 'Xbox X', 'The Mandalorian', 'UFC', 'Covid Vaccine'],
    '2020-11-25': ['PS5', 'Xbox X', 'The Mandalorian', 'UFC', 'Covid Vaccine'],
    '2020-11-26': ['PS5', 'Xbox X', 'The Mandalorian', 'UFC', 'Covid Vaccine'],
    '2020-11-27': ['Covid Vaccine', 'Xbox X', 'The Mandalorian', 'UFC', 'Mike Tyson'],
    '2020-11-28': ['Covid Vaccine', 'Xbox X', 'The Mandalorian', 'UFC', 'Mike Tyson'],
    '2020-11-29': ['Covid Vaccine', 'Xbox X', 'The Mandalorian', 'UFC', 'Mike Tyson'],
    '2020-11-30': ['Covid Vaccine', 'Xbox X', 'The Mandalorian', 'UFC', 'Mike Tyson'],
    '2020-12-1': ['Covid Vaccine', 'Xbox X', 'The Mandalorian', 'UFC', 'Mike Tyson'],
    '2020-12-2': ['Covid Vaccine', 'Xbox X', 'The Mandalorian', 'UFC', 'Mike Tyson'],
    '2020-12-3': ['Covid Vaccine', 'Xbox X', 'The Mandalorian', 'UFC', 'Mike Tyson'],
    '2020-12-4': ['Covid Vaccine', 'Xbox X', 'The Mandalorian', 'UFC', 'Mike Tyson'],
    '2020-12-5': ['Covid Vaccine', 'Xbox X', 'The Mandalorian', 'UFC', 'Mike Tyson'],
    '2020-12-6': ['Covid Vaccine', 'Xbox X', 'The Mandalorian', 'UFC', 'Mike Tyson'],
    '2020-12-7': ['Covid Vaccine', 'Stimulus Check', 'The Mandalorian', 'UFC', 'Mike Tyson'],
    '2020-12-8': ['Covid Vaccine', 'Stimulus Check', 'The Mandalorian', 'UFC', 'Mike Tyson'],
    '2020-12-9': ['Covid Vaccine', 'Stimulus Check', 'The Mandalorian', 'UFC', 'Mike Tyson'],
    '2020-12-10': ['Covid Vaccine', 'Stimulus Check', 'The Mandalorian', 'UFC', 'Mike Tyson'],
    '2020-12-11': ['Covid Vaccine', 'Stimulus Check', 'The Mandalorian', 'UFC', 'Mike Tyson'],
    '2020-12-12': ['Covid Vaccine', 'Stimulus Check', 'The Mandalorian', 'UFC', '2021'],
    '2020-12-13': ['Covid Vaccine', 'Stimulus Check', 'The Mandalorian', 'UFC', '2021'],
    '2020-12-14': ['Covid Vaccine', 'Stimulus Check', 'The Mandalorian', 'UFC', '2021'],
    '2020-12-15': ['Covid Vaccine', 'Stimulus Check', 'The Mandalorian', 'UFC', '2021'],
    '2020-12-16': ['Covid Vaccine', 'Stimulus Check', 'The Mandalorian', 'UFC', '2021'],
    '2020-12-17': ['Covid Vaccine', 'Stimulus Check', 'The Mandalorian', 'UFC', '2021'],
    '2020-12-18': ['Covid Vaccine', 'Stimulus Check', 'The Mandalorian', 'UFC', '2021'],
    '2020-12-19': ['Covid Vaccine', 'Stimulus Check', 'The Mandalorian', 'UFC', '2021'],
    '2020-12-20': ['Covid Vaccine', 'Stimulus Check', 'The Mandalorian', 'UFC', '2021'],
    '2020-12-21': ['Covid Vaccine', 'Stimulus Check', 'The Mandalorian', 'UFC', '2021'],
    '2020-12-22': ['Covid Vaccine', 'Stimulus Check', 'The Mandalorian', 'UFC', '2021'],
    '2020-12-23': ['Covid Vaccine', 'Stimulus Check', 'The Mandalorian', 'UFC', '2021'],
    '2020-12-24': ['Covid Vaccine', 'Stimulus Check', 'The Mandalorian', 'New Year', '2021'],
    '2020-12-25': ['Covid Vaccine', 'Stimulus Check', 'The Mandalorian', 'New Year', '2021'],
    '2020-12-26': ['Covid Vaccine', 'Stimulus Check', 'The Mandalorian', 'New Year', '2021'],
    '2020-12-27': ['Covid Vaccine', 'Stimulus Check', 'The Mandalorian', 'New Year', '2021'],
    '2020-12-28': ['Covid Vaccine', 'Stimulus Check', 'The Mandalorian', 'New Year', '2021'],
    '2020-12-29': ['Covid Vaccine', 'Stimulus Check', 'The Mandalorian', 'New Year', '2021'],
    '2020-12-30': ['Covid Vaccine', 'Stimulus Check', 'The Mandalorian', 'New Year', '2021'],
    '2020-12-31': ['Covid Vaccine', 'Stimulus Check', 'The Mandalorian', 'New Year', '2021']
}


// dot formatted geo codes
const dotGeos = [
    "US.MA",
    "US.MN",
    "US.MT",
    "US.ND",
    "US.HI",
    "US.ID",
    "US.WA",
    "US.AZ",
    "US.CA",
    "US.CO",
    "US.NV",
    "US.NM",
    "US.OR",
    "US.UT",
    "US.AR",
    "US.IA",
    "US.KS",
    "US.MO",
    "US.NE",
    "US.OK",
    "US.SD",
    "US.LA",
    "US.TX",
    "US.CT",
    "US.NH",
    "US.RI",
    "US.VT",
    "US.AL",
    "US.FL",
    "US.GA",
    "US.MS",
    "US.SC",
    "US.IL",
    "US.IN",
    "US.KY",
    "US.NC",
    "US.OH",
    "US.TN",
    "US.VA",
    "US.WI",
    "US.WV",
    "US.MD",
    "US.NJ",
    "US.NY",
    "US.PA",
    "US.ME",
    "US.MI",
    "US.AK",
    "US.DC",
    "US.WY",
    "US.DE"
];

// dash formatted geo codes
const dashGeos = [
    "US-MA",
    "US-MN",
    "US-MT",
    "US-ND",
    "US-HI",
    "US-ID",
    "US-WA",
    "US-AZ",
    "US-CA",
    "US-CO",
    "US-NV",
    "US-NM",
    "US-OR",
    "US-UT",
    "US-AR",
    "US-IA",
    "US-KS",
    "US-MO",
    "US-NE",
    "US-OK",
    "US-SD",
    "US-LA",
    "US-TX",
    "US-CT",
    "US-NH",
    "US-RI",
    "US-VT",
    "US-AL",
    "US-FL",
    "US-GA",
    "US-MS",
    "US-SC",
    "US-IL",
    "US-IN",
    "US-KY",
    "US-NC",
    "US-OH",
    "US-TN",
    "US-VA",
    "US-WI",
    "US-WV",
    "US-MD",
    "US-NJ",
    "US-NY",
    "US-PA",
    "US-ME",
    "US-MI",
    "US-AK",
    "US-DC",
    "US-WY",
    "US-DE"
];

const pos = {
  "US.MA": {
      "label": {
          "x": 1,
          "y": -0.1,
          "fontSize": 18,
          "positionMode": "relative"
      }
  },
  "US.MN": {
      "middle-y": 0.4,
      "label": {
          "minFontSize": "18",
          "width": "110",
          "wordWrap": "break-word",
          "vAlign": "middle"
      }
  },
  "US.MT": {
      "label": {
          "minFontSize": "18",
          "width": "140",
          "wordWrap": "break-word",
          "vAlign": "middle"
      }
  },
  "US.ND": {
      "label": {
          "minFontSize": "18",
          "width": "110",
          "wordWrap": "break-word",
          "vAlign": "middle"
      }
  },
  "US.HI": {
      "label": {
          "minFontSize": "18",
          "width": "110",
          "wordWrap": "break-word",
          "vAlign": "middle"
      }
  },
  "US.ID": {
      "label": {
          "minFontSize": "18",
          "width": "110",
          "wordWrap": "break-word",
          "vAlign": "middle"
      }
  },
  "US.WA": {
      "label": {
          "minFontSize": "18",
          "width": "110",
          "wordWrap": "break-word",
          "vAlign": "middle"
      }
  },
  "US.AZ": {
      "label": {
          "minFontSize": "18",
          "width": "110",
          "wordWrap": "break-word",
          "vAlign": "middle"
      }
  },
  "US.CA": {
      "label": {
          "minFontSize": "18",
          "width": "110",
          "wordWrap": "break-word",
          "vAlign": "middle"
      }
  },
  "US.CO": {
      "label": {
          "minFontSize": "18",
          "width": "110",
          "wordWrap": "break-word",
          "vAlign": "middle"
      }
  },
  "US.NV": {
      "label": {
          "minFontSize": "18",
          "width": "110",
          "wordWrap": "break-word",
          "vAlign": "middle"
      }
  },
  "US.NM": {
      "label": {
          "minFontSize": "18",
          "width": "110",
          "wordWrap": "break-word",
          "vAlign": "middle"
      }
  },
  "US.OR": {
      "label": {
          "minFontSize": "18",
          "width": "110",
          "wordWrap": "break-word",
          "vAlign": "middle"
      }
  },
  "US.UT": {
      "label": {
          "minFontSize": "18",
          "width": "110",
          "wordWrap": "break-word",
          "vAlign": "middle"
      }
  },
  "US.AR": {
      "label": {
          "minFontSize": "18",
          "width": "110",
          "wordWrap": "break-word",
          "vAlign": "middle"
      }
  },
  "US.IA": {
      "label": {
          "minFontSize": "18",
          "width": "110",
          "wordWrap": "break-word",
          "vAlign": "middle"
      }
  },
  "US.KS": {
      "middle-x": 0.5,
      "label": {
          "minFontSize": "18",
          "width": "110",
          "wordWrap": "break-word",
          "vAlign": "middle"
      }
  },
  "US.MO": {
      "label": {
          "minFontSize": "18",
          "width": "110",
          "wordWrap": "break-word",
          "vAlign": "middle"
      }
  },
  "US.NE": {
      "label": {
          "minFontSize": "18",
          "width": "110",
          "wordWrap": "break-word",
          "vAlign": "middle"
      }
  },
  "US.OK": {
      "middle-x": 0.6,
      "label": {
          "minFontSize": "18",
          "width": "110",
          "wordWrap": "break-word",
          "vAlign": "middle"
      }
  },
  "US.SD": {
      "label": {
          "minFontSize": "18",
          "width": "110",
          "wordWrap": "break-word",
          "vAlign": "middle"
      }
  },
  "US.LA": {
      "middle-y": 0.7,
      "label": {
          "minFontSize": "18",
          "width": "110",
          "wordWrap": "break-word",
          "vAlign": "middle"
      }
  },
  "US.TX": {
      "middle-x": 0.6,
      "label": {
          "minFontSize": "18",
          "width": "150",
          "wordWrap": "break-word",
          "vAlign": "middle"
      }
  },
  "US.CT": {
      "label": {
          "x": 1.3,
          "y": 0.8,
          "fontSize": 18,
          "positionMode": "relative"
      }
  },
  "US.NH": {
      "label": {
          "x": -1.5,
          "y": -0.6,
          "fontSize": 18,
          "positionMode": "relative"
      }
  },
  "US.RI": {
      "label": {
          "x": 3.5,
          "y": -0.2,
          "fontSize": 18,
          "positionMode": "relative"
      }
  },
  "US.VT": {
      "label": {
          "x": -1,
          "y": -0.1,
          "fontSize": 18,
          "positionMode": "relative"
      }
  },
  "US.AL": {
      "middle-y": "0.4",
      "label": {
          "minFontSize": "18",
          "width": "100",
          "wordWrap": "break-word",
          "vAlign": "middle"
      }
  },
  "US.FL": {
      "label": {
          "minFontSize": "18",
          "width": "110",
          "wordWrap": "break-word",
          "vAlign": "middle"
      }
  },
  "US.GA": {
      "middle-x": "0.6",
      "middle-y": "0.7",
      "label": {
          "minFontSize": "18",
          "width": "110",
          "wordWrap": "break-word",
          "vAlign": "middle"
      }
  },
  "US.MS": {
      "label": {
          "fontSize": "14",
          "minFontSize": "14",
          "width": "90",
          "wordWrap": "break-word",
          "vAlign": "middle"
      }
  },
  "US.SC": {
      "middle-y": 0.5,
      "label": {
          "minFontSize": "18",
          "width": "110",
          "wordWrap": "break-word",
          "vAlign": "middle"
      }
  },
  "US.IL": {
      "middle-y": 0.6,
      "label": {
          "minFontSize": "14",
          "width": "90",
          "wordWrap": "break-word",
          "vAlign": "middle"
      }
  },
  "US.IN": {
      "label": {
          "minFontSize": "14",
          "width": "90",
          "wordWrap": "break-word",
          "vAlign": "middle"
      }
  },
  "US.KY": {
      "middle-y": 0.7,
      "label": {
          "minFontSize": "18",
          "width": "110",
          "wordWrap": "break-word",
          "vAlign": "middle"
      }
  },
  "US.NC": {
      "label": {
          "minFontSize": "18",
          "width": "110",
          "wordWrap": "break-word",
          "vAlign": "middle"
      }
  },
  "US.OH": {
      "label": {
          "minFontSize": "14",
          "width": "90",
          "wordWrap": "break-word",
          "vAlign": "middle"
      }
  },
  "US.TN": {
      "middle-y": 0.7,
      "label": {
          "minFontSize": "18",
          "width": "110",
          "wordWrap": "break-word",
          "vAlign": "middle"
      }
  },
  "US.VA": {
      "middle-y": 0.7,
      "label": {
          "minFontSize": "18",
          "width": "110",
          "wordWrap": "break-word",
          "vAlign": "middle"
      }
  },
  "US.WI": {
      "label": {
          "minFontSize": "18",
          "width": "110",
          "wordWrap": "break-word",
          "vAlign": "middle"
      }
  },
  "US.WV": {
      "middle-x": 0.4,
      "middle-y": 0.6,
      "label": {
          "minFontSize": "14",
          "width": "90",
          "wordWrap": "break-word",
          "vAlign": "middle"
      }
  },
  "US.MD": {
      "label": {
          "x": 1.3,
          "y": 1,
          "fontSize": 18,
          "positionMode": "relative"
      }
  },
  "US.NJ": {
      "label": {
          "x": 2,
          "y": 0.5,
          "fontSize": 18,
          "positionMode": "relative"
      }
  },
  "US.NY": {
      "middle-x": 0.5,
      "middle-y": 0.6,
      "label": {
          "minFontSize": "18",
          "width": "110",
          "wordWrap": "break-word",
          "vAlign": "middle"
      }
  },
  "US.PA": {
      "label": {
          "minFontSize": "18",
          "width": "110",
          "wordWrap": "break-word",
          "vAlign": "middle"
      }
  },
  "US.ME": {
      "label": {
          "minFontSize": "18",
          "width": "110",
          "wordWrap": "break-word",
          "vAlign": "middle"
      }
  },
  "US.MI": {
      "label": {
          "minFontSize": "18",
          "width": "110",
          "wordWrap": "break-word",
          "vAlign": "middle"
      }
  },
  "US.AK": {
      "label": {
          "minFontSize": "18",
          "width": "110",
          "wordWrap": "break-word",
          "vAlign": "middle"
      }
  },
  "US.DC": {
      "label": {
          "x": 14,
          "y": 8,
          "fontSize": 18,
          "positionMode": "relative"
      }
  },
  "US.WY": {
      "label": {
          "minFontSize": "18",
          "width": "110",
          "wordWrap": "break-word",
          "vAlign": "middle"
      }
  },
  "US.DE": {
      "label": {
          "x": 1.3,
          "y": 0.6,
          "fontSize": 18,
          "positionMode": "relative"
      }
  }
}

module.exports = {
    daysOfYear,
    allSearchTerms,
    dashGeos,
    dotGeos,
    pos
}

