define([
  'jquery',
  'lodash',
  'backbone',
  'text!templates/proposal/page-1.html'
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
	  	$(".breadcrumbs").hide().html('<a href="#">Home</a> < <a href="#proposal-1" class="active">Proposal</a>').fadeIn(300);
		$(".btn-prev").attr("href","#examples-1");
		$(".btn-next").attr("href","#proposal-2");
		$('a[href="#proposal-1"]').addClass("active");

	},
	events: {
		
	}
  });
  return Page;
});
