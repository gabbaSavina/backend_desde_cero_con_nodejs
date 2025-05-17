// importamos expres y el tipo de router para manejar rutas
import express, {Router} from 'express'

//importamos el controlador que es el que tiene las funciones 
import userController from './userController';

//Creamos una instancia del router
const router: Router = express.Router();

//ruta GET: para obtener todos los usuarios
//Se ejecuta la funcion getAllUsers del controlador
router.get('/', userController.getAllUsers);

//Ruta POST: para crear un nuevo usuario
//Se ejecuta la funcion 'createUser' del controlador
router.post('/', userController.createUser);

//ruta GET: para obtener un usuario especifico por ID
//el ID, se recibe como paramatero en la url
//se ejecuta la funcion 'getUserById' del controlador
router.get('/:id', userController.getUserById);

//Ruta PUT: para actualizar un usuario especifico por id
//el id se recibe como parametro en la url y se envia
//la info actualizada en el cuerpo del a solicitud
router.put('/:id', userController.updateUser);

//Ruta delete: para eliminar un usuario especifico por su id
//el id se recibe como parametro de la url
router.delete('/:id', userController.deleteUser);



