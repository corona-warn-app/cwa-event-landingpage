document.addEventListener("DOMContentLoaded", function(event) { 
    if(navigator.userAgent.toLowerCase().indexOf("android") > -1){
        window.location = 'https://play.app.goo.gl/?link=https://play.google.com/store/apps/details?id=de.rki.coronawarnapp&ddl=1&pcampaignid=web_ddl_1';
        document.getElementById("store_apple").classList.add("d-none");
    }
    else if(navigator.userAgent.toLowerCase().indexOf("iphone") > -1){
        window.location.href = 'https://apps.apple.com/de/app/corona-warn-app/id1512595757';
        document.getElementById("store_android").classList.add("d-none");
    }
    else {
        
    }
});