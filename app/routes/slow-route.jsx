export async function loader() {
	await new Promise(resolve => setTimeout(resolve, 2000));

	return null;
}

// export function headers({ loaderHeaders, parentHeaders }) {
//   return {
//     "Cache-Control": "max-age=300, s-maxage=3600"
//   };
// }

export default function Index() {
  return (
    <h1>
		Welcome to the slow route! <a href="/">Go back</a>
	</h1>
  );
}
