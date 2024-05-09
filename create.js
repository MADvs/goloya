const creatorBox = document.getElementById('creatorBox');
const confirmBox = document.getElementById('confirmBox');
const errorText = document.getElementById('errorText');

const nameBox = document.getElementById('nameBox');
const humanButton = document.getElementById('humanButton');
const alienButton = document.getElementById('alienButton');
const droidButton = document.getElementById('droidButton');
const constructButton = document.getElementById('constructButton');
const guardianButton = document.getElementById('guardianButton');
const scholarButton = document.getElementById('scholarButton');
const pilotButton = document.getElementById('pilotButton');
const shamanButton = document.getElementById('shamanButton');
const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');

const myName = document.getElementById('myName');
const myRace = document.getElementById('myRace');
const myBackground = document.getElementById('myBackground');
const myWis = document.getElementById('myWis');
const myInt = document.getElementById('myInt');
const myCha = document.getElementById('myCha');
const myCon = document.getElementById('myCon');
const myEp = document.getElementById('myEp');
const myBp = document.getElementById('myBp');
const myAb = document.getElementById('myAb');
const myAc = document.getElementById('myAc');

let user = {
    name: "MyName", race: "MyRace", background: "MyBackground",
    wis: 1, int: 1, cha: 1, con: 1, ab: 0, ac: 50,
    level: 1, xp: 0,
    ep: {current: 9, max: 9}, bp: {current: 9, max: 9}
}

function SubmitCharacter() {
    if (nameBox.value.length == 0) {
        errorText.innerHTML = "You must input a name."
    } else if (!humanButton.checked && !alienButton.checked && !droidButton.checked && !constructButton.checked) {
        errorText.innerHTML = "You must select a race."
    } else if (!guardianButton.checked && !scholarButton.checked && !pilotButton.checked && !shamanButton.checked) {
        errorText.innerHTML = "You must select a background."
    } else {
        CalculateStats();
        creatorBox.classList.add('hidden');
        confirmBox.classList.remove('hidden');
    }
}

function CalculateStats() {
    user.name = nameBox.value;

    if (humanButton.checked) {
        user.race = "Human";
        user.cha++;
    } else if (alienButton.checked) {
        user.race = "Alien";
        user.wis++;
    } else if (droidButton.checked) {
        user.race = "Droid";
        user.int++;
    } else if (constructButton.checked) {
        user.race = "Construct";
        user.con++;
    }
    
    if (guardianButton.checked) {
        user.background = "Guardian";
        user.wis++;
    } else if (scholarButton.checked) {
        user.background = "Scholar";
        user.int++;
    } else if (pilotButton.checked) {
        user.background = "Pilot";
        user.cha++;
    } else if (shamanButton.checked) {
        user.background="Shaman";
        user.con++;
    }

    user.ep.max += (user.con + user.level);
    user.ep.current = user.ep.max;
    user.bp.max += (user.int + user.level);
    user.bp.current = user.bp.max;
    user.ac += (user.wis + user.level);
    user.ab = (user.level + user.cha);
    
    myName.innerHTML = user.name;
    myRace.innerHTML = user.race;
    myBackground.innerHTML = user.background;
    myWis.innerHTML = user.wis;
    myInt.innerHTML = user.int;
    myCha.innerHTML = user.cha;
    myCon.innerHTML = user.con;
    myAc.innerHTML = user.ac;
    myAb.innerHTML = user.ab;
    myEp.innerHTML = user.ep.max;
    myBp.innerHTML = user.bp.max;
}

function ConfirmCharacter() {
    window.localStorage.setItem("playerObj", JSON.stringify(user));
    window.location.href = "game.html";
}