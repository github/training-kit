## Ayuda: Mi Build ha fallado

El repositorio de la clase está utilizando integración continua a través de [Travis CI](https://travis-ci.org) para hacer tests al código que has enviado. Para simplificar, está comprobando que la sintaxis es correcta en tu archivo.

Los archivos que estamos usando son muy delicados. Si has cometido algún error, verás un mensaje de que tu build ha fallado. Esto generalmente significa que el texto que has introducido es incorrecto. Comprueba la sintaxis con cuidado, compárala con las instrucciones y modifica tu archivo como sea necesario.

Cuando hagas commit de tus cambios, Travis CI volverá a comprobar tu archivo.

Continúa haciendo esto hasta que veas un mensaje de que el build ha pasado. Si necesitas ayuda, no olvides que puedes mencionar a `@githubteacher` en tu pull request.

### Ayuda con problemas específicos

El build puede fallar por diversos motivos. Observar los detalles del log de **Travis CI** puede ayudarte a resolver los problemas en tu código.

1. Abre el _Pull request_
2. Baja hasta abajo al icon "merge" en la sección donde dice 'checks have failed'.  
  Aquí verás muchas 'x's rojas :x:. Malo.  
3. Abre los `Details`  

El log o registro del build de Travis CI puede parecer un poco críptico. Pero con una lectura cuidadosa puede que seas capaz de adivinar la razón por la que tu build está fallando (por cierto, si piensas que el `job log` es críptico, échale un vistazo al `Raw log`).

El script para el build consiste en una serie de comandos. Puede resultar de ayuda saber que **cada nuevo comando empieza con un símbolo `$`**. Dichos comandos pueden ser algo simple o un nuevo (sub)script. Las propiedas individuales de tu _branch_ se testean en scripts individuales. Por ejemplo, **Travis CI** comprueba muy al principio que tu archivo esté formateado de manera apropiada como un "archivo `.yaml`".
