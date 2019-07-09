var exec = require('child_process').exec;
    hexo.on('new', function(data){
    exec('start  "D:\Users\33056\AppData\Local\Programs\Microsoft VS Code\Code.exe" ' + data.path);
    }); 