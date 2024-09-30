//always use triple equal ===
//equal comparisn doesnot work for non-primitive

const first = [];
const second = first;
if(first == second){
    console.log('values are equal');

}
else{
    console.log('not equal');
}

//type coercion
//type conversion
//type casting




let carName = 'volvo';
function A(a,b){
    
    console.log(a+b);
}
A(4,5);