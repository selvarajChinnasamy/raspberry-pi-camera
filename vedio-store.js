const PiCamera = require('pi-camera');

function SeriesOfVedio() {
    const dateTime = new Date().toISOString();
    const vedio = captureVedio(dateTime);
    vedio.record()
        .then((result) => {
            console.log('vedio was captured');
            SeriesOfVedio();
        })
        .catch((error) => {
            console.log('error', error);
        });
}

function captureVedio(name) {
    return new PiCamera({
        mode: 'video',
        output: `${__dirname}/video/${name}.h264`,
        width: 1920,
        height: 1080,
        timeout: 5000,
        nopreview: true,
    });
}

SeriesOfVedio();