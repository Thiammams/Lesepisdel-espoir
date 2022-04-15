document.addEventListener("DOMContentLoaded", function(event) {
    var menuList = document.getElementById("menu_list").children[0];
    console.log(menuList)

    var listAff = document.getElementById("listDrop");
    menuList.addEventListener("click", function afficher(){

        if (listAff.classList.value == "cache") {
            listAff.classList.replace("cache", "affich");
         }
         else{
            listAff.classList.replace("affich", "cache");
         }
        
    });
}); 

