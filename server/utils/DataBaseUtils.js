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
        comment: data.comment,
        createdAt: data.createdAt,
        updatedAt: data.createdAt
    });
    return image.save();
}

export function deteteImage(id) {
    return Image.findById(id).remove();
}

export function seed() {
    console.log('Seeding images...');

    const images = [
        {
            "imageLink": "https://d13yacurqjgara.cloudfront.net/users/134836/screenshots/3045524/michael.jpg",
            "sourceLink": "https://dribbble.com/shots/3045524-Michael",
            "sourceText": "Michael by Calvin Chopp",
            "active": "true",
            "comment": "image 1",
        },
        {
            "imageLink": "https://d13yacurqjgara.cloudfront.net/users/43342/screenshots/2471960/epic_themontues-green-copy.gif",
            "sourceLink": "https://dribbble.com/shots/2472295-Camera-Natrium",
            "sourceText": "Epicurrence // The Montuesby ∆ Studio–JQ ∆",
            "active": "true",
            "comment": "image 2",
        }
    ];

    images.forEach(function(element, index, array) {
        createImage(element);
        console.log(element.comment + ' saved');
    });
}
