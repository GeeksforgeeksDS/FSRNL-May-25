// async function fetchProduct() {

//     return { id: 1, name: 'Iphone' };
// }




// function fetchProductV1() {
//     return new Promise((resolve, reject) => {
//         if (true) {
//             setTimeout(() => {
//                 reject(new Error('something went wrong'));
//             }, 1000);
//         }
//         // setTimeout(() => {
//         //     resolve({ id: 1, name: 'Iphone' });
//         // }, 500)
//     })
// }

// console.log('START');

// async function main() {
//     try {
//         console.log('main function starts')
//         const promise = fetchProductV1(); //promise is returned by the function

//         console.log('we get promise');
//         console.log(promise);
//         const product = await promise; // we are resolving the promise

//         console.log('we get product')
//         console.log(product);

//         console.log('we are adding price');
//         product.price = 10000;
//         console.log(product);
//     }
//     catch (err) {
//         console.log('Inside catch')
//         console.log(err.message);
//     }
// }

// main();

// console.log('END');
// console.log('After end');
// console.log('After end');
// console.log('After end');
// console.log('After end');
// console.log('After end');
// console.log('After end');
// console.log('After end');
// console.log('After end');
// console.log('After end');
// console.log('After end');
// console.log('After end');
// console.log('After end');
// console.log('After end');
// console.log('After end');
// console.log('After end');
// console.log('After end');
// console.log('After end');

// // console.log(fetchProduct());

async function fetchProductById(id) {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await res.json();
    return data;
}




async function fetchProductsByIds(ids) {
    console.time('timer');
    const product1 = await fetchProductById(1);
    const product2 = await fetchProductById(2);
    const product3 = await fetchProductById(3);
    const product4 = await fetchProductById(4);
    console.log(product1);
    console.log(product2);
    console.log(product3);
    console.log(product4);
    console.timeEnd('timer');
}

async function fetchProductsByIdsOptimised(ids) {
    console.time('timer1');
    try {
        const promiseArr = [];
        for (const id of ids) {
            const promise = fetchProductById(id);
            promiseArr.push(promise);
        }

        const res = await Promise.all(promiseArr);
        console.log(res);
        
    }
    catch (err) {
        console.log(err);
    }
    finally{
        console.timeEnd('timer1');
    }
}


// fetchProductsByIds();

const ids = [1, 2, 3, 4];

fetchProductsByIdsOptimised(ids);
