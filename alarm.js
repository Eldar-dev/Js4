function Alarm(model, password, stateDoor){
    Devices.call(this, model)
    this._password = "Heloo";
    this._stateDoor = "   close";
    this._count = 0;
    this._state = false;
}


Alarm.prototype = Object.create(Devices.prototype);
Alarm.prototype.constructor = Alarm;



Alarm.prototype.getPassword = function (inputPassword) {
    if(inputPassword == this._password){
        this._count = 0;
        return;
    }else{
        this._count++;
        if(this._count >= 3){
        this.on();
        }
      }
    };

  Alarm.prototype.openDoor = function(inputPassword){
    if(inputPassword == this._password){
    this._stateDoor = "  open";}
  };


Alarm.prototype.offalarm = function(inputPassword){
    if(inputPassword == this._password){
        this._state = false;
        this._passwordCounter = 0;
    }
};
