$(function(){

	'use strict';

    /**
     * Table Of Content
     * 
     * 1. Scrolltop
     */

    // 1. Scrolltop
	$('a[href*="#"]:not([href="#"])').on('click',function() {
	    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
	        var target = $(this.hash);
	        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
	        if (target.length) {
	          	$('html, body').animate({
	            	scrollTop: target.offset().top
	          	}, 1000);
	          	return false;
	        }
	    }
    });
    
});