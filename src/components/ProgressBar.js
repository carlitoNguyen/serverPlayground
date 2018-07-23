import React from 'react'
import { Badge,ProgressBar } from 'react-bootstrap';
import { bytesToSize } from './../utils/utils';

class ProgressUsage extends React.Component {

	getPercent(num, total) {
		return Math.round(num * 100) / total;
	}

	render() {
		return (
			<div className="progress-bar-container">
				<ProgressBar>
					{ this.props.stored > 0 && <ProgressBar now={this.getPercent(this.props.stored, this.props.total)} key={1} label={bytesToSize(this.props.stored)}/>}
					{ this.props.used > 0 && <ProgressBar bsStyle="info" now={this.getPercent(this.props.used, this.props.total)} key={2} label={bytesToSize(this.props.used)}/>}
					{ this.props.available > 0 && <ProgressBar className={'light'} now={this.getPercent(this.props.available, this.props.total)} key={3} label={bytesToSize(this.props.available)}/>}
				</ProgressBar>
				<div className="label">{bytesToSize(this.props.total)}</div>
			</div>
		)
	}
}

export default ProgressUsage;