import React, { useState } from 'react';

const Weather = () => {


   const [Imput, setImput] = useState("");
   const [weather, setWeather] = useState([]);
   const apiKey = "2ac1f3fa13f482f3a00ac9da278f5269";

   const obtainJuego =  (e) => {  
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${Imput}&appid=${apiKey}&units=metric`)
        .then((response) => response.json()).then((data => {
          setWeather(data)
          setImput("")
          console.log(data)
        }));
 
}

   const preventDefault = e => {
       e.preventDefault()
   }

    return (
        <div className='container p-4'>
          <div className='row'>
            <div className='col-md-6 mx-auto'>
              
              <div className='card card-body '>
                <form onSubmit={preventDefault} >
                  <div className='form-group'>
                    <input 
                      className='form-control' 
                      autoFocus
                      placeholder='CIUDAD/PAIS'
                      onChange={event => setImput(event.target.value)}
                      value={Imput} >
                    </input>
                  </div>
                </form>
              </div>

                 <div className='card card-body'>
                   <button 
                     className='btn btn-success btn-block' 
                     onClick={obtainJuego}> 
                     Click y obtene el clima en tu ciudad o pais 
                   </button>
                 </div>
                
                  {(typeof weather.main != "undefined") ? 
                    (
                     <div className='card card-body'>
                        <p>Ciudad: {weather.name}</p>   
           
                        <p>Temperatura promedio: {weather.main.temp} °C </p> 
              
                        <p>Temperatura maxima del día: {weather.main.temp_max} °C </p> 
            
                        <p> Temperatura minima del día: {weather.main.temp_min} °C </p>
                     </div> 
                    ): 
                     <div className='card card-body bg-danger'>
                       <p> Escriba una ciudad o pais valido </p> 
                     </div>}
            </div>
          </div>
        </div>
    );
}

export default Weather;

