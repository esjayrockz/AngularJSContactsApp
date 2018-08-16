(function(){
var app = angular.module("ContactsApp");
app.controller("ContactCtrl", ContactCtrl);

function ContactCtrl(ContactDataSvc){
      var self = this;
      self.editMode = false;
      self.addMode = false;
      ContactDataSvc.getContacts()
                    .then(function(response){
                        self.contacts = response.data;
                        self.selectedContact = self.contacts[1];
                      });

      this.selectContact = function(index){
        this.selectedContact = this.contacts[index];
        self.successMessage = '';
        self.errorMessage = '';
        self.addMode = false;
      };
      this.toggleEditMode = function(){
        this.editMode = !this.editMode;
      }
      this.saveUser = function(){
        this.toggleEditMode();
        var userData = this.selectedContact;
        if(self.addMode){
          ContactDataSvc.addContact(userData)
          .then(function(){
            self.successMessage = 'Data added successfully';
          }).catch(function(){
            self.successMessage = '';
            self.errorMessage = 'There was an error. Please try again!';
          });
        }
        else {
        ContactDataSvc.saveContacts(userData)
        .then(function(){
          self.successMessage = 'Data saved successfully';
        }).catch(function(){
          self.successMessage = '';
          self.errorMessage = 'There was an error. Please try again!';
        });
      }
    };

      this.addContact = function(){
        self.addMode = true;
        this.selectedContact = {
          id: `${self.contacts.length + 1}`
        };
        // this.selectedContact.picture = 'abc';
        self.editMode = true;

      };
}
})();
