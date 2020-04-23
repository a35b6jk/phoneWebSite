import { App } from './App';

import { Header } from '../components/header';
import { DetailBoard } from '../components/detail_board';
import { Footer } from '../components/footer';

import tools from '../utils/tools';

class Detail extends App {
	constructor ($) {
    super($, {
      swiper: false,
      phone: true,
      field: true
  	});

  	this.phoneId = tools.getUrlQueryValue('id');
	}

	render () {
    new Header(this.$app, this.cache.fieldDatas, this.cache.phoneDatas).init();
    new DetailBoard(this.$app, this.getPhoneData(this.phoneId)).init();
    new Footer(this.$app).init();
    $('body').prepend(this.$app);
	}

	getPhoneData (id) {
		let data = null;

		this.cache.phoneDatas.forEach((item) => {
      if (item.id == id){
        data = item;
      } 
		});

		return data;
	}
}

new Detail(jQuery);