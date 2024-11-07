# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh




Aplicación React para comercio electrónico
Descripción
Esta aplicación es un comercio electrónico desarrollado en React que permite a los usuarios explorar, agregar productos a un carrito de compras y finalizar su compra a través de un formulario. La aplicación está diseñada para ser intuitiva y presenta una interfaz clara, orientada a la oferta.Firebase Firestore para almacenar y recuperar productos y órdenes de compra.

Caracteristicas
Exploración de Productos: Los usuarios pueden navegar por diferentes categorías de productos.
Carrito de Compras Dinámico: Los usuarios pueden agregar y eliminar productos del carrito, ver el total de artículos y el precio total de su pedido.
Finalizar Compra con Orden de Confirmación: Al finalizar la compra, se abre un formulario en un modal donde
Interfaz con Modo Oscuro: Implementación de un tema oscuro para mejorar la experiencia del usuario.
Tecnologías utilizadas
React: Biblioteca principal para la creación de la interfaz de usuario.
React Router DOM: Para manejar la navegación entre las diferentes vistas y componentes.
Firebase Firestore: Base de datos NoSQL para almacenar productos y órdenes de compra.
(Módulo CSS): Para estilizar los componentes de manera modular y personalizada.
React Context API: Manejo de estados globales, como el carrito de compras y el tema oscuro.
React Modal: Muestra de modales al finalizar la compra.
Estructura de la aplicación
origen
componentes: Contiene todos los componentes de la interfaz, como el carrito, de
contexto: Proporciona el contexto para el carrito y el tema.
firebase: Configuración de Firebase y Firestore.
servicios: Servicios auxiliares, como el manejo de la finalización de compra.
estilos: Contiene archivos de estilo modular en CSS.