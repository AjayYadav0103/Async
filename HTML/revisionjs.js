const normalArray = ['Apple', 'Banana'];
console.log(normalArray);


const constArray=new Array('Apple','Banana');
console.log(constArray);


const stringtoarray='Apple Banana'.split(' ');
console.log(stringtoarray);


const arraytostring=normalArray.join(" and ");
console.log(arraytostring);

const indexSpecified=normalArray.indexOf('Banana')
console.log(indexSpecified);

console.log("-------------------------------------------------------------------------------------");

const includeValuesforArray=normalArray.includes("Gauva");
console.log(includeValuesforArray);

const includeValuesforArrayP2=normalArray.indexOf("Gauva");
console.log(includeValuesforArrayP2);

normalArray.push('Orange');
console.log(normalArray);


normalArray.pop();
console.log(normalArray);

normalArray.push('Strawberry', 'Mango', 'Cherry');
console.log(normalArray);

normalArray.splice(2);
console.log(normalArray);

normalArray.shift();
console.log(normalArray);

normalArray.unshift('Apple', 'Strawberry', 'Cherry');
console.log(normalArray);

normalArray.splice(0,3);
console.log(normalArray);

normalArray.splice(0);
console.log(normalArray);

normalArray.push('Strawberry', 'Banana', 'Mango');
console.log(normalArray);

normalArray.splice(normalArray.indexOf('Banana'),1);
console.log(normalArray);

normalArray.splice(0);

normalArray.push('Apple', 'Banana', 'Strawberry', 'Mango');

normalArray.splice(normalArray.indexOf('Banana'),2);
console.log(normalArray);

const d1=[1,2,3,5];
const d2=[...d1];
d2.splice(3,0,4);
console.log(d1);
console.log(d2);
