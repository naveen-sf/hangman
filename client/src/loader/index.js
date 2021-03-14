import React from 'react';
import './loader.scss';
import { Spin } from 'antd';

// component to show the loader when user fetch data from server
const Loader = () => <div className="loading"><Spin /></div>

export default Loader;