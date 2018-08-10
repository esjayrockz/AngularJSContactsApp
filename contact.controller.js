(function(){
var app = angular.module("ContactsApp");
app.controller("ContactCtrl", ContactCtrl);

function ContactCtrl(ContactDataSvc){
      var self = this;
      ContactDataSvc.getContacts()
                    .then(function(response){
                        self.contacts = response.data;
                      });

      this.selectContact = (index) => {
        this.selectedContact = this.contacts[index];
      };
}
})();
