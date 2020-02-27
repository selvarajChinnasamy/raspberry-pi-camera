const PiCamera = require('pi-camera');

function SeriesOfImages() {
    const dateTime = new Date().toISOString();
    const image = capture(dateTime);
    image.snap()
        .then((result) => {
            console.log('image was captured');
            SeriesOfImages();
        })
        .catch((error) => {
            console.log('error', error);
        });
}

function capture(name) {
    return new PiCamera({
        mode: 'photo',
        output: `${__dirname}/images/${name}.jpg`,
        width: 640,
        height: 480,
        nopreview: true,
    });
}

SeriesOfImages();