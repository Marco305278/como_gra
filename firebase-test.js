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

async function saveLiveMatchOnFireBase(images, filename, championship, home, team, date, time) {
  console.log(`--test mode-- save: ${images}, ${filename}, ${championship}, ${home}, ${team}, ${date}, ${time}`)
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
}