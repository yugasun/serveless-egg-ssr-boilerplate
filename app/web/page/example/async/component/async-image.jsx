import React, { Component } from 'react';
import Logo from '../../../../asset/images/react.png';
export default class AsyncImage extends Component {
  render() {
    return <div><img src="https://yugasun.com/static/avatar.jpg" /><div>这是异步加载的内容</div></div>
  }
}