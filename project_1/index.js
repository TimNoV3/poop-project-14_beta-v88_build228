// // const faker = require('faker');
// import faker from 'faker';
// console.log(faker.fake(`{{ name.firstName }}`))

document.addEventListener("DOMContentLoaded", function() {
  let check_tab = 0;
  let tab1 = document.getElementById("tab_1");
  let tab2 = document.getElementById("tab_2");

  let search_input = document.getElementById("search");

  let tabPanels = document.getElementById('tab_cont');
  
  let group_all = ['1','2','3','4']
  let group_priv = [111,2222,22131,4122231,5123,6,7,8]
  
 
  const del_all = node => {
    while (node.firstChild) {
      node.removeChild(node.firstChild);
    }
  }

  const del = (node, child) => {
    node.removeChild(child);
  }

  const create_elem  = (content) => {
    let div = document.createElement('div');
    let div_ch = document.createElement('div');
    div_ch.innerHTML = content;
    div.classList.add('group_class');
    div.append(div_ch);
    
    tabPanels.append(div);
  }

  const generate_cont = () => {
    tab1.classList.add('tab_focus');
    tab2.classList.remove('tab_focus');
    for (let elem of group_all){
      create_elem(elem);
    }
  }
  
  const search = (text) => {
    let groups = [];
    if (check_tab == 0) {
      groups = group_all;
    }
    else{
      groups = group_priv;
    }
    del_all(tabPanels);

    for (let elem of groups){
      create_elem(elem);      
    }
    let group = document.getElementsByClassName('group_class');
    group = [...group];
    for (let elem of group) {
      if (!elem.childNodes[0].innerHTML.includes(text.trim())) {
        del(tabPanels, elem);
        console.log(elem);
      }
      
    
   }
  }

  generate_cont();

  search_input.onblur = function() {
    search_input.value = "";
  }

  search_input.oninput = function() { 
    search(search_input.value);
    console.log(search_input.value);
  }

  tab1.onclick = function() {
    check_tab = 0;
    tab1.classList.add('tab_focus');
    tab2.classList.remove('tab_focus');
    del_all(tabPanels);
    for (let elem of group_all){
      create_elem(elem);
    }
  }
  tab2.onclick = function() {
    check_tab = 1;
    tab2.classList.add('tab_focus');
    tab1.classList.remove('tab_focus');

    del_all(tabPanels);

    for (let elem of group_priv){
      create_elem(elem);      
    }
  }
})