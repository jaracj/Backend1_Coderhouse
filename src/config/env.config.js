import dotenv from 'dotenv';

dotenv.config();

const requiredEnvVars = ['PORT', 'NODE_ENV'];

for (const envVar of requiredEnvVars) {
  if (!process.env[envVar]) {
    console.error(`Revisar. La variable de entorno ${envVar} es requerida.`);
    process.exit(1);
  }
}

export const PORT = process.env.PORT;
export const NODE_ENV = process.env.NODE_ENV;