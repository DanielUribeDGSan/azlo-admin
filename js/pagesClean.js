setTimeout(function () {

    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            const { displayName, email, photoURL } = user;

            const arrPermisos = [
                "daniel@azlo.online",
            ];

            const validPermiso = arrPermisos.includes(email);
            if (validPermiso == false) {
                $('.validClass').hide();
            } else {
                $('.validAll').hide();
            }
        } else {

        }
    });
}, 5000);