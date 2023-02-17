import "../styles/globals.css";
import Sidebar from '../components/Sidebar'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body>
        <div className="flex h-full ">  
              {/* sidebar */}
             <Sidebar />
             

        {/* Clientprovider notification */}
        <div className="bg-gray-700  flex-1 px-10">{children}</div></div>

      </body>
    </html>
  );
}
