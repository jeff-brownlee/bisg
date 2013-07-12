define([
  'jquery',
  'lodash',
  'backbone',
  'vm',
  'text!templates/scenario1/page.html',
  'text!templates/scenario1/description/page.html'
], function($, _, Backbone, Vm, scenario1PageTemplate, defaultContent){
  var Scenario1Page = Backbone.View.extend({
    el: '.page',
    render: function () {
	  
      this.$el.hide().html(scenario1PageTemplate).fadeIn(300);
	  $('.sub-page').html(defaultContent);
	  $(".breadcrumbs").hide().html('<a href="#">Home</a> < <a href="#scenario1" class="active">Analyze</a>').fadeIn(300);
	  
	  //Highligh curent page on load
	  if(window.location.hash == "#scenario1")
	  	$('.subnav a[href="#scenario1/description"]').addClass("active");
	  
	  $(".btn-prev").attr("href","#3");
	  $(".btn-next").attr("href","#scenario2");
    },
    events: {
      'click .subnav a': 'highlightSubMenuItem',
    },
    highlightSubMenuItem: function (ev) {
      $('.subnav .active').removeClass('active');
      $(ev.currentTarget).addClass('active');
    },
  });
  return Scenario1Page;
});
