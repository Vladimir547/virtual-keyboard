import './style/main.css';

console.log('1');
const KEY_CODE = ["Backquote", "Digit1", "Digit2", "Digit3", "Digit4", "Digit5", "Digit6", "Digit7", "Digit8", "Digit9", "Digit0", "Minus", "Equal", "Backspace", "Tab", "KeyQ", "KeyW", "KeyE", "KeyR", "KeyT", "KeyY", "KeyU", "KeyI", "KeyO", "KeyP", "BracketLeft", "BracketRight", "Backslash", "Delete", "CapsLock", "KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ", "KeyK", "KeyL", "Semicolon", "Quote", "Enter", "ShiftLeft", "KeyZ", "KeyX", "KeyC", "KeyV", "KeyB", "KeyN", "KeyM", "Comma", "Period", "Slash", "ArrowUp", "ShiftRight", "ControlLeft", "MetaLeft", "AltLeft", "Space", "AltRight", "ArrowLeft", "ArrowDown", "ArrowRight", "ControlRight"];

const KEYS_SHOW_EN = ['`', '1', "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", 'Backspace',
        'Tab', "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\", 'Delete',
        'CapsLock', "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", 'Enter',
        "Shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", '&uarr;', "Shift",
        "Control", "Meta", "Alt", "Space", "Alt", "&larr;", "&darr;", "&rarr;", "Control"
];
const KEYS_SHOW_EN_CAPS = ['~', '!', "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", 'Backspace',
        'Tab', "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "{", "}", "|", 'Delete',
        'CapsLock', "A", "S", "D", "F", "G", "H", "J", "K", "L", ":", '"', 'Enter',
        "Shift", "Z", "X", "C", "V", "B", "N", "M", "<", ">", "?", '&uarr;', "Shift",
        "Control", "Meta", "Alt", "Space", "Alt", "&larr;", "&darr;", "&rarr;", "Control"
];
const KEYS_SHOW_RUS = ['ё', '1', "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", 'Backspace',
        'Tab', "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ", "\\", 'Delete',
        'CapsLock', "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э", 'Enter',
        "Shift", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", ".", '&uarr;', "Shift",
        "Control", "Meta", "Alt", "Space", "Alt", "&larr;", "&darr;", "&rarr;", "Control"
];
const KEYS_SHOW_RUS_CAPS = ['Ё', '!', '"', "№", ";", "%", ":", "?", "*", "(", ")", "_", "+", 'Backspace',
        'Tab', "Й", "Ц", "У", "К", "Е", "Н", "Г", "Ш", "Щ", "З", "Х", "Ъ", "/", 'Delete',
        'CapsLock', "Ф", "Ы", "В", "А", "П", "Р", "О", "Л", "Д", "Ж", "Э", 'Enter',
        "Shift", "Я", "Ч", "С", "М", "И", "Т", "Ь", "Б", "Ю", ",", '&uarr;', "Shift",
        "Control", "Meta", "Alt", "Space", "Alt", "&larr;", "&darr;", "&rarr;", "Control"
    ];
const KEY_WHICH = [192, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 189, 187, 8, 9, 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 219, 221, 220, 46, 20, 65, 83, 68, 70, 71, 72, 74, 75, 76, 186, 222, 13, 16, 90, 88, 67, 86, 66, 78, 77, 188, 190, 191, 38, 16, 17, 91, 18, 32, 18, 37, 40, 39, 17];


class Keyboard {
    constructor() {
        //this.isEng = JSON.parse(localStorage.getItem('isEng'));
        this.isCapsLock = false;
        this.isShift = false;
        this.KEY_CODE = KEY_CODE;
        this.KEYS_SHOW_EN = KEYS_SHOW_EN;
        this.KEYS_SHOW_EN_CAPS = KEYS_SHOW_EN_CAPS;
        this.KEYS_SHOW_RUS = KEYS_SHOW_RUS;
        this.KEYS_SHOW_RUS_CAPS = KEYS_SHOW_RUS_CAPS;
        this.KEY_WHICH = KEY_WHICH;
    }
    createDOM() {
        this.TEXTAREA = document.createElement('textarea');
        this.WRAPPER = document.createElement('div');
        this.KEYBOARD = document.createElement('div');
        this.KEYBOARD.classList.add('keyboard-wrapper');
        this.WRAPPER.classList.add('wrapper');
        const BODY = document.querySelector('body');
        BODY.appendChild(this.WRAPPER);
        this.WRAPPER.appendChild(this.TEXTAREA);
        this.WRAPPER.appendChild(this.KEYBOARD);
        this.BUTTON = document.createElement('button');
        this.BUTTON.innerText = 'Сlear input field';
        this.BUTTON.classList.add('button-clean');
        this.WRAPPER.appendChild(this.BUTTON);
        this.BUTTON = document.querySelector('button');
        this.BUTTON.addEventListener('click', () => {
            this.TEXTAREA.innerText = '';
        });
        this.HELPER = document.createElement('div');
        this.HELPER.innerText = 'Ctrl + alt - change language';
        this.HELPER.classList.add('helper');
        this.WRAPPER.appendChild(this.HELPER);
    }

