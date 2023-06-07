document.getElementById('form-cadastro').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
  
    fetch('/cadastro', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ nome, email, senha })
    })
    .then(response => response.text())
    .then(data => {
      alert(data);

    })
    .catch(error => {
      console.error('Erro:', error);
    });
  });
  
  document.getElementById('form-login').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
  
    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, senha })
    })
    .then(response => response.text())
    .then(data => {
      alert(data);

    })
    .catch(error => {
      console.error('Erro:', error);
    });
  });
  