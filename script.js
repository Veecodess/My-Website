// A. Change Theme (Dark/Light Mode)
const themeBtn = document.getElementById('themeBtn');
themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  themeBtn.textContent = document.body.classList.contains('dark-mode')
    ? "Toggle Light Mode"
    : "Toggle Dark Mode";
});

// B. Edit Job Title
const editJobBtn = document.getElementById('editJobBtn');
const jobTitle = document.getElementById('jobTitle');
editJobBtn.addEventListener('click', () => {
  const newTitle = prompt("Enter your new job title:");
  if (newTitle) {
    jobTitle.textContent = newTitle;
  }
});

// C. Show/Hide Skills
const toggleSkillsBtn = document.getElementById('toggleSkillsBtn');
const skillsSection = document.getElementById('skillsSection');
toggleSkillsBtn.addEventListener('click', () => {
  if (skillsSection.style.display === "none") {
    skillsSection.style.display = "block";
    toggleSkillsBtn.textContent = "Hide Skills";
  } else {
    skillsSection.style.display = "none";
    toggleSkillsBtn.textContent = "Show Skills";
  }
});

// D. Live Character Counter for Message Box
const msgBox = document.getElementById('msgBox');
const counter = document.getElementById('counter');
if (msgBox && counter) {
  msgBox.addEventListener('keyup', () => {
    const remaining = 200 - msgBox.value.length;
    counter.textContent = remaining;
    // Optional: warning color when near limit
    counter.style.color = remaining < 20 ? "red" : "inherit";
  });
}

// E. Form Validation Before Sending
function validateForm() {
  const nameField = document.getElementById('nameField');
  const emailField = document.getElementById('emailField');
  if (!nameField || !emailField) return true; // skip if fields not present

  if (nameField.value.trim() === "" || emailField.value.trim() === "") {
    alert("Please fill in both Name and Email fields.");
    return false;
  }
  return true;
}

const messageForm = document.getElementById('messageForm');
if (messageForm) {
  messageForm.addEventListener('submit', (e) => {
    if (!validateForm()) {
      e.preventDefault();
    }
  });
}

// F. Automatically Display Today’s Date in Footer
const dateDisplay = document.getElementById('dateDisplay');
if (dateDisplay) {
  const today = new Date();
  dateDisplay.textContent = "Today's date: " + today.toDateString();
}

// G. Greeting based on timezone and time of day
function setGreeting() {
  const greetingDiv = document.getElementById("Greeting");

  // Get local time
  const now = new Date();
  const hours = now.getHours();

  let greetingMessage = "";

  if (hours >= 5 && hours < 12) {
    greetingMessage = "Good Morning! Sun is rising, get up! ";
  } else if (hours >= 12 && hours < 18) {
    greetingMessage = "Good Afternoon! Let's continue our agenda! ";
  } else if (hours >= 18 && hours < 22) {
    greetingMessage = "Good Evening! Time to go to the bed. ";
  } else {
    greetingMessage = "Good Night! Have a sweet dreams.";
  }

  greetingDiv.textContent = greetingMessage;
}

// Run greeting when page loads
window.onload = setGreeting;

//H. Date and Time
    const displayElement = document.getElementById("currentDateTime");

    // Function to update the date and time
    function updateDateTime() {
        const now = new Date(); // Create a new Date object
        const dateTimeString = now.toLocaleString(); // Convert to a localized string

        // Update the innerHTML of the display element
        displayElement.innerHTML = dateTimeString;
    }

    // Call the function once to display the initial time
    updateDateTime();

    // Optionally, update the time every second for a live clock effect
    setInterval(updateDateTime, 1000); // Update every 1000 milliseconds (1 second)

