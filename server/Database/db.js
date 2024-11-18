import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const DBConnection = async () => {
    const DB_URL = process.env.DB_URI; 

    try {
        await mongoose.connect(DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Database connected successfully");
    } catch (e) {
        console.error("Error while connecting to the database:", e.message);
    }
};

export default DBConnection;
