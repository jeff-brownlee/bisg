define([
  'jquery',
  'lodash',
  'backbone',
  'text!templates/intro/page.html'
], function($, _, Backbone, introPageTemplate){
    var IntroPage = Backbone.View.extend({
    el: '.page',
    render: function () {

		$(this.el).html(introPageTemplate).hide().fadeIn(500, function(){
			$("#slide1 .hide").each(function(i){
				var that = $(this);
				setTimeout(function(){$(that).removeClass("hide")}, i*100);
			});	
		});
		$(".breadcrumbs").hide().html();
		
		$(".btn-prev").attr("href","#conclusion-1");
		$(".btn-next").attr("href","#overview");
		
		$('a[href="#"]').addClass("active");

	},
	events: {
		
	}
  });
  return IntroPage;
});
