window.addEventListener("load", () => { 
  clockIndia(); 
  function clockIndia() { 
    const today = new Date(); 
    
    // Convert to IST (UTC+5:30)
    const utcTime = today.getTime() + today.getTimezoneOffset() * 60000;
    const istTime = new Date(utcTime + (5.5 * 60 * 60 * 1000)); // IST offset

    // Get time components 
    const hours = istTime.getHours(); 
    const minutes = istTime.getMinutes(); 
    const seconds = istTime.getSeconds(); 
 
    // Add '0' to hour, minute & second when they are less than 10 
    const hour = hours < 10 ? "0" + hours : hours; 
    const minute = minutes < 10 ? "0" + minutes : minutes; 
    const second = seconds < 10 ? "0" + seconds : seconds; 
 
    // Make clockIndia a 12-hour time clockIndia 
    const hourTime = hour > 12 ? hour - 12 : hour; 
 
    // Assigning 'am' or 'pm' to indicate time of the day 
    const ampm = hours < 12 ? "AM" : "PM"; 
 
    // Get date components 
    const month = istTime.getMonth(); 
    const year = istTime.getFullYear(); 
    const day = istTime.getDate(); 
 
    // Declaring a list of all months in a year 
    const monthList = [ 
      "January", 
      "February", 
      "March", 
      "April", 
      "May", 
      "June", 
      "July", 
      "August", 
      "September", 
      "October", 
      "November", 
      "December" 
    ]; 

    const monthListIndia = [
        "India Real Time: "
    ]
 
    // Get current date and time 
    const date = monthListIndia + monthList[month] + " " + day + ", " + year; 
    const time = hourTime + ":" + minute + ":" + second + " " + ampm; 
 
    // Combine current date and time 
    const dateTime = date + " - " + time; 
 
    // Print current date and time to the DOM 
    document.getElementById("date-time-india").innerHTML = dateTime; 
    setTimeout(clockIndia, 1000); 
  } 
}); 