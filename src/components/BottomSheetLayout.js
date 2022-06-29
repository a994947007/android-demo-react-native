import React, { memo } from 'react';
import ReactBottomSheetLayout from './ReactBottomSheetLayout';

const BottomSheetLayout = memo((props) => {
    return (
      <ReactBottomSheetLayout {...props} >
        {props?.children}
      </ReactBottomSheetLayout>
      );
});

export default BottomSheetLayout;