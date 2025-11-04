//Async Task
//Whether
const promises =fetch(`http://api.weatherapi.com/v1/current.json?key=071faf3117e141628ac54316253110&q=London&aqi=yes`)
// setTimeout(()=>{
//     console.log(promises);
// },2000)

// promises.then((data)=>{
//     console.log(data);
// }).catch((error)=>{
//     console.log(error);
// })

// Promises: 
// 1: pending
// 2: resolve
// 3: reject


// promises.then((response)=>{
// //    const pro2= response.json();
// //    pro2.then((data)=>{
// //     console.log(data);
// //     }).catch((error)=>{
// //         console.log(error);
        
// //     })
//     return response.json();
// }).then((data)=>{
//     console.log(data);
// }).catch((error)=>{
//     console.log(error);
// })

//Best Way To Write Promise
fetch(`http://api.weatherapi.com/v1/current.json?key=071faf3117e141628ac54316253110&q=London&aqi=yes`)
.then(response=>response.json())
.then(data=>console.log(data.current.temp_f))
.catch(error=>console.log(error));




