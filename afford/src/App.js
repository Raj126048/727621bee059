import React, { useState } from 'react';

import Main from './Main';


function App() {
 const [clicked,setClicked]= useState(0);
 const handleClick=()=>{
  setClicked(clicked+1);
 }

  return (
<>

<Main/>
</>
  );
}

export default App;
