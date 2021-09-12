//背景图、搜索引擎、快捷链接、字体颜色、
//input[range]颜色、个签渲染、鼠标左键点击效果


window.onload = ()=>{

  //背景图
  if (!localStorage.bgsrc) {
    localStorage.setItem("bgsrc", "./public/img/bg/5.jpg");
  }
  if (localStorage.getItem("bgsrc").length > 0) {
    let selected_src = localStorage.getItem("bgsrc");
    background_container.style.backgroundImage="url('" + selected_src + "')";
    // style_setting_alert.style.backgroundImage="url('" + selected_src + "')";
    preview_box.children[0].setAttribute("src",selected_src)
  }
  //搜索引擎
  if (!localStorage.engine) {
    localStorage.setItem("engine", "baidu");
  }
  let selected_engine = localStorage.getItem("engine");
  engine_item.forEach((v,i)=>{
    v.getAttribute('data-engine')===selected_engine?v.classList.add('selected_engine_item'):v.classList.remove('selected_engine_item')
  })


  //快捷链接渲染
  if (!localStorage.linksinfo) {
    let linksinfo = [
      { href: "https://www.bilibili.com/", name: "bilibili" },
      { href: "https://leetcode-cn.com/", name: "LeetCode" },
      { href: "https://a.maorx.cn/", name: "青柠起始页" },
      { href: "https://bbs.csdn.net/", name: "CSDN" },
      { href: "https://cloud.baidu.com/", name: "百度智能云" },
      { href: "https://github.com/", name: "GitHub" },
      { href: "https://www.iconfont.cn/", name: "iconfont" },
      { href: "https://cn.vuejs.org/", name: "Vue" },
      {
        href: "https://developers.weixin.qq.com/miniprogram/dev/framework/",
        name: "微信小程序",
      },
      { href: "https://www.sass.hk/docs/", name: "Scss" },
      { href: "https://es6.ruanyifeng.com/", name: "ES6入门" },
      { href: "https://stackoverflow.com/", name: "stackoverflow" },
      { href: "https://www.webpackjs.com/", name: "webpackjs" },
      { href: "https://wht.im/", name: "wht.im" },
      { href: "https://colorhunt.co/", name: "colorhunt" },
      { href: "https://mp.weixin.qq.com/", name: "微信公众平台" },
      { href: "https://juejin.cn/", name: "掘金" },
    ];
    localStorage.setItem("linksinfo", JSON.stringify(linksinfo));
    // console.log(JSON.parse(localStorage.getItem("linksinfo"))||"[]");
  }
  let render_str="";
  let linksinfo = JSON.parse(localStorage.getItem('linksinfo'));
  linksinfo.forEach((v,i)=>{
    render_str+=`<div class="links_td" ><a href=`+v.href+` title="右键编辑"  data-ind=`+i+` target="_blank"><div class="link_icon"><img class="icon_img" src="http://favicon.cccyun.cc/`+v.href+`" alt=""></div><p class="link_name">`+v.name+`</p></a></div>`
})
  render_str+=`<div class="links_td td-jia"><a><div class="add_link_icon"><span class="iconfont icon-jia" id="iconjia"></span></div></a></div>`
  links_container.innerHTML = render_str
  

  //设置颜色条颜色
  let res = caculateColorValue(color_range);
  let res_arr = res.split(",");
  opacity_range.style.backgroundImage =
    `linear-gradient(90deg,rgba(` + res + `,0),rgba(` + res + `,1))`;

  let opacity = caculateNormalValue(opacity_range, 100, 1);
  let color_res = `rgba(` + res + `,` + opacity + `)`;
  color_effect_font.style.color = color_res;
  color_effect.style.backgroundColor = color_res;
  color_rgb.innerText = res + `,` + opacity;

  //读取公共颜色样式
  let common_color
  if(localStorage.getItem("--font_color")){
     common_color = localStorage.getItem("--font_color");

  }else{
     common_color = '0,218,255,1'
  }
  common_font_color.forEach((v, i) => {
    v.style.color = `rgba(` + common_color + `)`;
  });
  input_file.style.backgroundColor = `rgba(` + common_color + `)`


  /*读取个签*/
  if (localStorage.getItem("sign_list")) {
    let sign_list = JSON.parse(localStorage.getItem("sign_list"));
    let render_str = '';
    sign_list.forEach((v,i)=>{
        let str = `<div class="sign_item" data-ind='${i}'><div class="sign_item_text">`+v+`</div><div class='iconfont icon-pen'></div></div>`;
        render_str+=str
    })
    sign_show_box.innerHTML = render_str
  }
}