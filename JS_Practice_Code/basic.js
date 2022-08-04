function buttonExecution() {
    const buttons = document.querySelectorAll('button');
    function getParagraph() {
      const newPara = prompt('Enter Your Paragarph');
      const parappend = document.createElement('p');
      const contentaddedtopara = parappend.append(newPara);
      document.body.append(parappend);
    }
    for(const button of buttons){
      button.addEventListener('click', getParagraph);
    }

  }
  document.addEventListener('DOMContentLoaded', buttonExecution);