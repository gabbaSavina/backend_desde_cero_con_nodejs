//importasmos express y el tipo router para manejar rutas
import express, {Application} from "express";

//importamos el archivo el archivo de las rutas de los usuarios
import userRoutes from './userRouter';

//creamos una instancia del router
const app: Application = express();

//usamos el router/enrutador de usuarios y lo conectamos
//a la ruta base /api
//Todas las rutas definidas en 'userRoutes' se accederan con
//el prefijo /api
app.use('/api', userRoutes);

//configuramos el servidor para que escuche en el puerto 300
app.