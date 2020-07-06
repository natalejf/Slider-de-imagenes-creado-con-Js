var images = [
	"https://images.unsplash.com/photo-1498330177096-689e3fb901ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80",
	"https://images.unsplash.com/photo-1507880572231-f85401ce76e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=826&q=80",
	"https://images.unsplash.com/photo-1486869801134-25b6bc85fc0d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
	"https://images.unsplash.com/photo-1501782927683-7206edc75281?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=833&q=80"
];

var num = 0;

function next() {
	var slider = document.getElementById("slider"); num++;

	if (num >= images.length) {
		num=0;
	}
	slider.src = images [num];
}

function prev() {
	var slider = document.getElementById("slider"); num--;

	if (num < 0) {
		num = images.length-1;
	}
	slider.src = images [num];
}