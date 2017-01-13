import React, { Component } from 'react';
import Sidebar from 'react-side-bar';
import './Nav-icon.css';
import './Menu.css';
import MenuItems from './MenuItems';


class Menu extends Component {

  constructor(props) {
    super(props);
    this.state = {
      barOpened: false,
      duration: 150,
      fx: 'cubic-bezier(0, 1, 0.85, 1)',
      mode: 'over',
      side: 'left',
      size: 256,
      tolerance: 70,
      touch: true,
      touchSize: 80
    };
  }

  toggleBar() {
    this.setState({ barOpened: !this.state.barOpened });
  }

  onOpen() {
    this.setState({ barOpened: true });
  }

  onClose() {
    this.setState({ barOpened: false });
  }

  render(){

    const { barOpened, duration, fx, mode, side, size, tolerance, touch, touchSize } = this.state;
    const navIconClassName = [ 'nav-icon' ];

    if (barOpened) {
       navIconClassName.push('open');
     }
    const bar = (<div className='side'><MenuItems child={this.props.child} /></div>);
    const topBar = (<div className='topBar'>
      <div className='left'>
        <div
          className={navIconClassName.join(' ')}
          onClick={this.toggleBar.bind(this)}>
          <span/><span/><span/><span/>
        </div>

      </div>
      <div className='center'>Infinity Makers</div>
      <div className='right'></div>
    </div>);

    const sideBarProps = {
      bar: bar,
      duration: duration,
      fx: fx,
      mode: mode,
      opened: barOpened,
      onOpen: this.onOpen.bind(this),
      onClose: this.onClose.bind(this),
      side: side,
      size: size,
      tolerance: tolerance,
      topBar: topBar,
      touch: touch,
      touchSize: touchSize,
      veilStyle: {
        opacity: 0.4
      }
    };

  var childOfChild = '';

    if (this.props.child.props.children) {
      childOfChild = this.props.child.props.children;
    }

    return(
      <Sidebar {...sideBarProps}>
        <div style={{color: "black"}}>{childOfChild}</div>
      </Sidebar>
    );
  }
}


export default Menu;
