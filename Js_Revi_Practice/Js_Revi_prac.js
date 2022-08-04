// const student=[{name:'dd1',age:16},{name:'dd2',age:18},{name:'dd3',age:20},{name:'dd4',age:22}
// ,{name:'dd5',age:24},{name:'dd6',age:26}];

// const months = ['March', 'Jan', 'Feb', 'Dec'];
// months.sort();
// console.log(months);

// const array1 = [1, 30, 4, 21, 100000];
// array1.sort();
// console.log(array1);

//-----------------------------------------------------------------
// Getting extension of fileName
// const getFileExtension=(fileName)=>{
//     //return fileName.slice(fileName.lastIndexOf('.'));
//      const splittingDot=fileName.split('.');
//      return splittingDot[splittingDot.length-1].concat('.');
//     }

// console.log(getFileExtension('hol.lop.jk'));

//--------------------------------------------------------------------------------------
// Getting the current date and formating it according to our need.
// const getCurrentDateFunction= () => {
//     const currentDate=new Date();
//     const day=Intl.DateTimeFormat('en-us',{day: '2-digit'}).format(currentDate);
//     const month=Intl.DateTimeFormat('en-us',{month:'2-digit'}).format(currentDate);
//     const year=Intl.DateTimeFormat('en-us',{year:"numeric"}).format(currentDate);
//     console.log('mm-dd-yyyy'+' '+`${year}-${day}-${year}`);
//     console.log('mm/dd/yyyy'+`${month}/${day}/${year}`);
//     console.log('dd-mm-yyyy'+`${day}-${month}-${year}`);
//     console.log('dd/mm/yyyy'+`${day}/${month}/${year}`);
//     return currentDate.toLocaleDateString();   
// }
//-------------------------------------------------------------------------------------------
//Using to convert char into number code and using it.
// const alphabetShiftByOne= str => {
//     let shiftedAlphabet='';
//     for(let i=0;i<str.length;i++){
//       shiftedAlphabet=shiftedAlphabet+String.fromCharCode(str.charCodeAt(i)+1);
//     }
//     console.log(str);
//     return shiftedAlphabet
// }

// console.log(alphabetShiftByOne('afsdfsfsfsfsfbbfbfbdgsfs'));

//------------------------------------------------------------------------------------------
//New! keyword
// const addingNewWord = str =>{
//     if (str.startsWith('New!') || str.startsWith('new!')){
//         console.log('No adding of New');
//         return str
//     }
//     console.log('Adding of New');
//     return  'New! '.concat(str);
// }
// console.log(addingNewWord('snakjndak'));
// const addingNewWord=str=>{
// if(str.indexOf('New!')===-1){
//     return `New! ${str}`;
// }
// return str
// }
// console.log(addingNewWord('New! GandhiNagar'));

//-----------------------------------------------------------------------------------------------
// return a combination of first 3 and last 3 as a string.

// const joinString=(str)=>{
// if(str.length>3){
//     let addedString='';
//     for(let i=0;i<3;i++){
//         addedString=addedString+str[i];
//     }
//     for(let i=str.length-3;i<str.length;i++){
//         addedString=addedString+str[i]; 
//     }
//     return addedString;
// }
// return str;
// }

// console.log(joinString('a'));

// Same Code Using slice function
// const addedString = str => str.length < 4? str:str.slice(0, 3) + str.slice(-3);
// console.log(addedString('sda'));
//-------------------------------------------------------------------------------------

