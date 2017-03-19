# IOTA-Labs-beta
Scripts from the betatest of IOTA Labs dot

See also use case idea: http://dot.nodebb.com/topic/28/owner-and-guest-detection-in-a-shared-summer-cottage-deep-in-the-northern-forests

-----------------

Beta test Week 03 - textToSpeech Functionality

The script Aboutposition.js has a combination of TextToSpeech, the dots position, the LED and a posted not with the current position.

Init:		Store the dots position in a DeveloperVariable

OnEnter:	Speak a velcome message

OnButton:	If the dot is on the same position as when the code was initialized, 
		it will greet the user and send a note with the coordinates of the dot.
		If the dot is moved from the first position, the dot will scream about calling the police.

OnExit: Speak a farewell message

------------------
