import dotenv from 'dotenv';
dotenv.config();

const config = {
    PORT: process.env.PORT,
    MONGO_URL: process.env.MONGO_URL,
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
    SECRET_PASSPORT: process.env.SECRET_PASSPORT,
    CLIENT_URL: process.env.CLIENT_URL,
    WHATSAPP_API_URL: process.env.WHATSAPP_API_URL,
    PHONE_ID: process.env.PHONE_ID,
    WHATSAPP_VERIFY_TOKEN: process.env.WHATSAPP_VERIFY_TOKEN,
    WHATSAPP_ACCESS_TOKEN: process.env.WHATSAPP_ACCESS_TOKEN,
    PING_INTERVAL_WS: process.env.PING_INTERVAL_WSM,
    VAPID_PUBLIC: process.env.VAPID_PUBLIC,
    VAPID_PRIVATE: process.env.VAPID_PRIVATE,
    MESSENGER_ACCESS_TOKEN: process.env.MESSENGER_ACCESS_TOKEN,
    MESSENGER_ACCESS_TOKEN_2: process.env.MESSENGER_ACCESS_TOKEN_2,
    MESSENGER_ACCESS_TOKEN_3: process.env.MESSENGER_ACCESS_TOKEN_3,
    MESSENGER_ACCESS_TOKEN_4: process.env.MESSENGER_ACCESS_TOKEN_4,
    MESSENGER_VERIFY_TOKEN: process.env.MESSENGER_VERIFY_TOKEN

};

export default config;
