var addBtn = document.getElementById("add");
addBtn.className = "add-style";
addBtn.addEventListener('click', function(){
    var condModel = new Condicioner("LG");
    var viewCondModel = new ViewCondicioner(condModel, document.getElementById("root"));
    viewCondModel.render();
})


var accBtn = document.getElementById("acc");
accBtn.className = "acc-style";
accBtn.addEventListener('click', function(){
    var condModel = new Camera("Sony");
    var viewCondModel = new ViewCamera(condModel, document.getElementById("root"));
    viewCondModel.render();
})


var abbBtn = document.getElementById("abb");
abbBtn.className = "abb-style";
abbBtn.addEventListener('click', function(){
    var condModel = new Alarm("StarLine");
    var viewCondModel = new ViewAlarm(condModel, document.getElementById("root"));
    viewCondModel.render();
})