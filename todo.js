//alert("connected...");

//var firstLi = document.querySelector("li");
var lis = document.querySelectorAll("li");

for(var i = 0; i< lis.length ;i++){

	lis[i].addEventListener("mouseover" , function(){
	
	 this.classList.add("selected");
	//this.style.color= "green";
	});

	lis[i].addEventListener("mouseout" , function(){

	this.classList.removed("selected");	
	//this.style.color= "black";
	});

	lis[i].addEventListener("click",function(){
		this.classList.toggle("done");

	})


}

/*firstLi.addEventListener("mouseover" , function(){
firstLi.style.color= "green";
console.log("mouse over!!");
});

firstLi.addEventListener("mouseout" ,function(){

	firstLi.style.color="black";
})*/