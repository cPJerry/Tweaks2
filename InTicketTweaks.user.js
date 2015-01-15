// ==UserScript==
// @name       WHMCS In Ticket TWeaks
// @namespace  http://use.i.E.your.homepage/
// @version    0.1
// @description  enter something useful
// @match      https://staff.whmcs.com/members/admin/supporttickets.php?action=view*&id=*
// @copyright  2012+, You
// ==/UserScript==
function urlencode(str) {
  //       discuss at: http://phpjs.org/functions/urlencode/
  //      original by: Philip Peterson
  //      improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  //      improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  //      improved by: Brett Zamir (http://brett-zamir.me)
  //      improved by: Lars Fischer
  //         input by: AJ
  //         input by: travc
  //         input by: Brett Zamir (http://brett-zamir.me)
  //         input by: Ratheous
  //      bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  //      bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  //      bugfixed by: Joris
  // reimplemented by: Brett Zamir (http://brett-zamir.me)
  // reimplemented by: Brett Zamir (http://brett-zamir.me)
  //             note: This reflects PHP 5.3/6.0+ behavior
  //             note: Please be aware that this function expects to encode into UTF-8 encoded strings, as found on
  //             note: pages served as UTF-8
  //        example 1: urlencode('Kevin van Zonneveld!');
  //        returns 1: 'Kevin+van+Zonneveld%21'
  //        example 2: urlencode('http://kevin.vanzonneveld.net/');
  //        returns 2: 'http%3A%2F%2Fkevin.vanzonneveld.net%2F'
  //        example 3: urlencode('http://www.google.nl/search?q=php.js&ie=utf-8&oe=utf-8&aq=t&rls=com.ubuntu:en-US:unofficial&client=firefox-a');
  //        returns 3: 'http%3A%2F%2Fwww.google.nl%2Fsearch%3Fq%3Dphp.js%26ie%3Dutf-8%26oe%3Dutf-8%26aq%3Dt%26rls%3Dcom.ubuntu%3Aen-US%3Aunofficial%26client%3Dfirefox-a'

  str = (str + '')
    .toString();

  // Tilde should be allowed unescaped in future versions of PHP (as reflected below), but if you want to reflect current
  // PHP behavior, you would need to add ".replace(/~/g, '%7E');" to the following.
  return encodeURIComponent(str)
    .replace(/!/g, '%21')
    .replace(/'/g, '%27')

}


$('.reply').css('background-color','#D3ECD7');
$('.note').css('background-color','rgb(236, 209, 162)');
$('.staff').attr('style','background-color: rgb(218, 217, 236);');
$(".ticketlastreply").html($(".ticketlastreply").html() + "<br /><a style=\"color:white;\" href=\"javascript:function assignme() {$('#flagto').val(218);updateTicket('flagto');}assignme();\">Assign To Me</a>");
$(".ticketlastreply").html($(".ticketlastreply").html() + " >> <a style=\"color:white;\" href=\"javascript:function assignme2() {$('#ticketstatus').val('In Progress');$('#ticketstatus').trigger('change');}assignme2();\">In Progress</a>");
$('.message br').remove();
$('.message').css('white-space','pre');
$('.message').css('overflow-wrap','break-word');
$('textarea').focus(function() {
    $(this).css('background-color','#F2E3E3');
});
$('textarea').blur(function() {
    $(this).css('background-color','#ffffff');
});
$('input').focus(function() {
    if ($(this).attr('type') == "text") {
        $(this).attr('size','150');
        $(this).css('background-color','#F2E3E3');
    }
});
$('input').blur(function() {
    if ($(this).attr('type') == "text") {
        $(this).attr('size','30');
        $(this).css('background-color','#ffffff');
    }
});

var subject = "Unknown";
$('#contentarea').find('h2').each(function() {
	var data = $(this).html().replace(/(.*)<select(.*)/,"$1");
	data = data.split("\n");
	subject = data[0];
	return false;
});
$('.note').children('.rightcol').children('.postedon').each(function() {
    var escalate = "<a href='mailto:techs@whmcs.com?subject="+urlencode(subject)+"&body="+urlencode(window.location+"\n\n");
    var body = "UNKNOWN - REPLACE ME!";
    $(this).parent().children('.msgwrap').children('.message').each(function() {
		body = $(this).html();
	});
    escalate = escalate + urlencode(body) + "'>Escalate</a>";
	$(this).html($(this).html()+"&nbsp; "+escalate);
});
