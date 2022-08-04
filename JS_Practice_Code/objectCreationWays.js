// let basicRadius=4
// const basicCicle={
//     radius:basicRadius,
//     draw:function(){
//         console.log("draw");
//     }
// }
// console.log(basicCicle);


// function createCircle(radius){
// return { radius,
//        draw(){
//            console.log("draw");
//        }
//     }
// }
// const myCircle=createCircle(2);
// console.log(myCircle);

// function Circle(radius){
//     this.radius=radius;
//     this.draw=function(){
//         console.log("draw");
//     }
// }
// const circle=new Circle(1);
// console.log(circle);


//Different function is been called and closure is been created to individual count of click of function.
function isCalled(){
let count=0;
return function (){
            count=++count;
            document.getElementById("count").innerText=`${count}`;
}
}
let valuesUpdateIncreasement=isCalled(); 
let valuesUpdateDecrement=isCalled();




