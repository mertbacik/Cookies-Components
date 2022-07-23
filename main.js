function setCookie(name, value, seconds){
    var date = new Date();
    date.setTime(date.getTime() + ((seconds) * 1000));
    document.cookie = name + '=' + escape(value) + '; expires = ' + date.toUTCString;
    console.log('Cookie' + name + 'created!');
    //ÇALIŞMADI :(
}

function getCookie(cookieName){
    var pattern = cookieName + '=(?<value>[0-9a-zA-Z\s]+);?';
    var regex = new RegExp(pattern);
    var result = document.cookie.match(regex);
    if (result){
        return result.groups.value();
    }
}

function showCookieBanner(id){
    if (!getCookie(id)){
        document.getElementById(id).classList.add('active');
    }
}

function hideCookieBanner(id) {
    document.getElementById(id).classList.remove('active');
    var date = new Date();
    date.setTime(date.getTime() + (5 * 1000));
    document.cookie = 'Bacik=true; expires =' + date.toUTCString;
}


showCookieBanner('banner-1');
showCookieBanner('banner-2');
showCookieBanner('banner-3');
showCookieBanner('banner-4');
showCookieBanner('banner-5');
showCookieBanner('banner-6');

//setCookie(' Bacik ', true, 5);