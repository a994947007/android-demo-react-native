import React, { memo } from 'react';
import RCTWrapReactEditView from '../components/RCTWrapReactEditView';

const HeaderText = memo((props) => {
    return   <RCTWrapReactEditView {...props}/>;
});

export default HeaderText;