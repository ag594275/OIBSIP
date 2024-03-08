let string="";
let buttons=document.querySelectorAll('button');
let input=document.getElementById('input');
let buttonArray=Array.from(buttons);
buttonArray.forEach(btn=>{
    btn.addEventListener('click',(e)=>{
        if(e.target.innerHTML=='=')
        {
            string=eval(string);
            input.value=string;
        }
        else if(e.target.innerHTML=='DEL')
        {
            string=string.substring(0,string.length-1);
            input.value=string;
        }
        else if(e.target.innerHTML=='C')
        {
            string=" ";
            input.value=string;
        }
        else
        {
            string+=e.target.innerHTML;
            input.value=string;
        }
    })
})