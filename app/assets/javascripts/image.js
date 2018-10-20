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

  $('.imgFile').change(
      function () {
          if (!this.files.length) {
              return;
          }

          var index = $(this).closest("li").index() + 1;
          var order = 'nth-child('+ index +')'
          var file = $(this).prop("files")[0];
          var fr = new FileReader();
          $(".proto-sub-list li:" + order).children('.image-upload').css('background-image', 'none');
          fr.onload = function() {
              $(".list-group li:" + order).children('.image-upload').css('background-image', 'url(' + fr.result + ')');
          }
          fr.readAsDataURL(file);
          $(".proto-sub-list li:" + order).children(".image-upload img").css('opacity', 0);

      }
  );
});
