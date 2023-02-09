import {
  BoltIcon,
  ExclamationTriangleIcon,
  SunIcon,
} from "@heroicons/react/24/outline";

function HomePage() {
  return (
    <div className="flex my-10  md:my-0 flex-col items-center justify-center min-h-screen px-2 text-black dark:text-white">
      <h1 className="text-5xl font-bold mb-20 tracking-wide">ChatGPT</h1>

      <div className="flex flex-col md:flex-row space-x-2 space-y-7 md:space-y-0 text-center">
        <div>
          <div className="flex flex-col items-center justify-center mb-5 space-y-2">
            <SunIcon className="h-8 w-8 text-yellow-400" />
            <h2>Examples</h2>
          </div>

          <div className="space-y-2">
            <p className="infoText">"Explain Something to me"</p>
            <p className="infoText">
              "What is the difference between a dog and a cat"
            </p>
            <p className="infoText">"What is the color of the sun"</p>
          </div>
        </div>

        <div>
          <div className="flex flex-col items-center justify-center mb-5 space-y-2">
            <BoltIcon className="h-8 w-8 text-yellow-500" />
            <h2>Capabilities</h2>
          </div>

          <div className="space-y-2">
            <p className="infoText">Change the ChatGPT Model to use</p>
            <p className="infoText">
              Messages are stored in Firebase's Firestore
            </p>
            <p className="infoText">
              Hot Toast notifications when ChatGPT is thinking!
            </p>
          </div>
        </div>

        <div>
          <div className="flex flex-col items-center justify-center mb-5 space-y-2">
            <ExclamationTriangleIcon className="h-8 w-8 text-red-600" />
            <h2>Limitations</h2>
          </div>

          <div className="space-y-2">
            <p className="infoText">
              May occasionally generate incorrect information
            </p>
            <p className="infoText">
              May occasionally produce harmful instructions or biased content
            </p>
            <p className="infoText">
              Limitied knowledge of world and events after 2021
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
