module.exports= function(){
    this._position={
      _x : 0,_y:0
    };
    this._face= null;
    this._placed=false;
 
    this.move = ()=>{
        if(!this._placed){ // Means not issued yet
            return ;
         }
         switch(this._face.toLowerCase()){
             case 'south':
             this._position._y = (this._position._y-1>0?this._position._y-1:this._position._y);
            console.log(this._position._y)

                   break;
             case 'north':
                 this._position._y = (this._position._y+1<4?++this._position._y:this._position._y);
                 break;
             case 'west': 
                 this._position.x = (this._position.x-1>0?--this._position.x:this._position.x);
                 break;
             case 'east':
                 this._position._x = (this._position._x+1<4?++this._position._x:this._position._x);
                 break;
             default:break;
         }
     }
 
     this.turn = (direction)=>{
         if(!this._placed) return ; // ignore if the toy not issued yet
         //if left go back ;
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
     };
 
     this.place= (x,y,face)=>{ // will set the toy place
         x=parseInt(x);y = parseInt(y);
            this._placed= true; //Means the toy issued already
            this._position={_x: x,_y:y};
             this._face = face;
     };
 
     this.report = ()=>{ //Printing the output on console
         console.log('Output : '+this._position._x+' , '+this._position._y+','+this._face);
     }
 }
 