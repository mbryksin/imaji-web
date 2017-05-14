import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ImageSchema = new Schema({
    imageLink: { type: String }, //id created automatically
    sourceLink: { type: String },
    sourceText: { type: String },
    active: { type: Boolean, required: true }, //add default: 'true'
    comment: { type: String },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

const Image = mongoose.model('Image', ImageSchema);
