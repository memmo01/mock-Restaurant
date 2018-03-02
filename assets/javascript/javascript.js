var t=[{
    name:"#menu",
    class:"theMenu",
    text:"this is where the menu will be displayed",
    title:"menu"
},{
    name:"#reservation",
    class:"Reservation",
    text:"This is where a reservation form will show",
    title:"Make a Reservation"
    },{
    name:"#catering",
    class:"Reservation",
    text:"this is where Catering information and form will show",
    title:"Schedule a Catering Event"
    }]

$("#menu").on("click",function(){
    $(".modal").css("display","block");

    populateModal(0)
})


$("#reservation").on("click",function(){
    $(".modal").css("display","block");
    populateModal(1)

})

$("#catering").on("click",function(){
    $(".modal").css("display","block");
    populateModal(2)

})

function populateModal(num){
    $(".modal-title").html(t[num].title);

    var x = $("<div>");
        x.addClass(t[num].class);
        x.text(t[num].text);
    $(".modal-body").append(x);

}


$(".close").on("click", function(){
    $(".modal-body").empty()
    $(".modal-title").empty();
    $(".modal").css("display","none")
})