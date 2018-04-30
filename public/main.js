$.get('/emails', function(emails) 
{
	emails.forEach(email =>  
	{
		createEmailRow(email).appendTo('main');
	});

	var rows = $('.expand');
	rows.click(function(event)
	{	
		$('.popContainer').empty();
		var popContainer = $('<div>').addClass('popContainer');
		var row = $(event.target.parentNode);
		var span = row.find('span');			
		for (var i = 0; i < span.length; i++) 
		{
				var fieldText = span[i].innerText;
				var p = $('<p>', {
					text: fieldText,
				})
				p.appendTo(popContainer);
		};
		
		popContainer.appendTo('main');
		var delBtn = $('<input>', {
			type: 'submit', 
			class: 'btn btn-default pull-left',
			value: 'Delete',
			click: function(e)
			{
				e.preventDefault;
				$.ajax({
					url: 'users/:id',
					method: 'delete',
					body: 'application/json',
				});
			},
		});

		var editBtn = $('<input>', {
			type: 'submit', 
			class: 'btn btn-default pull-left',
			value: 'Edit',
			click: function(e)
			{
				e.preventDefault;
				type: "text", 
				$.ajax({
					url: 'users/:id',
					method: 'put',
					body: 'application/json',
				});
			},
		});
		delBtn.appendTo(popContainer);
		editBtn.appendTo(popContainer);
		popContainer.appendTo('main');
	});
});
		


function createEmailRow(email) 
{
	var emailObj = $('<dl class="row">');

	var spanId = $('<span class="col-sm-1 id">');
	var idKey = createEmailKey('id:').appendTo(spanId);
	var idValue = createEmailValue(email.id).appendTo(spanId);
	spanId.appendTo(emailObj);

	var spanBody = $('<span class="col-sm-3 body">');
	var bodyKey = createEmailKey('body:').appendTo(spanBody);
	var bodyValue = createEmailValue(email.body).appendTo(spanBody);
	spanBody.appendTo(emailObj);
	
	var spanSubject = $('<span class="col-sm-2 subject">');
	var subjectKey = createEmailKey('subject:').appendTo(spanSubject);
	var subjectValue = createEmailValue(email.subject).appendTo(spanSubject);
	spanSubject.appendTo(emailObj);

	var spanFrom = $('<span class="col-sm-3 from">');
	var fromKey = createEmailKey('from:').appendTo(spanFrom);
	var fromValue = createEmailValue(email.from).appendTo(spanFrom);
	spanFrom.appendTo(emailObj);

	var spanDate = $('<span class="col-sm-2 date">');
	var dateKey = createEmailKey('date:').appendTo(spanDate);
	var dateValue = createEmailValue(email.date).appendTo(spanDate);
	spanDate.appendTo(emailObj);

	var expandBtn = $('<button>', {
		class: "btn btn-default expand",

	}).appendTo(emailObj);



	return emailObj;
}

function createEmailKey(key) 
{
	return $('<dt>', {
		text: toCapitalCase(key),
		class: "key", 
	});	
}
function createEmailValue(value) 
{
	return $('<dd>', {
		text: value,
		class: "value", 
	});	
}
function toCapitalCase(string) 
{
	return string[0].toUpperCase() + string.slice(1)
}