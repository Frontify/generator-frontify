(function($) {
  Tc.Module.<%= name %> = Tc.Module.extend({

    on: function(callback) {
        var that = this;
        var $ctx = this.$ctx;
        // your code on module initialization (bindings, etc.)
        callback();
    },

    after: function() {
        var that = this;
        var $ctx = this.$ctx;
        // your code after all modules called their on method (ajax, etc.)
    }
    
  });
})(Tc.$);