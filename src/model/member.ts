import mongoose from "mongoose";


export const memberSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true,
        minLength: 11
    },
    email: {
        type: String,
        required: true
    },
    sex: {
        type: String,
        required: true,
        enum: ['M', 'F']
    },
    faculty: {
        type: String,
        required: true,
    },
    department: {
        type: String,
        required: true,
    },
    level: {
        type: String,
        required: true,
        enum: ['100', '200', '300', '400', '500', '600']
    },
    hallOfResidence: {
        type: String,
        required: true,
    },
    roomNumber: {
        type: String,
        required: true,
    },
    availableForCounselling: {
        type: String,
        // required: true,
    },
    prayerRequest: {
        type: String,
        minLength: 5
    },
    counsellingRequest: {
        type: String,
        minLength: 5
    },
},
    {
        timestamps: true
    });

export const Member = mongoose.model('member', memberSchema);