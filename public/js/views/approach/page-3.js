define([
  'jquery',
  'lodash',
  'backbone',
  'text!templates/approach/page-3.html'
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
		
		$(".breadcrumbs").hide().html('<a href="#">Home</a> < <a href="#approach-1" class="active">Approach</a>').fadeIn(300);
		$(".btn-prev").attr("href","#approach-2");
		$(".btn-next").attr("href","#approach-4");
		$('a[href="#approach-1"]').addClass("active");
	},
	events: {
		
	}
  });
  return Page;
});
