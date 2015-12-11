//<!--
browserName = navigator.appName;
browserVer = parseInt(navigator.appVersion);
condition = !(( (browserName.indexOf("Explorer") >=0 ) && (browserVer < 4) ) ||  ((browserName.indexOf("Netscape") >=0 ) && (browserVer < 2) ) ) ;
if (condition == true  )
    CanAnimate = true;
else
    CanAnimate = false;

function translator(pattern)
{

/////////////////////////////////////////////////////////////
// Script to use language convertor
// By Saradhi
/////////////////////////////////////////////////////////////

	/// Configuration parameters //////////////
	var open_in_same_window = 1;
	//////////// End Of Configuration /////////////

	var my_location = unescape(document.location.toString());
	var new_location ='';
	var new_pattern = '';
	if (my_location.indexOf('translate_c?') != -1) {
		/// From google...
		var indexof_u = my_location.indexOf('u=');
		if (indexof_u == -1) {
			new_location = document.location;
		}
		else {
			var subs = my_location.substring(indexof_u, my_location.length);
			var ss = subs.split('&');
			new_location = ss[0].substring(2, ss[0].length);
		}
	}
	else {
		new_location = document.location;
	}

	indexof_p = pattern.indexOf('|');

	var isen = '';
	if (indexof_p == -1) {
		indexof_p1 = pattern.indexOf('><');
		if (indexof_p1 == -1) {
			new_pattern = pattern;
			if (pattern == 'en') {
				isen = 1;
			}
		}
		else {
			var psplit =pattern.split('><');
			new_pattern = psplit[0]+'|'+psplit[1];
			if (psplit[1] == 'en') {
				isen = 1;
			}
		}
	}
	else {
		var psplit = pattern.split('|');
		new_pattern = psplit[0]+'|'+psplit[1];
		if (psplit[1] == 'en') {
			isen = 1;
		}
	}

	var thisurl = '';
	if (isen == 1) {
		thisurl = new_location;
	}
	else {
		thisurl = 'http://translate.google.com/translate_c?langpair=' + new_pattern + "&u=" + new_location;
	}

	if (open_in_same_window == 1) {
		window.location.href = thisurl;
	}
	else {
		if (CanAnimate ){
			msgWindow=window.open('' ,'subwindow','toolbar=yes,location=yes,directories=yes,status=yes,scrollbars=yes,menubar=yes,resizable=yes,left=0,top=0');
			msgWindow.focus();
			msgWindow.location.href = thisurl;
		}
		else {
			msgWindow=window.open(thisurl,'subwindow','toolbar=yes,location=yes,directories=yes,status=yes,scrollbars=yes,menubar=yes,resizable=yes,left=0,top=0');
		}
	}
}

function openchild_nl(thisurl)
{
	var windowTop;
	var windowLeft;
	windowTop=(screen.height*(20/100))*0.7;
	windowLeft=screen.width*(19/100);

	var email_val = document.theForm.email.value;
	var from_site_val = document.theForm.from_site.value;
	var is_window_val = document.theForm.is_window.value;
	var org_referer = document.location;
	var thisurl_string = thisurl + "?email=" + email_val + "&from_site=" + from_site_val + "&is_window=" + is_window_val + "&org_referer=" + org_referer;

	if ( CanAnimate ) {
			msgWindow=window.open( '' ,'subwindow','toolbar=no,location=no,directories=no,status=yes,scrollbars=yes,menubar=no,resizable=yes,width=570,height=260,top='+windowTop+',left='+windowLeft);
			msgWindow.focus();
			msgWindow.location.href = thisurl_string;
	}
	else {
			msgWindow=window.open( thisurl_string,'subwindow','toolbar=no,location=no,directories=no,status=yes,scrollbars=yes,menubar=no,resizable=yes,width=570,height=260,top='+windowTop+',left='+windowLeft);
	}
}



function validate_nl(theForm)
{
	if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(theForm.email.value)))
	{
		alert("Invalid Email ID. Kindly enter the correct ID.");
		theForm.email.focus();
		return (false);
	}
}


function getblank_nl(this1)  {
	this1.value = "";
    return true;	
}

function checkSearchTop()
{

	if (document.SearchTop.search.value.length < 3){
	    alert("Enter at least three characters for search."); 
	    document.SearchTop.search.focus();
	    return false;
	}
	return true;
}

function checkSearchBottom()
{

	if (document.SearchBottom.search.value.length < 3){
	    alert("Enter at least three characters for search."); 
	    document.SearchBottom.search.focus();
	    return false;
	}
	return true;
}

