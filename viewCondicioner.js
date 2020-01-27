function ViewCondicioner(condicioner, rootDom){
    this._condicioner = condicioner;
    this._rootDom = rootDom;
    this._state = document.createElement("div");
}


ViewCondicioner.prototype = Object.create(Devices.prototype);
ViewCondicioner.prototype.constructor = ViewCondicioner;

ViewCondicioner.prototype.stateChange = function(){
    if(this._condicioner._state){
        this._state.innerHTML =  "Устройство" + "<span class='vkl'>" + "включено" + "</span>";
    } else{
        this._state.innerHTML = "Устройство выключено";
    }
};

ViewCondicioner.prototype.render = function(){
    var name = document.createElement("div");
    name.innerHTML = "Кондиционер";


    var condition = document.createElement("div");
    condition.className = "cond";

    var term = document.createElement("div");
    term.innerHTML = "Текущая температура" + "<span class='nul'>" + this._condicioner._currentTemperature + "</span>";

    var model = document.createElement("div");
    model.innerHTML = "Модель LG";

    var onBtn = document.createElement("button");
    onBtn.type = "button";
    onBtn.className = "on";
    onBtn.innerHTML = "Включить";
    onBtn.addEventListener('click', () => {
        this._condicioner.on();
        this.stateChange();
    });

    var offBtn = document.createElement("button");
    offBtn.type = "button";
    offBtn.className = "off";
    offBtn.innerHTML = "Выключить";
    offBtn.addEventListener('click', () => {
        this._condicioner.off();
        this.stateChange();
    });

    var plusTemp = document.createElement("button");
    plusTemp.type = 'button';
    plusTemp.className = "inc-temp";
    plusTemp.innerHTML = "Увеличить температуру";
    plusTemp.addEventListener('click', () => {
        this._condicioner.plusTemperature();
        term.innerHTML = "Текущая температура" + "<span class='warm'>" + this._condicioner._currentTemperature + "</span>";
    });

    var minusTemp = document.createElement("button");
    minusTemp.type = 'button';
    minusTemp.className = "dec-temp";
    minusTemp.innerHTML = "Уменьшить температуру";
    minusTemp.addEventListener('click', () => {
        this._condicioner.minusTemperature();
        term.innerHTML = "Текущая температура" + "<span class='cold'>" + this._condicioner._currentTemperature + "</span>";
    });

    this.stateChange();

    condition.appendChild(name);
    condition.appendChild(this._state);
    condition.appendChild(term);
    condition.appendChild(model);
    condition.appendChild(onBtn);
    condition.appendChild(offBtn);
    condition.appendChild(plusTemp);
    condition.appendChild(minusTemp);
    this._rootDom.appendChild(condition);
}