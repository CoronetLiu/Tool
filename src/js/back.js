$(() => {
  //初始化轮播图
  let swiper = new Swiper('.swiper-container', {
    autoplay: {
      delay: 2500,//1秒切换一次
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
    },
  });

  let lists = [
    {
      id: 'kaoyi',
      name: '车轮高档靠椅',
      images: [
        ['../images/sp/kaoyi_1.jpg', 'kaoyi', '现货'],
        ['../images/sp/kaoyi_2.jpg', 'kaoyi', '现货'],
        ['../images/sp/kaoyi_3.jpg', 'kaoyi', '现货'],
        ['../images/sp/kaoyi_4.jpg', 'kaoyi', '现货'],
      ]
    }, {
      id: 'mazhuang',
      name: '仿古青石栓马桩',
      disc: '现货',
      images: [
        ['../images/sp/mazhuang_1.jpg', 'mazhuang', '现货'],
        ['../images/sp/mazhuang_2.jpg', 'mazhuang', '现货'],
        ['../images/sp/mazhuang_3.jpg', 'mazhuang', '现货'],
        ['../images/sp/mazhuang_4.jpg', 'mazhuang', '现货'],
      ]
    }, {
      id: 'mopian',
      name: '老石磨片铺路踏步石',
      disc: '现货',
      images: [
        ['../images/sp/mopian_1.jpg', 'mopian', '现货'],
        ['../images/sp/mopian_2.jpg', 'mopian', '现货'],
        ['../images/sp/mopian_3.jpg', 'mopian', '现货'],
        ['../images/sp/mopian_4.jpg', 'mopian', '现货'],
      ]
    }, {
      id: 'liushui',
      name: '流水摆件',
      disc: '现货',
      images: [
        ['../images/sp/liushui_1.jpg', 'liushui', '现货'],
        ['../images/sp/liushui_2.jpg', 'liushui', '现货'],
        ['../images/sp/liushui_3.jpg', 'liushui', '现货'],
        ['../images/sp/liushui_4.jpg', 'liushui', '现货'],
        ['../images/sp/liushui_5.jpg', 'liushui', '现货'],
        ['../images/sp/liushui_6.jpg', 'liushui', '现货'],
      ]
    }, {
      id: 'fanggushi',
      name: '仿古石雕',
      disc: '现货',
      images: [
        ['../images/sp/fanggushi_1.jpg', 'fanggushi', '现货'],
        ['../images/sp/fanggushi_2.jpg', 'fanggushi', '现货'],
        ['../images/sp/fanggushi_3.jpg', 'fanggushi', '现货'],
        ['../images/sp/fanggushi_4.jpg', 'fanggushi', '现货'],
      ]
    }, {
      id: 'hanbaiyushi',
      name: '汉白玉狮子',
      disc: '现货',
      images: [
        ['../images/sp/hanbaiyushi_1.jpg', 'hanbaiyushi', '现货'],
        ['../images/sp/hanbaiyushi_2.jpg', 'hanbaiyushi', '现货'],
        ['../images/sp/hanbaiyushi_3.jpg', 'hanbaiyushi', '现货'],
        ['../images/sp/hanbaiyushi_4.jpg', 'hanbaiyushi', '现货'],
      ]
    }, {
      id: 'taoguan',
      name: '玻璃钢大陶罐',
      disc: '支持定做',
      images: [
        ['../images/sp/taoguan_1.jpg', 'taoguan', '支持定做'],
        ['../images/sp/taoguan_2.jpg', 'taoguan', '支持定做'],
      ]
    }
  ]
  let str = '';
  for (let i = 0; i < lists.length; i++) {
    str += `<div class="types">`;
    str += `<div class="title">
                <text></text>
                <text>${lists[i].name}</text>
                <text></text>
            </div>`;
    let sss = `<div class="content">`;
    for (let j = 0; j < lists[i].images.length; j++) {
      sss += `<div>
                    <img src="${lists[i].images[j][0]}"/>
                    <div>
                        <text>${lists[i].images[j][2]}</text>
                    </div>
                </div>`;
    }
    sss += `</div>`;
    str += sss;
    str += `</div>`;
  }
  $('.center').html(str)
});//$
