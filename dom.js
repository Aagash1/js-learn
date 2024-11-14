// form events click, change and store info on local storage
const form = document.getElementById("myForm");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const username = document.getElementById("username").value;
    if (username.trim() === "") {
       alert("Username cannot be empty.");
    } else {
       alert(`Form submitted! Welcome, ${username}`);
       localStorage.setItem('username',username); 
       console.log(localStorage.getItem('username'));
    }
});
// mouse events cick,mouseover,mouseout
document.getElementById("logout").addEventListener("click",()=>{
    localStorage.removeItem("username");
})
//load event
 window.addEventListener("load", () => {
    console.log("page is fully loaded");
 });
 
//timeout
 setTimeout(function() {
    alert('Enter the login details');
 }, 2000);
 
//interval
function updateClock() {
    const now = new Date();
    document.getElementById("clock").innerText = now.toLocaleTimeString();
}
const clock=setInterval(updateClock, 1000);

document.getElementById("stop").addEventListener("click",()=>{
    clearInterval(clock);
})
 
 
 // geolocation
 if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
    });
  } else {
    console.log('Geolocation is not supported by this browser.');
  }
 

  