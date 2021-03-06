```
$$\   $$\                 $$\                               
$$ |  $$ |                $$ |                              
$$ |  $$ | $$$$$$\   $$$$$$$ | $$$$$$\   $$$$$$\  $$$$$$$\  
$$$$$$$$ |$$  __$$\ $$  __$$ |$$  __$$\ $$  __$$\ $$  __$$\ 
$$  __$$ |$$$$$$$$ |$$ /  $$ |$$ |  \__|$$ /  $$ |$$ |  $$ |
$$ |  $$ |$$   ____|$$ |  $$ |$$ |      $$ |  $$ |$$ |  $$ |
$$ |  $$ |\$$$$$$$\ \$$$$$$$ |$$ |      \$$$$$$  |$$ |  $$ |
\__|  \__| \_______| \_______|\__|       \______/ \__|  \__|
                                                                                                                                     
```


[View the original CodePen that started it](http://codepen.io/garetmckinley/pen/qqWrYP/).


## Installation

    npm install --save hedron
or better yet

    yarn add hedron


## Example Usage

``` jsx
import React, { Component } from 'react';
import { Row, Column, utils } from 'hedron';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Row>
          <Column sm={8} smShift={2} lg={6} lgShift={3}>
            <h1>This is a column that's centered using the shift props</h1>
          </Column>
        </Row>
        <Row>
          <Column fluid sm={4}>
            <h1>Fluid Columns</h1>
          </Column>
          <Column fluid sm={4}>
            <p>It's a 12 column layout by default.</p>
          </Column>
          <Column fluid sm={4}>
            <Row divisions={24}>
              <Column sm={24}>
                <p>
                  But you can change the amount of columns by adding the
                  `divisions` property to a Row.
                </p>
                <p>It's fully embeddable as well!</p>
              </Column>
            </Row>
          </Column>
        </Row>
      </div>
    );
  };
}
```
