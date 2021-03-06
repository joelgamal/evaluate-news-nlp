function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let userURL = document.getElementById('name').value
    // Client.checkForName(formText)
    if(Client.correctURL(userURL)){

        console.log("::: Form Submitted :::")

        

        
        // fetch('http://localhost:8081/test')

        // .then(res => res.json())
        
        // .then(function(res) {
        //     document.getElementById('results').innerHTML = res.message
        // })
        
        //make api request (POST Request)
        postData('http://localhost:8081/api', { url: userURL} )

            .then(data => {
            console.log("===============");
            console.log(data); // JSON data parsed by `data.json()` call
            document.getElementById('results').innerHTML =
            `Agreement: ${data.agreement} <br></br>
            Confidence: ${data.confidence}   <br></br>
            Subjectivity: ${data.subjectivity} <br></br>
            Irony: ${data.irony} <br></br>`
            });
    }else{
        alert("Invalid url! Please check it again")
    }

}

// Example POST method implementation:
async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
        'Content-Type': 'application/json'
    //     // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    // redirect: 'follow', // manual, *follow, error
    // referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    try {
        return await response.json()
    } catch (error) {
      console.log('Error encountered: ',error)
    }
}

export { handleSubmit }
