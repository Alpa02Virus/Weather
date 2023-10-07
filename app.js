// API --> Application Programming  Interface (Hadgalsan data)
// API-ig fetch() asiglach duudna 
// promise --> fetch  hiihed ter utgiig damjuulahiig amlah amlalt
// status : 200 approved 
// status : 404 300 500 eror
// json() --> zambaraagui gatag hvnii nvdend hylbar haragduulah file
const inp = document.getElementsByTagName('input')[0]
const btn = document.getElementsByTagName('button')[0]
const temp = document.getElementsByTagName('p')[0]
const desc = document.getElementsByTagName('p')[1]
const wind = document.getElementsByTagName('p')[2]
const Not  = document.getElementsByTagName('p')[3]
btn.addEventListener('click',()=>{
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${inp.value}&units=metric&appid=9ac1f5c2d6508db3c616a0d1f80a08fd`).then(
            Response => Response.json()
    ).then(
        data => {
            console.log(data);
            console.log(data.main.temp);
            console.log(data.weather[0].main);;
            console.log(data.wind.speed);

            temp.innerText = `${(data.main.temp)}C°`;
            desc.innerText = data.weather[0].main;
            wind.innerText= `${(data.wind.speed)}  Km/h speed`;
       }
    )
});