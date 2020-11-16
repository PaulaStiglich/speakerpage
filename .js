{const finalDate = new Date ("May 18, 2021 00:00:00").getTime();

timer = () => {
  const now = new Date().getTime();
  const diff  = finalDate - now;
  if (diff < 0){
    clearInterval(x);
    document.getElementById('container').style.display = "none";
    document.getElementById('if-expired').style.display = "block";
  }
 let days = Math.floor(diff/ (1000*60*60*24));
 let hours = Math.floor ((diff % (1000*60*60*24))/(1000*60*60));
 let minutes = Math.floor((diff % (1000*60*60)) / (1000*60));
 let seconds = Math.floor((diff % (1000*60))/ 1000);

 days <=9 ? days = `00${days}` :
    days <=99 ? days = `0${days}`: days;
  hours <=9 ? hours = `0${hours}` : hours;
  minutes <=9 ? minutes = `0${minutes}` : minutes;
  seconds <=9 ? seconds = `0${seconds}` : seconds;

 document.querySelector("#days .box").textContent = days;
 document.querySelector("#hours .box").textContent = hours;
 document.querySelector("#minutes .box").textContent = minutes;
 document.querySelector("#seconds .box").textContent = seconds;
}

const x = setInterval(timer, 1000);
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  /* <p id="demo"></p>
<script>
    // Set the date we're counting down to
    var countDownDate = new Date("Jan 5, 2021 15:37:25").getTime();
    
    // Update the count down every 1 second
    var x = setInterval(function() {
    
      // Get today's date and time
      var now = new Date().getTime();
        
      // Find the distance between now and the count down date
      var distance = countDownDate - now;
        
      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
      // Output the result in an element with id="demo"
      document.getElementById("demo").innerHTML = days + "d " + hours + "h "
      + minutes + "m " + seconds + "s ";
        
      // If the count down is over, write some text 
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
      }
    }, 1000);
    </script> */}