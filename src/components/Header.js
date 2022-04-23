import React, { Component } from 'react';

class Header extends Component {
  render() {

    if (this.props.data) {
      var name = this.props.data.name;
      var description = this.props.data.description;
      var networks = this.props.data.social.map(function (network) {
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    }

    return (
      <header id="home">

        <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline">I'm {name}.</h1>
            <h3>an Ottawa based <span>Full-Stack Developer</span>.<br /><br />
              {description}.</h3>
            <hr />
            <ul className="social">
              {networks}
            </ul>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
        </p>

      </header>
    );
  }
}

export default Header;
