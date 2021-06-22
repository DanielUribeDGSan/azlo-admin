$(document).ready(function () {

    let db = firebase.firestore();
    var dataSet = new Array();
    var i = 1;
    db.collection('col-sala')
        .doc('azlo')
        .collection('col-pages')
        .get()
        .then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {

                console.log(doc.data().arrPages.pagesArr.tareas);


                doc.data().arrPages.pagesArr.tareas.map(({ status, pagina, tarea, usuario, name }, i) => {
                    console.log(tarea, 'tarea');
                    if (status == "completed") {
                        dataSet.push([
                            usuario,
                            tarea,
                            status,
                            name,
                        ]);
                        i = i + 1;
                    }
                });


            });


            $("#tableCompleted").DataTable({
                language: {
                    decimal: "",
                    emptyTable: "No hay datos disponibles en la tabla",
                    info: "Demostración _START_ to _END_ de _TOTAL_ entradas",
                    infoEmpty: "Showing 0 to 0 of 0 entries",
                    infoFiltered: "(filtrado de _MAX_ total entradas)",
                    infoPostFix: "",
                    thousands: ",",
                    lengthMenu: "Seleccionar el número de entradas _MENU_",
                    loadingRecords: "Cargando...",
                    processing: "Procesando...",
                    search: "Buscar:",
                    zeroRecords: "No se encontraron registros coincidentes",
                    paginate: {
                        first: "Primero",
                        last: "Último",
                        next: "Siguiente",
                        previous: "Anterior"
                    },
                    aria: {
                        sortAscending: ": activar para ordenar la columna ascendente",
                        sortDescending: ": activar para ordenar la columna descendente"
                    }
                },
                dom: "lBfrtip",
                buttons: [{
                    extend: "print",
                    text: "Imprimir tabla"
                },
                {
                    extend: "excel",
                    text: "Exportar a xlsx"
                },
                {
                    extend: "csv",
                    text: "Exportar a csv"
                },
                {
                    extend: "pdf",
                    text: "Exportar a pdf"
                }
                ],
                lengthMenu: [
                    [10, 2, 25, 50, -1],
                    [10, 2, 25, 50, "All"]
                ],
                data: dataSet,
                columns: [{
                    title: "Aignado(a)"
                },
                {
                    title: "Tarea"
                },
                {
                    title: "Status"
                },
                {
                    title: "Completada por"
                },
                ]
            });
        });


});


// tarea pendiente

$(document).ready(function () {

    let db = firebase.firestore();
    var dataSet = new Array();
    var i = 1;
    db.collection('col-sala')
        .doc('azlo')
        .collection('col-pages')
        .get()
        .then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {

                console.log(doc.data().arrPages.pagesArr.tareas);


                doc.data().arrPages.pagesArr.tareas.map(({ status, pagina, tarea, usuario, name }, i) => {
                    console.log(tarea, 'tarea');
                    if (status == "waiting") {
                        dataSet.push([
                            usuario,
                            tarea,
                            status,
                            name,
                        ]);
                        i = i + 1;
                    }
                });


            });


            $("#tableEspera").DataTable({
                language: {
                    decimal: "",
                    emptyTable: "No hay datos disponibles en la tabla",
                    info: "Demostración _START_ to _END_ de _TOTAL_ entradas",
                    infoEmpty: "Showing 0 to 0 of 0 entries",
                    infoFiltered: "(filtrado de _MAX_ total entradas)",
                    infoPostFix: "",
                    thousands: ",",
                    lengthMenu: "Seleccionar el número de entradas _MENU_",
                    loadingRecords: "Cargando...",
                    processing: "Procesando...",
                    search: "Buscar:",
                    zeroRecords: "No se encontraron registros coincidentes",
                    paginate: {
                        first: "Primero",
                        last: "Último",
                        next: "Siguiente",
                        previous: "Anterior"
                    },
                    aria: {
                        sortAscending: ": activar para ordenar la columna ascendente",
                        sortDescending: ": activar para ordenar la columna descendente"
                    }
                },
                dom: "lBfrtip",
                buttons: [{
                    extend: "print",
                    text: "Imprimir tabla"
                },
                {
                    extend: "excel",
                    text: "Exportar a xlsx"
                },
                {
                    extend: "csv",
                    text: "Exportar a csv"
                },
                {
                    extend: "pdf",
                    text: "Exportar a pdf"
                }
                ],
                lengthMenu: [
                    [10, 2, 25, 50, -1],
                    [10, 2, 25, 50, "All"]
                ],
                data: dataSet,
                columns: [{
                    title: "Aignado(a)"
                },
                {
                    title: "Tarea"
                },
                {
                    title: "Status"
                },
                {
                    title: "Completada por"
                },
                ]
            });
        });


});

// tarea incompleta

$(document).ready(function () {

    let db = firebase.firestore();
    var dataSet = new Array();
    var i = 1;
    db.collection('col-sala')
        .doc('azlo')
        .collection('col-pages')
        .get()
        .then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {

                console.log(doc.data().arrPages.pagesArr.tareas);


                doc.data().arrPages.pagesArr.tareas.map(({ status, pagina, tarea, usuario, name }, i) => {
                    console.log(tarea, 'tarea');
                    if (status == "pending") {
                        dataSet.push([
                            usuario,
                            tarea,
                            status,
                            name,
                        ]);
                        i = i + 1;
                    }
                });


            });


            $("#tableIncompleta").DataTable({
                language: {
                    decimal: "",
                    emptyTable: "No hay datos disponibles en la tabla",
                    info: "Demostración _START_ to _END_ de _TOTAL_ entradas",
                    infoEmpty: "Showing 0 to 0 of 0 entries",
                    infoFiltered: "(filtrado de _MAX_ total entradas)",
                    infoPostFix: "",
                    thousands: ",",
                    lengthMenu: "Seleccionar el número de entradas _MENU_",
                    loadingRecords: "Cargando...",
                    processing: "Procesando...",
                    search: "Buscar:",
                    zeroRecords: "No se encontraron registros coincidentes",
                    paginate: {
                        first: "Primero",
                        last: "Último",
                        next: "Siguiente",
                        previous: "Anterior"
                    },
                    aria: {
                        sortAscending: ": activar para ordenar la columna ascendente",
                        sortDescending: ": activar para ordenar la columna descendente"
                    }
                },
                dom: "lBfrtip",
                buttons: [{
                    extend: "print",
                    text: "Imprimir tabla"
                },
                {
                    extend: "excel",
                    text: "Exportar a xlsx"
                },
                {
                    extend: "csv",
                    text: "Exportar a csv"
                },
                {
                    extend: "pdf",
                    text: "Exportar a pdf"
                }
                ],
                lengthMenu: [
                    [10, 2, 25, 50, -1],
                    [10, 2, 25, 50, "All"]
                ],
                data: dataSet,
                columns: [{
                    title: "Aignado(a)"
                },
                {
                    title: "Tarea"
                },
                {
                    title: "Status"
                },
                {
                    title: "Completada por"
                },
                ]
            });
        });


});
