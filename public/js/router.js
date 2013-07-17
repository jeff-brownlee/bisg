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
	  'overview': 'overview',
	  'understanding-1': 'understanding-1',
	  'understanding-2': 'understanding-2',
	  'understanding-3': 'understanding-3',
	  'understanding-4': 'understanding-4',
	  'approach-1': 'approach-1',
	  'approach-2': 'approach-2',
	  'approach-3': 'approach-3',
	  'approach-4': 'approach-4',
	  'approach-5': 'approach-5',
	  'approach-6': 'approach-6',
	  'examples-1': 'examples-1',
	  'proposal-1': 'proposal-1',
	  'conclusion-1': 'conclusion-1',
	  'research/:section/:subsection': 'research',
      // Default - catch all
      '*actions': 'defaultAction'
    }
  });

  var initialize = function(options){
    var appView = options.appView;
    var router = new AppRouter(options);
    
	// Introduction Routes
	router.on('route:defaultAction', function (actions) {
      require(['views/intro/page'], function (IntroPage) {
        var page = Vm.create(appView, 'IntroPage', IntroPage);
        page.render();
      });
    });

	// Overview Routes
	router.on('route:overview', function (actions) {
      require(['views/overview/page'], function (OverviewPage) {
        var page = Vm.create(appView, 'OverviewPage', OverviewPage);
        page.render();
      });
    });
	
	// Understanding Routes
	router.on('route:understanding-1', function (actions) {
      require(['views/understanding/page-1'], function (UnderstandingPage) {
        var page = Vm.create(appView, 'UnderstandingPage', UnderstandingPage);
        page.render();
      });
    });
	router.on('route:understanding-2', function (actions) {
      require(['views/understanding/page-2'], function (UnderstandingPage) {
        var page = Vm.create(appView, 'UnderstandingPage', UnderstandingPage);
        page.render();
      });
    });
	router.on('route:understanding-3', function (actions) {
      require(['views/understanding/page-3'], function (UnderstandingPage) {
        var page = Vm.create(appView, 'UnderstandingPage', UnderstandingPage);
        page.render();
      });
    });
	router.on('route:understanding-4', function (actions) {
      require(['views/understanding/page-4'], function (UnderstandingPage) {
        var page = Vm.create(appView, 'UnderstandingPage', UnderstandingPage);
        page.render();
      });
    });

	// Approach Routes
	router.on('route:approach-1', function (actions) {
      require(['views/approach/page-1'], function (ApproachPage) {
        var page = Vm.create(appView, 'ApproachPage', ApproachPage);
        page.render();
      });
    });
	router.on('route:approach-2', function (actions) {
      require(['views/approach/page-2'], function (ApproachPage) {
        var page = Vm.create(appView, 'ApproachPage', ApproachPage);
        page.render();
      });
    });
	router.on('route:approach-3', function (actions) {
      require(['views/approach/page-3'], function (ApproachPage) {
        var page = Vm.create(appView, 'ApproachPage', ApproachPage);
        page.render();
      });
    });
	router.on('route:approach-4', function (actions) {
      require(['views/approach/page-4'], function (ApproachPage) {
        var page = Vm.create(appView, 'ApproachPage', ApproachPage);
        page.render();
      });
    });
	router.on('route:approach-5', function (actions) {
      require(['views/approach/page-5'], function (ApproachPage) {
        var page = Vm.create(appView, 'ApproachPage', ApproachPage);
        page.render();
      });
    });
	router.on('route:approach-6', function (actions) {
      require(['views/approach/page-6'], function (ApproachPage) {
        var page = Vm.create(appView, 'ApproachPage', ApproachPage);
        page.render();
      });
    });

	// Examples Routes
	router.on('route:examples-1', function (actions) {
      require(['views/examples/page-1'], function (ExamplesPage) {
        var page = Vm.create(appView, 'ExamplesPage', ExamplesPage);
        page.render();
      });
    });

	// Proposal Routes
	router.on('route:proposal-1', function (actions) {
      require(['views/proposal/page-1'], function (ProposalPage) {
        var page = Vm.create(appView, 'ExamplesPage', ProposalPage);
        page.render();
      });
    });

	// Conclusion Routes
	router.on('route:conclusion-1', function (actions) {
      require(['views/conclusion/page-1'], function (ConclusionPage) {
        var conclusionPage = Vm.create(appView, 'ConclusionPage', ConclusionPage);
        conclusionPage.render();
      });
    });
	
	// Research Routes
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
