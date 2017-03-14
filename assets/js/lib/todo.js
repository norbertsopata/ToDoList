// var todo = document.querySelector(".add-btn");
// var mainTodoItem = document.querySelector(".main-todo-item");

// todo.addEventListener("click", function(){
// 	mainTodoItem.classList.toggle("visible");
// });

$(".todo-list").on("click" , ".todo-items", function(){
	$(this).toggleClass("done");
});


$(".todo-list").on("click", ".fa-caret-down", function(){
	$(this).toggleClass("arrow-up");
	$(this).next(".main").fadeToggle(500, function(){
	});
});

$(".todo-list").on("click", ".sm-close-btn", function(event){
	$(this).parent().fadeToggle(500, function(){
	});
	event.stopPropagation();
});

var toDo = $("#first-input");
var text = [];

// Add Item to Todo list function
function addToDo(){
	$(".todo-list").append(
		"<li class='main-todo-item'>" +
		"<span class='main-close-btn'><i class='fa fa-times fa-2x'></i></span>" + 
		 " " + toDo.val() + "<i class='fa fa-caret-down' aria-hidden='true'></i>" + 
		"<ul class='main'><input type='text' placeholder='Dodaj podzadanie do listy' class='second-input'>" +
		"<i class='fa fa-plus add-btn'></i></ul>" + "</li>"
		 );
	// Clear input placeholder
		toDo.val("");
}

$(".todo-list").on("click", ".add-btn", function(){
	text = $(this).parent().find(".second-input");
	if(text.val() === ""){
		text.addClass("wrong");
	} else {
	$(this).parent().append("<li class='todo-items'><span class='sm-close-btn'><i class='fa fa-times'></i></span>" + text.val() + "</li>");
	};
	// Clear input placeholder
	text.val("");
});

	// If pressed enter add todo
toDo.keypress(function(event){
	// Do function if click enter and input is not empty
	if(event.which === 13 && toDo.val() !== "" ){
		//start todo func
		addToDo();
	}
})


$(".todo-list").on("click", ".second-input", function(){
	$(this).removeClass("wrong");
});


// if todo is empty, show error
$("#main-btn").click(function(){
	if(toDo.val() === ""){
		alert("You don't enter any todo ");
	} else{
		addToDo();
	}
});

// Delete todo item
$(".todo-list").on("click", ".main-close-btn", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove()
	});
	event.stopPropagation();
});
