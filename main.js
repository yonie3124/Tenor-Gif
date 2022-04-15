const container = document.getElementById('container');
const gotBtn = document.getElementById('got-btn');
const jsonBtn = document.getElementById('json-btn');
var limit = 20;
const creatures = document.getElementById('creatures');
var aa = creatures.value

// Tenor API entry
gotBtn.addEventListener('click', function() {
    container.innerHTML = '';
    var aa = creatures.value;
    let myRequest = new XMLHttpRequest();    
    myRequest.open('GET', 'https://api.tenor.com/v1/search?q='+ aa + ' &key=TCYT4WKRUCQ='+limit)
    myRequest.responseType = 'json'
    myRequest.onreadystatechange = function(){
        if( myRequest.readyState === 4 && myRequest.status === 200 ){
            if(aa !=""){
                printData(myRequest.response)
            }
            // printData(myRequest.response)
            // console.log(myRequest.response.results[].media[0].mediumgif.url)
            // console.log(myRequest.response)
        }
    }
    myRequest.send()
})
// Print the API data
function printData(data){

    // we set the limit to a fixed value so that we could the result true;
    for(let i=0; i<limit; i++){
        console.log(data.results[i].media[0].mediumgif.url);
        let newUser = document.createElement("div")
        newUser.setAttribute('class', 'character')        
        let userImage = document.createElement('img')
        userImage.setAttribute('src', data.results[i].media[0].mediumgif.url)
        userImage.setAttribute('alt', data.results[i].media[0].mediumgif.url)
        userImage.setAttribute('class', 'image')    
        newUser.appendChild(userImage)
        container.appendChild(newUser)           
    }
}




