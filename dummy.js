const mainData = [
  {
    eventName: "Cloud Innovation Summit",
    date: "2024-10-15",
    speaker: "Jane Doe",
    status: "Completed",
  },
  {
    eventName: "Blockchain Revolution Conference",
    date: "2024-11-05",
    speaker: "Dr. Peter Smith",
    status: "In Progress",
  },
  {
    eventName: "AI in Healthcare Symposium",
    date: "2024-12-01",
    speaker: "Dr. Aisha Malik",
    status: "Completed",
  },
  {
    eventName: "Future of Fintech Forum",
    date: "2024-10-25",
    speaker: "John Lee",
    status: "Completed",
  },
  {
    eventName: "Data Analytics in Business",
    date: "2024-11-12",
    speaker: "Rachel Moore",
    status: "Completed",
  },
  {
    eventName: "Sustainable Energy Expo",
    date: "2024-09-28",
    speaker: "Prof. Alan Green",
    status: "Completed",
  },
  {
    eventName: "Web3 Interfaces Workshop",
    date: "2024-10-10",
    speaker: "Kevin Adams",
    status: "In Progress",
  },
  {
    eventName: "Cybersecurity for Startups",
    date: "2024-11-19",
    speaker: "Emily Zhang",
    status: "Completed",
  },
  {
    eventName: "Smart Cities Forum",
    date: "2024-10-18",
    speaker: "Dr. Maria Hernandez",
    status: "In Progress",
  },
  {
    eventName: "Tech Safari Mixer",
    date: "2024-09-30",
    speaker: "Guest Panel",
    status: "In Progress",
  },
  {
    eventName: "Marketing Strategies Conference",
    date: "2024-12-15",
    speaker: "Sarah Carter",
    status: "Upcoming",
  },
  {
    eventName: "Quantum Computing Webinar",
    date: "2024-11-22",
    speaker: "Dr. Brian O'Neil",
    status: "Completed",
  },
  {
    eventName: "Digital Transformation Summit",
    date: "2024-12-05",
    speaker: "Lisa Wong",
    status: "Upcoming",
  },
  {
    eventName: "Virtual Reality Expo",
    date: "2024-11-29",
    speaker: "Michael Ross",
    status: "In Progress",
  },
  {
    eventName: "Autonomous Vehicles Workshop",
    date: "2024-12-08",
    speaker: "Dr. Charles Lin",
    status: "Upcoming",
  },
  {
    eventName: "E-commerce Growth Forum",
    date: "2024-11-18",
    speaker: "Jessica Turner",
    status: "Completed",
  },
  {
    eventName: "SaaS Trends Seminar",
    date: "2024-12-12",
    speaker: "Thomas Hill",
    status: "Upcoming",
  },
  {
    eventName: "Climate Change Symposium",
    date: "2024-10-22",
    speaker: "Dr. Emma Taylor",
    status: "Completed",
  },
  {
    eventName: "Tech Disruption Conference",
    date: "2024-11-01",
    speaker: "Daniel Thompson",
    status: "In Progress",
  },
  {
    eventName: "Robotics & AI Expo",
    date: "2024-12-20",
    speaker: "David Kim",
    status: "Upcoming",
  },
  {
    eventName: "UX Design Workshop",
    date: "2024-10-30",
    speaker: "Lauren Fields",
    status: "In Progress",
  },
  {
    eventName: "Big Data Analytics Conference",
    date: "2024-11-06",
    speaker: "Dr. Henry White",
    status: "Completed",
  },
  {
    eventName: "Leadership in Tech Summit",
    date: "2024-10-29",
    speaker: "Alice Brown",
    status: "Completed",
  },
  {
    eventName: "5G Connectivity Forum",
    date: "2024-12-02",
    speaker: "Dr. Ivan Gray",
    status: "Upcoming",
  },
  {
    eventName: "Digital Nomad Meetup",
    date: "2024-09-25",
    speaker: "Jake Wilson",
    status: "Completed",
  },
  {
    eventName: "AR/VR Interfaces Conference",
    date: "2024-10-07",
    speaker: "Dr. Nadia Patel",
    status: "Completed",
  },
  {
    eventName: "Mobile App Development Expo",
    date: "2024-11-14",
    speaker: "Samantha Moore",
    status: "In Progress",
  },
  {
    eventName: "Smart Homes Seminar",
    date: "2024-10-12",
    speaker: "Dr. Lucas Green",
    status: "Completed",
  },
  {
    eventName: "SaaS for Startups Forum",
    date: "2024-12-18",
    speaker: "Ryan Scott",
    status: "Upcoming",
  },
  {
    eventName: "Cloud Storage Workshop",
    date: "2024-11-07",
    speaker: "Helen Adams",
    status: "Completed",
  },
  {
    eventName: "Blockchain Innovations Meetup",
    date: "2024-10-20",
    speaker: "Oliver Gray",
    status: "Completed",
  },
  {
    eventName: "EdTech Innovations Seminar",
    date: "2024-12-03",
    speaker: "Dr. Andrew Martin",
    status: "Upcoming",
  },
  {
    eventName: "Data Science in Business",
    date: "2024-11-09",
    speaker: "Lisa Gomez",
    status: "In Progress",
  },
  {
    eventName: "AI & Ethics Forum",
    date: "2024-12-22",
    speaker: "Dr. Catherine Brown",
    status: "Upcoming",
  },
  {
    eventName: "Fintech Startups Conference",
    date: "2024-10-11",
    speaker: "Mark Johnson",
    status: "Completed",
  },
  {
    eventName: "Virtual Teams Meetup",
    date: "2024-11-26",
    speaker: "Patricia Davis",
    status: "In Progress",
  },
  {
    eventName: "Cybercrime Prevention Expo",
    date: "2024-10-05",
    speaker: "Samuel Edwards",
    status: "Completed",
  },
  {
    eventName: "Machine Learning Workshop",
    date: "2024-12-10",
    speaker: "Anita Singh",
    status: "Upcoming",
  },
  {
    eventName: "Mobile Innovation Symposium",
    date: "2024-11-23",
    speaker: "Patrick Evans",
    status: "Completed",
  },
  {
    eventName: "DevOps in Practice Conference",
    date: "2024-10-27",
    speaker: "Michelle Reed",
    status: "Completed",
  },
];

