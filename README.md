Event Dashboard
The Event Dashboard is a web-based application that provides a summary of event-related data, such as total events, active speakers, total registrations, and revenue. The dashboard also allows users to view events history, filter through events, and see detailed event information through a modal pop-up. The dashboard includes charts and tables to display data visually, making it easy to understand event performance.

Features
Sidebar Navigation: Includes links to different sections like Home, Events, Speakers, Reports, Notifications, and Messages.
Overview Cards: Display key metrics such as total events, active speakers, registrations, and total revenue.
Interactive Chart: A bar chart shows event registration trends per month using Chart.js.
Event History Table: Displays a list of events with the ability to filter and sort through event data.
Event Details Modal: Clicking on an event in the table opens a modal with more details like event name, date, speaker, and status.
Dark Mode Toggle: Users can toggle between light and dark themes for better visual comfort.
Responsive Design: The dashboard adjusts its layout to various screen sizes, making it mobile-friendly.
Technologies Used
HTML5: For the structure and layout of the web application.
CSS3: For styling and responsive design.
JavaScript (Vanilla): For interactivity, DOM manipulation, and handling user events.
Chart.js: For creating interactive charts to display event registration trends.
Modal: Implemented for displaying event details.
Dark Mode: Implemented for theme toggling between light and dark modes.
Installation and Setup
Clone the Repository:

bash
Copy code
git clone https://github.com/your-username/event-dashboard.git
Open the Project Folder:

bash
Copy code
cd event-dashboard
Open the index.html File:

Open index.html in your preferred browser to view the dashboard.

File Structure
graphql
Copy code
event-dashboard/
│
├── index.html           # Main HTML file for the dashboard
├── style.css            # Main CSS file for styling
├── script.js            # Main JavaScript file for functionality
├── dummy.js             # Additional JavaScript for handling data and interactivity
├── images/              # Folder for images/icons used in the project
└── README.md            # Project documentation
How to Use
Sidebar Navigation: Use the sidebar links to navigate through the different sections of the dashboard.
Event History: Scroll through the event history or search for a specific event using the search bar.
View Event Details: Click on an event row in the history table to view detailed information in a modal pop-up.
Toggle Dark Mode: Click the "Toggle Dark Mode" button to switch between light and dark themes.