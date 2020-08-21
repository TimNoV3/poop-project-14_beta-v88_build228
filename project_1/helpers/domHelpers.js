export const create_elem  = (node, content, checker=0) => {
  let div = document.createElement('div');
  let div_ch = document.createElement('div');
  let avatar = document.createElement('img');
  let div_cont = document.createElement('div');
  let button = document.createElement('button');
  let mid_cont = document.createElement('div');
  avatar.src = content.avatar;
  avatar.classList.add('avatar');

  div_cont.innerHTML = content.type + ' &#183; ' + content.follow +" Follows"+ ' &#183; ' + content.posts + " Posts";

  div_ch.innerHTML = content.name;
  div.classList.add('group_class');

  div.append(avatar);
  div_ch.classList.add('info_name');
  div_cont.classList.add('info_content');
  mid_cont.append(div_ch,div_cont);
  mid_cont.classList.add('info');
  div.append(mid_cont);  
  if (checker === 0) {
    button.innerHTML = "Follow";
    button.classList.add('button_follow');
    button.setAttribute('id', content.id);
    div.append(button);
  }
  else {
    let div_1 = document.createElement('div');
    let but_1 = document.createElement('button');

    button.innerHTML = ' &#183;&#183;&#183; '  
    button.classList.add('button_unfollow');
    button.setAttribute('id', content.id);

    but_1.classList.add('dropdown-content');
    but_1.innerHTML = 'Unfollow';


    
    div_1.append(button);
    div_1.append(but_1);

    div_1.classList.add('dropdown');

    div.append(div_1);
  }
  
  
  node.append(div);
}

export const generate_cont = (node1,node2,node3,array,checker) => {
  node1.classList.add('tab_focus');
  node2.classList.remove('tab_focus');
  for (let elem of array){
    create_elem(node3,elem,checker);
  }
}

export const del_all = node => {
  while (node.firstChild) {
    node.removeChild(node.firstChild);
  }
}

export  const del = (node, child) => {
  node.removeChild(child);
}

export const search = (text, group1, group2, node1, checker) => {
  let groups = [];
  text = text.toLowerCase();
  if (checker == 0) {
    groups = group1;
  }
  else{
    groups = group2;
  }
  del_all(node1);

  for (let elem of groups){
    create_elem(node1,elem, checker);      
  }
  let group = document.getElementsByClassName('group_class');
  group = [...group];
  for (let elem of group) {
    if (!elem.childNodes[1].childNodes[0].innerHTML.toLowerCase().includes(text.trim())) {
      del(node1, elem);
      console.log(elem);
    }    
 }
}

export const follow = () => {



}