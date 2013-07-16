define([
  'jquery',
  'lodash',
  'backbone',
  'text!templates/approach/page-4.html'
], function($, _, Backbone, Template){
    var Page = Backbone.View.extend({
    el: '.page',
    render: function () {

		$(this.el).html(Template).hide().fadeIn(100, function(){
			$("#slide4").removeClass("hide").addClass("slideIn");
			
			$("#slide4 .hide").each(function(i){
				var that = $(this);
				setTimeout(function(){$(that).removeClass("hide").addClass("slideDown");}, i*100);
			});
		});
		
		$(".breadcrumbs").hide().html('<a href="#">Home</a> < <a href="#approach-1" class="active">Approach</a>').fadeIn(300);
		$(".btn-prev").attr("href","#approach-3");
		$(".btn-next").attr("href","#approach-5");
		$('a[href="#approach-1"]').addClass("active");
	},
	events: {
		
	}
  });
  return Page;
});
