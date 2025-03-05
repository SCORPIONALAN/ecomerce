# ecomerce
Esta proyecto muestro como crear una pagina de ecommerce completa solamente usando JS con todas sus librerias,
bajo el entorno de ejecucion MERN
## Primer avance
Aqui me encargue de hacer el backend de mi futura pagina, implemente la libreria de express y mongoose. Modulice
de momento la parte del controlador y los modelos. Hice routing para que el codigo en general se vea mas limpioy sea mas facil de entender y leer.

## Segundo avance
Aqui me encargue de hacer el frontend con el framework react, junto a la libreria chakra para hacer la pagina visual, de igual forma tuve que usar zustand para crear states de forma global para compartir recursos de otros componentes de react de forma mas eficiente.
Y ya de paso conectamos el front con el back para hacer fetch de tipo post para agregar desde la pagina los productos a la base de datos
Uso de toastr para notificaciones mas agradables para el usuario


## Nota de produccion
Primero que nada tenemos que convertir nuestro react en un componente estatico, para ello, ejecutaremos en la terminal de frontend npm run build, una vez cargado, nos vamos a la configuracion del servidor, usamos el entorno de produccion para mandar de respuesta nuestro react

#### NODE_ENV en entornos windows no sirve, asi que tenemos que descargar cross-env