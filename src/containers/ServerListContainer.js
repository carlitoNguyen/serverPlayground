/* eslint-disable no-unused-vars */
import React from 'react';
import ServerList from './../components/ServerList';
import { connect } from 'react-redux'
import { UPDATE_SERVERS } from './../constant/constant';

const mapStateToProps = state => ({
	servers: state.servers,
});

const mapDispatchToProps = dispatch => ({
	onInit: () => dispatch({ type: UPDATE_SERVERS})
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ServerList)