import React from 'react';

export default class CatchError extends React.Component {
  static getDerivedStateFromError(error) {
    return { error };
  }

  state = {
    error: null,
  };

  componentDidCatch(err) {
    console.error(err);
  }

  render() {
    if (this.state.error) {
      return (
        <p style={{color: '#ff0000'}}>{this.state.error.message}</p>
      );
    }

    return this.props.children;
  }
}