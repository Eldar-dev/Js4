function Condicioner(model, currentTemperature){
    Devices.call(this, model)
    this._currentTemperature = 0;
}


Condicioner.prototype = Object.create(Devices.prototype);
Condicioner.prototype.constructor = Condicioner;

    Condicioner.prototype.plusTemperature = function(){
        if((this._currentTemperature < 25) &&( this._state == true )){
            this._currentTemperature += 2;
        }
    };


    Condicioner.prototype.minusTemperature = function(){
        if((this._currentTemperature > -5) &&( this._state == true )){
            this._currentTemperature -= 2;
        }
    };


    Condicioner.prototype.getCurrentTemperature = function(){
        return this._currentTemperature;
    };

    
