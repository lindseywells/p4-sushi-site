$(document).foundation();


(function ($) {
    $.fn.vAlign = function() {
        return this.each(function(i){
        var ah = $(this).height();
        var ph = $(this).parent().height();
        var mh = Math.ceil((ph-ah) / 2);
        $(this).css('padding-top', mh);
        });
};

})(jQuery);
    $(document).ready(function(){
    	var win_h = $(window).height();
    	function setHeight(){
    		$('.home > .hero').css({height:win_h});
    		$(".vcenter").vAlign();
    	}

	setHeight();
	
	$(window).bind('resize',function() {
		setHeight();
	 });

	 $('#top-nav').onePageNav({

        currentClass: 'current',
        changeHash: false,
        scrollSpeed: 750,
        scrollOffset: 50,
        scrollThreshold: 0.5,
        filter: ':not(.external)',
        begin: function() {
        },
        end: function() {
        },
        scrollChange: function() {
        }
    });

     $('#nav-button').click(function(){
        $top_nav = $('#top-nav');
        if($top_nav.is(':hidden')){
            $top_nav.slideDown("slow");
        }else{
            $top_nav.slideUp();
        }
     })

});