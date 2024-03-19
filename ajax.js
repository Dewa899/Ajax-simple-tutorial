$(document).ready(function(){
  $("#shoutbutton").click(function() {
      $.ajax({
          type: "POST",
          url: "server.php",
          data: $("#form1").serialize(),
          success: function(rsp) {
              $("#data").append("<div>"+rsp+"</div>");
          },
          error: function(xhr, status, error) {
              alert("Error: " + error);
          }
      });
  });
});
