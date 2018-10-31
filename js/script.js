//new CircleType(document.getElementById('arc')).radius(384);
$(function () {
    
    //const baseURL = 'localhost/PlaylistProject'

    $.get(`api/playlist`, function(data, status) {
      let buffer = "";
      data.data.forEach(element => {
        buffer += "<div id=" + element.id + " class='col-sm-2'><h1 class='arctext'>" + element.name + "</h1>";
        buffer += "<div class='hoveropac' onmouseover='showbtns(" + element.id + ")' onmouseout='clearbtns(" + element.id + ")'>";
        buffer += "<img class='coverimg' src='" + element.image + "'>";
        buffer += "<div class='editbtn'><i class='fas fa-pen'></i></div><div class='deletebtn'><i class='fas fa-trash-alt'></i></div><div class='record playbtn'><i class='fas fa-play playico'></i></div></div></div>";
      });
      finish(buffer);
      // circleText();
    });
    // const circleType = new CircleType(document.getElementById('arc'));
    // circleType.radius(200);

  
  $("#addbtn").click(function() {
    $("#add2").hide();
    $("#add1").show();
  });
  
    $("#next").click(function () {
      $("#add2").show();
        $("#add1").hide();
      });
      //var data = "";
      function finish(data) {
        $(".playlists").append(data);
      }

      // function circleText() {
      //   $('.arctext').circleType({radius: 160, dir: -1});
      // }
      
      
      // Set the text radius and direction. Note: setter methods are chainable.
      
      
      // $(".fixedinput").
      
      
      //var buffer = "";
      //   $("#test").click(function () {
        //   var url = "http://localhost/PlaylistProject/api/playlist/1/songs";
        //   //buffer = "";
        //   $.ajax({
          //     url: `${url}`,
          //     success: (result) => {
            //       console.log("OK");
            //       console.log(result);
            //     }
            
            //   })
            // })
            
          });

          var loadFile = function(event) {
            var output = document.getElementById('outputimg');
            output.src = URL.createObjectURL(event.target.files[0]);
        };
          
          
          function showbtns(id) {
            $('#' + id + ' .hoveropac > div:not(:last-child)').css('opacity', '1');
            $('#' + id + ' .playbtn > i').css('opacity', '1');
            //console.log('in');
          }
          
          function clearbtns(id) {
            $('#' + id + ' .hoveropac > div:not(:last-child)').css('opacity', '0');
            $('#' + id + ' .playbtn > i').css('opacity', '0');
            //console.log('out');
          }
          
          