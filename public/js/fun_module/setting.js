

//设置层的隐藏与展开
setting_btn_cancel.onclick =()=>{
  style_setting_alert.classList.remove('slideDown');
}
btn_to_setting.onclick =()=>{
  style_setting_alert.classList.add('slideDown');
}
btn_fold_setting.onclick =()=>{
  style_setting_alert.classList.remove('slideDown');
}
//设置主题字体颜色
btn_set_font_rgba.onclick =()=>{
  let res = input_font_rgba.value;
  let err_count = 0;
  let res_arr = res.split(',');
  if(res_arr.length==3||res_arr.length==4){
    res_arr.forEach((v,i)=>{
      v =parseFloat(v);
      if(v.toString()!=="NaN"){
        if(i<3){
          if(v>255||v<0){
            err_count++
          }
        }
        else{
          if(v>1||v<0.5){
            err_count++
          }
        }
      }else{
        err_count++
      }
    })
  }else{
    err_count++
  }
  if(err_count>0){
    input_font_rgba.value=''
    debounce( dialog_animation(dialog_alter_defeat,"fadeOut_name",3000),100)
  }else{
    localStorage.setItem('--font_color',res);
    common_font_color.forEach((v,i)=>{
      v.style.color = `rgba(`+res+`)`
  })
  input_file.style.backgroundColor = `rgba(`+res+`)`
  input_font_rgba.value=''
  debounce( dialog_animation(dialog_alter_success,"fadeOut_name",3000),100)
  }

}

//颜色条改变
color_range.onmousedown = ()=>{
  color_range.onmousemove =()=>{
    setValue()
  }
  color_range.onmouseup = ()=>{
    setValue()
  }
}
//透明度改变
opacity_range.onmousedown =()=>{
  opacity_range.onmousemove =()=>{
    setValue()
  }
  opacity_range.onmouseup = ()=>{
    setValue()
  }
}
//添加个签
setting_btn_signcreate.onclick = ()=>{
  let res = reset_sign.value;
  res =trim(res);
  let sign_list=[];
  if(res){
    if(localStorage.getItem('sign_list')){
      sign_list = JSON.parse(localStorage.getItem('sign_list'));
    }
    sign_list.push(res)
    reset_sign.value=''
    localStorage.setItem("sign_list",JSON.stringify(sign_list));
    let render_str = '';
    sign_list.forEach((v,i)=>{
        let str = `<div class="sign_item" data-ind='${i}'><div class="sign_item_text">`+v+`</div><div class='iconfont icon-pen'></div></div>`;
        render_str+=str
    })
    sign_show_box.innerHTML = render_str;
    debounce( dialog_animation(dialog_create_success,"fadeOut_name",3000),100)
  }else{
    debounce( dialog_animation(dialog_create_defeat,"fadeOut_name",3000),100)
  }
}

//保存
setting_btn_save.onclick=()=>{
  let pic_src =preview_box.children[0].getAttribute('src')
  if(pic_src.length>0){
      background_container.style.backgroundImage='url('+pic_src+')';
      localStorage.setItem("bgsrc",pic_src);
      debounce( dialog_animation(dialog_save_success,"fadeOut_name",3000),100)
  }else{
    debounce( dialog_animation(dialog_save_defeat,"fadeOut_name",3000),100)
  }
}

//设置颜色效果展示函数
let setValue = ()=>{
  let res = caculateColorValue(color_range);
  let res_arr = res.split(",");
  opacity_range.style.backgroundImage = `linear-gradient(90deg,rgba(`+res+`,0),rgba(`+res+`,1))`

  let opacity = caculateNormalValue(opacity_range,100,1)
  let color_res = `rgba(` + res + `,`+opacity+`)`;
  color_effect.style.backgroundColor = color_res;
  color_effect_font.style.color=color_res
  color_rgb.innerText=res + `,`+opacity;
}

//图片设置
imgcontainer.addEventListener('mouseover',(e)=>{
  if(e.target.classList[0]==="bgimg"){
    e.target.onclick=()=>{
      let cur_pic_src=e.target.getAttribute('src');
      preview_box.children[0].setAttribute("src",cur_pic_src);
      imgcontainer.classList.remove('imgs_unfold')
      input_tochoose_pic.value='';
      input_file_name.innerText=''
    }
  }
})


//图片文件选择
input_tochoose_pic.onchange=()=>{
  pic_preview({
    element_input:input_tochoose_pic,
    pic_show:preview_box,
    filename_show:input_file_name
  })
}
btn_show_img.onclick=()=>{
  imgcontainer.classList.add('imgs_unfold')
}
btn_fold_img.onclick=()=>{
  imgcontainer.classList.remove('imgs_unfold')
}