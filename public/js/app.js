$(document).ready(function() {
	showFirstPage();
	$("#btn-first").click(showFirstPage);
	$("#btn-second").click(showSecondPage);
	$("#btn-third").click(showThirdPage);
	$("#btn-fourth").click(showFourthPage);
});

function showFirstPage() {
	$("#contenido").empty();
	$.ajax({
		url: window.location.href + "demo.json",
		type: "GET",
		success: function(response) {
			var data = response.contenido[0];
			$("#contenido").append('<div><h4>' + data.title + '</h4>' +
										'<p>' + data.text + '</p>' +
										'<img src="'+ data.img +'" />' +
										'<p>' + data.section + '</p>' +
									'</div>');	
		},
		error: function(error) {
			console.log(error);
		}
	});
}

function showSecondPage() {
	$("#contenido").empty();
	$.ajax({
		url: window.location.href + "demo.json",
		type: "GET",
		success: function(response) {
			var data = response.contenido[1];
			$("#contenido").append('<div><h4>' + data.title + '</h4>' +
										'<img src="'+ data.img +'" />' +
										'<h3>' + data.second + '</h3>' +
										'<p>' + data.section + '</p>' +
									'</div>');	
		},
		error: function(error) {
			console.log(error);
		}
	});
}

function showThirdPage() {
	$("#contenido").empty();
	$.ajax({
		url: window.location.href + "demo.json",
		type: "GET",
		success: function(response) {
			var data = response.contenido[2];
			$("#contenido").append('<div><h4>' + data.title + '</h4>' +
										'<p>' + data.text + '</p>' +
										'<img src="'+ data.img +'" />' +
										'<p>' + data.section + '</p>' +
									'</div>');	
		},
		error: function(error) {
			console.log(error);
		}
	});
}

function showFourthPage() {
	$("#contenido").empty();
	$.ajax({
		url: window.location.href + "demo.json",
		type: "GET",
		success: function(response) {
			var data = response.contenido[3];
			$("#contenido").append('<div><h4>' + data.title + '</h4>' +
										'<p>' + data.text + '</p>' +
										'<img src="'+ data.img +'" />' +
										'<p>' + data.section + '</p>' +
									'</div>');	
		},
		error: function(error) {
			console.log(error);
		}
	});
}