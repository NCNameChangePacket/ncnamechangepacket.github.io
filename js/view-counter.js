const basePath = 'https://api.counterapi.dev/v1';
const upFunc='up';
const apiNamespace = 'ncnamechangepacket';
const visitsKey= 'visits';




const upUrl = basePath.concat('/',apiNamespace,'/',visitsKey,'/',upFunc);

$(document).ready(function(){
    
    $.getJSON(upUrl,function(response){
        console.log('Welcome visiter '+response.count+'.');
    });

});