console.log('sourced');

$(document).ready(function(){
  console.log('doc ready');

//on click for sendInfo ID
  $('#sendInfo').on('click', function () {
    console.log('meow');
    //assemble object to send to server
    var creatureIn= $('creatureIn').val();
    var noiseIn= $('noiseIn').val();
    var objectToSend = {
      creature: creatureIn,
      noise: noiseIn
    };
    //ajax post that sends object to /texter route
    $.ajax({
      type: 'POST',
      url: '/texter',
      data: objectToSend,
      success: function (data) {
        console.log(data);
      }
    });
  });

});
