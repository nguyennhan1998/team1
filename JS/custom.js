var x = $(".art-desc p");
var y = $(".btn");
var z = $("#labels");
var art = $(".art-desc");
//var flag = true;

$(".back-to-top").bind("mouseenter",function(){
    $("html").animate({
        scrollTop: 0
    },200);
});

$(".menu-item.parent").bind("click",function () {
    var li = $(this);
    var sub = li.children(".submenu");
    sub.slideDown();
});

$(".menu-item.parent").bind("click",function () {
    var li = $(this);
    var sub = li.children(".submenu");
    sub.hide();
});

// function showSubmenu(e){
//     var li = $(e);
//     var sub = li.children(".submenu");
//     sub.slideDown();
// }
//
// function hideSubmenu(e) {
//     var li = $(e);
//     var sub = li.children(".submenu");
//     sub.hide();
// }

function quaysomayman() {
    // x.css("color","red");
    // x.css("font-size","20px");
    // x.css({
    //     "color":"red",
    //     "font-size":"20px",
    //     "line-height":2
    // });

    //x.text("xin chao T1907M");
    // alert(x.text());

    //alert(art.html());
    //art.html("<h1>xin chao T1907M</h1>");

    //alert(art.width());
    //art.width((art.width()+10)+"px");
    // for (i=0;i<100;i++){
    if(!art.hasClass("hide")){
        //flag = false;
        art.addClass("hide");

        //art.hide();
        // art.fadeOut();
        art.slideUp();
    }else{
        art.removeClass("hide");
        //art.show();
        //art.fadeIn(400);
        art.slideDown();
    }
    //}
}


/*function loadmore1(){
 var new_html=
     "                            <p class=\"text\">Freetut</p>\n";

    $(".img-wrapper").append(new_html);
}
function loadmore2(){
    var new_html="\n" +
        "                    <div class=\"img-wrapper\" onmouseenter=\"loadmore1()\" onmouseleave=\"loadmore2()\">\n" +
        "                       <div class=\"inner-img\"><img src=\"IMG/banner01.jpg\" height=\"510\" width=\"510\"/>\n" +
        "\n" +
        "                       </div>\n" +
        "                    </div>\n";
    $(".img-wrapper").html(new_html);
}*/