import './style/main.css';

console.log('1');
const KEY_CODE = ["Backquote", "Digit1", "Digit2", "Digit3", "Digit4", "Digit5", "Digit6", "Digit7", "Digit8", "Digit9", "Digit0", "Minus", "Equal", "Backspace", "Tab", "KeyQ", "KeyW", "KeyE", "KeyR", "KeyT", "KeyY", "KeyU", "KeyI", "KeyO", "KeyP", "BracketLeft", "BracketRight", "Backslash", "Delete", "CapsLock", "KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ", "KeyK", "KeyL", "Semicolon", "Quote", "Enter", "ShiftLeft", "KeyZ", "KeyX", "KeyC", "KeyV", "KeyB", "KeyN", "KeyM", "Comma", "Period", "Slash", "ArrowUp", "ShiftRight", "ControlLeft", "MetaLeft", "AltLeft", "Space", "AltRight", "ArrowLeft", "ArrowDown", "ArrowRight", "ControlRight"];

const KEYS_EN = ['`', '1', "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", 'Backspace',
        'Tab', "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\", 'Delete',
        'CapsLock', "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", 'Enter',
        "Shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", '&uarr;', "Shift",
        "Control", "Meta", "Alt", "Space", "Alt", "&larr;", "&darr;", "&rarr;", "Control"
];
const KEYS_EN_CAPS = ['~', '!', "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", 'Backspace',
        'Tab', "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "{", "}", "|", 'Delete',
        'CapsLock', "A", "S", "D", "F", "G", "H", "J", "K", "L", ":", '"', 'Enter',
        "Shift", "Z", "X", "C", "V", "B", "N", "M", "<", ">", "?", '&uarr;', "Shift",
        "Control", "Meta", "Alt", "Space", "Alt", "&larr;", "&darr;", "&rarr;", "Control"
];
const KEYS_RUS = ['ё', '1', "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", 'Backspace',
        'Tab', "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ", "\\", 'Delete',
        'CapsLock', "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э", 'Enter',
        "Shift", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", ".", '&uarr;', "Shift",
        "Control", "Meta", "Alt", "Space", "Alt", "&larr;", "&darr;", "&rarr;", "Control"
];
const KEYS_RUS_CAPS = ['Ё', '!', '"', "№", ";", "%", ":", "?", "*", "(", ")", "_", "+", 'Backspace',
        'Tab', "Й", "Ц", "У", "К", "Е", "Н", "Г", "Ш", "Щ", "З", "Х", "Ъ", "/", 'Delete',
        'CapsLock', "Ф", "Ы", "В", "А", "П", "Р", "О", "Л", "Д", "Ж", "Э", 'Enter',
        "Shift", "Я", "Ч", "С", "М", "И", "Т", "Ь", "Б", "Ю", ",", '&uarr;', "Shift",
        "Control", "Meta", "Alt", "Space", "Alt", "&larr;", "&darr;", "&rarr;", "Control"
    ];
const KEY_WHICH = [192, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 189, 187, 8, 9, 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 219, 221, 220, 46, 20, 65, 83, 68, 70, 71, 72, 74, 75, 76, 186, 222, 13, 16, 90, 88, 67, 86, 66, 78, 77, 188, 190, 191, 38, 16, 17, 91, 18, 32, 18, 37, 40, 39, 17];


