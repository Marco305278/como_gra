// Elementi del DOM
const championshipSelect = document.getElementById('championship');
const homeTeamSelect = document.getElementById('homeTeam');
const awayTeamSelect = document.getElementById('awayTeam');
const swapBtn = document.getElementById('swapBtn');
const swapHome = document.getElementById('swapHome');
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
const decreaseButton = document.getElementById('decrease');
const increaseButton = document.getElementById('increase');
const halftimeCheckbox = document.getElementById('customHalfOverlay');
const fulltimeCheckbox = document.getElementById('customFullOverlay');


let jsondata = {};

async function fetchData() {
    try {
        const response = await fetch('info.json'); // Adjust the path as needed
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        jsondata = data;
    } catch (error) {
        console.error('Error fetching JSON data:', error);
    }
}

const apiKey = '29CqKVDrjSrQKCmAC5qXHayL';

const graphicStyles = {
    'fulltime': {
        'overlay_4x5': {
            homeLogo: { x: 70, y: 970, width: 150, height: 150 },
            awayLogo: { x: 70, y: 1145, width: 150, height: 150 },
            championshipLogo: { x: 70, y: 85, width: 130, height: 212 },
            homeScore: { x: 260, y: 1100, fontSize: 164, color: 'white', font: 'bodoni-72-bold', letterSpacing: 0 },
            awayScore: { x: 260, y: 1275, fontSize: 164, color: 'white', font: 'bodoni-72-bold', letterSpacing: 0 },
            dateTime: null,
            matchDay: null // Non richiesto per questa grafica
        },
        'overlay_9x16': {
            homeLogo: { x: 70, y: 1470, width: 150, height: 150 },
            awayLogo: { x: 70, y: 1645, width: 150, height: 150 },
            championshipLogo: { x: 70, y: 150, width: 130, height: 212 },
            homeScore: { x: 260, y: 1600, fontSize: 164, color: 'white', font: 'bodoni-72-bold', letterSpacing: 0 },
            awayScore: { x: 260, y: 1775, fontSize: 164, color: 'white', font: 'bodoni-72-bold', letterSpacing: 0 },
            dateTime: null,
            matchDay: null // Non richiesto per questa grafica
        }
    },
    'halftime': {
        'overlay_4x5': {
            homeLogo: { x: 70, y: 970, width: 150, height: 150 },
            awayLogo: { x: 70, y: 1145, width: 150, height: 150 },
            championshipLogo: { x: 70, y: 85, width: 130, height: 212 },
            homeScore: { x: 260, y: 1100, fontSize: 164, color: 'white', font: 'bodoni-72-bold', letterSpacing: 0 },
            awayScore: { x: 260, y: 1275, fontSize: 164, color: 'white', font: 'bodoni-72-bold', letterSpacing: 0 },
            dateTime: null,
            matchDay: null // Non richiesto per questa grafica
        },
        'overlay_9x16': {
            homeLogo: { x: 70, y: 1470, width: 150, height: 150 },
            awayLogo: { x: 70, y: 1645, width: 150, height: 150 },
            championshipLogo: { x: 70, y: 150, width: 130, height: 212 },
            homeScore: { x: 260, y: 1600, fontSize: 164, color: 'white', font: 'bodoni-72-bold', letterSpacing: 0 },
            awayScore: { x: 260, y: 1775, fontSize: 164, color: 'white', font: 'bodoni-72-bold', letterSpacing: 0 },
            dateTime: null,
            matchDay: null // Non richiesto per questa grafica
        }
    },
    'kickoff': {
        'overlay_4x5': {
            homeLogo: { x: 80, y: 980, width: 165, height: 165 },
            awayLogo: { x: 285, y: 980, width: 165, height: 165 },
            championshipLogo: { x: 70, y: 0, width: 130, height: 212 },
            homeScore: null,
            awayScore: null,
            dateTime: { x: 70, y: 295, fontSize: 62, color: 'white', font: 'bodoni-72-bold', letterSpacing: 2 },
            matchDay: null
        },
        'overlay_9x16': {
            homeLogo: { x: 80, y: 1280, width: 165, height: 165 },
            awayLogo: { x: 285, y: 1280, width: 165, height: 165 },
            championshipLogo: { x: 65, y: 290, width: 130, height: 212 },
            homeScore: null,
            awayScore: null,
            dateTime: { x: 70, y: 590, fontSize: 68, color: 'white', font: 'bodoni-72-bold', letterSpacing: 2 },
            matchDay: null
        }
    },
    'kickoffworld': {
        'overlay_4x5': {
            homeLogo: { x: 400, y: 1160, width: 130, height: 130 },
            awayLogo: { x: 570, y: 1160, width: 130, height: 130 },
            dateTime: { x: 265, y: 465, fontSize: 52, color: 'white', font: 'bodoni-72-bold', letterSpacing: 0 },
            spacing: 84,
        },
        'overlay_9x16': {
            homeLogo: { x: 400, y: 1670, width: 130, height: 130 },
            awayLogo: { x: 570, y: 1670, width: 130, height: 130 },
            dateTime: { x: 265, y: 705, fontSize: 52, color: 'white', font: 'bodoni-72-bold', letterSpacing: 0 },
            spacing: 84,
        }
    },
    'startingxi': {
        'overlay_4x5': {
            homeTeamName: { y: 295, fontSize: 78, color: 'white', font: 'DrukText-Medium-Trial' },
            vsText: { y: 295, fontSize: 82, color: 'white', font: 'bodoni-72-book-italic' },
            awayTeamName: { y: 295, fontSize: 78, color: 'white', font: 'DrukText-Medium-Trial' },
            playerFontSize: 47,          // Dimensione del font per i nomi dei giocatori
            playerSpacing: 57,           // Spaziatura verticale tra i nomi dei giocatori
            playerStartY: 400,            // Posizione y iniziale per il primo nome
            substitutesStartY: 1140,
            substitutesFontSize: 34
        },
        'overlay_9x16': {
            homeTeamName: { x: 960, y: 485, fontSize: 82, color: 'white', font: 'DrukText-Medium-Trial', textAlign: 'right' },
            vsText: { text: 'VS', x: 600, y: 485, fontSize: 86, color: 'white', font: 'bodoni-72-book-italic', textAlign: 'center' },
            awayTeamName: { x: 960, y: 485, fontSize: 82, color: 'white', font: 'DrukText-Medium-Trial', textAlign: 'center' },
            playerFontSize: 54,          // Dimensione del font per i nomi dei giocatori
            playerSpacing: 67,           // Spaziatura verticale tra i nomi dei giocatori
            playerStartY: 675,      // Posizione y iniziale per il primo nome
            substitutesStartY: 1575,
            substitutesFontSize: 45
        }
    },
    'goal': {
        'overlay_4x5': {
            homeLogo: { x: 720, y: 50, width: 150, height: 150 },
            awayLogo: { x: 720, y: 235, width: 150, height: 150 },
            championshipLogo: { x: 70, y: 80, width: 130, height: 212 },
            homeScore: { x: 910, y: 180, fontSize: 164, color: 'white', font: 'bodoni-72-bold', letterSpacing: -10 },
            awayScore: { x: 910, y: 365, fontSize: 164, color: 'white', font: 'bodoni-72-bold', letterSpacing: -10 },
            dateTime: null,
            matchDay: null,
            playerName: { x: 70, y: 1250, fontSize: 130, color: 'white', font: 'Saturday-Lovin', letterSpacing: 0 }
        },
        'overlay_9x16': {
            homeLogo: { x: 720, y: 150, width: 150, height: 150 },
            awayLogo: { x: 720, y: 335, width: 150, height: 150 },
            championshipLogo: { x: 70, y: 80, width: 130, height: 212 },
            homeScore: { x: 910, y: 280, fontSize: 164, color: 'white', font: 'bodoni-72-bold', letterSpacing: -10 },
            awayScore: { x: 910, y: 465, fontSize: 164, color: 'white', font: 'bodoni-72-bold', letterSpacing: -10 },
            dateTime: null,
            matchDay: null,
            playerName: { x: 70, y: 1740, fontSize: 145, color: 'white', font: 'Saturday-Lovin', letterSpacing: 0 }
        }
    },
    'livematch': {
        'overlay_5x8': {
            homeLogo: { x: 180, y: 700, width: 105, height: 105 },
            awayLogo: { x: 300, y: 700, width: 105, height: 105 },
            championshipLogo: null,
            homeScore: null,
            awayScore: null,
            dateTime: { x: 150, y: 630, fontSize: 17, color: 'white', font: 'MazzardH-Medium', letterSpacing: 3.8 },
            matchDay: null // Non richiesto per questa grafica
        },
        'overlay_16x9': {
            homeLogo: { x: 710, y: 790, width: 230, height: 230 },
            awayLogo: { x: 980, y: 790, width: 230, height: 230 },
            championshipLogo: null,
            homeScore: null,
            awayScore: null,
            dateTime: { x: 665, y: 660, fontSize: 34, color: 'white', font: 'MazzardH-Medium', letterSpacing: 8 },
            matchDay: null // Non richiesto per questa grafica
        }
    },
    'highlights': {
        'overlay_5x8': {
            homeLogo: { x: 55, y: 660, width: 150, height: 150 },
            awayLogo: { x: 375, y: 660, width: 150, height: 150 },
            championshipLogo: null,
            combinedScore: { x: 291, y: 765, fontSize: 64, color: 'white', font: 'MazzardH-Light', letterSpacing: -10, textAlign: 'center' },
            dateTime: null,
            matchDay: null // Non richiesto per questa grafica
        },
        'overlay_16x9': {
            homeLogo: { x: 960, y: 430, width: 260, height: 260 },
            awayLogo: { x: 1545, y: 430, width: 260, height: 260 },
            championshipLogo: null,
            combinedScore: { x: 1400, y: 600, fontSize: 125, color: 'white', font: 'MazzardH-Light', letterSpacing: 0, textAlign: 'center' },
            dateTime: null,
            matchDay: null // Non richiesto per questa grafica
        }
    },
    'nextmatch': {
        'overlay_4x5': {
            homeLogo: null,
            awayLogo: null,
            championshipLogo: { x: 890, y: 0, width: 130, height: 212 },
            homeScore: null,
            awayScore: null,
            dateTime: { x: 65, y: 1185, sety: 1185+55, fontSize: 62, color: 'white', font: 'bodoni-72-bold', letterSpacing: 0 },
            matchDay: { x: 65, y: 790, fontSize: 40, color: 'white', font: 'bodoni-72-bold', letterSpacing: 6 },
            nextMatchTitle: { x: 60, y: 150, fontSize: 72, color: 'white', font: 'bodoni-72-bold', letterSpacing: 2 },
            homeTeamName: { x: 60, y: 970, fontSize: 170, color: 'white', font: 'DrukText-Medium-Trial', letterSpacing: -10 },
            vsText: { x: null, y: 960, fontSize: 100, color: 'white', font: 'bodoni-72-book-italic', letterSpacing: 0 },
            awayTeamName: { x: 60, y: 1115, fontSize: 170, color: 'white', font: 'DrukText-Medium-Trial', letterSpacing: -10 },
            stadiumLocation: { x: 65, y: 1295, fontSize: 48, color: 'white', font: 'bodoni-72-bold', letterSpacing: 2 }
        },
        'overlay_9x16': {
            homeLogo: null,
            awayLogo: null,
            championshipLogo: { x: 70, y: 820, width: 130, height: 212 },
            homeScore: null,
            awayScore: null,
            dateTime: { x: 65, y: 1210 + 390, sety: 1210 + 390 + 55, fontSize: 72, color: 'white', font: 'bodoni-72-bold', letterSpacing: 0 },
            matchDay: { x: 65, y: 800 + 350, fontSize: 40, color: 'white', font: 'bodoni-72-bold', letterSpacing: 8 },
            nextMatchTitle: { x: 60, y: 310, fontSize: 72, color: 'white', font: 'bodoni-72-bold', letterSpacing: 2 },
            homeTeamName: { x: 60, y: 970 + 390, fontSize: 185, color: 'white', font: 'DrukText-Medium-Trial', letterSpacing: -10 },
            vsText: { x: null, y: 960 + 390, fontSize: 100, color: 'white', font: 'bodoni-72-book-italic', letterSpacing: 0 },
            awayTeamName: { x: 60, y: 1140 + 390, fontSize: 185, color: 'white', font: 'DrukText-Medium-Trial', letterSpacing: -10 },
            stadiumLocation: { x: 65, y: 1380 + 335, fontSize: 52, color: 'white', font: 'bodoni-72-bold', letterSpacing: 2 }
        }
    },
    'matchday': {
        'overlay_4x5': {
            homeLogo: null,
            awayLogo: null,
            championshipLogo: { x: 65, y: 140, width: 130, height: 212 },
            homeScore: null,
            awayScore: null,
            dateTime: { x: 65, y: 1100, fontSize: 62, color: 'white', font: 'bodoni-72-bold', letterSpacing: 0 },
            matchDay: { x: 65, y: 700, fontSize: 40, color: 'white', font: 'bodoni-72-bold', letterSpacing: 6 },
            nextMatchTitle: null,
            homeTeamName: { x: 60, y: 885, fontSize: 170, color: 'white', font: 'DrukText-Medium-Trial', letterSpacing: -10 },
            vsText: { x: null, y: 885, fontSize: 100, color: 'white', font: 'bodoni-72-book-italic', letterSpacing: 0 },
            awayTeamName: { x: 60, y: 1030, fontSize: 170, color: 'white', font: 'DrukText-Medium-Trial', letterSpacing: -10 },
            stadiumLocation: { x: 65, y: 1205, fontSize: 48, color: 'white', font: 'bodoni-72-bold', letterSpacing: 2 }
        },
        'overlay_9x16': {
            homeLogo: null,
            awayLogo: null,
            championshipLogo: { x: 70, y: 820, width: 130, height: 212 },
            homeScore: null,
            awayScore: null,
            dateTime: { x: 65, y: 1210 + 390, fontSize: 72, color: 'white', font: 'bodoni-72-bold', letterSpacing: 0 },
            matchDay: { x: 65, y: 800 + 350, fontSize: 40, color: 'white', font: 'bodoni-72-bold', letterSpacing: 8 },
            nextMatchTitle: null,
            homeTeamName: { x: 60, y: 970 + 390, fontSize: 185, color: 'white', font: 'DrukText-Medium-Trial', letterSpacing: -10 },
            vsText: { x: null, y: 970 + 390, fontSize: 100, color: 'white', font: 'bodoni-72-book-italic', letterSpacing: 0 },
            awayTeamName: { x: 60, y: 1140 + 390, fontSize: 185, color: 'white', font: 'DrukText-Medium-Trial', letterSpacing: -10 },
            stadiumLocation: { x: 65, y: 1380 + 335, fontSize: 52, color: 'white', font: 'bodoni-72-bold', letterSpacing: 2 }
        }
    },
    'insta': {
        'overlay_9x16': {}
    },
    'tickets': {
        'overlay_4x5': {
            homeLogo: { x: 210, y: 530, width: 300, height: 300 },
            awayLogo: { x: 575, y: 530, width: 300, height: 300 },
        }
    }
};

