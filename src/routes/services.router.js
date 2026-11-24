import express from 'express';
import ServiceManager from '../managers/ServiceManager.js';

const router = express.Router();
const serviceManager = new ServiceManager();

await serviceManager.init();

router.get('/', (req, res) => {
    const { category, available } = req.query;
    const filters = {};
    
    if (category) filters.category = category;
    if (available !== undefined) filters.available = available;

    const services = serviceManager.getServices(filters);
    res.status(200).json(services);
});

router.get('/:sid', (req, res) => {
    const id = parseInt(req.params.sid, 10);
    const service = serviceManager.getServiceById(id);
    
    if (!service) {
        return res.status(404).json({ error: 'Servicio no encontrado' });
    }
    res.status(200).json(service);
});

router.post('/', async (req, res) => {
    try {
        const newService = await serviceManager.addService(req.body);
        res.status(201).json(newService);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.put('/:sid', async (req, res) => {
    const id = parseInt(req.params.sid, 10);
    
    const { id: _, ...updateData } = req.body;
    
    const updatedService = await serviceManager.updateService(id, updateData);
    
    if (!updatedService) {
        return res.status(404).json({ error: 'Servicio no encontrado' });
    }
    res.status(200).json(updatedService);
});

router.delete('/:sid', async (req, res) => {
    const id = parseInt(req.params.sid, 10);
    const deletedService = await serviceManager.deleteService(id);
    
    if (!deletedService) {
        return res.status(404).json({ error: 'Servicio no encontrado' });
    }
    res.status(200).json({ message: 'Servicio eliminado correctamente', deletedService });
});

export default router;