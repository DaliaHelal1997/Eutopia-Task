	//getting all required elements
	const searchWrapper = document.querySelector(".search-input");
	const inputBox = searchWrapper.querySelector("input");
	const suggBox = searchWrapper.querySelector(".autocom-box");

	var modal = document.getElementById("myModal");

// Get the button that opens the modal
	var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
	btn.onclick = function() {
  	modal.style.display = "block";
  	btn.style.display = "none";
}

// When the user clicks on <span> (x), close the modal
	span.onclick = function() {
  		modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
  		if (event.target == modal) {
    		modal.style.display = "none";
  }
}
	//if user presses any key and release
	
	inputBox.onkeyup = (e)=>{
    let userData = e.target.value; //user enetered data
    let emptyArray = [];
    if(userData){
        
        emptyArray = suggestions.filter((data)=>{
            //filtering array value and user characters to lowercase and return only those words which are start with user enetered chars
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase()); 
        });
        emptyArray = emptyArray.map((data)=>{
            // passing return data inside li tag
            return data = '<ul>'+ data +'</ul>';
        });
        searchWrapper.classList.add("active"); //show autocomplete box
        showSuggestions(emptyArray);
        let allList = suggBox.querySelectorAll("ul");
        for (let i = 0; i < allList.length; i++) {
            //adding onclick attribute in all li tag
            allList[i].setAttribute("onclick", "select(this)");
        }
    }else{
        searchWrapper.classList.remove("active"); //hide autocomplete box
    }
}


	function select(element){
    	let selectData = element.textContent;
    	inputBox.value = selectData;
    	document.getElementById('show').value=inputBox.value;
    	searchWrapper.classList.remove("active");
}

	function showSuggestions(list){
		let listData;
		if(!list.length){
			userValue = inputBox.value;
			listData = '<ul>'+ userValue +'</ul>';
		}
		else{
			listData = list.join('');
		}

		suggBox.innerHTML = listData;
	}

	function checkbox(){
  
  		var checkboxes = document.getElementsByName('industry');
  		var checkboxesChecked = [];
  		// loop over them all
  		for (var i=0; i<checkboxes.length; i++) {
     	// And stick the checked ones onto an array...
     		if (checkboxes[i].checked) {
        		checkboxesChecked.push(checkboxes[i].value);
     }

     	
  }

  		document.getElementById('show').value=checkboxesChecked;
  	
  	
}

jSuites.calendar(document.getElementById('calendar'), {
    type: 'year-month-picker',
    format: 'MMM-YYYY',
    validRange: [ '2020-02-01', '2022-12-31' ]
});
	