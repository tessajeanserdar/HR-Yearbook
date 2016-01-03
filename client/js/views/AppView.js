Yearbook.Views.AppView = Backbone.View.extend({

  initialize: function(options) {
    this.render();
  },

  render : function() {
    this.renderLanding();
    // this.renderNav();
    return this;
  },

  renderLanding: function() {
    $('#page-content-container').html(new Yearbook.Views.LandingView().render());   
  },
  // renderNav: function() {
  //   $('#navbar-container').html(new Yearbook.Views.NavBarView().render());   
  // }
 
})

