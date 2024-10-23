
const ctx = document.getElementById('eventChart').getContext('2d');
const eventChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Event Registrations per Month',
            data: [120, 150, 300, 200, 400, 450, 600, 700, 800, 900, 600, 300],
            backgroundColor: '#8576FF',
            borderColor: '#8576FF',
            borderWidth: 1,
           
        }]
    },
    options: {
        responsive:false,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
                grid:{
                    color:'white'
                }
            },
            x:{
                grid:{
                    color:'white'
                }
            }
        }
    }
});

const collapse = document.getElementById('collapse');
collapse.addEventListener('click', () => {
  document.querySelectorAll(".go").forEach((element) => {
    element.classList.toggle("disappear");
  });
});



let currentIndex = 0;
const box = document.querySelector('.box');
const textstitle = document.querySelector('.textstitle');
const textsdesc = document.querySelector('.textsdesc');
const items = ['Slide.png','Slide1.png','Slide2.png'];
const texts=[
    {title:'Latest News & Updates',
        desc:'Turpis interdum nunc varius ornare dignissim pretium. Massa ornare quis aliquet sed vitae. Sed velit nisi, fermentum erat. Fringilla purus, erat fringilla tincidunt quisque non. Pellentesque in ut tellus.'},
    {title:'Latest News & Updates',desc:'Turpis interdum nunc varius ornare dignissim pretium. Massa ornare quis aliquet sed vitae. Sed velit nisi, fermentum erat. Fringilla purus, erat fringilla tincidunt quisque non. Pellentesque in ut tellus.'},
    {title:'Latest News & Updates',
        desc:'Turpis interdum nunc varius ornare dignissim pretium. Massa ornare quis aliquet sed vitae. Sed velit nisi, fermentum erat. Fringilla purus, erat fringilla tincidunt quisque non. Pellentesque in ut tellus.'
    }
];
const totalItems = items.length;
box.style.backgroundImage="url(images/"+items[currentIndex]+")";
textstitle.textContent=texts[currentIndex].title;
textsdesc.textContent=texts[currentIndex].desc;

document.querySelector('.next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalItems;
    box.style.backgroundImage="url(images/"+items[currentIndex]+")";
    textstitle.textContent=texts[currentIndex].title;
textsdesc.textContent=texts[currentIndex].desc;
    
});


document.querySelector('.prev').addEventListener('click', () => {
    
    currentIndex = (currentIndex - 1+ totalItems) % totalItems;
    box.style.backgroundImage="url(images/"+items[currentIndex]+")";
    textstitle.textContent=texts[currentIndex].title;
textsdesc.textContent=texts[currentIndex].desc;
});

setInterval(()=>{
    currentIndex = (currentIndex + 1) % totalItems;
    box.style.backgroundImage="url(images/"+items[currentIndex]+")";
    textstitle.textContent=texts[currentIndex].title;
textsdesc.textContent=texts[currentIndex].desc;
},2000);

// let currentIndex = 0;
// const items = document.querySelectorAll('.carousel-item');
// const totalItems = items.length;

// document.querySelector('.next').addEventListener('click', () => {
//     items[currentIndex].classList.remove('active');
//     currentIndex = (currentIndex + 1) % totalItems;
//     items[currentIndex].classList.add('active');
// });

// document.querySelector('.prev').addEventListener('click', () => {
//     items[currentIndex].classList.remove('active');
//     currentIndex = (currentIndex - 1 + totalItems) % totalItems;
//     items[currentIndex].classList.add('active');
// });



// const modal = document.getElementById("eventModal");
// function openModal(eventName, eventDate, eventSpeaker, eventStatus) {
//     document.getElementById("modalEventName").textContent = eventName;
//     document.getElementById("modalEventDate").textContent = eventDate;
//     document.getElementById("modalEventSpeaker").textContent = eventSpeaker;
//     document.getElementById("modalEventStatus").textContent = eventStatus;
//     modal.style.display = "block";
// }

// function closeModal() {
//     modal.style.display = "none";
// }

document.getElementById("darkModeToggle").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    document.querySelector(".sidebar").classList.toggle("dark-mode");
});

// Close the modal when clicking outside of it
// window.onclick = function(event) {
//     if (event.target == modal) {
//         closeModal();
//     }
// };
const none=document.querySelector('.none');

none.addEventListener('click',()=>{
    const sidebar=document.querySelector('.sidebar');
    sidebar.classList.toggle("show")
   

});