/**
 * Created by hargunchawla on 05/04/17.
 */
var strings=["LAHORE WATCH HOUSE","TRUSTED SINCE 1950"];
string=0;
var pos=0;
function type(){
    $(".dynamic").html(strings[string].substr(0,pos));
    if(pos++==strings[string].length){
        setTimeout('erase()',2000);
    }
    else{
        setTimeout('type()',100);
    }
}
function erase(){
    $(".dynamic").html(strings[string].substr(0,pos--));
    if(pos==-1){
        string=(string+1)%strings.length;
        pos=0;
        setTimeout('type()',300);
    }
    else{
        setTimeout('erase()',100);
    }
}
$(document).ready(function(){
    $("#navo").click(function(){
        $("nav#main .blackout").fadeIn();
        $("nav#main ul.links").css("right","0px");
    });
    $("nav#main .blackout").click(function(){
        $("nav#main .blackout").fadeOut();
        $("nav#main ul.links").css("right","-200px");
    });
    $("#fbutton").click(function(){
        $("#filterclearfix").fadeIn();
        $(".filters").css("left","0px");
    });
    $("#filterclearfix").click(function(){
        $("#filterclearfix").fadeOut();
        $(".filters").css("left","-230px");
    });
    type();
});