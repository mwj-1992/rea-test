const readline = require('readline');
const Robot= require('./Robot');
var fs = require('fs');
 _robot= new Robot(); // Using only one Robot (Singleton design pattern)

 _files =[];
 fs.readdir('files', function (err, files) {
    //handling error
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 
    _files = files;
    if(_files.length)
         {
            console.log('------------------------------------------------')
            readCommands(_files[0]); 
         }
});


readCommands = (filename,next)=>{
// create instance of readline
// each instance is associated with single input stream
    var rl = readline.createInterface({
        input: fs.createReadStream('files/'+filename)
    });
    
    let line_no = 0;
    // event is emitted after each line 
    rl.on('line', function(line) {
        line_no++;
        command = line.toLowerCase().trim();   
        if(command.indexOf('place')!=-1){
            position = command .split(' ')[1].split(',');
            x= position[0];y = position[1];face = position[2].trim();
            if(0<= y<=4  && 0<= x<=4 && ['west','north','east','south'].indexOf(face.toLowerCase())!=-1){// checking  parameters
                _robot.place(x,y,face);         
            }      
        }
        if(command.indexOf('move')!=-1){
            _robot.move();
        }
    
        if(command.indexOf('report')!=-1){ 
            _robot.report();
        }
        if(['left','right'].indexOf(command)!=-1){
            _robot.turn(command);
        }
    });
    
    // end
    rl.on('close', function(line) { // move to the next file if the file is readed.
        console.log('Total Commands : ' + line_no);
        console.log('------------------------------------------------')
        try{
        index =_files.indexOf(filename);    
            if(index!=-1 &&index<_files.length -1) // check if have  more file.
                readCommands(_files[index+1]);
            }catch(e){
                console.log(e.message);
            }
    });
}

