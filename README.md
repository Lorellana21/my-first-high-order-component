# Getting Started with High Order Components

Un HOC es un componente que toma uno o más componentes como parámetros y devuelve nuevos componentes.

Es importante mencionar que los HOC no modifican los componentes que les pasamos, solo devuelven componentes nuevos.

Les añade una funcionalidad que no tienen, pero desde fuera. No es un componete de React, es una funcion de Javascript.

La diferencia con los Hooks es que estos modifican al componente desde dentro y el HOC lo hace desde fuera. 

Es una funcionalidad muy potente, entre sus usos mas habituales están: 
- crear modales
- añadir comportamientos
- inyectar dependencias
