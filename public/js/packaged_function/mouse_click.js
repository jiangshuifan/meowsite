// 点击特效
let a_idx = 0;
document.body.onclick = (e)=>{
    let a = new Array("▲", "＊", "◆", "★", "♠", "♥", "♦" ,"♣", "☼", "♬", "☠", "☯","✪","㉿","۞","❃","☫","†‡");
    let span_i =document.createElement('span');
    let temporary_style = document.createElement('style');
    let cur_x = e.pageX,cur_y = e.pageY;
    let cur_color ="rgb("+Math.random()*255+","+Math.random()*255+","+Math.random()*255+")";
    let cur_class ='span_i_fadeout'+a_idx
    

    // span_i.style.top = cur_y-20 +'px';
    let from_y= cur_y-20;
    let to_y=cur_y-180;
    span_i.style.left = cur_x +'px';
    span_i.style.color = cur_color

    span_i.classList.add(cur_class)
    span_i.innerText=a[a_idx];
    a_idx = (a_idx + 1) % a.length;

    let render_css_str =`
      .`+cur_class+`{
        animation: `+cur_class+` 1.5s linear;
        position:absolute;
        font-size:22px;
        font-weight: bold;
        z-index: 999999999999999999999;
    }    
    @keyframes `+cur_class+`{
      from {
          opacity: 1;
          top:`+from_y+`px
      }
      to{
          opacity: 0;
          top:`+to_y+`px
      }
  }`
    temporary_style.innerHTML=render_css_str

    span_i.style.top = cur_y + 'px'
    document.body.appendChild(span_i);
    document.body.appendChild(temporary_style);
    setTimeout(()=>{
      span_i.remove();
      temporary_style.remove()
    },1500)
}

