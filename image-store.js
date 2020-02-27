const PiCamera = require('pi-camera');

function SeriesOfImages() {
    const dateTime = new Date().toISOString();
    const vedio = capture(dateTime);
    vedio.record()
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
        output: `${__dirname}/${name}.jpg`,
        width: 640,
        height: 480
        nopreview: true,
    });
}

SeriesOfImages();