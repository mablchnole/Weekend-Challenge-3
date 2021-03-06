
// only run when DOM is ready for code to execute
$(document).ready(function(){
  // when submitButton is clicked, start server side operation function
  $('#submitButton').on('click', function(){
    console.log('submitButton clicked');
    // collect info and send to server
    startServerSideOperation();
  }); // end submitButton function
  // when clearButton is clicked, experience is reset
  $('#clearButton').on('click', function(){
    console.log('clearButton clicked');
    resetExperience();
  });
}); // end doc ready

// clear input fields and outDiv when clearButton is clicked
var resetExperience = function(){
  $('#input1').val('');
  $('#input2').val('');
  $('#outputDiv').empty();
};

// function to collect info and send to server
function startServerSideOperation(){
  console.log('in startServerSideOperation');
  // collect input info
  // first number input
  var x = $('#input1').val();
  console.log('input1: ' + x);
  // type of math operation input
  var type = $('#type').val();
  console.log('type: ' + type);
  // second number input
  var y = $('#input2').val();
  console.log('input2: ' + y);
  // create object from input info
  var inputObject = {
    "x": x,
    "type": type,
    "y": y
  }; // end inputObject
  console.log(inputObject);

  // function to organize and append info to the DOM
  var processResponse = function(response){
    console.log('in processResponse to append answer to the DOM: ' + response);
    // create new paragraph
    var newParagraph = document.createElement('p');
    // put our output data into the newParagraph
    newParagraph.textContent = response;
    // empty our outputDiv
    document.getElementById('outputDiv').innerHTML='';
    // append newParagraph to outputDiv
    document.getElementById('outputDiv').appendChild(newParagraph);
  }; // end processResponse function

  // POST with AJAX
  $.ajax({
    type: "POST",
    data: inputObject,
    url: "/calculation",
    success: function(data){
      console.log('post is successful: ' + data);
      // if post is successful, we've received back the "data" from server
      // send "data" to processResponse to finish appending to DOM
      processResponse(data);
    }, // end success
    error: function(){
      // if not successful connecting to server
      console.log('in ajax: error connecting to server');
    } // end error
  }); // end AJAX
} // end startServerSideOperation function
