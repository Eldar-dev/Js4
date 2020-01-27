function ViewCamera(camera, rootDom){
    this._camera = camera;
    this._rootDom = rootDom;
    this._state = document.createElement("div");
}


ViewCamera.prototype = Object.create(Devices.prototype);
ViewCamera.prototype.constructor = ViewCamera;

ViewCamera.prototype.stateChange = function(){
    if(this._camera._state){
        this._state.innerHTML = "Устройство" + "<span class='vkl'>" + "включено" + "</span>";
    } else{
        this._state.innerHTML = "Устройство выключено";
    }
};

ViewCamera.prototype.render = function(){
    var name = document.createElement("div");
    name.innerHTML = "Камера";


    var camer = document.createElement("div");
    camer.className = "cand";

    var type = document.createElement("div");
    type.innerHTML = "Тип записи" + "<span class='res'>" + this._camera._recordingType + "</span>";

    var model = document.createElement("div");
    model.innerHTML = "Модель Sony";

    var mode = document.createElement("div");
    mode.innerHTML = "Режим записи" + "<span class='res'>" + this._camera._mode + "</span>";

    var date = new Date();
    var h = date.getHours();

    var onBtn = document.createElement("button");
    onBtn.type = "button";
    onBtn.className = "on";
    onBtn.innerHTML = "Включить";
    onBtn.addEventListener('click', () => {
        this._camera.on();
        this.stateChange();
        if(h >= 8 && h <= 20){
        this._camera.dayMode();
        mode.innerHTML = "Режим записи" + "<span class='res'>" + this._camera._mode + "</span>";}
        else{
            this._camera.nightMode();
        mode.innerHTML = "Режим записи" + "<span class='res'>" + this._camera._mode + "</span>";
        }
    });

    var offBtn = document.createElement("button");
    offBtn.type = "button";
    offBtn.className = "off";
    offBtn.innerHTML = "Выключить";
    offBtn.addEventListener('click', () => {
        this._camera.off();
        this.stateChange();
        this._camera.offMode();
        mode.innerHTML = "Режим записи" + "<span class='res'>" + this._camera._mode + "</span>";
    });

    var record = document.createElement("button");
    record.type = 'button';
    record.className = "inc-rec";
    record.innerHTML = "Запись";
    record.addEventListener('click', () => {
        this._camera.recordType();
        type.innerHTML = "Тип записи" + "<span class='res'>" + this._camera._recordingType + "</span>";
    });

    var live = document.createElement("button");
    live.type = 'button';
    live.className = "inc-live";
    live.innerHTML = "Онлайн";
    live.addEventListener('click', () => {
        this._camera.liveType();
        type.innerHTML = "Тип записи" + "<span class='res'>" + this._camera._recordingType + "</span>";
    });

   

    this.stateChange();

    camer.appendChild(name);
    camer.appendChild(this._state);
    camer.appendChild(type);
    camer.appendChild(mode);
    camer.appendChild(model);
    camer.appendChild(onBtn);
    camer.appendChild(offBtn);
    camer.appendChild(record);
    camer.appendChild(live);
    this._rootDom.appendChild(camer);
}
