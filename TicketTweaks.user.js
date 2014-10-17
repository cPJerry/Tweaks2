// ==UserScript==
// @name       WHMCS Ticket Tweaks
// @match      https://staff.whmcs.com/members/admin/supporttickets.php?filter=1
// @match	   https://staff.whmcs.com/members/admin/supporttickets.php?view=&deptid=*&subject=&email=
// @copyright  2014, Jerald Johnson
// ==/UserScript==
var myname = "jerald";
function getQueue(queue) {
    if (queue == null) return '';
    var queue2 = queue.replace(/(.*) \((.*)\)/,"$1");
    if (queue2 == queue) return queue;
    return queue2;
}
function getHandler(queue,me) {
    if (me == "sortabletbl2") return "Jerald";
    if (queue == null) return '';
    var queue2 = queue.replace(/(.*) \((.*)\)/,"$2");
    if (queue2 == queue) return "Unassigned";
    return queue2;
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
function magic(type2) {
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
//                if (getHandler(pri.find('tr:nth-child('+i+') td:nth-child(3)').html(),type2) == "Matt" || getHandler(pri.find('tr:nth-child('+i+') td:nth-child(3)').html(),type2) == "Chris Borsheim" || getHandler(pri.find('tr:nth-child('+i+') td:nth-child(3)').html(),type2) == "Jesse Asklund")  pri.find('tr:nth-child('+i+')').hide();
        pri.find('tr:nth-child('+i+') td:nth-child(2)').css('width','100px');
        pri.find('tr:nth-child('+i+') td:nth-child(2)').html(status);
        pri.find('tr:nth-child('+i+') td:nth-child(3)').html(getQueue(pri.find('tr:nth-child('+i+') td:nth-child(3)').html()));
        if (type2 != 'sortabletbl1' && (getQueue(pri.find('tr:nth-child('+i+') td:nth-child(3)').html()) == "Bugs" || getQueue(pri.find('tr:nth-child('+i+') td:nth-child(3)').html()) == "Level 2 Supporta")) pri.find('tr:nth-child('+i+')').hide();

    }
    
}
magic("sortabletbl1");
magic("sortabletbl2");
magic("sortabletbl3");

