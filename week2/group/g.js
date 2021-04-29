let outBox = document.querySelector('#output');
let result;

let b1 = document.querySelector('#button1');
let b2 = document.querySelector('#button2');
let b3 = document.querySelector('#button3');


function nEquals(){
    let input1 = Number(document.querySelector('#input1').value);
    result = 0;
    for (i=0; i <= input1; i++){
        result += i;
    }
    outBox.textContent = result;
}



function addValue(){
    let input1 = Number(document.querySelector('#input1').value);
    let input2 = Number(document.querySelector('#input2').value);
    result = input1 + input2;
    outBox.textContent = result;
}



function subValue(){
    let input1 = Number(document.querySelector('#input1').value);
    let input2 = Number(document.querySelector('#input2').value);
    result = input1 - input2;
    outBox.textContent = result;
}



b1.addEventListener('click', nEquals);

b2.addEventListener('click', addValue);

b3.addEventListener('click', subValue);

