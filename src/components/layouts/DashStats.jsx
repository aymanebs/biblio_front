

const StatCard = ({ title, total, bgColor }) => (
  <div className="bg-white rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-100 cursor-pointer">
    <div className={`h-20 ${bgColor} flex items-center justify-between`}>
      <p className="mr-0 text-white text-lg pl-5">{title}</p>
    </div>
    <div className="flex justify-between px-5 pt-6 mb-2 text-sm text-gray-600">
      <p>TOTAL</p>
    </div>
    <p className="py-4 text-3xl ml-5">{total}</p>
    <hr />
  </div>
);

const DataTable = ({ title, headers, data, columns }) => (
  <div className="bg-white shadow-xl h-full">
    <div className="w-11/12 mx-auto">
      <div className="bg-white my-6">
        <table className="text-left w-full border-collapse">
          <thead>
            <tr>
              {headers.map((header, index) => (
                <th key={index} className="py-4 px-6 bg-purple-400 font-bold uppercase text-sm text-white border-b border-grey-light text-center">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr key={rowIndex} className="hover:bg-grey-lighter">
                {columns.map((column, colIndex) => (
                  <td key={colIndex} className="py-4 px-6 border-b border-grey-light text-center">
                    {row[column]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

export const DashStats = () => {
  const stats = [
    { title: "BT SUBSCRIBERS", total: "20,456", bgColor: "bg-red-400" },
    { title: "BT ACTIVE SUBSCRIBERS", total: "19,694", bgColor: "bg-blue-500" },
    { title: "BT OPT OUTS", total: "711", bgColor: "bg-purple-400" },
    { title: "BT TODAY'S SUBSCRIPTION", total: "0", bgColor: "bg-purple-900" }
  ];

  const keywordData = [
    { keyword: "Bible", entries: "11980" },
    { keyword: "Blah", entries: "340" },
    { keyword: "Blah", entries: "901" },
    { keyword: "Blah", entries: "11950" },
    { keyword: "Blah", entries: "459" }
  ];

  const msisdnData = [
    { msisdn: "26809304030", entries: "495,455" },
    { msisdn: "26809304030", entries: "495,455" },
    { msisdn: "26809304030", entries: "495,455" },
    { msisdn: "26809304030", entries: "32,333" },
    { msisdn: "26809304030", entries: "31,199" }
  ];

  const pointsData = [
    { msisdn: "28679609009", points: "11,290" },
    { msisdn: "28679609009", points: "9,230" },
    { msisdn: "28679609009", points: "234" },
    { msisdn: "28679609009", points: "56,230" },
    { msisdn: "28679609009", points: "323" }
  ];

  return (
    <>
      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      {/* Tables Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        <DataTable
          headers={["KEYWORDS", "TOTAL ENTRIES"]}
          data={keywordData}
          columns={["keyword", "entries"]}
        />
        <DataTable
          headers={["MSISDN", "ENTRIES"]}
          data={msisdnData}
          columns={["msisdn", "entries"]}
        />
        <DataTable
          headers={["MSISDN", "POINTS"]}
          data={pointsData}
          columns={["msisdn", "points"]}
        />
      </div>
      </>
  );
};

export default DashStats;