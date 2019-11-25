var x = $(".art-desc p");
var y = $(".btn");
var z = $("#labels");
var art = $(".art-desc");
//var flag = true;

$(".back-to-top").bind("click",function(){
    $("html").animate({
        scrollTop: 0
    },200);
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
/*search*/
/*$(".search_brand").bind("click",function () {
    $(".add").html("<img src='CSS/loading.gif'/>");
    $.ajax({
        url: "https://libertyelectronic-nodejs.herokuapp.com/api/timkiem",
        method: "GET",
        data: {
            search: $(".search_input").val()
        },
        success: function (result) {
            setTimeout(function () {
                $(".sp").html(" ");
                for(var i=0;i<result.length;i++){
                    var new_html =  "        <div class=\"sp1\">\n" +
                        "            <div class=\"img-sp1\"><a href=\"#\" class=\"thumb\"><img src=\""+result[i].images +
                        "\" height=\"600\" width=\"600\"></a></div>\n" +
                        "            <div>\n" +
                        "                <p>NEW</p>\n" +
                        "            </div>\n" +
                        "            <div>\n" +
                        "                <a href=\"#\">" +result[i].ten_mat_hang+
                        "</a>\n" +
                        "            </div>\n" +
                        "            <div>\n" +
                        "                <p><span>$" +result[i].gia_ban+
                        " - $" +result[i].gia_goc+
                        "</span></p>\n" +
                        "            </div>\n" +
                        "            <div class=\"list\">\n" +
                        "                <ul>\n" +
                        "                    <li title=\"ADD TO WISHLISH\"><a href=\"#\"><i class=\"far fa-heart\" aria-hidden=\"true\"></i></a></li>\n" +
                        "                    <li title=\"ADD TO CARD\"><a href=\"#\"><i class=\"fas fa-cart-plus\" aria-hidden=\"true\"></i></a></li>\n" +
                        "                    <li title=\"QUCK VIEW\"><a href=\"#\"><i class=\"fas fa-expand-arrows-alt\" aria-hidden=\"true\"></i></a></li>\n" +
                        "                    <li><a title=\"ADD TO COMPARE\" href=\"#\"><i class=\"fas fa-compress-arrows-alt\" aria-hidden=\"true\"></i></a></li>\n" +
                        "                </ul>\n" +
                        "            </div>\n" +
                        "            <div>\n" +
                        "                <ul>\n" +
                        "                    <li><i class=\"fas fa-star\" aria-hidden=\"true\"></i></li>\n" +
                        "                    <li><i class=\"fas fa-star\" aria-hidden=\"true\"></i></li>\n" +
                        "                    <li><i class=\"fas fa-star\" aria-hidden=\"true\"></i></li>\n" +
                        "                    <li><i class=\"fas fa-star\" aria-hidden=\"true\"></i></li>\n" +
                        "                    <li><i class=\"fas fa-star\" aria-hidden=\"true\"></i></li>\n" +
                        "                </ul>\n" +
                        "            </div>\n" +
                        "        </div>";
                    $(".sp").append(new_html);
                }
            },2000);

        }
    });
})

 */