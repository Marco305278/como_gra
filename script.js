// Elementi del DOM
const championshipSelect = document.getElementById('championship');
const homeTeamSelect = document.getElementById('homeTeam');
const awayTeamSelect = document.getElementById('awayTeam');
const swapBtn = document.getElementById('swapBtn');
const graphicCheckboxes = document.querySelectorAll('input[name="graphic"]');
const graphicsOptionsDiv = document.getElementById('graphicsOptions');
const generateBtn = document.getElementById('generateBtn');
const carouselContainer = document.querySelector('.carousel-container');
const downloadAllButtons = document.querySelectorAll('.downloadAllBtn');
const matchDateInput = document.getElementById('matchDate');
const matchTimeInput = document.getElementById('matchTime');
const dateTimeSection = document.getElementById('dateTimeSection');
const matchDaySection = document.getElementById('matchDaySection');
const uploadContainer = document.querySelector('.upload-background-section .upload-container');
const stadiumLocationSection = document.getElementById('stadiumLocationSection');
const stadiumInput = document.getElementById('stadium');
const matchDayInput = document.getElementById('matchDay');

// Lista dei giocatori
const players = [
    { value: 'Dennis Brasolin', text: 'Dennis Brasolin' },
    { value: 'Felippe Jack', text: 'Felippe Jack' },
    // Aggiungi altri giocatori secondo necessità
];

// Configurazione delle grafiche e formati
const graphicStyles = {
    fulltime: {
        overlay_4x5: {
            homeLogo: { x: 70, y: 970, width: 150, height: 150 },
            awayLogo: { x: 70, y: 1145, width: 150, height: 150 },
            championshipLogo: { x: 70, y: 80, width: 130, height: 212 },
            homeScore: { x: 260, y: 1100, fontSize: 164, color: 'white', font: 'bodoni-72-bold', letterSpacing: 0 },
            awayScore: { x: 260, y: 1275, fontSize: 164, color: 'white', font: 'bodoni-72-bold', letterSpacing: 0 },
            dateTime: null,
            matchDay: null
        },
        overlay_9x16: {
            homeLogo: { x: 70, y: 1470, width: 150, height: 150 },
            awayLogo: { x: 70, y: 1645, width: 150, height: 150 },
            championshipLogo: { x: 70, y: 80, width: 130, height: 212 },
            homeScore: { x: 260, y: 1600, fontSize: 164, color: 'white', font: 'bodoni-72-bold', letterSpacing: 0 },
            awayScore: { x: 260, y: 1775, fontSize: 164, color: 'white', font: 'bodoni-72-bold', letterSpacing: 0 },
            dateTime: null,
            matchDay: null
        }
    },
    halftime: {
        overlay_4x5: {
            homeLogo: { x: 70, y: 970, width: 150, height: 150 },
            awayLogo: { x: 70, y: 1145, width: 150, height: 150 },
            championshipLogo: { x: 70, y: 80, width: 130, height: 212 },
            homeScore: { x: 260, y: 1100, fontSize: 164, color: 'white', font: 'bodoni-72-bold', letterSpacing: 0 },
            awayScore: { x: 260, y: 1275, fontSize: 164, color: 'white', font: 'bodoni-72-bold', letterSpacing: 0 },
            dateTime: null,
            matchDay: null
        },
        overlay_9x16: {
            homeLogo: { x: 70, y: 1470, width: 150, height: 150 },
            awayLogo: { x: 70, y: 1645, width: 150, height: 150 },
            championshipLogo: { x: 70, y: 80, width: 130, height: 212 },
            homeScore: { x: 260, y: 1600, fontSize: 164, color: 'white', font: 'bodoni-72-bold', letterSpacing: 0 },
            awayScore: { x: 260, y: 1775, fontSize: 164, color: 'white', font: 'bodoni-72-bold', letterSpacing: 0 },
            dateTime: null,
            matchDay: null
        }
    },
    kickoff: {
        overlay_4x5: {
            homeLogo: { x: 70, y: 950, width: 165, height: 165 },
            awayLogo: { x: 250, y: 950, width: 165, height: 165 },
            championshipLogo: { x: 70, y: 50, width: 130, height: 212 },
            homeScore: null,
            awayScore: null,
            dateTime: { x: 70, y: 360, fontSize: 54, color: 'white', font: 'bodoni-72-bold', letterSpacing: 2 },
            matchDay: null
        },
        overlay_9x16: {
            homeLogo: { x: 70, y: 1250, width: 165, height: 165 },
            awayLogo: { x: 250, y: 1250, width: 165, height: 165 },
            championshipLogo: { x: 70, y: 350, width: 130, height: 212 },
            homeScore: null,
            awayScore: null,
            dateTime: { x: 70, y: 640, fontSize: 64, color: 'white', font: 'bodoni-72-bold', letterSpacing: 2 },
            matchDay: null
        }
    },
    goal: {
        overlay_4x5: {
            homeLogo: { x: 750, y: 50, width: 150, height: 150 },
            awayLogo: { x: 750, y: 235, width: 150, height: 150 },
            championshipLogo: { x: 70, y: 80, width: 130, height: 212 },
            homeScore: { x: 910, y: 180, fontSize: 164, color: 'white', font: 'bodoni-72-bold', letterSpacing: -10 },
            awayScore: { x: 910, y: 355, fontSize: 164, color: 'white', font: 'bodoni-72-bold', letterSpacing: -10 },
            dateTime: null,
            matchDay: null,
            playerName: { x: 70, y: 1250, fontSize: 130, color: 'white', font: 'Saturday-Lovin', letterSpacing: 0 }
        },
        overlay_9x16: {
            homeLogo: { x: 750, y: 150, width: 150, height: 150 },
            awayLogo: { x: 750, y: 335, width: 150, height: 150 },
            championshipLogo: { x: 70, y: 80, width: 130, height: 212 },
            homeScore: { x: 910, y: 280, fontSize: 164, color: 'white', font: 'bodoni-72-bold', letterSpacing: -10 },
            awayScore: { x: 910, y: 455, fontSize: 164, color: 'white', font: 'bodoni-72-bold', letterSpacing: -10 },
            dateTime: null,
            matchDay: null,
            playerName: { x: 70, y: 1740, fontSize: 145, color: 'white', font: 'Saturday-Lovin', letterSpacing: 0 }
        }
    },
    livematch: {
        overlay_5x8: {
            homeLogo: { x: 180, y: 700, width: 105, height: 105 },
            awayLogo: { x: 300, y: 700, width: 105, height: 105 },
            championshipLogo: null,
            homeScore: null,
            awayScore: null,
            dateTime: { x: 140, y: 640, fontSize: 17, color: 'white', font: 'MazzardH-Medium', letterSpacing: 3.8 },
            matchDay: null
        },
        overlay_16x9: {
            homeLogo: { x: 710, y: 790, width: 230, height: 230 },
            awayLogo: { x: 980, y: 790, width: 230, height: 230 },
            championshipLogo: null,
            homeScore: null,
            awayScore: null,
            dateTime: { x: 640, y: 665, fontSize: 34, color: 'white', font: 'MazzardH-Medium', letterSpacing: 8 },
            matchDay: null
        }
    },
    highlights: {
        overlay_5x8: {
            homeLogo: { x: 55, y: 655, width: 150, height: 150 },
            awayLogo: { x: 375, y: 655, width: 150, height: 150 },
            championshipLogo: null,
            combinedScore: { x: 291, y: 760, fontSize: 72, color: 'white', font: 'MazzardH-Light', letterSpacing: -10, textAlign: 'center' },
            dateTime: null,
            matchDay: null
        },
        overlay_16x9: {
            homeLogo: { x: 960, y: 430, width: 260, height: 260 },
            awayLogo: { x: 1545, y: 430, width: 260, height: 260 },
            championshipLogo: null,
            combinedScore: { x: 1400, y: 590, fontSize: 130, color: 'white', font: 'MazzardH-Light', letterSpacing: 0, textAlign: 'center' },
            dateTime: null,
            matchDay: null
        }
    },
    nextmatch: {
        overlay_4x5: {
            homeLogo: null,
            awayLogo: null,
            championshipLogo: { x: 900, y: 40, width: 130, height: 212 },
            homeScore: null,
            awayScore: null,
            dateTime: { x: 65, y: 1240, fontSize: 72, color: 'white', font: 'bodoni-72-bold', letterSpacing: 0 },
            matchDay: { x: 65, y: 810, fontSize: 40, color: 'white', font: 'bodoni-72-bold', letterSpacing: 6 },
            nextMatchTitle: { x: 65, y: 160, fontSize: 72, color: 'white', font: 'bodoni-72-bold', letterSpacing: 2 },
            homeTeamName: { x: 60, y: 970, fontSize: 170, color: 'white', font: 'DrukText-Medium-Trial', letterSpacing: -10 },
            vsText: { x: null, y: 970, fontSize: 100, color: 'white', font: 'bodoni-72-book-italic', letterSpacing: 0 },
            awayTeamName: { x: 60, y: 1115, fontSize: 170, color: 'white', font: 'DrukText-Medium-Trial', letterSpacing: -10 },
            stadiumLocation: { x: 65, y: 1310, fontSize: 60, color: 'white', font: 'bodoni-72-bold', letterSpacing: -2 }
        },
        overlay_9x16: {
            homeLogo: null,
            awayLogo: null,
            championshipLogo: { x: 70, y: 820, width: 130, height: 212 },
            homeScore: null,
            awayScore: null,
            dateTime: { x: 65, y: 1655, fontSize: 72, color: 'white', font: 'bodoni-72-bold', letterSpacing: 0 },
            matchDay: { x: 65, y: 1180, fontSize: 40, color: 'white', font: 'bodoni-72-bold', letterSpacing: 6 },
            nextMatchTitle: { x: 65, y: 200, fontSize: 72, color: 'white', font: 'bodoni-72-bold', letterSpacing: 2 },
            homeTeamName: { x: 60, y: 1360, fontSize: 185, color: 'white', font: 'DrukText-Medium-Trial', letterSpacing: -10 },
            vsText: { x: null, y: 1360, fontSize: 100, color: 'white', font: 'bodoni-72-book-italic', letterSpacing: 0 },
            awayTeamName: { x: 60, y: 1530, fontSize: 185, color: 'white', font: 'DrukText-Medium-Trial', letterSpacing: -10 },
            stadiumLocation: { x: 65, y: 1725, fontSize: 60, color: 'white', font: 'bodoni-72-bold', letterSpacing: -2 }
        }
    },
    matchday: {
        overlay_4x5: {
            homeLogo: null,
            awayLogo: null,
            championshipLogo: { x: 900, y: 40, width: 130, height: 212 },
            homeScore: null,
            awayScore: null,
            dateTime: { x: 65, y: 1240, fontSize: 72, color: 'white', font: 'bodoni-72-bold', letterSpacing: 0 },
            matchDay: { x: 65, y: 810, fontSize: 40, color: 'white', font: 'bodoni-72-bold', letterSpacing: 6 },
            nextMatchTitle: null,
            homeTeamName: { x: 60, y: 970, fontSize: 170, color: 'white', font: 'DrukText-Medium-Trial', letterSpacing: -10 },
            vsText: { x: null, y: 970, fontSize: 100, color: 'white', font: 'bodoni-72-book-italic', letterSpacing: 0 },
            awayTeamName: { x: 60, y: 1115, fontSize: 170, color: 'white', font: 'DrukText-Medium-Trial', letterSpacing: -10 },
            stadiumLocation: { x: 65, y: 1310, fontSize: 60, color: 'white', font: 'bodoni-72-bold', letterSpacing: -2 }
        },
        overlay_9x16: {
            homeLogo: null,
            awayLogo: null,
            championshipLogo: { x: 70, y: 820, width: 130, height: 212 },
            homeScore: null,
            awayScore: null,
            dateTime: { x: 65, y: 1655, fontSize: 72, color: 'white', font: 'bodoni-72-bold', letterSpacing: 0 },
            matchDay: { x: 65, y: 1180, fontSize: 40, color: 'white', font: 'bodoni-72-bold', letterSpacing: 6 },
            nextMatchTitle: null,
            homeTeamName: { x: 60, y: 1360, fontSize: 185, color: 'white', font: 'DrukText-Medium-Trial', letterSpacing: -10 },
            vsText: { x: null, y: 1360, fontSize: 100, color: 'white', font: 'bodoni-72-book-italic', letterSpacing: 0 },
            awayTeamName: { x: 60, y: 1530, fontSize: 185, color: 'white', font: 'DrukText-Medium-Trial', letterSpacing: -10 },
            stadiumLocation: { x: 65, y: 1725, fontSize: 60, color: 'white', font: 'bodoni-72-bold', letterSpacing: -2 }
        }
    }
};

