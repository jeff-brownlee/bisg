define([
  'jquery',
  'lodash',
  'backbone',
  'vm',
  'text!templates/research/competitors/research/page.html'
], function($, _, Backbone, Vm, template){
  var Page = Backbone.View.extend({
    el: '.sub-page',
    render: function () {
	  var that = this;
	
      this.$el.hide().html(template).fadeIn(200);
	  $(".subnav a").removeClass("active");
	  $('.subnav a[href="#research/competitors/research"]').addClass("active");
	  
	  $('a[data-toggle="modal"]').on("click",function(){
		  var title = $(this).attr("data-modal-title");
		  var subTitle = $(this).attr("data-modal-subtitle");
		  var modalBody = $(this).attr("href");
		 $("#myModalLabel").html(title)
		 $("#modalSubheader").html(subTitle)
		 $(".modal-body").load(modalBody);
	  });

    },
    events: {
     
    },
	

  });
  return Page;
});
