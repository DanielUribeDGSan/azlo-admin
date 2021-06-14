// // SignUp
// const signUpForm = document.querySelector('#signup-form');
// signUpForm.addEventListener('submit', (e) => {
//   e.preventDefault();
//   const email = signUpForm['signup-email'].value;
//   const password = signUpForm['signup-password'].value;

//   // Authenticate the User
//   auth
//     .createUserWithEmailAndPassword(email, password)
//     .then((userCredential) => {
//       // clear the form
//       signUpForm.reset();
//       // close the modal
//       $('#signupModal').modal('hide');
//     });
// });

// // SingIn
// const signInForm = document.querySelector('#login-form');

// signInForm.addEventListener('submit', (e) => {
//   e.preventDefault();
//   const email = signInForm['login-email'].value;
//   const password = signInForm['login-password'].value;

//   // Authenticate the User
//   auth.signInWithEmailAndPassword(email, password).then((userCredential) => {
//     // clear the form
//     signInForm.reset();
//     // close the modal
//     $('#signinModal').modal('hide');
//   });
// });

// Login with Google
const googleButton = document.querySelector('#googleLogin');

googleButton.addEventListener('click', (e) => {
  console.log('click');
  e.preventDefault();

  const provider = new firebase.auth.GoogleAuthProvider();
  auth
    .signInWithPopup(provider)
    .then((result) => {
      console.log(result);
      const { displayName, email, photoURL } = result.user;

      verificarUsuario(email, displayName, photoURL);
    })
    .catch((err) => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: err,
        confirmButtonText: 'Comprendo',
      });
    });
});

// Registrar usuario
const verificarUsuario = (email, name, foto) => {
  db.collection('col-sala')
    .doc('azlo')
    .collection('col-usuarios')
    .doc('usuario' + email + 'azlo')
    .get()
    .then((doc) => {
      if (doc.exists) {
        location.href = '/index.html';
      } else {
        const registro = {
          nombre: name,
          email: email,
          foto: foto,
        };
        SendRegistro(email, registro);
      }
    });
};
const SendRegistro = (email, registro) => {
  return new Promise((resolve, reject) => {
    db.collection('col-sala')
      .doc('azlo')
      .collection('col-usuarios')
      .doc('usuario' + email + 'azlo')
      .set(registro)
      .then(function (docRef) {
        resolve(registro);
        location.href = '/index.html';
      })
      .catch(function (error) {
        reject(error);
      });
  });
};

// Validar usuario
// firebase.auth().onAuthStateChanged(function (user) {
//   if (user) {
//     const { displayName, email, photoURL } = user;

//     var usuarioRef = db
//       .collection('col-sala')
//       .doc('azlo')
//       .collection('col-usuarios')
//       .doc('usuario' + email + 'azlo');
//     usuarioRef.onSnapshot((querySnapshot) => {
//       if (querySnapshot.exists) {
//         location.href = '/index.html';
//       }
//     });
//   }
// });

// // Login with Facebook
// const facebookButton = document.querySelector('#facebookLogin');

// facebookButton.addEventListener('click', (e) => {
//   e.preventDefault();
//   signInForm.reset();
//   $('#signinModal').modal('hide');

//   const provider = new firebase.auth.FacebookAuthProvider();
//   auth
//     .signInWithPopup(provider)
//     .then((result) => {
//       console.log(result);
//       console.log('facebook sign in');
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });
