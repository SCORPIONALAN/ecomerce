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

<<<<<<< HEAD

## Nota de produccion
Primero que nada tenemos que convertir nuestro react en un componente estatico, para ello, ejecutaremos en la terminal de frontend npm run build, una vez cargado, nos vamos a la configuracion del servidor, usamos el entorno de produccion para mandar de respuesta nuestro react

#### NODE_ENV en entornos windows no sirve, asi que tenemos que descargar cross-env
=======
## Tercer avance
Esta parte fue de las mas complicada ya que tenia que hacer que mi contexto global supiera comunicarse con el backend para lograr que sus funcionalidades sirvan.
En mi segundo avance solamente hice el create y el fetch ya que cada que se creaba un producto actualizabamos el contexto global y al hacerlo en la pagina principal se cargaba con los elementos que hubiese dentro de la base de datos. En este tercer avance, me dedique a hacer el eliminado y la actualizacion del CRUD. haciendo un fetch con el link y el tipo de metodo que queriamos hacer, solo que en el de actualizar teniamos que pasar un body asi como el de crear. Realmente no hay muchas diferencias entre cada cosa, solo hay que saber actualizar el estado del useProductStore para que la pagina se actualice sin necesidad de ser refrescada.
De igual forma dentro del ProductoCard.jsx creamos las funciones correspondientes para hacer el borrado o la actualizacion de los elementos, esto al estado global de nuestra pagina con updateProduct y deleteProduct pertenecientes a useProductStore().
>>>>>>> d9ef4b71430fef905951aa43a8948c8b56e3a039
