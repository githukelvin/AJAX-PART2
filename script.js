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
            let data = JSON.parse(xhr.responseText)
        }  

        else{
            alert('Something 
        }

    }
    // xhr send request
    xhr.send();


});