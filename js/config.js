/**
 * Require config
 */
require.config({

  deps: ['main'],

  baseUrl: "/voice-of-money/js/", // this is github.io branch... specify the repo

  paths: {
    "jquery": "/voice-of-money/lib/jquery-2.1.0.min",
    "backbone": "/voice-of-money/lib/backbone-min",
    "d3": "/voice-of-money/lib/d3.v3.3.2.min",
    "bootstrap": "/voice-of-money/lib/bootstrap_232/js/bootstrap.min",
    "tpl": "/voice-of-money/lib/tpl",
    "underscore": "/voice-of-money/lib/lodash.min",
    "highcharts": "/voice-of-money/lib/highcharts-all",
    "jquery-slider": "/voice-of-money/lib/jquery-ui-1.10.4.slider",
    "numeral": "/voice-of-money/lib/numeral.min"
  },

  shim: {
    backbone: {
      deps: ['jquery', 'underscore'],
      exports: 'Backbone'
    },
    bootstrap: {
      deps: ['jquery']
    },
    d3: {
      exports: "d3"
    },
    highcharts: {
      deps: ['jquery'],
      exports: "Highcharts"
    },
    numeral: {
      exports: 'numeral'
    },
    "jquery-slider": {
      deps: ['jquery'],
      exports: "$"
    }
  }

});
