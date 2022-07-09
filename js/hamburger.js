// ボタン、メニュー、モーダル要素の取得
var btn = document.getElementById("button");
var menu = document.getElementById("menu_sp");
var modal = document.getElementById("modal");
var about = document.getElementById("about_sp");
var profile = document.getElementById("profile_sp");
var works = document.getElementById("works_sp");
var sns = document.getElementById("sns_sp");
    
// ボタンがクリックされたらclassを追加
btn.addEventListener("click",function(){
    menu.classList.toggle("add-menu_sp");
    modal.classList.toggle("add-modal_sp");
    btn.classList.toggle("active");
});

about.addEventListener("click",function(){
    menu.classList.toggle("add-menu_sp");
    modal.classList.toggle("add-modal_sp");
    btn.classList.toggle("active");
});

profile.addEventListener("click",function(){
    menu.classList.remove("add-menu_sp");
    modal.classList.remove("add-modal_sp");
    btn.classList.remove("active");
});

works.addEventListener("click",function(){
    menu.classList.remove("add-menu_sp");
    modal.classList.remove("add-modal_sp");
    btn.classList.remove("active");
});

sns.addEventListener("click",function(){
    menu.classList.remove("add-menu_sp");
    modal.classList.remove("add-modal_sp");
    btn.classList.remove("active");
});