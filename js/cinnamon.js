//////////////////////////////////////
//Store the Click Cinnamon Img Data //
//////////////////////////////////////
$(document).ready(function(){
    storeClickProductData();
});



function storeClickProductData(){
    
    $('.roll img').click(function () {
        localStorage.removeItem("cinnamonArray");

        //get the selectCinnamonImg
        var selectCinnamonImg = $(this).attr('src');
        //console.log("This is selectCinnamonImg" + " " +selectCinnamonImg);

        //get the selectCinnamonTitle
        var selectCinnamonTitle = $(this).next('h3').text();
        //console.log("This is selectCinnamonTitle" + " " +selectCinnamonTitle);

        var chosenCinnamonItem = {selectCinnamonImg, selectCinnamonTitle};
        var cinnamonItems = JSON.parse(localStorage.getItem("cinnamonArray")) || [];
        cinnamonItems.push(chosenCinnamonItem);
        localStorage.setItem("cinnamonArray", JSON.stringify(cinnamonItems));

        console.log("This is cinnamonItems" + " " + localStorage.getItem("cinnamonArray"));   

    });
};





