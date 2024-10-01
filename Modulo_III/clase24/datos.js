//En datos.js, define un objeto que tenga información como nombreCurso,
//duracion, y temas (array de cadenas).
let cursoActual = {
    nombreCurso: 'Finanzas Personales',
    duracion: '4 semanas',
    temas: ['Introducción a las FP',
        'Creación y gestión de presupuestos',
        'Fundamentos del ahorro',
        'Intro. a la inversión',
        'El credito',
        'Gestión de deudas',
        'Planificación financiera a largo plazo',
        'Consolidación y aplicación práctica de FP',
    ],
};

//Exporta este objeto para que pueda ser utilizado en otros archivos.
module.exports = {
    cursoActual
};
