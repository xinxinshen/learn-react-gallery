/**
 * Created by sxx on 2017/1/7.
 */


require('normalize.css');
require('styles/main.scss');

import React from 'react';

// 获取图片相关的数据
let imageData   = require('../data/imageData.json');

// 只使用一次的函数放到自执行函数中
// 利用自执行函数，将图片名信息转成图片URL路径信息
imageData = (function genImageData(imgList) {
  for(let i = 0; i < imgList.length; i++) {
    var singleImageData = imgList[i];
    singleImageData.imageUrl = require('../images/' + singleImageData.fileName);
    imgList[i] = singleImageData;
  }
  return imgList;
})(imageData);

let GalleryByReactApp = React.createClass({
  render: function() {
    return (
      <section className="stage">
        <section className="img-sec"></section>
        <nav className="controller-nav"></nav>
      </section>
    )
  }
})
class AppComponent extends React.Component {
  render() {
    return (
      <section className="stage">
        <section className="img-sec"></section>
        <nav className="controller"></nav>
      </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
