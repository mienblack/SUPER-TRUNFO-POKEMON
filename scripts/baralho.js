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
const cards = []

baralho.get().then((snapshot) => {
    snapshot.forEach((card) => {
        cards.push(card.data())
    })
})

export default cards

/*
baralho.add({
    nome: "raichu",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/026.png",
    tipo: ["elétrico"],
    atributos: {
                HP: 4,
                ataque: 6,
                ataqueSP: 6,
                defesa: 4,
                defesaSP: 4,
                velocidade: 7
                }
}).then((pok) => {
        console.log(pok)
}).catch((err) => {
    console.log(err)
})
*/