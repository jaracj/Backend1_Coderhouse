# Administrador de turnos - Servicios Medicos

## Descripcion
Proyecto que implementa una clase ServiceManager para gestionar servicios de un sistema de turnos y reservas medicas. Utiliza ESM y datos en un archivo JSON.

## Requisitos previos
- Node.js
- npm

## Instalacion
1. Clona este repositorio.
2. Ingresa a la carpeta del proyecto.
3. Ejecuta `npm install`.
4. Crea un archivo `.env` en la raiz del proyecto basado en `.env.example` con el siguiente contenido:
   PORT=8080
   NODE_ENV=development

## Ejecucion
Para iniciar la aplicacion en modo desarrollo:
npm run dev

## Variables de Entorno
- PORT: Puerto en el que trabajara la aplicacion.
- NODE_ENV: Entorno de ejecucion.

## Recurso: Services
El servicio medico en esta entrega, tiene la siguiente estructura:
{
  "id": 1,
  "name": "Consulta Medica",
  "description": "Consulta general con medico clinico",
  "duration": 30,
  "price": 5000,
  "category": "Medicina Clinica",
  "available": true
}

## Ejemplos de uso de los metodos

// Importar la clase
import ServiceManager from './managers/ServiceManager.js';

// Crear instancia e inicializar
const manager = new ServiceManager();
await manager.init();

// Obtener todos los servicios
const todos = manager.getServices();

// Obtener un servicio por ID
const uno = manager.getServiceById(1);

// Agregar un nuevo servicio
await manager.addService({
  name: "Consulta Cardiologica",
  description: "Evaluacion cardiovascular",
  duration: 45,
  price: 8000,
  category: "Cardiologia",
  available: true
});

// Actualizar un servicio
await manager.updateService(1, { price: 6000 });

// Eliminar un servicio
await manager.deleteService(1);