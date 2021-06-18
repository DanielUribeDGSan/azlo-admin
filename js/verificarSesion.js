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
    location.href = 'login.html';
  }
});

// Logout
const logout = document.querySelector('#logout');
const logout2 = document.querySelector('#logout2');

logout.addEventListener('click', (e) => {
  e.preventDefault();
  auth.signOut().then(() => { });
});
logout2.addEventListener('click', (e) => {
  e.preventDefault();
  auth.signOut().then(() => { });
});

// Consultas

db.collection('col-sala')
  .doc('azlo')
  .collection('col-usuarios')
  .onSnapshot((querySnapshot) => {
    querySnapshot.forEach((doc) => { });
  });

db.collection('col-sala')
  .doc('azlo')
  .collection('col-pages')
  .onSnapshot((querySnapshot) => {
    const pages = document.querySelector('#pills-tab');
    pages.innerHTML = '';
    const tabContent = document.querySelector('#pills-tabContent');
    tabContent.innerHTML = '';

    const pages2 = document.querySelector('#pills-tab2');
    pages2.innerHTML = '';
    const tabContent2 = document.querySelector('#pills-tabContent2');
    tabContent2.innerHTML = '';
    let cont = 0;

    querySnapshot.forEach((doc) => {
      console.log(doc.data());

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
        pages2.innerHTML += ` <li class="nav-item" role="presentation">
                  <a
                    class="nav-link active"
                    id="pills${doc
            .data()
            .arrPages.pagesArr.pagina.replace(' ', '')}t2"
                    data-toggle="pill"
                    href="#${doc
            .data()
            .arrPages.pagesArr.pagina.replace(' ', '')}t2"
                    role="tab"
                    aria-controls="pills-home"
                    aria-selected="true"
                    >${doc.data().arrPages.pagesArr.pagina}</a
                  >
                </li>`;

        tabContent2.innerHTML += `<div
          class="tab-pane fade show active"
          id="${doc.data().arrPages.pagesArr.pagina.replace(' ', '')}t2"
          role="tabpanel"
          aria-labelledby="pills${doc
            .data()
            .arrPages.pagesArr.pagina.replace(' ', '')}t2"
          > 

          <div class=" mt-3" id='${doc
            .data()
            .arrPages.pagesArr.pagina.replace(' ', '')}3'>
                 
          
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
        pages2.innerHTML += ` <li class="nav-item" role="presentation">
                  <a
                    class="nav-link "
                    id="pills${doc
            .data()
            .arrPages.pagesArr.pagina.replace(' ', '')}t2"
                    data-toggle="pill"
                    href="#${doc
            .data()
            .arrPages.pagesArr.pagina.replace(' ', '')}t2"
                    role="tab"
                    aria-controls="pills-home"
                    aria-selected="true"
                    >${doc.data().arrPages.pagesArr.pagina}</a
                  >
                </li>`;

        tabContent2.innerHTML += `<div
          class="tab-pane fade show "
          id="${doc.data().arrPages.pagesArr.pagina.replace(' ', '')}t2"
          role="tabpanel"
          aria-labelledby="pills${doc
            .data()
            .arrPages.pagesArr.pagina.replace(' ', '')}t2"
          > 
           <div class=" mt-3" id='${doc
            .data()
            .arrPages.pagesArr.pagina.replace(' ', '')}3'>
                           
          </div>
          </div>
          
          `;
      }

      const item2 = document.querySelector(
        `#${doc.data().arrPages.pagesArr.pagina.replace(' ', '')}3`
      );

      item2.innerHTML = ` <table class="table">
                <thead>
                  <tr>
                    <th class="pl-0">Check</th>
                    <th class="pl-0">Nombre</th>
                    <th class="pl-0">Tarea</th>
                    <th class="pl-0">Status</th>
                  </tr>
                </thead>
                <tbody id="${doc
          .data()
          .arrPages.pagesArr.pagina.replace(' ', '')}5">
                 
                </tbody>
              </table>`;

      const tableQ = document.querySelector(
        `#${doc.data().arrPages.pagesArr.pagina.replace(' ', '')}5`
      );

      doc
        .data()
        .arrPages.pagesArr.tareas.reverse()
        .map(({ usuario, tarea, status }, i) => {
          if (status == 'waiting') {
            tableQ.innerHTML += ` 
                  <tr>
                    <td>
                      <input type="checkbox" class="table-row float-left" onclick="tareaCompletada(${i},'${doc.data().arrPages.pagesArr.pagina
              }')" />
                       <div class="dropdown float-left" style="width:40%">                  
                  <span class="time pointer" id="dropdownMenuButton2"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false">Config</span>

                  <div
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenuButton2"
                  >
                    <a
                      class="dropdown-item pointer" onclick="tareaIncompleta(${i},'${doc.data().arrPages.pagesArr.pagina
              }')"
                      >Tarea incompleta
                      
                      <i class="fas fa-chalkboard float-right mt-1"></i>
                    </a>
                    <a class="dropdown-item pointer" onclick="eliminarTarea(${i},'${doc.data().arrPages.pagesArr.pagina
              }')"
                      >Eliminar tarea
                      <i class="fas fa-trash-alt float-right mt-1"></i
                    ></a>
                  </div>
                </div>                      
                    </td>
                    <td>${usuario}</td>
                    <td>${tarea}</td>
                    <td>
                      <div class="status is-wait">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="feather feather-loader"
                        >
                          <path
                            d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"
                          ></path>
                        </svg>
                        Waiting
                      </div>
                    </td>
                  </tr>
               `;
          } else if (status == 'pending') {
            tableQ.innerHTML += ` 
                  <tr>
                    <td>
                      <input type="checkbox" class="table-row float-left" onclick="tareaCompletada(${i},'${doc.data().arrPages.pagesArr.pagina
              }')" />
                            <div class="dropdown float-left" style="width:40%">                  
                  <span class="time pointer" id="dropdownMenuButton2"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false">Config</span>

                  <div
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenuButton2"
                  >
                    <a
                      class="dropdown-item pointer" onclick="tareaIncompleta(${i},'${doc.data().arrPages.pagesArr.pagina
              }')"
                      >Tarea incompleta
                      
                      <i class="fas fa-chalkboard float-right mt-1"></i>
                    </a>
                    <a class="dropdown-item pointer" onclick="eliminarTarea(${i},'${doc.data().arrPages.pagesArr.pagina
              }')"
                      >Eliminar tarea
                      <i class="fas fa-trash-alt float-right mt-1"></i
                    ></a>
                  </div>
                </div>
                    </td>
                    <td>${usuario}</td>
                    <td>${tarea}</td>
                    <td>
                     <div class="status is-red">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M18 6L6 18M6 6l12 12"></path>
                        </svg>
                        Pending
                      </div>
                    </td>
                  </tr>
               `;
          } else if (status == 'completed') {
            tableQ.innerHTML += ` 
                  <tr>
                    <td>
                      <input type="checkbox" checked class="table-row float-left" onclick="tareaCompletada(${i},'${doc.data().arrPages.pagesArr.pagina
              }')" />
                            <div class="dropdown float-left" style="width:40%">                  
                  <span class="time pointer" id="dropdownMenuButton2"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false">Config</span>

                  <div
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenuButton2"
                  >
                    <a
                      class="dropdown-item pointer" onclick="tareaIncompleta(${i},'${doc.data().arrPages.pagesArr.pagina
              }')"
                      >Tarea incompleta
                      
                      <i class="fas fa-chalkboard float-right mt-1"></i>
                    </a>
                    <a class="dropdown-item pointer" onclick="eliminarTarea(${i},'${doc.data().arrPages.pagesArr.pagina
              }')"
                      >Eliminar tarea
                      <i class="fas fa-trash-alt float-right mt-1"></i
                    ></a>
                  </div>
                </div>
                    </td>
                    <td>${usuario}</td>
                    <td>${tarea}</td>
                    <td>
                    <div class="status is-green"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                      Completed
                    </div>
                    </td>
                  </tr>
               `;
          }
        });

      const item = document.querySelector(
        `#${doc.data().arrPages.pagesArr.pagina.replace(' ', '')}2`
      );

      doc
        .data()
        .arrPages.pagesArr.avisos.reverse()
        .map((data, i) => {
          if (data.imageAviso && data.imageAviso.length > 0) {
            console.log('entro');
            item.innerHTML += `<div class="col-auto pr-1 mt-3">
                      <div class="destination-card">
                      <div class="dropdown">
                      <i class="fas fa-ellipsis-v delete pointer" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" ></i>

  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
  <a class="dropdown-item pointer"  onclick="mostrarDatosComment('${doc.data().arrPages.pagesArr.pagina
              }',${i})">Escribir comentario <i class="far fa-comment-dots float-right mt-1"></i></a>
  <a class="dropdown-item" onclick="mostrarDataCommentImg('${doc.data().arrPages.pagesArr.pagina
              }',${i})">Comentario con imagen <i class="far fa-check-circle float-right mt-1"></i></a>
  <a class="dropdown-item pointer" onclick="deleteAviso(${i},'${doc.data().arrPages.pagesArr.pagina
              }')">Eliminar aviso <i class="far fa-trash-alt float-right mt-1"></i> </a>
  </div>
</div>
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
                          <img class="img-fluid mt-3 border-rad-10 " style="
    width: 400px;
    height: 400px;
" src="${data.imageAviso}" alt="azlo" />
                        </div>
                        <hr/>
                        <p clas="mt-3">Comentarios</p>
                        <div id='comment${i + 80}${doc
                .data()
                .arrPages.pagesArr.pagina.replace(' ', '')}'>
                          
                          </div>
                      </div>
                      </div>`;
          } else {
            item.innerHTML += `<div class="col-auto pr-1 mt-3">
                      <div class="destination-card">
                      <div class="dropdown">
                      <i class="fas fa-ellipsis-v delete pointer" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" ></i>

  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
  <a class="dropdown-item pointer"  onclick="mostrarDatosComment('${doc.data().arrPages.pagesArr.pagina
              }',${i})">Escribir comentario <i class="far fa-comment-dots float-right mt-1"></i></a>
  <a class="dropdown-item" onclick="mostrarDataCommentImg('${doc.data().arrPages.pagesArr.pagina
              }',${i})">Comentario con imagen <i class="far fa-check-circle float-right mt-1"></i></a>
  <a class="dropdown-item pointer" onclick="deleteAviso(${i},'${doc.data().arrPages.pagesArr.pagina
              }')">Eliminar aviso <i class="far fa-trash-alt float-right mt-1"></i> </a>
  </div>
</div>
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
                        <hr/>
                        <p clas="mt-3">Comentarios</p>
                        <div id='comment${i + 80}${doc
                .data()
                .arrPages.pagesArr.pagina.replace(' ', '')}'>
                          
                          </div>
                      </div>
                      </div>`;
          }

          const commentContent = document.querySelector(
            `#comment${i + 80}${doc
              .data()
              .arrPages.pagesArr.pagina.replace(' ', '')}`
          );

          commentContent.innerHTML = '';
          const arrReverse = doc.data().arrPages.pagesArr.avisos.reverse()[i];

          arrReverse.comentarios.map(
            ({ comentario, foto, nombre, imagen }, i) => {
              const separa = nombre.split(' ', 2);
              const nombreUsuarioSinEspacio = separa[0] + ' ' + separa[1];
              const nombreValidado = nombreUsuarioSinEspacio.replace(
                'undefined',
                ''
              );
              if (imagen) {
                commentContent.innerHTML += `<div class="mt-4 mb-3"><img class="img__Comment" src="${foto}" alt="azlo" /><p class="float-right mt-2">${nombreValidado}</p></div><img class="img-fluid mt-3 mb-3 border-rad-10 " style="
    width: 200px;
    height: 200px;
" src="${imagen}" alt="azlo" /><p class="comment">${comentario}</p><hr class="mt-5" />`;
              } else {
                commentContent.innerHTML += `<div class="mt-4 mb-3"><img class="img__Comment" src="${foto}" alt="azlo" /><p class="float-right mt-2">${nombreValidado}</p></div><p class="comment">${comentario}</p><hr class="mt-5" />`;
              }
            }
          );
        });

      cont++;
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
      let arrTareas = [];
      if (doc.data().arrPages.pagesArr.tareas) {
        arrTareas = doc.data().arrPages.pagesArr.tareas;
      }
      arr.reverse().splice(i, 1);

      const arrPages = {
        pagesArr: {
          pagina: page,
          avisos: arr.reverse(),
          tareas: arrTareas,
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
            tareas: [],
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
    const selectPages3 = document.querySelector('#pagesAvisos3');
    const selectPages4 = document.querySelector('#pagesAvisosImage');
    selectPages.innerHTML = '';
    selectPages2.innerHTML = '';
    selectPages3.innerHTML = '';
    selectPages4.innerHTML = '';

    // $('#list-filter').html('');
    querySnapshot.forEach((doc) => {
      selectPages.innerHTML += `<option value='${doc.data().arrPages.pagesArr.pagina
        }'>${doc.data().arrPages.pagesArr.pagina}</option>`;
      selectPages2.innerHTML += `<option value='${doc.data().arrPages.pagesArr.pagina
        }'>${doc.data().arrPages.pagesArr.pagina}</option>`;
      selectPages3.innerHTML += `<option value='${doc.data().arrPages.pagesArr.pagina
        }'>${doc.data().arrPages.pagesArr.pagina}</option>`;
      selectPages4.innerHTML += `<option value='${doc.data().arrPages.pagesArr.pagina
        }'>${doc.data().arrPages.pagesArr.pagina}</option>`;
    });
  });

