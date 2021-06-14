var docPagesRef = db.collection('col-sala').doc('azlo').collection('col-pages');

firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    const nameUser = document.querySelector('#nameUser');
    const imageUser = document.querySelector('#imageUser');
    const imageUser2 = document.querySelector('#imgUser2');
    const nameUser2 = document.querySelector('.discount-name');
    const { displayName, email, photoURL } = user;
    nameUser.innerHTML = displayName;
    nameUser2.innerHTML = displayName;
    imageUser.innerHTML = `<img class="img__user" src="${photoURL}" alt="azlo" />`;
    imageUser2.innerHTML = `<img
                class="discount-img"
                src="${photoURL}"
                alt=""
              />`;
  } else {
    location.href = '/login.html';
  }
});

// Logout
const logout = document.querySelector('#logout');
const logout2 = document.querySelector('#logout2');

logout.addEventListener('click', (e) => {
  e.preventDefault();
  auth.signOut().then(() => {
    console.log('signup out');
  });
});
logout2.addEventListener('click', (e) => {
  e.preventDefault();
  auth.signOut().then(() => {
    console.log('signup out');
  });
});

// Consultas

db.collection('col-sala')
  .doc('azlo')
  .collection('col-usuarios')
  .onSnapshot((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      console.log(doc.data());
    });
  });

db.collection('col-sala')
  .doc('azlo')
  .collection('col-pages')
  .onSnapshot((querySnapshot) => {
    const pages = document.querySelector('#pills-tab');
    pages.innerHTML = '';
    const tabContent = document.querySelector('#pills-tabContent');
    tabContent.innerHTML = '';
    let cont = 0;

    querySnapshot.forEach((doc) => {
      if (cont === 0) {
        pages.innerHTML += ` <li class="nav-item" role="presentation">
                  <a
                    class="nav-link active"
                    id="pills${doc
                      .data()
                      .arrPages.pagesArr.pagina.replace(' ', '')}"
                    data-toggle="pill"
                    href="#${doc
                      .data()
                      .arrPages.pagesArr.pagina.replace(' ', '')}"
                    role="tab"
                    aria-controls="pills-home"
                    aria-selected="true"
                    >${doc.data().arrPages.pagesArr.pagina}</a
                  >
                </li>`;

        tabContent.innerHTML += `<div
          class="tab-pane fade show active"
          id="${doc.data().arrPages.pagesArr.pagina.replace(' ', '')}"
          role="tabpanel"
          aria-labelledby="pills${doc
            .data()
            .arrPages.pagesArr.pagina.replace(' ', '')}"
          > 

          <div class="destination mt-3">
                  <div class="row w-100" id='${doc
                    .data()
                    .arrPages.pagesArr.pagina.replace(
                      ' ',
                      ''
                    )}2'>                   
                  </div>
                </div>
          
          </div>
          
          `;
      } else {
        pages.innerHTML += ` <li class="nav-item" role="presentation">
                  <a
                    class="nav-link "
                    id="pills${doc
                      .data()
                      .arrPages.pagesArr.pagina.replace(' ', '')}"
                    data-toggle="pill"
                    href="#${doc
                      .data()
                      .arrPages.pagesArr.pagina.replace(' ', '')}"
                    role="tab"
                    aria-controls="pills-home"
                    aria-selected="true"
                    >${doc.data().arrPages.pagesArr.pagina}</a
                  >
                </li>`;

        tabContent.innerHTML += `<div
          class="tab-pane fade show "
          id="${doc.data().arrPages.pagesArr.pagina.replace(' ', '')}"
          role="tabpanel"
          aria-labelledby="pills${doc
            .data()
            .arrPages.pagesArr.pagina.replace(' ', '')}"
          > 
            <div class="destination mt-3">
                  <div class="row w-100" id='${doc
                    .data()
                    .arrPages.pagesArr.pagina.replace(
                      ' ',
                      ''
                    )}2'>                    
                  </div>
                </div>
          </div>
          
          `;
      }

      cont++;
      const item = document.querySelector(
        `#${doc.data().arrPages.pagesArr.pagina.replace(' ', '')}2`
      );

      doc.data().arrPages.pagesArr.avisos.map((data, i) => {
        item.innerHTML += `<div class="col-lg-4 col-md-4 col-12 pr-1 mt-3">
                      <div class="destination-card">
                      <i class="far fa-trash-alt delete pointer" onclick="deleteAviso(${i},'${
          doc.data().arrPages.pagesArr.pagina
        }')"></i>
                        <div class="destination-profile">
                          <img
                            class="profile-img"
                            src="${data.imagen}"
                            alt=""
                          />
                          <div class="destination-length">
                         <i class="far fa-clock mr-2"> </i> ${data.hora}
                          </div>
                        </div>
                        <div class="destination-points">
                          <div class="point">${data.nombre}</div>
                          <div class="sub-point">${data.aviso}</div>
                        </div>
                      </div>
                      </div>`;
      });
    });
  });

