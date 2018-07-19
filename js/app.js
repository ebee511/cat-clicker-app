/* 
 * Inital Reqs:
 * Should display a picture of a cat and number of clicks
 * Number of clicks should increment with each click
 */ 

var rollyClickCount = 0;

$('#rolly-cat-photo').click(function(e) {
	rollyClickCount++;
	$('#rolly-count').empty();
	$('#rolly-count').append(rollyClickCount);
});

