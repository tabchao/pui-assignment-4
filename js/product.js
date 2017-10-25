///////////////
//Popup Modal//
///////////////

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
var titleText = $('title').text();
//console.log("This is titleText" + " " +titleText);

btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
    setPopupDataDefault();
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        document.getElementById("6-packs").click();
    }
}


///////////////
//Tab Section//
///////////////



function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

//Click on Tab button to switch
$('#6-packs').click(function () {
    openCity(event, '6-pack');
});
$('#12-packs').click(function () {
    openCity(event, '12-pack');
});


// Get the element with id="6-packs" and click on it
document.getElementById("6-packs").click();


//Limit Checkbox Number
var limit = 3;
$('input.single-checkbox').on('change', function(evt) {
   if($(this).siblings(':checked').length >= limit) {
       this.checked = false;
   }
});


////////////////////////////////////////
//Retrive the Click Cinnamon Img Data //
////////////////////////////////////////
$(document).ready(function(){
    retrieveClickProductData();

});



function retrieveClickProductData(){
 
    var cinnamonItems = JSON.parse(localStorage.getItem("cinnamonArray")) || [];
    console.log("This is cinnamonItems in Product JS" + " " + localStorage.getItem("cinnamonArray"));

    var i = 0;
    var item1 = cinnamonItems[i];

    //Change the Cinnamon Header
    $('#cinnamon-name').text(item1.selectCinnamonTitle);
    //console.log("This is for changing the title" + " " + item1.selectCinnamonTitle);

    //Change the Cinnamon Img
    $("#story-img").attr("src", item1.selectCinnamonImg);
    console.log("This is for changing the img" + " " +item1.selectCinnamonImg);

    //Change the Cinnamon Img
    $("#story-img").attr("src", item1.selectCinnamonImg);
    console.log("This is for changing the img" + " " +item1.selectCinnamonImg);

    //Change the Cinnamon Img
    $("#popup-product-img").attr("src", item1.selectCinnamonImg);

    //////////////////////////////
    //Product Detail Modal Popup//
    //////////////////////////////
    //Uncheck Maple 6-pack-Flaovr Img
    for (i=1; i < 16; i++) {
        $("#cb"+i).prop('checked', false);
    }
    //Uncheck Maple 12-pack-Flaovr Img
    for (i=1; i < 16; i++) {
        $("#cp"+i).prop('checked', false);
    }
    //Check the Selected Flavor Img
    if(item1.selectCinnamonImg=="../img/cinnamon-roll/rectangle.jpg"){
        $("#cb1").prop('checked', true).attr("disabled", true);
        $("#cp1").prop('checked', true).attr("disabled", true);
        //Change the Default Flavor Text according to the Flavor
        $(".popup-flavor-text-6").text(item1.selectCinnamonTitle);
        $(".popup-flavor-text-12").text(item1.selectCinnamonTitle);
    }else if(item1.selectCinnamonImg=="../img/cinnamon-roll/rectangle1.jpg"){
        $("#cb2").prop('checked', true).attr("disabled", true);
        $("#cp2").prop('checked', true).attr("disabled", true);
        //Change the Default Flavor Text according to the Flavor
        $(".popup-flavor-text-6").text(item1.selectCinnamonTitle);
        $(".popup-flavor-text-12").text(item1.selectCinnamonTitle);
    }else if(item1.selectCinnamonImg=="../img/cinnamon-roll/rectangle2.jpg"){
        $("#cb3").prop('checked', true).attr("disabled", true);
        $("#cp3").prop('checked', true).attr("disabled", true);
        //Change the Default Flavor Text according to the Flavor
        $(".popup-flavor-text-6").text(item1.selectCinnamonTitle);
        $(".popup-flavor-text-12").text(item1.selectCinnamonTitle);
    }else if(item1.selectCinnamonImg=="../img/cinnamon-roll/rectangle-3.jpg"){
        $("#cb4").prop('checked', true).attr("disabled", true);
        $("#cp4").prop('checked', true).attr("disabled", true);
        //Change the Default Flavor Text according to the Flavor
        $(".popup-flavor-text-6").text(item1.selectCinnamonTitle);
        $(".popup-flavor-text-12").text(item1.selectCinnamonTitle);
    }else if(item1.selectCinnamonImg=="../img/cinnamon-roll/rectangle-4.jpg"){
        $("#cb5").prop('checked', true).attr("disabled", true);
        $("#cp5").prop('checked', true).attr("disabled", true);
        //Change the Default Flavor Text according to the Flavor
        $(".popup-flavor-text-6").text(item1.selectCinnamonTitle);
        $(".popup-flavor-text-12").text(item1.selectCinnamonTitle);
    }else if(item1.selectCinnamonImg=="../img/cinnamon-roll/rectangle-5.jpg"){
        $("#cb6").prop('checked', true).attr("disabled", true);
        $("#cp6").prop('checked', true).attr("disabled", true);
        //Change the Default Flavor Text according to the Flavor
        $(".popup-flavor-text-6").text(item1.selectCinnamonTitle);
        $(".popup-flavor-text-12").text(item1.selectCinnamonTitle);
    }else if(item1.selectCinnamonImg=="../img/cinnamon-roll/rectangle-6.jpg"){
        $("#cb7").prop('checked', true).attr("disabled", true);
        $("#cp7").prop('checked', true).attr("disabled", true);
        //Change the Default Flavor Text according to the Flavor
        $(".popup-flavor-text-6").text(item1.selectCinnamonTitle);
        $(".popup-flavor-text-12").text(item1.selectCinnamonTitle);
    }else if(item1.selectCinnamonImg=="../img/cinnamon-roll/rectangle-7.jpg"){
        $("#cb8").prop('checked', true).attr("disabled", true);
        $("#cp8").prop('checked', true).attr("disabled", true);
        //Change the Default Flavor Text according to the Flavor
        $(".popup-flavor-text-6").text(item1.selectCinnamonTitle);
        $(".popup-flavor-text-12").text(item1.selectCinnamonTitle);
    }else if(item1.selectCinnamonImg=="../img/cinnamon-roll/rectangle-8.jpg"){
        $("#cb9").prop('checked', true).attr("disabled", true);
        $("#cp9").prop('checked', true).attr("disabled", true);
        //Change the Default Flavor Text according to the Flavor
        $(".popup-flavor-text-6").text(item1.selectCinnamonTitle);
        $(".popup-flavor-text-12").text(item1.selectCinnamonTitle);
    }else if(item1.selectCinnamonImg=="../img/cinnamon-roll/rectangle-9.jpg"){
        $("#cb10").prop('checked', true).attr("disabled", true);
        $("#cp10").prop('checked', true).attr("disabled", true);
        //Change the Default Flavor Text according to the Flavor
        $(".popup-flavor-text-6").text(item1.selectCinnamonTitle);
        $(".popup-flavor-text-12").text(item1.selectCinnamonTitle);
    }else if(item1.selectCinnamonImg=="../img/cinnamon-roll/rectangle-10.jpg"){
        $("#cb11").prop('checked', true).attr("disabled", true);
        $("#cp11").prop('checked', true).attr("disabled", true);
        //Change the Default Flavor Text according to the Flavor
        $(".popup-flavor-text-6").text(item1.selectCinnamonTitle);
        $(".popup-flavor-text-12").text(item1.selectCinnamonTitle);
    }else if(item1.selectCinnamonImg=="../img/cinnamon-roll/rectangle-11.jpg"){
        $("#cb12").prop('checked', true).attr("disabled", true);
        $("#cp12").prop('checked', true).attr("disabled", true);
        //Change the Default Flavor Text according to the Flavor
        $(".popup-flavor-text-6").text(item1.selectCinnamonTitle);
        $(".popup-flavor-text-12").text(item1.selectCinnamonTitle);
    }else if(item1.selectCinnamonImg=="../img/cinnamon-roll/rectangle-12.jpg"){
        $("#cb13").prop('checked', true).attr("disabled", true);
        $("#cp13").prop('checked', true).attr("disabled", true);
        //Change the Default Flavor Text according to the Flavor
        $(".popup-flavor-text-6").text(item1.selectCinnamonTitle);
        $(".popup-flavor-text-12").text(item1.selectCinnamonTitle);
    }else if(item1.selectCinnamonImg=="../img/cinnamon-roll/rectangle-13.jpg"){
        $("#cb14").prop('checked', true).attr("disabled", true);
        $("#cp14").prop('checked', true).attr("disabled", true);
        //Change the Default Flavor Text according to the Flavor
        $(".popup-flavor-text-6").text(item1.selectCinnamonTitle);
        $(".popup-flavor-text-12").text(item1.selectCinnamonTitle);
    }else if(item1.selectCinnamonImg=="../img/cinnamon-roll/rectangle-14.jpg"){
        $("#cb15").prop('checked', true).attr("disabled", true);
        $("#cp15").prop('checked', true).attr("disabled", true);
        //Change the Default Flavor Text according to the Flavor
        $(".popup-flavor-text-6").text(item1.selectCinnamonTitle);
        $(".popup-flavor-text-12").text(item1.selectCinnamonTitle);
    }else{

    }

};




