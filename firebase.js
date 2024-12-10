const firebaseConfig = {
    apiKey: "AIzaSyBRduW7hkBNlSf0DJedsSl_VL4Bp2pQ5b4",
    authDomain: "como-1907-graphics-main.firebaseapp.com",
    projectId: "como-1907-graphics-main",
    storageBucket: "como-1907-graphics-main.firebasestorage.app",
    messagingSenderId: "265131671232",
    appId: "1:265131671232:web:440bd456fdc73b02b53725",
    measurementId: "G-FD3VRBVJLM"
};

// Inizializza Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app();
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