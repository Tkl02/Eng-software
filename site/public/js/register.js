document.getElementById('register-form').addEventListener('submit', function(e) {
    e.preventDefault();
  
    var email = document.getElementById('register-email').value;
    var password = document.getElementById('register-password').value;
    var confirmPassword = document.getElementById('register-confirm-password').value;
  
    // Verifique se as senhas são iguais
    if (password !== confirmPassword) {
      alert('As senhas não coincidem');
      return;
    }
  
    // Aqui você pode realizar a requisição AJAX para a rota de registro no servidor
    // e enviar os dados para o armazenamento no banco de dados
  
    console.log('Register submitted');
  });
  