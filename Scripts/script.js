$( document ).ready(function(){
  console.log( "ready!" );

  let natoPhonetic ={
    "A":"Alfa","B":"Bravo","C":"Charlie","D":"Delta","E":"Echo","F":"Foxtrot","G":"Golf","H":"Hotel","I":"India","J":"Juliett","K":"Kilo",
    "L":"Lima","M":"Mike","N":"November","O":"Oscar","P":"Papa","Q":"Quebec","R":"Romeo","S":"Sierra","T":"Tango","U":"Uniform","V":"Victor",
    "W":"Whiskey","X":"Xray","Y":"Yankee","Z":"Zulu"};
  let civilianPhonetic ={
    "A":"Adam", "B":"Boy","C":"Charles","D":"David", "E":"Edward","F":"Frank", "G":"George","H":"Henry","I":"Ida", "J":"John", "K":"King", "L":"Lincoln",
    "M":"Mary", "N":"Nora", "O":"Ocean", "P":"Paul", "Q":"Queen", "R":"Robert", "S":"Sam", "T":"Tom", "U":"Union", "V":"Victor", "W":"William",
    "X":"X-Ray","Y":"Young","Z":"Zebra"};



//NATO Submit and code output
  $("#natoSubmit").click(function(e){e.preventDefault()
    
    console.log("clicked");

    let messageArray = [];
  
    let result = "";
    let message = $('#message').val().toUpperCase().split(" ");

// sort through original message
      $.each(message, (index, value)=> {
          console.log(index,value);
          var letter = ''; 
          var newLetter = ''; 
        
              letter = message[index];
              newLetter = letter.charAt(0);
              result += natoPhonetic[newLetter] + ' ';
        
        });  

      console.log('Coded Message:', result);

//display output to them
      $("#outputHeader").text("Here is your coded message in NATO Phonetic:");  
      $("#userOutput").text(result); 

      $("#hackedOutput").text("Thank you for sharing your message with the enemy..."); 
      });

//Civilian Submit and code output
$("#civilianSubmit").click(function(e){e.preventDefault()
    
  console.log("clicked");

  let messageArray = [];

  let result = "";
  let message = $('#message').val().toUpperCase().split(" ");
  
// sort through original message
    $.each(message, (index, value)=> {
        console.log(index,value);
        var letter = ''; 
        var newLetter = ''; 
      
            letter = message[index];
            newLetter = letter.charAt(0);
            result += civilianPhonetic[newLetter] + ' ';
      
      });  

    console.log('Coded Message:', result);

//display output to them
    $("#outputHeader").text("Here is your coded message in Civilian Phonetic:");  
    $("#userOutput").text(result); 
    
    $("#hackedOutput").text("Thank you for sharing your message with the enemy..."); 
    });
  

//Button reset
  $("#formReset").click(function () {
    console.log("reset");
    document.getElementById("Form").reset();
  });

});