/*
 * @Author: Beau pg.beau@outlook.com
 * @Date: 2023-04-25 18:28:34
 * @LastEditors: Beau pg.beau@outlook.com
 * @LastEditTime: 2023-04-25 19:51:54
 * @FilePath: \workspace\React-The-Complete-Guide\26-Testing React Apps\src\components\Greeting.test.js
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import Greeting from './Greeting';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Greeting component', () => {
  // describe() 是一個測試集合，可以包含多個測試
  test('renders Hello World as a text', () => {
    // test() 是一個測試，可以包含多個斷言
    // Arrange
    render(<Greeting />); // render() 會將元件渲染到 DOM 中

    // Act
    // ... nothing

    // Assert
    const helloWorldElement = screen.getByText('Hello World', { exact: false }); // screen 是一個測試工具，可以用來查詢 DOM
    expect(helloWorldElement).toBeInTheDocument(); // expect() 會對結果進行斷言
  });

  test('renders good to see you if the button was NOT clicked', () => {
    render(<Greeting />);

    const outputElement = screen.getByText('good to see you', { exact: false });

    expect(outputElement).toBeInTheDocument();
  });

  test('renders changed if the button was clicked', () => {
    render(<Greeting />);

    const buttonElement = screen.getByRole('button'); // getByRole() 會根據元件的角色來查詢元件
    userEvent.click(buttonElement); // userEvent 是一個模擬用戶操作的工具，可以用來模擬點擊、輸入等操作

    const outputElement = screen.getByText('Changed', { exact: false });
    expect(outputElement).toBeInTheDocument();
  });

  test('does not render good to see you if the button was clicked', () => {
    render(<Greeting />);

    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);

    const outputElement = screen.queryByText('good to see you', {
      exact: false,
    }); // queryByText() 會根據文字內容來查詢元件，如果找不到會返回 null
    expect(outputElement).toBeNull();
  });
});
