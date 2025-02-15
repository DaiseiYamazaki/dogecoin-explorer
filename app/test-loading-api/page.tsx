async function getData() {
  const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://dogecoin-explorer.vercel.app";
  
  try {
    const res = await fetch(`${API_URL}/api/slow-data`);
    if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
    return await res.json();
  } catch (error) {
    console.error("API fetch error:", error);
    return { error: "Failed to fetch data" };
  }
}

export default async function TestLoadingAPIPage() {
  const data = await getData();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4 text-[#c2a633]">API Loading Test</h1>
      {data.error ? (
        <p className="text-red-500">Error: {data.error}</p>
      ) : (
        <pre className="bg-gray-100 p-4 rounded">{JSON.stringify(data, null, 2)}</pre>
      )}
    </div>
  );
}