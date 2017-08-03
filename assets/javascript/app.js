$("#buttonID").on("click", function () {

	var name = $("#name").val().trim();
	var role = $("#role").val().trim();
	var date = $("#date").val().trim();
	var work = "Working";
	var rate = $("#rate").val().trim();
	var bill = "Bill";


	$('#myTable tr:last').after(
		'<tr><td>' + name + '</td><td>' + role + '</td><td>' + date + '</td><td>' + work + '</td><td>' + rate + '</td><td>' + bill + '</td></tr>');
});

		var dataBase = firebase.database();

		dataBase().ref().push({

		name: name,
		role: role,
		date: date,
		work: work,
		rate: rate,
		bill: bill,
		dateAdded: firebase.database.ServerValue.TIMESTAMP
		});
		
// last child
	dataBase.ref().orderByChild("dateAdded").limitToLast(1).on("child_added", function (childSnapshot) {


	})
// All Children
	dataBase.ref().on("child_added", function(childSnapshot){

	})

