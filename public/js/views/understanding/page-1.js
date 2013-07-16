define([
  'jquery',
  'lodash',
  'backbone',
  'text!templates/understanding/page-1.html'
], function($, _, Backbone, Template){
    var Page = Backbone.View.extend({
    el: '.page',
    render: function () {

		$(this.el).html(Template).hide().fadeIn(500, function(){
			$("#slide1 .hide").each(function(i){
				var that = $(this);
				setTimeout(function(){$(that).removeClass("hide")}, i*100);
			});	
		});		

	  	$(".breadcrumbs").hide().html('<a href="#">Home</a> < <a href="#understanding-1" class="active">Understanding</a>').fadeIn(300);
		$(".btn-prev").attr("href","#overview");
		$(".btn-next").attr("href","#understanding-2");
		$('a[href="#understanding-1"]').addClass("active");

	},
	events: {
		
	}
  });
  return Page;
});
