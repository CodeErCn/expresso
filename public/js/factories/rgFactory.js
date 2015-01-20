App.factory('registerFty', function() {
    var users = [];
    var user = {
        photo:    null,
        username:   null,
        password:   null,
        gender:   null,
        seeking:  null,
        img:    { 
                data:       null, 
                contentType:  null
              },
        birthday:   null,
        interests:  { type: Array, default : [] },
        aboutme:  null,
        chosen:   { type: Array, default : [] }
    }

    return {
      addNewUser: function() {
        var newUser = user;
        console.log(newUser);
      },
      addGender: function(gender) {
        newUser.gender = gender;
        console.log(newUser)
      },

    }
})