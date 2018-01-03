function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = jQuery.trim(cookies[i]);
            console.log('cookie' + i + ': ' + cookie);
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}


function get_profile(access_token) {

    var xhr = new XMLHttpRequest();
    xhr.open("POST", '/oauth2/postback');
    //xhr.setRequestHeader('X-CSRFToken', csrftoken); /*too lazy...used csrf_exempt*/

    var formData = new FormData();
    formData.append("access_token", access_token);
    xhr.send(formData);

    xhr.onreadystatechange = function() {
        window.location.href = '/profile';
    }
}


function openInNewTab(url) {
  var win = window.open(url, '_blank');
  win.focus();
}

function link_to_widget_js() {
    var js_location = '/static/js/oidc_css.js';

    var url = del_auth_url.split('/')[1];

    var pathArray = window.location.pathname.split('/');
    if (pathArray[1]) {
        if (pathArray[1] === url) {
            js_location = '/static/js/oidc_idp.js'
        }
    }
    openInNewTab(js_location);
}