
function uploadImage(url, uploaded) {
    setTimeout(() => {
        uploaded('File uploaded successfully', 'image.jpg');
    }, 1000);
}

function compressImage(fileName, compressed) {
    setTimeout(() => {
        compressed('compressed successfully', 'image.zip')
    }, 2000);
}

function encryptImage(compressedFile, encrypted) {
    setTimeout(() => {
        encrypted('Encyption completed', 'image.encypted');
    }, 1000);
}

function storeImage(encyptedFile, stored) {
    setTimeout(() => {
        stored('storage is success', 'store id - 1')
    }, 1000);
}

// uploadImage('http://whatsapp.com/upload/image.jpg', function (msg1, fileName) {
//     console.log(msg1, fileName);
//     compressImage(fileName, function (msg2, compressedFile) {
//         console.log(msg2, compressedFile);
//         encryptImage(compressedFile, function (msg3, encyptedFile) {
//             console.log(msg3, encyptedFile);
//             storeImage(encyptedFile, function (msg4, id) {
//                 console.log(msg4, id);
//             });
//         });
//     });
// });

// --------------------------------------------------------------------

function uploadImageV1(url) {
    return new Promise((resolve, reject) => {
        if (!url.startsWith('http')) {
            reject(new Error('invalid protocol'));
            return;
        }
        setTimeout(() => {
            resolve('File uploaded successfully: image.jpg');
        }, 1000);
    })
}

function compressImageV1(fileName) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('compressed successfully: image.zip')
        }, 2000);
    })
}

function encryptImageV1(compressedFile) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Encyption completed: image.encypted');
        }, 1000);
    })
}

function storeImageV1(encyptedFile) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('storage is success: store id - 1')
        }, 1000);
    })
}


uploadImageV1('http://wa.com/upload/image.jpg')
    .then((msg1) => {
        console.log(msg1);
        return compressImageV1('image.jpg');
    })
    .then((msg2) => {
        console.log(msg2);
        return encryptImageV1('file.compressed');
    })
    .then((msg3) => {
        console.log(msg3);
        return storeImageV1('file.encrypted')
    })
    .then((msg4) => {
        console.log(msg4);
    })
    .catch((err) => {
        console.log(err);
    })
    .finally(() => {
        console.log('Process completed');
    });

