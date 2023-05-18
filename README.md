# DOCUMENTACION TECNICO

Primero se tiene que clonar el repositorio

~~~
git clone https://github.com/EnriqueChiu/PruebaTecnico_ReactJS_Frontend.git
~~~

Luego para ejecutar el frontend se debe ingresar a la carpeta frontend y abrir un terminal e instalar las depedencias necesarios con el siguiete comando

~~~
npm install
~~~

Ya una vez instalado las depedencias necesarias se procede a correr el frontend con el siguiente comando

~~~
npm run dev
~~~

Esto seria para correr el frontend, por defecto el frontend estara en el http://127.0.0.1:5173/ o http://localhost:5173/

## Especificacion tecnicas donde se desarrollo el frontend

* Windows 10
* Procesador AMD Ryzen 5 2500U with Radeon Vega Mobile Gfx   2.00 GHz
* 8.00 GB de RAM
* Sistema operativo de 64 bits


## Tecnologia que se uso

* Vite (Para la creacion de ReactJS)
* React (Frontend)


# MANUAL DE USUARIO

Se va a explicar el uso basico de la aplicacion.

* Primero se mostrada la pagina de Login donde pedira el gmail y la contraseña.
  
  * Usuario Admin por defecto
    * Email: admin@gmail.com
    * Password: admin123

  * Usuario regular
    * Email: cliente1@gmail.com
    * Password: 123

* Tambien hay posibilidad de crear una cuenta nuevo en el apartado donde dice "aqui".

* Depediendo de que rol (admin o regular) tiene acceso al diferentes apartados de la aplicacion.

  * Rol admin: Puede agregar nuevo producto, ver pedidos y ver pedidos completados, estos apartados se puede acceder por medio de la barra de navegacion que se encuentra en la parte superior. La mayoria de las paginas cuando se realice una accion se mostrada una alerta donde informa si se realizo correctamente la accion.

  * Rol regular: Solo puede comprar los productos disponibles.

* Cada sesion va a durar un tiempo de 5 minutos, pasado ese tiempo aparecera una alearta y se redirigira a la pagina de Login.