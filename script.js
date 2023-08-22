// Add your script below this line, but above the next comment!
function getBtnAndShow(){
    function displayDateAndTime(){
      document.getElementById ('time') .innerHTML = Date();
    }
      document.getElementById ('timeCheckBtn')
    .addEventListener ('click', displayDateAndTime);
  }
  
  function clearDateAndTime(){
    document.getElementById('time').innerHTML = '';
  }
  
  getBtnAndShow();
  setInterval(clearDateAndTime, 5000);


