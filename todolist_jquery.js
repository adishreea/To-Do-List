//to delete an item from the list
$('ul').on('click', 'span', function(event){
	//to make not just the X disappear, but also the entire item
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});

	//to prevent the parent elements to apply their properties
	//this prevents the itemcheck property to be applied
	event.stopPropagation(); 
});


//to check off an item on the list
$('ul').on('click', 'li', function(){
	$(this).toggleClass("itemcheck");

	//alternative method
	/*if($(this).css("color") === "rgb(255, 0, 0)"){
		$(this).css({
			color: "black",
			textDecoration: "none",
		});
	} else{
		$(this).css({
			color: "red",
			textDecoration: "line-through",
		});
	}*/
});

$("input[type='text']").keypress(function(event){
	//ASCII for enter key is 13
	if(event.which === 13){ 
		var item = $(this).val();

		$("ul").append("<li><span><i class='fas fa-trash'></i></span> " + item + "</li>");
	}

});

$(".fas").click(function(){
	$("input[type='text']").fadeToggle();
});