// Definizione dei formati e delle dimensioni
const formats = {
    overlay_5x8: { width: 582, height: 872 },
    overlay_4x5: { width: 1080, height: 1350 },
    overlay_9x16: { width: 1080, height: 1920 },
    overlay_16x9: { width: 1920, height: 1080 }
};

// Mappatura dei formati disponibili per ogni grafica
const graphicsFormats = {
    fulltime: ['overlay_4x5', 'overlay_9x16'],
    halftime: ['overlay_4x5', 'overlay_9x16'],
    kickoff: ['overlay_4x5', 'overlay_9x16'],
    goal: ['overlay_4x5', 'overlay_9x16'],
    livematch: ['overlay_5x8', 'overlay_16x9'],
    highlights: ['overlay_5x8', 'overlay_16x9'],
    nextmatch: ['overlay_4x5', 'overlay_9x16'],
    matchday: ['overlay_4x5', 'overlay_9x16']
};

// Definizioni delle grafiche che richiedono specifiche componenti
const graphicsWithLogos = ['livematch', 'highlights', 'halftime', 'fulltime', 'goal', 'kickoff'];
const graphicsRequireDateTime = ['kickoff', 'matchday', 'nextmatch', 'livematch'];
const graphicsRequireMatchDay = ['matchday', 'nextmatch'];
const graphicsRequireStadiumLocation = ['nextmatch', 'matchday'];
const graphicsWithChampionshipLogo = ['nextmatch', 'matchday'];

// Stato per gestire lo swap delle squadre
let isHomeFixed = true;
const fixedTeam = { value: 'como1907', text: 'Como 1907' };
let currentTeams = [];
let backgroundImages = {};

// Funzione per capitalizzare la prima lettera
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Funzione per popolare un select con le squadre selezionabili
function populateSelectableSelect(selectElement, teams, selectedValue = null) {
    selectElement.innerHTML = '';

    teams.forEach(team => {
        if (team.value !== fixedTeam.value) {
            const option = document.createElement('option');
            option.value = team.value;
            option.textContent = team.text;
            selectElement.appendChild(option);
        }
    });

    if (selectedValue) {
        const optionExists = Array.from(selectElement.options).some(option => option.value === selectedValue);
        if (optionExists) {
            selectElement.value = selectedValue;
        } else if (selectElement.options.length > 0) {
            selectElement.selectedIndex = 0;
        }
    } else if (selectElement.options.length > 0) {
        selectElement.selectedIndex = 0;
    }
}

// Funzione per popolare le squadre in base al campionato selezionato
function populateTeams() {
    const championship = championshipSelect.value;
    let teams = [];

    switch (championship) {
        case 'seriea':
            teams = [
                { value: 'atalanta', text: 'Atalanta' },
                { value: 'bologna', text: 'Bologna' },
                { value: 'cagliari', text: 'Cagliari' },
                { value: 'como1907', text: 'Como 1907' },
                { value: 'empoli', text: 'Empoli' },
                { value: 'fiorentina', text: 'Fiorentina' },
                { value: 'genoa', text: 'Genoa' },
                { value: 'inter', text: 'Inter' },
                { value: 'juventus', text: 'Juventus' },
                { value: 'lazio', text: 'Lazio' },
                { value: 'lecce', text: 'Lecce' },
                { value: 'milan', text: 'Milan' },
                { value: 'monza', text: 'Monza' },
                { value: 'napoli', text: 'Napoli' },
                { value: 'parma', text: 'Parma' },
                { value: 'roma', text: 'Roma' },
                { value: 'sampdoria', text: 'Sampdoria' },
                { value: 'torino', text: 'Torino' },
                { value: 'udinese', text: 'Udinese' },
                { value: 'venezia', text: 'Venezia' },
                { value: 'verona', text: 'Verona' }
            ];
            break;
        case 'primavera':
            teams = [
                { value: 'albinoleffe', text: 'Albinoleffe' },
                { value: 'ascoli', text: 'Ascoli' },
                { value: 'bari', text: 'Bari' },
                { value: 'brescia', text: 'Brescia' },
                { value: 'catanzaro', text: 'Catanzaro' },
                { value: 'cittadella', text: 'Cittadella' },
                { value: 'cosenza', text: 'Cosenza' },
                { value: 'cremonese', text: 'Cremonese' },
                { value: 'feralpisalo', text: 'Feralpisalò' },
                { value: 'lecco', text: 'Lecco' },
                { value: 'modena', text: 'Modena' },
                { value: 'padova', text: 'Padova' },
                { value: 'palermo', text: 'Palermo' },
                { value: 'parma', text: 'Parma' },
                { value: 'pisa', text: 'Pisa' },
                { value: 'reggiana', text: 'Reggiana' },
                { value: 'sampdoria', text: 'Sampdoria' },
                { value: 'spal', text: 'Spal' },
                { value: 'spezia', text: 'Spezia' },
                { value: 'sudtirol', text: 'Sudtirol' },
                { value: 'ternana', text: 'Ternana' },
                { value: 'venezia', text: 'Venezia' },
                { value: 'virtusentella', text: 'Virtus Entella' }
            ];
            break;
        case 'women':
            teams = [
                { value: 'acm', text: 'ACM' },
                { value: 'bresso', text: 'Bresso' },
                { value: 'castellocittadicantu', text: 'Castello Città di Cantù' },
                { value: 'circologiovanilebresso', text: 'Circolo Giovanile Bresso' },
                { value: 'cittadibrugherio', text: 'Città di Brugherio' },
                { value: 'cittadisegrate', text: 'Città di Segrate' },
                { value: 'cittadivarese', text: 'Città di Varese' },
                { value: 'crema', text: 'Crema' },
                { value: 'doverese', text: 'Doverese' },
                { value: 'erbusco', text: 'Erbusco' },
                { value: 'fiammamonza', text: 'Fiammamonza' },
                { value: 'mantova', text: 'Mantova' },
                { value: 'propalazzolo', text: 'Pro Palazzolo' },
                { value: 'rizzonese', text: 'Rizzonese' },
                { value: 'tabiago', text: 'Tabiago' }
            ];
            break;
        default:
            teams = [];
    }

    currentTeams = teams;

    if (isHomeFixed) {
        homeTeamSelect.innerHTML = `<option value="${fixedTeam.value}">${fixedTeam.text}</option>`;
        homeTeamSelect.disabled = true;
        awayTeamSelect.disabled = false;
        populateSelectableSelect(awayTeamSelect, currentTeams);
    } else {
        awayTeamSelect.innerHTML = `<option value="${fixedTeam.value}">${fixedTeam.text}</option>`;
        awayTeamSelect.disabled = true;
        homeTeamSelect.disabled = false;
        populateSelectableSelect(homeTeamSelect, currentTeams);
    }

    console.log(`Popolate le squadre per il campionato: ${championship}`);
}

// Funzione per alternare lo stato dei team
function toggleTeams() {
    if (isHomeFixed) {
        const selectedAwayTeam = awayTeamSelect.value;
        console.log('Swapping: Selected Away Team before swap:', selectedAwayTeam);

        homeTeamSelect.disabled = false;
        populateSelectableSelect(homeTeamSelect, currentTeams, selectedAwayTeam);

        awayTeamSelect.innerHTML = `<option value="${fixedTeam.value}">${fixedTeam.text}</option>`;
        awayTeamSelect.disabled = true;
    } else {
        const selectedHomeTeam = homeTeamSelect.value;
        console.log('Swapping: Selected Home Team before swap:', selectedHomeTeam);

        awayTeamSelect.disabled = false;
        populateSelectableSelect(awayTeamSelect, currentTeams, selectedHomeTeam);

        homeTeamSelect.innerHTML = `<option value="${fixedTeam.value}">${fixedTeam.text}</option>`;
        homeTeamSelect.disabled = true;
    }

    isHomeFixed = !isHomeFixed;
    console.log(`isHomeFixed ora è: ${isHomeFixed}`);

    generatePreviews();
}

