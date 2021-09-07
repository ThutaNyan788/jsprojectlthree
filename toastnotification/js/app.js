// UI

const button = document.getElementById('button');
const toasts = document.getElementById('toasts');



const messages = [
    'Message One',
    'Message Two',
    'Message Four',
    'Message Five'
];

// button.addEventListener('click', () => createnotification());
// button.addEventListener('click', () => createnotification('Can\'t access'));
button.addEventListener('click', () => createnotification('Can\'t access', 'success'));



function createnotification(message, type) {
    // console.log('hay');

    // const notify = document.createElement('div');
    // notify.classList.add('toast');
    // notify.innerText = getrandommessage();
    // // console.log(notify);
    // toasts.appendChild(notify);


    // setTimeout(() => {
    //     notify.remove();
    // }, 3000);

    // const notify = document.createElement('div');
    // notify.classList.add('toast');
    // notify.innerText = messages ? message : getrandommessage();
    // // console.log(notify);
    // toasts.appendChild(notify);


    // setTimeout(() => {
    //     notify.remove();
    // }, 3000);



    const notify = document.createElement('div');
    notify.classList.add('toast');
    notify.classList.add(type ? type : 'info');
    notify.innerText = messages ? message : getrandommessage();
    // console.log(notify);
    toasts.appendChild(notify);


    setTimeout(() => {
        notify.remove();
    }, 3000);
}




function getrandommessage() {
    return messages[Math.floor(Math.random() * messages.length)];
}


// console.log(getrandommessage());




// 5TN WDF \

