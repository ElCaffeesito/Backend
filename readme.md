# Tarea 1 - Middleware de roles

por como está acomodada al menos esta tarea, colocaré el resto de carpetas en una de tareas, 
pero debido a que esta se especificó de usar la misma de los apuntes, lo dejo aquí :b

> Para comenzar con este y el resto de proyectos, debes de colocarte en la carpeta deseada que se quiera ejecutar y colocar el siguiente comando:

`npm run dev`

### Para la primer tarea es dentro de la carpeta **TypeScript**

Esta tarea consiste en entrar al [este enlace](http://localhost:3000)
colocando la ruta de "/usuarios", con esto te mandará a forbidden porque falta el rol deseado.

Para poder acceder a la tarea, es necesario colocar alguno de los roles (admin o gerente), con el query param de role

[ejemplo correcto](http://localhost:3000/usuarios?role=admin)

[ejemplo alternativo](http://localhost:3000/usuarios?role=gerente)

[ejemplo incorrecto](http://localhost:3000/usuarios?role=aaaaa)

