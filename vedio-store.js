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
        output: `${__dirname}/${name}.h264`,
        width: 640,
        height: 360,
        timeout: 300000,
        nopreview: true,
        framerate: 24
    });
}

SeriesOfVedio();