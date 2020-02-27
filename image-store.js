const PiCamera = require('pi-camera');
const myCamera = new PiCamera({
    mode: 'photo',
    output: `${__dirname}/test.jpg`,
    width: 640,
    height: 480,
    nopreview: true,
});

myCamera.snap()
    .then((result) => {
        console.log('picture captured');
    })
    .catch((error) => {
        console.log('error', error);
    });