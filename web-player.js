
function updateOutput(){
    $("iframe").contents().find("html").html("<html><head><style type='text/css'>"+$("#cssPanel").val()+"</style></head><body>"+$("#htmlPanel").val()+"</body></html>");
    document.getElementById("outputPanel").contentWindow.eval($("#javascriptPanel").val());


}
$(".toggleButton").hover(function(){


    if($(this).css("background-color")=='rgb(238, 238, 238)'){

        $(this).css("background-color","#E5E5E5");
    }
    else if($(this).css("background-color")=='rgb(232, 242, 255)'){
        $(this).css("background-color","#B7DFFD");
    }



},function(){
    if($(this).css("background-color")=='rgb(229, 229, 229)'){

        $(this).css("background-color","#EEEEEE");
    }
    else if($(this).css("background-color")=='rgb(183, 223, 253)'){
        $(this).css("background-color","#E8F2FF");
    }

});
$(".toggleButton").click(function(){
    if($(this).css("background-color")=='rgb(238, 238, 238)'||$(this).css("background-color")=='rgb(229, 229, 229)'){
        $(this).css("background-color","#E8F2FF");
    }
    else
    {
        $(this).css("background-color","#EEEEEE");
    }
    var panel=$(this).attr("id")+"Panel";
    $("#"+panel).toggleClass("hidden");
    $(".panel").width(($(window).width()/(4-$(".hidden").length))-10);
});

$(".panel").height($(window).height()-$("#header").height()-8);
updateOutput();
$("textarea").on('change keyup paste',function(){
    updateOutput();

});
