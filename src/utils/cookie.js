export function Cookie(set, a, b, expireDays) {
  let isSuportLocalStorge = localStorage;
  if (!isSuportLocalStorge) {
    var d = new Date();
    if (set === "set") {
      if (expireDays === undefined) {
        expireDays = 1;
      }
      /*        if (window.location.protocol == 'https:') {
                        secure = ";secure";
                    }*/
      d.setTime(d.getTime() + expireDays * 24 * 60 * 60 * 1000);
    } else if (set == "remove") {
      d.setTime(d.getTime() - 1);
      b = "";
    } else {
      var arr = document.cookie.match(
        new RegExp("(^| )" + set + "=([^;]*)(;|$)"),
      );
      if (arr != null) return unescape(arr[2]);
      return null;
    }

    // var path = location.pathname.split('/')[1]; // 目前根目錄下層的資料夾名稱
    if (expireDays == 0) {
      //使其瀏覽器關閉及回收COOKIE
      //  document.cookie = a + '=' + escape(b) + '; path=/' + path + '/';
      document.cookie = a + "=" + escape(b) + "; path=/";
      //  document.cookie = a + '=' + escape(b) + ';';
    } else {
      //  document.cookie = a + '=' + escape(b) + '; ' + "expires=" + d.toGMTString() + '; path=/' + path + '/';
      document.cookie =
        a + "=" + escape(b) + "; " + "expires=" + d.toGMTString() + "; path=/";
      //  document.cookie = a + '=' + escape(b) + '; ' + "expires=" + d.toGMTString() + ';';
    }

    // =========================================================================
    // domain 為 localhost 時在 IE 會失效，故暫時移除
    // =========================================================================
    // if (set.match(/set|remove/)) {
    //     var domain = window.location.host;
    //     if (domain.indexOf(':') > 0) {
    //         domain = domain.substring(0, domain.indexOf(':'));
    //     }
    //     document.cookie = a + '=' + escape(b) + '; ' + "expires=" + d.toGMTString() + '; domain=' + domain + '; path=/' + secure;
    // }
    // document.cookie = a + '=' + escape(b) + '; ' + "expires=" + d.toGMTString() + '; domain=' + domain + '; path=/' + secure;
  } else {
    if (set == "set") {
      localStorage[a] = b;
      localStorage.setItem(a, b);
    } else if (set == "remove") {
      localStorage.removeItem(a);
    } else {
      return localStorage.getItem(set);
    }
  }
}
/**
 * 清空cookie
 */
export function removeAllCookie() {
  var keys = document.cookie.match(/[^ =;]+(?=\\=)/g);
  if (keys) {
    for (var i = keys.length; i > -1; i--) {
      Cookie("remove", keys[i]);
    }
  }
}
