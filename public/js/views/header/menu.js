define([
  'jquery',
  'hammer',
  'lodash',
  'backbone',
  'text!templates/header/menu.html'
], function($, Hammer, _, Backbone, headerMenuTemplate){
	var router = new Backbone.Router();
    var HeaderMenuView = Backbone.View.extend({
    el: '.main-menu-container',

    initialize: function () {
    },
    render: function () {
		var mobile = document.getElementById("page");
		var nav = ["intro","users", "interaction", "data"]
		var i = 0;
      $(this.el).html(headerMenuTemplate);
	  
	  //Highlight the section of the main section.
	  var mainSection = window.location.hash;
      $('a[href="#' + mainSection.substring(1,mainSection.indexOf("/")) + '"]').addClass('active');
	  
	  //Hammer - Mobile events are declared here since Backbone does not recognize them.
		/*Hammer(mobile).on("swipeleft", function() {
			i < nav.length - 1 ? i++ : i = 0;
			router.navigate(nav[i], {trigger: true}); 
			$('.active').removeClass('active');
			$('a[href="' + window.location.hash + '"]').addClass('active');
		});
		Hammer(mobile).on("swiperight", function() {
			i > 0 ? i-- : i = nav.length - 1;
			router.navigate(nav[i], {trigger: true});
			$('.active').removeClass('active');
			$('a[href="' + window.location.hash + '"]').addClass('active');
		});*/
    },
    events: {
      'click .header-nav a': 'highlightMenuItem'
    },
    highlightMenuItem: function (ev) {
      $('.header-nav .active').removeClass('active');
	  $('.researchButtons a.active').removeClass('active');
      $(ev.currentTarget).addClass('active');
	  $(".btn-prev").fadeIn(200);
	  $(".btn-next").fadeIn(200);
    }
  })

  return HeaderMenuView;
});
