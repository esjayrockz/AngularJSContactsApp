(function(){
    var app = angular.module("ContactsApp");
    app.service("AppDataServiceSvc", function (AppNameSvc){
      this.name = AppNameSvc;
      this.author = "Suvajit";
      this.builtDate = new Date().toDateString();
    });
})();