// Funzione per aggiornare le opzioni grafiche
function updateGraphicsOptions() {
    // Salva i valori esistenti degli input
    const existingInputs = {};
    graphicsOptionsDiv.querySelectorAll('input').forEach(input => {
        existingInputs[input.className] = input.value;
    });

    graphicsOptionsDiv.innerHTML = ''; // Pulisce le opzioni esistenti

    let isFulltimeHighlightsAdded = false;
    let isHalftimeHighlightsAdded = false;

    graphicCheckboxes.forEach(cb => {
        if (cb.checked) {
            const optionDiv = document.createElement('div');
            optionDiv.classList.add('graphic-option');

            switch (cb.value) {
                case 'goal':
                    // Selettore del giocatore
                    const playerLabel = document.createElement('label');
                    playerLabel.setAttribute('for', 'goalPlayerSelect');
                    playerLabel.textContent = 'Player:';
                    optionDiv.appendChild(playerLabel);

                    const goalContainerDiv = document.createElement('div');
                    goalContainerDiv.classList.add('div2');

                    const decreaseDiv = document.createElement('div');
                    decreaseDiv.id = 'decrease';
                    decreaseDiv.classList.add('symbol-arrow');
                    const decreaseImg = document.createElement('img');
                    decreaseImg.src = 'images/assets/arrow.svg';
                    decreaseImg.alt = 'Swap Teams';
                    decreaseDiv.appendChild(decreaseImg);
                    goalContainerDiv.appendChild(decreaseDiv);

                    const playerSelect = document.createElement('select');
                    playerSelect.id = 'goalPlayerSelect';
                    playerSelect.name = 'goalPlayerSelect';

                    players.forEach(player => {
                        const option = document.createElement('option');
                        option.value = player.value;
                        option.textContent = player.text;
                        playerSelect.appendChild(option);
                    });

                    goalContainerDiv.appendChild(playerSelect);
                    optionDiv.appendChild(goalContainerDiv);

                    if (!isHalftimeHighlightsAdded) {
                        // Campi per i punteggi di half-time
                        const halftimeDiv = document.createElement('div');
                        halftimeDiv.innerHTML = `
                            <h3>Half Time - Goal</h3>
                            <div style="background: #e8f0f8; border-radius: 6px; padding: 10px;" class="score">
                                <div class="col col100" style="text-align: center; padding-top: 4px;">
                                    <div><label>Home score:</label></div>
                                    <div style="width: 140px"></div>
                                    <div><label>Away score:</label></div>
                                </div>
                                <div class="col col100 number-input-fz" style="text-align: center;">
                                    <div>
                                        <div class="cell100">
                                            <input size="2" type="number" class="homeHalfScore number" min="0" placeholder="0" value="0">
                                        </div>
                                    </div>
                                    <div style="width: 140px;">
                                        <h2 style="color: black; margin: 0;">-</h2>
                                    </div>
                                    <div>
                                        <div class="cell100">
                                            <input type="number" class="awayHalfScore number" min="0" placeholder="0" value="0">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        `;
                        optionDiv.appendChild(halftimeDiv);
                        isHalftimeHighlightsAdded = true;
                    }
                    break;

                case 'fulltime':
                case 'highlights':
                    if (!isFulltimeHighlightsAdded) {
                        optionDiv.innerHTML += `
                            <h3>Full Time - Highlights</h3>
                            <div style="background: #e8f0f8; border-radius: 6px; padding: 10px;" class="score">
                                <div class="col col100" style="text-align: center; padding-top: 4px;">
                                    <div><label>Home score:</label></div>
                                    <div style="width: 140px"></div>
                                    <div><label>Away score:</label></div>
                                </div>
                                <div class="col col100 number-input-fz" style="text-align: center;">
                                    <div>
                                        <div class="cell100">
                                            <input size="2" type="number" class="homeFullScore number" min="0" placeholder="0" value="0">
                                        </div>
                                    </div>
                                    <div style="width: 140px;">
                                        <h2 style="color: black; margin: 0;">-</h2>
                                    </div>
                                    <div>
                                        <div class="cell100">
                                            <input type="number" class="awayFullScore number" min="0" placeholder="0" value="0">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        `;
                        isFulltimeHighlightsAdded = true;
                    }
                    break;

                case 'halftime':
                    if (!isHalftimeHighlightsAdded) {
                        optionDiv.innerHTML += `
                            <h3>Half Time - Goal</h3>
                            <div style="background: #e8f0f8; border-radius: 6px; padding: 10px;" class="score">
                                <div class="col col100" style="text-align: center; padding-top: 4px;">
                                    <div><label>Home score:</label></div>
                                    <div style="width: 140px"></div>
                                    <div><label>Away score:</label></div>
                                </div>
                                <div class="col col100 number-input-fz" style="text-align: center;">
                                    <div>
                                        <div class="cell100">
                                            <input size="2" type="number" class="homeHalfScore number" min="0" placeholder="0" value="0">
                                        </div>
                                    </div>
                                    <div style="width: 140px;">
                                        <h2 style="color: black; margin: 0;">-</h2>
                                    </div>
                                    <div>
                                        <div class="cell100">
                                            <input type="number" class="awayHalfScore number" min="0" placeholder="0" value="0">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        `;
                        isHalftimeHighlightsAdded = true;
                    }
                    break;

                default:
                    // Altre grafiche non richiedono opzioni aggiuntive
                    break;
            }

            graphicsOptionsDiv.appendChild(optionDiv);
            console.log(`Opzioni aggiunte per grafica: ${cb.value}`);
        }
    });

    // Ripristina i valori degli input salvati
    const newInputs = graphicsOptionsDiv.querySelectorAll('input');
    newInputs.forEach(input => {
        if (existingInputs.hasOwnProperty(input.className)) {
            input.value = existingInputs[input.className];
            console.log(`Ripristinato valore per ${input.className}: ${input.value}`);
        }
    });
}

// Funzione per caricare un'immagine e restituire una Promise
function loadImage(src) {
    return new Promise((resolve) => {
        const img = new Image();
        img.src = src;
        img.crossOrigin = "Anonymous";
        img.onload = () => resolve(img);
        img.onerror = () => {
            console.error(`Errore nel caricamento dell'immagine: ${src}`);
            resolve(null);
        };
    });
}

// Funzione per scaricare tutte le immagini generate
function downloadAllPreviews() {
    const canvases = carouselContainer.querySelectorAll('canvas');
    if (canvases.length === 0) {
        alert('Nessuna anteprima da scaricare.');
        return;
    }
    canvases.forEach(canvas => {
        const filename = getFilenameForCanvas(canvas);
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/png');
        link.download = filename;
        link.click();
    });
}

// Funzione per ottenere il nome del file per un canvas
function getFilenameForCanvas(canvas) {
    const { timeZoneAbbreviation, graphicName, format, homeTeamName, awayTeamName, day } = canvas.dataset;
    let filename = '';

    if (graphicName === 'livematch' || graphicName === 'highlights') {
        filename = `H_Live Match_${homeTeamName} vs ${awayTeamName}_${day}.png`;
    } else {
        filename = `${capitalizeFirstLetter(graphicName)}_${homeTeamName} vs ${awayTeamName}_${format}_${day}_${timeZoneAbbreviation.toLowerCase()}.png`;
    }

    return filename;
}

// Funzione per formattare la data
function formatDate(dateObj, timeZoneAbbreviation = 'CET', locale = 'en-GB') {
    const optionsDate = { month: 'long', day: 'numeric' };
    const formattedDate = dateObj.toLocaleDateString(locale, optionsDate).toUpperCase();
    const formattedTime = dateObj.toLocaleTimeString(locale, { hour: '2-digit', minute: '2-digit', hour12: false });
    return `${formattedDate} | ${formattedTime} ${timeZoneAbbreviation}`;
}

// Funzione per disegnare un'immagine su canvas mantenendo l'aspect ratio
function drawImageCover(ctx, img, canvasWidth, canvasHeight) {
    const imgAspect = img.width / img.height;
    const canvasAspect = canvasWidth / canvasHeight;

    let renderWidth, renderHeight, xStart, yStart;

    if (imgAspect > canvasAspect) {
        renderHeight = canvasHeight;
        renderWidth = img.width * (canvasHeight / img.height);
        xStart = (canvasWidth - renderWidth) / 2;
        yStart = 0;
    } else {
        renderWidth = canvasWidth;
        renderHeight = img.height * (canvasWidth / img.width);
        xStart = 0;
        yStart = (canvasHeight - renderHeight) / 2;
    }

    ctx.drawImage(img, xStart, yStart, renderWidth, renderHeight);
}

// Funzione per disegnare testo con letter-spacing personalizzato
function drawTextWithLetterSpacing(ctx, text, x, y, letterSpacing) {
    text.split('').forEach(char => {
        ctx.fillText(char, x, y);
        x += ctx.measureText(char).width + letterSpacing;
    });
}

// Funzione per misurare la larghezza del testo con letter-spacing
function measureTextWithLetterSpacing(ctx, text, letterSpacing) {
    return text.split('').reduce((total, char) => total + ctx.measureText(char).width + letterSpacing, -letterSpacing);
}

// Funzione per ottenere il nome visualizzabile della squadra
function getTeamDisplayName(teamValue) {
    const team = currentTeams.find(t => t.value === teamValue);
    return team ? team.text : teamValue;
}

