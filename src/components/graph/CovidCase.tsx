import React from "react";

// Define the interface for the props that will be passed to the CovidCase component
interface CovidCaseProps {
  title: string; // Title of the card, e.g., "total cases", "deaths", etc.
  numbers: number; // Numeric value to be displayed on the card
}

// Function to determine the color class based on the provided title
const determineColor = (title: string): string => {
  switch (title) {
    case "total cases":
      return "text-yellow-500";
    case "deaths":
      return "text-red-500";
    case "active":
      return "text-blue-500";
    default:
      return "text-green-500";
  }
};

// Functional component to display a dashboard card
const CovidCase: React.FC<CovidCaseProps> = ({ title, numbers }) => {
  return (
    <div className="flex flex-col gap-4 rounded-lg bg-blue-50 p-4 shadow-md transition-all delay-150 duration-300 ease-in-out hover:scale-110 hover:cursor-pointer">
      {/* Display the title with capitalized first letter */}
      <div className="text-xl font-semibold capitalize">{title}</div>
      {/* Display the numbers with appropriate color based on the title */}
      <div
        className={`text-4xl font-semibold md:text-2xl ${determineColor(
          title
        )}`}
      >
        {numbers}
      </div>
    </div>
  );
};

export default CovidCase;
