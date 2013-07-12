define([
  'jquery',
  'lodash',
  'backbone',
  'vm',
  'text!templates/research/interaction/page.html'
], function($, _, Backbone, Vm, template){
  var Page = Backbone.View.extend({
    el: '.page',
    render: function () {
	  var that = this;
	
      this.$el.hide().html(template).fadeIn(200);
	  $(".breadcrumbs").html('<a href="#">Home</a> < <a href="#research/interaction/research" class="active">Interaction Research</a>');
	  
	  require(['views/research/interaction/research/page'], function (SubSectionPage) {
		var subSectionPage = Vm.create(that, 'SubSectionPage', SubSectionPage);
		subSectionPage.render();
	});

    },
    events: {
     
    },
	

  });
  return Page;
});
