function getParameterByName(name) {
    name = name.replace(/[[]/, "[").replace(/[]]/, "]");
    var regex = new RegExp("[?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1]);
}
var id = getParameterByName('utm_id');
var source = getParameterByName('utm_source');
var medium = getParameterByName('utm_medium');
var campaign = getParameterByName('utm_campaign');
var content = getParameterByName('utm_content');
var term = getParameterByName('utm_term');
document.getElementById("LEADCF49").value = id;
document.getElementById("LEADCF38").value = source;
document.getElementById("LEADCF37").value = medium;
if(empty(document.getElementById("LEADCF36").value)){
	document.getElementById("LEADCF36").value=campaign;
}
document.getElementById("LEADCF48").value = content;
document.getElementById("LEADCF47").value = term;
document.getElementById("LEADCF4").value = window.location.href;
