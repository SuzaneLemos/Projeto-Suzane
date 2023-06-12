// Configuração do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBpbgoBx-QSt77RlujY45XWEsMiut6oYTU",
    authDomain: "projeto-suzane.firebaseapp.com",
    projectId: "projeto-suzane",
    storageBucket: "projeto-suzane.appspot.com",
    messagingSenderId: "86914146221",
    appId: "1:86914146221:web:04a59a550214eb101e0b24"
  };
  
  // Inicialize o Firebase
  firebase.initializeApp(firebaseConfig);
  
  // Acesse o serviço de autenticação do Firebase
  const auth = firebase.auth();
  
  // Função para exibir mensagens no elemento messageContainer
  function showMessage(message, isError = false) {
    const messageContainer = document.getElementById('message-container');
    messageContainer.innerHTML = message;
    messageContainer.style.color = isError ? 'red' : 'green';
  }
  
  // Formulário de Login
  const loginForm = document.getElementById('login-form');
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    
    // Faça o login do usuário
    auth.signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Usuário logado com sucesso
        const user = userCredential.user;
        showMessage('Login bem-sucedido!');
        console.log('Usuário logado:', user);
      })
      .catch((error) => {
        // Ocorreu um erro durante o login
        const errorCode = error.code;
        const errorMessage = error.message;
        showMessage(`Erro ao fazer login: ${errorMessage}`, true);
        console.error('Erro ao fazer login:', errorMessage);
      });
  });
  
  // Formulário de Registro
  const registerForm = document.getElementById('register-form');
  registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    
    // Crie uma conta de usuário
    auth.createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Usuário criado com sucesso
        const user = userCredential.user;
        showMessage('Usuário criado com sucesso!');
        console.log('Usuário criado:', user);
      })
      .catch((error) => {
        // Ocorreu um erro durante a criação da conta
        const errorCode = error.code;
        const errorMessage = error.message;
        showMessage(`Erro ao criar usuário: ${errorMessage}`, true);
        console.error('Erro ao criar usuário:', errorMessage);
      });
  });
  