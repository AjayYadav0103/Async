// const isLoggedIn = (email, password, callback) => {
//     setTimeout(() => {
//         callback(email + password);
//     }, 2000)
// }

// const videoData = (userInfo, callback) => {
//     setTimeout(() => {
//         callback(['V1', 'V2', 'V3']);
//     }, 5000)
// }

// const videoDetail = (videoinfo,callback) => {
//     setTimeout(() => {
//         callback([{ video: 'V1', owner: 'O1' }, { video: 'V2', owner: 'O2' }, { video: 'V3', owner: 'O3' }])
//     },3000)
// }

// isLoggedIn('arpit.com', '678', (userData) => {
//     console.log(userData);
//     videoData(userData, (videoinfo) => {
//         console.log(videoinfo);
//         videoDetail(videoinfo, (videoDetailInfo) => {
//             console.log(videoDetailInfo);
//         });
//     });
// });

// const isLoggedIn=(email,password)=>{
//  return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve(email+password);
//     },2000)
//  })
// }

// const getVideo=(userInfo)=>{
//  return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve(['V1','V2','V3']);
//     },5000)
//  })
// }

// const getVideoDetails=(videoinfo)=>{
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve([{ video: 'V1', owner: 'O1' }, { video: 'V2', owner: 'O2' }, { video: 'V3', owner: 'O3' }])
//     },3000)
//   })
// }

// isLoggedIn('ada@dgahg.com','123456').then((userInfo)=>{
//     console.log(userInfo);
//     return getVideo(userInfo);
// }).then((videoinfo)=>{
//     console.log(videoinfo);
//     return getVideoDetails(videoinfo);
// }).then((videoDetailInfo)=>{
//     console.log(videoDetailInfo);
// })

// const isLoggedIn = (email, password) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(email + password);
//         }, 2000)
//     });
// }

// const videoData = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const ranNumber = Math.floor(((Math.random())) * 10);
//             if (ranNumber > 5) {
//                 reject(new Error('Number should not be greater than 5 or data is not availbale'));
//             }
//             else {
//                 resolve(['V1','V2','V3']);
//             }
//         }, 1000);
//     })
// }

// const videoDetails=()=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve([{video:'V1',owner:'O1'},{video:'V2',owner:'O2'},{video:'V3',owner:'O3'}]);
//         },3000)
//     })
// }

// (async () => {
//     const userData = await isLoggedIn('agdja.com', 'duaih343');
//     console.log(userData);
//     const videoExample=await videoData(userData);
//     console.log(videoExample);
//     const eachVideoDetails=await videoDetails(videoExample);
//     console.log(eachVideoDetails);
// })();

//----------------------------------------------------------------------------------
// const isHundred = (num1,num2) => num1===100||num2===100||num1+num2===100; 
// console.log(isHundred(null,null));

//-----------------------------------------------------------------------------------
// const fileExtensionGetter=(fileName)=> fileName.substring(fileName.lastIndexOf('.'),fileName.length);

// console.log(fileExtensionGetter('webPack.config.js'));
//-------------------------------------------------------------------------------------

// const alphabetIncrement=(alphabet)=>{
//     console.log(alphabet);
//     const arrayFromAlphabet=Array.from(alphabet);
//     const valueFromCharCode=arrayFromAlphabet.map(value=>value.charCodeAt(0)+1);
//     return String.fromCharCode(...valueFromCharCode);
// }
// console.log(alphabetIncrement('r'));
//---------------------------------------------------------------------------------------

// const getCurrentDate=()=>{
//     const newDate=new Date();
//     const date=newDate.getDate();
//     const month=newDate.getMonth()+1;
//     const year=newDate.getFullYear();
//     return `${date}-${month}-${year}`;
// }
// console.log(getCurrentDate());

//--------------------------------------------------------------------------------------------

// const newKeyword=(str)=>{
//     if(str.substr(0,4)==='New!'){
//         return str;
//     }
//     return `New! ${str}`;
// }

// console.log(newKeyword('New JoJo'));
//--------------------------------------------------------------------------------------------

// const gettingStringFromFirstAndLast=(str)=>{
//     if(str.length>2){
//       return `${str.substr(0,3)}${str.substr(-3)}`;
//     }
//     return str;
// }

// console.log(gettingStringFromFirstAndLast('123'))
//----------------------------------------------------------------------------------------------

// const getTheFirstHalf=(str)=>{
//     return str.slice(0,str.length/2);
// }
// console.log(getTheFirstHalf('0123456'));
//------------------------------------------------------------------------------------------------

// const addString=(str1,str2)=>{
// return `${str1.slice(1,str1.length)}${str2.slice(1,str2.length)}`;
// }

// console.log(addString('youtube','song'));
//----------------------------------------------------------------------------------

// const nearestToHundred=(num1,num2)=>Math.abs(100-num1)>Math.abs(100-num2)?num2:num1;

// console.log(nearestToHundred(107,105));
//-----------------------------------------------------------------------------------

// const occuranceOfSpecifiedCharacter=(str,char)=>{
//     return (str.split("").filter(data=>data===char).length)>1 && (str.split("").filter(data=>data===char).length)<5?true:false;
// }

// console.log(occuranceOfSpecifiedCharacter('sjhakaaadhgsdh','a'));

//--------------------------------------------------------------------------------------

// const evenDigit=(arr)=>{
//   return arr.filter(data=>data%2===0).length;
// }

// console.log(evenDigit([1,2,3,4,5,6,7,8,9,10]))

//----------------------------------------------------------------------------------------

// const numberOfEvenValue=(num)=>{
//   return num.filter(val=>val%2===0).length;
// }

// console.log(numberOfEvenValue([1,2,3,4,5,6,7,8,9]));

//-------------------------------------------------------------------------------------------

// const whetherAsc=(arr)=>{
// for(let i=1;i<arr.length;i++){
//   if(arr[i-1]>arr[i]){
//      return false;
//   }
// }
// return true;
// }

// console.log(whetherAsc([1,2,3,4,5,6,9,56,78]));

//--------------------------------------------------------------------------------------------

// const largestEvenNumber=(arr)=>{
//   const evenArray=arr.filter(val=>val%2===0);
//   let max=0;
//   for(let i=0;i<evenArray.length;i++){
//   if(evenArray[i]>max){
//       max=evenArray[i];
//     }
//   }
//   return max;
// }

// console.log(largestEvenNumber([45,23,156,89,34,9006,7854]));

//----------------------------------------------------------------------------------------------

// const replaceFirstDigit=(str)=>{
//  return str.replace(/\d/,'$')
// }

// console.log(replaceFirstDigit('gdsjgh5ahgdjag453'));

//-----------------------------------------------------------------------------------------------

// const isLeapYear=(num)=>{
//  if(num%4===0){
//   return true;
//  }
//  return false;
// }

// console.log(isLeapYear(2017));

//---------------------------------------------------------------------------------------------------

const isContainSameAmountOfProperty=(obj1,obj2)=>{
   const objValue1=Object.keys(obj1);
   const objValue2=Object.keys(obj2);
   if(objValue1===objValue2){
    return true;
   }
   return false;
}

const obj1={
  h:'',
  i:'',
  j:''
}

const obj2={
  h:'',
  i:'',
  j:''
}

console.log(isContainSameAmountOfProperty(obj1,obj2));