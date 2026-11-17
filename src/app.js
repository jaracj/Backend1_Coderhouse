import { PORT, NODE_ENV } from './config/env.config.js';
import ServiceManager from './managers/ServiceManager.js';

console.log(`Entorno cargado: ${NODE_ENV}`);
console.log(`Puerto configurado: ${PORT}`);

const serviceManager = new ServiceManager();

async function testManager() {
  await serviceManager.init(); 
  console.log('Servicios actuales:', serviceManager.getServices());
}

testManager();