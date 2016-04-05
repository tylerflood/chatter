function ViewModel() {

	var self = this;

	self.Chits = ko.observableArray([]);

	self.Init = function() {

		$.ajax({
			url: 'http://chatter-api.azurewebsites.net/api/Chit', 
			success: function(data){
				self.Chits(data);
				console.log(data);
			}

		});

	}

	self.Init();
}


ko.applyBindings(new ViewModel());