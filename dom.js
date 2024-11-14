// form events click, change and store info on local storage
const form = document.getElementById("myForm");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const username = document.getElementById("username").value;
    if (username.trim() === "") {
       alert("Username cannot be empty.");
    } else {
       alert(`Form submitted! Welcome, ${username}`);
       const user={
         username,
         plan:true
       }

       localStorage.setItem('user',JSON.stringify(user)); 
       console.log(localStorage.getItem('user'));
    }
});
// mouse events cick,mouseover,mouseout
document.getElementById("logout").addEventListener("click",()=>{
    localStorage.removeItem("user");
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
 
document.getElementById("show-user").addEventListener("click",()=>{
   const userJSON = localStorage.getItem("user");           
   if (userJSON) {
       const user = JSON.parse(userJSON);
       document.getElementById("user-info").innerText=user.username;
   } else {
      document.getElementById("user-info").innerText="";
       alert("No user data found!");
   }
})