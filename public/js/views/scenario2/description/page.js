define([
  'jquery',
  'lodash',
  'backbone',
  'vm',
  'text!templates/scenario2/description/page.html'
], function($, _, Backbone, Vm, descriptionPageTemplate){
  var Page = Backbone.View.extend({
    el: '.sub-page',
    render: function () {
	  var that = this;
	
      this.$el.hide().html(descriptionPageTemplate).fadeIn(200);
	  $('.subnav .active').removeClass('active');
	   $('.subnav a[href="#scenario2/description"]').addClass('active');

    },
    events: {
     
    },
	

  });
  return Page;
});
