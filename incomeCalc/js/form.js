
$(document).ready(function(){
	$('#jForm').validate({
		rules: {
			rent: {
				required: true,
                number: true,
                range: [1,1000000000]
			},
			insurance: {
				required: true,
                number: true,
                range: [1,100000]
			},
			trans: {
				required: true,
                number: true,
                range: [1,100000]
			},
			repair: {
				required: true,
                number: true,
                range: [1,1000000000]
			},
			coms: {
				required: true,
                number: true,
                range: [1,1000]
			},
			utility: {
				required: true,
                number: true,
                range: [1,1000]
				
			},
			food: {
				required: true,
                number: true,
                range: [1,1000]
			},
			weekly: {
				required: true,
				number: true,
				range: [1,100]
			}
		}, 
		messages: {
			rent: {
				required: "This Section is required!",
				rangelength: "Your number is too big!"
			},
			insurance: {
				required: "This Section is required!",
				rangelength: "Your number is too big!"
			},
			trans: {
				required: "This Section is required!",
				rangelength: "Your number is too big!"
			},
			repair: {
				required: "This Section is required!",
				rangelength: "Your number is too big!"
			},
			coms: {
				required: "This Section is required!",
				rangelength: "Your number is too big!"
			},
			utility: {
				required: "This Section is required!",
				rangelength: "Your number is too big!"
			},
			food: {
				required: "This Section is required!",
				rangelength: "Your number is too big!"
			},
			weekly: {
				required: "This Section is required!",
				rangelength: "Your number is too big!"
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
