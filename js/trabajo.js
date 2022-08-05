//CAPTURA DE NODOS
let boton_enviar = document.getElementById("boton_enviar");
let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let mail = document.getElementById("mail");
let telefono = document.getElementById("telefono");
let monto = document.getElementById("monto");
let cuota_3 = document.getElementById("cuota_3");
let cuota_6 = document.getElementById("cuota_6");
let cuota_12 = document.getElementById("cuota_12");
let cuota_18 = document.getElementById("cuota_18");
let cuota_24 = document.getElementById("cuota_24");

//CLASS PARA QUE GUARDE LA INFO DEL USUARIO
class Usuarios{
    constructor(nombre, apellido, mail, telefono, interes){
        this.nombre = nombre;
        this.apellido = apellido;
        this.mail = mail;
        this.telefono = telefono;
        this.interes = interes;
    }
}

function info_usuario(){
    let lista_usuarios = [];
    let nuevo_usuario = new Usuarios(nombre, apellido, mail, telefono, interes);
    lista_usuarios.push(nuevo_usuario);
    
    //LOCAL STORAGE
    let arreglo_JSON = JSON.stringify(lista_usuarios);
    localStorage.setItem("lista_usuario", arreglo_JSON);
    console.log(lista_usuarios)


}

//INTERES SEGUN LAS CUOTAS
function cuotas(monto){
    if(monto == cuota_3){
        let c3 = monto * 0.15
        return c3
    }
    else if(monto == cuota_6){
        return monto * 0.18
    }
    else if(monto == cuota_12){
        return monto * 0.21
    }
    else if(monto == cuota_18){
        return monto * 0.30
    }
    else{
        return monto * 0.40
    }
}

boton_enviar.addEventListener("click", function(e){
    e.preventDefault();
    //libreria
    Swal.fire({
        title: '<strong>Los datos que ingreso:</strong>',
        icon: 'info',
        html:
            `<h3> Nombre: ${nombre.value}</h3>
            <h3> Apellido: ${apellido.value}</h3>
            <h3> Mail: ${mail.value}</h3>
            <h3> Telefono: ${telefono.value}</h3>
            <h3> Monto: ${monto.value}</h3>
            <h3> Interes de su prestamo: ${cuotas(monto)}</h3>`,
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText:
            '<i class="fa fa-thumbs-up"></i> Acepto',
        cancelButtonText:
            '<i class="fa fa-thumbs-down">Cancelo</i>',
    })
    info_usuario();
    cuotas(monto);
})

