const firebaseConfig = {
    apiKey: "AIzaSyBRduW7hkBNlSf0DJedsSl_VL4Bp2pQ5b4",
    authDomain: "como-1907-graphics-main.firebaseapp.com",
    projectId: "como-1907-graphics-main",
    storageBucket: "como-1907-graphics-main.firebasestorage.app",
    messagingSenderId: "265131671232",
    appId: "1:265131671232:web:440bd456fdc73b02b53725",
    measurementId: "G-FD3VRBVJLM"
};

let app = '';

// Inizializza Firebase
if (!firebase.apps.length) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app();
}

// Riferimento a Firebase Database
const database = firebase.database(app);

function saveTeamOnFireBase(championship, team) {
    firebase.database().ref(championship).set(team);
}

function syncTeamOnFireBase(championship, select) {
  firebase.database()
    .ref(championship)
    .on('value', (snapshot) => {
      const selectedOption = snapshot.val();
      if (selectedOption) {
        select.value = selectedOption;
      }
    });
}


function savePreviewOnFireBase(canvas, filename) {
    console.log(`--test mode-- filename:${filename}`);
}