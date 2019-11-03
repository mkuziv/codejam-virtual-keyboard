const root = document.querySelector('body');
const wrapper = document.createElement('div');
wrapper.className = 'wrapper';

const content = document.createElement('div');
content.className = 'content';

root.appendChild(wrapper);
wrapper.appendChild(content);

let inputField = document.createElement('textarea');
inputField.setAttribute('cols', '100');
inputField.setAttribute('rows', '15');
inputField.className = 'text';

content.appendChild(inputField);

const keyboard = document.createElement('div');
keyboard.className = "keyboard";

content.appendChild(keyboard);

let enKey = {
  default: [
    '` 1 2 3 4 5 6 7 8 9 0 - = BS',
    'tab q w e r t y u i o p [ ] \\',
    "CL a s d f g h j k l ; ' ent",
    'shift z x c v b n m , . / shift',
    'space'
  ],
  shift: [
    '~ ! @ # $ % ^ & * ( ) _ + BS',
    'tab Q W E R T Y U I O P { } |',
    'CS A S D F G H J K L : " enter',
    'shift Z X C V B N M < > ? shift',
    'space'
  ]
};


function drawKeyboard(buttonCharacter) {
  let btnElement = document.createElement('button');
  btnElement.className = 'key-btn';    
  btnElement.textContent = buttonCharacter;    
  keyboard.appendChild(btnElement);


  btnElement.addEventListener('mousedown', event => {
    btnElement.style = 'border-radius: 15px; background: green';    
  });


  btnElement.addEventListener('mouseup', event => {
    btnElement.style = 'border-radius: 0; background: darkcyan';
    document.querySelector('.text').focus();      
  }); 
  
  
  btnElement.addEventListener('click', event => {
    if (buttonCharacter === 'space') {
      buttonCharacter = ' ';      
    } else if (buttonCharacter === 'BS') {
      buttonCharacter = '';
      let delLetter = inputField.value;
      return delLetter = delLetter.slice(0, delLetter.length-1);      
    } else if ( buttonCharacter === 'tab') {
      buttonCharacter = '  ';      
    } else if (buttonCharacter === 'CS') {
      buttonCharacter = '';
      this.smallLetter = false;
    }

    inputField.value += buttonCharacter;    
  });
}

enKey.default.forEach(function(item) { 
  let itemRow = item.split(" ");

  itemRow.forEach((buttonCharacter) => {
    drawKeyboard(buttonCharacter);    
  });
});
