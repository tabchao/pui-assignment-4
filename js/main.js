var cartAmountNumber = 0;
//////////////////////////////////////////////////
//Retrieve localStorage's Shopping Cart Variable//
//////////////////////////////////////////////////
$(document).ready(function(){
    cartNumberArray = JSON.parse(localStorage.getItem("numberArray"))|| [];
    $("#shoppingcart").html(cartNumberArray);
    //console.log("This is cartNumberArray in JS" + " " + cartNumberArray);
});

//////////////////////////
//Set Popup Data Default//
//////////////////////////
function setPopupDataDefault(){
    //Switch the Tab to 6-pack
    document.getElementById("6-packs").click();
    
    //Set the 6-pack Flavor to default
    $(".popup-flavor-text-6").text("MAPLE APPLE BECAN");
    $(".popup-flavor-text-12").text("MAPLE APPLE BECAN");
    
    //Set the 6-pack, 12-pack Amount & Price to default
    newVal = 1;
    $("#popup-product-amount6").val(newVal);
    $("#popup-product-amount12").val(newVal);
    
    //Maple 6-pack-price
    var newPrice = parseInt(newVal*6.00)
    $(".six-pack-price").text("$ "+newPrice+".00");
    //Maple 12-pack-price
    var newPrice12 = parseInt(newVal*10)
    $(".twelve-pack-price").text("$ "+newPrice12+".00");
    
    //Maple 6-pack-Flaovr Img
    for (i=1; i < 16; i++) {
        $("#cb"+i).prop('checked', false);
    }
    //Maple 12-pack-Flaovr Img
    for (i=1; i < 16; i++) {
        $("#cp"+i).prop('checked', false);
    }

    //Get the Stored Data
    var cinnamonItems = JSON.parse(localStorage.getItem("cinnamonArray")) || [];
    //console.log("This is cinnamonItems in Product JS" + " " + localStorage.getItem("cinnamonArray"));

    var i = 0;
    var item1 = cinnamonItems[i];
    //Check the Stored Selected Cinnamon Data and Select the Default Cinnamon Flavor
    if(item1.selectCinnamonImg=="../img/cinnamon-roll/rectangle.jpg"){
        $("#cb1").prop('checked', true).attr("disabled", true);
        $("#cp1").prop('checked', true).attr("disabled", true);
    }else if(item1.selectCinnamonImg=="../img/cinnamon-roll/rectangle1.jpg"){
        $("#cb2").prop('checked', true).attr("disabled", true);
        $("#cp2").prop('checked', true).attr("disabled", true);

    }else if(item1.selectCinnamonImg=="../img/cinnamon-roll/rectangle2.jpg"){
        $("#cb3").prop('checked', true).attr("disabled", true);
        $("#cp3").prop('checked', true).attr("disabled", true);
    }else if(item1.selectCinnamonImg=="../img/cinnamon-roll/rectangle-3.jpg"){
        $("#cb4").prop('checked', true).attr("disabled", true);
        $("#cp4").prop('checked', true).attr("disabled", true);
    }else if(item1.selectCinnamonImg=="../img/cinnamon-roll/rectangle-4.jpg"){
        $("#cb5").prop('checked', true).attr("disabled", true);
        $("#cp5").prop('checked', true).attr("disabled", true);
    }else if(item1.selectCinnamonImg=="../img/cinnamon-roll/rectangle-5.jpg"){
        $("#cb6").prop('checked', true).attr("disabled", true);
        $("#cp6").prop('checked', true).attr("disabled", true);
    }else if(item1.selectCinnamonImg=="../img/cinnamon-roll/rectangle-6.jpg"){
        $("#cb7").prop('checked', true).attr("disabled", true);
        $("#cp7").prop('checked', true).attr("disabled", true);
    }else if(item1.selectCinnamonImg=="../img/cinnamon-roll/rectangle-7.jpg"){
        $("#cb8").prop('checked', true).attr("disabled", true);
        $("#cp8").prop('checked', true).attr("disabled", true);
    }else if(item1.selectCinnamonImg=="../img/cinnamon-roll/rectangle-8.jpg"){
        $("#cb9").prop('checked', true).attr("disabled", true);
        $("#cp9").prop('checked', true).attr("disabled", true);
    }else if(item1.selectCinnamonImg=="../img/cinnamon-roll/rectangle-9.jpg"){
        $("#cb10").prop('checked', true).attr("disabled", true);
        $("#cp10").prop('checked', true).attr("disabled", true);
    }else if(item1.selectCinnamonImg=="../img/cinnamon-roll/rectangle-10.jpg"){
        $("#cb11").prop('checked', true).attr("disabled", true);
        $("#cp11").prop('checked', true).attr("disabled", true);
    }else if(item1.selectCinnamonImg=="../img/cinnamon-roll/rectangle-11.jpg"){
        $("#cb12").prop('checked', true).attr("disabled", true);
        $("#cp12").prop('checked', true).attr("disabled", true);
    }else if(item1.selectCinnamonImg=="../img/cinnamon-roll/rectangle-12.jpg"){
        $("#cb13").prop('checked', true).attr("disabled", true);
        $("#cp13").prop('checked', true).attr("disabled", true);
    }else if(item1.selectCinnamonImg=="../img/cinnamon-roll/rectangle-13.jpg"){
        $("#cb14").prop('checked', true).attr("disabled", true);
        $("#cp14").prop('checked', true).attr("disabled", true);
    }else if(item1.selectCinnamonImg=="../img/cinnamon-roll/rectangle-14.jpg"){
        $("#cb15").prop('checked', true).attr("disabled", true);
        $("#cp15").prop('checked', true).attr("disabled", true);
    }else{

    }
}


