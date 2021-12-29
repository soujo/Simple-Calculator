let screen =document.getElementById("screen");
let buttons=document.querySelectorAll("button");
let screenValue="";
for(item of buttons){
    item.addEventListener("click",(event)=>{
        let buttonText=event.target.innerText;
        if(buttonText=="X"){
            buttonText="*";
            screenValue+=buttonText;
            screen.value=screenValue;
        }
        else if(buttonText=="AC"){
            screenValue="";
            screen.value=screenValue;

        }
        else if(buttonText=="C"){
            screenValue=screenValue.slice(0,-1);
            screen.value=screenValue;
        }
        else if(buttonText=="="){
            let value=eval(screenValue);
            if(value==NaN || value==undefined){
                screen.value="Error";
            }
            else{
                screen.value=value;
            }
            console.log(screen.value);
            
        }
        else{
            screenValue+=buttonText;
            screen.value=screenValue;

        }
    })

}
