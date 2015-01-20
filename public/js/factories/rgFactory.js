App.factory('registerFty', function() {
	var user = {
		photo:    '',
		username:   null,
		password:   null,
		gender:   null,
		seeking:  null,
		img:    { 
				data:       null, 
				contentType:  null
			  },
		birthday:   null,
		interests: [],
		aboutme:  'Tell me a little more about yourself. <3',
		chosen:   []
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
		},
		addInterests: function(interests) {
			newUser.interests = [];
			for(var interest in interests) {
				if(interests[interest]===true)
					newUser.interests.push(interest);
			}
			console.log(newUser.interests);
		},
		addBirthday: function(bday) {
			newUser.birthday = bday;
		},
		submit: function(register) {
			newUser.username = register.name;
			newUser.password = register.password;
			console.log(newUser);
		}
	}
})