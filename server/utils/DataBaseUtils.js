import mongoose from 'mongoose';
import '../models/Image';

const Image = mongoose.model('Image');

export function setUpConnection() {
    mongoose.connect('mongodb://localhost/images'); //db created automatically
    // TODO: mongoose.connect('mongodb://${config.db.host}:${config.db.port}/${config.db.host}');
}

export function listImages() {
    return Image.find();
}

export function createImage(data) {
    const image = new Image({
        imageLink: data.imageLink,
        sourceLink: data.sourceLink,
        sourceText: data.sourceText,
        active: data.active,
        comment: data.info,
        createdAt: data.createdAt,
        updatedAt: data.createdAt
    });
    return image.save();
}

export function deteteImage(id) {
    return Image.findById(id).remove();
}