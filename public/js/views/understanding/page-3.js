define([
  'jquery',
  'lodash',
  'backbone',
  'text!templates/understanding/page-3.html'
], function($, _, Backbone, Template){
    var Page = Backbone.View.extend({
    el: '.page',
    render: function () {

		$(this.el).html(Template).hide().fadeIn(100, function(){
			$("#slide3").removeClass("hide").addClass("slideIn");
			$("#slide3 .hide").each(function(i){
				var that = $(this);
				setTimeout(function(){$(that).removeClass("hide").addClass("slideDown");}, i*100);
			});
		});
		
		$(".breadcrumbs").hide().html('<a href="#">Home</a> < <a href="#understanding-1" class="active">Understanding</a>').fadeIn(300);
		$(".btn-prev").attr("href","#understanding-2");
		$(".btn-next").attr("href","#understanding-4");
		$('a[href="#understanding-1"]').addClass("active");
	},
	events: {
		
	}
  });
  return Page;
});
