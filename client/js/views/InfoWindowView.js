Yearbook.Views.InfoWindowView = Backbone.View.extend({

  el: '#info-window-container',
  initialize: function(options) {},

  render: function() {
    this.$el.html("This is my info page!!");       
        return this;
  }

});
