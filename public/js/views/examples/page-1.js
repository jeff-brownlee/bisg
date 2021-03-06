define([
  'jquery',
  'lodash',
  'backbone',
  'text!templates/examples/page-1.html'
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
		
		$(".breadcrumbs").hide().html('<a href="#">Home</a> < <a href="#examples-1" class="active">Examples</a>').fadeIn(300);
		$(".btn-prev").attr("href","#approach-6");
		$(".btn-next").attr("href","#proposal-1");
		$('a[href="#examples-1"]').addClass("active");
	},
	events: {
		
	}
  });
  return Page;
});
