// simulamos una base de datos con un array en memoria
let tasks = [
    { id:1, title:'Aprendemos NodeJS', completed: false },
    { id:2, title:'Aprendemos MVC', completed: true }
];

// Funcion para obtener todas las tareas
const getAllTasks = () => tasks;

//funcion para agregar una nueva tarea
const addTask = (task) => {
    tasks.push(task) //Agregamos con push una nueva tarea
};

// Funcion para actualizar una tarea existentes
const updateTask = (is, updatedTask) => {
    //Busca el indice de la tarea con el ID Proporcionado
    const index = tasks.findIndex((task) => task.id === id)
    //Actualiza la tarea si existe
    if (index !== -1) tasks[index] = { ...tasks[index], ...updateTask }
};

//funcion para eliminar una tarea por si id
const deleteTask = (id) => {
    tasks = tasks.filter((task) => task.id !== id)
};

module.exports = {
    getAllTasks,
    addTask,
    updateTask,
    deleteTask
};