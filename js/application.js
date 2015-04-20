$ (document).ready(function(){

	// SIGN UP - NEW USER
	$('#sign-up').on('click', function(){
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
	$('#log-in').on('click', function(){
		console.log('testing log-in button')
		event.preventDefault(); 

		$.ajax({
	    type: 'POST',
	    url: 'http://localhost:3000/sessions',
	    data: {
	    	user: {
	    		username: $('#username_signin').val(),
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