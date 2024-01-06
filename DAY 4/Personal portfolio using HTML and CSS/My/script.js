const w = document.getElementById('tempWindow');
function openDetail(s) {
	var allElements = document.querySelectorAll('*');
	w.setAttribute('class', 'tempWindow');

	for (var i = 0; i < allElements.length; i++) {
		var element = allElements[i];
		element.style.zIndex = -1;
	}

	document.getElementById(s).style.zIndex = 1;
	document.getElementById(s).scrollIntoView({ behavior: 'smooth' });

	document.addEventListener('click', function (event) {
		console.log(event.target.idName);
	});
}
