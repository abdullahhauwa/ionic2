import React from "react";
import {Virtuoso} from 'react-virtuoso';


const LargeList = () => {
    const items = Array.from({length: 100}, (_, index) => `Item ${index + 1}`);

    return(
        <Virtuoso
          style={{
            height: '250px',
            width: '300px',
            margin: 'auto',
            backgroundColor: 'hotPink',
            color: 'black',
            textAlign: 'center',
            // padding: '10px',
            marginTop: '90px',
          }}
          totalCount={items.length}
          itemContent={(index) => <div>{items[index]}</div>}
        />
    );
};

export default LargeList;