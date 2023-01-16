let display=document.getElementById('display');
let buttons=Array.from(document.getElementsByClassName('button'));
buttons.map(button =>{
    button.addEventListener('click',(element)=>{
        console.log(element.target.innerText);
        switch(element.target.innerText){
            case 'C':
                display.innerText='';
                break;
            case 'Del':
                display.innerText= display.innerText.slice(0,-1)
                break;
            case '=':
                try
                {
                display.innerText = eval(display.innerText);
                }
                catch
                {
                    display.innerText = 'Error!';
                }
                break;
            default:
                display.innerText += element.target.innerText
        } 
    })
})