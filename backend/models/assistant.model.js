 
import mongoose from "mongoose";

const assistantSchema = new mongoose.Schema({
  name : {type : String, required:true},
  userId: { type: String, required: true,unique:true },    
  assistantName: { type: String, required: true },
  assistantImage: { type: String },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Assistant ||
  mongoose.model("Assistant", assistantSchema);
