import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, '../data/services.json');

class ServiceManager {
  constructor() {
    this.services = [];
  }

  async init() {
    try {
      const data = await fs.readFile(filePath, 'utf-8');
      this.services = JSON.parse(data);
    } catch (error) {
      this.services = [];
    }
  }

  async #saveToFile() {
    await fs.writeFile(filePath, JSON.stringify(this.services, null, 2), 'utf-8');
  }

  getServices() {
    return this.services;
  }

  getServiceById(id) {
    const service = this.services.find((s) => s.id === id);
    return service || null;
  }

  async addService(serviceData) {
    const { name, description, duration, price, category, available } = serviceData;

    if (!name || !description || !duration || !price || !category || available === undefined) {
      throw new Error('Faltan campos requeridos');
    }

    const newId = this.services.length > 0 
      ? Math.max(...this.services.map((s) => s.id)) + 1 
      : 1;

    const newService = {
      id: newId,
      name,
      description,
      duration,
      price,
      category,
      available
    };

    this.services.push(newService);
    await this.#saveToFile();
    return newService;
  }

  async updateService(id, updatedData) {
    const index = this.services.findIndex((s) => s.id === id);
    if (index === -1) {
      return null;
    }

    const { id: _, ...rest } = updatedData; 

    this.services[index] = { ...this.services[index], ...rest };
    await this.#saveToFile();
    return this.services[index];
  }

  async deleteService(id) {
    const index = this.services.findIndex((s) => s.id === id);
    if (index === -1) {
      return null;
    }

    const deletedService = this.services.splice(index, 1)[0];
    await this.#saveToFile();
    return deletedService;
  }
}

export default ServiceManager;