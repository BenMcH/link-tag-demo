import React, {useState} from 'react';

export default function VideoPage() {
  const [show, setShow] = useState(false);

  return (
	<>
	  <h1>Photo Page</h1>
	  <button onClick={() => setShow(!show)}>{show ? 'Hide' : 'Show'}</button>
	  <a href="/">Go back</a>
	  <br/>
	  <link rel="prefetch" href="https://effigis.com/wp-content/uploads/2015/02/Infoterra_Terrasar-X_1_75_m_Radar_2007DEC15_Toronto_EEC-RE_8bits_sub_r_12.jpg" as="image" />
	  {show &&
		<img width="1000" src="https://effigis.com/wp-content/uploads/2015/02/Infoterra_Terrasar-X_1_75_m_Radar_2007DEC15_Toronto_EEC-RE_8bits_sub_r_12.jpg" alt="large photo" />
	  }
	</>
  );
}
