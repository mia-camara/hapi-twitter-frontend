$ (document).ready(function(){

	// SIGN UP - NEW USER
	$('#sign-up').on('click', function(event){
		event.preventDefault(); 
		
		$.ajax({
	    type: 'POST',
	    url: 'http://localhost:3000/users',
	    data: {
	    	user: {
	    		username: $('#username').val(),
	    		email: $('#email').val(),
	    		password: $('#password_signup').val()
	    	}
	    },
	    dataType: 'json',
	    success: function(response){
	    	console.log(response);
	    	alert('Good Job! Sign up successful');
	    }
		});
	});

	// LOG IN - NEW SESSION
	$('#log-in').on('click', function(event){
		console.log('testing log-in button')
		event.preventDefault(); 

		$.ajax({
	    type: 'POST',
	    url: 'http://localhost:3000/sessions',
	    data: {
	    	user: {
	    		username: $('#existing_username').val(),
	    		password: $('#password_signin').val()	
	    	}
	    },
	    dataType: 'json',
	    success: function(response){
	    	console.log(response);
	    	alert('Good Job! Sign in successful');
	    }
		});
	});

});