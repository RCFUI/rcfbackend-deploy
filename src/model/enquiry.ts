import mongoose from "mongoose";

export const enquirySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    info: {
        type: String,
        required: true
    }
},
    {
        timestamps: true
    });

export const Enquiry = mongoose.model('enquiry', enquirySchema);