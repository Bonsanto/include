var apply = eval;

var include = function (path) {
	//var script = document.createElement("script");
	//script.type = "text/javascript";
	//script.src = path;
	//
	//document.head.appendChild(script);
	var xml = new XMLHttpRequest();

	xml.open("GET", path, false);
	xml.send();

	return apply(xml.responseText);
};