////////////////////////////////////////////
//Delete the whole generated cinnamon roll//
////////////////////////////////////////////

$(document).ready(function(){
  $(document).on("click", ".delete-item", function() {
      $(this).parent().parent().parent().remove();
  });
});



//////////////////////////////////////////
//Adding & Decreasing Amount of the Roll//
//////////////////////////////////////////
$(function() {
    $(".button-click a").on("click", function() {
    
      var $button = $(this);
      var oldValue = $button.closest("ul").prev().val();
    
      if ($button.text() == "+") {
          var newVal = parseInt(oldValue) +1;
    
        } else {
       // Don't allow decrementing below zero
        if ($button.text() == "-") {
          if(oldValue == 1){
            newVal = 1;
          }else{
            var newVal = parseInt(oldValue) - 1;
          }
        } 
      }
      $button.closest("ul").prev().val(newVal);
    
      //Maple 6-pack-price
      var newPrice = parseInt(newVal*6.00)
      $(".six-pack-price").text("$ "+newPrice+".00");
    
      //Maple 12-pack-price
      var newPrice12 = parseInt(newVal*10)
      $(".twelve-pack-price").text("$ "+newPrice12+".00");
    
    //Add up the total product price
      var price = $(".product-price").val();
      $("#checkout-price").text(price);
      
    })
});



//////////////////////////////////////////////////
//Copy the Flavor Img Text to the Flavor Section//
//////////////////////////////////////////////////

$(document).ready(function(){
    //Add Flavor into Text, 6-pack
    $checks = $("#flavor-6-pack :checkbox");
    var string6 = $checks.filter(":checked").map(function(i,v){
            return this.value;
        }).get().join(" ");
        $('.popup-flavor-text-6').text(string6);
            
    $checks.on('change', function() {
        var string6 = $checks.filter(":checked").map(function(i,v){
            return this.value;
        }).get().join(" ");
        $('.popup-flavor-text-6').text(string6);
    
         console.log("popup-flavor-text-6 change" + " " + string6);
    });
    
    //Add Flavor into Text, 12-pack
    $checks12 = $("#flavor-12-pack :checkbox");
    var string12 = $checks12.filter(":checked").map(function(i,v){
            return this.value;
        }).get().join(" ");
        $('.popup-flavor-text-12').text(string12);
    
    $checks12.on('change', function() {
        var string12 = $checks12.filter(":checked").map(function(i,v){
            return this.value;
        }).get().join(" ");
        $('.popup-flavor-text-12').text(string12);
    });
    
});




////////////////////////////
//Click on Checkout Button//
////////////////////////////

//Click on 6-pack Checkout Button
$(".button-add-to-cart-6").click(function(){
    storePopupData();
    setPopupDataDefault();
});

//Click on 6-pack Checkout Button
$(".button-add-to-cart-12").click(function(){
    storePopupData();
    setPopupDataDefault();
});



///////////////////////////
//Store the Popup Data   //
///////////////////////////
function storePopupData(){
    //Close the Window 
    modal.style.display = "none";

    //get the selectFlavor6
    var selectFlavor6 = $('.popup-flavor-text-6').text();
    
    //get the selectFlavor12
    var selectFlavor12 = $('.popup-flavor-text-12').text();
    
    //get the selectAmount6
    var selectAmount6 = $('#popup-product-amount6').val();
    
    //get the selectAmount12
    var selectAmount12 = $('#popup-product-amount12').val();
    
    //get the selectPrice6
    var selectPrice6 = $('.six-pack-price').text();
    
    //get the selectPrice12
    var selectPrice12 = $('.twelve-pack-price').text();

    //get the selectProductImg
    var selectProductImg = $('.product-img').attr("src");
    
    //get the selectPack
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        if (tablinks[i].classList.contains("active")) {
            var chosenBun = 1;
            var selectPack = tablinks[i].innerHTML;
        }
    }

    //Update the amount of items of shopping cart
    if(selectAmount6!=0 && selectAmount12!=0){
        if(cartNumberArray == ""){
            cartAmountNumber = cartAmountNumber +1;
    
            localStorage.setItem("numberArray", cartAmountNumber);
    
            console.log("This is cartAmountNumber in storePopupData in JS" + " " +cartAmountNumber);
            
            $("#shoppingcart").html(cartAmountNumber);

            //Set the new Object for storing gathered data
            var chosenCartItem = {selectProductImg, selectPack, selectFlavor6, selectFlavor12, selectAmount6, selectAmount12, selectPrice6, selectPrice12};
            var oldItems = JSON.parse(localStorage.getItem("itemsArray")) || [];

            oldItems.push(chosenCartItem);
            localStorage.setItem("itemsArray", JSON.stringify(oldItems));
        }else{
            cartNumberArray = cartNumberArray + 1;

            localStorage.setItem("numberArray", cartNumberArray);
            //console.log("This is cartNumberArray in storePopupData in JS" + " " +cartNumberArray);
    
            $("#shoppingcart").html(cartNumberArray);

            //Set the new Object for storing gathered data
            var chosenCartItem = {selectProductImg, selectPack, selectFlavor6, selectFlavor12, selectAmount6, selectAmount12, selectPrice6, selectPrice12};
            var oldItems = JSON.parse(localStorage.getItem("itemsArray")) || [];

            oldItems.push(chosenCartItem);
            localStorage.setItem("itemsArray", JSON.stringify(oldItems));
        }
    }else{
    }
    //console.log("This is itemsArray" + " " + localStorage.getItem("itemsArray"));
}

