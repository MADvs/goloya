const player = window.localStorage.getItem('playerObj');
let user = JSON.parse(player);
console.log(user);

const nameText = document.getElementById('nameStat');
const raceText = document.getElementById('raceStat');
const bgText = document.getElementById('bgStat');
const wisText = document.getElementById('wisStat');
const intText = document.getElementById('intStat');
const chaText = document.getElementById('chaStat');
const conText = document.getElementById('conStat');
const currentEpText = document.getElementById('currentEpStat');
const maxEpText = document.getElementById('maxEpStat');
const currentMpText = document.getElementById('currentMpStat');
const maxMpText = document.getElementById('maxMpStat');
const abText = document.getElementById('abStat');
const acText = document.getElementById('acStat');

nameText.innerHTML = user.name;
raceText.innerHTML = user.race;
bgText.innerHTML = user.background;
wisText.innerHTML = user.wis;
intText.innerHTML = user.int;
chaText.innerHTML = user.cha;
conText.innerHTML = user.con;
currentEpText.innerHTML = user.ep.current;
maxEpText.innerHTML = user.ep.max;
currentBpText.innerHTML = user.bp.current;
maxBpText.innerHTML = user.bp.max;
abText.innerHTML = user.ab;
acText.innerHTML = user.ac + "%";







function Roll(max) {
    return Math.floor(1 + Math.random() * (max - 1));
}