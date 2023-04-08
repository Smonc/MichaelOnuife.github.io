/*function togglemenu() {

    var sidebar = document.getElementsByClassName('sidebar')[0];
    sidebar.style.marginLeft = "80%";
   // document.getElementById("sidebar").style.width="83%";
    //document.getElementsByClassName("toggle-btn").style.width="_83%";
    
}
    function closemenu() {
    document.getElementsByTagName("li").style.color="blue";
    document.getElementsByClassName("sidebar")[0].style.marginLeft="0%";
    console.log(5);
}*/


function togglemenu() {

    var sidebar = document.getElementsByClassName('sidebar')[0];
    sidebar.classList.toggle('active');
}

/*function togglemenu() {
    var sidebar = document.getElementsByClassName('sidebar')[0];
    
    
    if (sidebar.style.left == "-83%")
    {
        sidebar.style.left = "80%";
        console.log('yes');
    }
    else if (sidebar.style.left == "80%")
    {
        sidebar.style.left = "-80%";
    }
    console.log(sidebar.style.left);
    console.log('yes');
}*/