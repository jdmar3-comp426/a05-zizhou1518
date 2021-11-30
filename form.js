window.addEventListener( "load", function() {
    function sendData() {
        const sendRequest = new XMLHttpRequest();

        const signUpInfo = new FormData( form );

        sendRequest.addEventListener( "error", function (event) {
                alert('Submission unsuccessful! Please try again.');
        });

        sendRequest.addEventListener( "load", function (event) {
                alert('Your account was created!');
        });

        sendRequest.open( "POST", "http://localhost:5000/app/new/user" );

        sendRequest.send( signUpInfo );

    }
    const form = this.document.getElementById( "signup" );
    
    form.addEventListener(
         "sumbit", function(event) {
             event.preventDefault();
             sendData();
         }
    );
} );