function openchild_email_this_page(thisurl){
	if ( CanAnimate ){
        msgWindow=window.open( '' ,'subwindow','toolbar=no,location=no,directories=no,status=yes,scrollbars=yes,menubar=no,resizable=yes,width=635,height=260');
        msgWindow.focus();
        msgWindow.location.href = thisurl;
	}
	else {
        msgWindow=window.open( thisurl,'subwindow','toolbar=no,location=no,directories=no,status=yes,scrollbars=yes,menubar=no,resizable=yes,width=635,height=260');
	}
}


function check_form_email_this_page(form1)
{
	if (form1.S_name.value.length == 0){
		alert("Kindly enter your name."); 
		form1.S_name.focus();
		return false;
	}
    S_email_val = checkform_email(form1.S_email,"Kindly enter your Email address.");
	if(!S_email_val) {
		return false;
	}

	R_email1_val = checkform_email(form1.R_email1,"Kindly enter the Email ID of your friend / associate.");
	if(!R_email1_val) {
		return false;
	}

	if(form1.R_email2.value.length != 0)
	{
		R_email2_val = checkform_email(form1.R_email2,"Kindly enter the Email ID of your friend / associate.");
		if(!R_email2_val) {
			return false;
		}
	}

    if(form1.R_email3.value.length != 0)  
    {
        R_email3_val = checkform_email(form1.R_email3,"Kindly enter the Email ID of your friend / associate.");
        if(!R_email3_val) {
            return false;
        }
    }

    if(form1.R_email4.value.length != 0)  
    {
        R_email4_val = checkform_email(form1.R_email4,"Kindly enter the Email ID of your friend / associate.");
        if(!R_email4_val) {
            return false;
        }
    }

	//if (form1.message.value.length == 0){
	//	alert("Please write a message to your friend / associate."); 
	//	form1.message.focus();
	//	return false;
	//}

	else {
		return true;
	}	
}

function checkform_email(EMAIL,CMESSAGE)
{
    if (EMAIL.value.length == 0){
        alert(CMESSAGE); 
	    EMAIL.focus();
    	return false;
	}

	if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(EMAIL.value)))
	{
		alert("Invalid Email ID. Kindly enter the correct ID.");
		EMAIL.focus();
		return (false);
	}

	else
	{ 
        return true;
	}	
}

//function addbookmark()
//{
//bookmarkurl="http://wwwJavascriptsource.com"
//bookmarktitle="Welcome To The Java Script Source"
//if (document.all)
//window.external.AddFavorite(bookmarkurl,bookmarktitle)
//}

function openchild_commercial(thisurl){
	if ( CanAnimate ){ 
        msgWindow=window.open( '' ,'subwindow');
        msgWindow.focus();
        msgWindow.location.href = thisurl;
	}
	else {
        msgWindow=window.open( thisurl,'subwindow');
	}       
}

function openchild_weather(cityid){
	var thisurl = "/includes/weather-average.cgi?i=" + cityid + "&t=c";
	if (CanAnimate ){ 
        msgWindow=window.open('','subwindow','toolbar=no,location=no,directories=no,status=yes,scrollbars=yes,menubar=no,resizable=yes,width=400,height=450');
        msgWindow.focus();
        msgWindow.location.href = thisurl;
	}
	else {
        msgWindow=window.open(thisurl,'subwindow','toolbar=no,location=no,directories=no,status=yes,scrollbars=no,menubar=no,resizable=yes,width=400,height=450');
	}       
}

function code_for_bookmark()	{
	if ((navigator.appName == "Microsoft Internet Explorer") && (parseInt(navigator.appVersion) >= 4)) {
		var url=document.location;
		var title = document.title;
		document.write('<A HREF="javascript:window.external.AddFavorite(url,title);" onMouseOver="window.status=\'Bookmark this page!\';return true;" onMouseOut="window.status=\'\';return true;"><IMG SRC=/includes/gifs/bookmark-this-page.gif ALT="Bookmark this page" WIDTH=15 HEIGHT=15 BORDER=0 HSPACE=3 VSPACE=0><FONT class="navsmall"><B>Bookmark this page</B></FONT></a>');
	}
	else {
		var msg = '<IMG SRC=/includes/gifs/bookmark-this-page.gif ALT="Bookmark this page" WIDTH=15 HEIGHT=15 BORDER=0 HSPACE=3 VSPACE=0><FONT class="navsmall"><B>Bookmark ';
		if (navigator.appName == "Netscape") {
			msg += "  (CTRL-D)</B></FONT>";
			document.write(msg);
		}
	}
}
// -->
