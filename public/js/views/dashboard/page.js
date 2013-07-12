define([
  'jquery',
  'lodash',
  'backbone',
  'text!templates/dashboard/page.html'
], function($, _, Backbone, dashboardPageTemplate){
    var DashboardPage = Backbone.View.extend({
    el: '.page',
    render: function () {

		$(this.el).html(dashboardPageTemplate).hide().fadeIn(500, function(){
			$("#slide1 .hide").each(function(i){
				var that = $(this);
				setTimeout(function(){$(that).removeClass("hide")}, i*100);
			});	
		});
		$(".breadcrumbs").hide().html();
		
		$(".btn-prev").attr("href","#conclusion");
		$(".btn-next").attr("href","#2");
		
		$('a[href="#"]').addClass("active");

	},
	events: {
		
	}
  });
  return DashboardPage;
});
