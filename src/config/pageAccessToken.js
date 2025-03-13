import dotenv from 'dotenv';
dotenv.config();

export const pageAccessTokens = {
    '396829220178009': process.env.MESSENGER_ACCESS_TOKEN, // picsart
    '482625998261421': process.env.MESSENGER_ACCESS_TOKEN_2, // tranquility 
    '446049128584514': process.env.MESSENGER_ACCESS_TOKEN_3,
    '192687137270358': process.env.MESSENGER_ACCESS_TOKEN_4,
    '257561127430271': process.env.MESSENGER_ACCESS_TOKEN_5
};