// Definizione dei formati e delle dimensioni
const formats = {
    'overlay_5x8': { width: 582, height: 872 },
    'overlay_4x5': { width: 1080, height: 1350 },
    'overlay_9x16': { width: 1080, height: 1920 },
    'overlay_16x9': { width: 1920, height: 1080 }
};

// Mappatura dei formati disponibili per ogni grafica
const graphicsFormats = {
    'fulltime': ['overlay_4x5', 'overlay_9x16'],
    'halftime': ['overlay_4x5', 'overlay_9x16'],
    'kickoff': ['overlay_4x5', 'overlay_9x16'],
    'kickoffworld': ['overlay_4x5', 'overlay_9x16'],
    'startingxi': ['overlay_4x5', 'overlay_9x16'],
    'goal': ['overlay_4x5', 'overlay_9x16'],
    'livematch': ['overlay_5x8', 'overlay_16x9'],
    'highlights': ['overlay_5x8', 'overlay_16x9'],
    'nextmatch': ['overlay_4x5', 'overlay_9x16'],
    'matchday': ['overlay_4x5', 'overlay_9x16'],
    'tickets': ['overlay_4x5'],
    'insta' : ['overlay_9x16']
};

// Definizione delle grafiche che richiedono l'uso dei loghi delle squadre
const graphicsWithLogos = ['livematch', 'highlights', 'halftime', 'fulltime', 'goal', 'kickoff', 'kickoffworld'];
const graphicsRequireDateTime = ['kickoff', 'matchday', 'nextmatch', 'livematch', 'kickoffworld'];
const graphicsRequireMatchDay = ['matchday', 'nextmatch'];
const graphicsRequireStadiumLocation = ['nextmatch', 'matchday'];
const graphicsWithChampionshipLogo = ['nextmatch', 'matchday'];

let isHomeFixed = true;

let customPlayer = false;

let customStartingXIPlayer = false;
let customStartingXISubstitutes = false;

let customHalfOverlay = false;
let customFullOverlay = false;

let advCustomHalfOverlay = false;
let advCustomFullOverlay = false;

let advCustomHalfOverlayActive = false;
let advCustomFullOverlayActive = false;

let playerHome = true;

let playerFotoNumber = false

let freeCalls = 50;

// Definizione del team fisso
const fixedTeam = {
    value: 'como 1907',
    text: 'Como 1907'
};

let currentTeams = [];
let backgroundImages = {};


async function mostraCreditiRimanenti() {
    try {
        const response = await fetch('https://api.remove.bg/v1.0/account', {
            method: 'GET',
            headers: {
                'X-Api-Key': apiKey
            }
        });

        if (!response.ok) {
            throw new Error(`Errore nella risposta dell'API: ${response.status}`);
        }

        const data = await response.json();
        freeCalls = data.data.attributes.api.free_calls;
    } catch (error) {
        console.error('Errore nel recupero dei crediti rimanenti:', error);
        alert('Impossibile recuperare i crediti rimanenti.');
    }
}

mostraCreditiRimanenti()

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
        } else {
            if (selectElement.options.length > 0) {
                selectElement.selectedIndex = 0;
            }
        }
    } else {
        if (selectElement.options.length > 0) {
            selectElement.selectedIndex = 0;
        }
    }
}

function populateTeams() {
    const championship = championshipSelect.value; 

    // Verifica che jsondata e jsondata.teams siano definiti
    if (!jsondata || !jsondata.teams) {
        console.error('jsondata o jsondata.teams è undefined');
        return;
    }

    // Recupera le squadre per il campionato selezionato
    const teams = jsondata.teams[championship];
    if (!teams) {
        console.error(`Nessuna squadra trovata per il campionato: "${championship}"`);
        return;
    }

    currentTeams = teams;

    if (isHomeFixed) {
        // Imposta il team fisso come squadra di casa
        homeTeamSelect.innerHTML = `<option value="${fixedTeam.value}">${fixedTeam.text}</option>`;
        homeTeamSelect.disabled = true;

        // Abilita la selezione della squadra ospite
        awayTeamSelect.disabled = false;
        populateSelectableSelect(awayTeamSelect, currentTeams);
    } else {
        // Imposta il team fisso come squadra ospite
        awayTeamSelect.innerHTML = `<option value="${fixedTeam.value}">${fixedTeam.text}</option>`;
        awayTeamSelect.disabled = true;

        // Abilita la selezione della squadra di casa
        homeTeamSelect.disabled = false;
        populateSelectableSelect(homeTeamSelect, currentTeams);
    }
}

function toggleTeams() {
    if (isHomeFixed) {
        const selectedAwayTeam = awayTeamSelect.value;

        homeTeamSelect.disabled = false;
        populateSelectableSelect(homeTeamSelect, currentTeams, selectedAwayTeam);

        awayTeamSelect.innerHTML = `<option value="${fixedTeam.value}">${fixedTeam.text}</option>`;
        awayTeamSelect.disabled = true;
    } else {
        const selectedHomeTeam = homeTeamSelect.value;

        awayTeamSelect.disabled = false;
        populateSelectableSelect(awayTeamSelect, currentTeams, selectedHomeTeam);

        homeTeamSelect.innerHTML = `<option value="${fixedTeam.value}">${fixedTeam.text}</option>`;
        homeTeamSelect.disabled = true;
    }

    isHomeFixed = !isHomeFixed;
    playerHome = !playerHome;
    playerFotoNumber = !playerFotoNumber;

    generatePreviews();
}

function populatePlayerSelect(selectElement) {
    // Pulisci le opzioni esistenti
    selectElement.innerHTML = '';

    // Ottieni il numero dal data attribute
    const number = selectElement.dataset.number || '1';

    // Aggiungi l'opzione predefinita con il numero
    const defaultOption = document.createElement('option');
    defaultOption.value = '';
    defaultOption.textContent = number;
    selectElement.appendChild(defaultOption);

    const championship = championshipSelect.value;

    // Recupera i giocatori per la categoria determinata
    const players = jsondata.players[championship] || [];

    // Popola le opzioni dei giocatori
    players.forEach(player => {
        const option = document.createElement('option');
        option.value = player.value;
        option.textContent = player.value;
        selectElement.appendChild(option);
    });

    // Aggiungi un listener per gestire l'aggiunta/rimozione della classe 'select'
    selectElement.addEventListener('change', function() {
        if (this.value !== '') {
            this.classList.add('select');
        } else {
            this.classList.remove('select');
        }
    });
}