// Funzione per creare le tab delle grafiche
function createGraphicTabs(selectedGraphics, selectedGraphicName) {
    const previewSection = document.querySelector('.preview-container');
    const tabsContainer = document.createElement('div');
    tabsContainer.classList.add('graphic-tabs');

    selectedGraphics.forEach((graphicName, index) => {
        const tabButton = document.createElement('button');
        tabButton.textContent = capitalizeFirstLetter(graphicName);
        tabButton.classList.add('graphic-tab');
        tabButton.dataset.graphicName = graphicName;

        // Imposta la tab attiva
        if (selectedGraphicName ? graphicName === selectedGraphicName : index === 0) {
            tabButton.classList.add('active');
        }

        tabButton.addEventListener('click', () => {
            document.querySelectorAll('.graphic-tab').forEach(tab => tab.classList.remove('active'));
            tabButton.classList.add('active');

            document.querySelectorAll('.graphic-preview-container').forEach(container => {
                container.style.display = container.dataset.graphicName === graphicName ? 'block' : 'none';
            });
        });

        tabsContainer.appendChild(tabButton);
    });

    const existingTabs = previewSection.querySelector('.graphic-tabs');
    if (existingTabs) previewSection.removeChild(existingTabs);
    previewSection.insertBefore(tabsContainer, previewSection.firstChild);
}

// Funzione per disegnare i loghi delle squadre
async function drawTeamLogos(ctx, style) {
    // Disegna il logo della squadra di casa
    if (style.homeLogo) {
        const homeLogoSrc = homeTeamSelect.value === 'como1907'
            ? `images/badge/all/como.png`
            : `images/badge/${championshipSelect.value}/${homeTeamSelect.value}.png`;
        const homeLogo = await loadImage(homeLogoSrc);
        if (homeLogo) ctx.drawImage(homeLogo, style.homeLogo.x, style.homeLogo.y, style.homeLogo.width, style.homeLogo.height);
        else console.warn(`Logo squadra di casa non trovato: ${homeLogoSrc}`);
    }

    // Disegna il logo della squadra ospite
    if (style.awayLogo) {
        const awayLogoSrc = awayTeamSelect.value === 'como1907'
            ? `images/badge/all/como.png`
            : `images/badge/${championshipSelect.value}/${awayTeamSelect.value}.png`;
        const awayLogo = await loadImage(awayLogoSrc);
        if (awayLogo) ctx.drawImage(awayLogo, style.awayLogo.x, style.awayLogo.y, style.awayLogo.width, style.awayLogo.height);
        else console.warn(`Logo squadra ospite non trovato: ${awayLogoSrc}`);
    }

    // Disegna il logo del campionato se presente
    if (style.championshipLogo) {
        const championshipLogoSrc = `images/logos/${championshipSelect.value}-logo.png`;
        const championshipLogo = await loadImage(championshipLogoSrc);
        if (championshipLogo) ctx.drawImage(championshipLogo, style.championshipLogo.x, style.championshipLogo.y, style.championshipLogo.width, style.championshipLogo.height);
        else console.warn(`Logo campionato non trovato: ${championshipLogoSrc}`);
    }
}

// Funzioni per disegnare specifiche grafiche
async function drawGoalGraphic(ctx, style, timeVersion, adjustedDateObj, graphicName) {
    // Recupera il giocatore selezionato
    const playerSelect = document.getElementById('goalPlayerSelect');
    const selectedPlayer = players.find(p => p.value === (playerSelect ? playerSelect.value : ''));
    const playerName = selectedPlayer ? selectedPlayer.text : '';

    // Disegna il nome del giocatore
    if (style.playerName) {
        ctx.font = `${style.playerName.fontSize}px ${style.playerName.font}`;
        ctx.fillStyle = style.playerName.color;
        ctx.textAlign = 'left';
        ctx.shadowColor = 'rgba(0, 0, 0, 0.58)';
        ctx.shadowBlur = 8;
        ctx.shadowOffsetX = 2;
        ctx.shadowOffsetY = 2;

        if (style.playerName.letterSpacing) {
            drawTextWithLetterSpacing(ctx, playerName, style.playerName.x, style.playerName.y, style.playerName.letterSpacing);
        } else {
            ctx.fillText(playerName, style.playerName.x, style.playerName.y);
        }

        ctx.shadowColor = 'transparent';
    }

    // Disegna i loghi delle squadre
    await drawTeamLogos(ctx, style);

    // Recupera i punteggi
    let homeScore = '0';
    let awayScore = '0';
    if (graphicName === 'fulltime') {
        homeScore = getInputValue('.homeFullScore');
        awayScore = getInputValue('.awayFullScore');
    } else if (graphicName === 'halftime' || graphicName === 'goal') {
        homeScore = getInputValue('.homeHalfScore');
        awayScore = getInputValue('.awayHalfScore');
    }

    // Disegna la data e l'ora del match
    if (style.dateTime) {
        const dateText = formatDate(adjustedDateObj, 'CET', 'en-GB');
        ctx.font = `${style.dateTime.fontSize}px ${style.dateTime.font}`;
        ctx.fillStyle = style.dateTime.color;
        ctx.textAlign = 'left';
        if (style.dateTime.letterSpacing) {
            drawTextWithLetterSpacing(ctx, dateText, style.dateTime.x, style.dateTime.y, style.dateTime.letterSpacing);
        } else {
            ctx.fillText(dateText, style.dateTime.x, style.dateTime.y);
        }
    }

    // Disegna i punteggi
    if (style.homeScore && style.awayScore) {
        ctx.font = `bold ${style.homeScore.fontSize}px ${style.homeScore.font}`;
        ctx.fillStyle = style.homeScore.color;
        ctx.textAlign = 'left';
        if (style.homeScore.letterSpacing) {
            drawTextWithLetterSpacing(ctx, homeScore, style.homeScore.x, style.homeScore.y, style.homeScore.letterSpacing);
        } else {
            ctx.fillText(homeScore, style.homeScore.x, style.homeScore.y);
        }

        ctx.font = `bold ${style.awayScore.fontSize}px ${style.awayScore.font}`;
        ctx.fillStyle = style.awayScore.color;
        ctx.textAlign = 'left';
        if (style.awayScore.letterSpacing) {
            drawTextWithLetterSpacing(ctx, awayScore, style.awayScore.x, style.awayScore.y, style.awayScore.letterSpacing);
        } else {
            ctx.fillText(awayScore, style.awayScore.x, style.awayScore.y);
        }
    }

    // Disegna il match day se necessario
    if (style.matchDay) {
        const matchDayValue = matchDayInput.value.trim() || '1';
        ctx.font = `bold ${style.matchDay.fontSize}px ${style.matchDay.font}`;
        ctx.fillStyle = style.matchDay.color;
        ctx.textAlign = 'left';
        const matchDayText = `MATCHDAY ${matchDayValue}`;
        if (style.matchDay.letterSpacing) {
            drawTextWithLetterSpacing(ctx, matchDayText, style.matchDay.x, style.matchDay.y, style.matchDay.letterSpacing);
        } else {
            ctx.fillText(matchDayText, style.matchDay.x, style.matchDay.y);
        }
    }
}

async function drawHighlightsGraphic(ctx, style, graphicName) {
    // Disegna i loghi delle squadre
    await drawTeamLogos(ctx, style);

    // Recupera i punteggi
    const homeScore = getInputValue('.homeFullScore') || '0';
    const awayScore = getInputValue('.awayFullScore') || '0';
    const combinedText = `${homeScore}-${awayScore}`;

    // Disegna il testo combinato
    ctx.font = `bold ${style.combinedScore.fontSize}px ${style.combinedScore.font}`;
    ctx.fillStyle = style.combinedScore.color;
    ctx.textAlign = style.combinedScore.textAlign;
    ctx.fillText(combinedText, style.combinedScore.x, style.combinedScore.y);
}

async function drawMatchGraphic(ctx, style, timeVersion, adjustedDateObj, graphicName) {
    // Disegna il titolo 'NEXT MATCH' se presente
    if (style.nextMatchTitle) {
        ctx.font = `bold ${style.nextMatchTitle.fontSize}px ${style.nextMatchTitle.font}`;
        ctx.fillStyle = style.nextMatchTitle.color;
        ctx.textAlign = 'left';
        if (style.nextMatchTitle.letterSpacing) {
            drawTextWithLetterSpacing(ctx, 'NEXT MATCH', style.nextMatchTitle.x, style.nextMatchTitle.y, style.nextMatchTitle.letterSpacing);
        } else {
            ctx.fillText('NEXT MATCH', style.nextMatchTitle.x, style.nextMatchTitle.y);
        }
    }

    // Disegna il nome della squadra di casa
    let homeTeamNameWidth;
    if (style.homeTeamName) {
        const homeTeamText = getTeamDisplayName(homeTeamSelect.value).toUpperCase();
        ctx.font = `${style.homeTeamName.fontSize}px ${style.homeTeamName.font}`;
        ctx.fillStyle = style.homeTeamName.color;
        ctx.textAlign = 'left';
        if (style.homeTeamName.letterSpacing) {
            homeTeamNameWidth = measureTextWithLetterSpacing(ctx, homeTeamText, style.homeTeamName.letterSpacing);
            drawTextWithLetterSpacing(ctx, homeTeamText, style.homeTeamName.x, style.homeTeamName.y, style.homeTeamName.letterSpacing);
        } else {
            ctx.fillText(homeTeamText, style.homeTeamName.x, style.homeTeamName.y);
            homeTeamNameWidth = ctx.measureText(homeTeamText).width;
        }
    }

    // Calcola la posizione x per 'vs.' in base alla larghezza del nome della squadra di casa
    if (style.vsText && homeTeamNameWidth !== undefined) {
        const spacingAfterHomeTeamName = 10;
        const vsTextX = style.homeTeamName.x + homeTeamNameWidth + spacingAfterHomeTeamName;
        ctx.font = `${style.vsText.fontSize}px ${style.vsText.font}`;
        ctx.fillStyle = style.vsText.color;
        ctx.textAlign = 'left';
        if (style.vsText.letterSpacing) {
            drawTextWithLetterSpacing(ctx, 'vs.', vsTextX, style.vsText.y, style.vsText.letterSpacing);
        } else {
            ctx.fillText('vs.', vsTextX, style.vsText.y);
        }
    }

    // Disegna il nome della squadra ospite
    if (style.awayTeamName) {
        const awayTeamText = getTeamDisplayName(awayTeamSelect.value).toUpperCase();
        ctx.font = `${style.awayTeamName.fontSize}px ${style.awayTeamName.font}`;
        ctx.fillStyle = style.awayTeamName.color;
        ctx.textAlign = 'left';
        if (style.awayTeamName.letterSpacing) {
            drawTextWithLetterSpacing(ctx, awayTeamText, style.awayTeamName.x, style.awayTeamName.y, style.awayTeamName.letterSpacing);
        } else {
            ctx.fillText(awayTeamText, style.awayTeamName.x, style.awayTeamName.y);
        }
    }

    // Disegna la data del match
    if (style.dateTime) {
        const dateText = formatDate(adjustedDateObj, timeVersion.timeZoneAbbreviation, 'en-GB');
        ctx.font = `${style.dateTime.fontSize}px ${style.dateTime.font}`;
        ctx.fillStyle = style.dateTime.color;
        ctx.textAlign = 'left';
        if (style.dateTime.letterSpacing) {
            drawTextWithLetterSpacing(ctx, dateText, style.dateTime.x, style.dateTime.y, style.dateTime.letterSpacing);
        } else {
            ctx.fillText(dateText, style.dateTime.x, style.dateTime.y);
        }
    }

    // Disegna il match day
    if (style.matchDay) {
        const matchDayValue = matchDayInput.value.trim() || '1';
        const matchDayText = `MATCHDAY ${matchDayValue}`;
        ctx.font = `${style.matchDay.fontSize}px ${style.matchDay.font}`;
        ctx.fillStyle = style.matchDay.color;
        ctx.textAlign = 'left';
        if (style.matchDay.letterSpacing) {
            drawTextWithLetterSpacing(ctx, matchDayText, style.matchDay.x, style.matchDay.y, style.matchDay.letterSpacing);
        } else {
            ctx.fillText(matchDayText, style.matchDay.x, style.matchDay.y);
        }
    }

    // Disegna la posizione dello stadio
    if (style.stadiumLocation) {
        const stadiumLocationValue = stadiumInput.value.trim() || '';
        ctx.font = `${style.stadiumLocation.fontSize}px ${style.stadiumLocation.font}`;
        ctx.fillStyle = style.stadiumLocation.color;
        ctx.textAlign = 'left';
        if (style.stadiumLocation.letterSpacing) {
            drawTextWithLetterSpacing(ctx, stadiumLocationValue, style.stadiumLocation.x, style.stadiumLocation.y, style.stadiumLocation.letterSpacing);
        } else {
            ctx.fillText(stadiumLocationValue, style.stadiumLocation.x, style.stadiumLocation.y);
        }
    }
}

