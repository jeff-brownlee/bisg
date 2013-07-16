define([
  'jquery',
  'lodash',
  'backbone',
  'vm',
  'text!templates/overview/page.html'
], function($, _, Backbone, Vm, overviewPageTemplate){
  var OverviewPage = Backbone.View.extend({
    el: '.page',
    render: function () {
	  
      this.$el.hide().html(overviewPageTemplate).fadeIn(300);
	  $(".breadcrumbs").hide().html('<a href="#">Home</a> < <a href="#overview" class="active">Overview</a>').fadeIn(300);
	  $('a[href="#overview"]').addClass("active");
	  
	  // set previous/next links
	  $(".btn-prev").attr("href","#");
	  $(".btn-next").attr("href","#understanding-1");
    },    
  });
  return OverviewPage;
});