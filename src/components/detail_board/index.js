import tpl from './index.tpl';
import './index.scss';

import { DetailTitle } from './detail_title';
import { ContentItem } from './content_item';

import tools from '../../utils/tools';

class DetailBoard {
  constructor (el, phoneData) {
  	this.name = 'detailBoard';
  	this.phoneData = phoneData;
  	this.$el = el;
  }

  init () {
  	this.render();
  }

  render () {
  	const detailTitle = new DetailTitle(),
  	      contentItem = new ContentItem(),
  	      phoneData = this.phoneData,
  	      colors = $.parseJSON(phoneData.color),
  	      versions = $.parseJSON(phoneData.version_info);

  	let versionList = '',
  	    colorList = '';

    colors.forEach((item, idx) => {
      colorList += contentItem.tpl(item, null, idx);
    });

    versions.forEach((item, idx) => {
      versionList += contentItem.tpl(item.version, item.price, idx);
    });

  	this.$el.append(tools.tplReplace(tpl(), {
      pic_url: $.parseJSON(phoneData.pics)[0][0][0],
      phone_name: phoneData.phone_name,
      slogan: phoneData.slogan,
      default_price: phoneData.default_price,
      title_1: detailTitle.tpl('手机版本'),
      title_2: detailTitle.tpl('手机颜色'),
      colors: colorList,
      versions: versionList
  	}));
  }
}

export { DetailBoard };