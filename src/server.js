import app from './app.js';
import { PORT, NODE_ENV } from './config/env.config.js';

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
    console.log(`Entorno: ${NODE_ENV}`);
});