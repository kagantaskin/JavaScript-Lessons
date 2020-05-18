const userNameOnStorage = localStorage.getItem("userName");

function Load() {
	if (userNameOnStorage) {
		document.querySelector('.nameGetter').style.display = 'none';
		document.querySelector('.shoppingListMain').style.display = 'none';
		document.querySelector('.chatBoxMain').style.display = 'block';
		console.log('Your name is ' + userNameOnStorage + '\nMake a shopping list for me');
	} else {
		console.log("Hello Stranger. What's Your Name\n");
		getName();
	}
}

function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
  
    document.body.style.background = bgColor;
}

random_bg_color();

Load();

function getName() {
	document.querySelector('.nameGetter').style.display = 'block';
	document.querySelector('.chatBoxMain').style.display = 'none';
	document.querySelector('.shoppingListMain').style.display = 'none';

	let name = document.getElementById('getUserName').value;

	if (name) {
		importName(name);
	} else {
		console.log("You need a write your name on the Textbox\nEx. My name is 'Mahmut'");
	}
}

function importName(name) {
	if (name.split("'")[1] === undefined) {
		console.log("Hint: My name is 'Mahmut'");
	} else {
		localStorage.setItem('userName', name.split("'")[1]);
		location.reload();
	}
}

function deleteName() {
	localStorage.removeItem('userName');
	location.reload();
}

function getMessageWithKey() {
	var getMessageButton = document.getElementById("messagesSent");

	getMessageButton.addEventListener("keyup", function(event) {
		if (event.keyCode === 13) {
	    	document.getElementById("messageGetter").click();	
		}
	})
}

getMessageWithKey();

function getMessage() {
	let getMessage = document.querySelector('.messagesSent').value;
	var getMessageDate = new Date().toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1");

	if (getMessage) {
		if (botRespond(getMessage)) {
			document.querySelector('.messagesSent').value = '';

			var messagesList = document.querySelector('.chatMessages');
			var messagesListBot = document.querySelector('.chatMessages');

			var listForUser = document.createElement('li');
			var listForBot = document.createElement('li');
			var listForUserDate = document.createElement('li');
			var listForBotDate = document.createElement('li');

			var usersMessage = document.createTextNode(userNameOnStorage + ': ' + getMessage);
			listForUser.setAttribute("name", 'usersMessage');
			listForUser.setAttribute("class", 'usersMessage');
			listForUser.appendChild(usersMessage);

			var botsRespond = document.createTextNode('Chat Bot 2000: ' + botRespond(getMessage));
			listForBot.setAttribute("name", 'botsRespond');
			listForBot.setAttribute("class", 'botsRespond');
			listForBot.appendChild(botsRespond);

			var usersMessageDate = document.createTextNode(getMessageDate);
			listForUserDate.setAttribute("name", 'usersMessage');
			listForUserDate.setAttribute("class", 'usersMessageDate');
			listForUserDate.appendChild(usersMessageDate);

			var botsMessageDate = document.createTextNode(getMessageDate);
			listForBotDate.setAttribute("name", 'botsRespond');
			listForBotDate.setAttribute("class", 'botsRespondDate');
			listForBotDate.appendChild(botsMessageDate);


			messagesList.appendChild(listForUserDate);
			messagesList.appendChild(listForUser);
			messagesListBot.appendChild(listForBotDate);
			messagesListBot.appendChild(listForBot);
		}		
	} else {
		console.log(userNameOnStorage + "'s message: " + getMessage + '\nBot Responded: Please write a message');
	}
}

function createShoppingListItems() {
	document.querySelector('.chatBoxInputs').style.display = 'none';
	document.querySelector('.shoppingListMain').style.display = 'block';
	document.querySelector('.justDeleteName').style.display = 'none';

}

var shoppingList = {  };

function makeShoppingList() {
	let getshoppingListName = document.querySelector('.shoppingListName').value;
	let getShoppingItem = document.querySelector('.shoppingItemSent').value;
	let getShoppingItemsCount = document.querySelector('.shoppingItemsCountSent').value;

	if (getShoppingItem && getShoppingItemsCount) {
		console.log(getShoppingItem + ' count ' + getShoppingItemsCount);
		shoppingList[getShoppingItem] = getShoppingItemsCount;
		localStorage.setItem(getshoppingListName, JSON.stringify(shoppingList));
	} else {
		console.log('Please write a Item and the Items Count');
	}
}

function backToMessaging() {
	document.querySelector('.chatBoxInputs').style.display = 'block';
	document.querySelector('.shoppingListMain').style.display = 'none';	
	document.querySelector('.messagesSent').value = '';
	document.querySelector('.justDeleteName').style.display = 'block';
}

function listShoppingList() {
	let getshoppingListName = document.querySelector('.shoppingListName').value;
	var splitOne, splitSec, retrievedObj;
	//console.log(shoppingList);
	retrievedObj = localStorage.getItem(getshoppingListName);
	splitOne = retrievedObj.split(",");
	console.log('Ret Obj : ' + retrievedObj);
	for (var i = 0; i <= splitOne.length - 1; i++) {
		/*splitOne = retrievedObj.split(",");
		splitSec = splitOne[i].replace(/"|{|}/g, "");*/
		console.log((retrievedObj.split(",")[i].replace(/"|{|}/g, "")));
	}
}

function clearObj() {
	//Code
}

function botRespond(messages) {
	switch(messages.toLowerCase()) {
		case 'hey':
			return 'Hey ' + userNameOnStorage;
		case 'i love you':
			return 'I love you too ' + userNameOnStorage;
		case 'ne basliyo la hayatiniz mi':
			return 'bekle de gor';
		case 'make a shopping list for me':
			return createShoppingListItems();
		case 'social media':
			return 'None assigned yet';
		case 'ahmet can babadas':
			return 'ama koyduk';
		default:
			return 'I dont know this command';
	}
}