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
  
  const app = firebase.initializeApp(firebaseConfig);
  const database = firebase.database();
  
  function saveTeamOnFireBase(championship, team) {
    database.ref(`${championship}/team/`).set(team)
  }
  
  function syncTeamOnFireBase(championship, select) {
    database.ref(`${championship}/team/`)
      .on('value', (snapshot) => {
        const team = snapshot.val();
        if (team) { select.value = team; }
      });
  }
  
  function saveMatchDayOnFireBase(championship, number) {
    database.ref(`${championship}/mtc_day/`).set(number)
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
    database.ref(`${championship}/date`).set(date)
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
    database.ref(`${championship}/time`).set(time)
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
    database.ref(`${championship}/stadium`).set(stadium)
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

// Riferimento a Firebase Storage
const storage = firebase.storage();

function savePreviewOnFireBase(canvas, filename) {
    const storageRef = storage.ref('graphics/' + filename);

    // Converti il canvas in Blob
    canvas.toBlob((blob) => {
        if (blob) {
            const uploadTask = storageRef.put(blob, { contentType: 'image/png' });

            // Monitora lo stato dell'upload
            uploadTask.on('state_changed', 
                (snapshot) => {
                    // Puoi gestire il progresso dell'upload qui se desideri
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log(`Upload in corso: ${progress.toFixed(2)}% completato`);
                }, 
                (error) => {
                    // Gestisci gli errori
                    console.error('Errore nel caricamento:', error);
                }, 
                () => {
                    // Upload completato con successo
                    uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
                        console.log('File disponibile a:', downloadURL);
                        // Eventualmente, puoi salvare l'URL nel tuo database o fare altre operazioni
                    });
                }
            );
        } else {
            console.error('Conversione del canvas in Blob fallita.');
        }
    }, 'image/png');
}