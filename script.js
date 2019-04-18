var prices=[];
var list=[];
var imgUrl=[];
var totalPrices;
$("#items").click(function(){
    var image = $(".img").val();
    var name = $(".product").val();
    var price = parseInt( $(".price").val());
    list.push(name);
    $(".append").append("<div class='flex' >" +"<img src=" + image + ">" + "<p>"+ name+ "</p>" +  "<p>"+ "$ "+ price + "</p>");
    $("input").val(" ");
    var numberOflist = list.length;
    $(".numberOflist").html(numberOflist);
    prices.push(price);
    totalPrices=0;
    prices.forEach (function(element){
        totalPrices = totalPrices + parseInt(element);
        $(".priceTotal").html("$" +totalPrices);
        console.log(prices, element, totalPrices);
    });
});

$("#purchase").click(function(){
  alert("Your total is $"+ totalPrices +" thank you for purchasing "+ list[0] +" and your other products");  
    
});