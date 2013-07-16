define([
  'jquery',
  'lodash',
  'backbone',
  'text!templates/approach/page-1.html'
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

	  	$(".breadcrumbs").hide().html('<a href="#">Home</a> < <a href="#approach-1" class="active">Approach</a>').fadeIn(300);
		$(".btn-prev").attr("href","#understanding-1");
		$(".btn-next").attr("href","#approach-2");
		$('a[href="#approach-1"]').addClass("active");

	},
	events: {
		
	}
  });
  return Page;
});
