# Administrador de turnos - Servicios Medicos

## Descripcion
Proyecto que implementa una API REST con Express y una clase `ServiceManager` para gestionar servicios de un sistema de turnos y reservas medicas. Utiliza ESM y datos en un archivo JSON.

## Requisitos previos
- Node.js
- npm

## Instalacion
1. Clona este repositorio.
2. Ingresa a la carpeta del proyecto.
3. Ejecuta `npm install`.
4. Crea un archivo `.env` en la raiz del proyecto basado en `.env.example` con el siguiente contenido:
   ```env
   PORT=8080
   NODE_ENV=development
   ```

## Ejecucion
Para iniciar la aplicacion en modo desarrollo:

```bash
npm run dev
```

## Variables de Entorno
- `PORT`: Puerto en el que trabajara la aplicacion.
- `NODE_ENV`: Entorno de ejecucion.

## Recurso: Services
El servicio medico en esta entrega, tiene la siguiente estructura:

```json
{
  "id": 1,
  "name": "Consulta Medica",
  "description": "Consulta general con medico clinico",
  "duration": 30,
  "price": 5000,
  "category": "Medicina Clinica",
  "available": true
}
```

## Endpoints de la API
**Base URL:** `http://localhost:8080/api/services`

Método - Ruta - Descripción - Códigos de Estado
`GET` - `/` - Obtiene todos los servicios. Admite filtros: `?category=...` o `?available=...` - `200`
`GET` - `/:sid` - Obtiene un servicio por su ID - `200`, `404`
`POST` - `/` - Crea un nuevo servicio (el ID se genera automáticamente) - `201`, `400`
`PUT` - `/:sid` - Actualiza un servicio existente (no permite modificar el ID) - `200`, `404`
`DELETE` - `/:sid` - Elimina un servicio por su ID - `200`, `404`

## Ejemplos de uso

### ServiceManager

```javascript
// Importar la clase
import ServiceManager from './src/managers/ServiceManager.js';

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
```