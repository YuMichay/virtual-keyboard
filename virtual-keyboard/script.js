/* eslint-disable no-loop-func */
import './style.css';

const body = document.querySelector('body');
// eslint-disable-next-line prefer-destructuring
let lang = document.documentElement.lang;

const createBlock = (className) => {
  const div = document.createElement('div');
  div.classList.add(`${className}`);
  return div;
};

class Button {
  constructor(content) {
    this.content = content;
    this.className = content.toLowerCase();
  }

  createButton() {
    const btn = document.createElement('button');
    btn.textContent = this.content;
    btn.classList.add(`${this.className}`);
    return btn;
  }
}

const rows = {
  row1: ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
  row2: ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\', 'Del'],
  row3: ['CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', '\'', 'Enter'],
  row4: ['Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', '⮝', 'Shift'],
  row5: ['Ctrl', 'Win', 'Alt', 'Space', 'Alt', '⮜', '⮟', '⮞', 'Ctrl'],
};

const rowsRu = {
  row1: ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
  row2: ['Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '\\', 'Del'],
  row3: ['CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter'],
  row4: ['Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '.', '⮝', 'Shift'],
  row5: ['Ctrl', 'Win', 'Alt', 'Space', 'Alt', '⮜', '⮟', '⮞', 'Ctrl'],
};

const createPage = () => {
  const wrapper = createBlock('wrapper');
  body.append(wrapper);
  const textarea = document.createElement('textarea');
  textarea.setAttribute('autofocus', 'autofocus');
  const keyboard = createBlock('keyboard');
  const textBlock = createBlock('info');
  const textOS = document.createElement('p');
  textOS.textContent = 'Клавиатура создана в операционной системе Windows';
  const textLang = document.createElement('p');
  textLang.textContent = 'Для переключения языка: Shift + Alt';
  textBlock.append(textOS, textLang);
  wrapper.append(textarea, keyboard, textBlock);
  let rowsArr;
  let choseRow;
  if (lang === 'en') {
    rowsArr = Object.keys(rows);
    choseRow = rows;
  } else if (lang === 'ru') {
    rowsArr = Object.keys(rowsRu);
    choseRow = rowsRu;
  }
  rowsArr.forEach((row) => {
    const rowBlock = document.createElement('div');
    for (let i = 0; i < choseRow[row].length; i += 1) {
      const button = new Button(choseRow[row][i]);
      const btn = button.createButton();
      rowBlock.append(btn);
    }
    keyboard.append(rowBlock);
  });
};
window.addEventListener('load', createPage);

let buttons;
let shifts;
let alts;
let ctrls;
const text = [];

const createClass = () => {
  buttons = document.querySelectorAll('button');
  shifts = document.querySelectorAll('.shift');
  const [shiftLeft, shiftRight] = shifts;
  shiftLeft.classList.remove('shift');
  shiftLeft.classList.add('shift-left');
  shiftRight.classList.remove('shift');
  shiftRight.classList.add('shift-right');
  alts = document.querySelectorAll('.alt');
  const [altLeft, altRight] = alts;
  altLeft.classList.remove('alt');
  altLeft.classList.add('alt-left');
  altRight.classList.remove('alt');
  altRight.classList.add('alt-right');
  ctrls = document.querySelectorAll('.ctrl');
  const [ctrlLeft, ctrlRight] = ctrls;
  ctrlLeft.classList.remove('ctrl');
  ctrlLeft.classList.add('ctrl-left');
  ctrlRight.classList.remove('ctrl');
  ctrlRight.classList.add('ctrl-right');
  for (let i = 0; i < buttons.length; i += 1) {
    if (buttons[i].classList === 'shift-left') {
      buttons[i].setAttribute('keyname', 'shift-left');
      buttons[i].setAttribute('lowerKeyname', 'shift-left');
    } else if (buttons[i].classList === 'shift-right') {
      buttons[i].setAttribute('keyname', 'shift-right');
      buttons[i].setAttribute('lowerKeyname', 'shift-right');
    } else if (buttons[i].classList === 'alt-left') {
      buttons[i].setAttribute('keyname', 'alt-left');
      buttons[i].setAttribute('lowerKeyname', 'alt-left');
    } else if (buttons[i].classList === 'alt-right') {
      buttons[i].setAttribute('keyname', 'alt-right');
      buttons[i].setAttribute('lowerKeyname', 'alt-right');
    } else if (buttons[i].classList === 'ctrl-left') {
      buttons[i].setAttribute('keyname', 'ctrl-left');
      buttons[i].setAttribute('lowerKeyname', 'ctrl-left');
    } else if (buttons[i].classList === 'ctrl-right') {
      buttons[i].setAttribute('keyname', 'ctrl-right');
      buttons[i].setAttribute('lowerKeyname', 'ctrl-right');
    } else {
      buttons[i].setAttribute('keyname', buttons[i].innerText);
      buttons[i].setAttribute('lowerKeyname', buttons[i].innerText.toLowerCase());
    }
  }
};
window.addEventListener('load', createClass);

const changeLang = () => {
  if (lang === 'en') {
    lang = 'ru';
    createPage(lang = 'ru');
    createClass();
  } else if (lang === 'ru') {
    lang = 'en';
    createPage(lang = 'en');
    createClass();
  }
};

const keyEvents = (e) => {
  document.querySelector('textarea').focus();
  for (let i = 0; i < buttons.length; i += 1) {
    if ((e.key === buttons[i].getAttribute('keyname') || e.key === buttons[i].getAttribute('lowerKeyname')) && (e.key !== 'Shift' && e.key !== 'Alt' && e.key !== 'Control' && e.key !== 'Backspace' && e.key !== 'Enter' && e.key !== 'CapsLock' && e.key !== 'Tab')) {
      buttons[i].classList.add('active');
      text.push(buttons[i].getAttribute('lowerKeyname'));
    }
    if (buttons[i].getAttribute('lowerKeyname') === 'space' && e.code === 'Space') {
      buttons[i].classList.add('active');
    }
    if (buttons[i].getAttribute('lowerKeyname') === 'enter' && e.code === 'Enter') {
      buttons[i].classList.add('active');
    }
    if (buttons[i].getAttribute('lowerKeyname') === 'backspace' && e.code === 'Backspace') {
      buttons[i].classList.add('active');
    }
    if (buttons[i].getAttribute('lowerKeyname') === 'capslock' && e.code === 'CapsLock') {
      buttons[i].classList.add('active');
    }
    if (buttons[i].getAttribute('lowerKeyname') === 'tab' && e.code === 'Tab') {
      buttons[i].classList.add('active');
    }
    if (buttons[i].getAttribute('lowerKeyname') === '⮜' && e.code === 'ArrowLeft') {
      buttons[i].classList.add('active');
    }
    if (buttons[i].getAttribute('lowerKeyname') === '⮞' && e.code === 'ArrowRight') {
      buttons[i].classList.add('active');
    }
    if (buttons[i].getAttribute('lowerKeyname') === '⮝' && e.code === 'ArrowUp') {
      buttons[i].classList.add('active');
    }
    if (buttons[i].getAttribute('lowerKeyname') === '⮟' && e.code === 'ArrowDown') {
      buttons[i].classList.add('active');
    }
    if (e.code === 'ShiftLeft') {
      document.querySelector('.shift-left').classList.add('active');
      document.querySelector('.shift-right').classList.remove('active');
    }
    if (e.code === 'ShiftRight') {
      document.querySelector('.shift-right').classList.add('active');
      document.querySelector('.shift-left').classList.remove('active');
    }
    if (e.code === 'AltLeft') {
      document.querySelector('.alt-left').classList.add('active');
      document.querySelector('.alt-right').classList.remove('active');
    }
    if (e.code === 'AltRight') {
      document.querySelector('.alt-right').classList.add('active');
      document.querySelector('.alt-left').classList.remove('active');
    }
    if (e.code === 'ControlLeft') {
      document.querySelector('.ctrl-left').classList.add('active');
      document.querySelector('.ctrl-right').classList.remove('active');
    }
    if (e.code === 'ControlRight') {
      document.querySelector('.ctrl-right').classList.add('active');
      document.querySelector('.ctrl-left').classList.remove('active');
    }
    if (e.code === 'MetaLeft') {
      document.querySelector('.win').classList.add('active');
    }
  }
  if (e.key === 'Backspace') {
    text.splice(text.length - 1, 1);
  }
  if (e.key === 'ShiftLeft' && e.key === 'AltLeft') {
    changeLang();
  }
  document.querySelector('textarea').innerHTML = text.join('');
};
window.addEventListener('keydown', keyEvents);

const endAnimation = () => {
  for (let i = 0; i < buttons.length; i += 1) {
    setTimeout(() => {
      buttons[i].classList.remove('active');
    }, 300);
  }
};
window.addEventListener('keyup', endAnimation);

// function setLocalStorage() {
//   localStorage.setItem('lang', lang.value);
// }
// window.addEventListener('beforeunload', setLocalStorage);

// function getLocalStorage() {
//   if (localStorage.getItem('lang')) {
//     lang.value = localStorage.getItem('lang');
//   }
// }
// window.addEventListener('load', getLocalStorage);
