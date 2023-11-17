import {
  BoltIcon,
  ExclamationTriangleIcon,
  SunIcon,
} from "@heroicons/react/24/outline";

import Inputbox from "../components/Inputbox";
import Messages from "../components/Messages";

function Homepage() {
  return (
    <div className="relative text-white text-xs md:text-sm max-h-screen  flex flex-col space-y-7 items-center h-screen  px-0 sm:px-10 py-10">
      <h1 className="text-2xl font-bold  text-white">ChatGPT</h1>
      {/* <div className="flex gap-5 ">
    <div className='space-y-7'>
        <div className="flex flex-col items-center justify-center">
            <SunIcon className='h-8 w-8 '/>
            <h2>Examples</h2>
        </div>
        <div className="space-y-2">
            <p className='bg-gray-900/50 p-2 rounded-md '>"Explain quantum computing in simple terms" →</p>
            <p className='bg-gray-900/50 p-2 rounded-md '>"Got any creative ideas for a 10 year old’s birthday?" →</p>
            <p className='bg-gray-900/50 p-2 rounded-md '>"How do I make an HTTP request in Javascript?" →</p>
        </div>
    </div>
    <div className='space-y-7'>
        <div className="flex flex-col items-center justify-center">
            <BoltIcon className='h-8 w-8 '/>
            <h2>Capabilities</h2>
        </div>
        <div className="space-y-2">
            <p className='bg-gray-900/50 p-2 rounded-md'>Remembers what user said earlier in the conversation</p>
            <p className='bg-gray-900/50 p-2 rounded-md'>Allows user to provide follow-up corrections</p>
            <p className='bg-gray-900/50 p-2 rounded-md'>Trained to decline inappropriate requests</p>
        </div>
    </div>
    <div className='space-y-7' >
        <div className="flex flex-col items-center justify-center">
            <ExclamationTriangleIcon className='h-8 w-8 '/>
            <h2>Limitations</h2>
        </div>
        <div className="space-y-2">
            <p className='bg-gray-900/50 p-2 rounded-md'>May occasionally generate incorrect information</p>
            <p className='bg-gray-900/50 p-2 rounded-md'>May occasionally produce harmful instructions or biased content</p>
            <p className='bg-gray-900/50 p-2 rounded-md'>Limited knowledge of world and events after 2021</p>
        </div>
    </div></div> */}
      <div className="flex flex-col  h-full w-full ">
        <Messages />
        <Inputbox />
      </div>
    </div>
  );
}

export default Homepage;
