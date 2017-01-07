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

let ImgFigure = React.createClass({
  render: function() {
    return (
      <figure className="img-figure">
        <img src={this.props.data.imageUrl}
             alt={this.props.data.title}/>
        <figcaption>
          <h2 className="img-title">{this.props.data.title}</h2>
        </figcaption>
      </figure>
    )
  }
})
let GalleryByReactApp = React.createClass({

  render: function() {

    let controllerUnits = [],
      imgFigures = [];

    imageData.forEach(function(value) {
      imgFigures.push(<ImgFigure data={value}/>);
    });
    return (
      <section className="stage">
        <section className="img-sec">
          {imgFigures}
        </section>
        <nav className="controller-nav">
          {controllerUnits}
        </nav>
      </section>
    )
  }
});

export default GalleryByReactApp;
