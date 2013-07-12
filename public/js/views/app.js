define([
  'jquery',
  'fresco',
  'bootstrap',
  'lodash',
  'sonic',
  'backbone',
  'vm',
  'events',
  'text!templates/layout.html'
], function($, fresco, bootstrap, _, sonic, Backbone, Vm, Events, layoutTemplate){
  var AppView = Backbone.View.extend({
    el: '.container-fluid',
    initialize: function () {
    
      var NestedView2 = Backbone.View.extend({});
      var NestedView1 = Backbone.View.extend({
        initialize: function () {
          var nestedView2 = Vm.create(this, 'Nested View 2', NestedView2);
        }
      });
      var nestedView1 = Vm.create(this, 'Nested View 1', NestedView1);

    },
    render: function () {
      var that = this;
      $(this.el).html(layoutTemplate);
	  
	  $(".researchButtons a").tooltip();
      require(['views/header/menu'], function (HeaderMenuView) {
        var headerMenuView = Vm.create(that, 'HeaderMenuView', HeaderMenuView);
        headerMenuView.render();
      });
      require(['views/footer/footer'], function (FooterView) {
        // Pass the appView down into the footer so we can render the visualisation
        var footerView = Vm.create(that, 'FooterView', FooterView, {appView: that});
        footerView.render();
      });
    
	//PRELOADER
	var circle = new Sonic({

		width: 50,
		height: 50,
		padding: 50,
	
		strokeColor: '#fff',
	
		pointDistance: .01,
		stepsPerFrame: 3,
		trailLength: .7,
	
		step: 'fader',
	
		setup: function() {
			this._.lineWidth = 5;
		},
	
		path: [
			['arc', 25, 25, 25, 0, 360]
		]
	
	});
	
	circle.play();

	$("#preloader").append(circle.canvas);
	
    },
	events: {
	  'click .researchButtons a': 'highlightResearchButton',
	  'click .btn-prev'			: 'hightlightHeaderNav',
	  'click .btn-next'			: 'hightlightHeaderNav'
    },
	highlightResearchButton: function (ev) {
	  $('.header-nav .active').removeClass('active');
      $('.researchButtons a.active').removeClass('active');
      $(ev.currentTarget).addClass('active');
	  $(".btn-prev").fadeOut(200);
	  $(".btn-next").fadeOut(200);
    },
	hightlightHeaderNav: function (ev) {
	  $('.header-nav .active').removeClass('active');
      var activeLocation = $(ev.currentTarget).attr("href");
	  $('a[href="'+activeLocation+'"]').addClass("active");
    }
  });
  return AppView;
});
