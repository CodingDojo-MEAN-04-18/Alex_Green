$(document).ready(function(){


var customObject = {
    name: 'California, Eureka',
    onClick:function(myParam){
        console.log("I've been clicked");
        console.log(myParam, "ive been passed by bind")
        console.log(this.name);
    }
}
var newObjects = {
    name: 'Washington, Seattle'
}

$('button').click(customObject.onClick.bind(customObject, "Bind this argument!"));

})
