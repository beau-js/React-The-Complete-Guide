/*
 * @Author: Beau pg.beau@outlook.com
 * @Date: 2017-10-24 17:48:46
 * @LastEditors: Beau pg.beau@outlook.com
 * @LastEditTime: 2023-04-24 02:52:28
 * @FilePath: \workspace\React-The-Complete-Guide\24-animations--01-start\src\components\Modal\Modal.js
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import React from 'react';
import CSSTransition from 'react-transition-group/CSSTransition'; 

import './Modal.css';

const animationTiming = {
  //定义一个对象，用来存储动画的持续时间
  enter: 400, // enter 是进入动画的持续时间
  exit: 1000, // exit 是退出动画的持续时间
};

const modal = (props) => {
  // const cssClasses = ['Modal', props.show ? 'ModalOpen' : 'ModalClosed'];

  return (
    <CSSTransition
      in={props.show} // in 是动画的状态
      timeout={animationTiming} // timeout 是动画的持续时间，这里我们使用了一个对象来存储动画的持续时间
      mountOnEnter // mountOnEnter 是在动画开始时挂载组件
      unmountOnExit // unmountOnExit 是在动画结束时卸载组件
      classNames={{ // classNames 是用来自定义动画的类名的
        enter: '', 
        enterActive: 'ModalOpen', 
        exit: '',
        exitActive: 'ModalClosed',
      }}
    >
      <div className="Modal">
        <h1>A Modal</h1>
        <button className="Button" onClick={props.closed}>
          Dismiss
        </button>
      </div>
    </CSSTransition>
  );
};

export default modal;
