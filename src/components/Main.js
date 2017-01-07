require('normalize.css/normalize.css');
require('styles/main.scss');

import React from 'react';

let yeomanImage = require('../images/yeoman.png');
let imageData   = require('../data/imageData.json');
imageData = (function genImageData(imgList) {
  for(let i = 0; i < imgList.length; i++) {
    var singleImageData = imgList[i];
    singleImageData.imageUrl = require('../images/' + singleImageData.fileName);
    imgList[i] = singleImageData;
  }
  return imgList;
})(imageData);
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
