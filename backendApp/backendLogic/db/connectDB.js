import mongoose from "mongoose"

export  const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`connection to MongoDB: ` + conn.connection.host)
    }catch(error){
        console.log(`error connecting to the dataBase ${error.message}` )
        process.exit(1)
    }
}