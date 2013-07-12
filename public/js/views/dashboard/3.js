define([
  'jquery',
  'lodash',
  'backbone',
  'text!templates/dashboard/3.html'
], function($, _, Backbone, dashboardPageTemplate){
    var DashboardPage = Backbone.View.extend({
    el: '.page',
    render: function () {

		$(this.el).html(dashboardPageTemplate).hide().fadeIn(100, function(){
			$("#slide3").removeClass("hide").addClass("slideIn");
			
			$("#slide3 .hide").each(function(i){
				var that = $(this);
				setTimeout(function(){$(that).removeClass("hide").addClass("slideDown");}, i*100);
			});
		});
		
		$(".breadcrumbs").hide().html();
		
		$(".btn-prev").attr("href","#2");
		$(".btn-next").attr("href","#scenario1");
		$('a[href="#"]').addClass("active");
	},
	events: {
		
	}
  });
  return DashboardPage;
});
