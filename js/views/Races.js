define(['underscore', 'backbone', 'router', 'tpl!templates/Races.html'], function(_, Backbone, router, RacesTpl) {
  return Backbone.View.extend({
    events: {
      'click .view-race': 'onViewRace'
    },

    initialize: function() {
      this.render();
    },

    onViewRace: function(e) {
      var $race = $(e.currentTarget);
      router.navigate('race/' +
                      $race.attr('data-state') + '/' +
                      $race.attr('data-year') + '/' +
                      $race.attr('data-office'));
    },

    render: function() {
      this.$el.html(RacesTpl());
    }
  });
});
