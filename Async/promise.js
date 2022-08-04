// Resolve the Problem but still very difficult to read.
// console.log('Start');
// const isLoggedIn = (email, password) => {
//     const promise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve({ userdetail: email + password });
//         }, 5000)
//     })
//     promise.then(data => {
//         console.log(data.userdetail)
//         const promise = new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 resolve(['V1', 'V2', 'V3']);
//             }, 3000)
//         })
//         promise.then(videoData=>{
//             console.log('-----------------------------------');
//             console.log(videoData);
//             const promise=new Promise((resolve,reject)=>{
//                 setTimeout(() => {
//                  resolve([{videoName:'V1',owner:'O1'},{videoName:'V2',owner:'O2'},{videoName:'V3',owner:'O3'}])
//                 }, 2000);
//             })
//             promise.then(data=>{
//                 console.log('---------------------------');
//                 console.log(data);
//             })
//         })
//     })
//         .catch(err => console.log(err));
// }
// isLoggedIn('Arpit@123.com', 12345)
// console.log('End');

//----------------------------------------------------------------------------------------------

// getting above result by returning promise which make code really clean.
console.log('Start');
const getLogin = (email, password) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(email+password);
            resolve(email + password);
            //reject(new Error('Only to stop a first place'));
        }, 3000)
    })
}
const setVideo = (userData) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(userData);
            resolve(['V1', 'V2', 'V3']);
            //reject(new Error('Only to stop a 2 place'));
        }, 2000)
    })
}
const setVideoDetails = (videoData) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(videoData);
            resolve([{ videoName: 'V1', owner: 'O1' }, { videoName: 'V2', owner: 'O2' }, { videoName: 'V3', owner: 'O3' }]);
            //reject(new Error('Only to stop a third place'));
        }, 2000)
    })
}
// getLogin('w@h.com', 909)
//     .then(userData => {
//         console.log(userData);
//         return setVideo(userData);
//     }).then(videoData => {
//         console.log(videoData);
//         return setVideoDetails(videoData);
//     }).then(videoDetailData => {
//         console.log(videoDetailData);
//     }).catch(err => console.log(err));

 console.log('End');

//---------------------------------------------------------------
// Promise.all example
// const youtubeData=()=>{
//     return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log('Getting Stuff from Youtube');
//          resolve({videos:['V1','V2','V3','V4','V5']});
//          //reject(new Error('Any one of promise got error out will result in error out of all process'));
//     },2000)
// })
// }

// const facebookData=()=>{
//     return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log('Getting Stuff from facebook');
//          //resolve({User:'U1'});
//          reject(new Error('Any one of promise got error out will result in error out of all process'));
//     },1000)
// })
// }

// Promise.allSettled([youtubeData(),facebookData()]).then((data)=>{
//     //debugger;
//     console.log(data[0].videos);
//     console.log(data[1].User);
// })
// .catch((err)=>{console.log(err)});

//------------------------------------------------------------
//Async/Await operations
const loginData = getLogin('Bun@gh.com',1234);
const videoData = setVideo(loginData.then(val=>val));
const videoDetail=setVideoDetails(videoData.then(val=>val));
console.log(videoDetail.then(val=>val));
