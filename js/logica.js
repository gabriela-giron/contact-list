
enviar_tabla();

function get_names(event) {

    var id_contacto = 0;
    let nombre_persona = document.getElementById("nombre").value;
    let apellido_persona = document.getElementById("apellido").value;
    let num_telefono = document.getElementById("Telefono").value;

    if(nombre_persona == "" || apellido_persona == "" || num_telefono == ""){
        alert('por favor envia datos primero, me da ansiedad');
    }else {
        if(nombre_persona !== "" && apellido_persona !== "" && num_telefono !== "" && num_telefono.length == 8) {
            const contacto = {
                nombre: nombre_persona,
                apellido: apellido_persona,
                telefono: num_telefono
            }
        
            id_contacto = leer_local_storage(id_contacto);
            console.log('id contacto ' + id_contacto);
            const string_contacto = JSON.stringify(contacto);
            console.log(string_contacto);
        
            //id_contacto+1;
            localStorage.setItem(id_contacto,string_contacto);
            //vaciar_tabla();
            enviar_tabla();

        } else {
            alert('por favor valida tus datos!');
        }
    }
    
    event.preventDefault();

}

function leer_local_storage(id_contacto) {

    var cantidad_datos = localStorage.length;

    //i debe ser menor a cantidad de datos por los indices de los elementos del local storage, que igual
    //que un array, empiezan con 0, si se deja < o igual daria error porque leeria de mas cuando
    //la informacion capaz y ya termino
    for(var i = 0; i < cantidad_datos; i++){
        var id_lista = localStorage.key(i);
        var j = i;
        j ++;

        if(j == cantidad_datos) {

            id_contacto = cantidad_datos;
            id_contacto++;

        }
        
    }

    return id_contacto;

}

function enviar_tabla(){

    //vaciar_tabla();

    var cantidad_datos = localStorage.length;

    var tabla = document.getElementById("contactos");
    var celdas_info = tabla.querySelector("tbody");

    vaciar_tabla(celdas_info);

    for(var i = 0; i < cantidad_datos; i++){

        // if (i == 0){
        //     console.log('vaciar');
        //     vaciar_tabla(celdas_info);
        // }

        var id_lista = localStorage.key(i);
        var resto_info = localStorage.getItem(id_lista);

        //lista_contactos[id_lista] = resto_info;

        var contactos = JSON.parse(resto_info);
        var fila = document.createElement("tr");

        var nombre_contacto = document.createElement("td");
        nombre_contacto.textContent = contactos.nombre;

        var apellido_contacto = document.createElement("td");
        apellido_contacto.textContent = contactos.apellido;

        var telefono_contacto = document.createElement("td");
        telefono_contacto.textContent = contactos.telefono;

        var borrar_contacto = document.createElement("button");
        borrar_contacto.addEventListener("click", function() {
            eliminar_contacto(id_lista);
        });
        borrar_contacto.textContent = "borrar";

        fila.appendChild(nombre_contacto);
        fila.appendChild(apellido_contacto);
        fila.appendChild(telefono_contacto);
        fila.appendChild(borrar_contacto);
        
        celdas_info.appendChild(fila);
        
    }

}

function eliminar_contacto(id_lista) {
    var id_contacto = id_lista;
    localStorage.removeItem(id_contacto);
    location.reload();
}

function vaciar_tabla(celdas_info) {
    //para vaciar la tabla antes de agregar para que no se vea como si agregue mas de 1 registro
    while(celdas_info.firstChild){
        celdas_info.removeChild(celdas_info.firstChild);
    }
}