db.collection('col-sala')
  .doc('azlo')
  .collection('col-usuarios')
  .onSnapshot((querySnapshot) => {
    const listUsers = document.querySelector('#list-user');

    const listSelect = document.querySelector('#userListT');

    listUsers.innerHTML = '';
    listSelect.innerHTML = '';

    // $('#list-filter').html('');
    querySnapshot.forEach((doc) => {
      listUsers.innerHTML += `
              <div class="credit-wrapper">
                <img class="img__list" src="${doc.data().foto}" alt="azlo" />
                <div class="credit-name">
                  <div class="credit-type">${doc.data().nombre}</div>
                  <div class="credit-status">${doc.data().email}</div>
                </div>                
              </div>`;
      listSelect.innerHTML += `<option value='${doc.data().nombre}'>${doc.data().nombre
        }</option>`;
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
              const arrComent = [];
              let arrTareas = [];
              if (doc.data().arrPages.pagesArr.tareas) {
                arrTareas = doc.data().arrPages.pagesArr.tareas;
              }

              arrAvisos.push({
                aviso: arrAviso,
                nombre: arrNombre,
                imagen: arrImage,
                hora: arrHora,
                comentarios: arrComent,
              });
              const arrPages = {
                pagesArr: {
                  pagina: selectPage,
                  avisos: arrAvisos,
                  tareas: arrTareas,
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
                      title: 'Aviso registrado',
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
              let arrTareas = [];
              if (doc.data().arrPages.pagesArr.tareas) {
                arrTareas = doc.data().arrPages.pagesArr.tareas;
              }

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
                  tareas: arrTareas,
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
const mostrarDatosComment = (page, index) => {
  document.querySelector('#pagecomentarioText').value = page;
  document.querySelector('#idcomentarioText').value = index;

  $('#modalComentarios').modal('show');
};
const mostrarDataCommentImg = (page, index) => {
  document.querySelector('#pagecomentarioTextImg').value = page;
  document.querySelector('#idcomentarioTextImg').value = index;

  $('#modalComentariosImg').modal('show');
};
// Registrar coemntarios
function fileValidation2() {
  var fileCurriculum = document.getElementById('imagenText2').value;
  var allowedExtensions = /(.jpeg|.JPEG|.jpg|.JPG|.png|.PNG|.gif|.GIF)$/i;
  if (!allowedExtensions.exec(fileCurriculum)) {
    Swal.fire({
      icon: 'error',
      title: 'Tu formato de archivo no es el correcto',
      text: 'Solo puedes subir imagenes, no archivos.',
      confirmButtonText: 'Aceptar',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        document.getElementById('imagenText2').value = '';
      }
    });
    document.getElementById('imagenText2').value = '';
    return false;
  }

  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer);
      toast.addEventListener('mouseleave', Swal.resumeTimer);
    },
  });

  Toast.fire({
    html: `  <div id="subiendo-img">
        <img class="img-fluid load-image parpadea" src="../img/cargando.gif" alt="azlo" />
        <p class="text-center parpadea">Subiendo imagen...</p>
    </div>`,
  });
  var fileSize = $('#imagenText2')[0].files[0].size;
  var siezekiloByte = parseInt(fileSize / 1024 / 1024);

  if (siezekiloByte < 5) {
    registrarComentarioImg();
  } else {
    Swal.fire({
      icon: 'error',
      title: 'La imagen excede el tamaño permitido',
      text: `El tamaño de la imagen es ${siezekiloByte} megas y el limite es de 5 megas.`,
      confirmButtonText: 'Aceptar',
    }).then((result) => {
      if (result.isConfirmed) {
        document.getElementById('imagenText2').value = '';
      }
    });
    return false;
  }
}

const registrarComentarioImg = () => {
  const comentario = document.querySelector('#comentarioTextImg').value;
  const page = document.querySelector('#pagecomentarioTextImg').value;
  const id = document.querySelector('#idcomentarioTextImg').value;

  if (comentario === '') {
    Swal.fire({
      title: 'El comentario esta vacío',
      icon: 'info',
      html: 'El comentario no puede quedar vacío',
      showCloseButton: true,
      showCancelButton: false,
      focusConfirm: false,
      confirmButtonText: 'Aceptar',
      cancelButtonAriaLabel: 'Thumbs down',
    });
    return false;
  }

  const dbStorage = firebase.storage();
  const storageRef = dbStorage.ref();

  var mensajeRef;
  var downloadURL;
  var imagenURL;
  var imagen;
  var fileInputField = document.getElementById('imagenText2');
  var fecha = new Date();

  if (fileInputField.value == '') {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'No puedes subir una imagen vacía',
      confirmButtonText: 'Aceptar',
    });
    return false;
  }

  docPagesRef
    .doc('pages' + page.replace(' ', '') + 'azlo')
    .get()
    .then((doc) => {
      const arrAvisos = doc.data().arrPages.pagesArr.avisos;

      const hoy = new Date();
      const hora = hoy.getHours() + ':' + hoy.getMinutes();

      // Image
      if (fileInputField.files.item(0) != null) {
        firebase.auth().onAuthStateChanged(function (user) {
          imagen = fileInputField.files.item(0);
          const { displayName, photoURL } = user;
          var imagenStorageRef = storageRef.child(
            'azloImagenes/' + page.replace(' ', '') + '/' + imagen.name
          );

          imagenStorageRef.put(imagen).then(function (snapshot) {
            snapshot.ref
              .getDownloadURL()
              .then(function (downloadURL) {
                imagenURL = downloadURL;
              })
              .then(function () {
                if (doc.data().arrPages.pagesArr.avisos.comentarios) {
                  const arrAviso = doc
                    .data()
                    .arrPages.pagesArr.avisos.reverse()[id].aviso;
                  const arrNombre = doc
                    .data()
                    .arrPages.pagesArr.avisos.reverse()[id].nombre;
                  const arrImage = doc
                    .data()
                    .arrPages.pagesArr.avisos.reverse()[id].imagen;
                  const arrHora = doc.data().arrPages.pagesArr.avisos.reverse()[
                    id
                  ].hora;
                  const arrComent = [];
                  arrComent.push({
                    comentario: comentario,
                    nombre: displayName,
                    foto: photoURL,
                    imagen: imagenURL,
                  });
                  let arrTareas = [];
                  if (doc.data().arrPages.pagesArr.tareas) {
                    arrTareas = doc.data().arrPages.pagesArr.tareas;
                  }
                  let imageContent = [];

                  if (
                    doc.data().arrPages.pagesArr.avisos.reverse()[id].imageAviso
                  ) {
                    imageContent = doc
                      .data()
                      .arrPages.pagesArr.avisos.reverse()[id].imageAviso;
                  }

                  const arrAvisos2 = {
                    aviso: arrAviso,
                    nombre: arrNombre,
                    imagen: arrImage,

                    hora: arrHora,
                    comentarios: arrComent,
                  };
                  arrAvisos.reverse().splice(id, 1, arrAvisos2);

                  const arrPages = {
                    pagesArr: {
                      pagina: page,
                      avisos: arrAvisos.reverse(),
                      tareas: arrTareas,
                    },
                  };
                  return new Promise((resolve, reject) => {
                    docPagesRef
                      .doc('pages' + page + 'azlo')
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
                            toast.addEventListener(
                              'mouseenter',
                              Swal.stopTimer
                            );
                            toast.addEventListener(
                              'mouseleave',
                              Swal.resumeTimer
                            );
                          },
                        });
                        document.querySelector('#comentarioTextImg').value = '';
                        Toast.fire({
                          icon: 'success',
                          title: 'Comentario registrado',
                        });
                      })
                      .catch(function (error) {
                        reject(error);
                      });
                  });
                } else {
                  const arrAviso = doc
                    .data()
                    .arrPages.pagesArr.avisos.reverse()[id].aviso;
                  const arrNombre = doc
                    .data()
                    .arrPages.pagesArr.avisos.reverse()[id].nombre;
                  const arrImage = doc
                    .data()
                    .arrPages.pagesArr.avisos.reverse()[id].imagen;
                  const arrHora = doc.data().arrPages.pagesArr.avisos.reverse()[
                    id
                  ].hora;
                  const arrComent = doc
                    .data()
                    .arrPages.pagesArr.avisos.reverse()[id].comentarios;
                  arrComent.push({
                    comentario: comentario,
                    nombre: displayName,
                    foto: photoURL,
                    imagen: imagenURL,
                  });
                  let arrTareas = [];
                  if (doc.data().arrPages.pagesArr.tareas) {
                    arrTareas = doc.data().arrPages.pagesArr.tareas;
                  }
                  let imageContent = [];

                  if (
                    doc.data().arrPages.pagesArr.avisos.reverse()[id].imageAviso
                  ) {
                    imageContent = doc
                      .data()
                      .arrPages.pagesArr.avisos.reverse()[id].imageAviso;
                  }
                  const arrAvisos2 = {
                    aviso: arrAviso,
                    nombre: arrNombre,
                    imagen: arrImage,
                    imageAviso: imageContent,
                    hora: arrHora,
                    comentarios: arrComent,
                  };
                  arrAvisos.reverse().splice(id, 1, arrAvisos2);
                  console.log(arrAvisos);
                  const arrPages = {
                    pagesArr: {
                      pagina: page,
                      avisos: arrAvisos.reverse(),
                      tareas: arrTareas,
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
                            toast.addEventListener(
                              'mouseenter',
                              Swal.stopTimer
                            );
                            toast.addEventListener(
                              'mouseleave',
                              Swal.resumeTimer
                            );
                          },
                        });
                        document.querySelector('#comentarioTextImg').value = '';
                        Toast.fire({
                          icon: 'success',
                          title: 'Comentario registrado',
                        });
                      })
                      .catch(function (error) {
                        reject(error);
                      });
                  });
                }
              });
          });
        });
      }
    })
    .catch((error) => {
      console.log('Error getting document:', error);
    });
};
const registrarComentario = () => {
  const comentario = document.querySelector('#comentarioText').value;
  const page = document.querySelector('#pagecomentarioText').value;
  const id = document.querySelector('#idcomentarioText').value;

  if (comentario === '') {
    Swal.fire({
      title: 'El comentario esta vacío',
      icon: 'info',
      html: 'El comentario no puede quedar vacío',
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
    .get()
    .then((doc) => {
      const arrAvisos = doc.data().arrPages.pagesArr.avisos;

      if (doc.data().arrPages.pagesArr.avisos.comentarios) {
        const arrAviso = doc.data().arrPages.pagesArr.avisos.reverse()[
          id
        ].aviso;
        const arrNombre = doc.data().arrPages.pagesArr.avisos.reverse()[
          id
        ].nombre;
        const arrImage = doc.data().arrPages.pagesArr.avisos.reverse()[
          id
        ].imagen;
        const arrHora = doc.data().arrPages.pagesArr.avisos.reverse()[id].hora;
        const arrComent = [];
        arrComent.push(comentario);
        let arrTareas = [];
        if (doc.data().arrPages.pagesArr.tareas) {
          arrTareas = doc.data().arrPages.pagesArr.tareas;
        }
        let imageContent = [];

        if (doc.data().arrPages.pagesArr.avisos.reverse()[id].imageAviso) {
          imageContent = doc.data().arrPages.pagesArr.avisos.reverse()[
            id
          ].imageAviso;
        }

        const arrAvisos2 = {
          aviso: arrAviso,
          nombre: arrNombre,
          imagen: arrImage,

          hora: arrHora,
          comentarios: arrComent,
        };
        arrAvisos.reverse().splice(id, 1, arrAvisos2);

        const arrPages = {
          pagesArr: {
            pagina: page,
            avisos: arrAvisos.reverse(),
            tareas: arrTareas,
          },
        };
        return new Promise((resolve, reject) => {
          docPagesRef
            .doc('pages' + page + 'azlo')
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
              document.querySelector('#comentarioText').value = '';
              Toast.fire({
                icon: 'success',
                title: 'Comentario registrado',
              });
            })
            .catch(function (error) {
              reject(error);
            });
        });
      } else {
        firebase.auth().onAuthStateChanged(function (user) {
          const { displayName, photoURL } = user;
          const arrAviso = doc.data().arrPages.pagesArr.avisos.reverse()[
            id
          ].aviso;
          const arrNombre = doc.data().arrPages.pagesArr.avisos.reverse()[
            id
          ].nombre;
          const arrImage = doc.data().arrPages.pagesArr.avisos.reverse()[
            id
          ].imagen;
          const arrHora = doc.data().arrPages.pagesArr.avisos.reverse()[
            id
          ].hora;
          const arrComent = doc.data().arrPages.pagesArr.avisos.reverse()[
            id
          ].comentarios;
          arrComent.push({
            comentario: comentario,
            nombre: displayName,
            foto: photoURL,
          });
          let arrTareas = [];
          if (doc.data().arrPages.pagesArr.tareas) {
            arrTareas = doc.data().arrPages.pagesArr.tareas;
          }
          let imageContent = [];

          if (doc.data().arrPages.pagesArr.avisos.reverse()[id].imageAviso) {
            imageContent = doc.data().arrPages.pagesArr.avisos.reverse()[
              id
            ].imageAviso;
          }
          const arrAvisos2 = {
            aviso: arrAviso,
            nombre: arrNombre,
            imagen: arrImage,
            imageAviso: imageContent,
            hora: arrHora,
            comentarios: arrComent,
          };
          arrAvisos.reverse().splice(id, 1, arrAvisos2);
          console.log(arrAvisos);
          const arrPages = {
            pagesArr: {
              pagina: page,
              avisos: arrAvisos.reverse(),
              tareas: arrTareas,
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
                document.querySelector('#comentarioText').value = '';
                Toast.fire({
                  icon: 'success',
                  title: 'Comentario registrado',
                });
              })
              .catch(function (error) {
                reject(error);
              });
          });
        });
      }
    })
    .catch((error) => {
      console.log('Error getting document:', error);
    });
};

