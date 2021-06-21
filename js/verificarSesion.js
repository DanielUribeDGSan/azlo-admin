var docPagesRef = db.collection('col-sala').doc('azlo').collection('col-pages');

firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    const { displayName, email, photoURL } = user;

    const arrPermisos = [
      "daniel@azlo.online",
    ];

    const validPermiso = arrPermisos.includes(email);
    console.log(validPermiso);
    if (validPermiso == false) {
      $('.validClass').hide();
    } else {
      $('.validAll').hide();
    }


    const nameUser = document.querySelector('#nameUser');
    const imageUser = document.querySelector('#imageUser');
    const imageUser2 = document.querySelector('#imgUser2');
    const nameUser2 = document.querySelector('.discount-name');
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


      if (cont === 0) {
        pages.innerHTML += ` <li class="nav-item" role="presentation">
                  <a
                    class="nav-link active"
                    id="pills${doc
            .data()
            .arrPages.pagesArr.pagina.replace(/ /g, "")}"
                    data-toggle="pill"
                    href="#${doc
            .data()
            .arrPages.pagesArr.pagina.replace(/ /g, "")}"
                    role="tab"
                    aria-controls="pills-home"
                    aria-selected="true"
                    >${doc.data().arrPages.pagesArr.pagina}</a
                  >
                </li>`;

        tabContent.innerHTML += `<div
          class="tab-pane fade show active"
          id="${doc.data().arrPages.pagesArr.pagina.replace(/ /g, "")}"
          role="tabpanel"
          aria-labelledby="pills${doc
            .data()
            .arrPages.pagesArr.pagina.replace(/ /g, "")}"
          > 

          <div class="destination mt-3">
                  <div class="row w-100" id='${doc
            .data()
            .arrPages.pagesArr.pagina.replace(/ /g, "")}2'>
                  </div>
                </div>
          
          </div>
          
          `;
        pages2.innerHTML += ` <li class="nav-item" role="presentation">
                  <a
                    class="nav-link active"
                    id="pills${doc
            .data()
            .arrPages.pagesArr.pagina.replace(/ /g, "")}t2"
                    data-toggle="pill"
                    href="#${doc
            .data()
            .arrPages.pagesArr.pagina.replace(/ /g, "")}t2"
                    role="tab"
                    aria-controls="pills-home"
                    aria-selected="true"
                    >${doc.data().arrPages.pagesArr.pagina}</a
                  >
                </li>`;

        tabContent2.innerHTML += `<div
          class="tab-pane fade show active"
          id="${doc.data().arrPages.pagesArr.pagina.replace(/ /g, "")}t2"
          role="tabpanel"
          aria-labelledby="pills${doc
            .data()
            .arrPages.pagesArr.pagina.replace(/ /g, "")}t2"
          > 

          <div class=" mt-3" id='${doc
            .data()
            .arrPages.pagesArr.pagina.replace(/ /g, "")}3'>
                 
          
          </div>
          
          `;
      } else {
        pages.innerHTML += ` <li class="nav-item" role="presentation">
                  <a
                    class="nav-link "
                    id="pills${doc
            .data()
            .arrPages.pagesArr.pagina.replace(/ /g, "")}"
                    data-toggle="pill"
                    href="#${doc
            .data()
            .arrPages.pagesArr.pagina.replace(/ /g, "")}"
                    role="tab"
                    aria-controls="pills-home"
                    aria-selected="true"
                    >${doc.data().arrPages.pagesArr.pagina}</a
                  >
                </li>`;

        tabContent.innerHTML += `<div
          class="tab-pane fade show "
          id="${doc.data().arrPages.pagesArr.pagina.replace(/ /g, "")}"
          role="tabpanel"
          aria-labelledby="pills${doc
            .data()
            .arrPages.pagesArr.pagina.replace(/ /g, "")}"
          > 
            <div class="destination mt-3">
                  <div class="row w-100" id='${doc
            .data()
            .arrPages.pagesArr.pagina.replace(/ /g, "")}2'>
                  </div>
                </div>
          </div>
          
          `;
        pages2.innerHTML += ` <li class="nav-item" role="presentation">
                  <a
                    class="nav-link "
                    id="pills${doc
            .data()
            .arrPages.pagesArr.pagina.replace(/ /g, "")}t2"
                    data-toggle="pill"
                    href="#${doc
            .data()
            .arrPages.pagesArr.pagina.replace(/ /g, "")}t2"
                    role="tab"
                    aria-controls="pills-home"
                    aria-selected="true"
                    >${doc.data().arrPages.pagesArr.pagina}</a
                  >
                </li>`;

        tabContent2.innerHTML += `<div
          class="tab-pane fade show "
          id="${doc.data().arrPages.pagesArr.pagina.replace(/ /g, "")}t2"
          role="tabpanel"
          aria-labelledby="pills${doc
            .data()
            .arrPages.pagesArr.pagina.replace(/ /g, "")}t2"
          > 
           <div class=" mt-3" id='${doc
            .data()
            .arrPages.pagesArr.pagina.replace(/ /g, "")}3'>
                           
          </div>
          </div>
          
          `;
      }

      const item2 = document.querySelector(
        `#${doc.data().arrPages.pagesArr.pagina.replace(/ /g, "")}3`
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
          .arrPages.pagesArr.pagina.replace(/ /g, "")}5">
                 
                </tbody>
              </table>`;

      const tableQ = document.querySelector(
        `#${doc.data().arrPages.pagesArr.pagina.replace(/ /g, "")}5`
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
                  <span class="time pointer validClass" id="dropdownMenuButton2"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false">Config</span>

                  <div
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenuButton2"
                  >
                    <a
                      class="dropdown-item pointer validClass" onclick="tareaIncompleta(${i},'${doc.data().arrPages.pagesArr.pagina
              }')"
                      >Tarea incompleta
                      
                      <i class="fas fa-chalkboard float-right mt-1"></i>
                    </a>
                    <a class="dropdown-item pointer validClass" onclick="eliminarTarea(${i},'${doc.data().arrPages.pagesArr.pagina
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
                  <span class="time pointer validClass" id="dropdownMenuButton2"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false">Config</span>

                  <div
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenuButton2"
                  >
                    <a
                      class="dropdown-item pointer validClass" onclick="tareaIncompleta(${i},'${doc.data().arrPages.pagesArr.pagina
              }')"
                      >Tarea incompleta
                      
                      <i class="fas fa-chalkboard float-right mt-1"></i>
                    </a>
                    <a class="dropdown-item pointer validClass" onclick="eliminarTarea(${i},'${doc.data().arrPages.pagesArr.pagina
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
                  <span class="time pointer validClass" id="dropdownMenuButton2"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false">Config</span>

                  <div
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenuButton2"
                  >
                    <a
                      class="dropdown-item pointer validClass" onclick="tareaIncompleta(${i},'${doc.data().arrPages.pagesArr.pagina
              }')"
                      >Tarea incompleta
                      
                      <i class="fas fa-chalkboard float-right mt-1"></i>
                    </a>
                    <a class="dropdown-item pointer validClass" onclick="eliminarTarea(${i},'${doc.data().arrPages.pagesArr.pagina
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
        `#${doc.data().arrPages.pagesArr.pagina.replace(/ /g, "")}2`
      );
      console.log(item);
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
  <a class="dropdown-item pointer validClass" onclick="deleteAviso(${i},'${doc.data().arrPages.pagesArr.pagina
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
                .arrPages.pagesArr.pagina.replace(/ /g, "")}'>
                          
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
  <a class="dropdown-item pointer validClass" onclick="deleteAviso(${i},'${doc.data().arrPages.pagesArr.pagina
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
                .arrPages.pagesArr.pagina.replace(/ /g, "")}'>
                          
                          </div>
                      </div>
                      </div>`;
          }

          const commentContent = document.querySelector(
            `#comment${i + 80}${doc
              .data()
              .arrPages.pagesArr.pagina.replace(/ /g, "")}`
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

  Swal.fire({
    title: '¿Está seguro(a) de eliminar este aviso?',
    text: "No podrás revertir esto.",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si, eliminalo!',
    cancelButtonText: 'Cancelar',
  }).then((result) => {
    if (result.isConfirmed) {
      const videoRef = db
        .collection('col-sala')
        .doc('azlo')
        .collection('col-pages')
        .doc('pages' + page.replace(/ /g, "") + 'azlo');
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
              .doc('pages' + page.replace(/ /g, "") + 'azlo')
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
    }
  })


};

const eliminarPaginas = () => {
  Swal.fire({
    title: '¿Está seguro(a) de eliminar esta página?',
    text: "No podrás revertir esto.",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si, eliminala!',
    cancelButtonText: 'Cancelar',
  }).then((result) => {
    if (result.isConfirmed) {
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
        .doc('pages' + page.replace(/ /g, "") + 'azlo')
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
    }
  })

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
    .doc('pages' + namePage.replace(/ /g, "") + 'azlo');
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
      .doc('pages' + namePage.replace(/ /g, "") + 'azlo')
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
    .doc('pages' + selectPage.replace(/ /g, "") + 'azlo')
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
                  .doc('pages' + selectPage.replace(/ /g, "") + 'azlo')
                  .set({
                    arrPages,
                  })
                  .then(function (docRef) {
                    resolve(arrPages);
                    sendEmailAviso();
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
                    sendEmailAviso();
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
    .doc('pages' + page.replace(/ /g, "") + 'azlo')
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
            'azloImagenes/' + page.replace(/ /g, "") + '/' + imagen.name
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
                        sendEmailComentario();
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
                      .doc('pages' + page.replace(/ /g, "") + 'azlo')
                      .set({
                        arrPages,
                      })
                      .then(function (docRef) {
                        resolve(arrPages);
                        sendEmailComentario();

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
    .doc('pages' + page.replace(/ /g, "") + 'azlo')
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
              sendEmailComentario();

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
              .doc('pages' + page.replace(/ /g, "") + 'azlo')
              .set({
                arrPages,
              })
              .then(function (docRef) {
                resolve(arrPages);
                sendEmailComentario();

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
    .doc('pages' + page.replace(/ /g, "") + 'azlo')
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
            .doc('pages' + page.replace(/ /g, "") + 'azlo')
            .set({
              arrPages,
            })
            .then(function (docRef) {
              resolve(arrPages);
              sendEmailTarea(page, user);
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
            .doc('pages' + page.replace(/ /g, "") + 'azlo')
            .set({
              arrPages,
            })
            .then(function (docRef) {
              resolve(arrPages);
              sendEmailTarea(page, user);

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
  Swal.fire({
    title: '¿Está seguro(a) de eliminar esta tarea?',
    text: "No podrás revertir esto.",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si, eliminala!',
    cancelButtonText: 'Cancelar',
  }).then((result) => {
    if (result.isConfirmed) {
      const tareaRef = db
        .collection('col-sala')
        .doc('azlo')
        .collection('col-pages')
        .doc('pages' + page.replace(/ /g, "") + 'azlo');
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
              .doc('pages' + page.replace(/ /g, "") + 'azlo')
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
    }
  })



};
const tareaIncompleta = (i, page) => {
  const tareaRef = db
    .collection('col-sala')
    .doc('azlo')
    .collection('col-pages')
    .doc('pages' + page.replace(/ /g, "") + 'azlo');
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
          .doc('pages' + page.replace(/ /g, "") + 'azlo')
          .set({
            arrPages,
          })
          .then(function (docRef) {
            resolve(arrPages);
            sendEmailTarea(page, doc.data().arrPages.pagesArr.tareas.reverse()[i].usuario);
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
    .doc('pages' + page.replace(/ /g, "") + 'azlo');
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
          .doc('pages' + page.replace(/ /g, "") + 'azlo')
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
    .doc('pages' + selectPage.replace(/ /g, "") + 'azlo')
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
                selectPage.replace(/ /g, "") +
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
                          .doc('pages' + selectPage.replace(/ /g, "") + 'azlo')
                          .set({
                            arrPages,
                          })
                          .then(function (docRef) {
                            resolve(arrPages);
                            sendEmailAviso();
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
                            sendEmailAviso();
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

const sendEmailAviso = () => {

  db.collection('col-sala')
    .doc('azlo')
    .collection('col-usuarios')
    .get()
    .then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        sendEmailFirebaseAviso(doc.data().email, doc.data().nombre);
      })
    })
    .catch((error) => {
      console.log('Error getting document:', error);
    });


}

const sendEmailComentario = () => {

  db.collection('col-sala')
    .doc('azlo')
    .collection('col-usuarios')
    .get()
    .then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        sendEmailFirebaseComentario(doc.data().email, doc.data().nombre);
      })
    })
    .catch((error) => {
      console.log('Error getting document:', error);
    });
}

const sendEmailTarea = (pagina, nombre) => {

  db.collection('col-sala')
    .doc('azlo')
    .collection('col-usuarios').where('nombre', '==', nombre)
    .get()
    .then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        sendEmailFirebaseTarea(doc.data().email, nombre, pagina);
      })
    })
    .catch((error) => {
      console.log('Error getting document:', error);
    });
}


const sendEmailFirebaseAviso = (email, nombre) => {
  db.collection('mail').add({
    to: email,
    message: {
      subject: 'Nuevo aviso',
      html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html
  xmlns="http://www.w3.org/1999/xhtml"
  xmlns:o="urn:schemas-microsoft-com:office:office"
  style="
    width: 100%;
    font-family: open sans, helvetica neue, helvetica, arial, sans-serif;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    padding: 0;
    margin: 0;
  "
>
  <head>
    <meta charset="UTF-8" />
    <meta content="width=device-width, initial-scale=1" name="viewport" />
    <meta name="x-apple-disable-message-reformatting" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta content="telephone=no" name="format-detection" />
    <title>AZLO AVISO</title>
    <!--[if (mso 16)]>
      <style type="text/css">
        a {
          text-decoration: none;
        }
      </style>
    <![endif]-->
    <!--[if gte mso 9
      ]><style>
        sup {
          font-size: 100% !important;
        }
      </style><!
    [endif]-->
    <!--[if gte mso 9]>
      <xml>
        <o:OfficeDocumentSettings>
          <o:AllowPNG></o:AllowPNG>
          <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
      </xml>
    <![endif]-->
    <!--[if !mso]><!-- -->
    <link
      href="https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700,700i"
      rel="stylesheet"
    />
    <!--<![endif]-->
    <style type="text/css">
      #outlook a {
        padding: 0;
      }
      .ExternalClass {
        width: 100%;
      }
      .ExternalClass,
      .ExternalClass p,
      .ExternalClass span,
      .ExternalClass font,
      .ExternalClass td,
      .ExternalClass div {
        line-height: 100%;
      }
      .es-button {
        mso-style-priority: 100 !important;
        text-decoration: none !important;
      }
      a[x-apple-data-detectors] {
        color: inherit !important;
        text-decoration: none !important;
        font-size: inherit !important;
        font-family: inherit !important;
        font-weight: inherit !important;
        line-height: inherit !important;
      }
      .es-desk-hidden {
        display: none;
        float: left;
        overflow: hidden;
        width: 0;
        max-height: 0;
        line-height: 0;
        mso-hide: all;
      }
      [data-ogsb] .es-button {
        border-width: 0 !important;
        padding: 15px 25px 15px 25px !important;
      }
      @media only screen and (max-width: 600px) {
        p,
        ul li,
        ol li,
        a {
          line-height: 150% !important;
        }
        h1 {
          font-size: 30px !important;
          text-align: center;
          line-height: 120% !important;
        }
        h2 {
          font-size: 26px !important;
          text-align: center;
          line-height: 120% !important;
        }
        h3 {
          font-size: 20px !important;
          text-align: center;
          line-height: 120% !important;
        }
        .es-header-body h1 a,
        .es-content-body h1 a,
        .es-footer-body h1 a {
          font-size: 30px !important;
        }
        .es-header-body h2 a,
        .es-content-body h2 a,
        .es-footer-body h2 a {
          font-size: 26px !important;
        }
        .es-header-body h3 a,
        .es-content-body h3 a,
        .es-footer-body h3 a {
          font-size: 20px !important;
        }
        .es-menu td a {
          font-size: 16px !important;
        }
        .es-header-body p,
        .es-header-body ul li,
        .es-header-body ol li,
        .es-header-body a {
          font-size: 16px !important;
        }
        .es-content-body p,
        .es-content-body ul li,
        .es-content-body ol li,
        .es-content-body a {
          font-size: 16px !important;
        }
        .es-footer-body p,
        .es-footer-body ul li,
        .es-footer-body ol li,
        .es-footer-body a {
          font-size: 16px !important;
        }
        .es-infoblock p,
        .es-infoblock ul li,
        .es-infoblock ol li,
        .es-infoblock a {
          font-size: 12px !important;
        }
        *[class=gmail-fix] {
          display: none !important;
        }
        .es-m-txt-c,
        .es-m-txt-c h1,
        .es-m-txt-c h2,
        .es-m-txt-c h3 {
          text-align: center !important;
        }
        .es-m-txt-r,
        .es-m-txt-r h1,
        .es-m-txt-r h2,
        .es-m-txt-r h3 {
          text-align: right !important;
        }
        .es-m-txt-l,
        .es-m-txt-l h1,
        .es-m-txt-l h2,
        .es-m-txt-l h3 {
          text-align: left !important;
        }
        .es-m-txt-r img,
        .es-m-txt-c img,
        .es-m-txt-l img {
          display: inline !important;
        }
        .es-button-border {
          display: block !important;
        }
        a.es-button,
        button.es-button {
          font-size: 20px !important;
          display: block !important;
          border-width: 15px 25px 15px 25px !important;
        }
        .es-btn-fw {
          border-width: 10px 0px !important;
          text-align: center !important;
        }
        .es-adaptive table,
        .es-btn-fw,
        .es-btn-fw-brdr,
        .es-left,
        .es-right {
          width: 100% !important;
        }
        .es-content table,
        .es-header table,
        .es-footer table,
        .es-content,
        .es-footer,
        .es-header {
          width: 100% !important;
          max-width: 600px !important;
        }
        .es-adapt-td {
          display: block !important;
          width: 100% !important;
        }
        .adapt-img {
          width: 100% !important;
          height: auto !important;
        }
        .es-m-p0 {
          padding: 0px !important;
        }
        .es-m-p0r {
          padding-right: 0px !important;
        }
        .es-m-p0l {
          padding-left: 0px !important;
        }
        .es-m-p0t {
          padding-top: 0px !important;
        }
        .es-m-p0b {
          padding-bottom: 0 !important;
        }
        .es-m-p20b {
          padding-bottom: 20px !important;
        }
        .es-mobile-hidden,
        .es-hidden {
          display: none !important;
        }
        tr.es-desk-hidden,
        td.es-desk-hidden,
        table.es-desk-hidden {
          width: auto !important;
          overflow: visible !important;
          float: none !important;
          max-height: inherit !important;
          line-height: inherit !important;
        }
        tr.es-desk-hidden {
          display: table-row !important;
        }
        table.es-desk-hidden {
          display: table !important;
        }
        td.es-desk-menu-hidden {
          display: table-cell !important;
        }
        .es-menu td {
          width: 1% !important;
        }
        table.es-table-not-adapt,
        .esd-block-html table {
          width: auto !important;
        }
        table.es-social {
          display: inline-block !important;
        }
        table.es-social td {
          display: inline-block !important;
        }
      }
    </style>
  </head>
  <body
    style="
      width: 100%;
      font-family: open sans, helvetica neue, helvetica, arial, sans-serif;
      -webkit-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
      padding: 0;
      margin: 0;
    "
  >
    <div class="es-wrapper-color" style="background-color: #f6f6f6">
      <!--[if gte mso 9]>
        <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
          <v:fill type="tile" color="#f6f6f6"></v:fill>
        </v:background>
      <![endif]-->
      <table
        class="es-wrapper"
        width="100%"
        cellspacing="0"
        cellpadding="0"
        style="
          mso-table-lspace: 0pt;
          mso-table-rspace: 0pt;
          border-collapse: collapse;
          border-spacing: 0px;
          padding: 0;
          margin: 0;
          width: 100%;
          height: 100%;
          background-repeat: repeat;
          background-position: center top;
        "
      >
        <tr style="border-collapse: collapse">
          <td valign="top" style="padding: 0; margin: 0">
            <table
              class="es-header"
              cellspacing="0"
              cellpadding="0"
              align="center"
              style="
                mso-table-lspace: 0pt;
                mso-table-rspace: 0pt;
                border-collapse: collapse;
                border-spacing: 0px;
                table-layout: fixed !important;
                width: 100%;
                background-color: transparent;
                background-repeat: repeat;
                background-position: center top;
              "
            >
              <tr style="border-collapse: collapse">
                <td
                  style="
                    padding: 0;
                    margin: 0;
                    background-image: url(https://ltefgn.stripocdn.email/content/guids/CABINET_729b6a94015d410538fa6f6810b21b85/images/9701519718227204.jpg);
                    background-position: center top;
                    background-repeat: no-repeat;
                    background-size: cover;
                  "
                  bgcolor="#3d4c6b"
                  align="center"
                  background="https://ltefgn.stripocdn.email/content/guids/CABINET_729b6a94015d410538fa6f6810b21b85/images/9701519718227204.jpg"
                >
                  <table
                    class="es-header-body"
                    style="
                      mso-table-lspace: 0pt;
                      mso-table-rspace: 0pt;
                      border-collapse: collapse;
                      border-spacing: 0px;
                      background-color: transparent;
                      width: 640px;
                    "
                    cellspacing="0"
                    cellpadding="0"
                    align="center"
                  >
                    <tr style="border-collapse: collapse">
                      <td
                        align="left"
                        style="
                          margin: 0;
                          padding-top: 10px;
                          padding-left: 20px;
                          padding-right: 20px;
                          padding-bottom: 25px;
                        "
                      >
                        <table
                          width="100%"
                          cellspacing="0"
                          cellpadding="0"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            border-collapse: collapse;
                            border-spacing: 0px;
                          "
                        >
                          <tr style="border-collapse: collapse">
                            <td
                              valign="top"
                              align="center"
                              style="padding: 0; margin: 0; width: 600px"
                            >
                              <table
                                width="100%"
                                cellspacing="0"
                                cellpadding="0"
                                role="presentation"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                "
                              >
                                <tr style="border-collapse: collapse">
                                  <td
                                    align="center"
                                    style="
                                      padding: 0;
                                      margin: 0;
                                      padding-bottom: 25px;
                                      padding-top: 40px;
                                      font-size: 0;
                                    "
                                  >
                                    <a
                                      href="https://danieluribedgsan.github.io/azlo-admin/index.html"
                                      target="_blank"
                                      style="
                                        -webkit-text-size-adjust: none;
                                        -ms-text-size-adjust: none;
                                        mso-line-height-rule: exactly;
                                        text-decoration: none;
                                        color: #b7bdc9;
                                        font-size: 20px;
                                      "
                                      ><img
                                        src="https://ltefgn.stripocdn.email/content/guids/CABINET_729b6a94015d410538fa6f6810b21b85/images/90451519716512050.png"
                                        style="
                                          display: block;
                                          border: 0;
                                          outline: none;
                                          text-decoration: none;
                                          -ms-interpolation-mode: bicubic;
                                        "
                                        alt="Logo"
                                        title="Logo"
                                        width="50"
                                    /></a>
                                  </td>
                                </tr>
                                <tr style="border-collapse: collapse">
                                  <td
                                    align="center"
                                    style="
                                      padding: 0;
                                      margin: 0;
                                      padding-bottom: 20px;
                                      padding-top: 25px;
                                    "
                                  >
                                    <h1
                                      style="
                                        margin: 0;
                                        line-height: 48px;
                                        mso-line-height-rule: exactly;
                                        font-family: open sans, helvetica neue,
                                          helvetica, arial, sans-serif;
                                        font-size: 40px;
                                        font-style: normal;
                                        font-weight: bold;
                                        color: #ffffff;
                                      "
                                    >
                                      Hola: ${nombre}
                                    </h1>
                                  </td>
                                </tr>
                                <tr style="border-collapse: collapse">
                                  <td
                                    esdev-links-color="#b7bdc9"
                                    align="center"
                                    style="
                                      padding: 0;
                                      margin: 0;
                                      padding-top: 10px;
                                      padding-bottom: 25px;
                                    "
                                  >
                                    <p
                                      style="
                                        margin: 0;
                                        -webkit-text-size-adjust: none;
                                        -ms-text-size-adjust: none;
                                        mso-line-height-rule: exactly;
                                        font-family: open sans, helvetica neue,
                                          helvetica, arial, sans-serif;
                                        line-height: 30px;
                                        color: #b7bdc9;
                                        font-size: 20px;
                                      "
                                    >
                                      Se ha creado un nuevo aviso, da click en
                                      el botón de abajo para poder ver el aviso.
                                    </p>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
            <table
              class="es-content"
              cellspacing="0"
              cellpadding="0"
              align="center"
              style="
                mso-table-lspace: 0pt;
                mso-table-rspace: 0pt;
                border-collapse: collapse;
                border-spacing: 0px;
                table-layout: fixed !important;
                width: 100%;
              "
            >
              <tr style="border-collapse: collapse">
                <td align="center" style="padding: 0; margin: 0">
                  <table
                    class="es-content-body"
                    style="
                      mso-table-lspace: 0pt;
                      mso-table-rspace: 0pt;
                      border-collapse: collapse;
                      border-spacing: 0px;
                      background-color: #f6f6f6;
                      width: 640px;
                    "
                    cellspacing="0"
                    cellpadding="0"
                    bgcolor="#f6f6f6"
                    align="center"
                  >
                    <tr style="border-collapse: collapse">
                      <td
                        align="left"
                        style="
                          padding: 0;
                          margin: 0;
                          padding-top: 10px;
                          padding-left: 20px;
                          padding-right: 20px;
                        "
                      >
                        <table
                          width="100%"
                          cellspacing="0"
                          cellpadding="0"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            border-collapse: collapse;
                            border-spacing: 0px;
                          "
                        >
                          <tr style="border-collapse: collapse">
                            <td
                              valign="top"
                              align="center"
                              style="padding: 0; margin: 0; width: 600px"
                            >
                              <table
                                width="100%"
                                cellspacing="0"
                                cellpadding="0"
                                role="presentation"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                "
                              >
                                <tr style="border-collapse: collapse">
                                  <td
                                    align="center"
                                    style="
                                      padding: 0;
                                      margin: 0;
                                      padding-top: 20px;
                                      padding-bottom: 20px;
                                      font-size: 0;
                                    "
                                  >
                                    <table
                                      width="100%"
                                      height="100%"
                                      cellspacing="0"
                                      cellpadding="0"
                                      border="0"
                                      role="presentation"
                                      style="
                                        mso-table-lspace: 0pt;
                                        mso-table-rspace: 0pt;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <tr style="border-collapse: collapse">
                                        <td
                                          style="
                                            padding: 0;
                                            margin: 0;
                                            border-bottom: 1px solid #f6f6f6;
                                            background: #ffffff none repeat
                                              scroll 0% 0%;
                                            height: 1px;
                                            width: 100%;
                                            margin: 0px;
                                          "
                                        ></td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
            <table
              class="es-content"
              cellspacing="0"
              cellpadding="0"
              align="center"
              style="
                mso-table-lspace: 0pt;
                mso-table-rspace: 0pt;
                border-collapse: collapse;
                border-spacing: 0px;
                table-layout: fixed !important;
                width: 100%;
              "
            >
              <tr style="border-collapse: collapse">
                <td align="center" style="padding: 0; margin: 0">
                  <table
                    class="es-content-body"
                    style="
                      mso-table-lspace: 0pt;
                      mso-table-rspace: 0pt;
                      border-collapse: collapse;
                      border-spacing: 0px;
                      background-color: transparent;
                      width: 640px;
                    "
                    cellspacing="0"
                    cellpadding="0"
                    align="center"
                  >
                    <tr style="border-collapse: collapse">
                      <td
                        align="left"
                        style="
                          padding: 0;
                          margin: 0;
                          padding-left: 20px;
                          padding-right: 20px;
                        "
                      >
                        <table
                          width="100%"
                          cellspacing="0"
                          cellpadding="0"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            border-collapse: collapse;
                            border-spacing: 0px;
                          "
                        >
                          <tr style="border-collapse: collapse">
                            <td
                              valign="top"
                              align="center"
                              style="padding: 0; margin: 0; width: 600px"
                            >
                              <table
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: separate;
                                  border-spacing: 0px;
                                  border-radius: 3px;
                                  background-color: #ffffff;
                                "
                                width="100%"
                                cellspacing="0"
                                cellpadding="0"
                                bgcolor="#ffffff"
                                role="presentation"
                              >
                                <tr style="border-collapse: collapse">
                                  <td
                                    align="center"
                                    style="padding: 0; margin: 0; font-size: 0"
                                  >
                                    <a
                                      target="_blank"
                                      href="https://danieluribedgsan.github.io/azlo-admin/index.html"
                                      style="
                                        -webkit-text-size-adjust: none;
                                        -ms-text-size-adjust: none;
                                        mso-line-height-rule: exactly;
                                        text-decoration: none;
                                        color: #75b6c9;
                                        font-size: 16px;
                                      "
                                      ><img
                                        class="adapt-img"
                                        src="https://ltefgn.stripocdn.email/content/guids/CABINET_729b6a94015d410538fa6f6810b21b85/images/17611519723274581.png"
                                        alt="Nuevo aviso"
                                        style="
                                          display: block;
                                          border: 0;
                                          outline: none;
                                          text-decoration: none;
                                          -ms-interpolation-mode: bicubic;
                                          border-radius: 3px 3px 0 0;
                                        "
                                        title="Nuevo aviso"
                                        width="600"
                                    /></a>
                                  </td>
                                </tr>
                                <tr style="border-collapse: collapse">
                                  <td
                                    align="center"
                                    style="
                                      margin: 0;
                                      padding-bottom: 5px;
                                      padding-left: 20px;
                                      padding-right: 20px;
                                      padding-top: 25px;
                                    "
                                  >
                                    <h2
                                      style="
                                        margin: 0;
                                        line-height: 24px;
                                        mso-line-height-rule: exactly;
                                        font-family: open sans, helvetica neue,
                                          helvetica, arial, sans-serif;
                                        font-size: 20px;
                                        font-style: normal;
                                        font-weight: bold;
                                        color: #444444;
                                      "
                                    >
                                      Nuevo aviso
                                    </h2>
                                  </td>
                                </tr>
                                <tr style="border-collapse: collapse">
                                  <td
                                    align="center"
                                    style="
                                      margin: 0;
                                      padding-left: 10px;
                                      padding-right: 10px;
                                      padding-top: 15px;
                                      padding-bottom: 25px;
                                    "
                                  >
                                    <span
                                      class="es-button-border"
                                      style="
                                        border-style: solid;
                                        border-color: #75b6c9;
                                        background: #75b6c9;
                                        border-width: 1px;
                                        display: inline-block;
                                        border-radius: 28px;
                                        width: auto;
                                      "
                                      ><a
                                        href="https://danieluribedgsan.github.io/azlo-admin/index.html"
                                        class="es-button"
                                        target="_blank"
                                        style="
                                          mso-style-priority: 100 !important;
                                          text-decoration: none;
                                          -webkit-text-size-adjust: none;
                                          -ms-text-size-adjust: none;
                                          mso-line-height-rule: exactly;
                                          color: #ffffff;
                                          font-size: 16px;
                                          border-style: solid;
                                          border-color: #75b6c9;
                                          border-width: 15px 25px 15px 25px;
                                          display: inline-block;
                                          background: #75b6c9;
                                          border-radius: 28px;
                                          font-family: open sans, helvetica neue,
                                            helvetica, arial, sans-serif;
                                          font-weight: normal;
                                          font-style: normal;
                                          line-height: 19px;
                                          width: auto;
                                          text-align: center;
                                        "
                                        >Ver aviso →</a
                                      ></span
                                    >
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>

            <table
              cellpadding="0"
              cellspacing="0"
              class="es-footer"
              align="center"
              style="
                mso-table-lspace: 0pt;
                mso-table-rspace: 0pt;
                border-collapse: collapse;
                border-spacing: 0px;
                table-layout: fixed !important;
                width: 100%;
                background-color: transparent;
                background-repeat: repeat;
                background-position: center top;
              "
            >
              <tr style="border-collapse: collapse">
                <td align="center" style="padding: 0; margin: 0">
                  <table
                    class="es-footer-body"
                    cellspacing="0"
                    cellpadding="0"
                    align="center"
                    style="
                      mso-table-lspace: 0pt;
                      mso-table-rspace: 0pt;
                      border-collapse: collapse;
                      border-spacing: 0px;
                      background-color: #f6f6f6;
                      width: 640px;
                    "
                  >
                    <tr style="border-collapse: collapse">
                      <td
                        align="left"
                        style="
                          margin: 0;
                          padding-left: 20px;
                          padding-right: 20px;
                          padding-top: 40px;
                          padding-bottom: 40px;
                        "
                      >
                        <table
                          width="100%"
                          cellspacing="0"
                          cellpadding="0"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            border-collapse: collapse;
                            border-spacing: 0px;
                          "
                        >
                          <tr style="border-collapse: collapse">
                            <td
                              valign="top"
                              align="center"
                              style="padding: 0; margin: 0; width: 600px"
                            >
                              <table
                                width="100%"
                                cellspacing="0"
                                cellpadding="0"
                                role="presentation"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                "
                              >
                                <tr style="border-collapse: collapse">
                                  <td
                                    align="center"
                                    style="
                                      padding: 0;
                                      margin: 0;
                                      padding-bottom: 5px;
                                      font-size: 0;
                                    "
                                  >
                                    <a
                                      target="_blank"
                                      href="https://danieluribedgsan.github.io/azlo-admin/index.html"
                                      style="
                                        -webkit-text-size-adjust: none;
                                        -ms-text-size-adjust: none;
                                        mso-line-height-rule: exactly;
                                        text-decoration: none;
                                        color: #999999;
                                        font-size: 14px;
                                      "
                                      ><img
                                        src="https://ltefgn.stripocdn.email/content/guids/CABINET_729b6a94015d410538fa6f6810b21b85/images/55891519718168286.png"
                                        alt="Logo"
                                        style="
                                          display: block;
                                          border: 0;
                                          outline: none;
                                          text-decoration: none;
                                          -ms-interpolation-mode: bicubic;
                                        "
                                        title="Logo"
                                        width="35"
                                    /></a>
                                  </td>
                                </tr>
                                <tr style="border-collapse: collapse">
                                  <td
                                    align="center"
                                    style="
                                      padding: 0;
                                      margin: 0;
                                      padding-top: 15px;
                                      padding-bottom: 15px;
                                    "
                                  >
                                    <p
                                      style="
                                        margin: 0;
                                        -webkit-text-size-adjust: none;
                                        -ms-text-size-adjust: none;
                                        mso-line-height-rule: exactly;
                                        font-family: open sans, helvetica neue,
                                          helvetica, arial, sans-serif;
                                        line-height: 21px;
                                        color: #999999;
                                        font-size: 14px;
                                      "
                                    >
                                      AZLO ADMIN
                                    </p>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </div>
  </body>
</html>`,
    },
  })
}


