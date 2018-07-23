/* eslint-disable no-unused-vars */
import React from 'react';
import { Badge, Button, Table } from 'react-bootstrap';
import classNames from 'classnames';
import ProgressBar from './ProgressBar';
import { getStatusClass } from './../utils/utils';
import { bytesToSize } from '../utils/utils';

class DiskList extends React.Component {

	componentDidMount() {
		this.props.onInit(this.props.match.params.serverId);
	}

	render() {
		return (
			<div>
				<h3>{this.props.currentServer.name}</h3>
				<Table bordered condensed hover responsive>
					<thead>
					<tr>
						<th>Name</th>
						<th>Usage
							<div className="note">
								<Badge bsStyle="primary">STORED</Badge>
								<Badge bsStyle="info">USED</Badge>
								<Badge className="light">AVAILABLE</Badge>
							</div>

						</th>
					</tr>
					</thead>
					<tbody>
					{this.props.currentServer.disks && this.props.currentServer.disks.map((disk, index) =>
						<tr key={index}>
							<td className={classNames(getStatusClass(disk['_items'][0].status))}>{disk['_items'][0].name}</td>
							<td>
								<ProgressBar
									stored={parseInt(disk['_items'][0].diskspace_stored)}
									used={parseInt(disk['_items'][0].diskspace_used)}
									available={parseInt(disk['_items'][0].diskspace_available)}
									total={parseInt(disk['_items'][0].diskspace_stored) + parseInt(disk['_items'][0].diskspace_used) + parseInt(disk['_items'][0].diskspace_available)}/>
							</td>
						</tr>
					)}
					</tbody>
				</Table>
			</div>

		);
	}
}

export default DiskList;