Yearbook.Views.StudentEntryView = Backbone.View.extend({
    template: _.template('<div><%- name  %> </div>'),

    render: function() {
      this.$el.html(this.template(this.model.attributes));
      return this.$el;
    }
});