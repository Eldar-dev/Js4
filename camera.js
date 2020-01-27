function Camera(model, recordingType, mode){
    Devices.call(this, model)
    this._recordingType = "";
    this._mode = "";
}


Camera.prototype = Object.create(Devices.prototype);
Camera.prototype.constructor = Camera;


    Camera.prototype.recordType = function(){
        this._recordingType = "  record";
        
    };


    Camera.prototype.liveType = function(){
        this._recordingType = "  live";
    };


    Camera.prototype.getRecordingType = function(){
        return this._recordingType;
    };

    Camera.prototype.dayMode = function() {
        this._mode = "  day";
      };
  
      Camera.prototype.nightMode = function() {
        this._mode = "   night";
        document.body.style.backgroundColor = "#333";
      };

      Camera.prototype.offMode = function() {
        this._mode = "";
      };
  
      Camera.prototype.getMode = function () {
        return this._mode;
      };
  