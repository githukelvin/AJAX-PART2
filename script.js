let btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    // alert('You clicked');

    var xhr = new XMLHttpRequest();
    // Xhr object
    
    // xhr open connection
    xhr.open("GET", "https://restcountries.com/v3.1/all",true);
    // handling the response
    xhr.onload = () => {
        //if the response is successful
        if(xhr.status===200){
            let data = JSON.parse(xhr.responseText);
            data.forEach(index => {
            let divcountry = document.querySelector(".container");

            const {
                  capital,
                  flags: { png, svg },
                  timezones,
                  name: { official,common },
                } = index;
                // console.log(timezones[1] == undefined);
         if(timezones[1] == undefined){

                   let div = `
              <div class="country">
            <div class="img">
                <img src="${png}" alt="pl image">
        
            </div>
            <div class="info">
                <p>Name: <span class="name">${common}</span></p>
                <p>Capital: <span class="capital">${capital}</span></p>
        
            </div>
        </div>
            `;
                   divcountry.innerHTML += div;
         }
         else{
                   let div = `
              <div class="country">
            <div class="img">
                <img src="${png}" alt="pl image">
        
            </div>
            <div class="info">
                <p>Name: <span class="name">${official}</span></p>
                <p>Capital: <span class="capital">${capital}</span></p>
                <p>Timezone: <span class="timezone">${timezones[1]}</span></p>
        
            </div>
        </div>
            `;
                   divcountry.innerHTML += div;
         }
                
            });

        }  

        else{
            alert('Something occured');
        }

    }
    // xhr send request
    xhr.send();


});