    changeCaseLayout(keyValue, index, isEng, isCapsLock, isShift) {
        if (isEng) keyValue = this.KEYS_SHOW_EN[index];
        if (isEng && isCapsLock) keyValue = this.KEYS_SHOW_EN_CAPS[index];
        if (isShift && isEng && isCapsLock) keyValue = this.KEYS_SHOW_EN[index];
        else if (isEng && isShift) keyValue = this.KEYS_SHOW_EN_CAPS[index];
        if (!isEng) keyValue = this.KEYS_SHOW_RUS[index];
        if (!isEng && isCapsLock) keyValue = this.KEYS_SHOW_RUS_CAPS[index];
        if (isShift && !isEng && isCapsLock) keyValue = this.KEYS_SHOW_RUS[index];
        else if (!isEng && isShift) keyValue = this.KEYS_SHOW_RUS_CAPS[index];
        return keyValue;
    }

    addKeysOnKeyboard() {
        this.KEYBOARD.querySelectorAll('span').forEach(item => {
            item.remove();
        })

        this.KEY_WHICH.forEach((key, index) => {
            let keyValue = '';
            keyValue = this.changeCaseLayout(keyValue, index, this.isEng, this.isCapsLock, this.isShift);

            let keyClass = 'key ';
            if (index == 14 || index == 29 || index == 42 || index == 55) {
                this.KEYBOARD.innerHTML += '<span style="clear: both; display: block; width: 100%"></span>';
            }
            if (key == 8) {
                keyValue = 'Backspace';
                keyClass += 'long-control-key control-key-background';
            }
            if (key == 9) {
                keyValue = 'Tab';
                keyClass += 'short-control-key control-key-background';
            }
            if (key == 46) {
                keyValue = 'Del';
                keyClass += 'control-key-background';
            }
            if (key == 20) {
                keyValue = 'CapsLock';
                keyClass += 'long-control-key control-key-background';
            }
            if (key == 13) {
                keyValue = 'Enter';
                keyClass += 'long-control-key control-key-background';
            }
            if (key == 16 || key == 'ShiftRight') {
                keyValue = 'Shift';
                keyClass += 'long-control-key control-key-background';
            }
            if (key == 17 || key == 'ControlRight') {
                keyValue = 'Ctrl';
                keyClass += 'short-control-key control-key-background';
            }
            if (key == 91 || key == 'MetaRight') {
                keyValue = 'Win';
                keyClass += 'short-control-key control-key-background';
            }
            if (key == 18 || key == 'AltRight') {
                keyValue = 'Alt';
                keyClass += 'short-control-key control-key-background';
            }
            if (key == ' ' || key == 'Space' || key == 32) {
                keyValue = " ";
                keyClass += 'backspace-key';
            }
            if (key == 38 || key == 40 || key == 37 || key == 39)
                keyClass += 'short-control-key control-key-background';

            this.KEYBOARD.innerHTML += `<span class="${keyClass}" data=${key} datacode=${this.KEY_CODE[index]} id="${keyValue.charCodeAt()}"> ${keyValue} </span>`;
        });

        let shiftLeft = document.querySelector('span.key[datacode="ShiftLeft"]');
        let shifRight = document.querySelector('span.key[datacode="ShiftRight"]');
        if (this.isShift == true) {
            if (event.code === 'ShiftLeft') shiftLeft.classList.add('active-shift');
            else if (event.code === 'ShiftRight') shifRight.classList.add('active-shift');
        }
        this.CAPSLOCK = document.getElementById('67');
    }

