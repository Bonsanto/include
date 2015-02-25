function include(filePath) {
	var resource = document.createElement('script');
	resource.src = filePath;
	var script = document.getElementsByTagName('script')[0];
	script.parentNode.insertBefore(resource, script);
}

