import React from 'react';
import "./footer.scss"

class Footer extends React.Component {
  constructor() {
    super();
    this.state = { someKey: 'someValue' };
  }

  render() {
    return (
        <footer>
            <div className='infoWrap'>
                <label>Powerd by PGS</label>
            </div>
        </footer>
    );
  }

  
}

export default Footer;
