define([
  'jquery',
  'lodash',
  'backbone',
  'vm',
  'text!templates/scenario4/page.html',
  'text!templates/scenario4/description/page.html'
], function($, _, Backbone, Vm, PageTemplate, defaultContent){
  var Page = Backbone.View.extend({
    el: '.page',
    render: function () {
	  
      this.$el.hide().html(PageTemplate).fadeIn(300);
	  $('.sub-page').html(defaultContent);
	  $(".breadcrumbs").hide().html('<a href="#">Home</a> < <a href="#scenario4" class="active">Collaborate</a>').fadeIn(300);
	  
	  //Highligh curent page on load
	  if(window.location.hash == "#scenario4")
	  	$('.subnav a[href="#scenario4/description"]').addClass("active");
	  
	  $(".btn-prev").attr("href","#scenario3");
	  $(".btn-next").attr("href","#scenario5");
    },
    events: {
      'click .subnav a': 'highlightSubMenuItem'
    },
    highlightSubMenuItem: function (ev) {
      $('.subnav .active').removeClass('active');
      $(ev.currentTarget).addClass('active');
    }
  });
  return Page;
});
