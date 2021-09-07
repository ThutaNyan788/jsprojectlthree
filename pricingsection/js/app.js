// UI


const checkbox = document.getElementById('toggle'),
    slider = document.getElementById('slider');



const basic = document.querySelector('.basic'),
    prof = document.querySelector('.prof'),
    master = document.querySelector('.master');




// Event Listener
slider.addEventListener('click', () => {
    // console.log('hay');
    if (!checkbox.checked) {
        // console.log('i am  check');
        basic.innerText = "120";
        prof.innerText = "230";
        master.innerText = "350";

    } else {
        // console.log('i am not check');
        [basic.innerText, master.innerText, prof.innerText] = [19.99, 19.99, 29.99];

    }
})

























