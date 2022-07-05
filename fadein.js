// 動きのきっかけとなるアニメーションの名前を定義
function fadeAnime2(){

  // ふわっ
  $('.fadeInTrigger2').each(function(){ //fadeInTriggerというクラス名が
    var elemPos = $(this).offset().top-50;//要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
    $(this).addClass('fadeIn2');// 画面内に入ったらfadeInというクラス名を追記
    }else{
    $(this).removeClass('fadeIn2');// 画面外に出たらfadeInというクラス名を外す
    }
    });
}

function fadeAnime3(){

    // ふわっ
    $('.fadeInTrigger3').each(function(){ //fadeInTriggerというクラス名が
      var elemPos = $(this).offset().top-50;//要素より、50px上の
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll >= elemPos - windowHeight){
      $(this).addClass('fadeIn3');// 画面内に入ったらfadeInというクラス名を追記
      }else{
      $(this).removeClass('fadeIn3');// 画面外に出たらfadeInというクラス名を外す
      }
      });
  }

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function (){
fadeAnime2();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面をスクロールをしたら動かしたい場合の記述

// 画面が読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function(){
fadeAnime2();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面が読み込まれたらすぐに動かしたい場合の記述



// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function (){
fadeAnime3();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面をスクロールをしたら動かしたい場合の記述

// 画面が読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function(){
fadeAnime3();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面が読み込まれたらすぐに動かしたい場合の記述