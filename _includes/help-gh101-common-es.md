### Resolviendo problemas comunes

Hay un par de razones por las que los builds pueden fallar en esta clase. Si tu pull request no está pasando y no se puede hacer merge, comprueba con cuidado lo siguiente:

#### El nombre del archivo es incorrecto

El archivo para la clase debería estar en la carpeta `/_pins` y debería estar nombrado como `TU-USUARIO`.json. Comprueba para asegurarte de que:

 - Tu archivo no está en las carpetas `/_pin` o `/pins`.
 - Tu arhivo no termina con `.jason`, `.md`, `.txt`.

#### El formato del archivo es incorrecto

Los contenidos de tu archivo `.json` deberían tener este aspecto:

  ```
  ---
  githubHandle: TU-USUARIO
  latitude:
  longitude:
  ---

  ```

Asegúrate de que:

- Has incluido 3 guiones antes y después de tu código `---` y no `...` o cualquier otro carácter.
- La `H` en `Handle` es mayúscula.
- `Handle`, `latitude`, y `longitude` están escritos correctamente.
