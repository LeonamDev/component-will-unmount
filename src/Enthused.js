import React from 'react';

export class Enthused extends React.Component {
  componentDidMount() {
    this.interval = setInterval(() => {
      this.props.addText('!');
    }, 15);
  }
  
  componentWillUnmount(prevProps, prevState) {
  clearInterval(this.interval);
    alert("component will unmount");
}

  render() {
    return (
      <button onClick={this.props.toggle}>
        Stop!
      </button>
    );
  }
}
