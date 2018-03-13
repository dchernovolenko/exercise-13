var svg = document.getElementById("thing");
var toggle = document.getElementById("toggle");
var head = document.getElementById("head");
var t = 0;
var guessX = 0;
var guessY = 0;
var x = Math.random()*500;
var y = Math.random()*500;

var norway = [14,14,11];
var germany =[14, 10, 7];

var drawcirc = function(x,y){
    circle = document.createElementNS("http://www.w3.org/2000/svg", "circle")  
    circle.setAttribute("cx", x);
    circle.setAttribute("cy", y);
    svg.appendChild(circle)
    circle.addEventListener("click", function(event){colorcirc(event)});
}

var drawnorway = function(event){
    svg.innerHTML = "";
    head.innerHTML = "Norway";
    drawcirc(100,100);
    drawcirc(250,400);
    drawcirc(400,100);
    circs = d3.selectAll("circle").data(norway);
    circs.attr("r", function(d){return d*5;})
    circs.attr("fill", function(d, i){
        if(i == 0){
            return "gold"
        }
        if(i == 1){
            return "silver"
        }
        return "tan"
    })
}

var drawgermany = function(event){
    svg.innerHTML = "";   
    head.innerHTML = "Germany";
    drawcirc(100,100);
    drawcirc(250,400);
    drawcirc(400,100);
    circs = d3.selectAll("circle").data(germany);
    circs.attr("r", function(d){return d*5;})
    circs.attr("fill", function(d, i){
        if(i == 0){
            return "gold"
        }
        if(i == 1){
            return "silver"
        }
        return "tan"
    })
}

drawnorway()


var togglefunc = function(){
    if( t == 0){
        drawgermany()
        t = 1;
    }
    else {
        drawnorway()
        t= 0;
    }
    console.log(t);
}

toggle.addEventListener("click", togglefunc);