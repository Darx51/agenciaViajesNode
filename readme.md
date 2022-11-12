1- instalar Node
2- instalar express (esta sera una dependencia de produccion)
     npm i express
3- instalar nodemon (esta sera una dependencia que solo se usara en desarrollo sera como -watch)
    npm i --save-dev nodemon
4- agregamos en package.json un comando de ejecucion para el servidor en node
    (nodemon permite que cada cambio que se hace, se reinicia el servidor como un watch y index.js es el archivo que queremos ejecutar)
              "dev":"nodemon index.js"       
    lo mandamos llamar con npm run dev
5- debemos eliminar la linea test en package.json, si no no funciona
6- para mandar llamar a express como modulo import de javascript nativo debemos 
    agregar la linea en el package.json
        "type":"module"
7- res.send('imprime un texto')
   res.render('imprime un archivo completo')
8- Template engine (por lo reggular te permite escribir codigo de javascript dentro de html)
    -PUG, EJS, HANDLEBARS, REACT (similar a la libreria react)
    npm install pug (para usar PUG)
9- el igual debe estar pegado a p en este caso, si no no detecta la variable viajes o tambien de esta otra forma
    h1 hola 
    p= viajes  
    p #{viajes}  

10- las variables de entorno hay que oinstalar la libreria dotenv y utilizar la libreria en el archivo donde 
    se va a utilizar en este caso la db