// Funzione per disegnare la grafica 'livematch'
async function drawLivematchGraphic(ctx, style, adjustedDateObj, overlayName) {
    // Aggiunta del titolo per 'livematch'
    const formatSuffix = overlayName.replace('overlay_', '');
    const championship = championshipSelect.value;
    const titleImageSrc = `images/graphics/livematch/title/${championship}_${formatSuffix}.png`;
    console.log(`Caricamento titolo: ${titleImageSrc}`);

    const titleImage = await loadImage(titleImageSrc);
    if (titleImage) {
        const titleX = (ctx.canvas.width - titleImage.width) / 2;
        ctx.drawImage(titleImage, titleX, 0, titleImage.width, titleImage.height);
        console.log(`Titolo disegnato: ${titleImageSrc}`);
    } else {
        console.warn(`Titolo non trovato: ${titleImageSrc}`);
    }

    // Disegna i loghi delle squadre
    await drawTeamLogos(ctx, style);

    // Recupera i punteggi
    let homeScore = '0';
    let awayScore = '0';
    if (['fulltime'].includes(style.homeScore)) {
        homeScore = getInputValue('.homeFullScore');
        awayScore = getInputValue('.awayFullScore');
    } else if (['halftime', 'goal'].includes(style.homeScore)) {
        homeScore = getInputValue('.homeHalfScore');
        awayScore = getInputValue('.awayHalfScore');
    }

    // Disegna la data e l'ora del match
    if (style.dateTime) {
        const dateText = formatDate(adjustedDateObj, 'CET', 'en-GB');
        ctx.font = `${style.dateTime.fontSize}px ${style.dateTime.font}`;
        ctx.fillStyle = style.dateTime.color;
        ctx.textAlign = 'left';
        if (style.dateTime.letterSpacing) {
            drawTextWithLetterSpacing(ctx, dateText, style.dateTime.x, style.dateTime.y, style.dateTime.letterSpacing);
        } else {
            ctx.fillText(dateText, style.dateTime.x, style.dateTime.y);
        }
    }

    // Disegna i punteggi
    if (style.homeScore && style.awayScore) {
        ctx.font = `bold ${style.homeScore.fontSize}px ${style.homeScore.font}`;
        ctx.fillStyle = style.homeScore.color;
        ctx.textAlign = 'left';
        if (style.homeScore.letterSpacing) {
            drawTextWithLetterSpacing(ctx, homeScore, style.homeScore.x, style.homeScore.y, style.homeScore.letterSpacing);
        } else {
            ctx.fillText(homeScore, style.homeScore.x, style.homeScore.y);
        }

        ctx.font = `bold ${style.awayScore.fontSize}px ${style.awayScore.font}`;
        ctx.fillStyle = style.awayScore.color;
        ctx.textAlign = 'left';
        if (style.awayScore.letterSpacing) {
            drawTextWithLetterSpacing(ctx, awayScore, style.awayScore.x, style.awayScore.y, style.awayScore.letterSpacing);
        } else {
            ctx.fillText(awayScore, style.awayScore.x, style.awayScore.y);
        }
    }

    // Disegna il match day
    if (style.matchDay) {
        const matchDayValue = matchDayInput.value.trim() || '1';
        const matchDayText = `MATCHDAY ${matchDayValue}`;
        ctx.font = `${style.matchDay.fontSize}px ${style.matchDay.font}`;
        ctx.fillStyle = style.matchDay.color;
        ctx.textAlign = 'left';
        if (style.matchDay.letterSpacing) {
            drawTextWithLetterSpacing(ctx, matchDayText, style.matchDay.x, style.matchDay.y, style.matchDay.letterSpacing);
        } else {
            ctx.fillText(matchDayText, style.matchDay.x, style.matchDay.y);
        }
    }
}

// Funzione di disegno di default per grafiche non specifiche
async function drawDefaultGraphic(ctx, style, graphicName, timeVersion, adjustedDateObj) {
    await drawTeamLogos(ctx, style);

    let homeScore = '0';
    let awayScore = '0';
    if (graphicName === 'fulltime') {
        homeScore = getInputValue('.homeFullScore');
        awayScore = getInputValue('.awayFullScore');
    } else if (graphicName === 'halftime' || graphicName === 'goal') {
        homeScore = getInputValue('.homeHalfScore');
        awayScore = getInputValue('.awayHalfScore');
    }

    // Disegna la data e l'ora del match
    if (style.dateTime) {
        const dateText = formatDate(adjustedDateObj, 'CET', 'en-GB');
        ctx.font = `bold ${style.dateTime.fontSize}px ${style.dateTime.font}`;
        ctx.fillStyle = style.dateTime.color;
        ctx.textAlign = 'left';
        if (style.dateTime.letterSpacing) {
            drawTextWithLetterSpacing(ctx, dateText, style.dateTime.x, style.dateTime.y, style.dateTime.letterSpacing);
        } else {
            ctx.fillText(dateText, style.dateTime.x, style.dateTime.y);
        }
    }

    // Disegna i punteggi
    if (style.homeScore && style.awayScore) {
        ctx.font = `bold ${style.homeScore.fontSize}px ${style.homeScore.font}`;
        ctx.fillStyle = style.homeScore.color;
        ctx.textAlign = 'left';
        if (style.homeScore.letterSpacing) {
            drawTextWithLetterSpacing(ctx, homeScore, style.homeScore.x, style.homeScore.y, style.homeScore.letterSpacing);
        } else {
            ctx.fillText(homeScore, style.homeScore.x, style.homeScore.y);
        }

        ctx.font = `bold ${style.awayScore.fontSize}px ${style.awayScore.font}`;
        ctx.fillStyle = style.awayScore.color;
        ctx.textAlign = 'left';
        if (style.awayScore.letterSpacing) {
            drawTextWithLetterSpacing(ctx, awayScore, style.awayScore.x, style.awayScore.y, style.awayScore.letterSpacing);
        } else {
            ctx.fillText(awayScore, style.awayScore.x, style.awayScore.y);
        }
    }

    // Disegna il match day
    if (style.matchDay) {
        const matchDayValue = matchDayInput.value.trim() || '1';
        const matchDayText = `MATCHDAY ${matchDayValue}`;
        ctx.font = `${style.matchDay.fontSize}px ${style.matchDay.font}`;
        ctx.fillStyle = style.matchDay.color;
        ctx.textAlign = 'left';
        if (style.matchDay.letterSpacing) {
            drawTextWithLetterSpacing(ctx, matchDayText, style.matchDay.x, style.matchDay.y, style.matchDay.letterSpacing);
        } else {
            ctx.fillText(matchDayText, style.matchDay.x, style.matchDay.y);
        }
    }
}

// Funzione per ottenere il valore di un input selezionato
function getInputValue(selector) {
    const input = document.querySelector(selector);
    return input ? input.value.trim() : '0';
}

// Funzione per creare le tab delle grafiche selezionate
function createGraphicTabs(selectedGraphics, selectedGraphicName) {
    const previewSection = document.querySelector('.preview-container');
    const tabsContainer = document.createElement('div');
    tabsContainer.classList.add('graphic-tabs');

    selectedGraphics.forEach((graphicName, index) => {
        const tabButton = document.createElement('button');
        tabButton.textContent = capitalizeFirstLetter(graphicName);
        tabButton.classList.add('graphic-tab');
        tabButton.dataset.graphicName = graphicName;

        // Imposta la tab attiva
        if (selectedGraphicName ? graphicName === selectedGraphicName : index === 0) {
            tabButton.classList.add('active');
        }

        tabButton.addEventListener('click', () => {
            document.querySelectorAll('.graphic-tab').forEach(tab => tab.classList.remove('active'));
            tabButton.classList.add('active');

            document.querySelectorAll('.graphic-preview-container').forEach(container => {
                container.style.display = container.dataset.graphicName === graphicName ? 'block' : 'none';
            });
        });

        tabsContainer.appendChild(tabButton);
    });

    const existingTabs = previewSection.querySelector('.graphic-tabs');
    if (existingTabs) previewSection.removeChild(existingTabs);
    previewSection.insertBefore(tabsContainer, previewSection.firstChild);
}

