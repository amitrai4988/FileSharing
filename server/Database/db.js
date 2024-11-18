import mongoose from 'mongoose';

const DBConnection = async () => {
    const DB_URL = `mongodb+srv://akum2018:Kumar1234@cluster0.hlitzp1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

    try {
        await mongoose.connect(DB_URL); 
        console.log("Database connected successfully");
    } catch (e) {
        console.error("Error while connecting to the database:", e.message);
    }
};

export default DBConnection;
