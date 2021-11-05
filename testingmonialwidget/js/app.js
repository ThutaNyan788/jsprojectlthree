
//UI

const testimonialel = document.querySelector(".testimonial");
const userimage = document.querySelector('.user-image');
const username = document.querySelector(".username");
const roleel = document.querySelector(".role");


const testimonials = [
    {
        name: "Mya Mya",
        position: "Marketing",
        photo: "https://randomuser.me/api/portraits/women/54.jpg",
        text: "Mya Mya Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },


    {
        name: "Aung Aung",
        position: "Sales",
        photo: "https://randomuser.me/api/portraits/women/50.jpg",
        text: "Aung Aung Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsumhas been theindustry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type andscrambled it to make a type specimen book."
    },



    {
        name: "Su Su",
        position: "Accountant",
        photo: "https://randomuser.me/api/portraits/women/53.jpg",
        text: "Su SU Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsumhas been theindustry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type andscrambled it to make a type specimen book."
    },



    {
        name: "Kyaw Kyaw",
        position: "Sales",
        photo: "https://randomuser.me/api/portraits/men/50.jpg",
        text: "Kyaw Kyaw Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsuhas been theindustry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type ascrambled it to make a type specimen book."
    },


    {
        name: "Hla Hla",
        position: "Warehouse Manger",
        photo: "https://randomuser.me/api/portraits/women/65.jpg",
        text: "Hla Hla Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsumhas been theindustry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type andscrambled it to make a type specimen book."
    }



];


// console.log(testimonials[0].position);


let idx = 0;

function updatetestimonial() {
    const { name, position, photo, text } = testimonials[idx];

    testimonialel.textContent = text;
    userimage.src = photo;
    username.textContent = name;
    roleel.textContent = position;

    idx++;

    if (idx > testimonials.length - 1) {
        idx = 0;
    }

}


updatetestimonial();
setInterval(updatetestimonial, 10000);























