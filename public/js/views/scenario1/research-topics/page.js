define([
  'jquery',
  'lodash',
  'backbone',
  'vm',
  'text!templates/scenario1/research-topics/page.html'
], function($, _, Backbone, Vm, researchTopicsPageTemplate){
  var Page = Backbone.View.extend({
    el: '.sub-page',
    render: function () {
	  var that = this;
	
      this.$el.hide().html(researchTopicsPageTemplate).fadeIn(200);
	   $('.subnav .active').removeClass('active');
	   $('.subnav a[href="#scenario1/research-topics"]').addClass('active');

    },
    events: {
     
    },
	

  });
  return Page;
});
