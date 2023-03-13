import "../styles/globals.css";
import Sidebar from '../components/Sidebar'
import { ChatContextProvider } from "../Context/ChatContext";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body>
        <div className="flex h-full overflow-clip">  
              {/* sidebar */}
             <Sidebar />
             

        {/* Clientprovider notification */}
      <div className="bg-gray-700  flex-1 px-10"><ChatContextProvider>{children}</ChatContextProvider></div></div> 

      </body>
    </html>
  );
}