//   Eliminar aviso
const deleteAviso = (i, page) => {
  const videoRef = db
    .collection('col-sala')
    .doc('azlo')
    .collection('col-pages')
    .doc('pages' + page.replace(' ', '') + 'azlo');
  videoRef
    .get()
    .then((doc) => {
      const arr = doc.data().arrPages.pagesArr.avisos;
      console.log(arr, i);
      arr.splice(i, 1);

      const arrPages = {
        pagesArr: {
          pagina: page,
          avisos: arr,
        },
      };
      return new Promise((resolve, reject) => {
        docPagesRef
          .doc('pages' + page.replace(' ', '') + 'azlo')
          .set({
            arrPages,
          })
          .then(function (docRef) {
            resolve(arrPages);

            const Toast = Swal.mixin({
              toast: true,
              position: 'top-end',
              showConfirmButton: false,
              timer: 1500,
              timerProgressBar: true,
              didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer);
                toast.addEventListener('mouseleave', Swal.resumeTimer);
              },
            });
            document.querySelector('#avisoText').value = '';
            Toast.fire({
              icon: 'success',
              title: 'Aviso eliminado',
            });
          })
          .catch(function (error) {
            reject(error);
          });
      });
    })
    .catch((error) => {
      console.log('Error getting document:', error);
    });
};

const eliminarPaginas = () => {
  const page = document.querySelector('#pagesAvisos2').value;
  if (page === '') {
    Swal.fire({
      title: 'Nombre de la página vacío',
      icon: 'info',
      html: 'El nombre no puede quedar vacío',
      showCloseButton: true,
      showCancelButton: false,
      focusConfirm: false,
      confirmButtonText: 'Aceptar',
      cancelButtonAriaLabel: 'Thumbs down',
    });
    return false;
  }

  docPagesRef
    .doc('pages' + page.replace(' ', '') + 'azlo')
    .delete()
    .then(() => {
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer);
          toast.addEventListener('mouseleave', Swal.resumeTimer);
        },
      });
      Toast.fire({
        icon: 'success',
        title: 'Página eliminada',
      });
    })
    .catch((error) => {
      console.error('Error removing document: ', error);
    });
};

//   Registrar paginas

const registrarPaginas = () => {
  const namePage = document.querySelector('#namePage').value;

  if (namePage === '') {
    Swal.fire({
      title: 'Nombre de la página vacío',
      icon: 'info',
      html: 'El nombre no puede quedar vacío',
      showCloseButton: true,
      showCancelButton: false,
      focusConfirm: false,
      confirmButtonText: 'Aceptar',
      cancelButtonAriaLabel: 'Thumbs down',
    });
    return false;
  }

  const videoRef = db
    .collection('col-sala')
    .doc('azlo')
    .collection('col-pages')
    .doc('pages' + namePage.replace(' ', '') + 'azlo');
  videoRef
    .get()
    .then((doc) => {
      if (!doc.exists) {
        const arrPages = {
          pagesArr: {
            pagina: namePage,
            avisos: [],
          },
        };
        sendPages(arrPages, namePage);
      } else {
        Swal.fire({
          title: 'Página registrada',
          icon: 'info',
          html: 'Esta página ya esta rregistrada',
          showCloseButton: true,
          showCancelButton: false,
          focusConfirm: false,
          confirmButtonText: 'Aceptar',
          cancelButtonAriaLabel: 'Thumbs down',
        });
      }
    })
    .catch((error) => {
      console.log('Error getting document:', error);
    });
};

const sendPages = (arrPages, namePage) => {
  return new Promise((resolve, reject) => {
    db.collection('col-sala')
      .doc('azlo')
      .collection('col-pages')
      .doc('pages' + namePage.replace(' ', '') + 'azlo')
      .set({
        arrPages,
      })
      .then(function (docRef) {
        resolve(arrPages);

        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 1500,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer);
            toast.addEventListener('mouseleave', Swal.resumeTimer);
          },
        });
        Toast.fire({
          icon: 'success',
          title: 'Página registrada',
        });
        document.querySelector('#namePage').value = '';
      })
      .catch(function (error) {
        reject(error);
      });
  });
};

// Mostrar pages

db.collection('col-sala')
  .doc('azlo')
  .collection('col-pages')
  .onSnapshot((querySnapshot) => {
    const selectPages = document.querySelector('#pagesAvisos');
    const selectPages2 = document.querySelector('#pagesAvisos2');

    selectPages.innerHTML = '';
    selectPages2.innerHTML = '';

    // $('#list-filter').html('');
    querySnapshot.forEach((doc) => {
      console.log();
      selectPages.innerHTML += `<option value='${
        doc.data().arrPages.pagesArr.pagina
      }'>${doc.data().arrPages.pagesArr.pagina}</option>`;
      selectPages2.innerHTML += `<option value='${
        doc.data().arrPages.pagesArr.pagina
      }'>${doc.data().arrPages.pagesArr.pagina}</option>`;
    });
  });

