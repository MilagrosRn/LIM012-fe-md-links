# Markdown Links 🔗
## Description
Esta librería accede a los archivos de extensión Markdown, y extrae los links de éstos, permitiendole conocer el estatus y estadíticas de cada ruta HREF.

![imagenLinks](https://searchengineland.com/figz/wp-content/seloads/2018/08/internal-links-pages-linking-link-building-shutterstock_630855797.jpg)

# Diagramas de flujo 

## Javascript API ✅
![Api-Page-1](https://user-images.githubusercontent.com/60928469/80163190-fb8cfc00-859a-11ea-8028-992538d1cc0f.png)

## Interfaz CLI ✅
![CLI-Page-1](https://user-images.githubusercontent.com/60928469/80163301-54f52b00-859b-11ea-82a7-326092469cab.png)

## JavaScript API 📑

El módulo debe poder importarse en otros scripts de Node.js y debe ofrecer la
siguiente interfaz:

#### `mdLinks(path, options)`

##### Argumentos

- `path`: Ruta absoluta o relativa al archivo o directorio. Si la ruta pasada es
  relativa, debe resolverse como relativa al directorio desde donde se invoca
  node - _current working directory_).
- `options`: Un objeto con las siguientes propiedades:
  * `validate`: Booleano que determina si se desea validar los links
    encontrados.

##### Valor de retorno

La función debe retornar una promesa (`Promise`) que resuelva a un arreglo
(`Array`) de objetos (`Object`), donde cada objeto representa un link y contiene
las siguientes propiedades:

- `URL`: Ruta del archivo donde se encontró el link.
- `HREF`: URL encontrada.
- `TEXT`: Texto que aparecía dentro del link (`<a>`).

#### Ejemplo

```js
const mdLinks = require("md-links");

mdLinks("./some/example.md")
  .then(links => {
    // => [{ href, text, file }]
  })
  .catch(console.error);

mdLinks("./some/example.md", { validate: true })
  .then(links => {
    // => [{ href, text, file, status, ok }]
  })
  .catch(console.error);

mdLinks("./some/dir")
  .then(links => {
    // => [{ href, text, file }]
  })
  .catch(console.error);
```

# Modo de uso📌
## CLI (Command Line Interface - Interfaz de Línea de Comando)
El ejecutable de nuestra aplicación debe poder ejecutarse de la siguiente
manera a través de la terminal:

`md-links <path-to-file> [options]`

Por ejemplo:

```sh
$ md-links ./some/example.md
File number 1
  URL: ./some/example.md
  TEXT: learnyounode
  HREF: https://github.com/workshopper/learnyounode

```

#### Options

##### `--validate`

Si pasamos la opción `--validate`,`-v`

Por ejemplo:

```sh
$ md-links ./some/example.md --validate
File number 1
  URL: ./README-origin.md
  TEXT: how-to-npm
  HREF: https://github.com/workshopper/how-to-npm
  STATUS: 200
  STATUS TEXT: OK

```

Vemos que el _output_ en este caso incluye la palabra `ok` o `fail` después de
la URL, así como el status de la respuesta recibida a la petición HTTP a dicha
URL.

##### `--stats`

Si pasamos la opción `--stats` el output (salida) será un texto con estadísticas
básicas sobre los links.

```sh
$ md-links ./some/example.md --stats
Total: 3
Unique: 3
```

También podemos combinar `--stats` y `--validate` para obtener estadísticas que
necesiten de los resultados de la validación.

```sh
$ md-links ./some/example.md --stats --validate
Total: 3
Unique: 3
Broken: 1
```