// Registrar tareas

const registrarTarea = () => {
  const tarea = document.querySelector('#tareaText').value;
  const user = document.querySelector('#userListT').value;
  const page = document.querySelector('#pagesAvisos3').value;

  if (tarea === '') {
    Swal.fire({
      title: 'Tarea vacía',
      icon: 'info',
      html: 'La tarea no puede quedar vacía',
      showCloseButton: true,
      showCancelButton: false,
      focusConfirm: false,
      confirmButtonText: 'Aceptar',
      cancelButtonAriaLabel: 'Thumbs down',
    });
    return false;
  } else if (user === '') {
    Swal.fire({
      title: 'Usuario vacío',
      icon: 'info',
      html: 'El usuario no puede quedar vacío',
      showCloseButton: true,
      showCancelButton: false,
      focusConfirm: false,
      confirmButtonText: 'Aceptar',
      cancelButtonAriaLabel: 'Thumbs down',
    });
    return false;
  } else if (page === '') {
    Swal.fire({
      title: 'Página vacío',
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
    .doc('pages' + page.replace(' ', '') + 'azlo')
    .get()
    .then((doc) => {
      const arrAvisos = doc.data().arrPages.pagesArr.avisos;

      if (!doc.data().arrPages.pagesArr.tareas) {
        let arrTareas = [];
        arrTareas.push({
          tarea: tarea,
          usuario: user,
          pagina: page,
          status: 'waiting',
        });

        const arrPages = {
          pagesArr: {
            pagina: page,
            avisos: arrAvisos,
            tareas: arrTareas,
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
              document.querySelector('#tareaText').value = '';
              Toast.fire({
                icon: 'success',
                title: 'Tarea asignada',
              });
            })
            .catch(function (error) {
              reject(error);
            });
        });
      } else {
        const arrTareas = doc.data().arrPages.pagesArr.tareas;
        console.log('Tareas', arrTareas);
        arrTareas.push({
          tarea: tarea,
          usuario: user,
          pagina: page,
          status: 'waiting',
        });
        const arrPages = {
          pagesArr: {
            pagina: page,
            avisos: arrAvisos,
            tareas: arrTareas,
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
              document.querySelector('#tareaText').value = '';
              Toast.fire({
                icon: 'success',
                title: 'Tarea asignada',
              });
            })
            .catch(function (error) {
              reject(error);
            });
        });
      }
    })
    .catch((error) => {
      console.log('Error getting document:', error);
    });
};

