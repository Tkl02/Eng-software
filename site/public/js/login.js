document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
  
    var email = document.getElementById('login-email').value;
    var password = document.getElementById('login-password').value;
  
    // Aqui você pode realizar a requisição AJAX para a rota de login no servidor
    // e verificar se o email e a senha estão corretos
  
    // Se estiverem corretos, redirecione para a página home
  
    console.log('Login submitted');
  });
  