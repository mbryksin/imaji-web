import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ImageSchema = new Schema({
    imageLink: { type: String }, //id created automatically
    sourceLink: { type: String },
    sourceText: { type: String },
    active: { type: Boolean, required: true }, //add default: 'true'
    comment: { type: String },
    createdAt: { type: Date },
    updatedAt: { type: Date }
});

const Image = mongoose.model('Image', ImageSchema);
