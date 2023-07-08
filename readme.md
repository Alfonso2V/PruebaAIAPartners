#Información importante
\_Usando principalmente express para su elaboracion, asi como una base de datos relacional que fue mySQL.
##Inicio
\_Estas instrucciones lo ayudara a tener una copia del funcionamiento en su maquina local para propositos de pruebas.
###Instalacion
\_Creacion de base de datos, hay adjunto un archivo llamado **db_pruebas.sql** solo importar ese archivo o ejecutar las sentencias ahi establecidas para obtener una copia exacta de la base de datos de pruebas, en caso de que se quiera cambiar el nombre de la db, la direccion IP, usuario y contraseña, asi como el puerto de ejecucion del servidor. Se encuentra un archivo .env en donde podra manipular las variables globales como mas le convenga.

Una vez funcionando la db hay que inicialisar el proyecto con npm install, se instalaran todas las dependencias utilizadas de forma local, el script para inicar el servidor es **npm run serve**

###Peticiones
\_GET a /getPackages Para obtener toda la informacion de TODOS los envios registrados, que incluyen ID, metodo de transporte, nombre del envio(paquete), fecha de envio y su estado(Enviado, en camino, entregado, etc).

GET a /getPackages/:id Para obtener toda la informaicon de un envio en especifio enviando solamente el ID de este.
Por ejemplo

```
localhost:4000/getPackages/10
```

PUT a /send Para registrar un nuevo envio, este requiere recibir un objeto JSON con las siguientes dos propiedades -> nombre del paquete y id del metodo transporte.
Ejemplo:

```
{
    nombre_paquete:"Envio 3",
    idTransporte: 2
}
```

El id del tipo de transporte es obtenido de la tabla catalogos_transportes que ya se encontrara cargada en las intrucciones de la parte superior.

POST a /update Para actualizar un registro previamente creado, se requiere recibir un objeto JSON con las siguiente propiedades -> nombre_paquete, idTransporte, idenvio, status para actualizar cualquiera de ellos.
Ejemplo:

```
{
    nombre_paquete:'Envio 3',
    idTransporte:1,
    idenvio:10,
    status:'Entregado'
}
```

DELETE a /delete Para eliminar un registro enviando unicamente el ID a eliminar.
Ejemplo:

```
{
    idenvio:10
}
```

ALL a /(asterico) Para manejar las rutas que no existan, regresar un status 404 y un mensaje de recurso no encontrado.
