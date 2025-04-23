console.log('dom events');
//get element by ID and set onclick event
const btnBlue = document.getElementById('btn-make-blue');
btnBlue.onclick = function makeBlue(){
    document.body.style.backgroundColor = 'blue';
}

const makePurple = document.getElementById('btn-make-purple');
console.log(makePurple);

makePurple.onclick = makePurples;

function makePurples(){
    document.body.style.backgroundColor = ' purple'
}