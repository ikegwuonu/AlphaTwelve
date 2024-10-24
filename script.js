const ctx = document.getElementById("eventChart").getContext("2d");
const eventChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Event Registrations per Month",
        data: [120, 150, 300, 200, 400, 450, 600, 700, 800, 900, 600, 300],
        backgroundColor: "#8576FF",
        borderColor: "#8576FF",
        borderWidth: 1,
      },
    ],
  },
  options: {
    // responsive:false,
    // maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: "white",
        },
      },
      x: {
        grid: {
          color: "white",
        },
      },
    },
  },
});

const collapse = document.getElementById("collapse");
const container = document.querySelector(".container");
collapse.addEventListener("click", () => {
  document.querySelectorAll(".go").forEach((element) => {
    element.classList.toggle("disappear");
  });
  container.classList.toggle("small");
});

let currentIndex = 0;
const box = document.querySelector(".box");
const textstitle = document.querySelector(".textstitle");
const textsdesc = document.querySelector(".textsdesc");
const items = ["Slide.png", "Slide1.png", "Slide2.png"];
const texts = [
  {
    title: "Latest News & Updates",
    desc: "Turpis interdum nunc varius ornare dignissim pretium. Massa ornare quis aliquet sed vitae. Sed velit nisi, fermentum erat. Fringilla purus, erat fringilla tincidunt quisque non. Pellentesque in ut tellus.",
  },
  {
    title: "Latest News & Updates",
    desc: "Turpis interdum nunc varius ornare dignissim pretium. Massa ornare quis aliquet sed vitae. Sed velit nisi, fermentum erat. Fringilla purus, erat fringilla tincidunt quisque non. Pellentesque in ut tellus.",
  },
  {
    title: "Latest News & Updates",
    desc: "Turpis interdum nunc varius ornare dignissim pretium. Massa ornare quis aliquet sed vitae. Sed velit nisi, fermentum erat. Fringilla purus, erat fringilla tincidunt quisque non. Pellentesque in ut tellus.",
  },
];
const totalItems = items.length;
box.src = "images/" + items[currentIndex];
textstitle.textContent = texts[currentIndex].title;
textsdesc.textContent = texts[currentIndex].desc;

document.querySelector(".next").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % totalItems;
  box.src = "images/" + items[currentIndex];
  textstitle.textContent = texts[currentIndex].title;
  textsdesc.textContent = texts[currentIndex].desc;
});

document.querySelector(".prev").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + totalItems) % totalItems;
  box.src = "images/" + items[currentIndex];
  textstitle.textContent = texts[currentIndex].title;
  textsdesc.textContent = texts[currentIndex].desc;
});

setInterval(() => {
  currentIndex = (currentIndex + 1) % totalItems;
  box.src = "images/" + items[currentIndex];
  textstitle.textContent = texts[currentIndex].title;
  textsdesc.textContent = texts[currentIndex].desc;
}, 2000);

document.getElementById("darkModeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  document.querySelector(".sidebar").classList.toggle("dark-mode");
});

const none = document.querySelector(".none");

none.addEventListener("click", () => {
  const sidebar = document.querySelector(".sidebar");
  sidebar.classList.toggle("show");
  container.classList.toggle("query");
  if (sidebar.style.display == "block") {
    console.log("go");
  }
});
