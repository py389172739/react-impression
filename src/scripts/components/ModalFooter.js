import classnames from 'classnames';
import React, { PropTypes } from 'react';

/**
 * ModalFooter组件.
 */
const ModalFooter = ({ className, children, ...others }) => {
    return (
        <div {...others} className={classnames('modal-footer', className)}>
            {children}
        </div>
    );
};

ModalFooter.ModalFooter.propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
};

export default ModalFooter;
