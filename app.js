let words = [
    'руйнація',
    'знищення',
    'печаль',
    'армагеддон',
    'насилля',
    'смерть',
    'біль',
    'домінація',
    'бензопила',
    'різанина',
    'кладовище',
    'чеперокіл',
    'депресія',
    'самогубство',
    'бомба',
    'холокост',
    'війна',
    'голод',
    'чума',
    'асфіксія',
    'кровожерливість',
    'гнів',
    'стагнація',
    'меланхолія',
    'нігілізм',
    'страждання'
];

let word = words[Math.floor(Math.random() * words.length)].toLowerCase();

let answerArray = [];

for (let i = 0; i < word.length; i++) {
    answerArray[i] = '_';
};

let remainingLetters = word.length;

let newRemainLetters = remainingLetters;

let trysCount = 5;

while ((remainingLetters > 0) && (trysCount !== 0)) {
    alert('Відгадай слово, якщо не слабак ' + answerArray.join(' ').toLowerCase() + ` Маєш на це ${trysCount} хиб, хробаче!`);

    let guess = prompt('Вгадай літеру або натисни "Скусувати", МИТТЮ!!!');

    if (guess === null) {
        break;
    } else if (guess.length !== 1) {
        alert('Вводь по одній літері, дурко!');
    } else {
        guess = guess.toLocaleLowerCase();

        for (let j = 0; j < word.length; j++) {
            if (answerArray[j] === guess) {
                alert('Така літера вже була, уважніше слимаче!')
                break;
            }

            if (word[j] === guess) {
                answerArray[j] = guess;
                remainingLetters--;
            };
        };
    } if (remainingLetters === newRemainLetters) {
        trysCount--;
    };

    newRemainLetters = remainingLetters;
};

if (trysCount === 0) {
    alert('Ти лошара обідрана. Як можна було не вгадати слово ' + word);
} else if (remainingLetters === 0) {
    alert('Непогано! Було загадано слово ' + word);
} else {
    alert('Я знав, що ти засцикуєш, слабаче! До нових зустрічей, вишкребок))');
}