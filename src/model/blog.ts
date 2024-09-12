import mongoose from 'mongoose';

export const  blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minLength: 3
    },
    articleDuration: {
        type: String,
        required: true,
        minLength: 3
    },
    body: {
        type: String,
        required: true,
        minLength: 3
    },
    author: {
        type: String,
        required: true,
        minLength: 3
    },
    images: [{
        type: String,
    }],
    isDeleted: {
        type: Boolean,
        default: false
    }
},
    {
        timestamps: true
    })

export const Blog = mongoose.model('blog', blogSchema);