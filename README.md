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

Gathering accurate data for the top trending Google searches was a challenging process. A few factors contributed to this difficulty:

-	Google does not offer an API for querying search trends, they only provide the Google Trends website. 
    -	This meant that, in order to automate the process, I had to use a 3rd party API that hits the Google Trends website.
-	The Google Trends website does not provide absolute search volume or tell you the most trending search term, it will only tell you the relative search volume between terms. 
    -	This meant I had to use comparisons to determine each day’s top search term, and then compare every other search term to this benchmark term to gauge their relative interest.
-	Google Trends only allows you to compare 5 search terms at a time. 
    -	When ordering a large set of n terms by their search interest, at least n/5 comparisons had to be made.
-	Google Trends limits the number of requests per minute you can make to the site, dramatically slowing data acquisition
    -	As a result, my scripts had to sleep between each request and would take hours to run.

Ultimately, I developed the following data acquisition process: 

1.	Compile a large list of all the search terms and topics that trended in 2020. To do this, I used Google’s 2020 Year in Search summary and the Wayback Machine to view Google’s Daily Trending Searches throughout 2020. This step was performed manually.
2.	Input this compiled list into a script that calculates and outputs the top 5 trending terms in the US for each day in 2020. The script uses the google-trends-api and a system of repeatedly comparing the relative search interest of 4 terms to a benchmark term in order to determine the top trending terms.
3.	Input this list of each day’s top 5 trending US searches into a second script that calculates their relative search interest across all the states, again using the google-trends-api.
4.	Display results with the AnyChart US map.


## Future Features:
- Automate ongoing data gathering so the map stays up to date with latest trends
