// Step 1
// const heading = document.getElementById('heading');
// // console.dir(heading);

// // Step 2
// heading.style.color = 'purple';

const image = document.querySelector('img');


function toggleImage() {
    const IMAGE_1 = "https://images.unsplash.com/photo-1552845108-5f775a2ccb9b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8Ym84alFLVGFFMFl8fGVufDB8fHx8fA%3D%3D";
    const IMAGE_2 = "https://images.unsplash.com/photo-1747767763480-a5b4c7a82aef?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIwfGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D";

    let isTrue = false;

    setInterval(() => {
        if (isTrue) {
            image.setAttribute('src', IMAGE_2);
        } else {
            image.setAttribute('src', IMAGE_1);
        }

        isTrue = !isTrue;
    }, 1000);
}

// toggleImage();


