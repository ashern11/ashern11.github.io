// *************************************************************************//
// ! This is main JS file that contains custom scripts used in this template*/
// *************************************************************************//
/**
	Navigation File

	01. Fixed Header
	02. WebTicker Cryptocurrency

 */

$( document ).ready(function() {
	"use strict";

	// **********************************************************************//
	// 01. Fixed Header
	// **********************************************************************//
	$(window).on( 'scroll', function(){
		var sc = $(window).scrollTop()
		var header = $('header');
		if (sc > 60) {
			header.addClass("fixed")
		} else {
			header.removeClass("fixed");
		}
	});




	// **********************************************************************//
	// 02. WebTicker CryptoCurrency
	// **********************************************************************//
	$('#webTicker').webTicker({
		height: 100,
		startEmpty: false,
	});
	


});
