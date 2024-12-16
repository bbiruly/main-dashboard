import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import dashboard from "./assets/dashboard.png"
import outlook from "./assets/outlook.png"
import "./App.css";

function App() {
  return (
    <><div className="h-screen bg-gray-100">

      <div className="flex justify-center items-center py-6">
        <h1 className="text-5xl font-bold text-blue-800 mt-40">
          Roc8 Fullstack Challenge
        </h1>
      </div>

      <div className="flex items-center justify-center p-4 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
          {/* Card 1 */}
          <a
            href="https://outlook-clone-one.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
          >
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <h2 className="text-lg font-semibold text-gray-800 text-center mb-4">
                Outlook Clone
              </h2>
              <img
                src={outlook}
                alt="React Logo"
                className="w-full h-50 mx-auto mb-4"
              />
               <p className="text-gray-600 text-center mt-2">
            Read the emails, categorized into unread, read, and favorites.
            </p>
            </div>
           
          </a>

          {/* Card 2 */}
          <a
            href="https://dashbord-alpha.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
          >
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <h2 className="text-lg font-semibold text-gray-800 text-center mb-4">
                Visualize Dashbaord
              </h2>
              <img
                src={dashboard}
                alt="Vite Logo"
                className="w-full h-50 mx-auto mb-4"
              />
              <p className="text-gray-600 text-center mt-2">
              Analyze the dashboard statistics and graphs using filters.
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>

    </>
  );
}

export default App;
