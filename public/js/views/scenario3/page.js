define([
  'jquery',
  'lodash',
  'backbone',
  'vm',
  'text!templates/scenario3/page.html',
  'text!templates/scenario3/description/page.html'
], function($, _, Backbone, Vm, PageTemplate, defaultContent){
  var Scenario3Page = Backbone.View.extend({
    el: '.page',
    render: function () {
	  
      this.$el.hide().html(PageTemplate).fadeIn(300);
	  $('.sub-page').html(defaultContent);
	  $(".breadcrumbs").hide().html('<a href="#">Home</a> < <a href="#scenario3" class="active">Share</a>').fadeIn(300);
	  
	  //Highligh curent page on load
	  if(window.location.hash == "#scenario3")
	  	$('.subnav a[href="#scenario3/description"]').addClass("active");
	  $(".btn-prev").attr("href","#scenario2");
	  $(".btn-next").attr("href","#scenario4");
    },
    events: {
      'click .subnav a': 'highlightSubMenuItem'
    },
    highlightSubMenuItem: function (ev) {
      $('.subnav .active').removeClass('active');
      $(ev.currentTarget).addClass('active');
    }
  });
  return Scenario3Page;
});
