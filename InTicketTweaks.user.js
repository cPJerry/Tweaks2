// ==UserScript==
// @name       WHMCS In Ticket TWeaks
// @namespace  http://use.i.E.your.homepage/
// @version    0.1
// @description  enter something useful
// @match      https://staff.whmcs.com/members/admin/supporttickets.php?action=view*&id=*
// @copyright  2012+, You
// ==/UserScript==



$('.reply').css('background-color','#D3ECD7');
$('.note').css('background-color','rgb(236, 209, 162)');
$('.staff').attr('style','background-color: rgb(218, 217, 236);');
$(".ticketlastreply").html($(".ticketlastreply").html() + "<br /><a style=\"color:white;\" href=\"javascript:function assignme() {$('#flagto').val(218);updateTicket('flagto');}assignme();\">Assign To Me</a>");
$(".ticketlastreply").html($(".ticketlastreply").html() + " >> <a style=\"color:white;\" href=\"javascript:function assignme2() {$('#ticketstatus').val('In Progress');$('#ticketstatus').trigger('change');}assignme2();\">In Progress</a>");
$('.message br').remove();
$('.message').css('white-space','pre');
$('.message').css('overflow-wrap','break-word');
