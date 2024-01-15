import fs from 'fs';

export const privateKey = fs.readFileSync('./src/config/keys/private.key');
export const pubilcKey = fs.readFileSync('./src/config/keys/public.key');
