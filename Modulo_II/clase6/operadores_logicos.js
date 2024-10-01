// Permiten combinar valores booleanos, el resultado tambien devuelve un booleano.

//1. AND (&&) TODOS LOS VALORES deben evaluar como TRUE para que el resultado sea true.

(10 > 15) && (10 != 20) //False
(12 % 4 == 0) && (12 != 24) //True

//2. OR (||) AL MENOS UN VALOR debe evaluar como TRUE para que el resultado sea true.

(10 > 15) || (10 != 20)     //true
(12 % 5 == 0) || (12 != 12) //false

//3. NOT (!) NIEGA LA CONDICION. Si era true, será false y viseversa.

!false // true
!(20 > 15)  //false