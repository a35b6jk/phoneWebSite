import navTpl from './tpl/nav.tpl';
import navItemTpl from './tpl/nav_item.tpl';
import './index.scss';

import { NavMenu } from './nav_menu';

import tools from '../../../utils/tools';
//https://ke.qq.com/course/391728
//https://ke.qq.com/course/334138
class Nav {
  constructor () {
  	this.namv = 'headerNav';
  	this.navMenu = new NavMenu();
    this.htmlCache = {};
  }

  tpl (data) {
  	let list = '';
    
    data.forEach((item) => {
      list += tools.tplReplace(navItemTpl(), {
        field: item.field,
        seriesName: item.series_name
      });
    });

    return tools.tplReplace(navTpl(), {
      navItems: list,
      navMenu: this.navMenu.tpl()
    });
  }

  navMouseIn (e) {
    const data = e.data,
          phoneDatas = data.phoneDatas,
          oNav = data.oNav;

    const field = $(this).attr('data-field'),
          $navMenu = $('.J_navMenu');

    if (!oNav.htmlCache[field]) {
      oNav.htmlCache[field] = oNav.navMenu.appendMenuCards(phoneDatas.filter((item) => {
        return item.field === field;
      }))
    }
    
    $navMenu.html(oNav.htmlCache[field]);
  }
}

export { Nav };