let select=document.querySelectorAll('.currency') 
let btn=document.getElementById('btn')
let input=document.getElementById('input')
fetch('https://api.frankfurter.app/currencies')
.then(res=>res.json())
.then(json=>setup(json))

function setup(json){
    let curr=Object.entries(json)
    for(let i=0;i<curr.length;i++){
       let opt= `<option value="${curr[i][0]}">${curr[i][0]}</option>`
       select[0].innerHTML+=opt
       select[1].innerHTML+=opt
    }
}

btn.addEventListener('click',()=>{
    let c1=select[0].value
    let c2=select[1].value
    let inputval=input.value
    if(c1===c2){
        document.getElementById('result').value="Choose different currencies"
    }
    else{
        convert(c1,c2,inputval)
    }
})

function convert(c1,c2,inputval){
    const host = 'api.frankfurter.app';
    fetch(`https://${host}/latest?amount=${inputval}&from=${c1}&to=${c2}`)
    .then(resp => resp.json())
    .then((data) => {
        document.getElementById('result').value=Object.values(data.rates)[0]
    })
}