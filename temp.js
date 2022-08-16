
// ボタンがクリックされた時に呼び出される関数
function button2Click() {
    const date = new Date();
    const today = date.getDate();

    // localStorage内の日付をもってくる
    const storageLastday = localStorage.getItem('lastDay');
    if (today == storageLastday) {
        // localStorage内の運勢をもってくる
        const storageLastFortune = localStorage.getItem('lastFortune');
        document.querySelector('#result-area').innerHTML = '今日の運勢は' + storageLastFortune + 'です。また明日占いましょう。';
    } else {
        // 運勢の配列を作る
        const omikuji_result = ["大吉", "中吉", "小吉"];
        // ランダムで運勢を決める
        const random = omikuji_result[Math.floor(Math.random() * omikuji_result.length)];

        // 運勢に応じてコメントを出す
        switch (random) {
            case '大吉':
                document.querySelector('#result-area').innerHTML = '大吉！　今日はいい日です。';
                break;
            case '中吉':
                document.querySelector('#result-area').innerHTML = '中吉！　ちょっといいこと起こるかも。';
                break;
            case '小吉':
                document.querySelector('#result-area').innerHTML = '小吉！　そこそこですね';
                break;
            default:
                document.querySelector('#result-area').innerHTML = 'Error';
        };
        const lastDay = today;
        const lastFortune = random;
        localStorage.setItem('lastDay', lastDay);
        localStorage.setItem('lastFortune', lastFortune);
    }
}

// sample: https://melvingeorge.me/blog/save-arrays-objects-to-localstorage-javascript

// an object
const John = {
  name: "John Doe",
  age: 23,
};

const Tom = {
  name: "Tom",
  age: 27,
};

let samples = [];
samples.push(John);
samples.push(Tom);

// convert object to JSON string
// using JSON.stringify()
const jsonObj = JSON.stringify(samples);

// save to localStorage
localStorage.setItem("samples", jsonObj);

// get the string
// from localStorage
const str = localStorage.getItem("samples");

// convert string to valid object
const parsedObj = JSON.parse(str);

console.log(parsedObj);

console.log("=====");

console.log(parsedObj[0]);
