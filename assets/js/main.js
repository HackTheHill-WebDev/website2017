//$(document).ready(function(){
//$('#logo').animate({
//top: 0
//}); 
//});   
var options = [{
    selector: 'list',
    offset: 0,
    callback: function (el) {
        Materialize.fadeInImage($(el));
    }
}]
Materialize.scrollFire(options);
$(document).ready(function myMove() {
    var elem = document.getElementById("logo");
    var pos = 100;
    var id = setInterval(frame, 10);
    var inter = setInterval(bounce, 10);

    function frame() {
        if (pos == 40) {
            console.log(pos);
            pos = pos; //why is this needed???
            clearInterval(id);
        } else {
            pos--;
            //$("#logo").animate({top: pos + '%'}, 800)
            elem.style.top = pos + '%';
            //elem.style.left = pos + '%'; 
        }
    }
    pos = 15;
    var bounceval = 10;

    function bounce() {
        console.log(pos);
        console.log("bounce: " + bounceval);
        if (pos > 34) {
            //exit if the position becomes less than one
            pos += 10;
            $("#logo").animate({
                top: 25 + "%"
            }, 800);
            // elem.style.top = 50 + "%";
            clearInterval(inter);
        } else {
            bounceval = bounceval / 2;
            $("#logo").animate({
                top: 25 + "%"
            }, 800);
            bounceval += 30;
            $("#logo").animate({
                top: bounceval + "%"
            }, 1000);
            pos += bounceval;
            // elem.style.top = pos + "%";
        }
    }
});
/*$(document).ready(function(){
$('#logo').animate({
top: 0
}); 
});
$(document).ready(function myMove() {
var elem = document.getElementById("logo");   
var pos = 200;
var id = setInterval(frame, 10);
var inter = setInterval(bounce, 10);
function frame() {
if (pos == 40) {
console.log(pos);
pos = pos;
clearInterval(id);
} else {
pos--; 
elem.style.top = pos + '%'; 
//elem.style.left = pos + '%'; 
}
}      
pos = 30;
var bounceval = 10;
function bounce(){
console.log(pos);
console.log("bounce: "+ bounceval);
if (pos > 39){
//exit if the position becomes less than one
pos += 10;
elem.style.top = pos + "%";
clearInterval(inter); 
}
else{    
bounceval = bounceval/2;
$(logo).animate({position: bounceval+"%"}, 2000);
pos += bounceval; 
elem.style.top = pos + "%";
}
}
});*/
//function to generate map from google
function myMap() {
    var mapCanvas = document.getElementById("map");
    var mapOptions = {
        backgroundColor: "gray",
        clickableIcons: false,
        disableDefaultUI: true,
        center: new google.maps.LatLng(36.9861061, -86.4486986),
        zoom: 17,
        maxZoom: 19,
        minZoom: 15,
        streetViewControl: false
    };
    var map = new google.maps.Map(mapCanvas, mapOptions);
}