function updateOutput(){
 $("iframe").contents().find("html").html("<html><head><style type='text/css'>" + $("#cssPanel").val() + "</style></head><body>" + $("#htmlPanel").val() + "</body></html>");
     document.getElementById("outputPanel").contentWindow.eval($("#javascriptPanel").val());
                }//update anything at Output panel that is written on the html&css&javascript panel


               $(".togglebutton").hover(function(){
         $(this).addClass("highlightedButton");
        },function(){
          $(this).removeClass("highlightedButton");
        });


        $(".togglebutton").click(function(){
         $(this).toggleClass("active");
          $(this).removeClass("highlightedButton");
          var panelID = $(this).attr("id") +"Panel";
          $("#" + panelID).toggleClass("hidden");
         var numberofActivePanels = 4- $('.hidden').length;
          $(".panel").width(($(window).width()/numberofActivePanels)-10);

        });

          $(".panel").height($(window).height()-$("#header").height()-15);//to adjust the height of the text area
          $(".panel").width(($(window).width()/2)-10);//to adjust the width

           updateOutput();
         $("textarea").on('change keyup paste', function() {
           updateOutput();
       });
       //to get the contents from html at the time of the writing simultaneously to the main output
