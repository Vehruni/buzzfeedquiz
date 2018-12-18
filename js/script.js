/* global $ */

$(document).ready(function() {
    $("button").click(function() {
        var name = $("#name").val();
        var techPlacement = "TBD";
        var imgSrc = "https://media.giphy.com/media/22zgHX8aop488/giphy.gif";
      var q1Result = $("#question1").val();
        
        var q2Result = $("#question2").val();
        var q3Result = $("#question3").val();
        var quest1score= quest1(q1Result);
        var quest2score =quest2(q2Result);
        var quest3score=quest3(q3Result);
          var totalScore=(quest1score + quest2score + quest3score);
        
        $(".result").html(totalScore);
    });

});

function quest1(answer){
    
    if ( answer=== "happy") {
      return 4; 
       
    }
   
       if ( answer=== "annoyed") {
      return 3; 
       
    }
        if ( answer=== "goofy") {
      return 2; 
       
    }
       if ( answer=== "greedy") {
      return 1; 
       
    } 
}


function quest2(answer){
                if ( answer=== "Always") {
      return 10; 
       
    }
   
       if ( answer=== "Rarely") {
      return 8; 
       
    }
        if ( answer=== "Never") {
      return 4; 
       
}

}

function quest3(answer){
                   if (answer=== "Cooking") {
      return 20; 
       
    }
   
       if ( answer=== "Collecting money") {
      return 30; 
       
    }
        if ( answer=== "listening to music") {
      return 40; 
       
}
       if ( answer=== "Sleeping") {
      return 10; 
       
}
}
    
