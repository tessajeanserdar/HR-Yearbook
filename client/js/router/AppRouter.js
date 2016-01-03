Yearbook.Router = Backbone.Router.extend({

  routes: {
      'cohort': 'cohort',
      'landing' : 'landing',
      '*path': 'landing'
  },

  landing: function() {
    console.log("landing route")
    $('#page-content-container').html("");
    var landingView = new Yearbook.Views.LandingView();
    console.log(landingView)
  },

  cohort: function() {
    $('#page-content-container').html("");
    var students = new Yearbook.Collections.Students();
    var studentsView = new Yearbook.Views.StudentsView({collection:students});
    console.log(studentsView)
   // $('#page-content-container').append(studentsView);
  }

});
