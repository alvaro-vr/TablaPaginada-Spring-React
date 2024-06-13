export default function Table({ data }){

    if (!data || !data.length) {
        return <p>No data available</p>;
    }

    return (
        <table className="w-auto text-center text-sm font-light bg-slate-800">
          <thead className="border-b bg-neutral-800 font-medium text-white dark:border-neutral-500 dark:bg-neutral-900">
            <tr>
              <th className=" px-6 py-4">ID</th>
              <th className=" px-6 py-4">Name</th>
              <th className=" px-6 py-4">Birth Date</th>
              <th className=" px-6 py-4">Salary</th>
              <th className=" px-6 py-4">Married</th>
            </tr>
          </thead>
          <tbody>
            {data.map((value) => (
              <tr key={value.id} className="border-b dark:border-neutral-500">
                <td className="whitespace-nowrap  px-6 py-4">{value.id}</td>
                <td className="whitespace-nowrap  px-6 py-4">{value.name}</td>
                <td className="whitespace-nowrap  px-6 py-4">{value.birthDate}</td>
                <td className="whitespace-nowrap  px-6 py-4">{value.salary}</td>
                <td className="whitespace-nowrap  px-6 py-4">{value.married ? "✅" : "❌"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      );
}