const lastModified = document.querySelector("#lastModified");
const copyYear = document.querySelector("#currentyear");
var today = new Date();
var year = today.getFullYear();

copyYear.innerHTML = `©${year} Juan Betancourt Bolivar, Venezuela.`
var modifiedDate = new Date (document.lastModified);

lastModified.innerHTML = `Medium: <span class="highlight">${new Intl.DateTimeFormat(
	"en-US",
	{
		dateStyle: "medium"
	}
).format(modifiedDate)}</span>`;
