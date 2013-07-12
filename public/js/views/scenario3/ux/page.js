define([
  'jquery',
  'lodash',
  'backbone',
  'vm',
  'text!templates/scenario3/ux/page.html'
], function($, _, Backbone, Vm, Template){
  var Page = Backbone.View.extend({
    el: '.sub-page',
    render: function () {
	  var that = this;
	
      this.$el.hide().html(Template).fadeIn(200);
	   $('.subnav .active').removeClass('active');
	   $('.subnav a[href="#scenario3/ux"]').addClass('active');

    },
    events: {
     
    },
	

  });
  return Page;
});
