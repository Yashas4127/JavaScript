const f=document.querySelector("form")

f.addEventListener("submit",(e)=>{
    e.preventDefault()
    const income=document.getElementById("income")
    const amt=parseInt(income.value)

    const result=document.querySelector("h2")
    let tt=0;
    if(amt<1200000){
        tt=0;
    }
    else if(amt<=1600000){
        tt=(amt-1200000)*0.15;
    }
    else if(amt<=2000000){
        tt=(amt-1600000)*0.20 + 60000;
    }
    else if(amt<=2400000){
        tt=(amt-2000000)*0.25 +60000+80000;
    }
    else{
        tt=(amt-2400000)*0.3 +60000+80000+100000;
    }

    result.textContent=`Total Tax is : ${tt}Rs`
   form.reset();
})