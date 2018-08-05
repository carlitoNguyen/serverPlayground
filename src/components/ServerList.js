/* eslint-disable no-unused-vars */
import React from 'react';
import { Badge, Table } from 'react-bootstrap';
import classNames from 'classnames';
import { getStatusClass, bytesToSize } from './../utils/utils';
import { Link } from 'react-router-dom';

class ServerList extends React.Component {

	componentDidMount() {
		this.props.onInit();
	}

	render() {
		return (
			<Table bordered condensed hover responsive>
				<thead>
				<tr>
					<th>Name</th>
					<th>Zone</th>
					<th>Hardware</th>
					<th>Capacity RAM</th>
					<th>Role</th>
				</tr>
				</thead>
				<tbody>
				{this.props.servers && this.props.servers.map((server, index) =>
					<tr key={index}>
						<td className={classNames(getStatusClass(server.status))}>
							<Link to={'/server/'+ server.id }>{server.name}</Link>
						</td>
						<td>{server.zone}</td>
						<td>{server.server_type}</td>
						<td>{bytesToSize(server.ram)}</td>
						<td>{server.roles.map((role, index) => <Badge
							key={index}>{role}</Badge>)}</td>
					</tr>
				)}
				</tbody>
			</Table>
		);
	}
}

export default ServerList;