define([
  'jquery',
  'lodash',
  'backbone',
  'text!templates/conclusion/page-1.html'
], function($, _, Backbone, Template){
    var Page = Backbone.View.extend({
    el: '.page',
    render: function () {

		$(this.el).html(Template).hide().fadeIn(500);

		$(".breadcrumbs").hide().html('<a href="#">Home</a> < <a href="#conclusion-1" class="active">Conclusion</a>').fadeIn(300);			
		$(".btn-prev").attr("href","#proposal-1");
	    $(".btn-next").attr("href","#");	
		$('a[href="#conclusion-1"]').addClass("active");
	  
	},
	events: {
		
	}
  });
  return Page;
});
