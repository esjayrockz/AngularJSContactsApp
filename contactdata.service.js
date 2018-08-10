(function(){
    var app = angular.module("ContactsApp");
    app.service("ContactDataSvc", function ($http){
      var self = this;
       self.getContacts = function() {
        return $http.get('http://localhost:3000/contacts');
      };
    });
})();
