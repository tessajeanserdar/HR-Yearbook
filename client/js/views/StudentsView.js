Yearbook.Views.StudentsView = Backbone.View.extend({
  
  el : "#page-content-container",

  initialize: function() {
    this.collection.on('sync', this.render, this);
  },
  render: function(){
    this.collection.forEach(this.renderMessage, this)
  },
  renderMessage: function(student){
    var studentView = new Yearbook.Views.StudentEntryView({model:student});
    this.$el.append(studentView.render());
    return this;
  }
});