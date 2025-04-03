output = document.getElementById("entries_output")

document.getElementById("entries_input")
	.addEventListener("change", function () {
		let fr = new FileReader();
		fr.onload = function() {
			document.getElementById("entries_output")
			.innerHTML = `<h2>${document.getElementById('entries_input').files[0].name.slice(0,-4)}</h2><p>${fr.result}</p></br></br>`;
		}
	fr.readAsText(this.files[0]);
	})

