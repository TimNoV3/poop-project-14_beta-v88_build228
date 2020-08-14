import faker from 'faker';
import {v4 as uuid} from 'uuid';

import { create_elem, del_all,del } from './helpers';
import { generate_cont, search } from './helpers';

console.log(uuid());

document.addEventListener("DOMContentLoaded", function() {
  let check_tab = 0;
  let tab1 = document.getElementById("tab_1");
  let tab2 = document.getElementById("tab_2");

  let search_input = document.getElementById("search");

  let tabPanels = document.getElementById('tab_cont');
  
  let group_all = []
  let group_priv = []
  

  console.log(faker.random.word()); 


  for (let i = 0; i < 100; i++) {
    let obj = new Object;
    obj.name = faker.name.findName()
    obj.avatar = faker.image.avatar();
    obj.type = faker.random.word();
    obj.follow = faker.random.number();
    obj.posts = faker.random.number();
    obj.id = uuid();
    group_all.push(obj);
  }

  generate_cont(tab1,tab2,tabPanels,group_all);
  

  

  search_input.onblur = function() {
    search_input.value = "";
  }

  search_input.oninput = function() { 
    search(search_input.value, group_all,group_priv,tabPanels, check_tab);
    console.log(search_input.value);
  }

  tab1.onclick = function() {
    check_tab = 0;
    tab1.classList.add('tab_focus');
    tab2.classList.remove('tab_focus');
    del_all(tabPanels);
    for (let elem of group_all){
      create_elem(tabPanels,elem);
    }
  }
  tab2.onclick = function() {
    check_tab = 1;
    tab2.classList.add('tab_focus');
    tab1.classList.remove('tab_focus');

    del_all(tabPanels);

    for (let elem of group_priv){
      create_elem(tabPanels,elem,check_tab);      
    }
  }
  tabPanels.onclick = function(event) {
    let target = event.target;
    if (target.className === "button_follow") {
      for (let elem of group_all) {
        if (elem.id === target.id) {
          group_priv.push(elem);
          group_all.splice(group_all.indexOf(elem),1);
          del(tabPanels,target.parentNode);
        }
      }
    }

    if (target.className === "dropdown-content show") {
      
      for (let elem of group_priv) {
        if (elem.id === target.previousSibling.id) {

          group_all.push(elem);
          group_priv.splice(group_priv.indexOf(elem),1);
          del(tabPanels,target.parentNode.parentNode);
        }
      }
    }

    if (target.className === "button_unfollow") {
      
      target.nextSibling.classList.toggle("show");
    
    }
  }
})