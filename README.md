
<p>
  <img align="right" width="180" margin-top="20%" height="180" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTWr1wgj5MZn2a7Mub8wAU_5a47dFMPeJy1Rup2bs5OxuhOyFBt&usqp=CAU">
</p>

# __md-links__ 💻
<p>
<img src="https://camo.githubusercontent.com/6579a18ac9156a16219421616864de4846593229/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f746573742d2d636f7665726167652d3130302532352d677265656e" data-canonical-src="https://img.shields.io/badge/test--coverage-100%25-green" style="max-width:100%;">
<p>
  
# Índice

* [1.Descripción](#1-Descripción)
* [2.Instalación](#2-Instalación)
* [3.Diagramas de flujo](#3-Diagramas-de-flujo)
* [4.backlog de implementación de la librería](#6-backlog-de-implementación-de-la--librería)
* [5.Javascript API](#4-Javascript-API)
* [6.Modo de uso](#5-Modo-de-uso)


***
# 1.Descripción
Esta librería accede a los archivos de extensión Markdown, y extrae los links de éstos, permitiendole conocer el caracteristicas y estadíticas de cada enlace encontrado.

# 2.Instalación ⚙

```sh
npm install MilagrosRn/md-links
```

# 3.Diagramas de flujo

### Javascript API ✅

<p>
  <img align="center" width="80%"  src="https://user-images.githubusercontent.com/60928469/82172510-f8321b00-988f-11ea-8a7b-3da41c57365a.png">
</p>

### Interfaz CLI ✅

<p>
  <img align="center" width="80%" src="https://user-images.githubusercontent.com/60928469/80163301-54f52b00-859b-11ea-82a7-326092469cab.png">
</p>

# 4. backlog de implementación de la librería

Este proyecto se implento durante 3 semanas y se trabajo la implementacion, planificacion y manejo de errores y mejoras, en github projects 

![image](https://user-images.githubusercontent.com/60928469/81372948-39247580-90c1-11ea-829f-8ab73f8eef8c.png)
![boardToDo](https://user-images.githubusercontent.com/60928469/82172659-6c6cbe80-9890-11ea-87e4-b6ad8c5e97c8.png)

## 5.JavaScript API 📑

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

![imageDir](https://user-images.githubusercontent.com/60928469/82178914-c4142580-98a2-11ea-8f4e-1bb925a73757.png)

![imageValidate](https://user-images.githubusercontent.com/60928469/82179086-1ce3be00-98a3-11ea-98d6-6f871db72b79.png)

![imageFile](https://user-images.githubusercontent.com/60928469/82179153-400e6d80-98a3-11ea-8682-c8160f3f0c23.png)


# 6.Modo de uso📌
## CLI (Command Line Interface - Interfaz de Línea de Comando)
El ejecutable de nuestra aplicación debe poder ejecutarse de la siguiente
manera a través de la terminal:

`md-links <path-to-file> [options]`

Por ejemplo:

![image](https://user-images.githubusercontent.com/60928469/81334259-66463900-906b-11ea-8f70-a662171a265a.png)

#### Options

##### `--validate`

Si pasamos la opción `--validate` o `--v`

Por ejemplo:

![image](https://user-images.githubusercontent.com/60928469/81347361-97316880-9081-11ea-967d-6fc963fd2c08.png)

Vemos que el _output_ en este caso incluye la palabra `ok` o `fail` después del href,
así como el status de la respuesta recibida a la petición HTTP de dicho href

##### `--stats`

Si pasamos la opción `--stats` o `--s` el output (salida) será un texto con estadísticas
básicas sobre los links.

![image](https://user-images.githubusercontent.com/60928469/81347597-19ba2800-9082-11ea-846e-bb089411d3b3.png)

También podemos combinar `--stats` y `--validate` o `--v`y `--s` para obtener estadísticas que
necesiten de los resultados de la validación.

![image](https://user-images.githubusercontent.com/60928469/81347467-d364c900-9081-11ea-8143-ee220164bf94.png)

##### `--help`

Si pasamos la opcion --help el output sera la lista de opciones validas que se pueden ejecutar

![image](https://user-images.githubusercontent.com/60928469/81352596-93efaa00-908c-11ea-9a62-e31c9bbe457f.png)

# Programadora ✒

Milagros Rodriguez Navinta
