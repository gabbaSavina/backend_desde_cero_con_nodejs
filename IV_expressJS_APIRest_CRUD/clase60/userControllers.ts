//Importamos los tipos requestr y response de express para tipar
import { Request, Response } from "express";

//funcion para obtener los usuarios
//Responde con un mensaje indicando que se estan obt los usuarios
export const getAllUsers = (req: Request, res: Response): void => {
    res.json({message: 'Obteniendo todos los usuarios'});
};