const data = document.querySelector(".data");
const modal = document.querySelector(".modal");

// Function to open modal and set its content
function openModal(eventName, eventDate, eventSpeaker, eventStatus) {
  document.getElementById("modalEventName").textContent = eventName;
  document.getElementById("modalEventDate").textContent = eventDate;

  document.getElementById("modalEventStatus").textContent = eventStatus;
  if (modal) {
    modal.style.display = "block";
  } else {
    console.error("Modal element not found!");
  }
}

// Function to close modal
function closeModal() {
  if (modal) {
    modal.style.display = "none";
  }
}

function myFunction(eventsData, row) {
  data.textContent = "";
  // Loop through the eventsData array
  for (let i = 0; i < row; i++) {
    const event = eventsData[i]; // Get the current event object

    // Create a new div for each event
    const div = document.createElement("div");
    div.className = "row";

    // Create p elements for event details
    const p1 = document.createElement("p");
    p1.className = "eventname";
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");
    const p4 = document.createElement("p");

    // Set the text content for each p element
    p1.textContent = event.eventName;
    p2.textContent = event.date;
    p3.textContent = event.speaker;
    p4.textContent = event.status;
    p4.className = event.status; // Adding class based on status

    // Append the p elements to the div
    div.appendChild(p1);
    div.appendChild(p2);
    div.appendChild(p3);
    div.appendChild(p4);

    // Append the div to the data container

    data.appendChild(div);

    // Add event listener for the modal to open on click
    div.addEventListener("click", () =>
      openModal(event.eventName, event.date, event.speaker, event.status)
    );
  }
}

const sortDate = document.querySelector(".sortDate");

sortDate.addEventListener("click", () => {
  var eventsData = mainData.sort((a, b) => new Date(a.date) - new Date(b.date));
  return myFunction(eventsData, 10);
});
const sortDate1 = document.querySelector(".sortDate1");

sortDate1.addEventListener("click", () => {
  var eventsData = mainData.sort((a, b) => new Date(b.date) - new Date(a.date));
  return myFunction(eventsData, 10);
});
const sortStatus = document.getElementById("sortStatus");

sortStatus.addEventListener("click", () => {
  var eventsData = mainData.sort((a, b) => a.status.localeCompare(b.status));
  return myFunction(eventsData, 10);
  console.log("out");
});
const sortName = document.getElementById("sortName");

sortName.addEventListener("click", () => {
  var eventsData = mainData.sort((a, b) =>
    a.eventName.localeCompare(b.eventName)
  );
  return myFunction(eventsData, 10);
});
formsubmit = document.getElementById("formsubmit");
formsubmit.addEventListener("submit", function (event) {
  event.preventDefault();
  const input = document.getElementById("input").value.toLowerCase();
  var eventsData = mainData.filter((item) =>
    item.eventName.toLowerCase().includes(input)
  );
  return myFunction(eventsData, 10);
});

let currentPage = 1;
let max = 10;
let min = 0;
const page1 = document.querySelector(".page1");
page1.classList.add("activee");

function setPage(pageno, num) {
  currentPage = num;
  var removeactive = document.querySelector(".activee");
  removeactive.classList.remove("activee");
  var page = document.querySelector("." + pageno);
  page.classList.add("activee");
  max = num * 10;
  min = max - 10;
  var eventsData = mainData.slice(min, max);
  myFunction(eventsData, 10);
}
let totalPage = 3;
function prevPage() {
  var removeactive = document.querySelector(".activee");
  removeactive.classList.remove("activee");
  currentPage = (currentPage - 1 + totalPage) % totalPage;
  if (currentPage === 0) {
    console.log(currentPage);
    currentPage = 3;
  }
  var pageString = "page" + String(currentPage);
  var page = document.querySelector("." + pageString);
  page.classList.add("activee");
  max = currentPage * 10;
  min = max - 10;
  var eventsData = mainData.slice(min, max);
  myFunction(eventsData, 10);
}
function nextPage() {
  var removeactive = document.querySelector(".activee");
  removeactive.classList.remove("activee");
  currentPage = (currentPage + 1) % totalPage;
  if (currentPage === 0) {
    console.log(currentPage);
    currentPage = 3;
  }
  var pageString = "page" + String(currentPage);
  var page = document.querySelector("." + pageString);
  page.classList.add("activee");
  max = currentPage * 10;
  min = max - 10;
  var eventsData = mainData.slice(min, max);
  myFunction(eventsData, 10);
}

const selectRow = document.getElementById("select");
selectRow.addEventListener("change", (event) => {
  var row = event.target.value;
  myFunction(mainData, row);
});