function updateGraphicsOptions() {
    // Salva i valori esistenti degli input
    const existingInputs = {};
    const inputs = graphicsOptionsDiv.querySelectorAll('input');
    inputs.forEach(input => {
        existingInputs[input.className] = input.value;
    });

    graphicsOptionsDiv.innerHTML = ''; // Pulisce le opzioni esistenti

    let isFulltimeHighlightsAdded = false; // Flag globale per fulltime/highlights
    let isHalftimeHighlightsAdded = false;

    graphicCheckboxes.forEach(cb => {
        if (cb.checked) {
            const optionDiv = document.createElement('div');
            optionDiv.classList.add('graphic-option');

            // Aggiungi opzioni specifiche per ogni grafica
            switch (cb.value) {
                case 'goal':
                    // Aggiungi una label per il selettore del giocatore
                    const playerLabel = document.createElement('label');
                    playerLabel.setAttribute('for', 'goalPlayerSelect');
                    playerLabel.textContent = 'Player:';
                    optionDiv.appendChild(playerLabel);

                    // Crea div2 come contenitore esterno
                    const div2 = document.createElement('div');
                    div2.classList.add('div2');

                    const swapHome = document.createElement('div');
                    swapHome.id = 'swapHome';
                    swapHome.classList.add('swap-button');
                    const swapHomeImg = document.createElement('img');
                    swapHomeImg.src = 'images/assets/swap.svg';
                    swapHomeImg.alt = 'Swap Teams';
                    swapHomeImg.width = '20';
                    swapHome.appendChild(swapHomeImg);

                    // Crea div_back e appendilo a div2
                    const divBack = document.createElement('div');
                    divBack.classList.add('div_back');
                    div2.appendChild(divBack);

                    if (championshipSelect.value == 'seriea') {

                    const swapPlayerFotoNumber = document.createElement('div');
                    swapPlayerFotoNumber.id = 'swapPlayer';
                    swapPlayerFotoNumber.classList.add('swap-button-player');
                    const swapPlayerFotoNumberImg = document.createElement('img');
                    swapPlayerFotoNumberImg.src = 'images/assets/swap-arrow.svg';
                    swapPlayerFotoNumberImg.alt = 'Swap Teams';
                    swapPlayerFotoNumberImg.width = '20';
                    swapPlayerFotoNumber.appendChild(swapPlayerFotoNumberImg);
                    div2.appendChild(swapPlayerFotoNumber);

                    // Event listener per swapHome
                    swapPlayerFotoNumber.addEventListener('click', (e) => {
                        e.preventDefault();
                        playerFotoNumber = !playerFotoNumber; // Inverti lo stato di playerHome
                        generatePreviews(); // Rigenera le anteprime per riflettere il cambiamento
                    });

                    }

                    div2.appendChild(swapHome);
                    

                    // Crea il pulsante per alternare i layout
                    const toggleButton = document.createElement('div');
                    toggleButton.id = 'toggleCustomPlayer';
                    toggleButton.classList.add('symbol-arrow-left');

                    // Aggiungi la classe 'symbol-arrow-active' se customPlayer è true
                    if (customPlayer) {
                        toggleButton.classList.add('symbol-arrow-active');
                    }

                    // Imposta l'icona iniziale in base allo stato di customPlayer
                    const toggleImg = document.createElement('img');
                    toggleImg.src = customPlayer ? 'images/assets/minus.svg' : 'images/assets/edit.svg';
                    toggleImg.alt = 'Toggle Player Input';
                    toggleButton.appendChild(toggleImg);
                    divBack.appendChild(toggleButton);

                    // Pulsante di swap esistente (assicurati che l'ID sia unico)
                    const swapButton = document.createElement('div');
                    swapButton.id = 'arrow'; 
                    swapButton.classList.add('symbol-arrow');
                    const swapImg = document.createElement('img');
                    swapImg.src = 'images/assets/arrow.svg';
                    swapImg.alt = 'Swap Teams';
                    swapButton.appendChild(swapImg);
                    divBack.appendChild(swapButton);

                    // Aggiungi il select o l'input in base allo stato di customPlayer
                    if (!customPlayer) {
                        // Creazione del selectPlayer
                        const selectPlayer = document.createElement('select');
                        selectPlayer.id = 'goalPlayerSelect';
                        selectPlayer.name = 'goalPlayerSelect';

                        const championship = championshipSelect.value;
                        const players = jsondata.players[championship];

                        players.forEach(player => {
                            const option = document.createElement('option');
                            option.value = player.value;
                            option.textContent = player.value;
                            selectPlayer.appendChild(option);
                        });

                        divBack.appendChild(selectPlayer);
                    } else {
                        // **Layout 2**
                        const inputPlayer = document.createElement('input');
                        inputPlayer.type = 'text';
                        inputPlayer.name = 'goalPlayerInput';
                        inputPlayer.id = 'goalPlayerInput';
                        inputPlayer.placeholder = 'player';
                        divBack.appendChild(inputPlayer);
                    }

                    // Append div2 a optionDiv
                    optionDiv.appendChild(div2);

                    // Append optionDiv a graphicsOptionsDiv
                    graphicsOptionsDiv.appendChild(optionDiv);

                    // Event listener per swapHome
                    swapHome.addEventListener('click', (e) => {
                        e.preventDefault();
                        playerHome = !playerHome; // Inverti lo stato di playerHome
                        generatePreviews(); // Rigenera le anteprime per riflettere il cambiamento
                    });

                    

                    // Aggiungi l'event listener per il pulsante di toggle
                    toggleButton.addEventListener('click', () => {
                        customPlayer = !customPlayer; // Alterna il valore di customPlayer

                        // Aggiungi o rimuovi la classe 'symbol-arrow-active' in base al nuovo stato
                        if (customPlayer) {
                            toggleButton.classList.add('symbol-arrow-active');
                        } else {
                            toggleButton.classList.remove('symbol-arrow-active');
                        }

                        // Aggiorna l'icona del pulsante
                        toggleImg.src = customPlayer ? 'images/assets/minus.svg' : 'images/assets/edit.svg';

                        // Rimuove il layout corrente e aggiunge il nuovo layout
                        if (customPlayer) {
                            // Rimuove il select e aggiunge l'input
                            const existingSelect = divBack.querySelector('#goalPlayerSelect');
                            if (existingSelect) {
                                divBack.removeChild(existingSelect);
                            }
                            const newInput = document.createElement('input');
                            newInput.type = 'text';
                            newInput.name = 'goalPlayerInput';
                            newInput.id = 'goalPlayerInput';
                            newInput.placeholder = 'player';
                            divBack.appendChild(newInput);
                        } else {
                            // Rimuove l'input e aggiunge il select
                            const existingInput = divBack.querySelector('#goalPlayerInput');
                            if (existingInput) {
                                divBack.removeChild(existingInput);
                            }
                        // **Layout 1**
                        const selectPlayer = document.createElement('select');
                        selectPlayer.id = 'goalPlayerSelect';
                        selectPlayer.name = 'goalPlayerSelect';

                        const championship = championshipSelect.value;
                        const players = jsondata.players[championship];

                        players.forEach(player => {
                            const option = document.createElement('option');
                            option.value = player.value;
                            option.textContent = player.value;
                            selectPlayer.appendChild(option);
                        });

                        divBack.appendChild(selectPlayer);
                        }

                        // Rigenera le anteprime per riflettere il cambiamento
                        generatePreviews();
                    });


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

                if (!isFulltimeHighlightsAdded) { // Controlla se è già stato aggiunto
                    optionDiv.innerHTML += `
                        <h3>Full Time - Highlights</h3>
                        <div style="background: #e8f0f8; border-radius: 6px; padding: 10px;" class="score">
                            <div class="col col100" style="text-align: center; padding-top: 4px;">
                                <div><label>Home score:</label></div>
                                <div style="width: 140px"></div>
                                <div><label>Away score:</label></div>
                            </div>
                            <div class="col col100" style="text-align: center;">
                                <div>
                                    <div class="cell100">
                                        <input size="2" id="homeFullScore" type="number" class="homeFullScore number" min="0" placeholder="0" value="0">
                                    </div>
                                </div>
                                <div style="width: 140px;">
                                    <h2 style="color: black; margin: 0;">-</h2>
                                </div>
                                <div>
                                    <div class="cell100">
                                        <input type="number" id="awayFullScore" class="awayFullScore  number" min="0" placeholder="0" value="0">
                                    </div>
                                </div>
                            </div>
                        </div>
                    `;
                    isFulltimeHighlightsAdded = true; // Imposta il flag su true
                }

                                    // Crea il contenitore div con la classe 'graphics-time'
                    const graphicsTimeDiv2 = document.createElement('div');
                    graphicsTimeDiv2.classList.add('graphics-time');

                    // Crea il label
                    const labelFull = document.createElement('label');
                    labelFull.setAttribute('for', 'customFullOverlay');
                    labelFull.setAttribute('id', 'customFullOverlayLabel');

                    // Crea l'input di tipo checkbox
                    const inputFull = document.createElement('input');
                    inputFull.setAttribute('type', 'checkbox');
                    inputFull.setAttribute('name', 'customFullOverlay');
                    inputFull.setAttribute('id', 'customFullOverlay');
                    inputFull.checked = customFullOverlay;

                    // Aggiungi il testo al label
                    labelFull.appendChild(inputFull);
                    labelFull.appendChild(document.createTextNode(' Overlay Full Time'));

                    // Aggiungi il label al div
                    graphicsTimeDiv2.appendChild(labelFull);

                    optionDiv.appendChild(graphicsTimeDiv2);

                    inputFull.addEventListener('change', () => {
                        customFullOverlay = inputFull.checked;
                        advCustomFullOverlay = inputFull.checked;
                        updateGraphicsOptions()
                    });

                    if (advCustomFullOverlay) {
                        // Crea il contenitore div con la classe 'graphics-time'
                        const graphicsTimeDivadv2 = document.createElement('div');
                        graphicsTimeDivadv2.classList.add('graphics-time');
    
                        // Crea il label
                        const labeladv2 = document.createElement('label');
                        labeladv2.setAttribute('for', 'advCustomHalfOverlay');
                        labeladv2.setAttribute('id', 'customHalfOverlayLabel');
                        labeladv2.classList.add('label-text')
                        
                        // Crea l'input di tipo checkbox
                        const inputadv2 = document.createElement('input');
                        inputadv2.setAttribute('type', 'checkbox');
                        inputadv2.setAttribute('name', 'advCustomHalfOverlay');
                        inputadv2.setAttribute('id', 'advCustomHalfOverlay');
                        inputadv2.checked = advCustomFullOverlayActive
    
                        // Aggiungi il testo al label
                        labeladv2.appendChild(inputadv2);
                        labeladv2.appendChild(document.createTextNode(`R: ${freeCalls}`));
    
                        // Aggiungi il label al div
                        graphicsTimeDiv2.appendChild(labeladv2);
                        optionDiv.appendChild(graphicsTimeDivadv2);
    
    
                        inputadv2.addEventListener('change', () => {
                            advCustomFullOverlayActive = inputadv2.checked;
                        });
                    }
                break;


                case 'highlights':
                    if (!isFulltimeHighlightsAdded) { // Controlla se è già stato aggiunto
                        optionDiv.innerHTML += `
                            <h3>Full Time - Highlights</h3>
                            <div style="background: #e8f0f8; border-radius: 6px; padding: 10px;" class="score">
                                <div class="col col100" style="text-align: center; padding-top: 4px;">
                                    <div><label>Home score:</label></div>
                                    <div style="width: 140px"></div>
                                    <div><label>Away score:</label></div>
                                </div>
                                <div class="col col100" style="text-align: center;">
                                    <div>
                                        <div class="cell100">
                                            <input size="2" id="homeFullScore" type="number" class="homeFullScore number" min="0" placeholder="0" value="0">
                                        </div>
                                    </div>
                                    <div style="width: 140px;">
                                        <h2 style="color: black; margin: 0;">-</h2>
                                    </div>
                                    <div>
                                        <div class="cell100">
                                            <input type="number" id="awayFullScore" class="awayFullScore  number" min="0" placeholder="0" value="0">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        `;
                        isFulltimeHighlightsAdded = true; // Imposta il flag su true
                    }
                    break;
                case 'halftime':

                    if (!isHalftimeHighlightsAdded) {
                    optionDiv.innerHTML += `
                        <h3>Half Time - Goal</h3>
                        <div style="background: #e8f0f8; border-radius: 6px; padding: 10px;" class="score">
                            <div class="col" style="text-align: center; padding-top: 4px;">
                                <div><label>Home score:</label></div>
                                <div style="width: 140px"></div>
                                <div><label>Away score:</label></div>
                            </div>
                            <div class="col" style="text-align: center;">
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

                                        // Crea il contenitore div con la classe 'graphics-time'
                                        const graphicsTimeDiv = document.createElement('div');
                                        graphicsTimeDiv.classList.add('graphics-time');
                    
                                        // Crea il label
                                        const label = document.createElement('label');
                                        label.setAttribute('for', 'customHalfOverlay');
                                        label.setAttribute('id', 'customHalfOverlayLabel');
                    
                                        // Crea l'input di tipo checkbox
                                        const input = document.createElement('input');
                                        input.setAttribute('type', 'checkbox');
                                        input.setAttribute('name', 'customHalfOverlay');
                                        input.setAttribute('id', 'customHalfOverlay');
                                        input.checked = customHalfOverlay;
                    
                                        // Aggiungi il testo al label
                                        label.appendChild(input);
                                        label.appendChild(document.createTextNode(' Overlay Half Time'));
                    
                                        // Aggiungi il label al div
                                        graphicsTimeDiv.appendChild(label);
                    
                                        optionDiv.appendChild(graphicsTimeDiv);
                    
                    
                                        input.addEventListener('change', () => {
                                            customHalfOverlay = input.checked;
                                            advCustomHalfOverlay = input.checked;
                                            updateGraphicsOptions()
                                        });

                                        if (advCustomHalfOverlay) {
                                            // Crea il contenitore div con la classe 'graphics-time'
                                            const graphicsTimeDivadv = document.createElement('div');
                                            graphicsTimeDivadv.classList.add('graphics-time');
                        
                                            // Crea il label
                                            const labeladv = document.createElement('label');
                                            labeladv.setAttribute('for', 'advCustomHalfOverlay');
                                            labeladv.setAttribute('id', 'customHalfOverlayLabel');
                                            labeladv.classList.add('label-text')
                        
                                            // Crea l'input di tipo checkbox
                                            const inputadv = document.createElement('input');
                                            inputadv.setAttribute('type', 'checkbox');
                                            inputadv.setAttribute('name', 'advCustomHalfOverlay');
                                            inputadv.setAttribute('id', 'advCustomHalfOverlay');
                                            inputadv.checked = advCustomHalfOverlayActive
                        
                                            // Aggiungi il testo al label
                                            labeladv.appendChild(inputadv);
                                            labeladv.appendChild(document.createTextNode(`R: ${freeCalls}`));
                        
                                            // Aggiungi il label al div
                                            graphicsTimeDiv.appendChild(labeladv);
                        
                                            optionDiv.appendChild(graphicsTimeDivadv);
                        
                        
                                            inputadv.addEventListener('change', () => {
                                                advCustomHalfOverlayActive = inputadv.checked;
                                            });
                                        }
                    break;
                    
                    case 'startingxi':
    // Funzione per generare i campi dei giocatori (select o input)
    function generatePlayerFields(prefix, count, isCustom) {
        let fieldsHTML = '';
        for (let i = 1; i <= count; i++) {
            if (isCustom) {
                fieldsHTML += `
                    <div class="player-input-container">
                        <input id="${prefix}${i}" name="player" data-number="${i}" placeholder="${i} Player">
                    </div>
                `;
            } else {
                fieldsHTML += `
                    <div class="player-select-container">
                        <select id="${prefix}${i}" name="player" data-number="${i}">
                            <option value="">${i}</option>
                        </select>
                    </div>
                `;
            }
        }
        return fieldsHTML;
    }

    // Genera la sezione Starting XI
    optionDiv.innerHTML += `
        <h3>Starting XI</h3>
        <label>Player:</label>
        <div class="player-selection">
            ${generatePlayerFields('p', 11, customStartingXIPlayer)}
            <label class="customStartingXI">
                <img src="images/assets/edit_white.svg">
                <input type="checkbox" name="customStartingXIPlayer" ${customStartingXIPlayer ? 'checked' : ''}>
            </label>
        </div>
    `;

    // Genera la sezione Substitutes
    optionDiv.innerHTML += `
        <label>Substitutes:</label>
        <div class="player-selection player-substitutes-selection">
            ${generatePlayerFields('ps', 15, customStartingXISubstitutes)}
            <label class="customStartingXI">
                <img src="images/assets/edit_white.svg">
                <input type="checkbox" name="customStartingXISubstitutes" ${customStartingXISubstitutes ? 'checked' : ''}>
            </label>
        </div>
    `;

    // Funzione per gestire il toggle dei campi dei giocatori
    function togglePlayerFields() {
        customStartingXIPlayer = this.checked;
        const playerSelectionDiv = optionDiv.querySelector('.player-selection');
        playerSelectionDiv.innerHTML = `
            ${generatePlayerFields('p', 11, customStartingXIPlayer)}
            <label class="customStartingXI">
                <img src="images/assets/edit_white.svg">
                <input type="checkbox" name="customStartingXIPlayer" ${customStartingXIPlayer ? 'checked' : ''}>
            </label>
        `;

        // Ricollega l'event listener
        const newEditPlayerCheckbox = playerSelectionDiv.querySelector('input[name="customStartingXIPlayer"]');
        newEditPlayerCheckbox.addEventListener('change', togglePlayerFields);

        // Popola le select se non è custom
        if (!customStartingXIPlayer) {
            const startingXISelects = playerSelectionDiv.querySelectorAll('select[name="player"]');
            startingXISelects.forEach(select => {
                populatePlayerSelect(select);
            });
            showCaptainSelect();
        } else {
            hideCaptainSelect();
        }
    }

    // Funzione per gestire il toggle dei campi dei sostituti
    function toggleSubstitutesFields() {
        customStartingXISubstitutes = this.checked;
        const substitutesSelectionDiv = optionDiv.querySelector('.player-substitutes-selection');
        substitutesSelectionDiv.innerHTML = `
            ${generatePlayerFields('ps', 15, customStartingXISubstitutes)}
            <label class="customStartingXI">
                <img src="images/assets/edit_white.svg">
                <input type="checkbox" name="customStartingXISubstitutes" ${customStartingXISubstitutes ? 'checked' : ''}>
            </label>
        `;

        // Ricollega l'event listener
        const newEditSubstitutesCheckbox = substitutesSelectionDiv.querySelector('input[name="customStartingXISubstitutes"]');
        newEditSubstitutesCheckbox.addEventListener('change', toggleSubstitutesFields);

        // Popola le select se non è custom
        if (!customStartingXISubstitutes) {
            const substitutesSelects = substitutesSelectionDiv.querySelectorAll('select[name="player"]');
            substitutesSelects.forEach(select => {
                populatePlayerSelect(select);
            });
        }
    }

    // Funzioni per mostrare o nascondere il select del capitano
    function showCaptainSelect() {
        let captainDiv = optionDiv.querySelector('.captain-selection');
        if (!captainDiv) {
            // Crea il select del Capitano
            const label = document.createElement('label');
            label.textContent = 'Captain:';

            captainDiv = document.createElement('div');
            captainDiv.className = 'captain-selection';

            const outerDiv = document.createElement('div');
            outerDiv.className = 'col';
            outerDiv.style.margin = '10px 0';

            const innerDiv = document.createElement('div');
            innerDiv.className = 'div';

            const arrowDiv = document.createElement('div');
            arrowDiv.id = 'arrow';
            arrowDiv.className = 'symbol-arrow';

            const img = document.createElement('img');
            img.src = 'images/assets/arrow.svg';

            arrowDiv.appendChild(img);

            const select = document.createElement('select');
            select.id = 'captain';
            select.style.margin = '0';

            innerDiv.appendChild(arrowDiv);
            innerDiv.appendChild(select);
            outerDiv.appendChild(innerDiv);

            captainDiv.appendChild(label);
            captainDiv.appendChild(outerDiv);

            optionDiv.appendChild(captainDiv);

            populatePlayerSelect(select);
        } else {
            captainDiv.style.display = 'block';
        }
    }

    function hideCaptainSelect() {
        const captainDiv = optionDiv.querySelector('.captain-selection');
        if (captainDiv) {
            captainDiv.style.display = 'none';
        }
    }

    // Collegamento iniziale degli event listener
    const playerSelectionDiv = optionDiv.querySelector('.player-selection');
    const editPlayerCheckbox = playerSelectionDiv.querySelector('input[name="customStartingXIPlayer"]');
    editPlayerCheckbox.addEventListener('change', togglePlayerFields);

    const substitutesSelectionDiv = optionDiv.querySelector('.player-substitutes-selection');
    const editSubstitutesCheckbox = substitutesSelectionDiv.querySelector('input[name="customStartingXISubstitutes"]');
    editSubstitutesCheckbox.addEventListener('change', toggleSubstitutesFields);

    // Popola le select iniziali se non è custom
    if (!customStartingXIPlayer) {
        const startingXISelects = playerSelectionDiv.querySelectorAll('select[name="player"]');
        startingXISelects.forEach(select => {
            populatePlayerSelect(select);
        });
        showCaptainSelect();
    } else {
        hideCaptainSelect();
    }

    if (!customStartingXISubstitutes) {
        const substitutesSelects = substitutesSelectionDiv.querySelectorAll('select[name="player"]');
        substitutesSelects.forEach(select => {
            populatePlayerSelect(select);
        });
    }

    break;

                // Aggiungi altri case per altre grafiche se necessario
                default:
                    // Non aggiungere opzioni per altre grafiche
                    break;
            }

            graphicsOptionsDiv.appendChild(optionDiv);
        }
    });

    // Ripristina i valori degli input salvati
    const newInputs = graphicsOptionsDiv.querySelectorAll('input');
    newInputs.forEach(input => {
        if (existingInputs.hasOwnProperty(input.className)) {
            input.value = existingInputs[input.className];
        }
    });
}

function handleSelectChange() {
    const selectedValues = Array.from(document.querySelectorAll('select[name="player"]'))
        .map(select => select.value)
        .filter(value => value !== '');

    document.querySelectorAll('select[name="player"]').forEach(select => {
        select.querySelectorAll('option').forEach(option => {
            if (selectedValues.includes(option.value)) {
                option.disabled = true;
            } else {
                option.disabled = false;
            }
        });
    });
}


/**
 * Funzione per caricare un'immagine e restituire una Promise
 * @param {string} src - Il percorso dell'immagine da caricare
 * @returns {Promise<Image|null>} - Una Promise che risolve con l'immagine caricata o null in caso di errore
 */
function loadImage(src) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.crossOrigin = "Anonymous";
        img.onload = () => {
            resolve(img);
        };
        img.onerror = () => {
            resolve(null);
        };
    });
}


/**
 * Funzione per scaricare tutte le immagini generate
 */
function downloadAllPreviews() {
    const canvases = carouselContainer.querySelectorAll('canvas');
    if (canvases.length === 0) {
        alert('Nessuna anteprima da scaricare.');
        return;
    }
    canvases.forEach((canvas, index) => {
        const filename = getFilenameForCanvas(canvas);
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/png');
        link.download = filename;
        link.click();
    });
}

/**
 * Funzione per ottenere il nome del file per un canvas
 */
function getFilenameForCanvas(canvas) {
    const timeZoneAbbreviation = canvas.dataset.timeZoneAbbreviation || '';
    const graphicName = canvas.dataset.graphicName || 'graphic';
    const format = canvas.dataset.format || '';
    const homeTeamName = canvas.dataset.homeTeamName || '';
    const awayTeamName = canvas.dataset.awayTeamName || '';
    const day = canvas.dataset.day || '';

    let filename = '';

    if (graphicName === 'livematch' || graphicName === 'highlights') {
        filename = `H_Live Match_${homeTeamName} vs ${awayTeamName}_${day}.png`;
    } else if (graphicName === 'insta' || graphicName === 'tickets'){
        filename = `${capitalizeFirstLetter(graphicName)}_${format}_${day}_.png`;
    } else {
        filename = `${capitalizeFirstLetter(graphicName)}_${homeTeamName} vs ${awayTeamName}_${format}_${day}_${timeZoneAbbreviation.toLowerCase()}.png`;
    }

    return filename;
}


function formatDate(dateObj, timeZoneAbbreviation = 'CET', locale = 'en-GB', graphicName = '') {
    const formatter = new Intl.DateTimeFormat(locale, { month: 'long', day: 'numeric' });
    const parts = formatter.formatToParts(dateObj);

    let month = '';
    let day = 0;

    parts.forEach(part => {
        if (part.type === 'month') {
            month = part.value.toUpperCase();
        }
        if (part.type === 'day') {
            day = parseInt(part.value, 10);
        }
    });
    const formattedTime = dateObj.toLocaleTimeString(locale, { hour: '2-digit', minute: '2-digit', hour12: false });

    if (graphicName === 'kickoff') {
        if (championshipSelect.value == 'primavera') {
            return `${month} ${day} | ${formattedTime} ${timeZoneAbbreviation}`;
        } else {
            return `${month} ${day} | ${formattedTime}`;
        }
    } else {
        return `${month} ${day} | ${formattedTime} ${timeZoneAbbreviation}`;
    }
}


// Funzione modificata per ottenere i componenti formattati della data
function getFormattedDateParts(dateObj, timeZoneAbbreviation = 'CET', locale = 'en-GB', graphicName = '') {
    function getOrdinalSuffix(day) {
        if (day > 3 && day < 21) return 'TH';
        switch (day % 10) {
            case 1: return 'ST';
            case 2: return 'ND';
            case 3: return 'RD';
            default: return 'TH';
        }
    }

    const formatter = new Intl.DateTimeFormat(locale, { month: 'long', day: 'numeric' });
    const parts = formatter.formatToParts(dateObj);

    let month = '';
    let day = 0;

    parts.forEach(part => {
        if (part.type === 'month') {
            month = part.value.toUpperCase();
        }
        if (part.type === 'day') {
            day = parseInt(part.value, 10);
        }
    });

    const ordinalSuffix = getOrdinalSuffix(day);
    const formattedTime = dateObj.toLocaleTimeString(locale, { hour: '2-digit', minute: '2-digit', hour12: false });

    return {
        month: month,
        day: day,
        ordinalSuffix: ordinalSuffix,
        time: formattedTime,
        timeZoneAbbreviation: timeZoneAbbreviation
    };
}

/**
 * Funzione per disegnare un'immagine di sfondo su canvas con posizionamento e scaling specifici.
 */
function drawImageCover(ctx, img, canvasWidth, canvasHeight, graphicName = '', overlayName = '') {
    // Definisci il rettangolo per lo sfondo
    let rectX = 0;
    let rectY = 0;
    let rectWidth = canvasWidth;
    let rectHeight = canvasHeight;

    // Specifiche per Highlights + overlay_16x9
    if (graphicName === 'highlights' && overlayName === 'overlay_16x9') {
        rectX = -150; // Allineato a sinistra
        rectY = 0;
        rectWidth = canvasWidth - 400; // Riduci 180px sul lato lungo (larghezza)
        rectHeight = canvasHeight;
    }

    if (graphicName === 'kickoffworld' && overlayName === 'overlay_4x5') {
        rectY = -45;
    }
    


    // Determina l'orientamento dell'immagine
    const imgAspect = img.width / img.height;
    const rectAspect = rectWidth / rectHeight;

    let renderWidth, renderHeight, xStart, yStart;

    if (graphicName === 'highlights' && overlayName === 'overlay_16x9') {
        if (imgAspect > rectAspect) {
            // Immagine orizzontale: scala per toccare top e bottom
            renderHeight = rectHeight;
            renderWidth = img.width * (rectHeight / img.height);
            xStart = rectX - (renderWidth - rectWidth) / 2;
            yStart = rectY;
        } else {
            // Immagine verticale: scala per toccare destra e sinistra
            renderWidth = rectWidth;
            renderHeight = img.height * (rectWidth / img.width);
            xStart = rectX;
            yStart = rectY - (renderHeight - rectHeight) / 2;
        }
    } else {
        // Comportamento standard
        if (imgAspect > rectAspect) {
            // Immagine orizzontale
            renderHeight = rectHeight;
            renderWidth = img.width * (rectHeight / img.height);
            xStart = rectX + (rectWidth - renderWidth) / 2;
            yStart = rectY;
        } else {
            // Immagine verticale
            renderWidth = rectWidth;
            renderHeight = img.height * (rectWidth / img.width);
            xStart = rectX;
            yStart = rectY + (rectHeight - renderHeight) / 2;
        }
    }

    ctx.drawImage(img, xStart, yStart, renderWidth, renderHeight);
}

/**
 * Funzione per disegnare testo con letter-spacing personalizzato
 */
function drawTextWithLetterSpacing(ctx, text, x, y, letterSpacing) {
    const characters = text.split('');
    let currentX = x;

    characters.forEach(char => {
        ctx.fillText(char, currentX, y);
        const metrics = ctx.measureText(char);
        currentX += metrics.width + letterSpacing;
    });
}

/**
 * Funzione per misurare la larghezza del testo con letter-spacing
 */
function measureTextWithLetterSpacing(ctx, text, letterSpacing) {
    const characters = text.split('');
    let totalWidth = 0;

    characters.forEach((char, index) => {
        const metrics = ctx.measureText(char);
        totalWidth += metrics.width;
        if (index < characters.length - 1) {
            totalWidth += letterSpacing;
        }
    });
    return totalWidth;
}

/**
 * Funzione per ottenere il nome visualizzabile della squadra
 */
function getTeamDisplayName(teamValue) {
    const team = currentTeams.find(t => t.value === teamValue);
    return team ? team.text : teamValue;
}

function drawThreeLineCenteredText(ctx, text, maxWidth, x, y, lineHeight) {
    const names = text.split(' | ');
    const totalNames = names.length;

    if (totalNames === 0) {
        return;
    }

    // Determina il numero base di nomi per la prima e terza linea
    const baseCount = Math.floor(totalNames / 3);
    const line1Count = baseCount;
    const line3Count = baseCount;
    const line2Count = totalNames - (line1Count + line3Count);

    const line1 = names.slice(0, line1Count).join('  |  ');
    const line2 = names.slice(line1Count, line1Count + line2Count).join('  |  ');
    const line3 = names.slice(line1Count + line2Count).join('  |  ');

    // Imposta l'allineamento del testo al centro
    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';

    // Disegna le tre linee
    if (line1) {
        ctx.fillText(line1, x, y);
    }

    if (line2) {
        ctx.fillText(line2, x, y + lineHeight);
    }

    if (line3) {
        ctx.fillText(line3, x, y + 2 * lineHeight);
    }
}

/**
 * Funzione per creare le tab delle grafiche
 */
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
        if (selectedGraphicName) {
            if (graphicName === selectedGraphicName) {
                tabButton.classList.add('active');
            }
        } else if (index === 0) {
            tabButton.classList.add('active');
        }

        tabButton.addEventListener('click', () => {
            document.querySelectorAll('.graphic-tab').forEach(tab => tab.classList.remove('active'));
            tabButton.classList.add('active');

            document.querySelectorAll('.graphic-preview-container').forEach(container => {
                if (container.dataset.graphicName === graphicName) {
                    container.style.display = 'block';
                } else {
                    container.style.display = 'none';
                }
            });
        });

        tabsContainer.appendChild(tabButton);
    });

    const existingTabs = previewSection.querySelector('.graphic-tabs');
    if (existingTabs) {
        previewSection.removeChild(existingTabs);
    }
    previewSection.insertBefore(tabsContainer, previewSection.firstChild);
}

function drawCenteredWrappedText(ctx, text, maxWidth, x, y, lineHeight) {
    const words = text.split(' ');
    let line = '';
    const lines = [];

    words.forEach(word => {
        const testLine = line + word + ' ';
        const metrics = ctx.measureText(testLine);
        const testWidth = metrics.width;
        if (testWidth > maxWidth && line !== '') {
            lines.push(line.trim());
            line = word + ' ';
        } else {
            line = testLine;
        }
    });
    lines.push(line.trim());

    lines.forEach((lineText, index) => {
        const lineWidth = ctx.measureText(lineText).width;
        ctx.fillText(lineText, x - lineWidth / 2, y + index * lineHeight);
    });
}

/**
 * Funzione per generare le anteprime
 */
async function generatePreviews() {
    console.log('generatePreviews called');
    await document.fonts.ready;

    let currentPlayers = [];

    const championship = championshipSelect.value;
    currentPlayers = jsondata.players[championship];

    // Memorizza la grafica attualmente selezionata
    const activeTab = document.querySelector('.graphic-tab.active');
    let selectedGraphicName = activeTab ? activeTab.dataset.graphicName : null;

    carouselContainer.innerHTML = '';

    const matchDateValue = matchDateInput.value;
    const matchTimeValue = matchTimeInput.value;

    let matchDateObj;

    if (matchDateValue && matchTimeValue) {
        const matchDateTimeString = `${matchDateValue}T${matchTimeValue}`;
        matchDateObj = new Date(matchDateTimeString);
    } else {
        matchDateObj = new Date();
    }

    let previewsGenerated = 0;

    const selectedGraphics = Array.from(graphicCheckboxes)
        .filter(cb => cb.checked)
        .map(cb => cb.value);

    // Passa selectedGraphicName alla funzione
    createGraphicTabs(selectedGraphics, selectedGraphicName);

    // Itera attraverso tutte le grafiche selezionate
    for (const graphicName of selectedGraphics) {
        const graphicPreviewContainer = document.createElement('div');
        graphicPreviewContainer.classList.add('graphic-preview-container');
        graphicPreviewContainer.dataset.graphicName = graphicName;

        // Aggiorna la logica per mostrare o nascondere le anteprime
        if (selectedGraphicName) {
            if (graphicName === selectedGraphicName) {
                graphicPreviewContainer.style.display = 'block';
            } else {
                graphicPreviewContainer.style.display = 'none';
            }
        } else if (previewsGenerated === 0) {
            graphicPreviewContainer.style.display = 'block';
        } else {
            graphicPreviewContainer.style.display = 'none';
        }

        const graphicFolder = `images/graphics/${graphicName}`;

        const availableFormats = graphicsFormats[graphicName];

        if (!availableFormats || availableFormats.length === 0) {
            continue;
        }

        // Itera attraverso i formati disponibili per questa grafica
        for (const overlayName of availableFormats) {
            const dimensions = formats[overlayName];

            let bgImageSrc = backgroundImages[graphicName.toLowerCase()] || `${graphicFolder}/1.png`;

            if (graphicName === 'goal') {
                const playerSelect = document.getElementById('goalPlayerSelect');
                
                // Trova il giocatore selezionato nell'array corrente
                const selectedPlayer = currentPlayers.find(p => p.value === (playerSelect ? playerSelect.value : ''));
                
                // Ottieni il nome del giocatore formattato o usa un valore predefinito
                const playerName = selectedPlayer
                ? selectedPlayer.text
                    .normalize("NFD") // Normalizza il testo per separare i caratteri accentati
                    .replace(/[\u0300-\u036f]/g, '') // Rimuove i diacritici
                    .replace(/\s+/g, '_') // Sostituisce gli spazi con underscore
                    .toLowerCase() // Converte tutto in minuscolo
                : 'default_player';
                
                // Determina la posizione in base allo stato di `playerHome`
                const position = playerHome ? 'home' : 'away';

                if (championshipSelect.value == 'seriea') { 
                    const goalfotonumber = playerFotoNumber ? '_2' : '';
                    bgImageSrc = backgroundImages['goal'] || `images/graphics/goal/player/${championshipSelect.value}/${position}/${playerName}${goalfotonumber}.png`;
                } else {
                    bgImageSrc = backgroundImages['goal'] || `images/graphics/goal/player/${championshipSelect.value}/${position}/${playerName}.png`;
                }
            }

            let overlayImageSrc = ''

            overlayImageSrc = `${graphicFolder}/${overlayName}.png`;

            if (graphicName === 'nextmatch') {
                if (championshipSelect.value == 'seriea') {
                    overlayImageSrc = `${graphicFolder}/${overlayName}_right.png`;
                }
            }

            const [bgImage, overlayImage] = await Promise.all([
                loadImage(bgImageSrc),
                loadImage(overlayImageSrc)
            ]);

            if (!overlayImage) {
                continue;
            }

            // Determina se generare entrambe le versioni
            let timeVersions = [{ timeOffsetHours: 0, timeZoneAbbreviation: 'CET' }];

            if (['nextmatch', 'matchday', 'kickoff'].includes(graphicName)) {
                if (championshipSelect.value == 'primavera') {
                    timeVersions.push({ timeOffsetHours: 6, timeZoneAbbreviation: 'WIB' });
                }
            }

            for (const timeVersion of timeVersions) {
                const adjustedDateObj = new Date(matchDateObj.getTime() + timeVersion.timeOffsetHours * 3600000);

                const canvas = document.createElement('canvas');
                canvas.width = dimensions.width;
                canvas.height = dimensions.height;
                const ctx = canvas.getContext('2d');

                if (bgImage) {
                    drawImageCover(ctx, bgImage, canvas.width, canvas.height, graphicName, overlayName);
                } else {
                    ctx.fillStyle = '#ffffff';
                    ctx.fillRect(0, 0, canvas.width, canvas.height);
                }

                ctx.drawImage(overlayImage, 0, 0, canvas.width, canvas.height);



                if (graphicName === 'halftime') {
                    if (customHalfOverlay) {
                        if (advCustomHalfOverlayActive) {
                            const bgOverlayHalfImage = await removeBackground(bgImage);
                            drawImageCover(ctx, bgOverlayHalfImage, canvas.width, canvas.height, graphicName, overlayName);
                        } else {
                            const bgOverlayHalfImage = await removeBackgroundLocally(bgImage);
                            drawImageCover(ctx, bgOverlayHalfImage, canvas.width, canvas.height, graphicName, overlayName);
                        }
                    }
                } else if (graphicName === 'fulltime') {
                    if (customFullOverlay) {
                        if (advCustomFullOverlayActive) {
                            const bgFullOverlayImage = await removeBackground(bgImage);
                            drawImageCover(ctx, bgFullOverlayImage, canvas.width, canvas.height, graphicName, overlayName);
                        } else {
                            const bgFullOverlayImage = await removeBackgroundLocally(bgImage);
                            drawImageCover(ctx, bgFullOverlayImage, canvas.width, canvas.height, graphicName, overlayName);
                        }
                    }
                }

                // Ottieni lo stile specifico per questa grafica e formato
                const style = graphicStyles[graphicName][overlayName];
                if (style) {
                    if (graphicName === 'highlights') {
                        // !HIGHLIGHTS

                        // Disegna i loghi e il testo combinato centralmente
                        if (style.homeLogo) {
                            const homeLogoSrc = homeTeamSelect.value === 'como 1907'
                                ? `images/badge/all/como.png`
                                : `images/badge/${championshipSelect.value}/${homeTeamSelect.value}.png`;
                            const homeLogo = await loadImage(homeLogoSrc);
                            if (homeLogo) {
                                ctx.drawImage(homeLogo, style.homeLogo.x, style.homeLogo.y, style.homeLogo.width, style.homeLogo.height);
                            }
                        }

                        if (style.awayLogo) {
                            const awayLogoSrc = awayTeamSelect.value === 'como 1907'
                                ? `images/badge/all/como.png`
                                : `images/badge/${championshipSelect.value}/${awayTeamSelect.value}.png`;
                            const awayLogo = await loadImage(awayLogoSrc);
                            if (awayLogo) {
                                ctx.drawImage(awayLogo, style.awayLogo.x, style.awayLogo.y, style.awayLogo.width, style.awayLogo.height);
                            }
                        }

                        // Recupera i punteggi
                        let homeScore = '0';
                        let awayScore = '0';

                        homeScore = document.querySelector('.homeFullScore') ? document.querySelector('.homeFullScore').value.trim() : '0';
                        awayScore = document.querySelector('.awayFullScore') ? document.querySelector('.awayFullScore').value.trim() : '0';

                        const combinedText = `${homeScore}-${awayScore}`;

                        // Disegna il testo combinato
                        ctx.font = `bold ${style.combinedScore.fontSize}px ${style.combinedScore.font}`;
                        ctx.fillStyle = style.combinedScore.color;
                        ctx.textAlign = style.combinedScore.textAlign;
                        ctx.fillText(combinedText, style.combinedScore.x, style.combinedScore.y);
                    } else if (graphicName === 'startingxi') {
                        const startingXIStyle = style;

                        const playerStartY = startingXIStyle.playerStartY;
                        const playerSpacing = startingXIStyle.playerSpacing;
                        
                        if (!customStartingXIPlayer) {
                            const captainSelect = document.getElementById('captain');
                            const captainValue = captainSelect.value;
                        }
                        
                        
                        const playerIds = ['p1', 'p2', 'p3', 'p4', 'p5', 'p6', 'p7', 'p8', 'p9', 'p10', 'p11'];

                        const playerNames = playerIds.map(id => {
                            if (championshipSelect.value == 'primavera') {
                                if (!customStartingXIPlayer) {
                                    // Caso in cui customStartingXIPlayer è false: utilizza i select
                                    const select = document.getElementById(id);
                                    const selectedOption = currentPlayers.find(p => p.value === select.value);
                                    if (selectedOption) {
                                        let name = '';
                                        // Estrai il numero dal data-number
                                        const number = select.dataset.number || '';
                        
                                        if (selectedOption.text.includes(' ')) {
                                            // Estrae solo il cognome
                                            name = selectedOption.text.split(' ').slice(0, -1).join(' ').toUpperCase();
                                        } else {
                                            // Se non c'è uno spazio, utilizza l'intero nome
                                            name = selectedOption.text.toUpperCase();
                                        }
                        
                                        // Aggiungi '[C]' se è il capitano
                                        if (select.value === captainValue) {
                                            name += ' [C]';
                                        }
                        
                                        return { number, name };
                                    }
                                } else {
                                    // Caso in cui customStartingXIPlayer è true: utilizza gli input di testo
                                    const input = document.getElementById(id);
                                    const inputValue = input.value.trim().toUpperCase();
                                    if (inputValue) {
                                        // Suddividi l'input in 'number' e 'name' basandoti sul primo spazio
                                        const firstSpaceIndex = inputValue.indexOf(' ');
                                        
                                        // Verifica se c'è almeno uno spazio nell'input
                                        if (firstSpaceIndex !== -1) {
                                            const number = inputValue.substring(0, firstSpaceIndex);
                                            let name = inputValue.substring(firstSpaceIndex + 1);
                        
                                            // Aggiungi '[C]' se è il capitano
                                            if (name === captainValue.toUpperCase()) {
                                                name += ' [C]';
                                            }
                        
                                            return { number, name };
                                        } else {
                                            // Gestisci il caso in cui non ci sia uno spazio nell'input
                                            console.warn(`Input invalido per l'ID "${id}". Formato atteso: "numero nome".`);
                                            return null;
                                        }
                                    }
                                }
                                return null;
                            } else {
                                if (!customStartingXIPlayer) {
                                    // Caso in cui customStartingXIPlayer è false: utilizza i select
                                    const select = document.getElementById(id);
                                    const selectedOption = currentPlayers.find(p => p.value === select.value);
                                    if (selectedOption) {
                                        let name = '';
                                        // Estrai il numero direttamente dal campo 'number' dell'oggetto JSON
                                        const number = selectedOption.number || '';
                        
                                        if (selectedOption.text.includes(' ')) {
                                            // Estrae solo il cognome
                                            name = selectedOption.value.split(' ').slice(0, -1).join(' ').toUpperCase();
                                        } else {
                                            // Se non c'è uno spazio, utilizza l'intero nome
                                            name = selectedOption.text.toUpperCase();
                                        }
                        
                                        // Aggiungi '[C]' se è il capitano
                                        if (select.value === captainValue) {
                                            name += ' [C]';
                                        }
                        
                                        return { number, name };
                                    }
                                } else {
                                    // Caso in cui customStartingXIPlayer è true: utilizza gli input di testo
                                    const input = document.getElementById(id);
                                    const inputValue = input.value.trim().toUpperCase();
                        
                                    if (inputValue) {
                                        // Suddividi l'input in 'number' e 'name' basandoti sul primo spazio
                                        const firstSpaceIndex = inputValue.indexOf(' ');
                                        
                                        // Verifica se c'è almeno uno spazio nell'input
                                        if (firstSpaceIndex !== -1) {
                                            const number = inputValue.substring(0, firstSpaceIndex);
                                            let name = inputValue.substring(firstSpaceIndex + 1);
                        
                                            // Aggiungi '[C]' se è il capitano
                                            if (name === captainValue.toUpperCase()) {
                                                name += ' [C]';
                                            }
                        
                                            return { number, name };
                                        } else {
                                            // Gestisci il caso in cui non ci sia uno spazio nell'input
                                            console.warn(`Input invalido per l'ID "${id}". Formato atteso: "numero nome".`);
                                            return null;
                                        }
                                    }
                                }
                                return null;
                            }
                        }).filter(player => player !== null);
                        
                        /* --- Parte di Disegno sul Canvas --- */
                        
                        // Imposta lo stile del testo dei giocatori
                        ctx.font = `bold ${startingXIStyle.playerFontSize}px bodoni-72-book-italic`; // Usa il font specificato
                        ctx.fillStyle = `white`; // Colore del testo
                        ctx.textAlign = 'right'; // Allineamento a destra per i numeri
                        ctx.textBaseline = 'top'; // Allineamento verticale in alto

                        if (championshipSelect.value == 'primavera') {
                            // Disegna i numeri dei giocatori
                            playerNames.forEach(player => {
                                const yPosition = playerStartY + (player.number - 1) * playerSpacing; // Assumendo che number sia da 1 a 11
                                ctx.fillText(player.number, 380, yPosition);
                            });

                            ctx.font = `bold ${startingXIStyle.playerFontSize}px ${startingXIStyle.playerFont}`; // Usa il font specificato
                            ctx.textAlign = 'left'; // Allineamento a sinistra per i nomi

                            // Disegna i nomi dei giocatori
                            playerNames.forEach(player => {
                                const yPosition = playerStartY + (player.number - 1) * playerSpacing; // Allinea i nomi con i numeri
                                ctx.fillText(player.name, 420, yPosition); // Posiziona i nomi leggermente a destra dei numeri
                            });
                        } else {
                            // Disegna i numeri dei giocatori
                            playerNames.forEach((player, index) => {
                                const yPosition = playerStartY + index * playerSpacing; // Assumendo che number sia da 1 a 11
                                ctx.fillText(player.number, 380, yPosition);
                            });

                            ctx.font = `bold ${startingXIStyle.playerFontSize}px ${startingXIStyle.playerFont}`; // Usa il font specificato
                            ctx.textAlign = 'left'; // Allineamento a sinistra per i nomi

                            // Disegna i nomi dei giocatori
                            playerNames.forEach((player, index) => {
                                const yPosition = playerStartY + index * playerSpacing; // Allinea i nomi con i numeri
                                ctx.fillText(player.name, 420, yPosition); // Posiziona i nomi leggermente a destra dei numeri
                            });
                        }
                        
                        



                        const canvas = ctx.canvas;
                        const canvasWidth = canvas.width;

                        const substitutesIds = ['ps1', 'ps2', 'ps3', 'ps4', 'ps5', 'ps6', 'ps7', 'ps8', 'ps9', 'ps10', 'ps11', 'ps12', 'ps13', 'ps14', 'ps15'];
                        const substitutesNames = substitutesIds.map(id => {
                            if (!customStartingXISubstitutes) {
                                // Caso in cui customStartingXIPlayer è false: utilizza i select
                                const select = document.getElementById(id);
                                const selectedOption = currentPlayers.find(p => p.value === select.value);
                                if (selectedOption && selectedOption.text.includes(' ')) {
                                    // Estrae solo il cognome
                                    return selectedOption.value.split(' ').slice(0, -1).join(' ').toUpperCase();
                                } else if (selectedOption) {
                                    // Se non c'è uno spazio, utilizza l'intero nome
                                    return selectedOption.text.toUpperCase();
                                }
                            } else {
                                // Caso in cui customStartingXIPlayer è true: utilizza gli input di testo
                                const input = document.getElementById(id);
                                let name = input.value.trim().toUpperCase();
                                if (name) {
                                    return name;
                                }
                            }
                            return '';
                        }).filter(name => name !== '');
                        
                        // Unisci i nomi con il separatore ' | '
                        const substitutesText = substitutesNames.join(' | ');

                        // Imposta lo stile per i sostituti
                        const substitutesLineHeight = startingXIStyle.substitutesFontSize + 5; // Altezza di ogni linea
                        ctx.font = `bold ${startingXIStyle.substitutesFontSize}px ${startingXIStyle.playerFont}`; // Usa lo stesso font dei titolari
                        ctx.fillStyle = `white`; // Colore del testo
                        ctx.textAlign = 'center'; // Allineamento centrale
                        ctx.textBaseline = 'top'; // Allineamento verticale in alto

                        // Calcola la larghezza massima consentita
                        const maxWidth = 600;

                        // Calcola la posizione y per i sostituti in base ai titolari
                        const substitutesYPosition = startingXIStyle.substitutesStartY; // 20 pixel di margine dopo i titolari

                        // Disegna il testo suddiviso in tre linee, con la linea centrale più lunga
                        drawThreeLineCenteredText(ctx, substitutesText, maxWidth, canvas.width / 2, substitutesYPosition, substitutesLineHeight);






                            // Definisci uno spazio tra i testi
                            const spacing = 10; // Puoi regolare questo valore secondo le tue preferenze

                            // Disegna il nome della squadra di casa e calcola la larghezza
                            let homeTeamNameWidth = 0;
                            let homeTeamText = '';
                            if (style.homeTeamName) {
                                homeTeamText = getTeamDisplayName(homeTeamSelect.value).toUpperCase();
                                ctx.font = `${style.homeTeamName.fontSize}px ${style.homeTeamName.font}`;
                                ctx.fillStyle = style.homeTeamName.color;
                                ctx.textAlign = 'left'; // Impostiamo l'allineamento a sinistra per facilitare il calcolo
                                ctx.textBaseline = 'middle'; // Allineamento verticale al centro

                                if (style.homeTeamName.letterSpacing) {
                                    homeTeamNameWidth = measureTextWithLetterSpacing(ctx, homeTeamText, style.homeTeamName.letterSpacing);
                                } else {
                                    homeTeamNameWidth = ctx.measureText(homeTeamText).width;
                                }
                            }

                            // Disegna il testo 'vs.' e calcola la larghezza
                            let vsTextWidth = 0;
                            let vsText = '';
                            if (style.vsText) {
                                vsText = 'vs.';
                                ctx.font = `${style.vsText.fontSize}px ${style.vsText.font}`;
                                ctx.fillStyle = style.vsText.color;
                                ctx.textAlign = 'left'; // Impostiamo l'allineamento a sinistra per facilitare il calcolo
                                ctx.textBaseline = 'middle'; // Allineamento verticale al centro

                                if (style.vsText.letterSpacing) {
                                    vsTextWidth = measureTextWithLetterSpacing(ctx, vsText, style.vsText.letterSpacing);
                                } else {
                                    vsTextWidth = ctx.measureText(vsText).width;
                                }
                            }

                            // Disegna il nome della squadra ospite e calcola la larghezza
                            let awayTeamNameWidth = 0;
                            let awayTeamText = '';
                            if (style.awayTeamName) {
                                awayTeamText = getTeamDisplayName(awayTeamSelect.value).toUpperCase();
                                ctx.font = `${style.awayTeamName.fontSize}px ${style.awayTeamName.font}`;
                                ctx.fillStyle = style.awayTeamName.color;
                                ctx.textAlign = 'left'; // Impostiamo l'allineamento a sinistra per facilitare il calcolo
                                ctx.textBaseline = 'middle'; // Allineamento verticale al centro

                                if (style.awayTeamName.letterSpacing) {
                                    awayTeamNameWidth = measureTextWithLetterSpacing(ctx, awayTeamText, style.awayTeamName.letterSpacing);
                                } else {
                                    awayTeamNameWidth = ctx.measureText(awayTeamText).width;
                                }
                            }

                            // Calcola la larghezza totale del blocco
                            const totalBlockWidth = homeTeamNameWidth + spacing + vsTextWidth + spacing + awayTeamNameWidth;

                            // Calcola la posizione x iniziale per centrare il blocco
                            const startX = (canvasWidth - totalBlockWidth) / 2;

                            // Disegna il nome della squadra di casa
                            if (style.homeTeamName) {
                                const homeX = startX;
                                ctx.textAlign = 'left'; // Allineamento a sinistra per la squadra di casa
                                ctx.fillStyle = style.homeTeamName.color;
                                ctx.font = `${style.homeTeamName.fontSize}px ${style.homeTeamName.font}`;
                                if (style.homeTeamName.letterSpacing) {
                                    drawTextWithLetterSpacing(ctx, homeTeamText, homeX, style.homeTeamName.y, style.homeTeamName.letterSpacing);
                                } else {
                                    ctx.fillText(homeTeamText, homeX, style.homeTeamName.y);
                                }
                            }

                            // Disegna il testo 'vs.'
                            if (style.vsText) {
                                const vsX = startX + homeTeamNameWidth + spacing;
                                ctx.textAlign = 'left'; // Allineamento a sinistra per 'vs.'
                                ctx.fillStyle = style.vsText.color;
                                ctx.font = `${style.vsText.fontSize}px ${style.vsText.font}`;
                                ctx.textBaseline = 'middle'; // Allinea verticalmente al centro
                                if (style.vsText.letterSpacing) {
                                    drawTextWithLetterSpacing(ctx, vsText, vsX, style.vsText.y, style.vsText.letterSpacing);
                                } else {
                                    ctx.fillText(vsText, vsX, style.vsText.y);
                                }
                            }

                            // Disegna il nome della squadra ospite
                            if (style.awayTeamName) {
                                const awayX = startX + homeTeamNameWidth + spacing + vsTextWidth + spacing;
                                ctx.textAlign = 'left'; // Allineamento a sinistra per la squadra ospite
                                ctx.fillStyle = style.awayTeamName.color;
                                ctx.font = `${style.awayTeamName.fontSize}px ${style.awayTeamName.font}`;
                                if (style.awayTeamName.letterSpacing) {
                                    drawTextWithLetterSpacing(ctx, awayTeamText, awayX, style.awayTeamName.y, style.awayTeamName.letterSpacing);
                                } else {
                                    ctx.fillText(awayTeamText, awayX, style.awayTeamName.y);
                                }
                            }

                    } else if (graphicName === 'nextmatch' || graphicName === 'matchday') {
                        // !NEXTMATCH !MATCHDAY
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

                        if (graphicName === 'nextmatch') {
                            if (championshipSelect.value === 'seriea') {

                                // !SERIE A

                                // Disegna il nome della squadra di casa
                        let homeTeamNameWidth;
                        if (style.homeTeamName) {
                            const homeTeamText = getTeamDisplayName(homeTeamSelect.value).toUpperCase();
                            ctx.font = `${style.homeTeamName.fontSize}px ${style.homeTeamName.font}`;
                            ctx.fillStyle = style.homeTeamName.color;
                            ctx.textAlign = 'left';
                            homeTeamNameWidth = measureTextWithLetterSpacing(ctx, homeTeamText, style.homeTeamName.letterSpacing);
                            drawTextWithLetterSpacing(ctx, homeTeamText, canvas.width - style.homeTeamName.x - homeTeamNameWidth, style.homeTeamName.y, style.homeTeamName.letterSpacing);
                        }

                        // Disegna il nome della squadra ospite
                        if (style.awayTeamName) {
                            const awayTeamText = getTeamDisplayName(awayTeamSelect.value).toUpperCase();
                            ctx.font = `${style.awayTeamName.fontSize}px ${style.awayTeamName.font}`;
                            ctx.fillStyle = style.awayTeamName.color;
                            ctx.textAlign = 'left';
                            awayTeamNameWidth = measureTextWithLetterSpacing(ctx, awayTeamText, style.awayTeamName.letterSpacing);
                            drawTextWithLetterSpacing(ctx, awayTeamText, canvas.width - style.awayTeamName.x - awayTeamNameWidth, style.awayTeamName.y, style.awayTeamName.letterSpacing);
                        }

                        // Calcola la posizione x per 'VS'
                        let vsTextX;
                        let vsTextWidth;
                        if (style.vsText && homeTeamNameWidth !== undefined) {
                            vsTextX = canvas.width - style.homeTeamName.x - awayTeamNameWidth;
                            ctx.font = `${style.vsText.fontSize}px ${style.vsText.font}`;
                            ctx.fillStyle = style.vsText.color;
                            ctx.textAlign = 'right';
                                ctx.fillText('vs.', vsTextX, style.vsText.y + 80);
                                vsTextWidth = ctx.measureText('vs.').width;
                        }

                        // Disegna la data del match
                        if (style.dateTime) {
                            // Ottieni i componenti formattati della data
                        const dateParts = getFormattedDateParts(
                            adjustedDateObj,
                            timeVersion.timeZoneAbbreviation,
                            'en-GB',
                            graphicName
                        );
                        
                        // Prepara i testi da disegnare
                        const dateText = `${dateParts.month} ${dateParts.day}`;
                        const suffix = dateParts.ordinalSuffix;
                        const timeText = ` | ${dateParts.time}`;


                        ctx.font = `${style.dateTime.fontSize}px ${style.dateTime.font}`;
                        ctx.fillStyle = style.dateTime.color;
                        ctx.textAlign = 'right';
                        ctx.textBaseline = 'alphabetic';
                        ctx.fillText(timeText, canvas.width - style.dateTime.x, style.dateTime.sety);

                        const hoursWidth = ctx.measureText(timeText);

                        // Imposta lo stile per il suffisso in small-caps e dimensione ridotta
                        const suffixFontSize = style.dateTime.fontSize * 0.7;
                        ctx.font = `${suffixFontSize}px ${style.dateTime.font}`;
                        ctx.font = ctx.font.replace('normal', 'small-caps');
                        ctx.fillText(suffix, canvas.width - style.dateTime.x - hoursWidth.width, style.dateTime.sety);

                        const suffixWidth = ctx.measureText(suffix);

                        // Imposta lo stile per il mese e il giorno
                        ctx.font = `${style.dateTime.fontSize}px ${style.dateTime.font}`;
                        ctx.fillText(dateText, canvas.width - style.dateTime.x - hoursWidth.width - suffixWidth.width - 3, style.dateTime.sety);  
                    
                    }

                        // Disegna il matchday
                        if (style.matchDay) {
                            const matchDayValue = document.getElementById('matchDay').value.trim() || '1';
                            const matchDayText = `MATCHDAY ${matchDayValue}`;
                            let matchDayWidth = 0
                            ctx.font = `${style.matchDay.fontSize}px ${style.matchDay.font}`;
                            ctx.fillStyle = style.matchDay.color;
                            ctx.textAlign = 'left';
                                matchDayWidth = measureTextWithLetterSpacing(ctx, matchDayText, style.matchDay.letterSpacing);
                                drawTextWithLetterSpacing(ctx, matchDayText, canvas.width - style.matchDay.x - matchDayWidth, style.matchDay.y, style.matchDay.letterSpacing);
                        }

                        // Disegna la posizione dello stadio
                        if (style.stadiumLocation) {
                            const stadiumLocationValue = stadiumInput.value.trim() || '';
                            let stadiumLocationWidth = 0
                            ctx.font = `${style.stadiumLocation.fontSize}px ${style.stadiumLocation.font}`;
                            ctx.fillStyle = style.stadiumLocation.color;
                            ctx.textAlign = 'left';
                                stadiumLocationWidth = measureTextWithLetterSpacing(ctx, stadiumLocationValue, style.stadiumLocation.letterSpacing);
                                drawTextWithLetterSpacing(ctx, stadiumLocationValue, canvas.width -  style.stadiumLocation.x - stadiumLocationWidth, style.stadiumLocation.y, style.stadiumLocation.letterSpacing);
                        }

                        // Disegna il logo del campionato se presente
                        if (style.championshipLogo) {
                            const championshipLogoSrc = `images/logos/${championshipSelect.value}-logo.png`;
                            const championshipLogo = await loadImage(championshipLogoSrc);
                            if (championshipLogo) {
                                if (overlayName === 'overlay_9x16') {
                                    ctx.drawImage(championshipLogo, canvas.width - style.championshipLogo.x - style.championshipLogo.width, style.championshipLogo.y, style.championshipLogo.width, style.championshipLogo.height);
                                } else {
                                    ctx.drawImage(championshipLogo, style.championshipLogo.x, style.championshipLogo.y, style.championshipLogo.width, style.championshipLogo.height);
                                }
                            }
                        }





                            } else {
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

                        // Calcola la posizione x per 'VS'
                        let vsTextX;
                        let vsTextWidth;
                        if (style.vsText && homeTeamNameWidth !== undefined) {
                            const spacingAfterHomeTeamName = 10; // Spazio tra il nome della squadra e 'VS'
                            vsTextX = style.homeTeamName.x + homeTeamNameWidth + spacingAfterHomeTeamName;
                            ctx.font = `${style.vsText.fontSize}px ${style.vsText.font}`;
                            ctx.fillStyle = style.vsText.color;
                            ctx.textAlign = 'left';
                            if (style.vsText.letterSpacing) {
                                vsTextWidth = measureTextWithLetterSpacing(ctx, 'vs.', style.vsText.letterSpacing);
                                drawTextWithLetterSpacing(ctx, 'vs.', vsTextX, style.vsText.y, style.vsText.letterSpacing);
                            } else {
                                ctx.fillText('vs.', vsTextX, style.vsText.y);
                                vsTextWidth = ctx.measureText('vs.').width;
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
                            // Ottieni i componenti formattati della data
                        const dateParts = getFormattedDateParts(
                            adjustedDateObj,
                            timeVersion.timeZoneAbbreviation,
                            'en-GB',
                            graphicName
                        );
                        
                        // Prepara i testi da disegnare
                        const dateText = `${dateParts.month} ${dateParts.day}`;
                        const suffix = dateParts.ordinalSuffix;
                        let timeText = ``;

                        if (championship == 'primavera') {
                            timeText = ` | ${dateParts.time} ${timeVersion.timeZoneAbbreviation}`;
                        } else {
                            timeText = ` | ${dateParts.time}`;
                        }
                        
                        // Imposta lo stile per il mese e il giorno
                        ctx.font = `${style.dateTime.fontSize}px ${style.dateTime.font}`;
                        ctx.fillStyle = style.dateTime.color;
                        ctx.textAlign = 'left';
                        ctx.textBaseline = 'alphabetic';
                        
                        // Calcola le metriche del testo del mese e del giorno
                        const dateMetrics = ctx.measureText(dateText);
                        const dateTextWidth = dateMetrics.width + 5;
                        const dateAscent = dateMetrics.actualBoundingBoxAscent;
                        
                        // Calcola la posizione y per il testo in base alla baseline
                        const y = style.dateTime.y + dateAscent;
                        
                        // Disegna il testo del mese e del giorno
                        ctx.fillText(dateText, style.dateTime.x, y);
                        
                        // Imposta lo stile per il suffisso in small-caps e dimensione ridotta
                        const suffixFontSize = style.dateTime.fontSize * 0.7;
                        ctx.font = `${suffixFontSize}px ${style.dateTime.font}`;
                        ctx.font = ctx.font.replace('normal', 'small-caps');
                        
                        // Calcola le metriche del suffisso
                        const suffixMetrics = ctx.measureText(suffix);
                        const suffixAscent = suffixMetrics.actualBoundingBoxAscent;
                        
                        // Calcola l'offset verticale per allineare il suffisso
                        const suffixOffsetY = y;
                        
                        // Disegna il suffisso immediatamente dopo il giorno
                        ctx.fillText(suffix, style.dateTime.x + dateTextWidth, suffixOffsetY);
                        
                        // Calcola la larghezza del suffisso
                        const suffixWidth = suffixMetrics.width;
                        
                        // Ripristina lo stile del font per il testo successivo (ora)
                        ctx.font = `${style.dateTime.fontSize}px ${style.dateTime.font}`;
                        
                        // Disegna il testo dell'ora dopo il suffisso
                        ctx.fillText(timeText, style.dateTime.x + dateTextWidth + suffixWidth, y);
                                                }

                        // Disegna il matchday
                        if (style.matchDay) {
                            const matchDayValue = document.getElementById('matchDay').value.trim() || '1';
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

                        // Disegna il logo del campionato se presente
                        if (style.championshipLogo) {
                            const championshipLogoSrc = `images/logos/${championshipSelect.value}-logo.png`;
                            const championshipLogo = await loadImage(championshipLogoSrc);
                            if (championshipLogo) {
                                ctx.drawImage(championshipLogo, style.championshipLogo.x, style.championshipLogo.y, style.championshipLogo.width, style.championshipLogo.height);
                            }
                        }
                            }
                        } else {
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

                        // Calcola la posizione x per 'VS'
                        let vsTextX;
                        let vsTextWidth;
                        if (style.vsText && homeTeamNameWidth !== undefined) {
                            const spacingAfterHomeTeamName = 10; // Spazio tra il nome della squadra e 'VS'
                            vsTextX = style.homeTeamName.x + homeTeamNameWidth + spacingAfterHomeTeamName;
                            ctx.font = `${style.vsText.fontSize}px ${style.vsText.font}`;
                            ctx.fillStyle = style.vsText.color;
                            ctx.textAlign = 'left';
                            if (style.vsText.letterSpacing) {
                                vsTextWidth = measureTextWithLetterSpacing(ctx, 'vs.', style.vsText.letterSpacing);
                                drawTextWithLetterSpacing(ctx, 'vs.', vsTextX, style.vsText.y, style.vsText.letterSpacing);
                            } else {
                                ctx.fillText('vs.', vsTextX, style.vsText.y);
                                vsTextWidth = ctx.measureText('vs.').width;
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
                            // Ottieni i componenti formattati della data
                        const dateParts = getFormattedDateParts(
                            adjustedDateObj,
                            timeVersion.timeZoneAbbreviation,
                            'en-GB',
                            graphicName
                        );
                        
                        // Prepara i testi da disegnare
                        const dateText = `${dateParts.month} ${dateParts.day}`;
                        const suffix = dateParts.ordinalSuffix;
                        let timeText = ``;

                        if (championship == 'primavera') {
                            timeText = ` | ${dateParts.time} ${timeVersion.timeZoneAbbreviation}`;
                        } else {
                            timeText = ` | ${dateParts.time}`;
                        }
                        
                        // Imposta lo stile per il mese e il giorno
                        ctx.font = `${style.dateTime.fontSize}px ${style.dateTime.font}`;
                        ctx.fillStyle = style.dateTime.color;
                        ctx.textAlign = 'left';
                        ctx.textBaseline = 'alphabetic';
                        
                        // Calcola le metriche del testo del mese e del giorno
                        const dateMetrics = ctx.measureText(dateText);
                        const dateTextWidth = dateMetrics.width + 5;
                        const dateAscent = dateMetrics.actualBoundingBoxAscent;
                        
                        // Calcola la posizione y per il testo in base alla baseline
                        const y = style.dateTime.y + dateAscent;
                        
                        // Disegna il testo del mese e del giorno
                        ctx.fillText(dateText, style.dateTime.x, y);
                        
                        // Imposta lo stile per il suffisso in small-caps e dimensione ridotta
                        const suffixFontSize = style.dateTime.fontSize * 0.7;
                        ctx.font = `${suffixFontSize}px ${style.dateTime.font}`;
                        ctx.font = ctx.font.replace('normal', 'small-caps');
                        
                        // Calcola le metriche del suffisso
                        const suffixMetrics = ctx.measureText(suffix);
                        const suffixAscent = suffixMetrics.actualBoundingBoxAscent;
                        
                        // Calcola l'offset verticale per allineare il suffisso
                        const suffixOffsetY = y;
                        
                        // Disegna il suffisso immediatamente dopo il giorno
                        ctx.fillText(suffix, style.dateTime.x + dateTextWidth, suffixOffsetY);
                        
                        // Calcola la larghezza del suffisso
                        const suffixWidth = suffixMetrics.width;
                        
                        // Ripristina lo stile del font per il testo successivo (ora)
                        ctx.font = `${style.dateTime.fontSize}px ${style.dateTime.font}`;
                        
                        // Disegna il testo dell'ora dopo il suffisso
                        ctx.fillText(timeText, style.dateTime.x + dateTextWidth + suffixWidth, y);
                                                }

                        // Disegna il matchday
                        if (style.matchDay) {
                            const matchDayValue = document.getElementById('matchDay').value.trim() || '1';
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

                        // Disegna il logo del campionato se presente
                        if (style.championshipLogo) {
                            const championshipLogoSrc = `images/logos/${championshipSelect.value}-logo.png`;
                            const championshipLogo = await loadImage(championshipLogoSrc);
                            if (championshipLogo) {
                                ctx.drawImage(championshipLogo, style.championshipLogo.x, style.championshipLogo.y, style.championshipLogo.width, style.championshipLogo.height);
                            }
                        }
                        }

                    } else if (graphicName === 'insta') {
                        // !INSTA
                        const rectWidth = 943.5;
                        const rectHeight = 1182;
                        const rectX = (canvas.width - rectWidth) / 2;
                        const rectY = (canvas.height - rectHeight) / 2;
                        ctx.save();
                        ctx.globalCompositeOperation = 'destination-out';
                        ctx.fillStyle = 'rgba(0,0,0.1)';
                        ctx.fillRect(rectX, rectY, rectWidth, rectHeight);
                        ctx.restore();


                    } else if (graphicName === 'kickoffworld') {
                        if (style.dateTime) {
                            const spacing = style.spacing;
                            const baseX = style.dateTime.x;      // coordinata X di base per l'ora
                            const baseY = style.dateTime.y;      // coordinata Y di base per la prima voce (COMO)
                            const cityColumnOffset = 210;        // distanza orizzontale tra la colonna dell'ora e la colonna delle città
                    
                            // Array di città con offset (in ore) rispetto a COMO
                            const cities = [
                                { name: 'COMO', offset: 0 },
                                { name: 'LONDON', offset: -1 },
                                { name: 'NEW YORK', offset: -6 },
                                { name: 'SÃO PAULO', offset: -4 },
                                { name: 'BAGHDAD', offset: 2 },
                                { name: 'JAKARTA', offset: 6 }
                            ];
                    
                            // Imposta lo stile del testo per l'ora
                            ctx.font = `${style.dateTime.fontSize}px ${style.dateTime.font}`;
                            ctx.fillStyle = style.dateTime.color;
                            ctx.textAlign = 'right';
                            ctx.textBaseline = 'middle';
                    
                            // Per ogni città calcoliamo l'ora locale
                            cities.forEach((city, index) => {
                                // Crea un nuovo oggetto data per questa città aggiungendo l’offset
                                const cityDate = new Date(adjustedDateObj.getTime() + city.offset * 3600000);
                    
                                // Ottieni i dateParts per questa città
                                const cityDateParts = getFormattedDateParts(cityDate, timeVersion.timeZoneAbbreviation, 'en-GB', graphicName);
                    
                                // Calcolo la posizione Y per questa riga
                                const yPos = baseY + (index * spacing);
                    
                                // Disegna l'ora
                                if (style.dateTime.letterSpacing) {
                                    drawTextWithLetterSpacing(ctx, cityDateParts.time, baseX, yPos, style.dateTime.letterSpacing);
                                } else {
                                    ctx.fillText(cityDateParts.time, baseX, yPos);
                                }
                    
                                // Ora disegniamo il nome della città in maiuscolo sulla stessa linea, spostandoci a destra
                                ctx.textAlign = 'center'; // allineamento a sinistra per il nome città
                                const cityName = city.name.toUpperCase();
                    
                                // Se serve letterSpacing anche per il nome della città, puoi replicare la logica:
                                if (style.dateTime.letterSpacing) {
                                    drawTextWithLetterSpacing(ctx, cityName, baseX + cityColumnOffset, yPos, style.dateTime.letterSpacing);
                                } else {
                                    ctx.fillText(cityName, baseX + cityColumnOffset, yPos);
                                }
                    
                                // Ripristiniamo l'allineamento a destra per la prossima iterazione (l'ora)
                                ctx.textAlign = 'right';
                            });
                            
                        }
                        
                        if (style.homeLogo) {
                            const homeLogoSrc = homeTeamSelect.value === 'como 1907'
                                ? `images/badge/all/como.png`
                                : `images/badge/${championshipSelect.value}/${homeTeamSelect.value}.png`;
                            const homeLogo = await loadImage(homeLogoSrc);
                            if (homeLogo) {
                                ctx.drawImage(homeLogo, style.homeLogo.x, style.homeLogo.y, style.homeLogo.width, style.homeLogo.height);
                            }
                        }
                        if (style.awayLogo) {
                            const awayLogoSrc = awayTeamSelect.value === 'como 1907'
                                ? `images/badge/all/como.png`
                                : `images/badge/${championshipSelect.value}/${awayTeamSelect.value}.png`;
                            const awayLogo = await loadImage(awayLogoSrc);
                            if (awayLogo) {
                                ctx.drawImage(awayLogo, style.awayLogo.x, style.awayLogo.y, style.awayLogo.width, style.awayLogo.height);
                            }
                        }
                        
                    } else {
                        // !BASE
                        if (style.homeLogo) {
                            const homeLogoSrc = homeTeamSelect.value === 'como 1907'
                                ? `images/badge/all/como.png`
                                : `images/badge/${championshipSelect.value}/${homeTeamSelect.value}.png`;
                            const homeLogo = await loadImage(homeLogoSrc);
                            if (homeLogo) {
                                ctx.drawImage(homeLogo, style.homeLogo.x, style.homeLogo.y, style.homeLogo.width, style.homeLogo.height);
                            }
                        }
                        if (style.awayLogo) {
                            const awayLogoSrc = awayTeamSelect.value === 'como 1907'
                                ? `images/badge/all/como.png`
                                : `images/badge/${championshipSelect.value}/${awayTeamSelect.value}.png`;
                            const awayLogo = await loadImage(awayLogoSrc);
                            if (awayLogo) {
                                ctx.drawImage(awayLogo, style.awayLogo.x, style.awayLogo.y, style.awayLogo.width, style.awayLogo.height);
                            }
                        }

                        if (style.championshipLogo) {
                            const championshipLogoSrc = `images/logos/${championshipSelect.value}-logo.png`;
                            const championshipLogo = await loadImage(championshipLogoSrc);
                            if (championshipLogo) {
                                ctx.drawImage(championshipLogo, style.championshipLogo.x, style.championshipLogo.y, style.championshipLogo.width, style.championshipLogo.height);
                            }
                        }

                        // Recupera i punteggi corretti in base alla grafica
                        let homeScore = '0';
                        let awayScore = '0';

                        if (graphicName === 'fulltime') {
                            homeScore = document.querySelector('.homeFullScore') ? document.querySelector('.homeFullScore').value.trim() : '0';
                            awayScore = document.querySelector('.awayFullScore') ? document.querySelector('.awayFullScore').value.trim() : '0';
                        } else if (graphicName === 'halftime' || graphicName === 'goal') {
                            homeScore = document.querySelector('.homeHalfScore') ? document.querySelector('.homeHalfScore').value.trim() : '0';
                            awayScore = document.querySelector('.awayHalfScore') ? document.querySelector('.awayHalfScore').value.trim() : '0';
                        }

                        // Disegna il testo con letter-spacing se specificato
                        if (style.dateTime) {
                            const dateText = formatDate(adjustedDateObj, timeVersion.timeZoneAbbreviation, 'en-GB', graphicName);
                            ctx.font = `bold ${style.dateTime.fontSize}px ${style.dateTime.font}`;
                            ctx.fillStyle = style.dateTime.color;
                            ctx.textAlign = 'left';
                            if (style.dateTime.letterSpacing) {
                                ctx.textBaseline = 'top';
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

                        if (style.playerName) {
                            let playerName = ''; // Dichiarazione variabile fuori dagli scope condizionali
                        
                            if (customPlayer) {
                                // Recupera il nome del giocatore da un input testuale
                                const playerInput = document.getElementById('goalPlayerInput');
                                playerName = playerInput ? playerInput.value.trim() : '';
                            } else {
                                // Recupera il nome del giocatore dal select
                                const playerSelect = document.getElementById('goalPlayerSelect');
                                if (playerSelect) {
                                    const selectedValue = playerSelect.value;
                                    const selectedPlayer = currentPlayers.find(p => p.value === selectedValue);
                        
                                    if (selectedPlayer) {
                                        playerName = selectedPlayer.text;
                                    } else {
                                        console.warn(`Giocatore con valore "${selectedValue}" non trovato nell'array corrente.`);
                                    }
                                }
                            }
                        
                            // Puoi ora usare `playerName` come richiesto
                            
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

                        // Disegna il match day se necessario
                        if (style.matchDay) {
                            const matchDayValue = document.getElementById('matchDay').value.trim() || '1';
                            ctx.font = `bold ${style.matchDay.fontSize}px ${style.matchDay.font}`;
                            ctx.fillStyle = style.matchDay.color;
                            ctx.textAlign = 'left';
                            if (style.matchDay.letterSpacing) {
                                drawTextWithLetterSpacing(ctx, `MATCHDAY ${matchDayValue}`, style.matchDay.x, style.matchDay.y, style.matchDay.letterSpacing);
                            } else {
                                ctx.fillText(`MATCHDAY ${matchDayValue}`, style.matchDay.x, style.matchDay.y);
                            }
                        }
                    }

                    // **Inizio Modifica Livematch: Aggiunta del Titolo**
                    if (graphicName === 'livematch') {
                        const formatSuffix = overlayName.replace('overlay_', ''); // Es: '5x8' da 'overlay_5x8'
                        const championship = championshipSelect.value; // Es: 'primavera' o 'women'
                        const titleImageSrc = `images/graphics/livematch/title/${championship}_${formatSuffix}.png`;

                        const titleImage = await loadImage(titleImageSrc);
                        if (titleImage) {
                            // Disegna il titolo in una posizione specifica (ad esempio, in alto)
                            // Modifica le coordinate (x, y) e le dimensioni se necessario
                            const titleX = (canvas.width - titleImage.width) / 2; // Centra orizzontalmente
                            ctx.drawImage(titleImage, titleX, 0, titleImage.width, titleImage.height);
                        }
                    }
                    // **Fine Modifica Livematch**

                    // Imposta gli attributi data-* sul canvas per uso futuro
                    canvas.dataset.timeZoneAbbreviation = timeVersion.timeZoneAbbreviation || '';
                    canvas.dataset.graphicName = graphicName;
                    canvas.dataset.format = overlayName.replace('overlay_', '');
                    canvas.dataset.homeTeamName = getTeamDisplayName(homeTeamSelect.value);
                    canvas.dataset.awayTeamName = getTeamDisplayName(awayTeamSelect.value);
                    canvas.dataset.day = adjustedDateObj.getDate().toString().padStart(2, '0') + adjustedDateObj.toLocaleString('default', { month: 'short' }).toLowerCase();

                    // Crea un div per l'anteprima e aggiungi il canvas
                    const previewDiv = document.createElement('div');
                    previewDiv.classList.add('carousel-item');
                    previewDiv.appendChild(canvas);

                    // **Aggiunta del pulsante di download individuale**
                    const downloadLink = document.createElement('a');
                    
                    // Inserimento del canvas all'interno del tag <a>
                    downloadLink.appendChild(canvas);
                    
                    // Aggiunta del tag <br> per andare a capo
                    downloadLink.appendChild(document.createElement('br'));
                    
                    // Testo "Download"
                    const downloadText = document.createTextNode('Download');
                    downloadLink.appendChild(downloadText);
                    
                    // Impostazione delle proprietà per il download
                    downloadLink.href = canvas.toDataURL('image/png');
                    downloadLink.download = getFilenameForCanvas(canvas);
                    downloadLink.classList.add('download-link');
                    
                    // Aggiunta del link al contenitore principale
                    previewDiv.appendChild(downloadLink);
                    // **Fine Aggiunta**

                    graphicPreviewContainer.appendChild(previewDiv);
                    previewsGenerated++;
                }
            }
        }
        carouselContainer.appendChild(graphicPreviewContainer);
    }

    // Gestisci la visibilità della sezione preview
    const previewSection = document.querySelector('.preview');
    if (previewsGenerated > 0) {
        previewSection.classList.add('visible');
    } else {
        previewSection.classList.remove('visible');
    }
}

async function removeBackground(image) {
    try {
        // 1. Converti l'immagine originale in un blob
        const originalBlob = await fetch(image.src).then(res => res.blob());

        // 2. Crea un form data per l'API di remove.bg
        const formData = new FormData();
        formData.append('image_file', originalBlob);
        formData.append('size', 'auto'); // Opzioni: 'auto', 'preview', 'small', 'regular', 'full'

        // 3. Effettua la richiesta all'API di remove.bg
        const response = await fetch('https://api.remove.bg/v1.0/removebg', {
            method: 'POST',
            headers: {
                'X-Api-Key': apiKey
            },
            body: formData
        });

        // 4. Verifica la risposta dell'API
        if (!response.ok) {
            throw new Error('Errore nella risposta dell\'API: ' + response.statusText);
        }

        // 5. Ottieni l'immagine con il canale alpha dall'API
        const resultBlob = await response.blob();
        const resultImage = new Image();
        resultImage.src = URL.createObjectURL(resultBlob);

        // 6. Attendi che l'immagine sia caricata
        await new Promise((resolve) => {
            resultImage.onload = resolve;
        });

        // 7. Crea un canvas per l'immagine originale
        const originalCanvas = document.createElement('canvas');
        originalCanvas.width = image.width;
        originalCanvas.height = image.height;
        const originalCtx = originalCanvas.getContext('2d');
        originalCtx.drawImage(image, 0, 0);

        // 8. Crea un canvas per l'immagine con il canale alpha
        const alphaCanvas = document.createElement('canvas');
        alphaCanvas.width = image.width;
        alphaCanvas.height = image.height;
        const alphaCtx = alphaCanvas.getContext('2d');

        // 9. Ridimensiona l'immagine restituita da remove.bg per corrispondere alle dimensioni originali
        alphaCtx.drawImage(resultImage, 0, 0, image.width, image.height);

        // 10. Estrai il canale alpha dall'immagine ridimensionata
        const alphaImageData = alphaCtx.getImageData(0, 0, alphaCanvas.width, alphaCanvas.height);
        const alphaData = alphaImageData.data;

        // --- Nuovi Passaggi per Sfocare il Canale Alpha verso l'Interno ---

        // 11. Inverti il canale alpha
        for (let i = 0; i < alphaData.length; i += 4) {
            alphaData[i + 3] = 255 - alphaData[i + 3]; // Inverti il canale alpha
        }

        // 12. Aggiorna l'immagine alpha invertita
        alphaCtx.putImageData(alphaImageData, 0, 0);

        // 13. Crea un canvas temporaneo per applicare la sfocatura
        const blurredAlphaCanvas = document.createElement('canvas');
        blurredAlphaCanvas.width = alphaCanvas.width;
        blurredAlphaCanvas.height = alphaCanvas.height;
        const blurredAlphaCtx = blurredAlphaCanvas.getContext('2d');

        // 14. Disegna il canale alpha invertito sul canvas temporaneo
        blurredAlphaCtx.drawImage(alphaCanvas, 0, 0);

        // 15. Applica un filtro di sfocatura (ad esempio, 5px)
        blurredAlphaCtx.filter = 'blur(5px)';
        blurredAlphaCtx.drawImage(blurredAlphaCanvas, 0, 0);

        // 16. Ottieni i dati dell'immagine alpha sfocata invertita
        const blurredAlphaImageData = blurredAlphaCtx.getImageData(0, 0, blurredAlphaCanvas.width, blurredAlphaCanvas.height);
        const blurredAlphaData = blurredAlphaImageData.data;

        // 17. Inverti nuovamente il canale alpha sfocato
        for (let i = 0; i < blurredAlphaData.length; i += 4) {
            blurredAlphaData[i + 3] = 255 - blurredAlphaData[i + 3]; // Inverto nuovamente il canale alpha
        }

        // 18. Applica il canale alpha sfocato all'immagine originale
        const imageData = originalCtx.getImageData(0, 0, originalCanvas.width, originalCanvas.height);
        const originalData = imageData.data;

        for (let i = 0; i < blurredAlphaData.length; i += 4) {
            const alpha = blurredAlphaData[i + 3]; // Canale alpha sfocato
            originalData[i + 3] = alpha; // Imposta il canale alpha dell'immagine originale
        }

        // 19. Aggiorna i dati dell'immagine originale con il nuovo canale alpha sfocato
        originalCtx.putImageData(imageData, 0, 0);

        // 20. Crea l'immagine finale
        const finalImage = new Image();
        finalImage.src = originalCanvas.toDataURL();

        // 21. Attendi che l'immagine finale sia caricata
        await new Promise((resolve) => {
            finalImage.onload = resolve;
        });

        mostraCreditiRimanenti();
        updateGraphicsOptions();

        return finalImage;

    } catch (error) {
        console.error('Errore durante la rimozione dello sfondo:', error);
        alert('Errore con l\'API di remove.bg: ' + error.message);
        // Se c'è un errore, utilizza il metodo alternativo
        return await removeBackgroundLocally(image);
    }
}

async function removeBackgroundLocally(image) {
    // Carica il modello BodyPix
    const net = await bodyPix.load();

    // Segmenta l'immagine per ottenere la maschera del soggetto
    const segmentation = await net.segmentPerson(image);

    // Crea un canvas per elaborare l'immagine
    const tempCanvas = document.createElement('canvas');
    tempCanvas.width = image.width;
    tempCanvas.height = image.height;
    const tempCtx = tempCanvas.getContext('2d');

    // Disegna l'immagine originale sul canvas
    tempCtx.drawImage(image, 0, 0);

    // Crea una maschera con i bordi sfumati di 3 px
    const mask = bodyPix.toMask(
        segmentation,
        {r: 0, g: 0, b: 0, a: 255}, // Primo piano opaco
        {r: 0, g: 0, b: 0, a: 0}    // Sfondo trasparente
    );

    // Applica la sfocatura alla maschera
    const blurredMask = await applyBlurToMask(mask, 3);

    // Applica la maschera sfumata all'immagine
    applyMaskToImage(tempCtx, blurredMask);

    // Crea una nuova immagine dal canvas
    const resultImage = new Image();
    resultImage.src = tempCanvas.toDataURL();

    // Attendi che l'immagine sia caricata
    await new Promise((resolve) => {
        resultImage.onload = resolve;
    });

    return resultImage;
}

// Funzione per applicare la sfocatura alla maschera
async function applyBlurToMask(mask, blurRadius) {
    // Crea un canvas per la maschera
    const maskCanvas = document.createElement('canvas');
    maskCanvas.width = mask.width;
    maskCanvas.height = mask.height;
    const maskCtx = maskCanvas.getContext('2d');

    // Disegna la maschera sul canvas della maschera
    maskCtx.putImageData(mask, 0, 0);

    // Applica la sfocatura
    maskCtx.filter = `blur(${blurRadius}px)`;
    maskCtx.drawImage(maskCanvas, 0, 0);

    // Ottieni i dati della maschera sfocata
    const blurredMaskData = maskCtx.getImageData(0, 0, maskCanvas.width, maskCanvas.height);

    return blurredMaskData;
}

// Funzione per applicare la maschera sfumata all'immagine
function applyMaskToImage(ctx, maskData) {
    // Crea un canvas per la maschera sfumata
    const maskCanvas = document.createElement('canvas');
    maskCanvas.width = maskData.width;
    maskCanvas.height = maskData.height;
    const maskCtx = maskCanvas.getContext('2d');

    // Inserisci i dati della maschera sfumata nel canvas
    maskCtx.putImageData(maskData, 0, 0);

    // Imposta l'operazione di composizione per conservare solo i pixel in cui la maschera è presente
    ctx.globalCompositeOperation = 'destination-in';

    // Applica la maschera sfumata al contesto dell'immagine
    ctx.drawImage(maskCanvas, 0, 0);

    // Ripristina l'operazione di composizione predefinita
    ctx.globalCompositeOperation = 'source-over';
}

/**
 * Funzione per aggiungere gli event listeners per l'aggiornamento automatico
 */
function addAutoUpdateListeners() {
    // Selezione del campionato
    championshipSelect.addEventListener('change', () => {
        // Popola le squadre quando cambia il campionato
        populateTeams();
        updateGraphicsOptions();
        toggleDateTimeSection(); // Mostra/nasconde la sezione Data e Ora
        toggleMatchDaySection();
        toggleStadiumLocationSection();
        generatePreviews();
    });

    // Selezione della squadra di casa
    homeTeamSelect.addEventListener('change', () => {
        generatePreviews();
    });

    // Selezione della squadra ospite
    awayTeamSelect.addEventListener('change', () => {
        generatePreviews();
    });

    // Selezione delle grafiche
    graphicCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            updateGraphicsOptions();
            toggleDateTimeSection();
            toggleMatchDaySection();
            toggleStadiumLocationSection();
            handleGraphicsChange(); // Chiamata a handleGraphicsChange
            updateImagesHeaderVisibility(); // Aggiungi questa linea
        });
    });

    // Event listeners per le opzioni di personalizzazione delle grafiche
    graphicsOptionsDiv.addEventListener('input', () => {
        generatePreviews();
    });

    // Event listener per il pulsante Generate
    generateBtn.addEventListener('click', () => {
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
        toggleTeams();
    });

    // Event listener per i campi di upload delle immagini di sfondo
    uploadContainer.addEventListener('change', (event) => {
        if (event.target && event.target.matches('input[type="file"]')) {
            const fileInput = event.target;
            const graphicId = fileInput.dataset.graphicId;
            const file = fileInput.files[0];
            if (file && file.type.startsWith('image/')) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    // Salva l'immagine caricata nell'oggetto backgroundImages
                    backgroundImages[graphicId] = e.target.result;

                    // Rigenera le anteprime delle grafiche per applicare il nuovo sfondo
                    generatePreviews();
                }
                reader.readAsDataURL(file);
            }
        }
    });

    stadiumInput.addEventListener('input', () => {
        generatePreviews();
    });

    matchDateInput.addEventListener('change', () => {
        generatePreviews();
    });

    matchTimeInput.addEventListener('change', () => {
        generatePreviews();
    });

    // Event listener per l'input del matchday
    const matchDayInput = document.getElementById('matchDay');
    if (matchDayInput) {
        matchDayInput.addEventListener('input', () => {
            generatePreviews();
        });
    }
}

