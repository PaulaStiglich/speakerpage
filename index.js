

//Popup Dialog Box****************************************************

// function openModal() {
// let modalTrigger = document.querySelectorAll('modal-trigger');
// }



const open = document.getElementById('open');
const modal_container = document.getElementById('modal_container');
const close = document.getElementById('close');

open.addEventListener('click', () => {
  modal_container.classList.add('show');
})

close.addEventListener('click', () => {
  modal_container.classList.remove('show');
})




//Speaker Array *************************************************


// const speakerInfo = [
//   ['Ritika Nevatia', 'Navigating a Global Career and Machine Learning Algorithms', 'Nunn', 'May 18th', '11:00am'],
//   ['Alicia Park', 'How do you get more women in tech, retain and close the gender gap', 'Collins', 'May 18th', '11:00am'],
//   ['Flo Wright', 'tbd', 'Willis', 'May 19th', '11:00am'],
//   ['Alisia McClain', 'tbd', 'Clements', 'May 19th', '11:00am'],
//   ['Teresa Carlson', 'tbd', 'Combs Chandler', 'May 19th', '11:00am'],
// ];

// //const speakerinfo = `${speakerinfo[0][1]}, ${speakerinfo[1][1]}, ${speakerinfo[5][1]}`;
// //console.log(myArtists);

// function createListItems( arr ) {
//   let items = '';
//   for ( let i = 0; i < arr.length; i++ ) {
//     items += `<li>${ arr[i][0] }, Session Title ${ arr[i][1] }, Room ${ arr[i][2], "Date" ${ arr[i][3], "Time" ${ arr[i][4]} </li>`;
//   }
//   return items;
// }

// document.querySelector('main').innerHTML = `
//   <ol>
//     ${createListItems(speakerSessionInfo)}
//   </ol>
// `;


//Countdown timer *************************************************

// {const finalDate = new Date ("May 18, 2021 00:00:00").getTime();

// // Arrow Function 
// timer = () => {
//   const now = new Date().getTime();
//   const diff  = finalDate - now;
//   if (diff < 0){
//     clearInterval(x);
//     document.getElementById('container').style.display = "none";
//     document.getElementById('if-expired').style.display = "block";
//   }
// //Arrow Function

//  let days = Math.floor(diff/ (1000*60*60*24));
//  let hours = Math.floor ((diff % (1000*60*60*24))/(1000*60*60));
//  let minutes = Math.floor((diff % (1000*60*60)) / (1000*60));
//  let seconds = Math.floor((diff % (1000*60))/ 1000);

//  days <=9 ? days = `00${days}` :
//     days <=99 ? days = `0${days}`: days;
//   hours <=9 ? hours = `0${hours}` : hours;
//   minutes <=9 ? minutes = `0${minutes}` : minutes;
//   seconds <=9 ? seconds = `0${seconds}` : seconds;

//  document.querySelector("#days .box").textContent = days;
//  document.querySelector("#hours .box").textContent = hours;
//  document.querySelector("#minutes .box").textContent = minutes;
//  document.querySelector("#seconds .box").textContent = seconds;
// }

// const x = setInterval(timer, 1000);
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
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
    </script> */