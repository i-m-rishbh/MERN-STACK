import mongoose from 'mongoose';
import colors from "colors";

const connectDB = async () => {
    try {
        const connection = await mongoose.connect('mongodb://0.0.0.0:27017/e-commerce');
        console.log(`Connected to MongoDB ${mongoose.connection.host}`.bgGreen);
        return connection;
    } catch (error) {
        console.log(`Error in MongoDB ${error}`.bgRed);
    }
};

export default connectDB;


