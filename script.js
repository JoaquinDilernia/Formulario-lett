function guardar(){
    db.collection("usuarios").add({
        email: document.getElementById('email').value,
        nombre: document.getElementById('nombre').value,
        apellido: document.getElementById('apellido').value,
    })
    .then((docRef) => {
        alert("Usuario registrado ");
    })
    .catch((error) => {
        alert("Error al registrar usuario");
    });
}

function ver (){
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




