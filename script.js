
function guardar() {
    db.collection("usuarios").add({
        email: document.getElementById('email').value,
        nombre: document.getElementById('nombre').value,
        apellido: document.getElementById('apellido').value,
    })
        .then((docRef) => {
            MSJEXITO();
        })
        .catch((error) => {
            MSJERROR();
        });
}

function ver() {
    db.collection("usuarios").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            document.getElementById('imprimir').innerHTML += `
            <br>
                ${doc.data().email}
            <br>
            `;
            console.log(`${doc.id} => ${doc.data().nombre}`);
        });
    });
}

//validar que los campos no esten vacios y el email sea valido
function validar() {
    var email = document.getElementById('email').value;
    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var expresion = /\w+@\w+\.+[a-z]/;

    if (email === "" || nombre === "" || apellido === "") {
        MSJERRORVALIDAR();
        return false;
    }
    else if (!expresion.test(email)) {
        MSJERRORVALIDAR();
        return false;
    }
    else {
        buscar();
    }
}


//si el email no existen en la base de datos, se guarda el usuario en la base de datos y sino de muestra el error
function buscar() {
    var email = document.getElementById('email').value;
    db.collection("usuarios").where("email", "==", email)

        .get()
        .then((querySnapshot) => {
            if (querySnapshot.empty) {
                guardar();
            }
            else {
                MSJERRORID();
            }
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });
}



const MSJERROR = () => {
    Swal.fire({
        icon: 'error',
        title: 'ERROR',
        text: 'No se pudo guardar el usuario',
        footer: '<a href="">Why do I have this issue?</a>'
    })
}

const MSJERRORID = () => {
    Swal.fire({
        icon: 'error',
        title: 'E-MAIL YA REGISTRADO',
        text: 'El correo ya se encuentra registrado',
        footer: '<a href="">Why do I have this issue?</a>'
    })
}
const MSJERRORVALIDAR = () => {
    Swal.fire({
        icon: 'error',
        title: 'CAMPOS INCORRECTOS',
        text: 'Por favor ingrese los datos correctamente',
        footer: '<a href="">Why do I have this issue?</a>'
    })
}

const MSJEXITO = () => {
    Swal.fire({
        icon: 'success',
        title: 'USUARIO REGISTRADO',
        text: 'Ya puede participar y ganar',
       // imageUrl: '../img/descarga.jpg',
        //imageWidth: 500,
        //imageHeight: 300,
        //imageAlt: 'Custom image',
        footer: '<a href="">Why do I have this issue?</a>'
    })
}