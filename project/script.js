
document.querySelector("#loginButton").addEventListener("click", function() {
    

    var usernameInput = document.querySelector("#username").value;
    var passwordInput = document.querySelector("#password").value;
    

    var errorText = document.querySelector("#errorText");
    
   
    errorText.innerHTML = "";
    
    fetch("users.json")
        .then(function(response) {
            
            return response.json();
        })
        .then(function(data) {
            
            var isMatched = false;
            
            
            data.forEach(function(user) {
               
                if (user.username === usernameInput && user.password === passwordInput) {
                    isMatched = true;
                }
            });
            
           
            if (isMatched === true) {
                window.location.href = "dashboard.html";
            } else {
              
                errorText.innerHTML = "Invalid Username or Password";
            }
        })
        .catch(function(err) {
         
            console.error("Fetch failed:", err);
            errorText.innerHTML = "Error fetching user data.";
        });
});
