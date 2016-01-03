var Yearbook = {

    Views: {},
    Models: {},
    Collections: {},
    Router: {}
}

$(document).ready(function(){



    // var appView = new Yearbook.Views.AppView();
    // var students = new Yearbook.Collections.Students();
    // var studentsView = new Yearbook.Views.StudentsView({collection:students});
    Yearbook.Router.Instance = new Yearbook.Router(); 
    // $('#page-content-container').append(appView);
    Backbone.history.start();

    
});