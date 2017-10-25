//Change the amount of the Product
$(function() {
$(".button-click a").on("click", function() {
  var $button = $(this);
  var oldValue = $button.closest("ul").prev().val();
  if ($button.text() == "+") {
      var newVal = parseInt(oldValue) +1;

    } else {
   // Don't allow decrementing below zero
    if ($button.text() == "-") {
      if(oldValue == 0){
        newVal = 0
      }else{
        var newVal = parseInt(oldValue - 1);
      }
    } 
  }
  $button.closest("ul").prev().val(newVal);

  var newPrice = parseInt(newVal*6.00)
  $(".product-price").val("$ "+newPrice+".00");

  $(".six-pack-price").text("$ "+newPrice+".00");

  var newPrice12 = parseInt(newVal*10)
  $(".twelve-pack-price").text("$ "+newPrice12+".00");

/************Add up the total product price***********/
  var price = $(".product-price").val();
  $("#checkout-price").text(price);
  
  
})
});



$(document).ready(function(){
  //Copy the product price to checkout price
  var price = $(".product-price").val();
  $("#checkout-price").text(price);

  //Delete the whole generated cinnamon roll
  $(document).on("click", ".delete-item", function() {
    $(this).parent().parent().parent().remove();
    checkoutTotalPrice();


  });
 
 });




///////////////////////////////////
//Retrieve Data from localStorage//
///////////////////////////////////
$(document).ready(function(){
      var cartNumberArrayRetreive = JSON.parse(localStorage.getItem("numberArray"))|| [];

      $("#shoppingcart").html(cartNumberArrayRetreive);

      console.log("This is cartNumberArrayRetreive" + " " + cartNumberArrayRetreive);
      
      
  
      var cartArray = JSON.parse(localStorage.getItem("itemsArray"))|| [];
      //console.log(cartArray);
  
      var totalPrice = 0;
  
      if(cartArray.length == 0){
          $(".new-item").css("visibility", "hidden");
  
      }else if(cartArray.length == 1){ 
          var item1 = cartArray[0];
          $("#size-detail").html(item1.selectPack);
          if(item1.selectPack == "6-packs"){
              $("#img-detail").attr("src", item1.selectProductImg);
              $("#flavor-detail").html(item1.selectFlavor6);
              $("#amount-detail").attr("value" , item1.selectAmount6);
              $("#price-detail").attr("value" , item1.selectPrice6);
          }else{
              $("#flavor-detail").html(item1.selectFlavor12);
              $("#amount-detail").attr("value" , item1.selectAmount12);
              $("#price-detail").attr("value" , item1.selectPrice12);
          }
      }else{
          var item1 = cartArray[0];
          $("#img-detail").attr("src", item1.selectProductImg);
          $("#size-detail").html(item1.selectPack);
  
          if(item1.selectPack == "6-packs"){
              
              $("#flavor-detail").html(item1.selectFlavor6);
              $("#amount-detail").attr("value" , item1.selectAmount6);
              $("#price-detail").attr("value" , item1.selectPrice6);
          }else{
              $("#flavor-detail").html(item1.selectFlavor12);
              $("#amount-detail").attr("value" , item1.selectAmount12);
              $("#price-detail").attr("value" , item1.selectPrice12);
          }
  
          for (var i=1; i<cartArray.length;i++){
              var clone = $("#first-new-item").clone();
  
              var item = cartArray[i];
        
              if(item.selectPack == "6-packs"){
                  clone.find("#img-detail").attr("id","img-detail"+i);
                  clone.find("#flavor-detail").attr("id","flavor-detail"+i);
                  clone.find("#size-detail").attr("id","size-detail"+i);
                  clone.find("#amount-detail").attr("id", "amount-detail"+i);
                  clone.find("#price-detail").attr("id", "price-detail"+i);
  
                  $("#container-cart-info").append(clone);
  
                  $("#img-detail"+i).attr("src" , item.selectProductImg);
                  $("#flavor-detail"+i).html(item.selectFlavor6);
                  $("#size-detail"+i).html("6-packs");
                  //console.log("this is " + " " + "size-detail, 6-packs")
                  $("#amount-detail"+i).attr("value" , item.selectAmount6);
                  $("#price-detail"+i).attr("value" , item.selectPrice6);
              }else{
                  clone.find("#img-detail").attr("id","img-detail"+i);
                  clone.find("#flavor-detail").attr("id","flavor-detail"+i);
                  clone.find("#size-detail").attr("id","size-detail"+i);
                  clone.find("#amount-detail").attr("id", "amount-detail"+i);
                  clone.find("#price-detail").attr("id", "price-detail"+i);
  
                  $("#container-cart-info").append(clone);
  
                  $("#img-detail"+i).attr("src" , item.selectProductImg);
                  $("#flavor-detail"+i).html(item.selectFlavor12);
                  $("#size-detail"+i).html(item.selectPack);
                  $("#amount-detail"+i).attr("value" , item.selectAmount12);
                  $("#price-detail"+i).attr("value" , item.selectPrice12);
              }
          }
      }
  
      checkoutTotalPrice();
  })
  
  //Calculate the Checkout Total Price
  function checkoutTotalPrice(){
      if($('.product-price').length == ""){
          $('#checkout-price').html("$" + "0.00");
          $('#checkout-total-price').html("$" + "0.00");
  
      }else{
          var totalPrice = parseInt($('#price-detail').val().replace('$',''));
          var totalNumberofPriceTag = $('.product-price').length;
          //console.log("This is totalPriceS" + " " + totalPrice);
  
          for (var i=1; i<totalNumberofPriceTag;i++){
              var itemPrice = parseInt($('#price-detail'+i).val().replace('$',''));
          
              totalPrice = totalPrice + itemPrice;   
              //console.log("This is totalPriceI" + " " + totalPrice);
          }
  
          $('#checkout-price').html("$" + totalPrice + ".00");
          $('#checkout-total-price').html("$" + totalPrice + ".00");
      }
  }












