$(document).ready(function(){



  $(".hover").on("click", function() {

    console.log($(this).data("data-tab"));

      // 選択したdata-tab に activeクラスを追加
      $(this).addClass("active");


      // 他のdata-tab  の activeクラスを削除
      // $(".tabpage").removeClass("active");

    });
   
});
