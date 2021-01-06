<<<<<<< HEAD
import React, { Component } from 'react';

export default class CardFront extends Component {
	render() {
		return (
			<div
				className="card-front"
				style={{ backgroundImage: `url(${this.props.poster})` }}
			/>
		);
	}
}
=======
import React, { Component } from 'react';

export default class CardFront extends Component {

  render() {
    return (
      <div className="card-front" style={{backgroundImage: `url(${'prop'})`}}>
      </div>
    )
  }
}
>>>>>>> 13a634afb48810420cf360cd2562775109bcd942
