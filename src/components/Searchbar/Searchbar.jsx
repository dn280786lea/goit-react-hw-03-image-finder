import { Component } from 'react';

export class Searchbar extends Component {
  state = {
    q: '',
  };
  handleChange = evt => {
    this.setState({ q: evt.target.value });
  };
  handleSubmit = evt => {
    evt.preventDefault();
    this.props.onSubmit(this.state.q);
  };

  render() {
    return (
      <header className="searchbar">
        <form className="form">
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>
          <input
            placeholder="search"
            name="search"
            className="input"
            type="text"
            autoComplete="off"
            defaultValue={this.state.q}
          />
        </form>
      </header>
    );
  }
}
