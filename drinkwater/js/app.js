//UI
const remained = document.getElementById('remained');
const liters = document.getElementById('liters');
const percentage = document.getElementById('percentage');
const smallcups = document.querySelectorAll('.cup-small');

smallcups.forEach((smallcup, idx) => {
    smallcup.addEventListener('click', () => highlightcups(idx));
});
function highlightcups(idx) {
    // console.log(`I am idx1 = ${idx}`);

    smallcups.forEach((cup, idx2) => {
        // console.log(`I am idx2 = ${idx2}`);
        if (smallcups[idx].classList.contains('full') && !smallcups[idx].nextElementSibling.classList.contains('full')) {
            idx--;
        }
        if (idx2 <= idx) {
            cup.classList.add('full');
        } else {
            cup.classList.remove('full');
        }
    });
    updatebigcup();
};

function updatebigcup() {
    const getfullcups = document.querySelectorAll('.full');
    const totalfullcups = getfullcups.length;
    // console.log(getfullcups.length);

    const totalcups = smallcups.length;

    if (totalfullcups === 0) {
        percentage.style.visibility = 'hidden';
        percentage.style.height = 0;
    } else {
        percentage.style.visibility = 'visible';
        percentage.style.height = `${totalfullcups / totalcups * 330}px`;
        percentage.innerText = `${totalfullcups / totalcups * 100}%`;
    }






    if (totalfullcups === totalcups) {
        remained.style.visibility = "hidden";
        remained.style.height = 0;
    } else {
        remained.style.visibility = "visible";
        liters.innerText = `${2 - (250 * totalfullcups / 1000)}L`;
    }













}




