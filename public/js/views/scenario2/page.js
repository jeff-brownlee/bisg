define([
  'jquery',
  'lodash',
  'backbone',
  'vm',
  'text!templates/scenario2/page.html',
  'text!templates/scenario2/description/page.html'
], function($, _, Backbone, Vm, PageTemplate, defaultContent){
  var scenario2Page = Backbone.View.extend({
    el: '.page',
    render: function () {
	  
      this.$el.hide().html(PageTemplate).fadeIn(300);
	  $('.sub-page').html(defaultContent);
	  $(".breadcrumbs").hide().html('<a href="#">Home</a> < <a href="#scenario2" class="active">Whiteboard</a>').fadeIn(300);
	  
	  //Highligh curent page on load
	  $('.subnav .active').removeClass('active');
	  if(window.location.hash == "#scenario2")
	  	$('.subnav a[href="#scenario2/description"]').addClass("active");
	  
	  $(".btn-prev").attr("href","#scenario1");
	  $(".btn-next").attr("href","#scenario3");
    },
    events: {
      'click .subnav a': 'highlightSubMenuItem'
    },
    highlightSubMenuItem: function (ev) {
      $('.subnav .active').removeClass('active');
      $(ev.currentTarget).addClass('active');
    }
  });
  return scenario2Page;
});
