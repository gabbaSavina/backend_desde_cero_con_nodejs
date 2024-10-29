//Ejercicio 10: Uso de enum para niveles de acceso
//1. Declara un enum llamado NivelesDeAcceso con los valores: Admin,
//Usuario, Invitado.
enum NivelesDeAcceso {
    Admin,
    Usuario,
    Invitado
};


//2. Crea una función que reciba un nivel de acceso y devuelva un mensaje
//indicando el tipo de permisos disponibles para ese nivel.

function accederSistema (nivel: NivelesDeAcceso): string {
    switch (nivel) {
        case NivelesDeAcceso.Admin:
            return 'Ingreso al Sistema como Administrador';
        case NivelesDeAcceso.Usuario:
            return 'Ingreso al Sistema como Usuario';
        case NivelesDeAcceso.Invitado:
            return 'Ingreso al Sistema como Invitado';
    }
};

//3. Usa el enum para llamar a la función con el nivel Usuario y muestra el
//resultado por consola.
console.log(accederSistema(NivelesDeAcceso.Invitado));