function toggleDateTimeSection() {
    const selectedGraphics = Array.from(graphicCheckboxes)
        .filter(cb => cb.checked)
        .map(cb => cb.value);

    const requiresDateTime = selectedGraphics.some(graphic => graphicsRequireDateTime.includes(graphic));

    if (requiresDateTime) {
        dateTimeSection.style.display = 'block';
    } else {
        dateTimeSection.style.display = 'none';
    }
}

function toggleMatchDaySection() {
    const selectedGraphics = Array.from(graphicCheckboxes)
        .filter(cb => cb.checked)
        .map(cb => cb.value);

    const requiresMatchDay = selectedGraphics.some(graphic => graphicsRequireMatchDay.includes(graphic));

    if (requiresMatchDay) {
        matchDaySection.style.display = 'flex';
    } else {
        matchDaySection.style.display = 'none';
    }
}

function toggleStadiumLocationSection() {
    const selectedGraphics = Array.from(graphicCheckboxes)
        .filter(cb => cb.checked)
        .map(cb => cb.value);

    const requiresStadiumLocation = selectedGraphics.some(graphic => graphicsRequireStadiumLocation.includes(graphic));

    if (requiresStadiumLocation) {
        stadiumLocationSection.style.display = 'block';
    } else {
        stadiumLocationSection.style.display = 'none';
    }
}

