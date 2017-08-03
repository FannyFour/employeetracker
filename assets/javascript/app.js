<script>
	$("#buttonID").on("click", function() {

	var name = $("#name").val().trim();
	var role = $("#role").val().trim();
	var date = $("#date").val().trim();
	var work = "Working";
	var rate = $("#rate").val().trim();
	var bill = "Bill";


	$('#myTable tr:last').after(
		'<tr><td>' + name + '</td><td>' + role + '</td><td>' + date + '</td><td>' + work + '</td><td>' + rate + '</td><td>' + bill +'</td></tr>');
	});
	</script>