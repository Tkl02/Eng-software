const express = require('express');
const app = express();

// Configuração do servidor
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

// Rota para a página inicial
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Rota para o login
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  // Aqui você pode implementar a lógica para verificar os dados de login no banco de dados
  // e responder com sucesso ou erro

  if (email && password) {
    res.send('Login successful');
  } else {
    res.send('Invalid credentials');
  }
});

// Rota para o cadastro
app.post('/register', (req, res) => {
  const { email, password, confirmPassword } = req.body;

  // Verifique se as senhas são iguais
  if (password !== confirmPassword) {
    res.send('Passwords do not match');
    return;
  }

  // Aqui você pode implementar a lógica para salvar os dados de registro no banco de dados
  // e responder com sucesso ou erro

  if (email && password) {
    res.send('Registration successful');
  } else {
    res.send('Invalid registration data');
  }
});

// Inicie o servidor
app.listen(5000, () => {
  console.log('Servidor iniciado na porta 5000');
});