function initializeTeams() {
    populateTeams();
    updateGraphicsOptions();
    toggleDateTimeSection();
    toggleMatchDaySection();
    toggleStadiumLocationSection();
    generatePreviews();
}

function generateBackgroundUploadFields() {
    graphicCheckboxes.forEach(cb => {
        if (cb.checked) {
            const graphicId = cb.value.toLowerCase();
            // Creare un solo upload per grafica, non per formato
            let existingUploadItem = Array.from(uploadContainer.children).find(child => {
                return child.querySelector(`input[data-graphic-id="${graphicId}"]`);
            });

            if (!existingUploadItem) {
                // Crea un nuovo upload-item se non esiste
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
            const graphicId = cb.value.toLowerCase();
            const uploadInput = uploadContainer.querySelector(`input[data-graphic-id="${graphicId}"]`);
            if (uploadInput) {
                const uploadItem = uploadInput.parentElement;
                uploadContainer.removeChild(uploadItem);
                if (backgroundImages[graphicId]) {
                    delete backgroundImages[graphicId];
                }
            }
        }
    });

    addUploadItemListeners();
}

function handleGraphicsChange() {
    generateBackgroundUploadFields();
    generatePreviews();
    advCustomHalfOverlay = false;
    advCustomFullOverlay = false;

   updateGraphicsOptions()
}

function addUploadItemListeners() {
    const uploadItems = document.querySelectorAll('.upload-item input[type="file"]');

    uploadItems.forEach(function(input) {
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

  increaseButton.addEventListener('click', () => {
    let currentValue = parseInt(matchDayInput.value, 10);
    if (!isNaN(currentValue)) {
      matchDayInput.value = currentValue + 1;
    }
  });
  
  decreaseButton.addEventListener('click', () => {
    let currentValue = parseInt(matchDayInput.value, 10);
    if (!isNaN(currentValue) && currentValue > 0) {
      matchDayInput.value = currentValue - 1;
    }
  });

  function updateImagesHeaderVisibility() {
    const imagesHeader = document.getElementById('imagesHeader');
    const anyGraphicSelected = Array.from(graphicCheckboxes).some(cb => cb.checked);
    
    if (anyGraphicSelected) {
        imagesHeader.style.display = 'block';
    } else {
        imagesHeader.style.display = 'none';
    }
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

async function initialize() {
    await fetchData(); // Attendi che fetchData completi
    addAutoUpdateListeners();
    initializeTeams();
    generateBackgroundUploadFields();
    updateImagesHeaderVisibility();
}

// Assicurati di avere una sola definizione della funzione initialize
document.addEventListener('DOMContentLoaded', initialize);