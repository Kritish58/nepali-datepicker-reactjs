import React from 'react';

import Calendar from '@sbmdkl/nepali-datepicker-reactjs';
import '@sbmdkl/nepali-datepicker-reactjs/dist/index.css';

class App extends React.Component {
	componentDidMount() {}
	state = {
		date: ''
	};
	onChange = ({ bsDate, adDate }) => {
		console.log(adDate);
		this.setState({ date: bsDate });
	};
	render() {
		return (
			<div style={{ marginLeft: 100 }}>
				<Calendar onChange={this.onChange} language='en' theme='deepdark' dateFormat='DDDD, YYYY-MM-DD' />
			</div>
		);
	}
}

export default App;
