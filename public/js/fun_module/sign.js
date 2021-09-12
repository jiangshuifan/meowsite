//个签展示区，实现点击后可编辑，hover加一个类名
sign_show_box.addEventListener("mouseover", (e) => {
  let sign_list =JSON.parse(localStorage.getItem('sign_list'));
  if (e.target.classList[0] === "sign_item") {
    e.target.onmouseover=function(){
        e.target.classList.add('sign_item_checked');
        e.target.children[1].classList.add("sign_item_edit");
    }
    e.target.onmouseout=function(){
        e.target.classList.remove('sign_item_checked');
        e.target.children[1].classList.remove("sign_item_edit");
    }
    e.target.children[1].onclick=()=>{
      let index = e.target.dataset.ind;
      let current_sign_item=sign_list[index]
      sign_edit_textarea.value = current_sign_item;
      sign_edit_textarea.setAttribute('data-index',index)
      // sign_list.splice(index,1);
      sign_edit_diolog_box.classList.add('sign_edit_diolog_box_show');
      common_html_cover.style.display='block'
    }
  }

});

// 签名编辑区，删，改，取消
sign_edit_diolog_box.addEventListener('mouseover',()=>{
  let sign_list = JSON.parse(localStorage.getItem("sign_list"));
  sign_item_cancel.onclick=()=>{
    sign_edit_diolog_box.classList.remove('sign_edit_diolog_box_show');
    common_html_cover.style.display='none'
  }
  sign_item_remove.onclick=()=>{
    sign_edit_diolog_box.classList.remove('sign_edit_diolog_box_show');
    dialog_animation(dialog_update_success,"fadeOut_name",3000);
    let index= sign_edit_textarea.getAttribute('data-index');
    sign_list.splice(index,1);
    localStorage.setItem("sign_list",JSON.stringify(sign_list));
    let render_str = '';
    sign_list.forEach((v,i)=>{
        let str = `<div class="sign_item" data-ind='${i}'><div class="sign_item_text">`+v+`</div><div class='iconfont icon-pen'></div></div>`;
        render_str+=str
    })
    sign_show_box.innerHTML = render_str;
    common_html_cover.style.display='none'
  }
  sign_item_reset.onclick=()=>{
    sign_edit_diolog_box.classList.remove('sign_edit_diolog_box_show')
    dialog_animation(dialog_update_success,"fadeOut_name",3000);
    let index= parseFloat(sign_edit_textarea.getAttribute('data-index'));
    let new_sign = sign_edit_textarea.value
    let render_str = '';
    if(sign_list[index]!==new_sign){
      sign_list.splice(index,1,new_sign);
      sign_list.forEach((v,i)=>{
        let str = `<div class="sign_item" data-ind='${i}'><div class="sign_item_text">`+v+`</div><div class='iconfont icon-pen'></div></div>`;
        render_str+=str
    })

      localStorage.setItem("sign_list",JSON.stringify(sign_list));
      sign_show_box.innerHTML = render_str;
    }
    common_html_cover.style.display='none'
  }
  
})

// 展开
btn_show_sign.onclick=()=>{
  __sign_left.classList.add('sign_unfold')
}
btn_fold_sign.onclick = ()=>{
  __sign_left.classList.remove('sign_unfold')
}