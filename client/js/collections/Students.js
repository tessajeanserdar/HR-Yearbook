
Yearbook.Collections.Students = Backbone.Collection.extend({

  model: Yearbook.Models.Student,
  
  initialize: function (options) {
    // this.url = 'https://hr-yearbook.herokuapp.com/api/students?cohort=' + options.cohort;
    this.url = 'https://hr-yearbook.herokuapp.com/api/students?cohort=36'
    this.populateCohort();
  },
  populateCohort: function() {
    this.fetch();
  }
    // Use .fetch to populate your Students collection from the API
    // The method incredibly useful (and flexible!) – you can even pass AJAX success/error/complete handlers to it!

});