class Keyboard {
    constructor() {
        this.isEng = JSON.parse(localStorage.getItem('isEng'));
        this.isCapsLock = false;
        this.isShift = false;
        this.KEY_CODE = KEY_CODE;
        this.KEYS_EN = KEYS_EN;
        this.KEYS_EN_CAPS = KEYS_EN_CAPS;
        this.KEYS_RUS = KEYS_RUS;
        this.KEYS_RUS_CAPS = KEYS_RUS_CAPS;
        this.KEY_WHICH = KEY_WHICH;
        this.body = document.querySelector('body');
    }
    createDisplay(){
        this.textarea = document.createElement('textarea');
        this.textarea.classList.add('text');
        this.wrapper = document.createElement('div');
        this.wrapper.classList.add('wrapper');
        this.keyboard = document.createElement('div');
        this.keyboard.classList.add('keyboard-wrapper');
        this.body.prepend(this.wrapper);
        this.wrapper.append(this.textarea);
        this.wrapper.append(this.keyboard);
        this.button = document.createElement('button');
        this.button.innerText = 'clear';
        this.button.classList.add('clear');
        this.wrapper.append(this.button);
        this.changeText = document.createElement('div');
        this.changeText.innerHTML = 'press ctrl + alt - change lang';
        this.wrapper.append(this.changeText);
    }
    changeCase(keyValue, index, isEng, isCapsLock, isShift){
        if (isEng) keyValue = this.KEYS_EN[index];
        if (isEng && isCapsLock) keyValue = this.KEYS_EN_CAPS[index];
        if (isShift && isEng && isCapsLock) keyValue = this.KEYS_EN[index];
        else if (isEng && isShift) keyValue = this.KEYS_EN_CAPS[index];
        if (!isEng) keyValue = this.KEYS_RUS[index];
        if (!isEng && isCapsLock) keyValue = this.KEYS_RUS_CAPS[index];
        if (isShift && !isEng && isCapsLock) keyValue = this.KEYS_RUS[index];
        else if (!isEng && isShift) keyValue = this.KEYS_RUS_CAPS[index];
        return keyValue;
    }
    addKeys(){
        for(let i = 0; i < this.KEY_WHICH.length; i += 1){
            this.keyValue = '';
            this.oneKey = document.createElement('button');
            this.keyValue += this.changeCase(this.keyValue, i, this.isEng, this.isCapsLock, this.isShift);
            this.oneKey.classList.add('key');
            this.oneKey.setAttribute('id', `${this.keyValue.charCodeAt()}`);
            this.oneKey.setAttribute('data-code', `${this.KEY_CODE[i]}`);
            this.oneKey.setAttribute('data', `${this.KEY_WHICH[i]}`);
            if (this.keyValue == 'Backspace' || this.keyValue == 'CapsLock' || this.keyValue == 'Enter' ||  this.keyValue =='Shift' ) {
                this.oneKey.classList.add('long-control-key');
                this.oneKey.classList.add('control-key-background');
            } 
            if(this.keyValue == 'Control'){
                this.keyValue = 'Ctrl';
                this.oneKey.classList.add('control-key-background');
            }
            if(this.keyValue == 'Tab' || this.keyValue == 'Delete' || this.keyValue == 'Meta' || this.keyValue == 'Alt' || this.keyValue == 'Space'|| this.keyValue == '&larr;'|| this.keyValue == '&darr;' || this.keyValue == '&rarr;'|| this.keyValue == '&uarr;'){
                this.oneKey.classList.add('control-key-background');
            }
            if(this.keyValue == 'Space'){
                this.keyValue = ' ';
                this.oneKey.classList.add('backspace-key');
            }
            if(this.keyValue == 'Delete'){
                this.keyValue = 'Del' ;
            }
            if(this.keyValue == 'Meta'){
                this.keyValue = 'win' ;
            }
            this.oneKey.innerHTML = this.keyValue;
            this.keyboard.append(this.oneKey);
        }
    }
    keyCaps(){
        let buttons = document.querySelectorAll('.key');
        for(let i = 0; i < buttons.length; i += 1){
            let keyValue = '';
            if(this.isEng){
                keyValue = this.isShift ? this.KEYS_EN_CAPS[i] : this.KEYS_EN[i];
            } else {
                keyValue = this.isShift ? this.KEYS_RUS_CAPS[i] : this.KEYS_RUS[i];
            }
            if(keyValue == 'Control'){
                keyValue = 'Ctrl';
            }
            if(keyValue == 'Space'){
                keyValue = ' ';
            }
            if(keyValue == 'Delete'){
                keyValue = 'Del' ;
            }
            if(keyValue == 'Meta'){
                keyValue = 'win' ;
            }
            buttons[i].innerHTML = keyValue;
            
        }
    }
    keyDownHendler(event) {
        event.preventDefault();
        let text = '';
        let index = this.KEY_WHICH.indexOf(event.which);
        let action = event.target.dataset.code;
        let buttons = document.querySelectorAll('key');
       if(!document.querySelector(`button.key[data-code=${event.code}]`)){
            return;
        } else {
            document.querySelector(`button.key[data-code=${event.code}]`).classList.add('active');
        };
        if (event.key !== "Control" && event.key !== 'Alt' && event.key !== 'Shift' && event.code !== 'MetaLeft' && event.code !== 'Tab' && event.key !== "CapsLock" && event.key !== 'Backspace' && event.key !== 'Delete' && event.key !== 'Enter' && event.code !== 'Space') {
            text = this.changeCase(text, index, this.isEng, this.isCapsLock, this.isShift);
        } else {
            if (event.key === 'Enter') {
                text = '\n';
            }
            if (event.key === 'Backspace' || event.key === 'Delete') {
                this.textarea.value = this.textarea.value.slice(0, -1);
            }
            if (event.code === 'Space') {
                text = ' ';
            }
            if (event.key === 'Tab') {
                text = '    ';
            }
            if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
                text = 'Shift';
                this.isShift = !this.isShift;
            }
        }
        return text; 
    }
    keyUpHendler(event){
        event.preventDefault();
        let buttons = document.querySelectorAll('.key');
        for(let btn of buttons){
            btn.classList.remove('active');
        }
        if ((event.code === 'AltLeft' && event.ctrlKey) || (event.altKey && event.code === 'ControlLeft')) {
            this.isEng = !this.isEng;
            localStorage.setItem('isEng', this.isEng);
            this.keyCaps();
        }
        if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
            this.isShift = !this.isShift;
            this.keyCaps();
        }
    }
    mouseUpHandler(event){
        event.preventDefault();
        let target = event.target.closest('.key');
        let text = target.innerHTML;
        if(!target){
            return;
        }
        target.classList.add('active');
        if (text === 'Enter') {
            text = '\n';
        }
        if (text === 'Backspace' || event.key === 'Delete') {
            this.textarea.value = this.textarea.value.slice(0, -1);
        }
        if (text === ' ') {
            text = ' ';
        }
        if (text === 'Tab') {
            text = '    ';
        }
        if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
            text = 'Shift';
            this.isShift = !this.isShift;
        }
        return text;
    }

}
window.onload = function(){

    let keyboard = new Keyboard();
    keyboard.createDisplay();
    keyboard.addKeys();
    let keyWrapper = this.document.querySelector('.keyboard-wrapper');
    let btnClear = document.querySelector('.clear');
    let showTextarea = document.querySelector('.text');
    btnClear.addEventListener('click', () => {
        showTextarea.value = '';

    });
    window.addEventListener('keydown', (e) =>{
        let keytext = keyboard.keyDownHendler(e);
        if (!keytext) {
            keytext = '';
        }
        if(keytext == 'Shift'){
            keyboard.keyCaps();
            keytext = '';
        }
        showTextarea.value += keytext;
    });
    window.addEventListener('keyup',(e) =>{
        keyboard.keyUpHendler(e);
    });
    keyWrapper.addEventListener('mousedown', (e) => {
        let text = keyboard.mouseUpHandler(e);
        if(!text){
            text = '';
        }
        showTextarea.value += text;
    });
};
 