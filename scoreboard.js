let league = "";
let userTeam = "";
let userDate = "";
let hTeamScore = "";
let vTeamScore = "";
let gameStatus = "";

const selForm = document.getElementById('teamForm'),
selOrder = [ 'league', 'userTeam' ],
treeData = 
[     { id:  1, name: 'NFL',                    parentID:  0,   value: 'NFL'}
    , { id:  2, name: 'MLB',                    parentID:  0,   value: 'MLB'}
    , { id:  3, name: 'WNBA',                   parentID:  0,   value: 'WNBA'}
    , { id:  4, name: 'NBA',                    parentID:  0,   value: 'NBA'}
    , { id:  'ARI', name: 'Arizona Cardinals',      parentID: 1,   value: 'ARI'}
    , { id:  'ATL', name: 'Atlanta Falcons',        parentID: 1,   value: 'ATL'}
    , { id:  'BAL', name: 'Baltimore Ravens',       parentID: 1,   value: 'BAL'}
    , { id:  'BUF', name: 'Buffalo Bills',          parentID: 1,   value: 'BUF'}
    , { id:  'CAR', name: 'Carolina Panthers',      parentID: 1,   value: 'CAR'}
    , { id: 'CHI', name: 'Chicago Bears',          parentID: 1,   value: 'CHI'}
    , { id: 'CIN', name: 'Cincinnati Bengals',     parentID: 1,   value: 'CIN'}
    , { id: 'CLE', name: 'Cleveland Browns',       parentID: 1,   value: 'CLE'}
    , { id: 'DAL', name: 'Dallas Cowboys',         parentID: 1,   value: 'DAL'}
    , { id: 'DEN', name: 'Denver Broncos',         parentID: 1,   value: 'DEN'}
    , { id: 'DET', name: 'Detroit Lions',          parentID: 1,   value: 'DET'}
    , { id: 'GB', name: 'Green Bay Packers',      parentID: 1,   value: 'GB'}
    , { id: 'HOU', name: 'Houston Texans',         parentID: 1,   value: 'HOU'}
    , { id: 'IND', name: 'Indianapolis Colts',     parentID: 1,   value: 'IND'}
    , { id: 'JAX', name: 'Jacksonville Jaguars',   parentID: 1,   value: 'JAX'}
    , { id: 'KC', name: 'Kansas City Chiefs',     parentID: 1,   value: 'KC'}
    , { id: 'LV', name: 'Las Vegas Raiders',      parentID: 1,   value: 'LV'}
    , { id: 'LAC', name: 'Las Angeles Chargers',   parentID: 1,   value: 'LAC'}
    , { id: 'LAR', name: 'Los Angeles Rams',       parentID: 1,   value: 'LAR'}
    , { id: 'MIA', name: 'Miami Dolphins',         parentID: 1,   value: 'MIA'}
    , { id: 'MIN', name: 'Minnesota Vikings',      parentID: 1,   value: 'MIN'}
    , { id: 'NE', name: 'New England Patriots',   parentID: 1,   value: 'NE'}
    , { id: 'NO', name: 'New Orleans Saits',      parentID: 1,   value: 'NO'}
    , { id: 'NYG', name: 'New York Giants',        parentID: 1,   value: 'NYG'}
    , { id: 'NYJ', name: 'New York Jets',          parentID: 1,   value: 'NYJ'}
    , { id: 'PHI', name: 'Philadelphia Eagles',    parentID: 1,   value: 'PHI'}
    , { id: 'PIT', name: 'Pittsburg Steelers',     parentID: 1,   value: 'PIT'}
    , { id: 'SF', name: 'San Francisco 49ers',    parentID: 1,   value: 'SF'}
    , { id: 'SEA', name: 'Seattle Seahawks',       parentID: 1,   value: 'SEA'}
    , { id: 'TB', name: 'Tampa Bay Buccaneers',   parentID: 1,   value: 'TB'}
    , { id: 'TEN', name: 'Tennessee Titans',       parentID: 1,   value: 'TEN'}
    , { id: 'WSH', name: 'Washington Commanders',  parentID: 1,   value: 'WSH'}
    , {id: 'ARI', name: 'Arizona Diamondbacks', parentID: 2, value: 'ARI'}
    , {id: 'ATL', name: 'Atlanta Braves', parentID: 2, value: 'ATL'}
    , {id: 'BAL', name: 'Baltimore Orioles', parentID: 2, value: 'BAL'}
    , {id: 'BOS', name: 'Boston Red Sox', parentID: 2, value: 'BOS'}
    , {id: 'CHC', name: 'Chicago Cubs', parentID: 2, value: 'CHC'}
    , {id: 'CHW', name: 'Chicago White Sox', parentID: 2, value: 'CHW'}
    , {id: 'CIN', name: 'Cincinnati Reds', parentID: 2, value: 'CIN'}
    , {id: 'CLE', name: 'Cleveland Guardians', parentID: 2, value: 'CLE'}
    , {id: 'COL', name: 'Colorado Rockies', parentID: 2, value: 'COL'}
    , {id: 'DET', name: 'Detroit Tigers', parentID: 2, value: 'DET'}
    , {id: 'HOU', name: 'Houston Astros', parentID: 2, value: 'HOU'}
    , {id: 'KC', name: 'Kansas City Royals', parentID: 2, value: 'KC'}
    , {id: 'LAA', name: 'Los Angeles Angels', parentID: 2, value: 'LAA'}
    , {id: 'LAD', name: 'Los Angeles Dodgers', parentID: 2, value: 'LAD'}
    , {id: 'MIA', name: 'Miami Marlins', parentID: 2, value: 'MIA'}
    , {id: 'MIL', name: 'Milwaukee Brewers', parentID: 2, value: 'MIL'}
    , {id: 'MIN', name: 'Minnesota Twins', parentID: 2, value: 'MIN'}
    , {id: 'NYM', name: 'New York Mets', parentID: 2, value: 'NYM'}
    , {id: 'NYY', name: 'New York Yankees', parentID: 2, value: 'NYY'}
    , {id: 'OAK', name: 'Oakland Athletics', parentID: 2, value: 'OAK'}
    , {id: 'PHI', name: 'Philadelphia Phillies', parentID: 2, value: 'PHI'}
    , {id: 'PIT', name: 'Pittsburgh Pirates', parentID: 2, value: 'PIT'}
    , {id: 'SD', name: 'San Diego Padres', parentID: 2, value: 'SD'}
    , {id: 'SF', name: 'San Francisco Giants', parentID: 2, value: 'SF'}
    , {id: 'SEA', name: 'Seattle Mariners', parentID: 2, value: 'SEA'}
    , {id: 'STL', name: 'St. Louis Cardinals', parentID: 2, value: 'STL'}
    , {id: 'TB', name: 'Tampa Bay Rays', parentID: 2, value: 'TB'}
    , {id: 'TEX', name: 'Texas Rangers', parentID: 2, value: 'TEX'}
    , {id: 'TOR', name: 'Toronto Blue Jays', parentID: 2, value: 'TOR'}
    , {id: 'WSH', name: 'Washington Nationals', parentID: 2, value: 'WSH'}
    , {id: 'ATL', name: 'Atlanta Dream', parentID: 3, value: 'ATL'}
    , {id: 'CHI', name: 'Chicago Sky', parentID: 3, value: 'CHI'}
    , {id: 'CONN', name: 'Connecticut Sun', parentID: 3, value: 'CONN'}
    , {id: 'DAL', name: 'Dallas Wings', parentID: 3, value: 'DAL'}
    , {id: 'IND', name: 'Indiana Fever', parentID: 3, value: 'IND'}
    , {id: 'LV', name: 'Las Vegas Aces', parentID: 3, value: 'LV'}
    , {id: 'LA', name: 'Los Angeles Sparks', parentID: 3, value: 'LA'}
    , {id: 'MIN', name: 'Minnesota Lynx', parentID: 3, value: 'MIN'}
    , {id: 'NY', name: 'New York Liberty', parentID: 3, value: 'NY'}
    , {id: 'PHX', name: 'Phoenix Mercury', parentID: 3, value: 'PHX'}
    , {id: 'SEA', name: 'Seattle Storm', parentID: 3, value: 'SEA'}
    , {id: 'WSH', name: 'Washington Mystics', parentID: 3, value: 'WSH'}
    , {id: 'ATL', name: 'Atlanta Hawks', parentID: 4, value: 'ATL'}
    , {id: 'BOS', name: 'Boston Celtics', parentID: 4, value: 'BOS'}
    , {id: 'BKN', name: 'Brooklyn Nets', parentID: 4, value: 'BKN'}
    , {id: 'CHA', name: 'Charlotte Hornets', parentID: 4, value: 'CHA'}
    , {id: 'CHI', name: 'Chicago Bulls', parentID: 4, value: 'CHI'}
    , {id: 'CLE', name: 'Cleveland Cavaliers', parentID: 4, value: 'CLE'}
    , {id: 'DAL', name: 'Dallas Mavericks', parentID: 4, value: 'DAL'}
    , {id: 'DEN', name: 'Denver Nuggets', parentID: 4, value: 'DEN'}
    , {id: 'DET', name: 'Detroit Pistons', parentID: 4, value: 'DET'}
    , {id: 'GS', name: 'Golden State Warriors', parentID: 4, value: 'GS'}
    , {id: 'HOU', name: 'Houston Rockets', parentID: 4, value: 'HOU'}
    , {id: 'IND', name: 'Indiana Pacers', parentID: 4, value: 'IND'}
    , {id: 'LAC', name: 'LA Clippers', parentID: 4, value: 'LAC'}
    , {id: 'LAL', name: 'Los Angeles Lakers', parentID: 4, value: 'LAL'}
    , {id: 'MEM', name: 'Memphis Grizzlies', parentID: 4, value: 'MEM'}
    , {id: 'MIA', name: 'Miami Heat', parentID: 4, value: 'MIA'}
    , {id: 'MIL', name: 'Milwaukee Bucks', parentID: 4, value: 'MIL'}
    , {id: 'MIN', name: 'Minnesota Timberwolves', parentID: 4, value: 'MIN'}
    , {id: 'NO', name: 'New Orleans Pelicans', parentID: 4, value: 'NO'}
    , {id: 'NY', name: 'New York Knicks', parentID: 4, value: 'NY'}
    , {id: 'OKC', name: 'Oklahoma City Thunder', parentID: 4, value: 'OKC'}
    , {id: 'ORL', name: 'Orlando Magic', parentID: 4, value: 'ORL'}
    , {id: 'PHI', name: 'Philadelphia 76ers', parentID: 4, value: 'PHI'}
    , {id: 'PHX', name: 'Phoenix Suns', parentID: 4, value: 'PHX'}
    , {id: 'POR', name: 'Portland Trail Blazers', parentID: 4, value: 'POR'}
    , {id: 'SAC', name: 'Sacramento Kings', parentID: 4, value: 'SAC'}
    , {id: 'SA', name: 'San Antonio Spurs', parentID: 4, value: 'SA'}
    , {id: 'TOR', name: 'Toronto Raptors', parentID: 4, value: 'TOR'}
    , {id: 'UTAH', name: 'Utah Jazz', parentID: 4, value: 'UTAH'}
    , {id: 'WSH', name: 'Washington Wizards', parentID: 4, value: 'WSH'}
    ]
