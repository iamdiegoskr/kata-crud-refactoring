
# # # IMPORTANTE.

Nombre de la base de datos creada : **db_todo**

## URL DE LAS APIS.

1. http://localhost:8080/api/task, Obtener todas las listas con sus respectivas tareas.
1. http://localhost:8080/api/task/{id}, Obtener una lista en especifico con sus taras.
1. http://localhost:8080/api/task/update, Actualizar una lista (Recibe solo id y nuevo nombre)
1. http://localhost:8080/api/task/create, Para crear una nueva lista(Solo recibe el nombre)
1. http://localhost:8080/api/task/delete/{id} Eliminar una lista en especifico


------------

1. http://localhost:8080/api/todos, Para obtener todas las tareas en general.
1. http://localhost:8080/api/todo, Crear tarea, actualizar 
1. http://localhost:8080/api/{id}/todo, Obtener y eliminar tarea.

IMAGEN VISUAL DEL FRONTEND.

![](https://i.imgur.com/2JaTD8S.png)

Validacion.

![](https://i.imgur.com/0Hlwwpd.png)

![](https://i.imgur.com/NnABrhc.png)

Ventana de confirmacion para eliminar una lista.

![](https://i.imgur.com/KeXKUzE.png)


# [Problema]

Pueden ver los siguientes videos para poder comprender la base del código fuente dentro de este repositorio. 

https://www.youtube.com/watch?v=vqWvGgx_iXY&list=PL0IrPQPrkqoEUDXn1nsjzxSX2zflWtJW-

## KATA Full Stack

En el siguiente proyecto se presenta algunos conceptos de Full Stack, trabajando con Spring Boot + ReactJS.

### Caso de Uso

Se tiene presente un formulario donde se registra unas tareas basadas en una lista por hacer. Esta lista se crea para poder tener una grupos de items donde se pueda gestionar un CRUD. Se tiene un diseño muy básico pero totalmente funcional. 

#### Demo

![alt text]( ./demo.gif "Demo funcional del ToDo")
 
### Instalación

![alt text]( ./start.gif "Instalación y puesta en marcha")

### Perspectiva Front-end
Se tiene un archivo con toda la lógica, se presentan algunas malas prácticas en la codificación del mismo. Se debe refactorizar en donde se separe los componentes en archivos y se representen una mejor estructura. 

Aplicar las mejores prácticas y buscar el mejor diseño para presentar los datos.


### Perspectiva Back-end

Dentro del back-end no se tiene una base de datos basada en servidor. Se debe aplicar un buen diseño de modelo entidad relación y aplicar una base de datos como servidor, ejemplo MySQL. Representar un objeto de trasporte de datos (DTO) en vez de usar la misma entidad para responder. 

### Issues

- Resolver el diseño gráfico
- Separar bien los elementos gráficos como componentes, store, reducer y providers.
- La base de datos debe esta en un servidor como MySQL.
- Aplicar reglas para no guardar elementos vácios.
- Validar carácteres y demás para guardar las entidades de los TO-DO.
- Trabajar con un objeto de trasporte de datos o un objeto plano para representa los datos ante la API.

## Reto

Hacer un fork en su propio namespace y presentar la solución más valida para ser discutida, argumentar los aspectos de mejora y aplicar algunas técnica de refactorización. Resolverlo de forma individual, aplicar los commit para cada paso que se realice en la refactorización. 

Realizar la siguiente representación donde se tiene TO-Do List agripado en listas.

![alt text]( ./todo-list-kata.gif "Demo funcional del ToDo List")