// Tareas

const eliminarTarea = (i, page) => {
  const tareaRef = db
    .collection('col-sala')
    .doc('azlo')
    .collection('col-pages')
    .doc('pages' + page.replace(' ', '') + 'azlo');
  tareaRef
    .get()
    .then((doc) => {
      const arr = doc.data().arrPages.pagesArr.avisos;
      const arrTareas = doc.data().arrPages.pagesArr.tareas;

      arrTareas.splice(i, 1);

      const arrPages = {
        pagesArr: {
          pagina: page,
          avisos: arr,
          tareas: arrTareas,
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
              title: 'Tarea eliminada',
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
const tareaIncompleta = (i, page) => {
  const tareaRef = db
    .collection('col-sala')
    .doc('azlo')
    .collection('col-pages')
    .doc('pages' + page.replace(' ', '') + 'azlo');
  tareaRef
    .get()
    .then((doc) => {
      const arr = doc.data().arrPages.pagesArr.avisos;
      const arrTareas = doc.data().arrPages.pagesArr.tareas;
      const arrTareas2 = doc.data().arrPages.pagesArr.tareas;
      arrTareas.reverse().splice(i, 1, {
        pagina: page,
        status: 'pending',
        tarea: doc.data().arrPages.pagesArr.tareas.reverse()[i].tarea,
        usuario: doc.data().arrPages.pagesArr.tareas.reverse()[i].usuario,
      });

      const arrPages = {
        pagesArr: {
          pagina: page,
          avisos: arr,
          tareas: arrTareas.reverse(),
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
              title: 'Tarea actualizada',
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

const tareaCompletada = (i, page) => {
  const tareaRef = db
    .collection('col-sala')
    .doc('azlo')
    .collection('col-pages')
    .doc('pages' + page.replace(' ', '') + 'azlo');
  tareaRef
    .get()
    .then((doc) => {
      const arr = doc.data().arrPages.pagesArr.avisos;
      const arrTareas = doc.data().arrPages.pagesArr.tareas;
      const arrTareas2 = doc.data().arrPages.pagesArr.tareas;
      arrTareas.reverse().splice(i, 1, {
        pagina: page,
        status: 'completed',
        tarea: doc.data().arrPages.pagesArr.tareas.reverse()[i].tarea,
        usuario: doc.data().arrPages.pagesArr.tareas.reverse()[i].usuario,
      });

      const arrPages = {
        pagesArr: {
          pagina: page,
          avisos: arr,
          tareas: arrTareas.reverse(),
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
              title: 'Tarea actualizada',
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

// Subir imagenes

function registrarAvisoImage() {
  const aviso = document.querySelector('#avisoText2').value;
  const selectPage = document.querySelector('#pagesAvisosImage').value;
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
  const dbStorage = firebase.storage();
  const storageRef = dbStorage.ref();

  var mensajeRef;
  var downloadURL;
  var imagenURL;
  var imagen;
  var fileInputField = document.getElementById('imagenText');
  var fecha = new Date();

  if (fileInputField.value == '') {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'No puedes subir una imagen vacía',
      confirmButtonText: 'Aceptar',
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

            // Image
            if (fileInputField.files.item(0) != null) {
              imagen = fileInputField.files.item(0);

              var imagenStorageRef = storageRef.child(
                'azloImagenes/' +
                selectPage.replace(' ', '') +
                '/' +
                imagen.name
              );

              imagenStorageRef.put(imagen).then(function (snapshot) {
                snapshot.ref
                  .getDownloadURL()
                  .then(function (downloadURL) {
                    imagenURL = downloadURL;
                  })
                  .then(function () {
                    if (arrAvisos) {
                      const arrAviso = [];
                      arrAviso.push(aviso);
                      const arrNombre = [];
                      arrNombre.push(displayName);
                      const arrImage = [];
                      arrImage.push(photoURL);
                      const arrHora = [];
                      arrHora.push(hora);
                      const arrComent = [];
                      const arrImageContent = [];
                      arrImageContent.push(imagenURL);
                      let arrTareas = [];
                      if (doc.data().arrPages.pagesArr.tareas) {
                        arrTareas = doc.data().arrPages.pagesArr.tareas;
                      }

                      arrAvisos.push({
                        aviso: arrAviso,
                        nombre: arrNombre,
                        imagen: arrImage,
                        imageAviso: arrImageContent,
                        hora: arrHora,
                        comentarios: arrComent,
                      });
                      const arrPages = {
                        pagesArr: {
                          pagina: selectPage,
                          avisos: arrAvisos,
                          tareas: arrTareas,
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
                                toast.addEventListener(
                                  'mouseenter',
                                  Swal.stopTimer
                                );
                                toast.addEventListener(
                                  'mouseleave',
                                  Swal.resumeTimer
                                );
                              },
                            });
                            document.querySelector('#avisoText2').value = '';
                            Toast.fire({
                              icon: 'success',
                              title: 'Aviso registrado',
                            });
                          })
                          .catch(function (error) {
                            reject(error);
                          });
                      });
                    } else {
                      const arrAviso =
                        doc.data().arrPages.pagesArr.avisos.aviso;
                      arrAviso.push(aviso);
                      const arrNombre =
                        doc.data().arrPages.pagesArr.avisos.nombre;
                      arrNombre.push(displayName);
                      const arrImage =
                        doc.data().arrPages.pagesArr.avisos.imagen;
                      arrImage.push(photoURL);
                      const arrHora = doc.data().arrPages.pagesArr.avisos.hora;
                      arrHora.push(hora);
                      const arrImageContent =
                        doc.data().arrPages.pagesArr.avisos.imageAviso;
                      arrImageContent.push(imagenURL);
                      let arrTareas = [];
                      if (doc.data().arrPages.pagesArr.tareas) {
                        arrTareas = doc.data().arrPages.pagesArr.tareas;
                      }

                      arrAvisos.push({
                        aviso: arrAviso,
                        nombre: arrNombre,
                        imagen: arrImage,
                        imageAviso: arrImageContent,
                        hora: arrHora,
                      });
                      const arrPages = {
                        pagesArr: {
                          pagina: selectPage,
                          avisos: arrAvisos,
                          tareas: arrTareas,
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
                                toast.addEventListener(
                                  'mouseenter',
                                  Swal.stopTimer
                                );
                                toast.addEventListener(
                                  'mouseleave',
                                  Swal.resumeTimer
                                );
                              },
                            });
                            document.querySelector('#avisoText2').value = '';
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
}

function fileValidation() {
  var fileCurriculum = document.getElementById('imagenText').value;
  var allowedExtensions = /(.jpeg|.JPEG|.jpg|.JPG|.png|.PNG|.gif|.GIF)$/i;
  if (!allowedExtensions.exec(fileCurriculum)) {
    Swal.fire({
      icon: 'error',
      title: 'Tu formato de archivo no es el correcto',
      text: 'Solo puedes subir imagenes, no archivos.',
      confirmButtonText: 'Aceptar',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        document.getElementById('imagenText').value = '';
      }
    });
    document.getElementById('imagenText').value = '';
    return false;
  }

  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer);
      toast.addEventListener('mouseleave', Swal.resumeTimer);
    },
  });

  Toast.fire({
    html: `  <div id="subiendo-img">
        <img class="img-fluid load-image parpadea" src="../img/cargando.gif" alt="azlo" />
        <p class="text-center parpadea">Subiendo imagen...</p>
    </div>`,
  });
  var fileSize = $('#imagenText')[0].files[0].size;
  var siezekiloByte = parseInt(fileSize / 1024 / 1024);

  if (siezekiloByte < 5) {
    registrarAvisoImage();
  } else {
    Swal.fire({
      icon: 'error',
      title: 'La imagen excede el tamaño permitido',
      text: `El tamaño de la imagen es ${siezekiloByte} megas y el limite es de 5 megas.`,
      confirmButtonText: 'Aceptar',
    }).then((result) => {
      if (result.isConfirmed) {
        document.getElementById('imagenText').value = '';
      }
    });
    return false;
  }
}

// Enviar emails

const sendEmail = () => {
  let datos = {
    nombre: 'Daniel Uribe García',
    email: 'daniel.dg77.dg77@gmail.com',
  };


  $.ajax({
    type: "POST",
    url: "mail.php",
    data: datos,
    beforeSend: function () {

      // let timerInterval
      // Swal.fire({
      //   title: 'Auto close alert!',
      //   html: 'I will close in <b></b> milliseconds.',

      //   timerProgressBar: true,
      //   didOpen: () => {
      //     Swal.showLoading()
      //     timerInterval = setInterval(() => {
      //       const content = Swal.getHtmlContainer()
      //       if (content) {
      //         const b = content.querySelector('b')
      //         if (b) {
      //           b.textContent = Swal.getTimerLeft()
      //         }
      //       }
      //     }, 100)
      //   },
      //   willClose: () => {
      //     clearInterval(timerInterval)
      //   }
      // }).then((result) => {
      //   /* Read more about handling dismissals below */
      //   if (result.dismiss === Swal.DismissReason.timer) {
      //     console.log('I was closed by the timer')
      //   }
      // })
    },
    success: function (msg) {
      console.log(msg);
      if (msg.res == false) {
        Swal.fire({
          icon: 'error',
          title: 'Ups...',
          text: 'ERROR',
          confirmButtonText: 'Aceptar',
        });


      } else if (msg.res == true) {
        console.log('true');

      }


    },
    error: function (data) {
      var errors = data.responseJSON;
      if (errors) {
        $.each(errors, function (i) {
          console.log(errors[i]);
        });
      }
    }
  });
}

sendEmail();