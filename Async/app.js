//Sync Code Example
// function otherFunctionality(){
//     console.log('first line of code');
//     console.log('Second Line o9f code');
// }
// console.log('Start');
// otherFunctionality();
// console.log('End');

//----------------------------------------------
//Async Code Example

// console.log('Start');

// setTimeout(()=>{
//     console.log('SetTimeout callback function run for first time');
// },2000);

// console.log('End');

//----------------------------------------------------
//Problem with sync code with login Problem

// console.log('Start');
// const isLoggedIn = (email, password) => {
//     setTimeout(() => {
//         return {
//             userDetails: email + password
//         }
//     }, 2000)
// }

// const userDetails = isLoggedIn('arpit@gmail.com', 123045);

// console.log(userDetails); //return undefined and this a problem

// console.log('End');


//---------------------------------------------------------------------
//Resolving the above problem,only displaying after getting data
// console.log('Start');
// const isLoggedIn = (email, password,callback) => {
//     setTimeout(() => {
//         callback({userDetails:email+password});
//     }, 2000);
// }

// const dataReceived=(userDetails)=>{
//   console.log(userDetails.userDetails);
// }
// isLoggedIn('arpit@gmail.com', 123045,dataReceived);



// console.log('End');
//--------------------------------------------
//getting video after getting user data.

// console.log('Start');
// const isLoggedIn = (email, password,callback) => {
//     setTimeout(() => {
//         callback({userDetails:email+password});
//     }, 2000);
// }

// const videoRequired=(callback)=>{
// setTimeout(()=>{
//  callback(['V1','V2','V3']);
// },2000)
// }

// const videoReceived=(gettingVideo)=>{
//  console.log(gettingVideo);
// }

// const dataReceived=(userDetails)=>{
//   console.log(userDetails.userDetails);
//   videoRequired(videoReceived);
// }

// isLoggedIn('arpit@gmail.com', 123045,dataReceived);

// console.log('End');

//------------------------------------------------------
// video details data.
console.log('Start');
const isLoggedIn = (email, password,callback) => {
    setTimeout(() => {
        callback({userDetails:email+password});
    }, 5000);
}

const videoRequired=(userData,callback)=>{
setTimeout(()=>{
 callback(userData,['V1','V2','V3']);
},3000)
}

const videoDetails=(videoData,callback)=>{
 setTimeout(() => {
   callback(videoData,[{videoName:'V1',owner:'O1'},{videoName:'V2',owner:'O2'},{videoName:'V3',owner:'O3'}]) 
 }, 1000);
}

const videoDetailsReceived=(videoData,videoDetails)=>{
 console.log('-----------------------------');
 console.log(videoData);
 console.log(videoDetails);
}
const videoReceived=(userData,gettingVideo)=>{
 console.log('-----------------------');
 console.log(userData);   
 console.log(gettingVideo);
 videoDetails(gettingVideo,videoDetailsReceived);
}

const dataReceived=(userDetails)=>{
  console.log(userDetails.userDetails);
  videoRequired(userDetails.userDetails,videoReceived);
}

isLoggedIn('arpit@gmail.com', 123045,dataReceived);

console.log('End');
