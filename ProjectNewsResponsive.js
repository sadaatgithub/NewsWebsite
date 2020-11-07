function myFunction() {
    // code for hamburger button javascript
    // var x = document.getElementById("myLinks");
    // if (x.style.display === "block") {
    //     x.style.display = "none";
    // } else {
    //     x.style.display = "block";
    // };
  
             // follow us div toggle
    // var y = document.getElementById("FS");
    // if (y.style.display === "block") {
    //     y.style.display = "none";
    // } else {
    //     y.style.display = "block";
    // };
}
setInterval(updateTime, 1000);      //Date and time
function updateTime() {
    date.innerHTML = new Date();
}
$(document).ready(function(){           
    $(".icon").click(function(){            //toggle hamburger menu
        $("#myLinks").toggle("slow");
        $(".social-links").toggle("slow");
    });
     $(".btn").click(function(){            //open sign in box on clicking sign in button
        $(".login-box").show("slow");
        $("main").css({"opacity":"1","pointer-events":"none"});
        
    });
    $(".cancelbtn").click(function(){       //hiding signin box on cancel button
        $(".login-box").hide("slow"); 
        $("main").css({"opacity":"1","pointer-events":"auto",});    
    });

    
});