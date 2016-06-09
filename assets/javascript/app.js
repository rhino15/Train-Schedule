var trainData = new Firebase("https://roystrainschedule.firebaseio.com");

$('#addTrainButton').on('click', function() {
	var trainName = $('#trainNameInput').val().trim();
	var destination = $('#destinationInput').val().trim();
	var firstTrainTime = $('#trainTimeInput').val().trim();
	var frequency = $('#frequencyInput').val().trim();

	var newTrain = {
		train: trainName,
		destination: destination,
		trainTime: firstTrainTime,
		frequency: frequency
	}

	trainData.push(newTrain);

	$('#trainNameInput').val("");
	$('#destinationInput').val("");
	$('#trainTimeInput').val("");
	$('#frequencyInput').val("");

	return false;
});

trainData.on("child_added", function(childSnapshot) {
	console.log(childSnapshot.val());

	var trainName = childSnapshot.val().train;
	var destination = childSnapshot.val().destination;
	var firstTrainTime = childSnapshot.val().trainTime;
	var frequency = childSnapshot.val().frequency;

	$('#trainTable > tbody').append("<tr><td>" + trainName + "</td><td>" + destination + "</td><td>" + frequency + "</td><td>" + 0 + "</td><td>" + 0 + "</td></tr>");
});

