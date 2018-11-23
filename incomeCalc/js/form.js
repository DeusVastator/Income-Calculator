
$(document).ready(function(){
	$('#jForm').validate({
		rules: {
			rent: {
				required: true,
                number: true,
                range: [1, 10000]
			},
			insurance: {
				required: true,
                number: true,
                range: [1, 1000]
			},
			trans: {
				required: true,
                number: true,
                range: [1, 1000]
			},
			repair: {
				required: true,
                number: true,
                range: [1, 1000]
			},
			coms: {
				required: true,
                number: true,
                range: [1, 1000]
			},
			utility: {
				required: true,
                number: true,
                range: [1, 1000]
				
			},
			food: {
				required: true,
                number: true,
                range: [1, 1000]
			},
			weekly: {
				required: true,
				number: true,
				range: [1, 100]
			}
		}, 
		messages: {
			rent: {
				required: "This Section is required!"
			},
			insurance: {
				required: "This Section is required!"
			},
			trans: {
				required: "This Section is required!"
			},
			repair: {
				required: "This Section is required!"
			},
			coms: {
				required: "This Section is required!"
			},
			utility: {
				required: "This Section is required!"
			},
			food: {
				required: "This Section is required!"
			},
			weekly: {
				required: "This Section is required!"
			}
		}, 
		errorPlacement: function(error, element) {
            if(element.is(":radio") || element.is(":checkbox")) {
                error.appendTo(element.parent());
            } else {
                error.insertAfter(element);
            }//end else
        }
	});
});
