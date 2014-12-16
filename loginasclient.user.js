// ==UserScript==
// @description  This enable 'Login As Client' to work for our WHMCS install
// @name		 Login As Client
// @match      https://staff.whmcs.com/members/*
// @exclude    https://staff.whmcs.com/members/admin/*
// @copyright  2014+, Jerald Johnson
// ==/UserScript==

function str_replace(search, replace, subject, count) {
  //  discuss at: http://phpjs.org/functions/str_replace/
  // original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  // improved by: Gabriel Paderni
  // improved by: Philip Peterson
  // improved by: Simon Willison (http://simonwillison.net)
  // improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  // improved by: Onno Marsman
  // improved by: Brett Zamir (http://brett-zamir.me)
  //  revised by: Jonas Raoni Soares Silva (http://www.jsfromhell.com)
  // bugfixed by: Anton Ongson
  // bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  // bugfixed by: Oleg Eremeev
  //    input by: Onno Marsman
  //    input by: Brett Zamir (http://brett-zamir.me)
  //    input by: Oleg Eremeev
  //        note: The count parameter must be passed as a string in order
  //        note: to find a global variable in which the result will be given
  //   example 1: str_replace(' ', '.', 'Kevin van Zonneveld');
  //   returns 1: 'Kevin.van.Zonneveld'
  //   example 2: str_replace(['{name}', 'l'], ['hello', 'm'], '{name}, lars');
  //   returns 2: 'hemmo, mars'

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
$("a").each(
    function(){
        var link = $(this).attr('href');
        var link2 = str_replace("http","",link);
        if (link2 == link) {
            link = str_replace("members/","",link);
            $(this).attr('href',"https://staff.whmcs.com/members/"+link);
        }
    }
);

$("form").each(
    function(){
        var link = $(this).attr('action');
        var link2 = str_replace("http","",link);
        if (link2 == link) {
            link = str_replace("members/","",link);
            $(this).attr('action',"https://staff.whmcs.com/members/"+link);
        }
    }
);

$("form").each(
    function(){
        var link = $(this).attr('action');
        var link2 = str_replace("http","",link);
        var link3 = str_replace("https://staff.whmcs.com/members/","",link);
        if (link3 == link) {
            link = str_replace("https://www.whmcs.com","",link);
            $(this).attr('action',"https://staff.whmcs.com"+link);
        }
    }
);
