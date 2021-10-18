import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const pantheonSchema = new Schema({
    pantheon: String,
    desc: String,
    img: String,
    myths: [{
        type: Schema.Types.ObjectId,
        ref: 'Myth'
    }]
}, {
    timestamps: true
})


const Pantheon = mongoose.model('Pantheon', pantheonSchema)

export {
    Pantheon
}