import mongoose from "mongoose";
import reviewSchema from "./schema.js";
const ReviewModel = mongoose.model("reviews", reviewSchema);
export default ReviewModel;