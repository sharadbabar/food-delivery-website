import mongoose from "mongoose";


export const connectDB= async ()=>{
    await mongoose.connect('mongodb+srv://sharadbabar:Onelifebaby123@cluster0.0ylyru0.mongodb.net/food-del').then(()=>console.log("DB Connected"))

}