// Funzione per generare le anteprime delle grafiche selezionate
async function generatePreviews() {
    console.log('generatePreviews chiamato');
    await document.fonts.ready; // Assicurati che i font siano caricati

    const activeTab = document.querySelector('.graphic-tab.active');
    const selectedGraphicName = activeTab ? activeTab.dataset.graphicName : null;

    carouselContainer.innerHTML = ''; // Pulisce il contenitore delle anteprime

    // Recupera la data e l'ora del match
    const matchDateValue = matchDateInput.value;
    const matchTimeValue = matchTimeInput.value;
    let matchDateObj = matchDateValue && matchTimeValue ? new Date(`${matchDateValue}T${matchTimeValue}`) : new Date();

    console.log(`Generazione delle anteprime per il match del: ${matchDateObj}`);

    // Ottiene le grafiche selezionate tramite le checkbox
    const selectedGraphics = Array.from(graphicCheckboxes)
        .filter(cb => cb.checked)
        .map(cb => cb.value);

    // Crea le tab per le grafiche selezionate
    createGraphicTabs(selectedGraphics, selectedGraphicName);

    let previewsGenerated = 0;

    for (const graphicName of selectedGraphics) {
        console.log(`Elaborazione grafica: ${graphicName}`);
        const graphicPreviewContainer = document.createElement('div');
        graphicPreviewContainer.classList.add('graphic-preview-container');
        graphicPreviewContainer.dataset.graphicName = graphicName;

        // Mostra solo la grafica selezionata o la prima
        if (selectedGraphicName) {
            graphicPreviewContainer.style.display = graphicName === selectedGraphicName ? 'block' : 'none';
        } else if (previewsGenerated === 0) {
            graphicPreviewContainer.style.display = 'block';
        } else {
            graphicPreviewContainer.style.display = 'none';
        }

        const graphicFolder = `images/graphics/${graphicName}`;
        const availableFormats = graphicsFormats[graphicName];

        if (!availableFormats || availableFormats.length === 0) {
            console.log(`Nessun formato disponibile per la grafica ${graphicName}.`);
            continue;
        }

        for (const overlayName of availableFormats) {
            const dimensions = formats[overlayName];
            if (!dimensions) {
                console.warn(`Dimensioni non definite per il formato ${overlayName}.`);
                continue;
            }

            let bgImageSrc = backgroundImages[graphicName.toLowerCase()] || `${graphicFolder}/1.png`;

            if (graphicName === 'goal') {
                const playerSelect = document.getElementById('goalPlayerSelect');
                const selectedPlayer = players.find(p => p.value === (playerSelect ? playerSelect.value : ''));
                const playerName = selectedPlayer ? selectedPlayer.text.replace(/\s+/g, '_').toLowerCase() : 'default_player';
                const position = isHomeFixed ? 'home' : 'away';
                bgImageSrc = backgroundImages['goal'] || `images/graphics/goal/player/${position}/${playerName}.png`;
            }

            const overlayImageSrc = `${graphicFolder}/${overlayName}.png`;

            console.log(`Caricamento immagini: ${bgImageSrc}, ${overlayImageSrc}`);

            const [bgImage, overlayImage] = await Promise.all([
                loadImage(bgImageSrc),
                loadImage(overlayImageSrc)
            ]);

            if (!overlayImage) {
                console.log(`Overlay non trovato per la grafica ${graphicName} nel formato ${overlayName}. Salto questo formato.`);
                continue;
            }

            // Determina le versioni temporali (fusi orari) da generare
            let timeVersions = [{ timeOffsetHours: 0, timeZoneAbbreviation: 'CET' }];
            if (['nextmatch', 'matchday', 'kickoff'].includes(graphicName)) {
                timeVersions.push({ timeOffsetHours: 6, timeZoneAbbreviation: 'WIB' });
            }

            for (const timeVersion of timeVersions) {
                const adjustedDateObj = new Date(matchDateObj.getTime() + timeVersion.timeOffsetHours * 3600000);

                const canvas = document.createElement('canvas');
                canvas.width = dimensions.width;
                canvas.height = dimensions.height;
                const ctx = canvas.getContext('2d');

                // Disegna l'immagine di sfondo
                if (bgImage) {
                    drawImageCover(ctx, bgImage, canvas.width, canvas.height);
                } else {
                    ctx.fillStyle = '#ffffff';
                    ctx.fillRect(0, 0, canvas.width, canvas.height);
                    console.warn(`Immagine di sfondo non caricata per ${graphicName} nel formato ${overlayName}. Canvas riempito con bianco.`);
                }

                // Disegna l'overlay sopra lo sfondo
                drawImageCover(ctx, overlayImage, canvas.width, canvas.height);

                // Ottieni lo stile specifico per questa grafica e formato
                const style = graphicStyles[graphicName][overlayName];
                if (style) {
                    switch (graphicName) {
                        case 'goal':
                            await drawGoalGraphic(ctx, style, timeVersion, adjustedDateObj, graphicName);
                            break;
                        case 'highlights':
                            await drawHighlightsGraphic(ctx, style, graphicName);
                            break;
                        case 'nextmatch':
                        case 'matchday':
                            await drawMatchGraphic(ctx, style, timeVersion, adjustedDateObj, graphicName);
                            break;
                        case 'livematch':
                            await drawLivematchGraphic(ctx, style, timeVersion, adjustedDateObj, overlayName);
                            break;
                        default:
                            await drawDefaultGraphic(ctx, style, graphicName, timeVersion, adjustedDateObj);
                            break;
                    }
                }

                // Imposta gli attributi data-* sul canvas
                Object.assign(canvas.dataset, {
                    timeZoneAbbreviation: timeVersion.timeZoneAbbreviation || '',
                    graphicName: graphicName,
                    format: overlayName.replace('overlay_', ''),
                    homeTeamName: getTeamDisplayName(homeTeamSelect.value),
                    awayTeamName: getTeamDisplayName(awayTeamSelect.value),
                    day: adjustedDateObj.getDate().toString().padStart(2, '0') + adjustedDateObj.toLocaleString('default', { month: 'short' }).toLowerCase()
                });

                // Crea un div per l'anteprima e aggiungi il canvas
                const previewDiv = document.createElement('div');
                previewDiv.classList.add('carousel-item');
                previewDiv.appendChild(canvas);

                // Aggiunge il pulsante di download individuale
                const downloadLink = document.createElement('a');
                downloadLink.textContent = 'Download';
                downloadLink.href = canvas.toDataURL('image/png');
                downloadLink.download = getFilenameForCanvas(canvas);
                downloadLink.classList.add('download-link');
                previewDiv.appendChild(downloadLink);

                graphicPreviewContainer.appendChild(previewDiv);
                console.log(`Anteprima aggiunta per grafica: ${graphicName}, formato: ${overlayName}, fuso orario: ${timeVersion.timeZoneAbbreviation}`);
                previewsGenerated++;
            }
        }

        carouselContainer.appendChild(graphicPreviewContainer);
    }

    // Gestisce la visibilità della sezione preview
    const previewSection = document.querySelector('.preview');
    if (previewsGenerated > 0) {
        previewSection.classList.add('visible');
    } else {
        previewSection.classList.remove('visible');
    }

    console.log('generatePreviews completato');
}

// Funzione per generare i campi di upload delle immagini di sfondo
function generateBackgroundUploadFields() {
    graphicCheckboxes.forEach(cb => {
        const graphicId = cb.value.toLowerCase();
        if (cb.checked) {
            let existingUploadItem = Array.from(uploadContainer.children).find(child => child.querySelector(`input[data-graphic-id="${graphicId}"]`));

            if (!existingUploadItem) {
                const uploadItem = document.createElement('div');
                uploadItem.classList.add('upload-item');

                const label = document.createElement('label');
                label.setAttribute('for', `background-${graphicId}`);
                label.textContent = `${capitalizeFirstLetter(graphicId)}`;

                const input = document.createElement('input');
                input.type = 'file';
                input.id = `background-${graphicId}`;
                input.name = `background-${graphicId}`;
                input.accept = 'image/*';
                input.dataset.graphicId = graphicId;

                uploadItem.appendChild(label);
                uploadItem.appendChild(input);
                uploadContainer.appendChild(uploadItem);
            }
        } else {
            const uploadInput = uploadContainer.querySelector(`input[data-graphic-id="${graphicId}"]`);
            if (uploadInput) {
                const uploadItem = uploadInput.parentElement;
                uploadContainer.removeChild(uploadItem);
                delete backgroundImages[graphicId];
            }
        }
    });

    addUploadItemListeners();
}

// Funzione per aggiungere gli event listeners per gli upload-item
function addUploadItemListeners() {
    const uploadItems = document.querySelectorAll('.upload-item input[type="file"]');

    uploadItems.forEach(input => {
        input.addEventListener('change', function() {
            const uploadItem = this.closest('.upload-item');
            if (this.files && this.files.length > 0) {
                uploadItem.classList.add('selected');
            } else {
                uploadItem.classList.remove('selected');
            }
        });
    });
}

// Funzione per alternare la visibilità delle sezioni
function toggleSections() {
    toggleDateTimeSection();
    toggleMatchDaySection();
    toggleStadiumLocationSection();
}


function toggleStadiumLocationSection() {
    const requiresStadiumLocation = Array.from(graphicCheckboxes)
        .filter(cb => cb.checked)
        .some(cb => graphicsRequireStadiumLocation.includes(cb.value));

    stadiumLocationSection.style.display = requiresStadiumLocation ? 'block' : 'none';
}

function toggleMatchDaySection() {
    const requiresMatchDay = Array.from(graphicCheckboxes)
        .filter(cb => cb.checked)
        .some(cb => graphicsRequireMatchDay.includes(cb.value));

    matchDaySection.style.display = requiresMatchDay ? 'flex' : 'none';
}

