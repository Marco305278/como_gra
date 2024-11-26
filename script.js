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
const decreaseButton = document.getElementById('decrease');
const increaseButton = document.getElementById('increase');

// Configurazione delle disposizioni degli elementi per ogni grafica e formato
const graphicStyles = {
    'fulltime': {
        'overlay_4x5': {
            homeLogo: { x: 70, y: 970, width: 150, height: 150 },
            awayLogo: { x: 70, y: 1145, width: 150, height: 150 },
            championshipLogo: { x: 70, y: 80, width: 130, height: 212 },
            homeScore: { x: 260, y: 1100, fontSize: 164, color: 'white', font: 'bodoni-72-bold', letterSpacing: 0 },
            awayScore: { x: 260, y: 1275, fontSize: 164, color: 'white', font: 'bodoni-72-bold', letterSpacing: 0 },
            dateTime: null,
            matchDay: null // Non richiesto per questa grafica
        },
        'overlay_9x16': {
            homeLogo: { x: 70, y: 1470, width: 150, height: 150 },
            awayLogo: { x: 70, y: 1645, width: 150, height: 150 },
            championshipLogo: { x: 70, y: 80, width: 130, height: 212 },
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
            championshipLogo: { x: 70, y: 80, width: 130, height: 212 },
            homeScore: { x: 260, y: 1100, fontSize: 164, color: 'white', font: 'bodoni-72-bold', letterSpacing: 0 },
            awayScore: { x: 260, y: 1275, fontSize: 164, color: 'white', font: 'bodoni-72-bold', letterSpacing: 0 },
            dateTime: null,
            matchDay: null // Non richiesto per questa grafica
        },
        'overlay_9x16': {
            homeLogo: { x: 70, y: 1470, width: 150, height: 150 },
            awayLogo: { x: 70, y: 1645, width: 150, height: 150 },
            championshipLogo: { x: 70, y: 80, width: 130, height: 212 },
            homeScore: { x: 260, y: 1600, fontSize: 164, color: 'white', font: 'bodoni-72-bold', letterSpacing: 0 },
            awayScore: { x: 260, y: 1775, fontSize: 164, color: 'white', font: 'bodoni-72-bold', letterSpacing: 0 },
            dateTime: null,
            matchDay: null // Non richiesto per questa grafica
        }
    },
    'kickoff': {
        'overlay_4x5': {
            homeLogo: { x: 70, y: 950, width: 165, height: 165 },
            awayLogo: { x: 250, y: 950, width: 165, height: 165 },
            championshipLogo: { x: 70, y: 50, width: 130, height: 212 },
            homeScore: null,
            awayScore: null,
            dateTime: { x: 70, y: 360, fontSize: 54, color: 'white', font: 'bodoni-72-bold', letterSpacing: 2 },
            matchDay: null
        },
        'overlay_9x16': {
            homeLogo: { x: 70, y: 1250, width: 165, height: 165 },
            awayLogo: { x: 250, y: 1250, width: 165, height: 165 },
            championshipLogo: { x: 70, y: 350, width: 130, height: 212 },
            homeScore: null,
            awayScore: null,
            dateTime: { x: 70, y: 640, fontSize: 64, color: 'white', font: 'bodoni-72-bold', letterSpacing: 2 },
            matchDay: null
        }
    },
    'goal': {
        'overlay_4x5': {
            homeLogo: { x: 800, y: 170, width: 165, height: 165 },
            awayLogo: { x: 800, y: 345, width: 165, height: 165 },
            championshipLogo: { x: 70, y: 60, width: 130, height: 212 },
            homeScore: { x: 930, y: 170, fontSize: 164, color: 'white', font: 'bodoni-72-bold', letterSpacing: 0 },
            awayScore: { x: 930, y: 345, fontSize: 164, color: 'white', font: 'bodoni-72-bold', letterSpacing: 0 },
            dateTime: null,
            matchDay: null // Non richiesto per questa grafica
        },
        'overlay_9x16': {
            homeLogo: { x: 800, y: 400, width: 165, height: 165 },
            awayLogo: { x: 800, y: 575, width: 165, height: 165 },
            championshipLogo: { x: 70, y: 70, width: 130, height: 212 },
            homeScore: { x: 930, y: 400, fontSize: 180, color: 'white', font: 'bodoni-72-bold', letterSpacing: 0 },
            awayScore: { x: 930, y: 575, fontSize: 180, color: 'white', font: 'bodoni-72-bold', letterSpacing: 0 },
            dateTime: null,
            matchDay: null // Non richiesto per questa grafica
        }
    },
    'livematch': {
        'overlay_5x8': {
            homeLogo: { x: 180, y: 700, width: 105, height: 105 },
            awayLogo: { x: 300, y: 700, width: 105, height: 105 },
            championshipLogo: null,
            homeScore: null,
            awayScore: null,
            dateTime: { x: 140, y: 640, fontSize: 17, color: 'white', font: 'MazzardH-Medium', letterSpacing: 3.8 },
            matchDay: null // Non richiesto per questa grafica
        },
        'overlay_16x9': {
            homeLogo: { x: 710, y: 790, width: 230, height: 230 },
            awayLogo: { x: 980, y: 790, width: 230, height: 230 },
            championshipLogo: null,
            homeScore: null,
            awayScore: null,
            dateTime: { x: 640, y: 665, fontSize: 34, color: 'white', font: 'MazzardH-Medium', letterSpacing: 8 },
            matchDay: null // Non richiesto per questa grafica
        }
    },
    'highlights': {
        'overlay_5x8': {
            homeLogo: { x: 55, y: 655, width: 150, height: 150 },
            awayLogo: { x: 375, y: 655, width: 150, height: 150 },
            championshipLogo: null,
            combinedScore: { x: 291, y: 760, fontSize: 72, color: 'white', font: 'MazzardH-Light', letterSpacing: -10, textAlign: 'center' },
            dateTime: null,
            matchDay: null // Non richiesto per questa grafica
        },
        'overlay_16x9': {
            homeLogo: { x: 960, y: 430, width: 260, height: 260 },
            awayLogo: { x: 1545, y: 430, width: 260, height: 260 },
            championshipLogo: null,
            combinedScore: { x: 1400, y: 590, fontSize: 130, color: 'white', font: 'MazzardH-Light', letterSpacing: 0, textAlign: 'center' },
            dateTime: null,
            matchDay: null // Non richiesto per questa grafica
        }
    },
    'nextmatch': {
        'overlay_4x5': {
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
        'overlay_9x16': {
            homeLogo: null,
            awayLogo: null,
            championshipLogo: { x: 70, y: 820, width: 130, height: 212 },
            homeScore: null,
            awayScore: null,
            dateTime: { x: 65, y: 1240 + 415, fontSize: 72, color: 'white', font: 'bodoni-72-bold', letterSpacing: 0 },
            matchDay: { x: 65, y: 810 + 370, fontSize: 40, color: 'white', font: 'bodoni-72-bold', letterSpacing: 6 },
            nextMatchTitle: { x: 65, y: 200, fontSize: 72, color: 'white', font: 'bodoni-72-bold', letterSpacing: 2 },
            homeTeamName: { x: 60, y: 970 + 390, fontSize: 185, color: 'white', font: 'DrukText-Medium-Trial', letterSpacing: -10 },
            vsText: { x: null, y: 970 + 390, fontSize: 100, color: 'white', font: 'bodoni-72-book-italic', letterSpacing: 0 },
            awayTeamName: { x: 60, y: 1140 + 390, fontSize: 185, color: 'white', font: 'DrukText-Medium-Trial', letterSpacing: -10 },
            stadiumLocation: { x: 65, y: 1310 + 415, fontSize: 60, color: 'white', font: 'bodoni-72-bold', letterSpacing: -2 }
        }
    },
    'matchday': {
        'overlay_4x5': {
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
        'overlay_9x16': {
            homeLogo: null,
            awayLogo: null,
            championshipLogo: { x: 70, y: 820, width: 130, height: 212 },
            homeScore: null,
            awayScore: null,
            dateTime: { x: 65, y: 1240 + 415, fontSize: 72, color: 'white', font: 'bodoni-72-bold', letterSpacing: 0 },
            matchDay: { x: 65, y: 810 + 370, fontSize: 40, color: 'white', font: 'bodoni-72-bold', letterSpacing: 6 },
            nextMatchTitle: null,
            homeTeamName: { x: 60, y: 970 + 390, fontSize: 185, color: 'white', font: 'DrukText-Medium-Trial', letterSpacing: -10 },
            vsText: { x: null, y: 970 + 390, fontSize: 100, color: 'white', font: 'bodoni-72-book-italic', letterSpacing: 0 },
            awayTeamName: { x: 60, y: 1140 + 390, fontSize: 185, color: 'white', font: 'DrukText-Medium-Trial', letterSpacing: -10 },
            stadiumLocation: { x: 65, y: 1310 + 415, fontSize: 60, color: 'white', font: 'bodoni-72-bold', letterSpacing: -2 }
        }
    },
    // Aggiungi altre grafiche qui con disposizioni specifiche per ogni formato
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
    'goal': ['overlay_4x5', 'overlay_9x16'],
    'livematch': ['overlay_5x8', 'overlay_16x9'],
    'highlights': ['overlay_5x8', 'overlay_16x9'],
    'nextmatch': ['overlay_4x5', 'overlay_9x16'],
    'matchday': ['overlay_4x5', 'overlay_9x16']
};

// Definizione delle grafiche che richiedono l'uso dei loghi delle squadre
const graphicsWithLogos = ['livematch', 'highlights', 'halftime', 'fulltime', 'goal', 'kickoff'];
const graphicsRequireDateTime = ['kickoff', 'matchday', 'nextmatch', 'livematch'];
const graphicsRequireMatchDay = ['matchday', 'nextmatch'];
const graphicsRequireStadiumLocation = ['nextmatch', 'matchday']; // Grafiche che richiedono la posizione dello stadio

// Definizione delle grafiche che richiedono solo il logo del campionato
const graphicsWithChampionshipLogo = ['nextmatch', 'matchday'];

// Variabile di stato per gestire lo swap
let isHomeFixed = true; // Inizialmente, Home Team è fisso su "Como 1907"

// Definizione del team fisso
const fixedTeam = {
    value: 'como1907',
    text: 'Como 1907'
};

// Variabile per memorizzare le squadre correnti
let currentTeams = [];

// Oggetto per memorizzare le immagini di sfondo caricate
// Mappa graphicId a immagine (stringa Data URL)
let backgroundImages = {};

/**
 * Funzione per popolare un select con le squadre selezionabili
 * @param {HTMLElement} selectElement - L'elemento select da popolare
 * @param {Array} teams - L'array delle squadre disponibili
 * @param {string|null} selectedValue - Il valore da selezionare (opzionale)
 */
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

/**
 * Funzione per popolare le squadre in base al campionato selezionato
 */
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

/**
 * Funzione per alternare lo stato dei team e mantenere la selezione
 */
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

/**
 * Funzione per aggiornare le opzioni grafiche
 */
function updateGraphicsOptions() {
    // Salva i valori esistenti degli input
    const existingInputs = {};
    const inputs = graphicsOptionsDiv.querySelectorAll('input');
    inputs.forEach(input => {
        existingInputs[input.className] = input.value;
    });

    graphicsOptionsDiv.innerHTML = ''; // Pulisce le opzioni esistenti

    let isFulltimeHighlightsAdded = false; // Flag globale per fulltime/highlights

    graphicCheckboxes.forEach(cb => {
        if (cb.checked) {
            const optionDiv = document.createElement('div');
            optionDiv.classList.add('graphic-option');

            // Aggiungi opzioni specifiche per ogni grafica
            switch (cb.value) {
                case 'fulltime':
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
                        isFulltimeHighlightsAdded = true; // Imposta il flag su true
                    }
                    break;
                case 'halftime':
                    optionDiv.innerHTML += `
                        <h3>Half Time</h3>
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
                    break;
                // Aggiungi altri case per altre grafiche se necessario
                default:
                    // Non aggiungere opzioni per altre grafiche
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
 * @param {HTMLCanvasElement} canvas - Il canvas per il quale generare il nome del file
 * @returns {string} - Il nome del file
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
    } else {
        filename = `${capitalizeFirstLetter(graphicName)}_${homeTeamName} vs ${awayTeamName}_${format}_${day}_${timeZoneAbbreviation.toLowerCase()}.png`;
    }

    return filename;
}

/**
 * Funzione per formattare la data
 * @param {Date} dateObj - L'oggetto Date da formattare
 * @param {string} timeZoneAbbreviation - Abbreviazione del fuso orario (es. 'CET', 'WIB')
 * @param {string} locale - Locale per la formattazione della data (es. 'en-GB')
 * @returns {string} - La data formattata come "NOVEMBER 16 | 15:00 CET"
 */
function formatDate(dateObj, timeZoneAbbreviation = 'CET', locale = 'en-GB') {
    const optionsDate = { month: 'long', day: 'numeric' };
    const formattedDate = dateObj.toLocaleDateString(locale, optionsDate).toUpperCase();
    const formattedTime = dateObj.toLocaleTimeString(locale, { hour: '2-digit', minute: '2-digit', hour12: false });
    return `${formattedDate} | ${formattedTime} ${timeZoneAbbreviation}`;
}

/**
 * Funzione per disegnare un'immagine su canvas mantenendo l'aspect ratio e coprendo l'intero canvas
 * @param {CanvasRenderingContext2D} ctx - Il contesto del canvas
 * @param {Image} img - L'immagine da disegnare
 * @param {number} canvasWidth - La larghezza del canvas
 * @param {number} canvasHeight - L'altezza del canvas
 */
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

/**
 * Funzione per disegnare testo con letter-spacing personalizzato
 * @param {CanvasRenderingContext2D} ctx - Il contesto del canvas
 * @param {string} text - Il testo da disegnare
 * @param {number} x - Coordinata x iniziale
 * @param {number} y - Coordinata y iniziale
 * @param {number} letterSpacing - Spazio tra i caratteri in pixel
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
 * @param {CanvasRenderingContext2D} ctx - Il contesto del canvas
 * @param {string} text - Il testo da misurare
 * @param {number} letterSpacing - Lo spazio tra le lettere
 * @returns {number} - La larghezza totale del testo
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
 * @param {string} teamValue - Il valore della squadra selezionata
 * @returns {string} - Il nome visualizzabile della squadra
 */
function getTeamDisplayName(teamValue) {
    const team = currentTeams.find(t => t.value === teamValue);
    return team ? team.text : teamValue;
}

/**
 * Funzione per creare le tab delle grafiche
 * @param {Array} selectedGraphics - Array delle grafiche selezionate
 * @param {string|null} selectedGraphicName - Nome della grafica selezionata
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

/**
 * Funzione per generare le anteprime
 */
async function generatePreviews() {
    console.log('generatePreviews called');
    await document.fonts.ready;

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

    console.log(`Generazione delle anteprime per il match del: ${matchDateObj}`);

    let previewsGenerated = 0;

    const selectedGraphics = Array.from(graphicCheckboxes)
        .filter(cb => cb.checked)
        .map(cb => cb.value);

    // Passa selectedGraphicName alla funzione
    createGraphicTabs(selectedGraphics, selectedGraphicName);

    // Itera attraverso tutte le grafiche selezionate
    for (const graphicName of selectedGraphics) {
        console.log(`Elaborazione grafica: ${graphicName}`);
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
            console.log(`Nessun formato disponibile per la grafica ${graphicName}.`);
            continue;
        }

        // Itera attraverso i formati disponibili per questa grafica
        for (const overlayName of availableFormats) {
            const dimensions = formats[overlayName];

            if (!dimensions) {
                console.warn(`Dimensioni non definite per il formato ${overlayName}.`);
                continue;
            }

            const bgImageSrc = backgroundImages[graphicName.toLowerCase()] ? backgroundImages[graphicName.toLowerCase()] : `${graphicFolder}/1.png`;
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

            // Determina se generare entrambe le versioni
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

                if (bgImage) {
                    drawImageCover(ctx, bgImage, canvas.width, canvas.height);
                } else {
                    ctx.fillStyle = '#ffffff';
                    ctx.fillRect(0, 0, canvas.width, canvas.height);
                    console.warn(`Immagine di sfondo non caricata per ${graphicName} nel formato ${overlayName}. Canvas riempito con bianco.`);
                }

                drawImageCover(ctx, overlayImage, canvas.width, canvas.height);

                // Ottieni lo stile specifico per questa grafica e formato
                const style = graphicStyles[graphicName][overlayName];
                if (style) {
                    if (graphicName === 'highlights') {
                        // Disegna i loghi e il testo combinato centralmente
                        if (style.homeLogo) {
                            const homeLogoSrc = homeTeamSelect.value === 'como1907'
                                ? `images/badge/all/como.png`
                                : `images/badge/${championshipSelect.value}/${homeTeamSelect.value}.png`;
                            const homeLogo = await loadImage(homeLogoSrc);
                            if (homeLogo) {
                                ctx.drawImage(homeLogo, style.homeLogo.x, style.homeLogo.y, style.homeLogo.width, style.homeLogo.height);
                            }
                        }

                        if (style.awayLogo) {
                            const awayLogoSrc = awayTeamSelect.value === 'como1907'
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
                    } else if (graphicName === 'nextmatch' || graphicName === 'matchday') {
                        // Gestione specifica per la grafica 'nextmatch'

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

                        // Disegna il nome della squadra di casa e calcola la larghezza
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

                        // Calcola la posizione x per 'VS' in base alla larghezza del nome della squadra di casa
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
                    } else {
                        // Gestione delle altre grafiche
                        // Disegna i loghi
                        if (style.homeLogo) {
                            const homeLogoSrc = homeTeamSelect.value === 'como1907'
                                ? `images/badge/all/como.png`
                                : `images/badge/${championshipSelect.value}/${homeTeamSelect.value}.png`;
                            const homeLogo = await loadImage(homeLogoSrc);
                            if (homeLogo) {
                                ctx.drawImage(homeLogo, style.homeLogo.x, style.homeLogo.y, style.homeLogo.width, style.homeLogo.height);
                            }
                        }

                        if (style.awayLogo) {
                            const awayLogoSrc = awayTeamSelect.value === 'como1907'
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
                        } else if (graphicName === 'halftime') {
                            homeScore = document.querySelector('.homeHalfScore') ? document.querySelector('.homeHalfScore').value.trim() : '0';
                            awayScore = document.querySelector('.awayHalfScore') ? document.querySelector('.awayHalfScore').value.trim() : '0';
                        }

                        // Disegna il testo con letter-spacing se specificato
                        if (style.dateTime) {
                            const dateText = formatDate(adjustedDateObj, timeVersion.timeZoneAbbreviation, 'en-GB');
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
                        console.log(`Caricamento titolo: ${titleImageSrc}`);

                        const titleImage = await loadImage(titleImageSrc);
                        if (titleImage) {
                            // Disegna il titolo in una posizione specifica (ad esempio, in alto)
                            // Modifica le coordinate (x, y) e le dimensioni se necessario
                            const titleX = (canvas.width - titleImage.width) / 2; // Centra orizzontalmente
                            ctx.drawImage(titleImage, titleX, 0, titleImage.width, titleImage.height);
                            console.log(`Titolo disegnato: ${titleImageSrc}`);
                        } else {
                            console.warn(`Titolo non trovato: ${titleImageSrc}`);
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
                    downloadLink.textContent = 'Download';
                    downloadLink.href = canvas.toDataURL('image/png');
                    downloadLink.download = getFilenameForCanvas(canvas);
                    downloadLink.classList.add('download-link');
                    previewDiv.appendChild(downloadLink);
                    // **Fine Aggiunta**

                    graphicPreviewContainer.appendChild(previewDiv);
                    console.log(`Anteprima aggiunta per grafica: ${graphicName}, formato: ${overlayName}, fuso orario: ${timeVersion.timeZoneAbbreviation}`);
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

    console.log('generatePreviews completato');
}

/**
 * Funzione per aggiungere gli event listeners per l'aggiornamento automatico
 */
function addAutoUpdateListeners() {
    // Selezione del campionato
    championshipSelect.addEventListener('change', () => {
        console.log('Campionato cambiato');
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
            toggleDateTimeSection();
            toggleMatchDaySection();
            toggleStadiumLocationSection();
            handleGraphicsChange(); // Chiamata a handleGraphicsChange
            updateImagesHeaderVisibility(); // Aggiungi questa linea
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
        e.preventDefault(); // Prevenire il comportamento di default del pulsante se necessario
        console.log('Pulsante Swap premuto');
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
                    console.log(`Immagine di sfondo caricata per ${graphicId}`);

                    // Rigenera le anteprime delle grafiche per applicare il nuovo sfondo
                    generatePreviews();
                }
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
    const matchDayInput = document.getElementById('matchDay');
    if (matchDayInput) {
        matchDayInput.addEventListener('input', () => {
            console.log('Matchday modificato');
            generatePreviews();
        });
    }
}


/**
 * Funzione per alternare la sezione Data e Ora
 */
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

/**
 * Funzione per alternare la sezione Match Day
 */
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

/**
 * Funzione per alternare la sezione Posizione dello Stadio
 */
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

/**
 * Funzione per inizializzare lo stato dei team dopo il caricamento iniziale
 */
function initializeTeams() {
    populateTeams();
    updateGraphicsOptions();
    toggleDateTimeSection();
    toggleMatchDaySection();
    toggleStadiumLocationSection();
    generatePreviews();
}

/**
 * Funzione per generare i campi di upload delle immagini di sfondo
 * Ora crea un solo campo di upload per grafica, indipendentemente dai formati
 */
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

    // Dopo aver generato i campi di upload, aggiungi i listener per gestire l'opacità
    addUploadItemListeners();
}

/**
 * Funzione per gestire la generazione dei campi di upload quando le grafiche cambiano
 */
function handleGraphicsChange() {
    generateBackgroundUploadFields();
    generatePreviews();
}

/**
 * Funzione per aggiungere gli event listeners per gli upload-item
 */
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


  // Aumenta il valore
  increaseButton.addEventListener('click', () => {
    let currentValue = parseInt(matchDayInput.value, 10);
    if (!isNaN(currentValue)) {
      matchDayInput.value = currentValue + 1;
    }
  });
  
  // Diminuisce il valore
  decreaseButton.addEventListener('click', () => {
    let currentValue = parseInt(matchDayInput.value, 10);
    if (!isNaN(currentValue) && currentValue > 0) {
      matchDayInput.value = currentValue + 5;
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


/**
 * Funzione per capitalizzare la prima lettera di una stringa
 * @param {string} string - La stringa da capitalizzare
 * @returns {string} - La stringa con la prima lettera capitalizzata
 */
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

/**
 * Funzione per inizializzare tutto dopo il caricamento del DOM
 */
function initialize() {
    addAutoUpdateListeners();
    initializeTeams();
    generateBackgroundUploadFields();
    generatePreviews();
    updateImagesHeaderVisibility();
}

// Assicurati di avere una sola definizione della funzione initialize
document.addEventListener('DOMContentLoaded', initialize);
