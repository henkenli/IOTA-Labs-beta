var d = new Date();
registerAppletDescription('IOTA Labs betatest - AboutPosition @ ' + 
    d.getHours() + ':' + d.getMinutes() + ' ' + d.getDate() + '/' + d.getMonth());

//Registering Persistent Developer Settings
registerDeveloperVariable("LastKnownPosition", getUserCoordinates());

function onEnterRange() {
//called when you are in range of a Dot
    setLED('00ff00'); // Green 
    //textToSpeech("<express-as type=\"GoodNews\"> Hi again.");
    textToSpeech("Hi again.");
}

function onExitRange() {
//called when you exit the range of a Dot
    setLED('000000');
    textToSpeech("Leaving already.");
}
 
function onButtonPress() {
	//called when the user presses the button of a Dot   
	var coordinates = getUserCoordinates();
	var diff = LastKnownPosition - coordinates;
	//var close = abs(diff);
	//postNote("Köket", "henkenli", "xx." + close );

    if (LastKnownPosition == coordinates ) {
        	setLED('0066ff'); // Blue
            textToSpeech("<voice-transformation type=\"Soft\" strength=\"90%\">" +
                 "You called on me. What would you like master?" +
             "</voice-transformation>");
    } 
    else {
        setLED('ff0000'); // Red
        textToSpeech("<voice-transformation type=\"Young\" strength=\"100%\">" +
                 "I have been moved! Call the police!!" +
             "</voice-transformation>");
        // Update LastKnownPosition
        registerDeveloperVariable("LastKnownPosition", coordinates );
    }
}
