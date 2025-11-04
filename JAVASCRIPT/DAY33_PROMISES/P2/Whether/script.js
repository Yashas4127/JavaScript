document.querySelector('button').addEventListener("click",()=>{
    const place=document.getElementById("location").value;
    const prom=fetch(`http://api.weatherapi.com/v1/current.json?key=071faf3117e141628ac54316253110&q=${place}&aqi=yes`)
     function updateTemp(data){
        document.getElementById("weatherInfo").innerHTML=`Today's Temprature is ${data.current.temp_c}`
    }
    prom
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{
        updateTemp(data);
    })
   
})