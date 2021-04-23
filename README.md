# [2020 Rewind](https://kaycbas.github.io/2020Rewind/)

2020 Rewind is an interactive map of the top trending daily Google searches for every US state in 2020, built using HTML, CSS, Javascript, and AnyChart.

![Rewind](https://github.com/kaycbas/2020Rewind/blob/main/assets/readme/rewind.gif)

## How to Use:

Drag the slider to traverse the top trending searches throughout 2020, or click the play button to watch it like a movie with an epic Hans Zimmer soundtrack.

## Built with:

- HTML and CSS for visual structure
- Javascript for logic and data gathering
- google-trends-api for data gathering
- AnyChart JS Map Charting Library

## Data Gathering:

Gathering accurate data for the top trending Google searches was a challenging process. Here is the process that was ultimately developed:

### 1.	Compile a list of candidate search terms
The first step was to compile a large list of all the search terms and topics that trended in 2020. Google Trends does not have an official api, and the tools it does provide do not support querying directly for top searched terms. Therefore, this list was compiled manually from Google’s 2020 Year in Search summary and by using the Wayback Machine to view the Daily Trending Searches page at various points throughout 2020.

### 2.	Calculate the top 5 trending terms in the US for each day
The list compiled in the previous step was then inputted into a script that calculated the top 5 trending terms in the US for each day in 2020. Because Google Trends only supports comparing relative search interest of 5 terms at a time, and there is no way to query for absolute search voluem, many comparisons had to be made to determine which of the terms from this large list were the 5 most popular on any given day.

### 3.	Calculate which of these 5 terms was the most popular for each state
The top 5 trending search terms in the US for each day was fed into a second script that would calculate their relative search interest in each state. This second script would then output the top trending term in each state for each day in 2020.

### 4.	Format data for visualization
The final step was to format the trend data properly to be fed into the AnyCharts mapping library.

## Future Features:
- Automate ongoing data gathering so the map stays up to date with latest trends.
