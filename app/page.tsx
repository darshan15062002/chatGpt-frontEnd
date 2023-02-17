
import {BoltIcon, ExclamationTriangleIcon, PaperAirplaneIcon, SunIcon} from '@heroicons/react/24/outline'
import { Configuration, OpenAIApi } from 'openai'
import Inputbox from '../components/Inputbox'







function Homepage() {

    
const handleSubmit = async() => {
    const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);
    
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: "I am a highly intelligent question answering bot. If you ask me a question that is rooted in truth, I will give you the answer. If you ask me a question that is nonsense, trickery, or has no clear answer, I will respond with \"Unknown\".\n\nQ: What is human life expectancy in the United States?\nA: Human life expectancy in the United States is 78 years.\n\nQ: Who was president of the United States in 1955?\nA: Dwight D. Eisenhower was president of the United States in 1955.\n\nQ: Which party did he belong to?\nA: He belonged to the Republican Party.\n\nQ: What is the square root of banana?\nA: Unknown\n\nQ: How does a telescope work?\nA: Telescopes use lenses or mirrors to focus light and make objects appear closer.\n\nQ: Where were the 1992 Olympics held?\nA: The 1992 Olympics were held in Barcelona, Spain.\n\nQ: How many squigs are in a bonk?\nA: Unknown\n\nQ:",
      temperature: 0,
      max_tokens: 100,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
      stop: ["\n"],
    });
}
  return (
    <div className=" text-white text-xs md:text-sm  flex flex-col space-y-7 items-center justify-center h-screen px-10"><h1 className="text-2xl font-bold  text-white">ChatGPT</h1>
    <div className="flex gap-5 ">
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
    </div></div>
   <Inputbox/>


    </div>
  )
}

export default Homepage