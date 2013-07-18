define([
  'jquery',
  'lodash',
  'backbone',
  'text!templates/proposal/page-2.html'
], function($, _, Backbone, Template){
    var Page = Backbone.View.extend({
    el: '.page',
    render: function () {

		$(this.el).html(Template).hide().fadeIn(100, function(){
			$("#slide2").removeClass("hide").addClass("slideIn");
			$("#slide2 .hide").each(function(i){
				var that = $(this);
				setTimeout(function(){$(that).removeClass("hide")}, i*100);
			});	
		});

	  	$(".breadcrumbs").hide().html('<a href="#">Home</a> < <a href="#proposal-1" class="active">Proposal</a>').fadeIn(300);
		$(".btn-prev").attr("href","#proposal-1");
		$(".btn-next").attr("href","#proposal-3");
		$('a[href="#proposal-1"]').addClass("active");
	},
	events: {
		
	}
  });
  return Page;
});
