// 声明全局元素变量

let __ = (declare) => {
  return document.querySelector(declare);
};
/*---------------------------setting---------------------------*/
let color_range = __(".color_range");
let color_effect = __(".color_effect");
let color_rgb = __(".color_rgb");
let opacity_range = __(".opacity_range");
let setting_btn_cancel = __(".setting_btn_cancel");
let setting_btn_save = __(".setting_btn_save");
let setting_btn_signcreate = __(".setting_btn_signcreate");
let color_effect_font = __(".color_effect_font");
let style_setting_alert = __(".style_setting_alert");
let btn_to_setting = __("#btn_to_setting");
let btn_set_font_rgba = __(".btn_set_font_rgba ");
let input_font_rgba = __("#input_font_rgba");
let imgcontainer = __(".imgcontainer");
let reset_sign = __(".reset_sign");
let input_tochoose_pic = __("#input_tochoose_pic");
let preview_box = __(".preview_box");
let input_file = __("#input_file");
let input_file_name = __(".input_file_name");
let btn_show_img = __(".btn_show_img")
let btn_fold_img = __('.btn_fold_img')
let btn_fold_setting = __('.btn_fold_setting')
/*公共交互的一些节点*/
let common_font_color = document.querySelectorAll(".common_font_color"); //公共字体颜色样式
let common_html_cover = __(".common_html_cover"); //覆盖页面的div
let background_container = __("#background_container");
let common_html_cover_s = __(".common_html_cover_s");

/*---------------------------dialog_box提示对话框-------------------------*/
let dialog_box = __(".dialog_box");
let dialog_alter_success = __(".dialog_alter_success");
let dialog_alter_defeat = __(".dialog_alter_defeat");
let dialog_save_success = __(".dialog_save_success");
let dialog_save_defeat = __(".dialog_save_defeat");
let dialog_update_success = __(".dialog_update_success");
let dialog_linkadd_defeat = __(".dialog_linkadd_defeat");
let dialog_linkadd_success = __(".dialog_linkadd_success");
let dialog_create_defeat = __(".dialog_create_defeat");
let dialog_create_success = __(".dialog_create_success");
let dialog_linkupdate_success = __(".dialog_linkupdate_success");
/*---------------------------个签功能区---------------------------------*/
let sign_show_box = __(".sign_show_box");
let sign_edit_diolog_box = __(".sign_edit_diolog_box");
let sign_item_cancel = __(".sign_item_cancel");
let sign_edit_textarea = __(".sign_edit_textarea");
let sign_item_remove = __(".sign_item_remove");
let sign_item_reset = __(".sign_item_reset");
let btn_show_sign = __(".btn_show_sign");
let btn_fold_sign = __('.btn_fold_sign')
let __sign_left= __(".__sign_left")
/*------------------------------快捷链接区---------------------------------*/
let link_create = __(".link_create");
let add_link_icon = __(".add_link_icon");
let links_td = document.querySelectorAll(".links_td");
let links_container = __(".links_container");
let linkinfo_submit = __(".linkinfo_submit");
let newlinksrc = __("#newlinksrc");
let newlinkname = __("#newlinkname");
let link_edit_diolog_box = __(".link_edit_diolog_box");
let link_edit_address = __(".link_edit_address");
let link_edit_name = __(".link_edit_name");
let link_item_cancel = __(".link_item_cancel");
let link_item_remove = __(".link_item_remove");
let link_item_reset = __(".link_item_reset");
let link_create_cancel = __(".link_create_cancel")
/*--------------------------------时间 -----------------------------------*/
let time_date = __("#time_date");
let time_clock = __("#time_clock");

/*---------------------------------- 搜索区 ------------------------------*/
let user_content = __("#user_content");
let btn_retrieval_content = __("#btn_retrieval_content");
let associate_res_container = __(".associate_res_container");
let associate_res_item = document.querySelectorAll(".associate_res_item");
let associate_show_box = __(".associate_show_box");
/*----------------------------------搜索引擎 ------------------------------*/
let engine_item = document.querySelectorAll(".engine_item");
let __content_center = __(".__content_center");
