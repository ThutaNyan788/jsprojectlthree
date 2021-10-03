const panel = document.querySelector('#panel');

const ratingcontainer = document.querySelector('.ratings-container');

const ratings = document.querySelectorAll('.rating');

const sendbtn = document.querySelector('#send');




let selectedrating = "Satisfied";


ratingcontainer.addEventListener('click', (e) => {

    if (e.target.parentNode.classList.contains('rating')) {
        // console.log('hay');
        // console.log(e.target.parentElement.innerText);

        removeactive();

        e.target.parentNode.classList.add('active');

        // selectedrating = e.target.nextElementSibling.textContent;

        selectedrating = e.target.parentNode.lastElementChild.textContent;
        console.log(selectedrating);

    } else if (e.target.classList.contains('rating')) {
        // console.log('hay');

        removeactive();

        e.target.classList.add('active');

        // selectedrating = e.target.nextElementSibling.textContent;

        selectedrating = e.target.lastElementChild.textContent;
        // console.log(selectedrating);
    }


});





function removeactive() {
    for (let i = 0; i < ratings.length; i++) {
        ratings[i].classList.remove('active');
    }
}




sendbtn.addEventListener('click', () => {
    // console.log('hay');

    panel.innerHTML = `
        <i class="fas fa-heart"></i>
        <strong>Thank You!</strong>
        <strong>Feedback : ${selectedrating}</strong>
        <p>We'll use your feedback to improve our customer support</p>
    `;
});



































