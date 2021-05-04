document.addEventListener("DOMContentLoaded", function(event) { 
    const lowAgent = navigator.userAgent.toLowerCase();
    if(lowAgent.indexOf("iphone") > -1 && (lowAgent.indexOf("duckduckgo") > -1 ) ){
        document.getElementById("warningiOS").classList.remove("d-none");
        document.getElementById("store_android").classList.add("d-none");
        document.getElementById("lead").classList.add("d-none");
    }
    else if(lowAgent.indexOf("android") > -1 && (lowAgent.indexOf("firefox") > -1 || lowAgent.indexOf("duckduckgo") > -1 || lowAgent.indexOf("opera") > -1 || lowAgent.indexOf("samsungbrowser") > -1) ){
        document.getElementById("warningAndroid").classList.remove("d-none");
        document.getElementById("store_apple").classList.add("d-none");
        document.getElementById("lead").classList.add("d-none");
    }
    else if(lowAgent.indexOf("android") > -1){
        // window.location = 'https://play.app.goo.gl/?link=https://play.google.com/store/apps/details?id=de.rki.coronawarnapp&ddl=1&pcampaignid=web_ddl_1';
        document.getElementById("store_apple").classList.add("d-none");
    }
    else if(lowAgent.indexOf("iphone") > -1){
        window.location.href = 'https://apps.apple.com/de/app/corona-warn-app/id1512595757';
        document.getElementById("store_android").classList.add("d-none");
    }
    else {
        
    }
});