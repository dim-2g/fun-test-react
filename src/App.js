import React from 'react';
import './App.css';
import { initialState } from './store/initialstate';
import { Card } from './components/card';

class App extends React.Component {
  constructor() {
      super();
      this.state = initialState;
      this.onMouseLeave = this.onMouseLeave.bind(this);
      this.onClickHandler = this.onClickHandler.bind(this);
      this.onMouseEnter = this.onMouseEnter.bind(this);
  }
  onMouseLeave(e, id) {
      const packages = this.state.packages.map(item => {
          if (item.id == id) {
              item.hover = true;
          }
          return item;
      });
      this.setState({packages});
  }
  onMouseEnter(e, id) {
      const packages = this.state.packages.map(item => {
          if (item.id == id) {
              item.hover = false;
          }
          return item;
      });
      this.setState({packages});
  }
  onClickHandler(e, id) {
      e.preventDefault();
      const packages = this.state.packages.map(item => {
          if (item.id == id) {
              item.selected = !item.selected;
          }
          return item;
      });
      this.setState({packages});
  }
  render() {
    return (
        <div className="container">
            <div className="packages">
                <div className="packages__header">Ты сегодня покормил кота?</div>
                <div className="packages__grid">
                {this.state.packages.map(item => (
                    <Card
                        key={item.id}
                        onLeave={this.onMouseLeave}
                        onEnter={this.onMouseEnter}
                        onClick={this.onClickHandler}
                        item={item}
                    />
                ))}
                </div>
            </div>
        </div>
    );
  }
}

export default App;
