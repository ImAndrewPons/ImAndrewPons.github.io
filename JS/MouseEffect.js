if(!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
const cursor = document.querySelector("#element");
const buttons = document.querySelectorAll(".gridItem img");
const icons = document.querySelectorAll("#icon");
let mouseX = 0;
let mouseY = 0;
let x = 0;
let y = 0;


document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX-9;
  mouseY = e.clientY - 9.5 + window.pageYOffset; // add the scroll offset
});

document.addEventListener("mouseout", () => {
  isActive = false;
  cursor.style.display = "none";
});

document.addEventListener("mouseover", () => {
  isActive = true;
  cursor.style.display = "block";
});

buttons.forEach((button) => {
  button.addEventListener("mouseenter", () => {
    cursor.style.transform = "scale(1.5)";
  });
  button.addEventListener("mouseleave", () => {
    cursor.style.transform = "scale(1)";
  });
});

icons.forEach((icon) => {
  icon.addEventListener("mouseenter", () => {
    cursor.style.transform = "scale(0)";
  });
  icon.addEventListener("mouseleave", () => {
    cursor.style.transform = "scale(1)";
  });
});

function animate() {
  x += (mouseX - x);
  y += (mouseY - y);

  cursor.style.left = x + "px";
  cursor.style.top = y + "px";

  requestAnimationFrame(animate);
}

animate();
}



//TIME DISPLAY

// Define a function to display the current time in a given city
function showCityTime() {
  // Get the current time in a given city and format it to only display hours and minutes
  const cityTime = new Date().toLocaleTimeString("en-US", {
    timeZone: "America/New_York",
    hour12: false,
    hour: "numeric",
    minute: "numeric"
  });

  // Display the time in a text element
  document.getElementById("time").textContent = cityTime;
}

// Wait for the DOM to finish loading
document.addEventListener("DOMContentLoaded", function(event) {
  // Call the showCityTime function to display the current time in the given city
  showCityTime();

  // Update the time element every second
  setInterval(showCityTime, 1000);
});





//FACE HOVER BUBBLE


// Get the element that will display the background image
const element = document.getElementById("element");

// Get all the h1 tags on the page
const h1Tags = document.getElementsByTagName("h1");

// Add a mouseover event listener to each h1 tag
for (let i = 0; i < h1Tags.length; i++) {
  h1Tags[i].addEventListener("mouseover", function() {
    // Change the background image of the element to profileImage.jpg
    element.style.backgroundImage = "url('/Assets/Images/profileImage.jpg')";
    
    // Add a transform property to the element
    element.style.transform = "scale(2)";
  });
  
  h1Tags[i].addEventListener("mouseout", function() {
    // Change the background image of the element to none
    element.style.backgroundImage = "none";
    
    // Remove the transform property from the element
    element.style.transform = "none";
  });
}





// MODAL

// Get the modal element
const modal = document.createElement('div');
modal.classList.add('modal');
document.body.appendChild(modal);

// Get all images with class "workImage"
const images = document.querySelectorAll('.workImage');

// Add click event listener to each image
images.forEach(image => {
  image.addEventListener('click', () => {
    // Show the modal
    modal.style.display = 'block';
    // Set the clicked image as the modal content
    modal.innerHTML = `<img class="modal-content" src="${image.src}" alt="${image.alt}">`;
    // Disable scrolling
    document.body.style.overflow = 'hidden';
  });
});

// Add click event listener to the modal to close it
modal.addEventListener('click', () => {
  modal.style.display = 'none';
  // Enable scrolling
  document.body.style.overflow = 'auto';
});


//THEME SWITCH

const themeToggle = document.getElementById('icon');

// Add an event listener for the button click event
themeToggle.addEventListener('click', () => {
  // Get the body element
  const body = document.body;

  // Toggle the dark-mode class on the body element
  body.classList.toggle('dark-mode');

    // Swap the --white and --black variables
    const root = document.documentElement;
    const white = getComputedStyle(root).getPropertyValue('--white');
    const black = getComputedStyle(root).getPropertyValue('--black');
    root.style.setProperty('--white', black);
    root.style.setProperty('--black', white);

  // Get the button element
  const button = document.getElementById('icon');

  // Toggle the light-mode and dark-mode classes on the button element
  button.classList.toggle('light-mode');
  button.classList.toggle('dark-mode');
});
