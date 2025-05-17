//ejemplo basico For IN con un objeto
let alumna = {
    nombre: 'Lucia',
    edad: 32,
    curso: '18va BackEnd'
};

for (let propiedad in alumna) {
    console.log(`Clave: ${propiedad}, Valor: ${alumna[propiedad as keyof typeof alumna]}`);
};

/*Primer ej: se iteran las porpiedades del objeto alumna que representan una estudiante
llanada lucia, con edad y el curso que esta tomando.Se imprimen las claves y valores correspondientes

Propiedad key of typeof alumna: alumna con esto, le decimos al compilador qye la va */