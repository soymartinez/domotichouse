import { Schema, model, models } from "mongoose";

const logSchema = new Schema({
    topic: {
        type: String,
        required: [true, "Topic is required"],
        trim: true,
        maxlength: [50, "Topic is too long"]
    },
    message: {
        type: Number,
        required: [true, "Message is required"],
        trim: true,
        maxlength: [50, "Message is too long"]
    }
}, {
    timestamps: true,
    versionKey: false
})

export default models.Log || model("Log", logSchema);
