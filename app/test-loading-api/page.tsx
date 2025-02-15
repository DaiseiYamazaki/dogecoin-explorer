async function getData() {
  const res = await fetch("http://localhost:3000/api/slow-data")
  return res.json()
}

export default async function TestLoadingAPIPage() {
  const data = await getData()

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4 text-[#c2a633]">API Loading Test</h1>
      <pre className="bg-gray-100 p-4 rounded">{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}

