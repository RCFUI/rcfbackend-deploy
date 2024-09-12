import mongoose from "mongoose";


export const firstTimerSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
        minlength: 11
    },
    email: {
        type: String,
        required: true
    },
    invitedBy: {
        type: String,
        required: true,
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
    secondTimer: {
        type: Boolean,
        default: false
    }
},
    {
        timestamps: true
    })

export const FirstTimer = mongoose.model('firstTimer', firstTimerSchema);
