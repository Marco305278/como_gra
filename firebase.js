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
    database.ref(`${championship}/team/`).set(team)
  }
  
  function syncTeamOnFireBase(championship, select) {
    database.ref(`${championship}/team/`)
      .on('value', (snapshot) => {
        const team = snapshot.val();
        if (team) { select.value = team; }
      });
      generatePreviews()
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
      generatePreviews()
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
      generatePreviews()
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
      generatePreviews()
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
      generatePreviews()
  }

function savePreviewOnFireBase(canvas, filename) {
    const storageRef = storage.ref('previous_graphics/' + filename);

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

async function saveLiveMatchOnFireBase(images, filename, championship, home, team, date, time) {
  try {

    database.ref(`mtc_live/${championship}/home`).set(home)
    database.ref(`mtc_live/${championship}/team`).set(team)
    database.ref(`mtc_live/${championship}/date`).set(date)
    database.ref(`mtc_live/${championship}/time`).set(time)

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

function syncLiveMatchOnFireBase(championship, championship2, team, team2, date, date2, time, time2) {
  championship.value = 'primavera';
  championship2.value = 'women';



  database.ref(`mtc_live/primavera/date`)
  .on('value', (snapshot) => {
    const selected_date = snapshot.val();
    if (selected_date) {
      date.value = selected_date;
    }
  });
  database.ref(`mtc_live/primavera/time`)
  .on('value', (snapshot) => {
    const selected_time = snapshot.val();
    if (selected_time) {
      time.value = selected_time;
    }
  });

  database.ref(`mtc_live/women/date`)
  .on('value', (snapshot) => {
    const selected_date2 = snapshot.val();
    if (selected_date2) {
      date2.value = selected_date2;
    }
  });
  database.ref(`mtc_live/women/time`)
  .on('value', (snapshot) => {
    const selected_time2 = snapshot.val();
    if (selected_time2) {
      time2.value = selected_time2;
    }
  });

  database.ref(`mtc_live/women/team`)
  .on('value', (snapshot) => {
    const selected_team2 = snapshot.val();
    if (selected_team2) {
      team2.value = selected_team2;
    }
  });

  database.ref(`mtc_live/primavera/team`)
  .on('value', (snapshot) => {
    const selected_team = snapshot.val();
    if (selected_team) {
      team.value = selected_team;
    }
  });

  generatePreviews()
}