function toggleDateTimeSection() {
    const requiresDateTime = Array.from(graphicCheckboxes)
        .filter(cb => cb.checked)
        .some(cb => graphicsRequireDateTime.includes(cb.value));

    dateTimeSection.style.display = requiresDateTime ? 'block' : 'none';
}

// Funzione per aggiornare la visibilità dell'intestazione delle immagini
function updateImagesHeaderVisibility() {
    const imagesHeader = document.getElementById('imagesHeader');
    const anyGraphicSelected = Array.from(graphicCheckboxes).some(cb => cb.checked);

    imagesHeader.style.display = anyGraphicSelected ? 'block' : 'none';
}

// Funzione per gestire le modifiche alle grafiche selezionate
function handleGraphicsChange() {
    generateBackgroundUploadFields();
    generatePreviews();
    updateImagesHeaderVisibility();
}

// Funzione per ottenere il valore di un input
function getInputValue(selector) {
    const input = document.querySelector(selector);
    return input ? input.value.trim() : '0';
}

// Funzione per disegnare una grafica di default o non specifica
async function drawDefaultGraphic(ctx, style, graphicName, timeVersion, adjustedDateObj) {
    await drawTeamLogos(ctx, style);

    let homeScore = '0';
    let awayScore = '0';
    if (graphicName === 'fulltime') {
        homeScore = getInputValue('.homeFullScore');
        awayScore = getInputValue('.awayFullScore');
    } else if (graphicName === 'halftime' || graphicName === 'goal') {
        homeScore = getInputValue('.homeHalfScore');
        awayScore = getInputValue('.awayHalfScore');
    }

    // Disegna la data e l'ora del match
    if (style.dateTime) {
        const dateText = formatDate(adjustedDateObj, 'CET', 'en-GB');
        ctx.font = `bold ${style.dateTime.fontSize}px ${style.dateTime.font}`;
        ctx.fillStyle = style.dateTime.color;
        ctx.textAlign = 'left';
        if (style.dateTime.letterSpacing) {
            drawTextWithLetterSpacing(ctx, dateText, style.dateTime.x, style.dateTime.y, style.dateTime.letterSpacing);
        } else {
            ctx.fillText(dateText, style.dateTime.x, style.dateTime.y);
        }
    }

    // Disegna i punteggi
    if (style.homeScore && style.awayScore) {
        ctx.font = `bold ${style.homeScore.fontSize}px ${style.homeScore.font}`;
        ctx.fillStyle = style.homeScore.color;
        ctx.textAlign = 'left';
        if (style.homeScore.letterSpacing) {
            drawTextWithLetterSpacing(ctx, homeScore, style.homeScore.x, style.homeScore.y, style.homeScore.letterSpacing);
        } else {
            ctx.fillText(homeScore, style.homeScore.x, style.homeScore.y);
        }

        ctx.font = `bold ${style.awayScore.fontSize}px ${style.awayScore.font}`;
        ctx.fillStyle = style.awayScore.color;
        ctx.textAlign = 'left';
        if (style.awayScore.letterSpacing) {
            drawTextWithLetterSpacing(ctx, awayScore, style.awayScore.x, style.awayScore.y, style.awayScore.letterSpacing);
        } else {
            ctx.fillText(awayScore, style.awayScore.x, style.awayScore.y);
        }
    }

    // Disegna il match day
    if (style.matchDay) {
        const matchDayValue = matchDayInput.value.trim() || '1';
        const matchDayText = `MATCHDAY ${matchDayValue}`;
        ctx.font = `${style.matchDay.fontSize}px ${style.matchDay.font}`;
        ctx.fillStyle = style.matchDay.color;
        ctx.textAlign = 'left';
        if (style.matchDay.letterSpacing) {
            drawTextWithLetterSpacing(ctx, matchDayText, style.matchDay.x, style.matchDay.y, style.matchDay.letterSpacing);
        } else {
            ctx.fillText(matchDayText, style.matchDay.x, style.matchDay.y);
        }
    }
}

// Funzione per formattare la data
function formatDate(dateObj, timeZoneAbbreviation = 'CET', locale = 'en-GB') {
    const optionsDate = { month: 'long', day: 'numeric' };
    const formattedDate = dateObj.toLocaleDateString(locale, optionsDate).toUpperCase();
    const formattedTime = dateObj.toLocaleTimeString(locale, { hour: '2-digit', minute: '2-digit', hour12: false });
    return `${formattedDate} | ${formattedTime} ${timeZoneAbbreviation}`;
}

// Funzione per creare le tab delle grafiche selezionate
function createGraphicTabs(selectedGraphics, selectedGraphicName) {
    const previewSection = document.querySelector('.preview-container');
    const tabsContainer = document.createElement('div');
    tabsContainer.classList.add('graphic-tabs');

    selectedGraphics.forEach((graphicName, index) => {
        const tabButton = document.createElement('button');
        tabButton.textContent = capitalizeFirstLetter(graphicName);
        tabButton.classList.add('graphic-tab');
        tabButton.dataset.graphicName = graphicName;

        // Imposta la tab attiva
        if (selectedGraphicName ? graphicName === selectedGraphicName : index === 0) {
            tabButton.classList.add('active');
        }

        tabButton.addEventListener('click', () => {
            document.querySelectorAll('.graphic-tab').forEach(tab => tab.classList.remove('active'));
            tabButton.classList.add('active');

            document.querySelectorAll('.graphic-preview-container').forEach(container => {
                container.style.display = container.dataset.graphicName === graphicName ? 'block' : 'none';
            });
        });

        tabsContainer.appendChild(tabButton);
    });

    const existingTabs = previewSection.querySelector('.graphic-tabs');
    if (existingTabs) previewSection.removeChild(existingTabs);
    previewSection.insertBefore(tabsContainer, previewSection.firstChild);
}

// Funzione per disegnare la grafica 'livematch'
async function drawLivematchGraphic(ctx, style, timeVersion, adjustedDateObj, overlayName) {
    // Aggiunta del titolo per 'livematch'
    const formatSuffix = overlayName.replace('overlay_', '');
    const championship = championshipSelect.value;
    const titleImageSrc = `images/graphics/livematch/title/${championship}_${formatSuffix}.png`;
    console.log(`Caricamento titolo: ${titleImageSrc}`);

    const titleImage = await loadImage(titleImageSrc);
    if (titleImage) {
        const titleX = (ctx.canvas.width - titleImage.width) / 2;
        ctx.drawImage(titleImage, titleX, 0, titleImage.width, titleImage.height);
        console.log(`Titolo disegnato: ${titleImageSrc}`);
    } else {
        console.warn(`Titolo non trovato: ${titleImageSrc}`);
    }

    // Disegna i loghi delle squadre
    await drawTeamLogos(ctx, style);

    // Recupera i punteggi
    let homeScore = '0';
    let awayScore = '0';
    if (['fulltime'].includes(style.homeScore)) {
        homeScore = getInputValue('.homeFullScore');
        awayScore = getInputValue('.awayFullScore');
    } else if (['halftime', 'goal'].includes(style.homeScore)) {
        homeScore = getInputValue('.homeHalfScore');
        awayScore = getInputValue('.awayHalfScore');
    }

    // Disegna la data e l'ora del match
    if (style.dateTime) {
        const dateText = formatDate(adjustedDateObj, 'CET', 'en-GB');
        ctx.font = `${style.dateTime.fontSize}px ${style.dateTime.font}`;
        ctx.fillStyle = style.dateTime.color;
        ctx.textAlign = 'left';
        if (style.dateTime.letterSpacing) {
            drawTextWithLetterSpacing(ctx, dateText, style.dateTime.x, style.dateTime.y, style.dateTime.letterSpacing);
        } else {
            ctx.fillText(dateText, style.dateTime.x, style.dateTime.y);
        }
    }

    // Disegna i punteggi
    if (style.homeScore && style.awayScore) {
        ctx.font = `bold ${style.homeScore.fontSize}px ${style.homeScore.font}`;
        ctx.fillStyle = style.homeScore.color;
        ctx.textAlign = 'left';
        if (style.homeScore.letterSpacing) {
            drawTextWithLetterSpacing(ctx, homeScore, style.homeScore.x, style.homeScore.y, style.homeScore.letterSpacing);
        } else {
            ctx.fillText(homeScore, style.homeScore.x, style.homeScore.y);
        }

        ctx.font = `bold ${style.awayScore.fontSize}px ${style.awayScore.font}`;
        ctx.fillStyle = style.awayScore.color;
        ctx.textAlign = 'left';
        if (style.awayScore.letterSpacing) {
            drawTextWithLetterSpacing(ctx, awayScore, style.awayScore.x, style.awayScore.y, style.awayScore.letterSpacing);
        } else {
            ctx.fillText(awayScore, style.awayScore.x, style.awayScore.y);
        }
    }

    // Disegna il match day
    if (style.matchDay) {
        const matchDayValue = matchDayInput.value.trim() || '1';
        const matchDayText = `MATCHDAY ${matchDayValue}`;
        ctx.font = `${style.matchDay.fontSize}px ${style.matchDay.font}`;
        ctx.fillStyle = style.matchDay.color;
        ctx.textAlign = 'left';
        if (style.matchDay.letterSpacing) {
            drawTextWithLetterSpacing(ctx, matchDayText, style.matchDay.x, style.matchDay.y, style.matchDay.letterSpacing);
        } else {
            ctx.fillText(matchDayText, style.matchDay.x, style.matchDay.y);
        }
    }
}

