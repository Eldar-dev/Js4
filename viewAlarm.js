function ViewAlarm(alarm, rootDom){
    this._alarm = alarm;
    this._rootDom = rootDom;
    this._state = document.createElement("div");
}


ViewAlarm.prototype = Object.create(Devices.prototype);
ViewAlarm.prototype.constructor = ViewAlarm;

ViewAlarm.prototype.stateChange = function(){
    if(this._alarm._state){
        this._state.innerHTML = "Устройство" + "<span class='vkl'>" + "включено" + "</span>";
    } else{
        this._state.innerHTML = "Устройство выключено";
    }
};

ViewAlarm.prototype.render = function(){
    var name = document.createElement("div");
    name.innerHTML = "Сигнализация";

    var alarms = document.createElement("div");
    alarms.className = "cund";

    var model = document.createElement("div");
    model.innerHTML = "Модель StarLine"; 
    
    var door = document.createElement("div");
    door.innerHTML = "Дверь" + "<span class='res'>" + this._alarm._stateDoor + "</span>";

    var onBtn = document.createElement("button");
    onBtn.type = "button";
    onBtn.className = "on";
    onBtn.innerHTML = "Включить";
    onBtn.addEventListener('click', () => {
        this._alarm.on();
        this.stateChange();
    });

    

    var pass = document.createElement("input");
    pass.type = "text";
    pass.className = "inp";
    pass.id = "ininput"
    pass.placeholder = "Введите пароль";
    

    var send = document.createElement("button");
    send.type = "button";
    send.innerHTML = "Ввод";
    send.addEventListener('click', () => {
        this._alarm.getPassword(pass.value);
      this._alarm.openDoor(pass.value);
      door.innerHTML = "Дверь" + "<span class='res'>" + this._alarm._stateDoor + "</span>";
      this.stateChange();
    });
      

       var offBtn = document.createElement("button");
    offBtn.type = "button";
    offBtn.className = "off";
    offBtn.innerHTML = "Выключить";
    offBtn.addEventListener('click', () => {
        this._alarm.off();
        this._alarm.offalarm(pass.value);
        this.stateChange();
    });
    


    this.stateChange();

    alarms.appendChild(name);
    alarms.appendChild(this._state);
    alarms.appendChild(model);
    alarms.appendChild(door);
    alarms.appendChild(onBtn);
    alarms.appendChild(offBtn);
    alarms.appendChild(pass);
    alarms.appendChild(send);
    this._rootDom.appendChild(alarms);
}
