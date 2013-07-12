define([
  'jquery',
  'lodash',
  'backbone',
  'vm',
  'text!templates/scenario2/key-features/page.html'
], function($, _, Backbone, Vm, oneKeyFeaturesPageTemplate){
  var Page = Backbone.View.extend({
    el: '.sub-page',
    render: function () {
	  var that = this;
	
      this.$el.hide().html(oneKeyFeaturesPageTemplate).fadeIn(200);
	  $('.subnav .active').removeClass('active');
	   $('.subnav a[href="#scenario2/key-features"]').addClass('active');

    },
    events: {
     
    },
	

  });
  return Page;
});