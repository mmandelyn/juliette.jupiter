
//Button submission and code output
$("#submitButton").click(function(e){ e.preventDefault()
  
  console.log("clicked");

  let jsonURL = "";
  var messageArray = [];

  for(let i = 0; i < jsonURL.length; i++){
    let obj = json[i];

    console.log(obj.id);
    messageArray.push(obj.id);
  };

  

  //display output to them
  $("#userOutput").text(messageArray); 
});// The submission end

//Button reset
$("#formReset").click(function () {
  document.getElementById("Form").reset();
});