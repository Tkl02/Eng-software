document.getElementById('register-form').addEventListener('submit', function(e) {
    e.preventDefault();
  
    var email = document.getElementById('register-email').value;
    var password = document.getElementById('register-password').value;
    var confirmPassword = document.getElementById('register-confirm-password').value;
  
    if (password !== confirmPassword) {
      alert('As senhas não coincidem');
      return;
    }
  
    console.log('Register submitted');
  });
  