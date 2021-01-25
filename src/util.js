// Create formatted daysOfYear array
let daysOfYear = [];
for (let d = new Date(2020, 0, 1); d <= new Date(2020, 11, 31); d.setDate(d.getDate() + 1)) {
    let year = d.getFullYear();
    let month = d.getMonth() + 1;
    let day = d.getDate();
    let formattedDate = [year, month, day].join('-');
    daysOfYear.push(formattedDate);
}

module.exports = {
    daysOfYear,
}

