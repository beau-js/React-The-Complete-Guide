/*
 * @Author: Beau pg.beau@outlook.com
 * @Date: 2017-10-24 17:48:46
 * @LastEditors: Beau pg.beau@outlook.com
 * @LastEditTime: 2023-04-24 02:06:45
 * @FilePath: \workspace\React-The-Complete-Guide\24-animations--01-start\src\App.js
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import React, { Component } from 'react';
import Transition from 'react-transition-group/Transition';

import './App.css';
import Modal from './components/Modal/Modal';
import Backdrop from './components/Backdrop/Backdrop';
import List from './components/List/List';

class App extends Component {
  state = {
    modalIsOpen: false,
    showBlock: false,
  };

  showModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
        <button
          className="Button"
          onClick={() =>
            this.setState((prevState) => ({ showBlock: !prevState.showBlock }))
          }
        >
          Toggle
        </button>

        <br />

        <Transition
          in={this.state.showBlock} // in 是动画的状态
          timeout={1000} // timeout 是动画的持续时间
          mountOnEnter // mountOnEnter 是在动画开始时挂载组件
          unmountOnExit // unmountOnExit 是在动画结束时卸载组件
          onEnter={() => console.log('onEnter')} 
          onEntering={() => console.log('onEntering')} 
          onEntered={() => console.log('onEntered')} 
          onExit={() => console.log('onExit')} // 
          onExiting={() => console.log('onExiting')} 
          onExited={() => console.log('onExited')} 
        >
          {(
            state // state 是动画的状态，有 entering, entered, exiting, exited 四种状态
          ) => (
            <div
              style={{
                backgroundColor: 'red',
                width: 100,
                height: 100,
                margin: 'auto',
                transition: 'opacity 1s ease-out',

                opacity: state === 'exiting' ? 0 : 1, // 根据动画的状态来设置透明度
              }}
            ></div>
          )}
        </Transition>

        <Modal show={this.state.modalIsOpen} closed={this.closeModal} />

        {this.state.modalIsOpen ? <Backdrop show /> : null}

        <button className="Button" onClick={this.showModal}>
          Open Modal
        </button>

        <h3>Animating Lists</h3>

        <List />
      </div>
    );
  }
}

export default App;
