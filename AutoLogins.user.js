// ==UserScript==
// @name       WHMCS Ticket Tweaks
// @require https://cdnjs.cloudflare.com/ajax/libs/jquery-cookie/1.4.1/jquery.cookie.js
// @require https://cdnjs.cloudflare.com/ajax/libs/json2/20140204/json2.min.js
// @match      https://staff.whmcs.com/members/admin/supporttickets.php?filter=1
// @match	   https://staff.whmcs.com/members/admin/supporttickets.php
// @match	   https://staff.whmcs.com/members/admin/supporttickets.php?view=&deptid=*&subject=&email=
// @copyright  2014, Jerald Johnson
// ==/UserScript==
//alert(JSON.stringify(myArray, null, 2));
if ($.cookie('hideTickets') == undefined) {
	$.cookie('hideTickets', JSON.stringify(new Array()));
}

function in_array(needle, haystack, argStrict) {
  //  discuss at: http://phpjs.org/functions/in_array/
  // original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  // improved by: vlado houba
  // improved by: Jonas Sciangula Street (Joni2Back)
  //    input by: Billy
  // bugfixed by: Brett Zamir (http://brett-zamir.me)
  //   example 1: in_array('van', ['Kevin', 'van', 'Zonneveld']);
  //   returns 1: true
  //   example 2: in_array('vlado', {0: 'Kevin', vlado: 'van', 1: 'Zonneveld'});
  //   returns 2: false
  //   example 3: in_array(1, ['1', '2', '3']);
  //   example 3: in_array(1, ['1', '2', '3'], false);
  //   returns 3: true
  //   returns 3: true
  //   example 4: in_array(1, ['1', '2', '3'], true);
  //   returns 4: false

  var key = '',
    strict = !! argStrict;

  //we prevent the double check (strict && arr[key] === ndl) || (!strict && arr[key] == ndl)
  //in just one for, in order to improve the performance 
  //deciding wich type of comparation will do before walk array
  if (strict) {
    for (key in haystack) {
      if (haystack[key] === needle) {
        return true;
      }
    }
  } else {
    for (key in haystack) {
      if (haystack[key] == needle) {
        return true;
      }
    }
  }

  return false;
}

var myname = "jerald";
function getQueue(queue) {
    if (queue == null) return '';
    var queue2 = queue.replace(/(.*) \((.*)\)/,"$1");
    if (queue2 == queue) return queue;
    return queue2;
}

function hideTicket(item) {
    item.parent().hide();
}

function getHandler(queue,me) {
    if (me == "sortabletbl2") return "Jerald";
    if (queue == null) return '';
    var queue2 = queue.replace(/(.*) \((.*)\)/,"$2");
    if (queue2 == queue) return "Unassigned";
    return queue2;
}
function getTicketID(data) {
    return data.replace(/#(.*) - (.*)/,"$1");
}
                        
function isOnline(user) {
    user = user.replace(/(.*) (.*)/,"$1");
    if (user == "Samuel") user = "scraven";
    user = user.toLowerCase();
    var userList = '';
    $('#sidebar').children('div').each(function() {
        var tmp = $(this).html();
        if (tmp.toLowerCase().indexOf("jerald") >= 0) {
            userList = tmp.toLowerCase();
        }
    });
    if (userList.indexOf(user.toLowerCase()) >= 0) { return 1;}
    return 0;
}
var disableJesse = 1;
var disableChris = 1;
var disableMatt = 1;
var disableBugs = 1;
var disableL2 = 1;
var disableLicensing = 0;
$.cookie.json = true;
function isMyTKT(whose,queue) {
	
    if (queue != null && whose != "sortabletbl1") {
        if (queue == "Bugs" && disableBugs == 1) return false;
        if (queue == "Level 2 Support" && disableL2 == 1) return false;
        if (queue == "Licensing" && disableLicensing == 1) return false;

    }
    if (queue == null) {
        if (whose == "Matt" && disableMatt) return false;
        if (whose == "Chris Borsheim" && disableChris) return false;
        if (whose == "Jesse Asklund" && disableJesse) return false;
    }
    return true;
	
}

function magic(type2) {
    var TktCount = 0;
    var pri = $('[id="'+type2+'"]');
    window.data = pri;
    pri.addClass( "ticketsLink" );
    for (var i=0;i<$('[id="'+type2+'"] tr').length+1;i++) {
        
        if (pri.find('tr:nth-child('+i+') td:nth-child(2)').html() == null) {
            pri.find('tr:nth-child('+i+') th:nth-child(2)').html("Handler");
            pri.find('tr:nth-child('+i+') th:nth-child(2)').css
        }
        var status = getHandler(pri.find('tr:nth-child('+i+') td:nth-child(3)').html(),type2)+"<br />(Offline)";
        if (isOnline(getHandler(pri.find('tr:nth-child('+i+') td:nth-child(3)').html(),type2))) {
            status = getHandler(pri.find('tr:nth-child('+i+') td:nth-child(3)').html(),type2)+"<br />(Online)";
        } else {
            pri.find('tr:nth-child('+i+')').css( "color", "red" );//("background-color","gray");
        }
		if (!isMyTKT(getHandler(pri.find('tr:nth-child('+i+') td:nth-child(3)').html(),type2),null)
        //    getHandler(pri.find('tr:nth-child('+i+') td:nth-child(3)').html(),type2) == "Jesse Asklund"
        )
        	pri.find('tr:nth-child('+i+')').hide();
        pri.find('tr:nth-child('+i+') td:nth-child(2)').css('width','100px');
        pri.find('tr:nth-child('+i+') td:nth-child(2)').html(status);
        pri.find('tr:nth-child('+i+') td:nth-child(3)').html(getQueue(pri.find('tr:nth-child('+i+') td:nth-child(3)').html()));
        if (!isMyTKT(type2,getQueue(pri.find('tr:nth-child('+i+') td:nth-child(3)').html()))) {
            pri.find('tr:nth-child('+i+')').hide();
        } else {
            pri.find('tr:nth-child('+i+') td:nth-child(4)').find("a").each(function(){
                var id = getTicketID($(this).html());
                var cookies2 = $.cookie("hideTickets");
                if (in_array(id,cookies2)) {
                    $(this).parent().parent().hide();
                    TktCount--;
                } else {
                    $(this).parent().html($(this).parent().html()+" <span style='border: 3px; color: red; text-decoration: underline;' href='#' action='javscript:void;' onclick='if(confirm(\"Hide this ticket? Really?\")) {var cookies = $.cookie(\"hideTickets\"); cookies.push(\""+id+"\");$.cookie(\"hideTickets\",cookies);$(this).parent().parent().hide();}'>Hide This Ticket</span>");
                }
        });
            if (getQueue(pri.find('tr:nth-child('+i+') td:nth-child(3)').html()) != "" && getHandler(pri.find('tr:nth-child('+i+') td:nth-child(3)').html()) != "") {
	            TktCount++;

            }
        }
        
        
    }
    if (type2 == "sortabletbl3") {
		$('[action="/members/admin/supporttickets.php?filter=1"]').children().find("td").each(function(){
  	      if ($(this).attr('align') == "left") {
            $(this).html(TktCount+" Records Found");
          }
    	});
    }
    
    
}
magic("sortabletbl1");
magic("sortabletbl2");
magic("sortabletbl3");


