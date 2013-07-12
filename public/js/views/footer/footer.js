define([
  'jquery',
  'lodash',
  'backbone',
  'events',
  'text!templates/footer/footer.html',
  'libs/springy/springyui'
], function($, _, Backbone, Events, footerTemplate){
  var FooterView = Backbone.View.extend({
    el: '.footer',
    intialize: function () {

    },
    render: function () {
      $(this.el).html(footerTemplate);
    },
	
    clean: function () {

    }
  });

  return FooterView;
});
