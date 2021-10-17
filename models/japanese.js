import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const japaneseSchema = new Schema({
    myths: [{
        type: Schema.Types.ObjectId,
        ref: 'Myth'
    }]
}, {
    timestamps: true
})


const Japanese = mongoose.model('Myth', japaneseSchema)

export {
    Japanese
}