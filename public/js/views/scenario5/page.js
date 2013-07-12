define([
  'jquery',
  'lodash',
  'backbone',
  'vm',
  'text!templates/scenario5/page.html',
  'text!templates/scenario5/description/page.html'
], function($, _, Backbone, Vm, PageTemplate, defaultContent){
  var Page = Backbone.View.extend({
    el: '.page',
    render: function () {
	  
      this.$el.hide().html(PageTemplate).fadeIn(300);
	  $('.sub-page').html(defaultContent);
	  $(".breadcrumbs").hide().html('<a href="#">Home</a> < <a href="#scenario5" class="active">Present</a>').fadeIn(300);
	  
	  //Highligh curent page on load
	  
	  if(window.location.hash == "#scenario5")
	  	$('.subnav a[href="#scenario5/description"]').addClass("active");
	  
	  $(".btn-prev").attr("href","#scenario4");
	  $(".btn-next").attr("href","#conclusion");
	  
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
