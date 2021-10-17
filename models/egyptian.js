import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const egyptianSchema = new Schema({
    myths: [{
        type: Schema.Types.ObjectId,
        ref: 'Myth'
    }]
}, {
    timestamps: true
})


const Egyptian = mongoose.model('Myth', egyptianSchema)

export {
    Egyptian
}