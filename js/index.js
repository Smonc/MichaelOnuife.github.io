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

window.onscroll = function (){
    scrollFunction();
}

function scrollFunction () {
    var navbar = document.getElementsByClassName("navbar")[0];
    var togglebtn = document.getElementsByClassName(".toggle-btn span")[0];
    if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
    navbar.classList.add("scrolled");
    togglebtn.classList.add("scrolle");
    }
    else {
        navbar.classList.remove("scrolled");
        togglebtn.classList.remove("scrolle");
    }
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