import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const MythSchema = new Schema({
    name: String,
    img: String,
    bio: String,
    pantheon: {
        type: String,
        enum: ['Greek', 'Egyptian', "Japanese"]
    },
    reviews: [{
        type: Schema.Types.ObjectId,
        ref: 'Profile'
    }]
}, {
    timestamps: true
})

const Myth = mongoose.model('Myth', MythSchema)

export {
    Myth
}