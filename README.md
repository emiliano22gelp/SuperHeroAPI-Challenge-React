IMPORTANTE: (LEER ANTES DE PROBAR LA APLICACION)

## Paso 1: Clonar el repositorio

# con http:

git clone https://github.com/emiliano22gelp/SuperHeroAPI-Challenge-React.git

# con ssh:

git clone git@github.com:emiliano22gelp/SuperHeroAPI-Challenge-React.git

### Paso 2: Instalar Dependencias

- cd "carpeta clonada"
- npm install

## Paso 3: Ejecutar la app en modo desarrollo

- npm run start
- Por defecto la app se levanta en el puerto 3000 [http://localhost:3000].

## Herramientas y Librerias utilizadas:

- Boostrap (para diseño responsive).
- Material UI (para la reutilizacion de componentes simples ya desarrollados, como por ejemplo, el componente TextField para simular un input de texto).
- Formik (para la validacion de formularios).
- Axios (para peticiones a la API de Superheroes).
- Hooks de estado y de efecto, useState y useEffect (para utilizar durante la renderizacion de componentes).
- localStorage (para almacenar datos que deben persistir mas alla del componente en el que son utilizados, por ejemplo informacion del equipo de superheroes y el token del usuario autenticado).

## Algunas consideraciones importantes sobre la app desarrollada:

- Al ingresar a la app se visualizara un formulario de autenticacion.
  Ingresar email "challenge@alkemy.org" y password "react" para loguearse exitosamente.
  Cualquier otro email o password que se intente ingresar retornara un error de autenticacion.

- Al autenticarse la app redirige a la ruta que muestra el equipo de Superheroes (la primera vez que se ingresa estara vacio). Luego cada vez que se ingrese se mantendra el estado del equipo hasta el ultimo acceso.

- Para buscar superheroes y agregarlos al equipo, pulsar la opcion "Buscar Superheroes", en la pantalla del equipo. Esto conducira a la ruta de buscar superheroes y se visualizara un formulario con un campo "Nombre" donde debe indicarse el nombre del superheroe a buscar. En caso de existir resultados que coincidan con la busqueda se mostraran los superheroes correspondientes con la opcion de agregarlos al equipo. Caso contrario, si no existen resultados, sera informado por la app.

- Para agregar un superheroe al equipo pulsar la opcion "Agregar SuperHeroe al equipo" que aparecera en cada resultado de la busqueda.

- Una vez agregado al equipo, podremos ver el detalle de ese superheroe o eliminarlo del equipo. Para ver el detalle del mismo pulsar sobre la opcion "Detalle" que figura en la pantalla del equipo por debajo de cada superheroe perteneciente al equipo. Para eliminarlo del equipo pulsar la opcion "Eliminar" justo al lado de la opcion "Detalle".

- En el equipo ademas de mostrarse los superheroes agregados, tambien se mostrara informacion sobre el peso y altura promedio del equipo. Ademas se mostrara el acumulativo de powerstats ordenados del powerstat de mayor acumulativo al menor. Estos datos adicionales se actualizan cada vez que se agrega o elimina un superheroe del equipo.

- Para cerrar sesion pulsar sobre los 3 puntos "⁝" que aparecen en la parte superior derecha. Esto desplegara la opcion "Cerrar Sesion". Pulsar sobre la misma y la sesion quedara inactiva redirigiendo nuevamente al formulario de autenticacion.

## Validaciones

- Si no me logueo e intento acceder a la ruta del equipo, la que muestra el detalle de un superheroe o a la que me permite buscar superheroes; la app redirige instantaneamente a la ruta del login. De igual manera si ya estoy autenticado e intento acceder al formulario del login la app redirige a la ruta del equipo.

- Si en la ruta del detalle intento enviar por GET el id de un superheroe que no pertenece al equipo, la app informa dicha situacion. Esto quiere decir que unicamente se podra visualizar el detalle de aquellos superheroes que PERTENEZCAN AL EQUIPO.

- Una vez que agrego un superheroe al equipo, se podra buscarlo nuevamente en el formulario de busqueda
  pero ya no estara disponible la opcion de agregarlo al equipo (esto es porque ya pertenece al equipo).

- Una vez que el equipo supera los 6 miembros, se podra seguir buscando superheroes en el formulario de busqueda pero ya no sera posible agregar ningun superheroe mas al equipo. La app informara que se supero el tope maximo. La unica manera de volver a agregar un superheroe al equipo es eliminando a alguno del mismo.

- Si ingreso a cualquier ruta no existente, la app mostrara un mensaje 404 Not Found
