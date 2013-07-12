define([
  'jquery',
  'lodash',
  'backbone',
  'vm',
  'text!templates/scenario4/research-topics/page.html'
], function($, _, Backbone, Vm, researchTopicsPageTemplate){
  var Page = Backbone.View.extend({
    el: '.sub-page',
    render: function () {
	  var that = this;
	
      this.$el.hide().html(researchTopicsPageTemplate).fadeIn(200);
	   $('.subnav a[href="#scenario4/research-topics"]').addClass('active');

    },
    events: {
     
    },
	

  });
  return Page;
});
