function getTime_date(){
    var tm=new Date();
    var strTime=tm.getFullYear()+"/"+(tm.getMonth()+1)+"/"+tm.getDate();
    return strTime
}
function getTime_clock(){
    var tm2=new Date();
    if(tm2.getMinutes()>9)
    {var strTime2=tm2.getHours()+":"+tm2.getMinutes();}
    else{var strTime2=tm2.getHours()+":0"+tm2.getMinutes();}
    return strTime2
}

let cur_time_date = getTime_date();
let cur_time_clock = getTime_clock();
time_date.innerText = cur_time_date;
time_clock.innerText = cur_time_clock;
setInterval(function(){
    if(cur_time_date!==getTime_date()&&cur_time_clock!==getTime_clock()){
        cur_time_date = getTime_date();
        cur_time_clock = getTime_clock();
        time_date.innerText = cur_time_date;
        time_clock.innerText = cur_time_clock;
    }
    else if(cur_time_clock!==getTime_clock()){
        cur_time_clock = getTime_clock();
        time_clock.innerText = cur_time_clock;
    }
},1000)