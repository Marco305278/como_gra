// Import and configure Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBRduW7hkBNlSf0DJedsSl_VL4Bp2pQ5b4",
  authDomain: "como-1907-graphics-main.firebaseapp.com",
  databaseURL: "https://como-1907-graphics-main-default-rtdb.firebaseio.com/",
  projectId: "como-1907-graphics-main",
  storageBucket: "como-1907-graphics-main.firebasestorage.app",
  messagingSenderId: "265131671232",
  appId: "1:265131671232:web:440bd456fdc73b02b53725",
  measurementId: "G-FD3VRBVJLM"
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const storage = firebase.storage();

function saveTeamOnFireBase(championship, team) {
  console.log(`--test mode-- save: ${team}`)
}

function syncTeamOnFireBase(championship, select) {
  database.ref(`${championship}/team/`)
    .on('value', (snapshot) => {
      const team = snapshot.val();
      if (team) { select.value = team; }
    });
}

function saveMatchDayOnFireBase(championship, number) {
  console.log(`--test mode-- save: ${number}`)
}

function syncMatchDayOnFireBase(championship, input) {
  database.ref(`${championship}/mtc_day`)
    .on('value', (snapshot) => {
      const mtcday = snapshot.val();
      if (mtcday) {
        input.value = mtcday;
      }
    });
}

function saveDateOnFireBase(championship, date) {
  console.log(`--test mode-- save: ${date}`)
}

function syncDateOnFireBase(championship, input) {
  database.ref(`${championship}/date`)
    .on('value', (snapshot) => {
      const date = snapshot.val();
      if (date) {
        input.value = date;
      }
    });
}

function saveTimeOnFireBase(championship, time) {
  console.log(`--test mode-- save: ${time}`)
}

function syncTimeOnFireBase(championship, input) {
  database.ref(`${championship}/time`)
    .on('value', (snapshot) => {
      const time = snapshot.val();
      if (time) {
        input.value = time;
      }
    });
}

function saveStadiumOnFireBase(championship, stadium) {
  console.log(`--test mode-- save: ${stadium}`)
}

function syncStadiumOnFireBase(championship, input) {
  database.ref(`${championship}/stadium`)
    .on('value', (snapshot) => {
      const stadium = snapshot.val();
      if (stadium) {
        input.value = stadium;
      }
    });
}

function savePreviewOnFireBase(canvas, filename) {
  console.log(`--test mode-- filename: ${filename}`)
}

async function saveImagesOnFireBase(images, filename) {
  try {

    const response = await fetch(images);
    const blob = await response.blob();
    const file = new File([blob], filename, { type: blob.type });
    const storageRef = storage.ref('live_match/' + filename);
    const uploadTask = storageRef.put(file, { contentType: 'image/png' });

    return new Promise((resolve, reject) => {
      uploadTask.on('state_changed', 
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(`Upload in corso: ${progress.toFixed(2)}% completato`);
        }, 
        (error) => {
          console.error('Errore nel caricamento:', error);
          reject(error);
        }, 
        () => {
          uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
            console.log('File disponibile a:', downloadURL);
          });
        }
      );
    });
  } catch (error) {
    console.error('Errore nella funzione saveImagesOnFireBase:', error);
    throw error;
  }
}