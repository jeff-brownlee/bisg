define([
  'jquery',
  'lodash',
  'backbone',
  'text!templates/dashboard/2.html'
], function($, _, Backbone, dashboardPageTemplate){
    var DashboardPage = Backbone.View.extend({
    el: '.page',
    render: function () {

		$(this.el).html(dashboardPageTemplate).hide().fadeIn(100, function(){
			$("#slide2").removeClass("hide").addClass("slideIn");
			$("#slide2 .hide").each(function(i){
				var that = $(this);
				setTimeout(function(){$(that).removeClass("hide")}, i*100);
			});	
		});
		$(".breadcrumbs").hide().html();
		
		$(".btn-prev").removeClass("disabled").attr("href","#");
		$(".btn-next").attr("href","#3");
		$('a[href="#"]').addClass("active");
	},
	events: {
		
	}
  });
  return DashboardPage;
});
