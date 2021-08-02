$("#oprimeiro").click(function () {
	$("#oprimeiro").addClass("active");
	$("#oprimeiro > .icon").addClass("active");
	$(".osegundo").removeClass("active");
	$(".oterceiro").removeClass("active");
	$(".ocuarto").removeClass("active");
	$(".osegundo > .icon").removeClass("active");
	$(".oterceiro > .icon").removeClass("active");
	$(".ocuarto > .icon").removeClass("active");
	$("#line").addClass("one");
	$("#line").removeClass("two");
	$("#line").removeClass("three");
	$("#line").removeClass("four");
})

$(".osegundo").click(function () {
	$(".osegundo").addClass("active");
	$(".osegundo > .icon").addClass("active");
	$("#oprimeiro").removeClass("active");
	$(".oterceiro").removeClass("active");
	$(".ocuarto").removeClass("active");
	$("#oprimeiro > .icon").removeClass("active");
	$(".oterceiro > .icon").removeClass("active");
	$(".ocuarto > .icon").removeClass("active");
	$("#line").addClass("two");
	$("#line").removeClass("one");
	$("#line").removeClass("three");
	$("#line").removeClass("four");
})

$(".oterceiro").click(function () {
	$(".oterceiro").addClass("active");
	$(".oterceiro > .icon").addClass("active");
	$(".osegundo").removeClass("active");
	$("#oprimeiro").removeClass("active");
	$(".ocuarto").removeClass("active");
	$(".osegundo > .icon").removeClass("active");
	$("#oprimeiro > .icon").removeClass("active");
	$(".ocuarto > .icon").removeClass("active");
	$("#line").addClass("three");
	$("#line").removeClass("two");
	$("#line").removeClass("one");
	$("#line").removeClass("four");
})

$(".ocuarto").click(function () {
	$(".ocuarto").addClass("active");
	$(".ocuarto > .icon").addClass("active");
	$(".osegundo").removeClass("active");
	$(".oterceiro").removeClass("active");
	$("#oprimeiro").removeClass("active");
	$(".osegundo > .icon").removeClass("active");
	$(".oterceiro > .icon").removeClass("active");
	$("#oprimeiro > .icon").removeClass("active");
	$("#line").addClass("four");
	$("#line").removeClass("two");
	$("#line").removeClass("three");
	$("#line").removeClass("one");
})

$("#oprimeiro").click(function () {
	$("#first").addClass("active");
	$("#second").removeClass("active");
	$("#third").removeClass("active");
	$("#fourth").removeClass("active");
})

$(".osegundo").click(function () {
	$("#first").removeClass("active");
	$("#second").addClass("active");
	$("#third").removeClass("active");
	$("#fourth").removeClass("active");
})

$(".oterceiro").click(function () {
	$("#first").removeClass("active");
	$("#second").removeClass("active");
	$("#third").addClass("active");
	$("#fourth").removeClass("active");
})

$(".ocuarto").click(function () {
	$("#first").removeClass("active");
	$("#second").removeClass("active");
	$("#third").removeClass("active");
	$("#fourth").addClass("active");
})
