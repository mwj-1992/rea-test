const lineReader = require('line-reader');

var robot = ()=>{
   this._position={
     _x : 0,_y:0
   }
   this._face= null;

    move = ()=>{
    
        switch(this._face.toLowerCase()){
            case 'north':
                this._position._y = (this._y-1>0?--this._y:this._y);
                  break;
            case 'south':
                this._position._y = (this._y+1<4?++this._y:this._y);
                break;
            case 'west':
                this._position.x = (this.x-1>0?--this.x:this.x);
                break;
            case 'east':
                this._position._x = (this._x+1<4?++this._x:this._x);
                break;
            default:break;
        }
    }

    turn = (direction)=>{
        //if left go back by the array;
        var arr = ['west','north','east','south'];
        direction = direction.toLowerCase();
        var index = arr.indexOf(this._face.toLowerCase());
        if(direction=='left'){
            if(index >0){
                this._face= arr[index-1];
            }else{
                this._face= arr[arr.length-1];
            }
        }

        if(direction=='right'){
            if(index <arr.length-1){
                this._face= arr[index+1];
            }else{
                this._face= arr[0];
            }
        }
    }

    place= (x,y,face)=>{
        if(0<x<4 && 0<y<4 &&['west','north','east','south'].indexOf(face.toLowerCase)!=-1){// checking  parameters
            this._position={_x: x,_y:y};
            this._face = face;
        }
    }

}



lineReader.eachLine('files/testFile.txt', {separator: ';', encoding: 'utf8'}, function(line, last, cb) {
    console.log(line);
  });