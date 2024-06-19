document.getElementById("register").addEventListener('click', function() {
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value

    fetch('https://ecs.the-sock-exchange.com/api/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'applocation/json'
        },
        body: JSON.stringify({'name': name, 'email': email})
    })
    .then(response => response.json())
    .then(data => console.log('POST:', data))
    .catch((error) => console.error('Error:', error));

})