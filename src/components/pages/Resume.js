import React from 'react';
import resume  from '../../assets/MyResume.pdf'

const Resume = () => {
      const handleClick = () => {
       const link = document.createElement('a');
       link.href = resume;
       link.download ='MyResume.pdf';
       link.click();
      }
  return (

<>       
<div>
 <h1>Resume </h1>
      <h2>Looking for a resume?</h2>
  </div>
  <div>
      <button class="btn btn-primary" onClick={handleClick}>Download Here</button>
</div>
</> 

  );

}

export default Resume