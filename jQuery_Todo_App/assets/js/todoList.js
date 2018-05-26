//check off specific todos by clicking
//we strike out and grey the one that are clicked
$("ul").on("click", "li", function(){   //on click acts for every new li inside the ul that is created as well
	$(this).toggleClass("completed");
});

//fade out and remove when clicked
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();	//if we want remove to happen after we make this a function!
	});    					//.parent() not only deletes the span, but deletes the whole li line
	event.stopPropagation();    //jQuery-- stops the event from bubbling up

});

//textbox listener
//enter in new to do list elements
$("input[type='text'").keypress(function(event){
	if(event.which===13){ 		//enter key is 13!
		//extract the value out of the textbox
		var todoText=$(this).val();
		//clear out the input
		$(this).val("");
		//create a new li and add to ul
		$("ul").append("<li><span>X</span> " + todoText + "</li>");
	}
});