;

selForm.onsubmit = e => e.preventDefault();

selForm.onchange = e => {
    if (e.target.name === 'league') {
        setSubSelects(e.target.name);
        console.log('On Change:', e);
    }
};

function setSelect(name,id) {
    selForm[name].innerHTML = ''
        treeData.filter(el => el.parentID === id)
            .forEach(el => { 
                selForm[name].add(new Option(el.name, el.id))
            })
};

function setSubSelects(selectName) {
    let idx = selOrder.findIndex(x => x === selectName) +1
    if (idx < selOrder.length)
    {
    let sName = selOrder[idx]
    setSelect ( sName, + selForm[selectName].value )
    setSubSelects(sName)
    }
};

setSelect('league', 0)
setSubSelects('league')

/* Toggle between adding and removing the "responsive" class to topnav and adding line breaks to the form when the user clicks on the icon */
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

async function getData(selectedLeague = league, selectedTeam = userTeam, selectedDate = userDate) {
    console.log(`Fetching data for Date: ${selectedDate}, League: ${selectedLeague}, Team: ${selectedTeam}`);
    
    if (!selectedLeague || !selectedTeam) {
        // Clear previous data, if any and display an error message at the top of the window
        document.getElementById('gameTitle').innerHTML = `Please choose a league and team to display game information.`;
        document.getElementById('gameProgress').textContent = "";
        document.getElementById('leagueInfo').innerHTML = "";
        document.getElementById('boxScore').innerHTML = "";
        document.getElementById('scoreSep').textContent = "";

        document.getElementById(`vTeamName`).textContent = "";
        document.getElementById(`vTeamScore`).textContent = "";
        document.getElementById(`vTeamLogo`).textContent = "";
        document.getElementById(`vTeamRecord`).textContent = "";

        document.getElementById(`hTeamName`).textContent = "";
        document.getElementById(`hTeamScore`).textContent = "";
        document.getElementById(`hTeamLogo`).textContent = "";
        document.getElementById(`hTeamRecord`).textContent = "";
        //console.error("League and team must be selected.")
        //return;
    }

    league = selectedLeague;
    userTeam = selectedTeam;
    userDate = selectedDate;

    switch(league) {
        case '1': 
            league = 'NFL';
            break;

        case '2':
            league = 'MLB';
            break;
        
        case '3':
            league = 'WNBA';
            break;
        
        case '4':
            league = 'NBA';
            break;
    };
    
    let date = userDate.replace(/-/g,"");

    let formattedDate = date;

    const leaguePaths = {
        MLB: "baseball/mlb",
        NFL: "football/nfl",
        WNBA: "basketball/wnba",
        NBA: "basketball/nba"
    };

    const leaguePath = leaguePaths[league];
    if(!leaguePath) {
        console.error('League and team must be selected.')
    };

    const url = "https://site.api.espn.com/apis/site/v2/sports/" + leaguePath  + "/scoreboard?dates=" + formattedDate + "&limit=200";

        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const data = await response.json();

        // Find the game selected by the user
        const selectedGame = data.events.find(event =>
            event.competitions[0].competitors.some(team => team.team.abbreviation === userTeam)
            );
        
        if (selectedGame) {
            
            // Extract relevant information for the requested game
            const { name: gameName, date: gameDate, competitions } = selectedGame;
            const { status, competitors, geoBroadcasts } = competitions[0];
            const [homeTeam, visitorTeam] = competitors;
            let json = {};

            const extractTeamData = (team) => ({
                name: team.team.displayName,
                abbreviation: team.team.abbreviation,
                score: team.score,
                boxScore: team.linescores,
                record: team.records[0]?.summary,
                stats: team.statistics,
                logo: team.team.logo,
            });

            json = ({
                league,
                gameDate: new Date(gameDate).toDateString(),
                gameName,
                gameProgress: status.type.shortDetail,
                gameTime: new Date(gameDate).toLocaleTimeString([], {hour: 'numeric', minute: '2-digit'}),
                gameStatus: status.type.id,
                geoBroadcasts: geoBroadcasts,
                homeTeam: extractTeamData(homeTeam),
                visitorTeam: extractTeamData(visitorTeam),
            });
            console.log(json);
            return json;

        } else {
            console.error('Error fetching data');
        }
};

