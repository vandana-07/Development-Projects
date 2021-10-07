var btn=document.querySelector('.myBtn');
var input=document.querySelector('#cityName');
var show=document.querySelector('#show');
show.style.display = "none";
btn.addEventListener('click',async ()=>
{

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=a8e2ec8051d0a3f723acdc4759b3c837&units=metric`)
    .then(response => response.json()) 
    .then(data=> {
        console.log(data);
        show.style.display = "block";
        show.innerHTML=`<h3>The temperature is ${data.main.temp} C</h3>
        <h3>The weather is ${data.weather[0].description}</h3>
        <h3>The wind speed is ${data.wind.speed} mph</h3>
        <h3>The humidity is ${data.main.humidity}%</h3>`
        

        let temper=data.main.temp;
        if(temper<10)
        {
  document.body.style.backgroundImage = "url('https://parade.com/wp-content/uploads/2019/12/winter-instagram-captions-1.jpg')";
        }
        else if(temper<28)
        {
 document.body.style.backgroundImage = "url('https://www.metoffice.gov.uk/binaries/content/gallery/metofficegovuk/hero-images/weather/cloud/cumulus-fluffy--cirrus-wispy.jpg')";     
        }

        else{
  document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1900&q=60')";       
        }

    })
    .catch(err => {
        console.error(err);
    });


});






