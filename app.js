function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

let flag = "Cambodia"; 
ans = false;
answerDisplayed = false
score = 0;

function getVal() {
    const inputValue = document.querySelector('input').value;

    if(inputValue.toLowerCase() != flag.toLowerCase()) {
            document.querySelector('.result').classList.add("result-false");
            document.querySelector('.result').innerHTML = 'Mauvaise Réponse';  
            document.querySelector('.result').style.color = "red";
            ans = false;
           
    } else {
        document.querySelector('.result').classList.add("result-true");
        document.querySelector('.result').innerHTML = 'Bonne Réponse';
        document.querySelector('.result').style.color = "green";
        ans = true;
        score=score+1;
        document.querySelector('.score').innerHTML = score;
    }   
}

function getData() {
    var json = 'https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/index.json'
    fetch(json)
        .then(data=>data.json())
        .then(data=> {
            const randomInt = getRandomInt(data.length);
            console.log(data[randomInt]);        
            var image = document.getElementById("flag");
            image.src = data[randomInt].image;
            flag = data[randomInt].name;
        });
    document.querySelector('.result').innerHTML = '';
    document.querySelector('.result').innerHTML = '';
}

function getAnswer() {
    document.querySelector('.result').innerHTML = flag;
    document.querySelector('.result').style.color = "white";
    document.querySelector('.next').disabled = true;
    document.querySelector('.validateBtn').disabled = true;
    document.querySelector('.skip').innerHTML = 'Drapeau suivant';
}

function skip() {
    getData();
    document.querySelector('.next').disabled = false;
    document.querySelector('.skip').innerHTML = 'Je passe';
}
 
function next() {
    if(ans == true) {
        getData();
        inputValue = "";
    } else {
        document.querySelector('.result').innerHTML = 'Entrez la bonne réponse';
    }
}
