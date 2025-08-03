const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.BWM-XMD;;;H4sIAAAAAAAAA5VUXZOiOBT9L3nVGj5tgaquWkRQ/EBoaRW39iFCgPARkAQVp/zvW3RPT8/D7mwvT+Hm5p6Tc8/Nd0AqTNESdUD7DuoGXyBD/ZJ1NQIamLRxjBowBBFkEGhgMDcjQ+o4+oIFJ2smhyfhPjbG24Uvhcs2TWWoDGyJGpAPn8FjCOr2VODwNwW564tjee4T5uKZi8VSsuVDYcuGl/lrXJ1HLrkJXLnnBPP1GTz6ihA3mCRmnaISNbBYos6FuPka/aWdqaRDi8mKwLyEZMTnvG7yuZLmnNsoxZOcQ1HyOl4MvkZ/7rHgMBHSTrgb7TTfT3Y7bhXGA5nc8U6/z7rRKz2v2oGcXt/pU5wQFNkRIgyz7su682tj7hdNbUXTSQtH1Vw/CnodL2L+fEyWxzHO3JdXeEbpXvka8TK4hYNir7J5bLvnuUD9wVa9DxLOpk7kXxu4vg7244HYFsmvxN3mwyv5/9Fdt6TVTsLHSUnoZZdtqlKduZv91LIWkr8xMc4c8xL6YSd90TaLzakl0T2r2qWSM9M3Mym6evkZUXNsueGOyVjfD7jDLQ8+6UPWNr9jKdfORVIXOlsK08W5Elwzskdl3dytJClTQ1DScEmEXDYvpR+MROXKjQJ2it0gvq7HgreOczpfm4RwBy44rMKGsv1iqj+/3ShHnR0BTXgMQYMSTFkDGa5IH1PkIYDRZYvCBrE3dcFaPpeWG97Vna93e0TMm96FnDlSo9fJTW22lwNi/qjbcSP7GQxB3VQhohRFc0xZ1XRrRClMEAXan38NAUE39t63Hk0ShiDGDWWvpK2LCkYfTf3YhGFYtYRtOxIa/QI1QOM/w4gxTBLay9gS2IQpviAjhYwCLYYFRT8viBoU/Yj9PN2fihCDuKBAA8bSzXKZGqZ9SVvqzWa6nehGooNPtI+uvcti+pKvhJvNgceGe72uyVJZWaobZw4bb91E9AeBaEq+fz3wz/9QBGjgeGUMOu5NN+vDhlTpkfNokOvje/BSU8d7Ctj+1VyQ7dipF5Lkzy1krMxjY13dm08x27sdy4xZzI+86LLJn2IxdsTMe+7RInTBIfoVLJhFvM7SYxbpRgGts8NQ4Mf3g+ecrBW6x55V5LM93vCFCyf81vZaQwhRoDiiCIOdiDxP79iJk9YdgUk8byxx4U+8dz+Vb0bGEdCAKEkjSRFkdSwKmqD+Qb9d+37Auv5GEANDULylCaogSyNFUEVR4EWxz+w3Pmaj+PEm4Tfb9KX73xijtxEnsAf8b6h3EXor8Y/hLzV+PBr/MniTF1Plufk0K1Q7yZT1dNFdjFvsS/L9hPhMdnKudFKH5xVLBY/HX0NQF5DFVVMCDeA6rQgCQ9BUbW9Nm8TVb7AM3bbN5F3EAlKmf9rdxyWiDJY10ITxSBYUYdzPZp/lNlU9hzQFGiClNDmBISg7va63DLKP4QF6/y09ATz+BmUJ0J1XBwAA || '',
    PREFIXE: process.env.PREFIX || ".','+",
    OWNER_NAME: process.env.CAVY || "Mabhosiedu RAJ👽😎",
    NUMERO_OWNER : process.env.233538149721 || " Ibrahim Adams",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '👽😎',
    CHATBOT : process.env.PM_CHATBOT || 'yes',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

