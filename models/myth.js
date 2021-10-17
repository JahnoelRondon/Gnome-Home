import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const Myth = new Schema({
    name: String,
    img: String,
    bio: String,
    reviews: [{
        type: Schema.Types.ObjectId,
        ref: 'Profile'
    }],
    
}, {
    timestamps: true
})

export {
    Myth
}