// This section receives input from the front end form to select the league and team
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('teamForm').addEventListener('submit', function(event) {
        event.preventDefault();
        let league = document.getElementById('league').value;
        let userTeam = document.getElementById('userTeam').value;
        let userDate = document.getElementById('userDate').value;

        let x = document.getElementById('nav');
        if (x.className === "top-nav font-nav") {
            x.className += " responsive";
        } else {
            x.className = "top-nav font-nav";
        }

        // If the user does not select a date from the form, default to today's Date.
        if (!userDate) {
            console.error("No date selected by the user, using default of today's date.");
            userDate = new Date();

            const year = userDate.getFullYear();
            const month = String(userDate.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed, so add 1
            const day = String(userDate.getDate()).padStart(2, '0');

            userDate = `${year}${month}${day}`;
        };

        switch(league) {
            case '1': 
                league = 'NFL';
                break;

            case '2':
                league = 'MLB';
                break;
            
            case '3':
                league = 'WNBA';
                break;
            
            case '4':
                league = 'NBA';
                break;
            };

        // Fetch and display data for the selected game
        getData(league, userTeam, userDate).then(gameData => {
            if (gameData) {
                buildWebPage(gameData);
            } else {
                console.error('No game data found.');
                // Clear previous data, if any and display a message at the top of the window
                document.getElementById('gameTitle').innerHTML = `No Game Found for ${league} and ${userTeam} on the requested date. <br> Please Select Again.`;
                document.getElementById('gameProgress').textContent = "";
                document.getElementById('leagueInfo').innerHTML = "";
                document.getElementById('boxScore').innerHTML = "";
                document.getElementById('scoreSep').textContent = "";

                document.getElementById(`vTeamName`).textContent = "";
                document.getElementById(`vTeamScore`).textContent = "";
                document.getElementById(`vTeamLogo`).textContent = "";
                document.getElementById(`vTeamRecord`).textContent = "";

                document.getElementById(`hTeamName`).textContent = "";
                document.getElementById(`hTeamScore`).textContent = "";
                document.getElementById(`hTeamLogo`).textContent = "";
                document.getElementById(`hTeamRecord`).textContent = "";
            }
        });
    });

});

