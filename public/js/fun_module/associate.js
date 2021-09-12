//处理ajax请求，并对结果渲染（jsonp）

function mycb(words) {
    console.log(words["s"]);
  let num = words["s"].length;
  let render_str = "";
    for (let i = 0; i < num; i++) {
      let content = words["s"][i];
      render_str += `<div class="associate_res_item" data-ind=`+i+`>${content}</div>`;
    }
    associate_res_container.innerHTML = render_str
}
let associate = function () {
  if(user_content.value!==""){
    let keyword = user_content.value;
    let data = { wd: keyword, p: "3", cb: "mycb" };
    ajax({
      url: "http://suggestion.baidu.com/su",
      data: data,
      jsonp: "jsonp",
      type: "get",
      success: (res) => {},
      error: (er) => {},
      })
  }else{
    associate_res_container.innerHTML =""
  }
};


user_content.oninput = debounce(associate,500);
