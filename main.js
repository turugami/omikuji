// 与える範囲からランダムの整数を取得
function getRandomInt(scope) {
    return Math.floor(Math.random() * scope);
}

// ページから指定した名前の要素オブジェクトを取得
function getElmtById(idName) {
    return document.getElementById(idName);
}

// おみくじの画像配列
const omikujiImages = [
                "daikichi.png",
                "chuukichi.png",
                "kichi.png",
                "syoukichi.png",
                "suekichi.png",
                "kyou.png",
                "daikyou.png"
];

// ランダムで一枚のおみくじ画像を取得
function getOmikujiImage(imgIndex) {
    return "images/" + omikujiImages[imgIndex];
}

const imgElement = getElmtById("omikuji-image");

let isGorogoro = false;
let gorogoroTimer;
let myOmikujiIndex = 0;

function startGorogoro() {
    gorogoroTimer = setInterval(function () {
        myOmikujiIndex = getRandomInt(omikujiImages.length);
        imgElement.src = getOmikujiImage(myOmikujiIndex);
    }, 100);
}

function stopGorogoro() {
    clearInterval(gorogoroTimer);
}


/*
{
    startTimestamp: ,
    stopTimestamp: ,
    omikujiIndex:
    }
*/
let oneRound = {};

// ボタンがクリックされた時に呼び出される関数
function buttonClick() {
    isGorogoro = !isGorogoro;
    if (isGorogoro == true) {
        oneRound['startTimestamp'] = new Date().getTime();
        startGorogoro();
    } else {
        oneRound['stopTimestamp'] = new Date().getTime();
        oneRound['omikujiIndex'] = myOmikujiIndex;
        stopGorogoro();
        console.log(oneRound);
    }
}
