import { Schema, model, models } from "mongoose";

const logSchema = new Schema({
    topic: {
        type: String,
        required: [true, "Topic is required"],
        trim: true,
        maxlength: [50, "Topic is too long"] 
    },
    message: {
        type: Object,
        required: [true, "Message is required"],
        properties: {
            temperature: {
                type: Number,
                required: [true, "Temperature is required"],
                min: [-30, "Temperature must be greater than -30"],
                max: [50, "Temperature must be less than 50"],
                title: "Temperature",
                default: 0,
                description: "Temperature in degrees Celsius",
                unit: "°C",
            },
            humidity: {
                type: Number,
                required: [true, "Humidity is required"],
                min: [0, "Humidity must be greater than 0"],
                max: [100, "Humidity must be less than 100"],
                title: "Humidity",
                default: 0,
                description: "Humidity in percentage",
                example: 0,
                unit: "%",
            },
            air: {
                type: Number,
                required: [true, "Air is required"],
                min: [0, "Air must be greater than 0"],
                max: [100, "Air must be less than 100"],
                title: "Air",
                default: 0,
                description: "Air in percentage",
                example: 0,
                unit: "%",
            },
        }
    }
}, {
    timestamps: true,
    versionKey: false
})

export default models.Log || model("Log", logSchema);
