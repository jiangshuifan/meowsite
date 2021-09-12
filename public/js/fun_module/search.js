/**
 * 引擎切换
 * 联想词点击跳转
 * enter直接启动搜索
 * ↓和↑键切换联想词
 * 点击按钮实现搜索
 * 第三方联想词jsonp
 */


/* --------------------------------- 切换搜素引擎  ------------------------------------------- */

__content_center.addEventListener("mouseover", (e) => {
  if (e.target.classList[0] === "engine_item") {
    e.target.onclick = () => {
      let index = parseFloat(e.target.dataset.index);
      engine_item.forEach((v, i) => {
        if (index === i) {
          v.classList.add("selected_engine_item");
          let engine = v.getAttribute("data-engine");
          localStorage.setItem("engine", engine);
        } else {
          v.classList.remove("selected_engine_item");
        }
      });
    };
  }
});
/* ------------------------------ 联想词点击直接跳转------------------------------- */
associate_res_container.addEventListener("mouseover", (e) => {
  if (e.target.classList[0] === "associate_res_item") {
    e.target.onclick = () => {
      let q = e.target.innerText;
      user_content.value = q;
      handle_retrieval();
    };
  }
});
//搜索跳转
let cur_item = -1;
/**-----------------------------输入框按键操作、向下选择联想词----------------------------------------- */
user_content.onkeyup = function (e) {
  if (e.keyCode === 13) {
    handle_retrieval();
  }
  else if (e.keyCode === 40) {
    let length = associate_res_container.children.length;
    if (length !== cur_item + 1) {
      cur_item++;
    } else {
      cur_item = -1;
    }
    console.log(cur_item);
    for (let i of associate_res_container.children) {
      let index = parseFloat(i.getAttribute("data-ind"));
      if (index === cur_item) {
        i.classList.add("associate_res_item_selected");
        user_content.value = i.innerText;
      } else {
        i.classList.remove("associate_res_item_selected");
      }
    }
  }
  else if (e.keyCode === 38) {
    let length = associate_res_container.children.length;
    if (cur_item != -1) {
      cur_item--;
    } else {
      cur_item = length - 1;
    }
    console.log(cur_item);
    for (let i of associate_res_container.children) {
      let index = parseFloat(i.getAttribute("data-ind"));
      if (index === cur_item) {
        i.classList.add("associate_res_item_selected");
        user_content.value = i.innerText;
      } else {
        i.classList.remove("associate_res_item_selected");
      }
    }
  }
  else{
    cur_item=-1
  }
};


//执行检索
btn_retrieval_content.onclick = function () {
  handle_retrieval();
};

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
