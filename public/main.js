$.get('/emails', function(emails) 
{
	console.log(emails);
	emails.forEach(email =>  
	{
		buildEmail(email);
	});

	var rows = $('.row');
	rows.click(function(event)
	{	
		$('.container').empty();
		var row = $(event.target.parentNode).children();
		var containerShow = $('<div>').addClass('container');
		for (var i = 0; i < row.length; i++) 
		{
				var fieldText = row[i].textContent;
				var p = $('<p>', {
					text: fieldText,
				})
				p.appendTo(containerShow);
		};
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
		delBtn.appendTo(containerShow);
		editBtn.appendTo(containerShow);
		containerShow.appendTo('main');
	})
});

	// function (dblclickEvent) {
		// 	var dd = $(Event.target);
		// 	var previous = dd.text();
		// 	dd.html($('<input>', {
		// 		value: previous,
		// 		keyup: function (keyupEvent) {
		// 			var input = $(keyupEvent.target);
		// 			switch (keyupEvent.keyCode) {
		// 				case 13: // enter
		// 					var newValue = input.val();
		// 					dd.html(newValue);
		// 					break;
		// 				case 27: // Esc
		// 					dd.html(previous);
		// 					break;
		// 			}

		// 		}
		// 	}))
		// }
		

	function buildEmail(email)
	{
		var emailDiv = $('<div class="row">');

		$('<span>', 
		{
			class: "id col-sm-1",
			text: `id: ${email.id}`,
		}).appendTo(emailDiv);

		$('<span>', 
		{
			class: "body col-sm-3",
			text: `body: ${email.body}`,
		}).appendTo(emailDiv);

		$('<span>', 
		{
			class: "subject col-sm-2",
			text: `subject: ${email.subject}`,
		}).appendTo(emailDiv);

		$('<span>', 
		{
			class: "from col-sm-3",
			text: `from: ${email.from}`,
		}).appendTo(emailDiv);

		$('<span>', 
		{
			class: "date col-sm-2",
			text: `date: ${email.date}`,
		}).appendTo(emailDiv);

		$('main').append(emailDiv);
	}
