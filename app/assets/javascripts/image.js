$(function(){

  $('#imgTop').change(
      function () {
          if (!this.files.length) {
              return;
          }

          var file = $(this).prop('files')[0];
          var fr = new FileReader();
          $('.cover-image-upload').css('background-image', 'none');
          fr.onload = function() {
              $('.cover-image-upload').css('background-image', 'url(' + fr.result + ')');
          }
          fr.readAsDataURL(file);
          $(".cover-image-upload img").css('opacity', 0);
      }
  );

  $('#imgFile').change(
      function () {
          if (!this.files.length) {
              return;
          }

          var files = "";
          var file = $(this).prop("files")[0];
          var fr = new FileReader();
          $('.image-upload').css('background-image', 'none');
          fr.onload = function() {
              $('.image-upload').css('background-image', 'url(' + fr.result + ')');
          }
          fr.readAsDataURL(file);
          $(".image-upload img").css('opacity', 0);

      }
  );
});
