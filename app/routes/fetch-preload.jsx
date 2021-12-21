import React, {useState} from 'react';

export default function FetchPage() {
	const [data, setData] = useState(null);

	const getData = async (event) => {
		event.preventDefault()
		const response = await fetch('/api.json');
		const json = await response.json();
		setData(json);
	}

	return (
		<>
			<h1>Fetch preload</h1>
			<button onClick={getData}>{'Get Data'}</button>
			<a href="/">Go back</a>
			<br/>
			<link rel="prefetch" href="/api.json" as="fetch" type="application/json" />
			{data &&
				<p>{JSON.stringify(data)}</p>
			}
		</>
	);
}
