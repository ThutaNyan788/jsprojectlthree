
const empties = document.querySelectorAll('.empty');

const picdiv = document.querySelector('.fill');

// console.log(picdiv, empties);


picdiv.addEventListener('dragstart', dragstart);
picdiv.addEventListener('dragend', dragend);


//Drag Start
function dragstart(e) {
    // console.log("drag start is working");
    // this.classList.add('hold');

    this.className += ' hold';


    setTimeout(() => {
        this.className = "invisible";
    }, 0);
}


// empties.forEach(empty => {
//     // console.log(empty);

//     empty.addEventListener("dragover", dragover);
//     empty.addEventListener("dragenter", dragenter);
//     empty.addEventListener("dragleave", dragleave);
//     empty.addEventListener("drop", dragdrop);
// });



// =>ES6 .can return looping object5-specific iterator value
for (const empty of empties) {
    console.log(empty);

    empty.addEventListener("dragover", dragover);
    empty.addEventListener("dragenter", dragenter);
    empty.addEventListener("dragleave", dragleave);
    empty.addEventListener("drop", dragdrop);
}



// => numerable property name of an  object
// for(const empty in empties){
// console.log(empty);
// }

function dragover(e) {
    // console.log("dragover");
    e.preventDefault();
}

function dragenter(e) {
    // console.log("dragenter");
    e.preventDefault();


    this.className += " hovered";
}

function dragleave(e) {
    // console.log("dragleave");
    e.preventDefault();

    this.className = "empty";
}


function dragdrop(e) {
    // console.log("drag drop");

    this.className = "empty";

    this.appendChild(picdiv);
}


//Drag End
function dragend(e) {
    // console.log("drag end is working");

    this.className = "fill";

}



























