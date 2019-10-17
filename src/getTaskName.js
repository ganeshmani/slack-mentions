
export default (inputText) => {

let test = inputText

let isAtPresent = /[@]/.test(test);
let output;
if(isAtPresent){

  let value = test.match('\/task(.*?)\@');
  output = extractTaskName(value[1]);
}
else {
   output = extractTaskNamewithoutAt(test);
}


function extractTaskName(value) {
let finalValue;
  let isAnySpecialChar = /[!~]/;

if(isAnySpecialChar.test(value)){

  if(/[!]/.test(value)){

      let exclamationValue = value.match('^(.*?)!');
    // console.log("exclamationValue",exclamationValue);
    exclamationValue = exclamationValue[1];

    let isNegletCharacter = /[~]/;

    if(isNegletCharacter.test(exclamationValue)){

      let negletValue = exclamationValue.match('^(.*?)~');

      negletValue = negletValue[1];


      finalValue = negletValue;
    }
    else{
      finalValue = exclamationValue;
    }

  }
  else if(/[~]/.test(value)){

      let negletValue = value.match('^(.*?)~');

      negletValue = negletValue[1];

      let exclCharacter = /[!]/;

      if(exclCharacter.test(negletValue)){
        let exclamationValue = negletValue.match('^(.*?)!');

        exclamationValue = exclamationValue[1];

        finalValue = exclamationValue;
      }
      else{
        finalValue = negletValue;
      }
  }
}
else{
  finalValue = value;
}

return finalValue;

}


function extractTaskNamewithoutAt(value) {
let finalValue;
  let isAnySpecialChar = /[!~]/;
// console.log(isAnySpecialChar.test(value[1]))
  
if(isAnySpecialChar.test(value)){

  if(/[!]/.test(value)){

      let exclamationValue = value.match('\/task(.*?)\!');
      
    exclamationValue = exclamationValue[1];
    
    let isNegletCharacter = /[~]/;

    if(isNegletCharacter.test(exclamationValue)){

      let negletValue = exclamationValue.match('^(.*?)~');

      negletValue = negletValue[1];


      finalValue = negletValue;
    }
    else{
      finalValue = exclamationValue;
    }

  }
  else if(/[~]/.test(value)){

      let negletValue = value.match('\/task(.*?)\~');

      negletValue = negletValue[1];

      let exclCharacter = /[!]/;

      if(exclCharacter.test(negletValue)){
        let exclamationValue = negletValue.match('^(.*?)!');

        exclamationValue = exclamationValue[1];

        finalValue = exclamationValue;
      }
      else{
        finalValue = negletValue;
      }
  }
}
else{

  finalValue = value.split(" ")[1];

}

return finalValue;

}

    return output;
}