'use strict';

const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');
const stalker = document.querySelector('.stalker');

function randomValueFromArray(array){
    const random = Math.floor(Math.random()*array.length);
    return array[random];
}

const storyText = ':insertx: :inserty: :insertz: ';
const insertX = [
    'Сидять якось два геї в басейні.',

    'В салоні літака сидять два геї:',

    '1946 рік. Галичина. Йдуть лісом двоє хлопів. \n' +
    'Бачать дідусь прив\'язав москаля до дерева і пиляє пилкою. ',
];
const insertY = [
    'Всплила сперма. Один одного питає: Ти що, кінчив. той відповідає: ',
    'Один одному каже: Давай поєбемося. \n' +
    'Той відповідає: Ну давай, зараз піду по серветки.\n' +
    'Повертається, поїбалися. \n' +
    'Діду в сусдньому ряді стало погано, стюардеса питає, чого той не попросив навіть серветки. Той відповіє:',


    '- Та чи пан не має рушниці? \n' +
    '- Є в мене рушниця, синку...\n' +
    '- То може пан не має сокири?\n' +
    '- Та ні, пан має і рушницю, і сокиру... І кулемета має...'
];
const insertZ = [
    'Ні. Я пернув.',
    'Тут один вже серветки попросив, так його в жопу виїбали.',
    'Та пан має ще час та натхнення!'
];

randomize.addEventListener('click', result);

function result() {
    let newStory = storyText;

    const xItem = randomValueFromArray(insertX);
    const yItem = randomValueFromArray(insertY);
    const zItem = randomValueFromArray(insertZ);

    newStory = newStory.replaceAll(':insertx:',xItem);
    newStory = newStory.replaceAll(':inserty:',yItem);
    newStory = newStory.replaceAll(':insertz:',zItem);

    story.textContent = newStory;
    story.style.visibility = 'visible';
    story.style.padding = '10px';
    stalker.style.visibility = 'visible';
}

function random(number) {
    return Math.floor(Math.random() * (number+1));
}

const btn = document.querySelector('button');

function bgChange() {
    const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    document.body.style.backgroundColor = rndCol;
}

window.onkeyup = bgChange;