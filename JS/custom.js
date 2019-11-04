var x = $(".art-desc p");
var y = $(".btn");
var z = $("#labels");
var art = $(".art-desc");
//var flag = true;

$(".back-to-top").bind("click",function(){
    $("html").animate({
        scrollTop: 0
    },2000);
});

$(".menu-item.parent").bind("mouseenter",function () {
    var li = $(this);
    var sub = li.children(".submenu");
    sub.slideDown();
});

$(".menu-item.parent").bind("mouseleave",function () {
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

function loadMore() {
    var content = $(".content");
    //console.log();
    var new_html = "<div class=\"article\">\n" +
        "                    <div class=\"art-title\">\n" +
        "                        <h2>Article with everything in Post</h2>\n" +
        "                    </div>\n" +
        "                    <div class=\"art-info\">\n" +
        "                        <span>Posted by admin at <a>3:00PM</a>| Label:\n" +
        "                            <strong>web</strong>\n" +
        "                            <strong>blog</strong>\n" +
        "                        </span>\n" +
        "                        <a class=\"comments\" href=\"#\">4 comments</a>\n" +
        "                    </div>\n" +
        "                    <div class=\"art-content\">\n" +
        "                        <div class=\"thumbnail\">\n" +
        "                            <img src=\"images/car.jpg\">\n" +
        "                        </div>\n" +
        "                        <div class=\"art-desc\">\n" +
        "                            <p>Trong tuĂ¢̀€n qua, Ă´ tĂ´ nguyĂªn chiĂª̀c càc loà£i Ä‘Æ°á»£c\n" +
        "                                Ä‘Äƒng kĂ½ lĂ m thá»§ tá»¥c háº£i quan nháº­p kháº©u và€o ViĂª̀£t Nam\n" +
        "                                chù‰ yĂª̀u cò xuĂ¢̀t xÆ°̀ tÆ°̀€ Thài Lan vÆ¡̀i 2.122 chiĂª̀c,\n" +
        "                                Indonesia vÆ¡̀i 952 chiĂª̀c, Mexico vá»›i 241 chiáº¿c,\n" +
        "                                Trung QuĂ´̀c vÆ¡̀i 111 chiĂª̀c. Tình chung, xe Ă´ tĂ´ nguyĂªn\n" +
        "                                chiĂª̀c nhĂ¢̀£p khĂ¢̀‰u tÆ°̀€ 4 thì£ trÆ°Æ¡̀€ng nà€y chiĂª̀m tÆ¡̀i 99%\n" +
        "                                tĂ´̀‰ng lÆ°Æ¡̀£ng xe nhĂ¢̀£p khĂ¢̀‰u và€o ViĂª̀£t Nam trong tuĂ¢̀€n.</p>\n" +
        "                        </div>\n" +
        "                    </div>\n" +
        "                    <div class=\"art-btn\">\n" +
        "                        <a href=\"#\" class=\"btn\">read more</a>\n" +
        "                    </div>\n" +
        "                </div>";
    //content.html(content.html()+new_html);
    content.append(new_html);
}