define([
  'jquery',
  'lodash',
  'backbone',
  'vm',
  'text!templates/research/data/page.html'
], function($, _, Backbone, Vm, template){
  var Page = Backbone.View.extend({
    el: '.page',
    render: function () {
	  var that = this;
	
      this.$el.hide().html(template).fadeIn(200);
	  $(".breadcrumbs").html('<a href="#">Home</a> < <a href="#research/data/research" class="active">Data Research</a>');
	  
	  require(['views/research/data/research/page'], function (SubSectionPage) {
		var subSectionPage = Vm.create(that, 'SubSectionPage', SubSectionPage);
		subSectionPage.render();
	});

    },
    events: {
     
    },
	

  });
  return Page;
});
