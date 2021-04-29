let outBox = document.querySelector('#out');
let b1 = document.querySelector('#save');

function saveName(){
    outBox.textContent = document.querySelector('#name').value;
}

b1.addEventListener('click', saveName)