db.collection('col-sala')
  .doc('azlo')
  .collection('col-usuarios')
  .onSnapshot((querySnapshot) => {
    const listUsers = document.querySelector('#list-user');

    listUsers.innerHTML = '';

    // $('#list-filter').html('');
    querySnapshot.forEach((doc) => {
      console.log(doc.data());
      listUsers.innerHTML += `
              <div class="credit-wrapper">
                <img class="img__list" src="${doc.data().foto}" alt="azlo" />
                <div class="credit-name">
                  <div class="credit-type">${doc.data().nombre}</div>
                  <div class="credit-status">${doc.data().email}</div>
                </div>                
              </div>`;
    });
  });

//   Registra avisos

const registrarAviso = () => {
  const aviso = document.querySelector('#avisoText').value;
  const selectPage = document.querySelector('#pagesAvisos').value;
  if (aviso === '') {
    Swal.fire({
      title: 'El aviso de la página esta vacío',
      icon: 'info',
      html: 'El aviso no puede quedar vacío',
      showCloseButton: true,
      showCancelButton: false,
      focusConfirm: false,
      confirmButtonText: 'Aceptar',
      cancelButtonAriaLabel: 'Thumbs down',
    });
    return false;
  } else if (selectPage === '') {
    Swal.fire({
      title: 'La página esta vacía',
      icon: 'info',
      html: 'La página no puede quedar vacía',
      showCloseButton: true,
      showCancelButton: false,
      focusConfirm: false,
      confirmButtonText: 'Aceptar',
      cancelButtonAriaLabel: 'Thumbs down',
    });
    return false;
  }

  docPagesRef
    .doc('pages' + selectPage.replace(' ', '') + 'azlo')
    .get()
    .then((doc) => {
      if (doc.exists) {
        firebase.auth().onAuthStateChanged(function (user) {
          if (user) {
            const { displayName, photoURL } = user;
            const arrAvisos = doc.data().arrPages.pagesArr.avisos;
            const hoy = new Date();
            const hora = hoy.getHours() + ':' + hoy.getMinutes();
            if (arrAvisos) {
              const arrAviso = [];
              arrAviso.push(aviso);
              const arrNombre = [];
              arrNombre.push(displayName);
              const arrImage = [];
              arrImage.push(photoURL);
              const arrHora = [];
              arrHora.push(hora);
              arrAvisos.push({
                aviso: arrAviso,
                nombre: arrNombre,
                imagen: arrImage,
                hora: arrHora,
              });
              const arrPages = {
                pagesArr: {
                  pagina: selectPage,
                  avisos: arrAvisos,
                },
              };
              return new Promise((resolve, reject) => {
                docPagesRef
                  .doc('pages' + selectPage.replace(' ', '') + 'azlo')
                  .set({
                    arrPages,
                  })
                  .then(function (docRef) {
                    resolve(arrPages);

                    const Toast = Swal.mixin({
                      toast: true,
                      position: 'top-end',
                      showConfirmButton: false,
                      timer: 1500,
                      timerProgressBar: true,
                      didOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer);
                        toast.addEventListener('mouseleave', Swal.resumeTimer);
                      },
                    });
                    document.querySelector('#avisoText').value = '';
                    Toast.fire({
                      icon: 'success',
                      title: 'Página registrada',
                    });
                  })
                  .catch(function (error) {
                    reject(error);
                  });
              });
            } else {
              const arrAviso = doc.data().arrPages.pagesArr.avisos.aviso;
              arrAviso.push(aviso);
              const arrNombre = doc.data().arrPages.pagesArr.avisos.nombre;
              arrNombre.push(displayName);
              const arrImage = doc.data().arrPages.pagesArr.avisos.imagen;
              arrImage.push(photoURL);
              const arrHora = doc.data().arrPages.pagesArr.avisos.hora;
              arrHora.push(hora);

              arrAvisos.push({
                aviso: arrAviso,
                nombre: arrNombre,
                imagen: arrImage,
                hora: arrHora,
              });
              const arrPages = {
                pagesArr: {
                  pagina: selectPage,
                  avisos: arrAvisos,
                },
              };
              return new Promise((resolve, reject) => {
                docPagesRef
                  .doc('pages' + selectPage + 'azlo')
                  .set({
                    arrPages,
                  })
                  .then(function (docRef) {
                    resolve(arrPages);

                    const Toast = Swal.mixin({
                      toast: true,
                      position: 'top-end',
                      showConfirmButton: false,
                      timer: 1500,
                      timerProgressBar: true,
                      didOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer);
                        toast.addEventListener('mouseleave', Swal.resumeTimer);
                      },
                    });
                    document.querySelector('#avisoText').value = '';
                    Toast.fire({
                      icon: 'success',
                      title: 'Aviso registrado',
                    });
                  })
                  .catch(function (error) {
                    reject(error);
                  });
              });
            }
          }
        });
      } else {
        // doc.data() will be undefined in this case
      }
    })
    .catch((error) => {
      console.log('Error getting document:', error);
    });
};
