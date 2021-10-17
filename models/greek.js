import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const greekSchema = new Schema({
    myths: [{
        type: Schema.Types.ObjectId,
        ref: 'Myth'
    }]
}, {
    timestamps: true
})


const Greek = mongoose.model('Myth', greekSchema)

export {
    Greek
}