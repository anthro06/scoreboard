let league = "";
let userDate = "";

function toggleNav() {
    let x = document.getElementById('nav');
    let lineBreak = document.getElementsByClassName('spanBreak');
    if (x.className === "top-nav font-nav") {
        x.className += " responsive";
        for (let i = 0; i < lineBreak.length; i++) {
            lineBreak[i].innerHTML = "<br>";
        }
    } else {
        x.className = "top-nav font-nav";
        for (let i = 0; i < lineBreak.length; i++) {
            lineBreak[i].innerHTML = "";
        }
    }
  }

async function getData(selectedLeague = league, selectedDate = userDate) {
    console.log(`Fetching data for Date: ${selectedDate}, League: ${selectedLeague}`);
    
    if (!selectedLeague) {
        console.error("League must be selected.")
        return;
    }

    league = selectedLeague;
    userDate = selectedDate;
    
    let date = userDate.replace(/-/g,"");

    let formattedDate = date;

    const leaguePaths = {
        MLB: "baseball/mlb",
        NFL: "football/nfl",
        WNBA: "basketball/wnba",
        NBA: "basketball/nba"
    };

    const leaguePath = leaguePaths[league];

    const url = "https://site.api.espn.com/apis/site/v2/sports/" + leaguePath  + "/scoreboard?dates=" + formattedDate + "&limit=200";

        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const data = await response.json();

        const leagueGames = data.events.map(event => {
            const geoBroadcasts = event.competitions[0].geoBroadcasts || [];
            return {
                gameName: event.name,
                gameDate: event.competitions[0].date,
                gameStatus: event.competitions[0].status.type.shortDetail,
                competitors: event.competitions[0].competitors.map(competitor => {
                    return {
                        name: competitor.team.displayName,
                        logo: competitor.team.logo,
                        homeAway: competitor.homeAway
                    };
                }),
                geoBroadcasts: geoBroadcasts 
            };
        });  

        return(leagueGames);
};

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('leagueForm').addEventListener('submit', function(event) {
        event.preventDefault();
        let league = document.getElementById('league').value;
        let userDate = document.getElementById('userDate').value;

        let x = document.getElementById('nav');
        if (x.className === "top-nav font-nav") {
            x.className += " responsive";
        } else {
            x.className = "top-nav font-nav";
        }

        // If the user does not select a date from the form, default to today's date.
        if (!userDate) {
            console.error("No date selected by the user, using default of today's date.");
            userDate = new Date();

            const year = userDate.getFullYear();
            const month = String(userDate.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed, so add 1
            const day = String(userDate.getDate()).padStart(2, '0');

            userDate = `${year}${month}${day}`;
        };

        // Fetch and display data for the selected game
        getData(league, userDate).then(gameData => {
            if (gameData) {
                
                buildWebPage(gameData);
            } else {
                console.error('No schedule data found.');
                // Clear previous data, if any and display a message at the top of the window
                document.getElementById('leagueTitle').innerHTML = `No Schedule Found for the ${league} for the requested date. <br> Please Select Again.`;
                document.getElementById('leagueInfo').innerHTML = "";

            }
        });
    });
});

function buildWebPage(gameData) {
    // Clear any previous data on the page
    document.getElementById('leagueTitle').innerHTML = '';

    if (!gameData) {
        console.error("No game data provided.");
        return;
    };
    console.log(gameData);

    if (gameData.length < 1) {
        console.error('No schedule data found.');
        document.getElementById('leagueTitle').innerHTML = `<h1>No Schedule Found for the ${league} on the requested date. <br> Please Select Again.</h2>`;
        document.getElementById('leagueInfo').innerHTML = "";
        document.getElementById('scheduleTable').innerHTML = "";
        return;
    };

    let formatDate = new Date(gameData[0].gameDate).toDateString();
    
    let leagueTitle = document.getElementById('leagueTitle')
    
    leagueTitle.setAttribute('class', 'league-title title-display');
    leagueTitle.innerHTML = `<img src="https://a.espncdn.com/i/teamlogos/leagues/500/${league}.png" class="league-info-img" alt="${league} logo"><h2>${league} schedule for ${formatDate}</h2>`

    const headers = ['Visiting Team', 'Home Team', 'Game Time', 'Where to Watch', 'Where to Stream'];
    buildTable(headers, gameData);

    function buildTable(headers, gameData) {
        const scheduleDiv = document.getElementById('scheduleTable');
        scheduleDiv.innerHTML = '';

        const table = document.createElement('table');
       
        table.setAttribute('class', 'schedule-table');
        table.setAttribute('class', `${league}-table`)
        table.setAttribute('id', 'scheduleTable');
        table.setAttribute('aria-label', 'Schedule Summary Table');

        const headerRow = table.createTHead().insertRow(0);

        headers.forEach(headerText => {
            const th = document.createElement('th');
            th.textContent = headerText;
            th.setAttribute('class', 'col-headers');
            th.setAttribute('class', 'x-wide');
            headerRow.appendChild(th);
        });

        const tbody = table.createTBody();

        for (let i = 0; i < gameData.length; i++) {

            let gameName = gameData[i].gameName;
            
            let homeTeamLogo = gameData[i].competitors[0].logo;
            let homeTeamName = gameData[i].competitors[0].name;

            let visitorTeamLogo = gameData[i].competitors[1].logo;
            let visitorTeamName = gameData[i].competitors[1].name;
            
            let gameDate = gameData[i].gameDate;
            gameDate = new Date(gameDate).toLocaleTimeString([], {hour: 'numeric', minute: '2-digit'});

            let natlBcst = gameData[i].geoBroadcasts
                .filter(broadcast => broadcast.type.id === '1' && broadcast.market.id === '1' || broadcast.market.id === '2' || broadcast.market.id === '3')
                .map(broadcast => broadcast.media.shortName);

            let stream = gameData[i].geoBroadcasts
            .filter(broadcast => broadcast.type.id === '4')
            .map(broadcast => broadcast.media.shortName);
            
            const createRow = (gameName, gameDate) => {
                const row = tbody.insertRow();
                row.setAttribute('class', 'sch-row');

                const vTeam = row.insertCell();
                vTeam.innerHTML = `<img src="${visitorTeamLogo}" alt="${visitorTeamName} logo"><br>${visitorTeamName}`;

                const hTeam = row.insertCell();
                hTeam.innerHTML = `<img src="${homeTeamLogo}" alt="${homeTeamName} logo"><br>${homeTeamName}`;
                
                const dateCell = row.insertCell();
                dateCell.textContent = gameDate;
                
                const natlBcstCell = row.insertCell();
                if (natlBcst.length > 0) {
                    console.log('National Bcst:', natlBcst);
                    natlBcstCell.innerHTML = natlBcst.join(', ');
                } else {
                    natlBcstCell.innerHTML = 'No National Broadcast Available'
                };

                const streamCell = row.insertCell();
                if (stream.length > 0) {
                    console.log('Stream:', stream);
                    streamCell.innerHTML = stream.join(', ');
                } else {
                    streamCell.innerHTML = 'No Streaming Available'
                };
                
            };

            createRow(gameName, gameDate);

        };    

            scheduleDiv.appendChild(table);

    };
};
