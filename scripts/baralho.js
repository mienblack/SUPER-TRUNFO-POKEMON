const firebaseConfig = {
    apiKey: "AIzaSyBLUAmyBoGyCX1LYxznGtLxzwr1IpOjLE4",
    authDomain: "super-trunfo-pokemon.firebaseapp.com",
    projectId: "super-trunfo-pokemon",
    storageBucket: "super-trunfo-pokemon.appspot.com",
    messagingSenderId: "568166244404",
    appId: "1:568166244404:web:12ea40596ba8c322f4ea61"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore()
const baralho = db.collection("baralho");


baralho.add({
    nome: "beedril",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/015.png",
    tipo: ["inseto", "veneno"],
    atributos: {
                HP: 4,
                ataque: 6,
                ataqueSP: 6,
                defesa: 3,
                defesaSP: 5,
                velocidade: 3
                }
}).then(() => {
    baralho.doc(this.id).get().then((snapshot) => {
        snapshot.forEach((doc) => {
            let pok = doc.data()
            console.log(pok.nome)
        })
    })
}).catch((err) => {
    console.log(err)
})