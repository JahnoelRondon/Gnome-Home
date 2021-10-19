import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const mythReviewSchema = new Schema({
    content: String,
    rating: {
        type: Number,
        min: 1,
        max: 5
    },
    myth: {type: Schema.Types.ObjectId, ref: 'Myth'},
    author: {type: Schema.Types.ObjectId, ref: 'Profile'},
}, {
    timestamps: true,
})

const MythReview = mongoose.model('MythReview', mythReviewSchema);

export {
    MythReview
}