function buildWebPage(gameData) {

    if (!gameData) {
        console.error("No game data provided.");
        return;
    };

    const { league, gameName, gameProgress, gameTime, gameStatus, geoBroadcasts, homeTeam, visitorTeam } = gameData;

    document.getElementById('gameTitle').textContent = `${gameName}`;
    document.getElementById('gameProgress').textContent = `${gameProgress}`;
    document.getElementById('scoreSep').textContent = "-";
    
    let info = document.getElementById('leagueInfo')
    info.innerHTML =  `<img src="https://a.espncdn.com/i/teamlogos/leagues/500/${league}.png" class="league-info-img" alt="${league} logo">`;

    document.getElementById('bgBody').setAttribute('class', `${league}`);
    
    const setTeamData = (team, prefix) => {
        document.getElementById(`${prefix}TeamName`).textContent = team.name;
        document.getElementById(`${prefix}TeamScore`).textContent = team.score;
        document.getElementById(`${prefix}TeamLogo`).innerHTML = `<img src="${team.logo}" alt="${team.name} logo">`;
        document.getElementById(`${prefix}TeamRecord`).textContent = `(${team.record})`;
    };

    let tvBcst = geoBroadcasts
        .filter(broadcast => broadcast.type.id === '1' && broadcast.market.id === '1' || broadcast.type.id === '1' && broadcast.market.id === '2' || broadcast.type.id === '1' && broadcast.market.id === '3')
        .map(broadcast => broadcast.media.shortName);

        let tvBcstDiv = document.getElementById('tvBcstInfo');
        
        if (tvBcst.length > 0) {
            console.log('TV Bcst:', tvBcst);
            tvBcstDiv.innerHTML = `<span class='bcst-info-font tv'>Where To Watch: ${tvBcst.join(', ')}</span>`
        } else {
            tvBcstDiv.innerHTML = `<span class='bcst-info-font tv'>Where To Watch: No TV Broadcast Available</span>`
        };

    let stream = geoBroadcasts
        .filter(broadcast => broadcast.type.id === '4' || broadcast.type.id === '6')
        .map(broadcast => broadcast.media.shortName);

        let streamDiv = document.getElementById('streamInfo');

        if (stream.length > 0) {
            console.log('Stream:', stream);
            streamDiv.innerHTML = `<br><span class='bcst-info-font stream'>Where To Stream: ${stream.join(', ')}</span>`

        } else {
            streamDiv.innerHTML = `<br><span class='bcst-info-font stream'>Where To Stream: No Streaming Available</span>`
        };

    setTeamData(homeTeam, 'h');
    setTeamData(visitorTeam, 'v');

    if (gameStatus == 1) {
        console.log("Game not started yet!");

        let clearBoxScore = document.getElementById('boxScore');
        clearBoxScore.innerHTML = '';

        document.getElementById('gameProgress').textContent = `${gameTime}`;

        return;
    }

    const headers = league === 'MLB' ? ['Team', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'R', 'H', 'E'] : ['Team', '1', '2', '3', '4', 'Total'];
    buildTable(headers, homeTeam, visitorTeam, league);

    if (league === 'MLB' && gameStatus == 3 && homeTeam.boxScore.length < 9) {
        document.getElementById('hTeamPeriod8').textContent = `X`;
    }

    function buildTable(headers, homeTeam, visitorTeam, league) {
        const boxScoreDiv = document.getElementById('boxScore');
        boxScoreDiv.innerHTML = '';

        const table = document.createElement('table');
        if (league === 'MLB') {
            table.setAttribute('class', 'box-score-table-mlb');
        } else {
            table.setAttribute('class', 'box-score-table');
        }
        table.setAttribute('id', 'boxScoreTable');
        table.setAttribute('aria-label', 'Score Summary Table');

        const headerRow = table.createTHead().insertRow(0);
        headers.forEach(headerText => {
            const th = document.createElement('th');
            th.textContent = headerText;
            th.setAttribute('class', 'col-headers');
            headerRow.appendChild(th);
        });

        const tbody = table.createTBody();

        const createRow = (team, prefix) =>{
            const row = tbody.insertRow();
            const th = document.createElement('th');
            th.textContent = team.name;
            th.setAttribute('class', `${prefix}-team box-name overflow`);
            row.setAttribute('id', `${prefix}TeamRow`);
            row.appendChild(th);

            if (league === 'MLB') {
                for (let i = 0; i < 9; i++) {
                    const cell = row.insertCell();
                    const value = team.boxScore[i]?.value;
                    cell.textContent = value !== undefined && value !== null ? value : '-';
                    cell.setAttribute('id', `${prefix}TeamPeriod${i}`);
                    cell.setAttribute('class', 'box period');
                }
            } else {
                for (let i = 0; i < 4; i++) {
                    const cell = row.insertCell();
                    const value = team.boxScore[i]?.value;
                    cell.textContent = value !== undefined && value !== null ? value : '-';
                    cell.setAttribute('id', `${prefix}TeamPeriod${i}`);
                    cell.setAttribute('class', 'box period');
                }
            };

            const statCells = league === 'MLB' ? [1, 0, 7] : [];
            statCells.forEach(statIndex => {
                const cell = row.insertCell();
                cell.textContent = team.stats[statIndex]?.displayValue || '0';
                cell.setAttribute('class', 'box');
            });

            if (league !== 'MLB') {
                const totalCell = row.insertCell();
                totalCell.textContent = team.score;
                totalCell.setAttribute('class', 'box');
            }

            if (prefix === 'h') {
                hTeamScore = team.score;
            } else {
                vTeamScore = team.score;
            };    

        };

        createRow(visitorTeam, 'v');
        createRow(homeTeam, 'h');

        boxScoreDiv.appendChild(table);

        const thName = document.getElementsByTagName('th')[0];
        thName.classList.add('wide');
        
        if (gameStatus == 3) {
            tvBcstDiv.innerHTML = "";
            streamDiv.innerHTML = "";

            if (hTeamScore > vTeamScore) {
                let winningTeam = document.getElementById('hTeamRow');
                winningTeam.setAttribute('class', 'winning');
            } else {
                let winningTeam = document.getElementById('vTeamRow');
                winningTeam.setAttribute('class', 'winning');
            }
        };
    };
};

// Set up refresh interval for the site to get the most up to the minute scores and results
// This is set to refresh every 5 minutes and will keep going until the window is closed

setInterval(() => {
console.log(new Date().toUTCString() + " Interval triggered, calling getData");
getData();
}, 5 * 60 * 1000);
