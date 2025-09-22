import { FixedSizeList as List } from 'react-window';

 const MyList = ({ sampleData }) => 
    console.log("sampleData",sampleData)
  (


  <List
    height={400}
    itemCount={sampleData.length}
    itemSize={35}
    width={300}
  >
    {({ index, style }) => (
      <div style={style}>{sampleData[index].name}</div>
    )}
  </List>
);

export default MyList;