// Funzione per caricare i loghi delle squadre
async function drawTeamLogos(ctx, style) {
    // Disegna il logo della squadra di casa
    if (style.homeLogo) {
        const homeLogoSrc = homeTeamSelect.value === 'como1907'
            ? `images/badge/all/como.png`
            : `images/badge/${championshipSelect.value}/${homeTeamSelect.value}.png`;
        const homeLogo = await loadImage(homeLogoSrc);
        if (homeLogo) ctx.drawImage(homeLogo, style.homeLogo.x, style.homeLogo.y, style.homeLogo.width, style.homeLogo.height);
        else console.warn(`Logo squadra di casa non trovato: ${homeLogoSrc}`);
    }

    // Disegna il logo della squadra ospite
    if (style.awayLogo) {
        const awayLogoSrc = awayTeamSelect.value === 'como1907'
            ? `images/badge/all/como.png`
            : `images/badge/${championshipSelect.value}/${awayTeamSelect.value}.png`;
        const awayLogo = await loadImage(awayLogoSrc);
        if (awayLogo) ctx.drawImage(awayLogo, style.awayLogo.x, style.awayLogo.y, style.awayLogo.width, style.awayLogo.height);
        else console.warn(`Logo squadra ospite non trovato: ${awayLogoSrc}`);
    }

    // Disegna il logo del campionato se presente
    if (style.championshipLogo) {
        const championshipLogoSrc = `images/logos/${championshipSelect.value}-logo.png`;
        const championshipLogo = await loadImage(championshipLogoSrc);
        if (championshipLogo) ctx.drawImage(championshipLogo, style.championshipLogo.x, style.championshipLogo.y, style.championshipLogo.width, style.championshipLogo.height);
        else console.warn(`Logo campionato non trovato: ${championshipLogoSrc}`);
    }
}

// Funzione per disegnare un'immagine su canvas mantenendo l'aspect ratio
function drawImageCover(ctx, img, canvasWidth, canvasHeight) {
    const imgAspect = img.width / img.height;
    const canvasAspect = canvasWidth / canvasHeight;

    let renderWidth, renderHeight, xStart, yStart;

    if (imgAspect > canvasAspect) {
        renderHeight = canvasHeight;
        renderWidth = img.width * (canvasHeight / img.height);
        xStart = (canvasWidth - renderWidth) / 2;
        yStart = 0;
    } else {
        renderWidth = canvasWidth;
        renderHeight = img.height * (canvasWidth / img.width);
        xStart = 0;
        yStart = (canvasHeight - renderHeight) / 2;
    }

    ctx.drawImage(img, xStart, yStart, renderWidth, renderHeight);
}

// Funzione per disegnare testo con letter-spacing personalizzato
function drawTextWithLetterSpacing(ctx, text, x, y, letterSpacing) {
    text.split('').forEach(char => {
        ctx.fillText(char, x, y);
        x += ctx.measureText(char).width + letterSpacing;
    });
}

// Funzione per misurare la larghezza del testo con letter-spacing
function measureTextWithLetterSpacing(ctx, text, letterSpacing) {
    return text.split('').reduce((total, char) => total + ctx.measureText(char).width + letterSpacing, -letterSpacing);
}

// Funzione per ottenere il nome visualizzabile della squadra
function getTeamDisplayName(teamValue) {
    const team = currentTeams.find(t => t.value === teamValue);
    return team ? team.text : teamValue;
}

// Funzione per creare le tab delle grafiche selezionate
function createGraphicTabs(selectedGraphics, selectedGraphicName) {
    const previewSection = document.querySelector('.preview-container');
    const tabsContainer = document.createElement('div');
    tabsContainer.classList.add('graphic-tabs');

    selectedGraphics.forEach((graphicName, index) => {
        const tabButton = document.createElement('button');
        tabButton.textContent = capitalizeFirstLetter(graphicName);
        tabButton.classList.add('graphic-tab');
        tabButton.dataset.graphicName = graphicName;

        // Imposta la tab attiva
        if (selectedGraphicName ? graphicName === selectedGraphicName : index === 0) {
            tabButton.classList.add('active');
        }

        tabButton.addEventListener('click', () => {
            document.querySelectorAll('.graphic-tab').forEach(tab => tab.classList.remove('active'));
            tabButton.classList.add('active');

            document.querySelectorAll('.graphic-preview-container').forEach(container => {
                container.style.display = container.dataset.graphicName === graphicName ? 'block' : 'none';
            });
        });

        tabsContainer.appendChild(tabButton);
    });

    const existingTabs = previewSection.querySelector('.graphic-tabs');
    if (existingTabs) previewSection.removeChild(existingTabs);
    previewSection.insertBefore(tabsContainer, previewSection.firstChild);
}

// Funzione per disegnare una grafica di default o non specifica
async function drawDefaultGraphic(ctx, style, graphicName, timeVersion, adjustedDateObj) {
    await drawTeamLogos(ctx, style);

    let homeScore = '0';
    let awayScore = '0';
    if (graphicName === 'fulltime') {
        homeScore = getInputValue('.homeFullScore');
        awayScore = getInputValue('.awayFullScore');
    } else if (graphicName === 'halftime' || graphicName === 'goal') {
        homeScore = getInputValue('.homeHalfScore');
        awayScore = getInputValue('.awayHalfScore');
    }

    // Disegna la data e l'ora del match
    if (style.dateTime) {
        const dateText = formatDate(adjustedDateObj, 'CET', 'en-GB');
        ctx.font = `bold ${style.dateTime.fontSize}px ${style.dateTime.font}`;
        ctx.fillStyle = style.dateTime.color;
        ctx.textAlign = 'left';
        if (style.dateTime.letterSpacing) {
            drawTextWithLetterSpacing(ctx, dateText, style.dateTime.x, style.dateTime.y, style.dateTime.letterSpacing);
        } else {
            ctx.fillText(dateText, style.dateTime.x, style.dateTime.y);
        }
    }

    // Disegna i punteggi
    if (style.homeScore && style.awayScore) {
        ctx.font = `bold ${style.homeScore.fontSize}px ${style.homeScore.font}`;
        ctx.fillStyle = style.homeScore.color;
        ctx.textAlign = 'left';
        if (style.homeScore.letterSpacing) {
            drawTextWithLetterSpacing(ctx, homeScore, style.homeScore.x, style.homeScore.y, style.homeScore.letterSpacing);
        } else {
            ctx.fillText(homeScore, style.homeScore.x, style.homeScore.y);
        }

        ctx.font = `bold ${style.awayScore.fontSize}px ${style.awayScore.font}`;
        ctx.fillStyle = style.awayScore.color;
        ctx.textAlign = 'left';
        if (style.awayScore.letterSpacing) {
            drawTextWithLetterSpacing(ctx, awayScore, style.awayScore.x, style.awayScore.y, style.awayScore.letterSpacing);
        } else {
            ctx.fillText(awayScore, style.awayScore.x, style.awayScore.y);
        }
    }

    // Disegna il match day
    if (style.matchDay) {
        const matchDayValue = matchDayInput.value.trim() || '1';
        const matchDayText = `MATCHDAY ${matchDayValue}`;
        ctx.font = `${style.matchDay.fontSize}px ${style.matchDay.font}`;
        ctx.fillStyle = style.matchDay.color;
        ctx.textAlign = 'left';
        if (style.matchDay.letterSpacing) {
            drawTextWithLetterSpacing(ctx, matchDayText, style.matchDay.x, style.matchDay.y, style.matchDay.letterSpacing);
        } else {
            ctx.fillText(matchDayText, style.matchDay.x, style.matchDay.y);
        }
    }
}

// Funzione per inizializzare lo stato dei team dopo il caricamento iniziale
function initializeTeams() {
    populateTeams();
    updateGraphicsOptions();
    toggleSections();
    generatePreviews();
}

// Funzione per aggiungere gli event listeners per l'aggiornamento automatico
function addAutoUpdateListeners() {
    // Selezione del campionato
    championshipSelect.addEventListener('change', () => {
        console.log('Campionato cambiato');
        populateTeams();
        updateGraphicsOptions();
        toggleSections();
        generatePreviews();
    });

    // Selezione della squadra di casa
    homeTeamSelect.addEventListener('change', () => {
        console.log(`Home Team cambiato a: ${homeTeamSelect.value}`);
        generatePreviews();
    });

    // Selezione della squadra ospite
    awayTeamSelect.addEventListener('change', () => {
        console.log(`Away Team cambiato a: ${awayTeamSelect.value}`);
        generatePreviews();
    });

    // Selezione delle grafiche
    graphicCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            console.log(`Grafica ${checkbox.value} cambiata: ${checkbox.checked}`);
            updateGraphicsOptions();
            toggleSections();
            handleGraphicsChange();
        });
    });

    // Event listeners per le opzioni di personalizzazione delle grafiche
    graphicsOptionsDiv.addEventListener('input', () => {
        console.log('Opzioni grafiche modificate');
        generatePreviews();
    });

    // Event listener per il pulsante Generate
    generateBtn.addEventListener('click', () => {
        console.log('Pulsante Generate premuto');
        generatePreviews();
    });

    // Event listeners per i pulsanti Download All
    downloadAllButtons.forEach(button => {
        button.addEventListener('click', () => {
            downloadAllPreviews();
        });
    });

    // Event listener per il pulsante Swap
    swapBtn.addEventListener('click', (e) => {
        e.preventDefault();
        console.log('Pulsante Swap premuto');
        toggleTeams();
    });

    // Event listeners per i campi di upload delle immagini di sfondo
    uploadContainer.addEventListener('change', async (event) => {
        if (event.target && event.target.matches('input[type="file"]')) {
            const fileInput = event.target;
            const graphicId = fileInput.dataset.graphicId;
            const file = fileInput.files[0];
            if (file && file.type.startsWith('image/')) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    backgroundImages[graphicId] = e.target.result;
                    console.log(`Immagine di sfondo caricata per ${graphicId}`);
                    generatePreviews();
                };
                reader.readAsDataURL(file);
            }
        }
    });

    // Event listener per l'input della posizione dello stadio
    stadiumInput.addEventListener('input', () => {
        console.log('Posizione dello stadio modificata');
        generatePreviews();
    });

    // Event listeners per gli input della data e dell'ora
    matchDateInput.addEventListener('change', () => {
        console.log('Data del match cambiata');
        generatePreviews();
    });

    matchTimeInput.addEventListener('change', () => {
        console.log('Ora del match cambiata');
        generatePreviews();
    });

    // Event listener per l'input del matchday
    if (matchDayInput) {
        matchDayInput.addEventListener('input', () => {
            console.log('Matchday modificato');
            generatePreviews();
        });
    }
}

// Funzione per inizializzare tutto dopo il caricamento del DOM
function initialize() {
    addAutoUpdateListeners();
    initializeTeams();
    generateBackgroundUploadFields();
    updateImagesHeaderVisibility();
}

// Inizializza al caricamento del DOM
document.addEventListener('DOMContentLoaded', initialize);