function add_supervisor(id){
	var content = '<div class="panel panel-primary">\
									<div class="panel-body">\
										<button type="button" class="close" aria-label="Close" onclick="$(this).parent().parent().remove();"><span aria-hidden="true">×</span></button>\
										<div class="form-group">\
		                  <label>Select Supervisor</label>\
		                  <select class="form-control">\
		                  	<option selected>-Select Supervisor-</option>\
		                    <option>Abdelrahman Sakr</option>\
		                    <option>Tony Foti</option>\
		                    <option>Nader Neseem</option>\
		                    <option>Karim Elbawab</option>\
		                  </select>\
		                </div>\
		                <div class="form-group">\
		                  <label>Select Support Agent(s)</label>\
		                  <select multiple="" class="form-control">\
		                    <option>Abdelrahman Sakr</option>\
		                    <option>Tony Foti</option>\
		                    <option>Nader Neseem</option>\
		                    <option>Karim Elbawab</option>\
		                  </select>\
		                </div>\
									</div>\
								</div>';
	$('#'+id+' #supervisors').append(content);
}