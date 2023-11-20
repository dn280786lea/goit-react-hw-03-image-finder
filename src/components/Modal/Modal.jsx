import { Component } from 'react';

export class Modal extends Component {
  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.closeModal('');
    }
  };
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }
  handleClick = e => {
    e.target === e.currentTarget && this.props.onClose();
  };

  render() {
    return (
      <div onClick={this.handleClick}>
        <img src={this.props.url} alt="modal_img" />
      </div>
    );
  }
}
