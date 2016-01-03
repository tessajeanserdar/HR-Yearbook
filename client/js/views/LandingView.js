Yearbook.Views.LandingView = Backbone.View.extend({
  el : "#page-content-container",
  
  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html("This is my landing page!!");       
    return this;
  }
});