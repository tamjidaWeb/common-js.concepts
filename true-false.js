/*Truthy:
1.true
2.any number positive or negative will be truthy except 0
3.any string is truthy
3. any string other than empty string [jodi space dya hoy ekta empty string tahole truthy hobe]
4. '0','false' will be truthy
5. empty object, empty array


falsy:
1.false
2. 0 will be falsy
3. empty string is falsy
4. undefined is falsy
5. null

*/
let x =[];
console.log(x)
if(x){
    // console.log('value of x is truthy');

}
else{
    // console.log('value of x is falsy');
}

//optional
//check falsy
const y = '';
if(!y){
    // console.log('value is falsy');
}
const z = 5;
//check truth
if(!!z){
    console.log('value is truthy')
}