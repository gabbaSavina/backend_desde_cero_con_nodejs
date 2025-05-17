//importamos el modelo
const taskModel = require ('../models/taskModel');

//Funcion para menejar la solicitud de 'Obtener todas las tareas'
const getTasks = (req, res) => {
    const tasks = taskModel.getAllTasks();//llamamos al modelo
    res.json(tasks);// envia las tareas como respuesta en formato json
};

// Funcion para manejar la solicitud de 'Crear una nueva tarea'
const createTask = (req, res) => {
    //Creamos una tarea con un id unico
    const newTask = { id: Date.now(), ...req.body, complited: false };
    taskModel.addTask(newTask);// llamamos al modelo para agregar la tarea
    //responde con la tarea creada
    res.status(201).json(newTask);
};

//funcion para actualizar una tarea
const updateTask = (req, res) => {
    //obtenemos el id de la tarea desde los paramentros de la URL
    const {id} = req.params;
    //obtenemos los datos actualizados del cuerpo de la solicitud
    const updatedTask = req.body;
    //llama al modelo para actualizar la tarea
    taskModel.updateTask(Number(id), updateTask);
    //Envia un mensaje de exito
    res.json({message:'Tarea actualizada con exito.'});
};

//Funcion para manejar la solicitud de 'Eliminar una tarea'
const deleTask = (req, res) => {
    //obtenemos el ID de la tarea desde los pramaetros de la url
    const { id } = req.params;
    //obtenemos los datos actualizados del cuerpo de la solicitud
    res.json({ message: })
}