define([
  'jquery',
  'lodash',
  'backbone',
  'vm',
  'text!templates/research/interaction/gallery/page.html'
], function($, _, Backbone, Vm, template){
  var Page = Backbone.View.extend({
    el: '.sub-page',
    render: function () {
	  var that = this;
	  
	  this.$el.hide().html(template).fadeIn(200);
	  
	  //PRELOADING of Images
	  var mediaImages = $("#interaction-media-container img").length;
	  var loadCounter = 0;
	  $("img").one('load', function() {
		 loadCounter++;
		 if(mediaImages == loadCounter) {
			$("#interaction-media-container").fadeIn(200);
			$("#preloader").fadeOut(100);
		}
		}).each(function() {
		  if(this.complete) $(this).load();
		});
	  $(".subnav a").removeClass("active");
	  $('.subnav a[href="#research/interaction/gallery"]').addClass("active");

    },
    events: {
     
    }
  });
  return Page;
});
