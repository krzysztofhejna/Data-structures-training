'use strict';
(function() {
	var data = [
		{
			id: 'box1',
			title: 'First box',
			content: '<p>Lorem ipsum dolor sit amet!</p>',
			categories: ['highlighted', 'special-header', 'important']
		},
		{
			id: 'box2',
			title: 'Second box',
			content: '<p>Lorem ipsum dolor sit amet!</p>',
			categories: ['special-header', 'important']
		},
		{
			id: 'box3',
			title: 'Third box',
			content: '<p>Lorem ipsum dolor sit amet!</p>',
			categories: ['highlighted', 'important']
		},
		{
			id: 'box4',
			title: 'Fourth box',
			content: '<p>Lorem ipsum dolor sit amet!</p>',
			categories: ['highlighted']
		},
		{
			id: 'box5',
			title: 'Fifth box',
			content: '<p>Lorem ipsum dolor sit amet!</p>', 
			categories: []
		},
	];

	for (var key in data) {
		var bodyMain = document.getElementById("main");
		var newDiv = document.createElement("div");
		var header = document.createElement("h2");
		var headerContent = document.createTextNode(data[key].title);
		var boxContent = document.createElement("p");
		
		newDiv.id = data[key].id;
		for (var i in data[key].categories) {
			newDiv.classList.add(data[key].categories[i]);
		}
		
		header.appendChild(headerContent);
		boxContent.innerText = data[key].content.slice(3, -4);

		newDiv.appendChild(header);
		newDiv.appendChild(boxContent);

		bodyMain.appendChild(newDiv);
	}

})();