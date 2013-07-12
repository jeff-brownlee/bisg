// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
  'vm'
], function ($, _, Backbone, Vm) {
  var AppRouter = Backbone.Router.extend({
    routes: {
      // Pages
	  'scenario:number': 'scenario',
	  'scenario:number/:section': 'scenario',
	  'research/:section/:subsection': 'research',
	  'conclusion': 'conclusion',
	  '2': 'introPage2',
	  '3': 'introPage3',
	  
      // Default - catch all
      '*actions': 'defaultAction'
    }
  });

  var initialize = function(options){
    var appView = options.appView;
    var router = new AppRouter(options);
    router.on('route:defaultAction', function (actions) {
      require(['views/dashboard/page'], function (DashboardPage) {
        var dashboardPage = Vm.create(appView, 'DashboardPage', DashboardPage);
        dashboardPage.render();
      });
    });
	router.on('route:introPage2', function (actions) {
      require(['views/dashboard/2'], function (DashboardPage) {
        var dashboardPage = Vm.create(appView, 'DashboardPage', DashboardPage);
        dashboardPage.render();
      });
    });
	router.on('route:introPage3', function (actions) {
      require(['views/dashboard/3'], function (DashboardPage) {
        var dashboardPage = Vm.create(appView, 'DashboardPage', DashboardPage);
        dashboardPage.render();
      });
    });
	
	router.on('route:conclusion', function (actions) {
      require(['views/conclusion/page'], function (ConclusionPage) {
        var conclusionPage = Vm.create(appView, 'ConclusionPage', ConclusionPage);
        conclusionPage.render();
      });
    });
	
	router.on('route:scenario', function (number,section) {
		$("#preloader").fadeIn(100);
		var baseScenarioPage = "#scenario" + number;
		if(window.location.hash == baseScenarioPage)
	  	{
		  require(['views/scenario' + number + '/page'], function (ScenarioPage) {
			var scenarioPage = Vm.create(appView, 'ScenarioPage', ScenarioPage);
			scenarioPage.render();
			$("#preloader").fadeOut(100);
		  });
		}
		if(section)
		  {
			require(['views/scenario' + number + '/'+ section + '/page'], function (SectionPage) {
				var sectionPage = Vm.create(appView, 'SectionPage', SectionPage);
				sectionPage.render();
				$("#preloader").fadeOut(100);
		  	});
		  }
    });
	router.on('route:research', function (section,subSection) {
		$("#preloader").fadeIn(100);
		var containerDiv = ".researchContainer-"+section
		if($(containerDiv).length == 0)
		  {
			require(['views/research/'+ section + '/page'], function (SectionPage) {
				var sectionPage = Vm.create(appView, 'SectionPage', SectionPage);
				sectionPage.render();
		  	});
		  }
		  if(subSection)
		  {
			require(['views/research/'+ section + '/' + subSection + '/page'], function (SubSectionPage) {
				var subSectionPage = Vm.create(appView, 'SubSectionPage', SubSectionPage);
				subSectionPage.render();
			});
		  }
		  $("#preloader").fadeOut(100);
    });
	
    Backbone.history.start();
  };
  return {
    initialize: initialize
  };
});
