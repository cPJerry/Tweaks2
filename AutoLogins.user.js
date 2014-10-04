// ==UserScript==
// @name       Auto Logins
// @version    1.4.5
// @updateURL   https://raw.githubusercontent.com/cPJerry/Tweaks2/master/AutoLogins.user.js
// @downloadURL https://raw.githubusercontent.com/cPJerry/Tweaks2/master/AutoLogins.user.js
// @match      https://staff.whmcs.com/members/admin/supporttickets.php?action=viewticket&id=*
// @match      https://staff.whmcs.com/members/admin/supporttickets.php?action=view&id=*
// ==/UserScript==

function str_replace(search, replace, subject, count) {
  var i = 0,
    j = 0,
    temp = '',
    repl = '',
    sl = 0,
    fl = 0,
    f = [].concat(search),
    r = [].concat(replace),
    s = subject,
    ra = Object.prototype.toString.call(r) === '[object Array]',
    sa = Object.prototype.toString.call(s) === '[object Array]';
  s = [].concat(s);
  if (count) {
    this.window[count] = 0;
  }

  for (i = 0, sl = s.length; i < sl; i++) {
    if (s[i] === '') {
      continue;
    }
    for (j = 0, fl = f.length; j < fl; j++) {
      temp = s[i] + '';
      repl = ra ? (r[j] !== undefined ? r[j] : '') : r[0];
      s[i] = (temp)
        .split(f[j])
        .join(repl);
      if (count && s[i] !== temp) {
        this.window[count] += (temp.length - s[i].length) / f[j].length;
      }
    }
  }
  return sa ? s : s[0];
}
var style = "display:inline;";
var insertAt = $('body').find('#customfield134').parent().parent().parent().parent().parent().find('div');

var cpanelPass = $('#customfield166').attr('value');
var cpanelUser = $('#customfield162').attr('value');
var cpanelHost = $('#customfield158').attr('value');

cpanelHost = str_replace("https://","",cpanelHost);
cpanelHost = str_replace("http://","",cpanelHost);
cpanelHost = str_replace(":2082","",cpanelHost);
cpanelHost = str_replace(":2083","",cpanelHost);
cpanelHost = cpanelHost.replace(/\/(.*)/g,"");

var logincPanel = "<form style='"+style+"' target='_blank' name='cpanelform' action='https://"+cpanelHost+":2083/login' method='post'><input type='hidden' name='user' value='"+cpanelUser+"'><input type='hidden' name='pass' value='"+cpanelPass+"'><input type='submit' value='Login to cPanel'></form>ABC";
$(logincPanel).appendTo(insertAt);
var https = 0;
var whmcsPass = $('#customfield142').attr('value');
var whmcsUser = $('#customfield138').attr('value');
var whmcsHost = $('#customfield134').attr('value');
var whmcsHost2 = whmcsHost;

whmcsHost = str_replace("https://","",whmcsHost);
whmcsHost = str_replace("/index.php","",whmcsHost);
whmcsHost = str_replace("/login.php","",whmcsHost);
whmcsHost = whmcsHost+"/dologin.php";
whmcsHost = str_replace("//dologin.php","/dologin.php",whmcsHost);


var proto = "http://";
if (whmcsHost != whmcsHost2) {
    proto = "https://";
}
whmcsHost = str_replace("http://","",whmcsHost);

if (cpanelHost == ".HTACCESS") {
    whmcsHost = proto+encodeURIComponent(cpanelUser)+":"+encodeURIComponent(cpanelPass)+"@"+whmcsHost;
} else {
    whmcsHost = proto+whmcsHost;
}

var loginWhmcs = "<form target='_blank' style='"+style+"' name='whmcsform' action='"+whmcsHost+"' method='post'><input type='hidden' name='username' value='"+whmcsUser+"'><input type='hidden' name='password' value='"+whmcsPass+"'><input type='submit' value='Login to WHMCS'></form>ABC";
$(loginWhmcs).appendTo(insertAt);
