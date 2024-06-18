document.getElementById("loginButton").addEventListener('click', function() {
    const username = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if(username === "wasadmin@test.com" && password === "red") {
        document.getElementById("error").innerHTML = "Logged in"
    } else {
        document.getElementById("error").innerHTML = "not authorized"
    }

    console.log('Username: ' + username);
    console.log('Password: ' + password);
})