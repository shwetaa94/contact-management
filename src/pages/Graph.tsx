import { useQuery } from "@tanstack/react-query";

import LineChart from "../components/graph/LineChart";
import WorldMap from "../components/graph/WorldMap";
import CovidCase from "../components/graph/CovidCase";

const ChartsAndMaps = () => {
  const getChartData = async () => {
    const data = await fetch(
      "https://disease.sh/v3/covid-19/historical/all?lastdays=all"
    );
    return await data.json();
  };

  const getMapData = async () => {
    const data = await fetch("https://disease.sh/v3/covid-19/countries");
    return await data.json();
  };

  const getWorldwideData = async () => {
    const data = await fetch("https://disease.sh/v3/covid-19/all");
    return await data.json();
  };

  const { data: LineChartData, isFetching: isLineChartDataFetching } = useQuery(
    {
      queryKey: ["chartData"],
      queryFn: getChartData,
    }
  );

  const { data: mapData, isFetching: isMapDataFetching } = useQuery({
    queryKey: ["mapData"],
    queryFn: getMapData,
  });

  const { data: worldWideData, isFetching: isWorldWideDataFetching } = useQuery(
    {
      queryKey: ["worlWideData"],
      queryFn: getWorldwideData,
    }
  );

  // if data has been not loaded display a loader
  if (isMapDataFetching || isLineChartDataFetching || isWorldWideDataFetching) {
    return (
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
        <span className="sr-only">Loading...</span>
      </div>
    );
  }

  return (
    <div className="h-screen overflow-y-scroll bg-blue-100 border-box relative  flex w-full flex-1 flex-col items-center gap-20 px-4 md:px-10 ">
      {/* render worldWide data if the data has been fetched */}
      {worldWideData && (
        <div className="bg-white flex w-full flex-col items-center gap-4 rounded-lg py-5 shadow-lg ">
          <h1 className="text-2xl font-semibold">Worldwide cases</h1>
          <div className="grid w-full grid-cols-1 gap-4 p-4 sm:grid-cols-2 lg:grid-cols-4 ">
            <CovidCase title="total cases" numbers={worldWideData.cases} />
            <CovidCase title="active" numbers={worldWideData.active} />
            <CovidCase title="deaths" numbers={worldWideData.deaths} />
            <CovidCase title="recovered" numbers={worldWideData.recovered} />
          </div>
        </div>
      )}

      {/*render  Line chart component if LineChartData has been fetched*/}
      {LineChartData && <LineChart covidData={LineChartData} />}
      {/*render  Map chart component if mapData has been fetched*/}
      {mapData && <WorldMap mapData={mapData} />}
    </div>
  );
};

export default ChartsAndMaps;
