define([
  'jquery',
  'lodash',
  'backbone',
  'text!templates/conclusion/page.html'
], function($, _, Backbone, Template){
    var Page = Backbone.View.extend({
    el: '.page',
    render: function () {

		$(this.el).html(Template).hide().fadeIn(500);
		$(".breadcrumbs").hide().html('<a href="#">Home</a> < <a href="#conclusion" class="active">Conclusion</a>').fadeIn(300);
		$('a[href="#conclusion"]').addClass("active");
		$(".hide").each(function(i){
				var that = $(this);
				setTimeout(function(){$(that).removeClass("hide")}, i*100);
			});
			
		$(".btn-prev").attr("href","#scenario5");
	    $(".btn-next").attr("href","#");	
	  
	},
	events: {
		
	}
  });
  return Page;
});
