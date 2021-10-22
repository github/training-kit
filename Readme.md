Kit de formación de GitHub: hojas de trucos
Nosotros ❤️ ¡Colaboradores como tú!
Estamos ansiosos por trabajar con usted , nuestra comunidad de usuarios, para mejorar estos materiales y desarrollar otros nuevos. Consulte nuestra guía CONTRIBUYENDO para obtener más información sobre cómo comenzar.

¿Está buscando un recurso que alguna vez estuvo incluido en el kit de capacitación?
Este repositorio contiene actualmente las hojas de trucos de Git y GitHub. Si está buscando un proyecto que solía estar alojado aquí, como capacitación bajo demanda, listas de lectura, videos y recomendaciones de libros, vea esta confirmación en el historial del repositorio.

Proyectos utilizados en Training-Kit
Usamos Jekyll y Markdown .
Nuestro contenido se diseña utilizando el kit de herramientas Primer CSS .
Embalaje para ver detrás de su cortafuegos
Si desea tener una copia de los archivos que se entregarán desde un servidor web dentro de su firewall, comience por ejecutar script/package.

Ejecutar script/packagepara crear un tarball de lanzamiento. Este estará en el formato release-XXXXXXX.tgzpara que lo lleves a donde quieras.
Para probar que esto se ve bien, cree algunas carpetas mkdir -p test_site/kit.
Descomprimir la liberación, tar -xzf release-XXXXXXX.tgz -C test_site/kit.
Cambiar en el directorio test_site, cd test_site.
Ver el sitio:
Para la versión 2.x de Python, ejecute: python -m SimpleHTTPServer
Para la versión 3.x de Python, ejecute: python -m http.server
Nota: algunos servidores son más avanzados que otros y pueden manejar redireccionamientos, reconocimiento inteligente de .htmlarchivos, etc.
El contenido del sitio tiene licencia CC-BY-4.0 . CC-BY-4.0 le da permiso para usar el contenido para casi cualquier propósito, pero no le otorga ningún permiso de marca registrada, siempre que tome nota de la licencia y dé crédito, como se indica a continuación:

Contenido basado en github.github.com/training-kit/ utilizado bajo la licencia CC-BY-4.0 .

El código utilizado para construir y probar el sitio, así como los ejemplos de código en el sitio, si los hay, tienen licencia de CC0-1.0 . CC0 renuncia a todas las restricciones de derechos de autor, pero no le otorga ningún permiso de marca registrada.

Esto significa que puede usar el contenido y el código de este repositorio, excepto las marcas comerciales de GitHub en sus proyectos.

Cuando contribuye a este repositorio, lo hace con las licencias anteriores.
