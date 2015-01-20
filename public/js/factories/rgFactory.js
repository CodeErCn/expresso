App.factory('registerFty', function() {
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
    
    var newUser = {};
    
    return {
      addNewUser: function() {
        newUser = user;
      },
      addGender: function(gender) {
        newUser.gender = gender;
      },
      addSeeking: function(seeking) {
        newUser.seeking = seeking;
        console.log(newUser);
      }
    }
})