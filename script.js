    // container=document.querySelector(".holder");
    // spin = document.querySelector('input');
    // commandText= document.querySelector("#searching");


    // function data(result,word){
    //   if(result.title){
    //     console.log(No)
    //   }else{ 
    //     console.log(result);
    
    //   }
    // }
    // function fetchApi(word){
  
    //    let url=`https: api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    //    fetch(url).then(res=>res.json()).then(result=>data(result, word));
    // }
    // function myDictionary(){
    //   if(spin===0){
    //    commandText.innerHTML=`No Input`;
    //   }else {
    //     fetchApi(spin);
    //   }
    // }

    function searchHistory(){
      let wordinput = document.querySelector('input').value;
      let history= JSON.parse(localStorage.getItem('searchedit'));
      const updatedHistory= history.concat(`${wordinput}`)
      let result=localStorage.setItem('searchedit', JSON.stringify(updatedHistory));
      console.log(history)

  }
  


const getVal = () => {
    let wordinput = document.querySelector('input').value;
    let letters= /^[A-Za-z]+$/;
    if(wordinput.match(letters)){
      function reverseString(str) {
        return str.split("").reverse().join("");
        }
          let spur= reverseString(wordinput);
          let answer=document.getElementById("searching");
                  // if(wordinput===0){
                  //   let output="*No input"
                  //   answer.style.color="red";
                  //   answer.innerText=output;
                  
                  if(spur===wordinput){
                    setTimeout(function(){let output= `${wordinput} is a palindrome`
                    answer.style.color="green"
                    answer.innerText=output;
                    },0);
                    setTimeout(function(){
                    let output="Type in your word and click enter to see if your word is a palindrome";
                    answer.style.color="black"
                    answer.innerText=output;
                    }, 4000);
                    setTimeout(function(){
                      let output=""
                      answer.innerText=output;
                    },7000);
                     
                    
                  }else{
                    setTimeout(function(){let output= `${wordinput} is not a palindrome`
                    answer.style.color="red"
                    answer.innerText=output;},0);
                    setTimeout(function(){
                      let output="Type in your word and click enter to see if your word is a palindrome";
                      answer.style.color="black";
                      answer.innerText=output;
                    },4000)
                    setTimeout(function(){
                      
                      let output="";
                      answer.innerText=output
                    },7000)
                  }
    }else if(wordinput===""){
      setTimeout(function(){
        let outro=document.getElementById("searching");
        outro.style.color="red";
        outro.innerText="*No input"
      },0);
      setTimeout(function(){
        let outro=document.getElementById("searching")
        let output="Type in your word and click enter to see if your word is a palindrome";
        outro.style.color="black";
        outro.innerText=output;
      },4000);
      setTimeout(function(){
        let outro=document.getElementById("searching")
        let output="";
        outro.innerText=output
      },7000);
    }else{
      setTimeout(function(){
        let outro=document.getElementById("searching");
        outro.style.color="red"
        outro.innerText=`${wordinput} is not a word`;
      },0);
      setTimeout(function(){
        let outro=document.getElementById("searching")
        let output="Type in your word and click enter to see if your word is a palindrome";
        outro.style.color="black";
        outro.innerText=output;
      },4000);
      setTimeout(function(){
        let outro=document.getElementById("searching")
        let output="";
        outro.innerText=output
      },7000)
    }
  }
      // for(i=0; i<wordinput.length; i++){
      //   let son=wordinput[i];
      //   if(son==="0"){
      //     console.log("Not a word");
      //   }else if(son==="1"){
      //     console.log("Not a word");
      //   }else if(son==="2"){
      //     console.log("Not a word");
      //   }else if(son==="3"){
      //     console.log("Not a word");
      //   }else if(son==="4"){
      //     console.log("Not a word");
      //   }else if(son==="5"){
      //     console.log("Not a word");
      //   }else if(son==="6"){
      //     console.log("Not a word");
      //   }else if(son==="7"){
      //     console.log("Not a word");
      //   }else if(son==="8"){
      //     console.log("Not a word");
      //   }else if(son==="9"){
      //     console.log("Not a word")
      //   }else{
      //        function reverseString(str) {
      //              return str.split("").reverse().join("");
      //         }
      //         let spur= reverseString(wordinput);
      //         let answer=document.getElementById("searching");
      //         if(wordinput===0){
      //           let output="*No input"
      //           answer.style.color="red";
      //           answer.innerText=output;
      //         }
      //         else if(spur===wordinput){
      //           let output= `${wordinput.toUpperCase()} is a palindrome`
      //           answer.style.color="green"
      //           answer.innerText=output;
      //         }else{
      //           let output= "Your word is not a palindrome"
      //           answer.style.color="red"
      //           answer.innerText=output;
      //         }
      //   }
      // }
   
     
        
     
      
    