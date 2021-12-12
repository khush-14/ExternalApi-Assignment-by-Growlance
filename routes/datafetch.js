const request = require('request');

let count_req=-1;
let req_pending = [];
let min = 0;
exports.getRequest = async (req,res)=>{
    try{
        count_req += 1;
        const date = new Date();
        
        if(count_req==1 || min !=date.getMinutes){
            min = minRecordCall();
        }
        console.log(count_req);

        if(count_req<=20){
            request({
              uri: 'https://www.facebook.com/',
              
            }).pipe(res);
        }

        if(count_req>20 && count_req<=40){
            // intead we can also push ip address and send them accordingly
            req_pending.push(1);

            res.send(200).json({
                success:"fail",
                msg:"Data is fetching"
            })
            //similarly we send it to web page by res.render 
        }
        if(count_req>40){
            res.send(404).json({
                success:"fail",
                msg:"Excedded call perform try again later"
            })
        }
        

    }catch(err){
        console.log(err);
    }
}


function minRecordCall () {
    let date = new Date();
    count_req = 1;
    let min = date.getMinutes;
    if(req_pending.length>0){
        request({
            uri: 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY',
          }).pipe(res);
        req_pending = [];
    } 
    
    return min;
}