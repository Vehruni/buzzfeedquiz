/* global $ */

$(document).ready(function() {
    $("button").click(function() {
        var name = $("#name").val();
        var techPlacement = "TBD";
        var imgSrc = "https://media.giphy.com/media/22zgHX8aop488/giphy.gif";
    
        var q2Result = $("#question2").val();
        var q3Result = $("#question3").val();
        var totalScore;
    });

});

function quest1(){
    var q1Result = $("#question1").val();
    if ( q1Result=== "happy") {
      return 4; 
       
    }
   
       if ( q1Result=== "annoyed") {
      return 3; 
       
    }
        if ( q1Result=== "goofy") {
      return 2; 
       
    }
       if ( q1Result=== "greedy") {
      return 1; 
       
    } 
}


function quest2(){
            var q2Result = $("#question2").val();
                if ( q2Result=== "Always") {
      return 10; 
       
    }
   
       if ( q2Result=== "Rarely") {
      return 8; 
       
    }
        if ( q2Result=== "Never") {
      return 4; 
       
}

}

function quest3(){
                   if ( q3Result=== "Cooking") {
      return 20; 
       
    }
   
       if ( q3Result=== "Collecting money") {
      return 30; 
       
    }
        if ( q3Result=== "listening to music") {
      return 40; 
       
}
       if ( q3Result=== "Sleeping") {
      return 10; 
       
}
}
    
}