import mongoose, { Schema } from "mongoose";


export const messagesSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    thumbnail: {
        type: String,
        required: true
    },
    messageFile: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    // adminId: {
    //     type: Schema.Types.ObjectId,
    //     required: true,
    //     ref: 'admin'
    // },
    date: {
        type: Date,
        required: true
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
}, 
{
    timestamps: true
});

export const Messages = mongoose.model('messages', messagesSchema);

