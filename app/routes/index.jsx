export default function Index() {
  return (
    <>
      <h1>Welcome to Remix</h1>
      <link rel="prefetch" href="/slow-route" as="document" type="text/html" />
      <div className="flex-list">
        <a href="/slow-route">Slow route</a>
        <a href="/photo-preload">Asset Preload</a>
        <a href="/fetch-preload">Fetch Preload</a>
      </div>
    </>
  );
}
