/* eslint-disable no-unused-vars */
import React from 'react';
import DiskList from './../components/DiskList';
import { connect } from 'react-redux'
import { UPDATE_DISKS } from './../constant/constant';

const mapStateToProps = state => ({
	currentServer: state.currentServer,
});

const mapDispatchToProps = dispatch => ({
	onInit: (id) => dispatch({ type: UPDATE_DISKS, id})
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(DiskList)