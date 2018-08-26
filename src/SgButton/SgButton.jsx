import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import './index.less';

export default class SgButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    componentDidMount() {
    }
    componentWillReceiveProps({  }) {
    }
    render() {
        const { onClick, key, children } = this.props;
        console.log('children', children);
        
        if (!children) {
            throw new TypeError('children is required!');
        }
        return (
            <button onClick={onClick} key={key} >{ children }</button>
        );
    }
}
Demo.defaultProps = {
    key: shortid.generate(),
    onClick: () => {},
};
Demo.propTypes = {
    key: PropTypes.number,
    onClick: PropTypes.func,
};