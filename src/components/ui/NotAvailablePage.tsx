import { FC } from "react";

interface PropsType {
  title: string;
}

const NotAvailablePage: FC<PropsType> = ({ title }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        {title} Page Not Available
      </h2>
      <p className="text-gray-600 mb-4">
        Sorry, the page you are looking for is not available at the moment.
        Please try again later.
      </p>
      <a href="/" className="text-blue-500 hover:underline">
        Go back to the homepage
      </a>
    </div>
  );
};

export default NotAvailablePage;
