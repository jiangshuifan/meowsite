// 快捷链接添加 
// 搜索内容输入时input聚焦/交互  链接编辑框弹出


linkinfo_submit.onclick=()=>{
    let linksrc = trim(newlinksrc.value);
    let linkname = trim(newlinkname.value);
    
    if((linksrc.length>0)&&(linkname.length>0)){
        let newlink = {"href":linksrc,"name":linkname}
        let render_str="";
        let linksinfo = JSON.parse(localStorage.getItem('linksinfo'));
        linksinfo.push(newlink);
        linksinfo.forEach((v,i)=>{
            render_str+=`<div class="links_td iconhover"><a href=`+v.href+` title="右键编辑"  data-ind=`+i+` target="_blank"><div class="link_icon"><img class="icon_img" src="http://favicon.cccyun.cc/`+v.href+`" alt=""></div><p class="link_name">`+v.name+`</p></a></div>`
        })
        render_str+=`<div class="links_td iconhover td-jia"><a><div class="add_link_icon"><span class="iconfont icon-jia" id="iconjia"></span></div></a></div>`
        links_container.innerHTML = render_str;
        newlinksrc.value="";
        newlinkname.value="";
        common_html_cover.style.display = 'none';
        link_create.classList.remove('link_create_box_show');
        linksinfo = JSON.stringify(linksinfo)
        localStorage.setItem('linksinfo',linksinfo)
        dialog_animation(dialog_linkadd_success,'fadeOut_name',3000)
    }
    else{
        dialog_animation(dialog_linkadd_defeat,'fadeOut_name',3000)
    }
}



user_content.onfocus = ()=>{
    associate_show_box.style.display = 'block';
    common_html_cover_s.style.display = 'block';
}
user_content.onblur = ()=>{
    associate_show_box.style.display = 'none';
}

common_html_cover.onclick=()=>{
    link_create.classList.remove('link_create_box_show');
    sign_edit_diolog_box.classList.remove('sign_edit_diolog_box_show');
    link_edit_diolog_box.classList.remove('link_edit_diolog_box_show')
    common_html_cover.style.display='none'
}
common_html_cover_s .onclick=()=>{
    common_html_cover_s.style.display='none'
}
//链接新增弹出框和右击编辑链接框
links_container.addEventListener('mouseover',(e)=>{
    if(e.target.classList[0]==="add_link_icon"){
        e.target.onclick=()=>{
            common_html_cover.style.display = 'block';
            link_create.classList.add('link_create_box_show')
        }
    }
    if(e.target.localName==="a"){
        e.target.oncontextmenu=()=>{
            let index = e.target.getAttribute('data-ind');
            let href = e.target.getAttribute('href');
            let name = e.target.children[1].innerText;
            link_edit_diolog_box.setAttribute("data-ind",index)
            link_edit_address.value = href;
            link_edit_name.value = name;
            common_html_cover.style.display='block'
            link_edit_diolog_box.classList.add('link_edit_diolog_box_show')
            return false
        }
    }
})

link_item_cancel.onclick=()=>{
    link_edit_diolog_box.classList.remove('link_edit_diolog_box_show')
    common_html_cover.style.display='none'
}
link_item_remove.onclick=()=>{
    let linksinfo = JSON.parse(localStorage.getItem('linksinfo'));
    let index = parseFloat(link_edit_diolog_box.getAttribute('data-ind'));
    linksinfo.splice(index,1);
    let render_str="";
    linksinfo.forEach((v,i)=>{
        render_str+=`<div class="links_td iconhover"><a href=`+v.href+` title="右键编辑"  data-ind=`+i+` target="_blank"><div class="link_icon"><img class="icon_img" src="http://favicon.cccyun.cc/`+v.href+`" alt=""></div><p class="link_name">`+v.name+`</p></a></div>`
    })
    render_str+=`<div class="links_td iconhover td-jia"><a><div class="add_link_icon"><span class="iconfont icon-jia" id="iconjia"></span></div></a></div>`
    links_container.innerHTML = render_str;
    localStorage.setItem('linksinfo',JSON.stringify(linksinfo));
    link_edit_diolog_box.classList.remove('link_edit_diolog_box_show');
    common_html_cover.style.display='none';
    dialog_animation(dialog_linkupdate_success,'fadeOut_name',3000)
}
link_item_reset.onclick=()=>{
    let render_str ="";
    let linksinfo = JSON.parse(localStorage.getItem('linksinfo'));
    let index = parseFloat(link_edit_diolog_box.getAttribute('data-ind'));
    let href = link_edit_address.value.trim();
    let name = link_edit_name.value.trim();
    if(linksinfo[index].href!==href||linksinfo[index].name!==name){
        linksinfo.splice(index,1,{"href":href,"name":name})
        linksinfo.forEach((v,i)=>{
            render_str+=`<div class="links_td iconhover" data-ind=`+i+`><a href=`+v.href+` title="右键编辑"  data-ind=`+i+` target="_blank"><div class="link_icon"><img class="icon_img" src="http://favicon.cccyun.cc/`+v.href+`" alt=""></div><p class="link_name">`+v.name+`</p></a></div>`
        })
        links_container.innerHTML = render_str;
        localStorage.setItem('linksinfo',JSON.stringify(linksinfo));
    }
    common_html_cover.style.display='none';
    dialog_animation(dialog_linkupdate_success,'fadeOut_name',3000);
    link_edit_diolog_box.classList.remove('link_edit_diolog_box_show');
}
link_create_cancel.onclick = ()=>{
    link_create.classList.remove('link_create_box_show');
    common_html_cover.style.display='none'
}