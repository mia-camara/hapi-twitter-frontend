$ (document).ready(function(){

	// SIGN UP - NEW USER
	$('#sign-up').on('click', function(){
		$.ajax({
	    type: 'POST',
	    url: 'http://0.0.0.0:3000/users',
	    data: {
	    	newUser: {
	    		username: $('#username').val(),
	    		email: $('#email').val(),
	    		password: $('#password').val()
	    	}
	    },
	    dataType: 'json',
	    success: function(response){
	    	alert('Good Job! Sign up successful');
	    }
		});
	});

	// SIGN IN - NEW SESSION

});