    keyUpHendler(event) {
        event.preventDefault();
        document.querySelectorAll('.key').forEach(item => {
            item.classList.remove('active');
        });
        if ((event.code === 'AltLeft' && event.ctrlKey) || (event.altKey && event.code === 'ControlLeft')) {
            this.isEng = !this.isEng;
            localStorage.setItem('isEng', this.isEng);
            this.addKeysOnKeyboard();
        }
        if (event.which === 20) {
            this.isCapsLock = !this.isCapsLock;
            this.addKeysOnKeyboard();
            if (this.isCapsLock)
                this.CAPSLOCK.classList.add('active-shift');
            else this.CAPSLOCK.classList.remove('active-shift');
        }
        if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
            this.isShift = false;
            this.addKeysOnKeyboard();
        }
    }

    keyDownHendler(event) {
        event.preventDefault();
        if (!document.querySelector('span.key[datacode="' + event.code + '"]'))
            return;
        else document.querySelector('span.key[datacode="' + event.code + '"]').classList.add('active');

        let text = '';
        let index = this.KEY_WHICH.indexOf(event.which);
        text = this.changeCaseLayout(text, index, this.isEng, this.isCapsLock, this.isShift);

        if (event.key !== "Control" && event.key !== 'Alt' && event.key !== 'Shift' && event.code !== 'MetaLeft' && event.code !== 'Tab' && event.key !== "CapsLock" && event.key !== 'Backspace' && event.key !== 'Delete' && event.key !== 'Enter' && event.code !== 'Space') {
            this.TEXTAREA.innerHTML += text;
        } else {
            if (event.key === 'Enter') this.TEXTAREA.innerHTML += '\n';
            if (event.key === 'Backspace') this.TEXTAREA.innerHTML = this.TEXTAREA.innerHTML.slice(0, -1);
            if (event.code === 'Space') this.TEXTAREA.innerHTML += ' ';
            if (event.key === 'Delete') this.TEXTAREA.innerHTML = this.TEXTAREA.innerHTML.slice(0, -1);
            if (event.key === 'Tab') this.TEXTAREA.innerHTML += '    ';
            if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
                this.isShift = true;
                this.addKeysOnKeyboard();
            }
        }
    }

    addListenersOnKeys() {
        document.addEventListener('keydown', (event) => this.keyDownHendler(event));
        document.addEventListener('keyup', (event) => this.keyUpHendler(event));
        document.addEventListener('mousedown', (e) => {
            if (e.target.tagName !== "SPAN") {
                return;
            } else {
                let item = e.toElement;
                item.classList.add('active');
                let item_data = item.getAttribute('datacode');
                if (item_data !== "ControlRight" && item_data !== "ControlLeft" && item_data !== 'AltRight' && item_data !== 'AltLeft' && item_data !== 'ShiftLeft' && item_data !== 'ShiftRight' && item_data !== 'MetaLeft' && item_data !== 'Tab' && item_data !== "CapsLock" && item_data !== 'Backspace' && item_data !== 'Delete' && item_data !== 'Enter' && item_data !== 'Space') {
                    this.TEXTAREA.innerHTML += item.innerText;
                } else {
                    if (item_data === 'Enter') this.TEXTAREA.innerHTML += '\n';
                    if (item_data === 'Backspace') this.TEXTAREA.innerHTML = this.TEXTAREA.innerHTML.slice(0, -1);
                    if (item_data === 'Space') this.TEXTAREA.innerHTML += ' ';
                    if (item_data === 'Delete') this.TEXTAREA.innerHTML = this.TEXTAREA.innerHTML.slice(0, -1);
                    if (item_data === 'Tab') this.TEXTAREA.innerHTML += '    ';
                    if (item_data == 'ShiftLeft' || item_data == 'ShiftRight') {
                        this.isShift = !this.isShift;
                        this.addKeysOnKeyboard();
                        let shiftLeft = document.querySelector('span.key[datacode="ShiftLeft"]');
                        let shifRight = document.querySelector('span.key[datacode="ShiftRight"]');
                        if (this.isShift == true) {
                            if (item_data === 'ShiftLeft') shiftLeft.classList.add('active-shift');
                            else if (item_data === 'ShiftRight') shifRight.classList.add('active-shift');
                        }
                    }
                    if (item_data == 'CapsLock') {
                        this.isCapsLock = !this.isCapsLock;
                        this.addKeysOnKeyboard();
                    }
                }
            }
        })
        document.addEventListener('mouseup', () => {
            this.isShift = false;
            this.addKeysOnKeyboard();
            let CAPSLOCK = document.getElementById('67');
            if (this.isCapsLock) {
                CAPSLOCK.classList.add('active-shift');
            } else CAPSLOCK.classList.remove('active-shift');
        })
    }
}
window.onload = () => {
    const keyboard = new Keyboard();
    keyboard.addListenersOnKeys();
    keyboard.createDOM();
    keyboard.addKeysOnKeyboard();
};