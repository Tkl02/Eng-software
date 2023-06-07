document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
  
    var email = document.getElementById('login-email').value;
    var password = document.getElementById('login-password').value;
  
  
    console.log('Login submitted');
  });
  