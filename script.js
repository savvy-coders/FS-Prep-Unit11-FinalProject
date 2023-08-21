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