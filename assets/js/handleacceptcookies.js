// Show cookie info
if (typeof showAcceptCookieDisclaimer !== 'undefined') {
    showAcceptCookieDisclaimer();
}

function checkForAcceptedCookieDisclaimer() {
	var cookie = getCookie('confr-cookie-disclaimer');

	if (cookie) {
	    return true;
	}
	
	return false;
}

function showAcceptCookieDisclaimer(forceShow=false){
    show = false;

	if (forceShow || !checkForAcceptedCookieDisclaimer()) {
		show = true;
	}

	var disclaimerDiv = document.getElementById("diclaimer_container");
	
    if (show) {
		disclaimerDiv.style.display = "block";
	} else {
		disclaimerDiv.style.display = "none";
	}
}

function handleAcceptCookieDisclaimer() {
    setCookie('confr-cookie-disclaimer', true, 365);
    showAcceptCookieDisclaimer();
}

function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function eraseCookie(name) {   
    document.cookie = name+'=; Max-Age=-99999999;';  
}