const sendEmailFirebaseComentario = (email, nombre) => {
  db.collection('mail').add({
    to: email,
    message: {
      subject: 'Nuevo comentario',
      html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html
  xmlns="http://www.w3.org/1999/xhtml"
  xmlns:o="urn:schemas-microsoft-com:office:office"
  style="
    width: 100%;
    font-family: open sans, helvetica neue, helvetica, arial, sans-serif;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    padding: 0;
    margin: 0;
  "
>
  <head>
    <meta charset="UTF-8" />
    <meta content="width=device-width, initial-scale=1" name="viewport" />
    <meta name="x-apple-disable-message-reformatting" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta content="telephone=no" name="format-detection" />
    <title>AZLO COMENTARIO</title>
    <!--[if (mso 16)]>
      <style type="text/css">
        a {
          text-decoration: none;
        }
      </style>
    <![endif]-->
    <!--[if gte mso 9
      ]><style>
        sup {
          font-size: 100% !important;
        }
      </style><!
    [endif]-->
    <!--[if gte mso 9]>
      <xml>
        <o:OfficeDocumentSettings>
          <o:AllowPNG></o:AllowPNG>
          <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
      </xml>
    <![endif]-->
    <!--[if !mso]><!-- -->
    <link
      href="https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700,700i"
      rel="stylesheet"
    />
    <!--<![endif]-->
    <style type="text/css">
      #outlook a {
        padding: 0;
      }
      .ExternalClass {
        width: 100%;
      }
      .ExternalClass,
      .ExternalClass p,
      .ExternalClass span,
      .ExternalClass font,
      .ExternalClass td,
      .ExternalClass div {
        line-height: 100%;
      }
      .es-button {
        mso-style-priority: 100 !important;
        text-decoration: none !important;
      }
      a[x-apple-data-detectors] {
        color: inherit !important;
        text-decoration: none !important;
        font-size: inherit !important;
        font-family: inherit !important;
        font-weight: inherit !important;
        line-height: inherit !important;
      }
      .es-desk-hidden {
        display: none;
        float: left;
        overflow: hidden;
        width: 0;
        max-height: 0;
        line-height: 0;
        mso-hide: all;
      }
      [data-ogsb] .es-button {
        border-width: 0 !important;
        padding: 15px 25px 15px 25px !important;
      }
      @media only screen and (max-width: 600px) {
        p,
        ul li,
        ol li,
        a {
          line-height: 150% !important;
        }
        h1 {
          font-size: 30px !important;
          text-align: center;
          line-height: 120% !important;
        }
        h2 {
          font-size: 26px !important;
          text-align: center;
          line-height: 120% !important;
        }
        h3 {
          font-size: 20px !important;
          text-align: center;
          line-height: 120% !important;
        }
        .es-header-body h1 a,
        .es-content-body h1 a,
        .es-footer-body h1 a {
          font-size: 30px !important;
        }
        .es-header-body h2 a,
        .es-content-body h2 a,
        .es-footer-body h2 a {
          font-size: 26px !important;
        }
        .es-header-body h3 a,
        .es-content-body h3 a,
        .es-footer-body h3 a {
          font-size: 20px !important;
        }
        .es-menu td a {
          font-size: 16px !important;
        }
        .es-header-body p,
        .es-header-body ul li,
        .es-header-body ol li,
        .es-header-body a {
          font-size: 16px !important;
        }
        .es-content-body p,
        .es-content-body ul li,
        .es-content-body ol li,
        .es-content-body a {
          font-size: 16px !important;
        }
        .es-footer-body p,
        .es-footer-body ul li,
        .es-footer-body ol li,
        .es-footer-body a {
          font-size: 16px !important;
        }
        .es-infoblock p,
        .es-infoblock ul li,
        .es-infoblock ol li,
        .es-infoblock a {
          font-size: 12px !important;
        }
        *[class=gmail-fix] {
          display: none !important;
        }
        .es-m-txt-c,
        .es-m-txt-c h1,
        .es-m-txt-c h2,
        .es-m-txt-c h3 {
          text-align: center !important;
        }
        .es-m-txt-r,
        .es-m-txt-r h1,
        .es-m-txt-r h2,
        .es-m-txt-r h3 {
          text-align: right !important;
        }
        .es-m-txt-l,
        .es-m-txt-l h1,
        .es-m-txt-l h2,
        .es-m-txt-l h3 {
          text-align: left !important;
        }
        .es-m-txt-r img,
        .es-m-txt-c img,
        .es-m-txt-l img {
          display: inline !important;
        }
        .es-button-border {
          display: block !important;
        }
        a.es-button,
        button.es-button {
          font-size: 20px !important;
          display: block !important;
          border-width: 15px 25px 15px 25px !important;
        }
        .es-btn-fw {
          border-width: 10px 0px !important;
          text-align: center !important;
        }
        .es-adaptive table,
        .es-btn-fw,
        .es-btn-fw-brdr,
        .es-left,
        .es-right {
          width: 100% !important;
        }
        .es-content table,
        .es-header table,
        .es-footer table,
        .es-content,
        .es-footer,
        .es-header {
          width: 100% !important;
          max-width: 600px !important;
        }
        .es-adapt-td {
          display: block !important;
          width: 100% !important;
        }
        .adapt-img {
          width: 100% !important;
          height: auto !important;
        }
        .es-m-p0 {
          padding: 0px !important;
        }
        .es-m-p0r {
          padding-right: 0px !important;
        }
        .es-m-p0l {
          padding-left: 0px !important;
        }
        .es-m-p0t {
          padding-top: 0px !important;
        }
        .es-m-p0b {
          padding-bottom: 0 !important;
        }
        .es-m-p20b {
          padding-bottom: 20px !important;
        }
        .es-mobile-hidden,
        .es-hidden {
          display: none !important;
        }
        tr.es-desk-hidden,
        td.es-desk-hidden,
        table.es-desk-hidden {
          width: auto !important;
          overflow: visible !important;
          float: none !important;
          max-height: inherit !important;
          line-height: inherit !important;
        }
        tr.es-desk-hidden {
          display: table-row !important;
        }
        table.es-desk-hidden {
          display: table !important;
        }
        td.es-desk-menu-hidden {
          display: table-cell !important;
        }
        .es-menu td {
          width: 1% !important;
        }
        table.es-table-not-adapt,
        .esd-block-html table {
          width: auto !important;
        }
        table.es-social {
          display: inline-block !important;
        }
        table.es-social td {
          display: inline-block !important;
        }
      }
    </style>
  </head>
  <body
    style="
      width: 100%;
      font-family: open sans, helvetica neue, helvetica, arial, sans-serif;
      -webkit-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
      padding: 0;
      margin: 0;
    "
  >
    <div class="es-wrapper-color" style="background-color: #f6f6f6">
      <!--[if gte mso 9]>
        <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
          <v:fill type="tile" color="#f6f6f6"></v:fill>
        </v:background>
      <![endif]-->
      <table
        class="es-wrapper"
        width="100%"
        cellspacing="0"
        cellpadding="0"
        style="
          mso-table-lspace: 0pt;
          mso-table-rspace: 0pt;
          border-collapse: collapse;
          border-spacing: 0px;
          padding: 0;
          margin: 0;
          width: 100%;
          height: 100%;
          background-repeat: repeat;
          background-position: center top;
        "
      >
        <tr style="border-collapse: collapse">
          <td valign="top" style="padding: 0; margin: 0">
            <table
              class="es-header"
              cellspacing="0"
              cellpadding="0"
              align="center"
              style="
                mso-table-lspace: 0pt;
                mso-table-rspace: 0pt;
                border-collapse: collapse;
                border-spacing: 0px;
                table-layout: fixed !important;
                width: 100%;
                background-color: transparent;
                background-repeat: repeat;
                background-position: center top;
              "
            >
              <tr style="border-collapse: collapse">
                <td
                  style="
                    padding: 0;
                    margin: 0;
                    background-image: url(https://ltefgn.stripocdn.email/content/guids/CABINET_729b6a94015d410538fa6f6810b21b85/images/9701519718227204.jpg);
                    background-position: center top;
                    background-repeat: no-repeat;
                    background-size: cover;
                  "
                  bgcolor="#3d4c6b"
                  align="center"
                  background="https://ltefgn.stripocdn.email/content/guids/CABINET_729b6a94015d410538fa6f6810b21b85/images/9701519718227204.jpg"
                >
                  <table
                    class="es-header-body"
                    style="
                      mso-table-lspace: 0pt;
                      mso-table-rspace: 0pt;
                      border-collapse: collapse;
                      border-spacing: 0px;
                      background-color: transparent;
                      width: 640px;
                    "
                    cellspacing="0"
                    cellpadding="0"
                    align="center"
                  >
                    <tr style="border-collapse: collapse">
                      <td
                        align="left"
                        style="
                          margin: 0;
                          padding-top: 10px;
                          padding-left: 20px;
                          padding-right: 20px;
                          padding-bottom: 25px;
                        "
                      >
                        <table
                          width="100%"
                          cellspacing="0"
                          cellpadding="0"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            border-collapse: collapse;
                            border-spacing: 0px;
                          "
                        >
                          <tr style="border-collapse: collapse">
                            <td
                              valign="top"
                              align="center"
                              style="padding: 0; margin: 0; width: 600px"
                            >
                              <table
                                width="100%"
                                cellspacing="0"
                                cellpadding="0"
                                role="presentation"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                "
                              >
                                <tr style="border-collapse: collapse">
                                  <td
                                    align="center"
                                    style="
                                      padding: 0;
                                      margin: 0;
                                      padding-bottom: 25px;
                                      padding-top: 40px;
                                      font-size: 0;
                                    "
                                  >
                                    <a
                                      href="https://danieluribedgsan.github.io/azlo-admin/index.html"
                                      target="_blank"
                                      style="
                                        -webkit-text-size-adjust: none;
                                        -ms-text-size-adjust: none;
                                        mso-line-height-rule: exactly;
                                        text-decoration: none;
                                        color: #b7bdc9;
                                        font-size: 20px;
                                      "
                                      ><img
                                        src="https://ltefgn.stripocdn.email/content/guids/CABINET_729b6a94015d410538fa6f6810b21b85/images/90451519716512050.png"
                                        style="
                                          display: block;
                                          border: 0;
                                          outline: none;
                                          text-decoration: none;
                                          -ms-interpolation-mode: bicubic;
                                        "
                                        alt="Logo"
                                        title="Logo"
                                        width="50"
                                    /></a>
                                  </td>
                                </tr>
                                <tr style="border-collapse: collapse">
                                  <td
                                    align="center"
                                    style="
                                      padding: 0;
                                      margin: 0;
                                      padding-bottom: 20px;
                                      padding-top: 25px;
                                    "
                                  >
                                    <h1
                                      style="
                                        margin: 0;
                                        line-height: 48px;
                                        mso-line-height-rule: exactly;
                                        font-family: open sans, helvetica neue,
                                          helvetica, arial, sans-serif;
                                        font-size: 40px;
                                        font-style: normal;
                                        font-weight: bold;
                                        color: #ffffff;
                                      "
                                    >
                                      Hola: ${nombre}
                                    </h1>
                                  </td>
                                </tr>
                                <tr style="border-collapse: collapse">
                                  <td
                                    esdev-links-color="#b7bdc9"
                                    align="center"
                                    style="
                                      padding: 0;
                                      margin: 0;
                                      padding-top: 10px;
                                      padding-bottom: 25px;
                                    "
                                  >
                                    <p
                                      style="
                                        margin: 0;
                                        -webkit-text-size-adjust: none;
                                        -ms-text-size-adjust: none;
                                        mso-line-height-rule: exactly;
                                        font-family: open sans, helvetica neue,
                                          helvetica, arial, sans-serif;
                                        line-height: 30px;
                                        color: #b7bdc9;
                                        font-size: 20px;
                                      "
                                    >
                                      Se ha creado un nuevo comentario, da click en
                                      el botón de abajo para poder ver el comentario.
                                    </p>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
            <table
              class="es-content"
              cellspacing="0"
              cellpadding="0"
              align="center"
              style="
                mso-table-lspace: 0pt;
                mso-table-rspace: 0pt;
                border-collapse: collapse;
                border-spacing: 0px;
                table-layout: fixed !important;
                width: 100%;
              "
            >
              <tr style="border-collapse: collapse">
                <td align="center" style="padding: 0; margin: 0">
                  <table
                    class="es-content-body"
                    style="
                      mso-table-lspace: 0pt;
                      mso-table-rspace: 0pt;
                      border-collapse: collapse;
                      border-spacing: 0px;
                      background-color: #f6f6f6;
                      width: 640px;
                    "
                    cellspacing="0"
                    cellpadding="0"
                    bgcolor="#f6f6f6"
                    align="center"
                  >
                    <tr style="border-collapse: collapse">
                      <td
                        align="left"
                        style="
                          padding: 0;
                          margin: 0;
                          padding-top: 10px;
                          padding-left: 20px;
                          padding-right: 20px;
                        "
                      >
                        <table
                          width="100%"
                          cellspacing="0"
                          cellpadding="0"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            border-collapse: collapse;
                            border-spacing: 0px;
                          "
                        >
                          <tr style="border-collapse: collapse">
                            <td
                              valign="top"
                              align="center"
                              style="padding: 0; margin: 0; width: 600px"
                            >
                              <table
                                width="100%"
                                cellspacing="0"
                                cellpadding="0"
                                role="presentation"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                "
                              >
                                <tr style="border-collapse: collapse">
                                  <td
                                    align="center"
                                    style="
                                      padding: 0;
                                      margin: 0;
                                      padding-top: 20px;
                                      padding-bottom: 20px;
                                      font-size: 0;
                                    "
                                  >
                                    <table
                                      width="100%"
                                      height="100%"
                                      cellspacing="0"
                                      cellpadding="0"
                                      border="0"
                                      role="presentation"
                                      style="
                                        mso-table-lspace: 0pt;
                                        mso-table-rspace: 0pt;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <tr style="border-collapse: collapse">
                                        <td
                                          style="
                                            padding: 0;
                                            margin: 0;
                                            border-bottom: 1px solid #f6f6f6;
                                            background: #ffffff none repeat
                                              scroll 0% 0%;
                                            height: 1px;
                                            width: 100%;
                                            margin: 0px;
                                          "
                                        ></td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
            <table
              class="es-content"
              cellspacing="0"
              cellpadding="0"
              align="center"
              style="
                mso-table-lspace: 0pt;
                mso-table-rspace: 0pt;
                border-collapse: collapse;
                border-spacing: 0px;
                table-layout: fixed !important;
                width: 100%;
              "
            >
              <tr style="border-collapse: collapse">
                <td align="center" style="padding: 0; margin: 0">
                  <table
                    class="es-content-body"
                    style="
                      mso-table-lspace: 0pt;
                      mso-table-rspace: 0pt;
                      border-collapse: collapse;
                      border-spacing: 0px;
                      background-color: transparent;
                      width: 640px;
                    "
                    cellspacing="0"
                    cellpadding="0"
                    align="center"
                  >
                    <tr style="border-collapse: collapse">
                      <td
                        align="left"
                        style="
                          padding: 0;
                          margin: 0;
                          padding-left: 20px;
                          padding-right: 20px;
                        "
                      >
                        <table
                          width="100%"
                          cellspacing="0"
                          cellpadding="0"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            border-collapse: collapse;
                            border-spacing: 0px;
                          "
                        >
                          <tr style="border-collapse: collapse">
                            <td
                              valign="top"
                              align="center"
                              style="padding: 0; margin: 0; width: 600px"
                            >
                              <table
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: separate;
                                  border-spacing: 0px;
                                  border-radius: 3px;
                                  background-color: #ffffff;
                                "
                                width="100%"
                                cellspacing="0"
                                cellpadding="0"
                                bgcolor="#ffffff"
                                role="presentation"
                              >
                                <tr style="border-collapse: collapse">
                                  <td
                                    align="center"
                                    style="padding: 0; margin: 0; font-size: 0"
                                  >
                                    <a
                                      target="_blank"
                                      href="https://danieluribedgsan.github.io/azlo-admin/index.html"
                                      style="
                                        -webkit-text-size-adjust: none;
                                        -ms-text-size-adjust: none;
                                        mso-line-height-rule: exactly;
                                        text-decoration: none;
                                        color: #75b6c9;
                                        font-size: 16px;
                                      "
                                      ><img
                                        class="adapt-img"
                                        src="https://ltefgn.stripocdn.email/content/guids/CABINET_729b6a94015d410538fa6f6810b21b85/images/17611519723274581.png"
                                        alt="Nuevo coementario"
                                        style="
                                          display: block;
                                          border: 0;
                                          outline: none;
                                          text-decoration: none;
                                          -ms-interpolation-mode: bicubic;
                                          border-radius: 3px 3px 0 0;
                                        "
                                        title="Nuevo coementario"
                                        width="600"
                                    /></a>
                                  </td>
                                </tr>
                                <tr style="border-collapse: collapse">
                                  <td
                                    align="center"
                                    style="
                                      margin: 0;
                                      padding-bottom: 5px;
                                      padding-left: 20px;
                                      padding-right: 20px;
                                      padding-top: 25px;
                                    "
                                  >
                                    <h2
                                      style="
                                        margin: 0;
                                        line-height: 24px;
                                        mso-line-height-rule: exactly;
                                        font-family: open sans, helvetica neue,
                                          helvetica, arial, sans-serif;
                                        font-size: 20px;
                                        font-style: normal;
                                        font-weight: bold;
                                        color: #444444;
                                      "
                                    >
                                      Nuevo comentario
                                    </h2>
                                  </td>
                                </tr>
                                <tr style="border-collapse: collapse">
                                  <td
                                    align="center"
                                    style="
                                      margin: 0;
                                      padding-left: 10px;
                                      padding-right: 10px;
                                      padding-top: 15px;
                                      padding-bottom: 25px;
                                    "
                                  >
                                    <span
                                      class="es-button-border"
                                      style="
                                        border-style: solid;
                                        border-color: #75b6c9;
                                        background: #75b6c9;
                                        border-width: 1px;
                                        display: inline-block;
                                        border-radius: 28px;
                                        width: auto;
                                      "
                                      ><a
                                        href="https://danieluribedgsan.github.io/azlo-admin/index.html"
                                        class="es-button"
                                        target="_blank"
                                        style="
                                          mso-style-priority: 100 !important;
                                          text-decoration: none;
                                          -webkit-text-size-adjust: none;
                                          -ms-text-size-adjust: none;
                                          mso-line-height-rule: exactly;
                                          color: #ffffff;
                                          font-size: 16px;
                                          border-style: solid;
                                          border-color: #75b6c9;
                                          border-width: 15px 25px 15px 25px;
                                          display: inline-block;
                                          background: #75b6c9;
                                          border-radius: 28px;
                                          font-family: open sans, helvetica neue,
                                            helvetica, arial, sans-serif;
                                          font-weight: normal;
                                          font-style: normal;
                                          line-height: 19px;
                                          width: auto;
                                          text-align: center;
                                        "
                                        >Ver comentario →</a
                                      ></span
                                    >
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>

            <table
              cellpadding="0"
              cellspacing="0"
              class="es-footer"
              align="center"
              style="
                mso-table-lspace: 0pt;
                mso-table-rspace: 0pt;
                border-collapse: collapse;
                border-spacing: 0px;
                table-layout: fixed !important;
                width: 100%;
                background-color: transparent;
                background-repeat: repeat;
                background-position: center top;
              "
            >
              <tr style="border-collapse: collapse">
                <td align="center" style="padding: 0; margin: 0">
                  <table
                    class="es-footer-body"
                    cellspacing="0"
                    cellpadding="0"
                    align="center"
                    style="
                      mso-table-lspace: 0pt;
                      mso-table-rspace: 0pt;
                      border-collapse: collapse;
                      border-spacing: 0px;
                      background-color: #f6f6f6;
                      width: 640px;
                    "
                  >
                    <tr style="border-collapse: collapse">
                      <td
                        align="left"
                        style="
                          margin: 0;
                          padding-left: 20px;
                          padding-right: 20px;
                          padding-top: 40px;
                          padding-bottom: 40px;
                        "
                      >
                        <table
                          width="100%"
                          cellspacing="0"
                          cellpadding="0"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            border-collapse: collapse;
                            border-spacing: 0px;
                          "
                        >
                          <tr style="border-collapse: collapse">
                            <td
                              valign="top"
                              align="center"
                              style="padding: 0; margin: 0; width: 600px"
                            >
                              <table
                                width="100%"
                                cellspacing="0"
                                cellpadding="0"
                                role="presentation"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                "
                              >
                                <tr style="border-collapse: collapse">
                                  <td
                                    align="center"
                                    style="
                                      padding: 0;
                                      margin: 0;
                                      padding-bottom: 5px;
                                      font-size: 0;
                                    "
                                  >
                                    <a
                                      target="_blank"
                                      href="https://danieluribedgsan.github.io/azlo-admin/index.html"
                                      style="
                                        -webkit-text-size-adjust: none;
                                        -ms-text-size-adjust: none;
                                        mso-line-height-rule: exactly;
                                        text-decoration: none;
                                        color: #999999;
                                        font-size: 14px;
                                      "
                                      ><img
                                        src="https://ltefgn.stripocdn.email/content/guids/CABINET_729b6a94015d410538fa6f6810b21b85/images/55891519718168286.png"
                                        alt="Logo"
                                        style="
                                          display: block;
                                          border: 0;
                                          outline: none;
                                          text-decoration: none;
                                          -ms-interpolation-mode: bicubic;
                                        "
                                        title="Logo"
                                        width="35"
                                    /></a>
                                  </td>
                                </tr>
                                <tr style="border-collapse: collapse">
                                  <td
                                    align="center"
                                    style="
                                      padding: 0;
                                      margin: 0;
                                      padding-top: 15px;
                                      padding-bottom: 15px;
                                    "
                                  >
                                    <p
                                      style="
                                        margin: 0;
                                        -webkit-text-size-adjust: none;
                                        -ms-text-size-adjust: none;
                                        mso-line-height-rule: exactly;
                                        font-family: open sans, helvetica neue,
                                          helvetica, arial, sans-serif;
                                        line-height: 21px;
                                        color: #999999;
                                        font-size: 14px;
                                      "
                                    >
                                      AZLO ADMIN
                                    </p>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </div>
  </body>
</html>`,
    },
  })
}


const sendEmailFirebaseTarea = (email, nombre, pagina) => {
  db.collection('mail').add({
    to: email,
    message: {
      subject: 'Se te ha asignado una nueva tarea',
      html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html
  xmlns="http://www.w3.org/1999/xhtml"
  xmlns:o="urn:schemas-microsoft-com:office:office"
  style="
    width: 100%;
    font-family: open sans, helvetica neue, helvetica, arial, sans-serif;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    padding: 0;
    margin: 0;
  "
>
  <head>
    <meta charset="UTF-8" />
    <meta content="width=device-width, initial-scale=1" name="viewport" />
    <meta name="x-apple-disable-message-reformatting" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta content="telephone=no" name="format-detection" />
    <title>AZLO AVISO</title>
    <!--[if (mso 16)]>
      <style type="text/css">
        a {
          text-decoration: none;
        }
      </style>
    <![endif]-->
    <!--[if gte mso 9
      ]><style>
        sup {
          font-size: 100% !important;
        }
      </style><!
    [endif]-->
    <!--[if gte mso 9]>
      <xml>
        <o:OfficeDocumentSettings>
          <o:AllowPNG></o:AllowPNG>
          <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
      </xml>
    <![endif]-->
    <!--[if !mso]><!-- -->
    <link
      href="https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700,700i"
      rel="stylesheet"
    />
    <!--<![endif]-->
    <style type="text/css">
      #outlook a {
        padding: 0;
      }
      .ExternalClass {
        width: 100%;
      }
      .ExternalClass,
      .ExternalClass p,
      .ExternalClass span,
      .ExternalClass font,
      .ExternalClass td,
      .ExternalClass div {
        line-height: 100%;
      }
      .es-button {
        mso-style-priority: 100 !important;
        text-decoration: none !important;
      }
      a[x-apple-data-detectors] {
        color: inherit !important;
        text-decoration: none !important;
        font-size: inherit !important;
        font-family: inherit !important;
        font-weight: inherit !important;
        line-height: inherit !important;
      }
      .es-desk-hidden {
        display: none;
        float: left;
        overflow: hidden;
        width: 0;
        max-height: 0;
        line-height: 0;
        mso-hide: all;
      }
      [data-ogsb] .es-button {
        border-width: 0 !important;
        padding: 15px 25px 15px 25px !important;
      }
      @media only screen and (max-width: 600px) {
        p,
        ul li,
        ol li,
        a {
          line-height: 150% !important;
        }
        h1 {
          font-size: 30px !important;
          text-align: center;
          line-height: 120% !important;
        }
        h2 {
          font-size: 26px !important;
          text-align: center;
          line-height: 120% !important;
        }
        h3 {
          font-size: 20px !important;
          text-align: center;
          line-height: 120% !important;
        }
        .es-header-body h1 a,
        .es-content-body h1 a,
        .es-footer-body h1 a {
          font-size: 30px !important;
        }
        .es-header-body h2 a,
        .es-content-body h2 a,
        .es-footer-body h2 a {
          font-size: 26px !important;
        }
        .es-header-body h3 a,
        .es-content-body h3 a,
        .es-footer-body h3 a {
          font-size: 20px !important;
        }
        .es-menu td a {
          font-size: 16px !important;
        }
        .es-header-body p,
        .es-header-body ul li,
        .es-header-body ol li,
        .es-header-body a {
          font-size: 16px !important;
        }
        .es-content-body p,
        .es-content-body ul li,
        .es-content-body ol li,
        .es-content-body a {
          font-size: 16px !important;
        }
        .es-footer-body p,
        .es-footer-body ul li,
        .es-footer-body ol li,
        .es-footer-body a {
          font-size: 16px !important;
        }
        .es-infoblock p,
        .es-infoblock ul li,
        .es-infoblock ol li,
        .es-infoblock a {
          font-size: 12px !important;
        }
        *[class=gmail-fix] {
          display: none !important;
        }
        .es-m-txt-c,
        .es-m-txt-c h1,
        .es-m-txt-c h2,
        .es-m-txt-c h3 {
          text-align: center !important;
        }
        .es-m-txt-r,
        .es-m-txt-r h1,
        .es-m-txt-r h2,
        .es-m-txt-r h3 {
          text-align: right !important;
        }
        .es-m-txt-l,
        .es-m-txt-l h1,
        .es-m-txt-l h2,
        .es-m-txt-l h3 {
          text-align: left !important;
        }
        .es-m-txt-r img,
        .es-m-txt-c img,
        .es-m-txt-l img {
          display: inline !important;
        }
        .es-button-border {
          display: block !important;
        }
        a.es-button,
        button.es-button {
          font-size: 20px !important;
          display: block !important;
          border-width: 15px 25px 15px 25px !important;
        }
        .es-btn-fw {
          border-width: 10px 0px !important;
          text-align: center !important;
        }
        .es-adaptive table,
        .es-btn-fw,
        .es-btn-fw-brdr,
        .es-left,
        .es-right {
          width: 100% !important;
        }
        .es-content table,
        .es-header table,
        .es-footer table,
        .es-content,
        .es-footer,
        .es-header {
          width: 100% !important;
          max-width: 600px !important;
        }
        .es-adapt-td {
          display: block !important;
          width: 100% !important;
        }
        .adapt-img {
          width: 100% !important;
          height: auto !important;
        }
        .es-m-p0 {
          padding: 0px !important;
        }
        .es-m-p0r {
          padding-right: 0px !important;
        }
        .es-m-p0l {
          padding-left: 0px !important;
        }
        .es-m-p0t {
          padding-top: 0px !important;
        }
        .es-m-p0b {
          padding-bottom: 0 !important;
        }
        .es-m-p20b {
          padding-bottom: 20px !important;
        }
        .es-mobile-hidden,
        .es-hidden {
          display: none !important;
        }
        tr.es-desk-hidden,
        td.es-desk-hidden,
        table.es-desk-hidden {
          width: auto !important;
          overflow: visible !important;
          float: none !important;
          max-height: inherit !important;
          line-height: inherit !important;
        }
        tr.es-desk-hidden {
          display: table-row !important;
        }
        table.es-desk-hidden {
          display: table !important;
        }
        td.es-desk-menu-hidden {
          display: table-cell !important;
        }
        .es-menu td {
          width: 1% !important;
        }
        table.es-table-not-adapt,
        .esd-block-html table {
          width: auto !important;
        }
        table.es-social {
          display: inline-block !important;
        }
        table.es-social td {
          display: inline-block !important;
        }
      }
    </style>
  </head>
  <body
    style="
      width: 100%;
      font-family: open sans, helvetica neue, helvetica, arial, sans-serif;
      -webkit-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
      padding: 0;
      margin: 0;
    "
  >
    <div class="es-wrapper-color" style="background-color: #f6f6f6">
      <!--[if gte mso 9]>
        <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
          <v:fill type="tile" color="#f6f6f6"></v:fill>
        </v:background>
      <![endif]-->
      <table
        class="es-wrapper"
        width="100%"
        cellspacing="0"
        cellpadding="0"
        style="
          mso-table-lspace: 0pt;
          mso-table-rspace: 0pt;
          border-collapse: collapse;
          border-spacing: 0px;
          padding: 0;
          margin: 0;
          width: 100%;
          height: 100%;
          background-repeat: repeat;
          background-position: center top;
        "
      >
        <tr style="border-collapse: collapse">
          <td valign="top" style="padding: 0; margin: 0">
            <table
              class="es-header"
              cellspacing="0"
              cellpadding="0"
              align="center"
              style="
                mso-table-lspace: 0pt;
                mso-table-rspace: 0pt;
                border-collapse: collapse;
                border-spacing: 0px;
                table-layout: fixed !important;
                width: 100%;
                background-color: transparent;
                background-repeat: repeat;
                background-position: center top;
              "
            >
              <tr style="border-collapse: collapse">
                <td
                  style="
                    padding: 0;
                    margin: 0;
                    background-image: url(https://ltefgn.stripocdn.email/content/guids/CABINET_729b6a94015d410538fa6f6810b21b85/images/9701519718227204.jpg);
                    background-position: center top;
                    background-repeat: no-repeat;
                    background-size: cover;
                  "
                  bgcolor="#3d4c6b"
                  align="center"
                  background="https://ltefgn.stripocdn.email/content/guids/CABINET_729b6a94015d410538fa6f6810b21b85/images/9701519718227204.jpg"
                >
                  <table
                    class="es-header-body"
                    style="
                      mso-table-lspace: 0pt;
                      mso-table-rspace: 0pt;
                      border-collapse: collapse;
                      border-spacing: 0px;
                      background-color: transparent;
                      width: 640px;
                    "
                    cellspacing="0"
                    cellpadding="0"
                    align="center"
                  >
                    <tr style="border-collapse: collapse">
                      <td
                        align="left"
                        style="
                          margin: 0;
                          padding-top: 10px;
                          padding-left: 20px;
                          padding-right: 20px;
                          padding-bottom: 25px;
                        "
                      >
                        <table
                          width="100%"
                          cellspacing="0"
                          cellpadding="0"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            border-collapse: collapse;
                            border-spacing: 0px;
                          "
                        >
                          <tr style="border-collapse: collapse">
                            <td
                              valign="top"
                              align="center"
                              style="padding: 0; margin: 0; width: 600px"
                            >
                              <table
                                width="100%"
                                cellspacing="0"
                                cellpadding="0"
                                role="presentation"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                "
                              >
                                <tr style="border-collapse: collapse">
                                  <td
                                    align="center"
                                    style="
                                      padding: 0;
                                      margin: 0;
                                      padding-bottom: 25px;
                                      padding-top: 40px;
                                      font-size: 0;
                                    "
                                  >
                                    <a
                                      href="https://danieluribedgsan.github.io/azlo-admin/index.html"
                                      target="_blank"
                                      style="
                                        -webkit-text-size-adjust: none;
                                        -ms-text-size-adjust: none;
                                        mso-line-height-rule: exactly;
                                        text-decoration: none;
                                        color: #b7bdc9;
                                        font-size: 20px;
                                      "
                                      ><img
                                        src="https://ltefgn.stripocdn.email/content/guids/CABINET_729b6a94015d410538fa6f6810b21b85/images/90451519716512050.png"
                                        style="
                                          display: block;
                                          border: 0;
                                          outline: none;
                                          text-decoration: none;
                                          -ms-interpolation-mode: bicubic;
                                        "
                                        alt="Logo"
                                        title="Logo"
                                        width="50"
                                    /></a>
                                  </td>
                                </tr>
                                <tr style="border-collapse: collapse">
                                  <td
                                    align="center"
                                    style="
                                      padding: 0;
                                      margin: 0;
                                      padding-bottom: 20px;
                                      padding-top: 25px;
                                    "
                                  >
                                    <h1
                                      style="
                                        margin: 0;
                                        line-height: 48px;
                                        mso-line-height-rule: exactly;
                                        font-family: open sans, helvetica neue,
                                          helvetica, arial, sans-serif;
                                        font-size: 40px;
                                        font-style: normal;
                                        font-weight: bold;
                                        color: #ffffff;
                                      "
                                    >
                                      Hola: ${nombre}
                                    </h1>
                                  </td>
                                </tr>
                                <tr style="border-collapse: collapse">
                                  <td
                                    esdev-links-color="#b7bdc9"
                                    align="center"
                                    style="
                                      padding: 0;
                                      margin: 0;
                                      padding-top: 10px;
                                      padding-bottom: 25px;
                                    "
                                  >
                                    <p
                                      style="
                                        margin: 0;
                                        -webkit-text-size-adjust: none;
                                        -ms-text-size-adjust: none;
                                        mso-line-height-rule: exactly;
                                        font-family: open sans, helvetica neue,
                                          helvetica, arial, sans-serif;
                                        line-height: 30px;
                                        color: #b7bdc9;
                                        font-size: 20px;
                                      "
                                    >
                                      Se te ha asignado una ueva tarea en la pagina ${pagina},  da click en
                                      el botón de abajo para poder ver tu nueva tarea.
                                    </p>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
            <table
              class="es-content"
              cellspacing="0"
              cellpadding="0"
              align="center"
              style="
                mso-table-lspace: 0pt;
                mso-table-rspace: 0pt;
                border-collapse: collapse;
                border-spacing: 0px;
                table-layout: fixed !important;
                width: 100%;
              "
            >
              <tr style="border-collapse: collapse">
                <td align="center" style="padding: 0; margin: 0">
                  <table
                    class="es-content-body"
                    style="
                      mso-table-lspace: 0pt;
                      mso-table-rspace: 0pt;
                      border-collapse: collapse;
                      border-spacing: 0px;
                      background-color: #f6f6f6;
                      width: 640px;
                    "
                    cellspacing="0"
                    cellpadding="0"
                    bgcolor="#f6f6f6"
                    align="center"
                  >
                    <tr style="border-collapse: collapse">
                      <td
                        align="left"
                        style="
                          padding: 0;
                          margin: 0;
                          padding-top: 10px;
                          padding-left: 20px;
                          padding-right: 20px;
                        "
                      >
                        <table
                          width="100%"
                          cellspacing="0"
                          cellpadding="0"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            border-collapse: collapse;
                            border-spacing: 0px;
                          "
                        >
                          <tr style="border-collapse: collapse">
                            <td
                              valign="top"
                              align="center"
                              style="padding: 0; margin: 0; width: 600px"
                            >
                              <table
                                width="100%"
                                cellspacing="0"
                                cellpadding="0"
                                role="presentation"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                "
                              >
                                <tr style="border-collapse: collapse">
                                  <td
                                    align="center"
                                    style="
                                      padding: 0;
                                      margin: 0;
                                      padding-top: 20px;
                                      padding-bottom: 20px;
                                      font-size: 0;
                                    "
                                  >
                                    <table
                                      width="100%"
                                      height="100%"
                                      cellspacing="0"
                                      cellpadding="0"
                                      border="0"
                                      role="presentation"
                                      style="
                                        mso-table-lspace: 0pt;
                                        mso-table-rspace: 0pt;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <tr style="border-collapse: collapse">
                                        <td
                                          style="
                                            padding: 0;
                                            margin: 0;
                                            border-bottom: 1px solid #f6f6f6;
                                            background: #ffffff none repeat
                                              scroll 0% 0%;
                                            height: 1px;
                                            width: 100%;
                                            margin: 0px;
                                          "
                                        ></td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
            <table
              class="es-content"
              cellspacing="0"
              cellpadding="0"
              align="center"
              style="
                mso-table-lspace: 0pt;
                mso-table-rspace: 0pt;
                border-collapse: collapse;
                border-spacing: 0px;
                table-layout: fixed !important;
                width: 100%;
              "
            >
              <tr style="border-collapse: collapse">
                <td align="center" style="padding: 0; margin: 0">
                  <table
                    class="es-content-body"
                    style="
                      mso-table-lspace: 0pt;
                      mso-table-rspace: 0pt;
                      border-collapse: collapse;
                      border-spacing: 0px;
                      background-color: transparent;
                      width: 640px;
                    "
                    cellspacing="0"
                    cellpadding="0"
                    align="center"
                  >
                    <tr style="border-collapse: collapse">
                      <td
                        align="left"
                        style="
                          padding: 0;
                          margin: 0;
                          padding-left: 20px;
                          padding-right: 20px;
                        "
                      >
                        <table
                          width="100%"
                          cellspacing="0"
                          cellpadding="0"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            border-collapse: collapse;
                            border-spacing: 0px;
                          "
                        >
                          <tr style="border-collapse: collapse">
                            <td
                              valign="top"
                              align="center"
                              style="padding: 0; margin: 0; width: 600px"
                            >
                              <table
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: separate;
                                  border-spacing: 0px;
                                  border-radius: 3px;
                                  background-color: #ffffff;
                                "
                                width="100%"
                                cellspacing="0"
                                cellpadding="0"
                                bgcolor="#ffffff"
                                role="presentation"
                              >
                                <tr style="border-collapse: collapse">
                                  <td
                                    align="center"
                                    style="padding: 0; margin: 0; font-size: 0"
                                  >
                                    <a
                                      target="_blank"
                                      href="https://danieluribedgsan.github.io/azlo-admin/index.html"
                                      style="
                                        -webkit-text-size-adjust: none;
                                        -ms-text-size-adjust: none;
                                        mso-line-height-rule: exactly;
                                        text-decoration: none;
                                        color: #75b6c9;
                                        font-size: 16px;
                                      "
                                      ><img
                                        class="adapt-img"
                                        src="https://ltefgn.stripocdn.email/content/guids/CABINET_729b6a94015d410538fa6f6810b21b85/images/17611519723274581.png"
                                        alt="Nueva tarea"
                                        style="
                                          display: block;
                                          border: 0;
                                          outline: none;
                                          text-decoration: none;
                                          -ms-interpolation-mode: bicubic;
                                          border-radius: 3px 3px 0 0;
                                        "
                                        title="Nueva tarea"
                                        width="600"
                                    /></a>
                                  </td>
                                </tr>
                                <tr style="border-collapse: collapse">
                                  <td
                                    align="center"
                                    style="
                                      margin: 0;
                                      padding-bottom: 5px;
                                      padding-left: 20px;
                                      padding-right: 20px;
                                      padding-top: 25px;
                                    "
                                  >
                                    <h2
                                      style="
                                        margin: 0;
                                        line-height: 24px;
                                        mso-line-height-rule: exactly;
                                        font-family: open sans, helvetica neue,
                                          helvetica, arial, sans-serif;
                                        font-size: 20px;
                                        font-style: normal;
                                        font-weight: bold;
                                        color: #444444;
                                      "
                                    >
                                      Nueva tarea asignada
                                    </h2>
                                  </td>
                                </tr>
                                <tr style="border-collapse: collapse">
                                  <td
                                    align="center"
                                    style="
                                      margin: 0;
                                      padding-left: 10px;
                                      padding-right: 10px;
                                      padding-top: 15px;
                                      padding-bottom: 25px;
                                    "
                                  >
                                    <span
                                      class="es-button-border"
                                      style="
                                        border-style: solid;
                                        border-color: #75b6c9;
                                        background: #75b6c9;
                                        border-width: 1px;
                                        display: inline-block;
                                        border-radius: 28px;
                                        width: auto;
                                      "
                                      ><a
                                        href="https://danieluribedgsan.github.io/azlo-admin/index.html"
                                        class="es-button"
                                        target="_blank"
                                        style="
                                          mso-style-priority: 100 !important;
                                          text-decoration: none;
                                          -webkit-text-size-adjust: none;
                                          -ms-text-size-adjust: none;
                                          mso-line-height-rule: exactly;
                                          color: #ffffff;
                                          font-size: 16px;
                                          border-style: solid;
                                          border-color: #75b6c9;
                                          border-width: 15px 25px 15px 25px;
                                          display: inline-block;
                                          background: #75b6c9;
                                          border-radius: 28px;
                                          font-family: open sans, helvetica neue,
                                            helvetica, arial, sans-serif;
                                          font-weight: normal;
                                          font-style: normal;
                                          line-height: 19px;
                                          width: auto;
                                          text-align: center;
                                        "
                                        >Ver tarea →</a
                                      ></span
                                    >
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>

            <table
              cellpadding="0"
              cellspacing="0"
              class="es-footer"
              align="center"
              style="
                mso-table-lspace: 0pt;
                mso-table-rspace: 0pt;
                border-collapse: collapse;
                border-spacing: 0px;
                table-layout: fixed !important;
                width: 100%;
                background-color: transparent;
                background-repeat: repeat;
                background-position: center top;
              "
            >
              <tr style="border-collapse: collapse">
                <td align="center" style="padding: 0; margin: 0">
                  <table
                    class="es-footer-body"
                    cellspacing="0"
                    cellpadding="0"
                    align="center"
                    style="
                      mso-table-lspace: 0pt;
                      mso-table-rspace: 0pt;
                      border-collapse: collapse;
                      border-spacing: 0px;
                      background-color: #f6f6f6;
                      width: 640px;
                    "
                  >
                    <tr style="border-collapse: collapse">
                      <td
                        align="left"
                        style="
                          margin: 0;
                          padding-left: 20px;
                          padding-right: 20px;
                          padding-top: 40px;
                          padding-bottom: 40px;
                        "
                      >
                        <table
                          width="100%"
                          cellspacing="0"
                          cellpadding="0"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            border-collapse: collapse;
                            border-spacing: 0px;
                          "
                        >
                          <tr style="border-collapse: collapse">
                            <td
                              valign="top"
                              align="center"
                              style="padding: 0; margin: 0; width: 600px"
                            >
                              <table
                                width="100%"
                                cellspacing="0"
                                cellpadding="0"
                                role="presentation"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                "
                              >
                                <tr style="border-collapse: collapse">
                                  <td
                                    align="center"
                                    style="
                                      padding: 0;
                                      margin: 0;
                                      padding-bottom: 5px;
                                      font-size: 0;
                                    "
                                  >
                                    <a
                                      target="_blank"
                                      href="https://danieluribedgsan.github.io/azlo-admin/index.html"
                                      style="
                                        -webkit-text-size-adjust: none;
                                        -ms-text-size-adjust: none;
                                        mso-line-height-rule: exactly;
                                        text-decoration: none;
                                        color: #999999;
                                        font-size: 14px;
                                      "
                                      ><img
                                        src="https://ltefgn.stripocdn.email/content/guids/CABINET_729b6a94015d410538fa6f6810b21b85/images/55891519718168286.png"
                                        alt="Logo"
                                        style="
                                          display: block;
                                          border: 0;
                                          outline: none;
                                          text-decoration: none;
                                          -ms-interpolation-mode: bicubic;
                                        "
                                        title="Logo"
                                        width="35"
                                    /></a>
                                  </td>
                                </tr>
                                <tr style="border-collapse: collapse">
                                  <td
                                    align="center"
                                    style="
                                      padding: 0;
                                      margin: 0;
                                      padding-top: 15px;
                                      padding-bottom: 15px;
                                    "
                                  >
                                    <p
                                      style="
                                        margin: 0;
                                        -webkit-text-size-adjust: none;
                                        -ms-text-size-adjust: none;
                                        mso-line-height-rule: exactly;
                                        font-family: open sans, helvetica neue,
                                          helvetica, arial, sans-serif;
                                        line-height: 21px;
                                        color: #999999;
                                        font-size: 14px;
                                      "
                                    >
                                      AZLO ADMIN
                                    </p>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </div>
  </body>
</html>`,
    },
  })
}
