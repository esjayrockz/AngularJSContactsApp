(function(){
    var app = angular.module("ContactsApp");
    app.service("ContactDataSvc", function ($http){
      var self = this;
       this.getContacts = function() {
        return $http.get('http://localhost:3000/contacts');
      };
      this.saveContacts = function(userData){
        return $http.put('http://localhost:3000/contacts/'+ userData.id, userData)
        .then(function(response){
          console.log(response);
        });
      };
      this.addContact = function(userData){
        return $http.post('http://localhost:3000/contacts', userData)
        .then(function(response){
          console.log(response);
        });
      }
    });

})();
