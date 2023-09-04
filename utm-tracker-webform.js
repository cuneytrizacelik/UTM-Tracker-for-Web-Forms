(function() {
    function getUTMParameter(paramName) {
        paramName = paramName.replace(/[[]/, "[").replace(/[]]/, "]");
        var regex = new RegExp("[?&]" + paramName + "=([^&#]*)"),
            results = regex.exec(location.search);
        return results === null ? "" : decodeURIComponent(results[1]);
    }

/**
 * UTM to Form Field Mapping
 * 
 * Map each UTM parameter to the corresponding input field ID in your form.
 * Users should update the values on the right side (the form field IDs) to match their specific form setup.
 * 
 * For example:
 * If your form has an input field for 'utm_source' with the ID 'my_source_input_id',
 * you would update the line to "utm_source": "my_source_input_id"
 */
	var utmFieldsMap = {
	    "utm_id": "YOUR_INPUT_FIELD_ID_FOR_UTM_ID",
	    "utm_source": "YOUR_INPUT_FIELD_ID_FOR_UTM_SOURCE",
	    "utm_medium": "YOUR_INPUT_FIELD_ID_FOR_UTM_MEDIUM",
	    "utm_campaign": "YOUR_INPUT_FIELD_ID_FOR_UTM_CAMPAIGN",
	    "utm_content": "YOUR_INPUT_FIELD_ID_FOR_UTM_CONTENT",
	    "utm_term": "YOUR_INPUT_FIELD_ID_FOR_UTM_TERM"
	};

    for (var param in utmFieldsMap) {
        var value = getUTMParameter(param);
        if (value) {
            var element = document.getElementById(utmFieldsMap[param]);
            if (element && (!element.value || param === "utm_campaign")) {
                element.value = value;
            }
        }
    }

    var currentURL = window.location.href;
    var urlField = document.getElementById("LEADCF4");
    if (urlField) {
        urlField.value = currentURL;
    }
})();
