let object={
    name:"Arpit",
    place:"Noida",
    getDetail:function(){
        console.log(`I am arpit ${this.name} and i live in ${this.place}`);
    }
}

let arr=["Arpit","Rituraj","adjhdak","dadguaygda"];
let arr12=["Avni","Kumari"]

Array.prototype.myPush=function(...arrayValue){
    let arr1=[];
    //arr1=this.map(oldValues=>oldValues)
    for(let i=0;i<this.length;i++){
        arr1[i]=this[i];
        if(i==this.length-1){
            arrayValue.forEach((item,index)=>{arr1[i+index+1]=item});
        }
    }
    return arr1;
}

console.log(arr.myPush("Son","Human"));
console.log(arr12.myPush("daughter","Pagal"));