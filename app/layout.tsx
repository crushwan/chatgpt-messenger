import { SessionProvider } from "../components/SessionProvider";
import SideBar from "../components/SideBar";
import { getServerSession } from "next-auth";
import "../styles/globals.css";
import { authOptions } from "../pages/api/auth/[...nextauth]";
import Login from "../components/Login";
import ClientProvier from "../components/ClientProvier";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <html>
      <head />
      <body>
        <SessionProvider session={session}>
          {!session ? (
            <Login />
          ) : (
            <div className="xs:grid xs:grid-cols-12 flex">
              <div className="sticky bottom-0 top-0 left-0 md:static col-span-2 bg-[#202123] max-w-xs h-screen md:min-w-[20rem]">
                <SideBar />
              </div>
              <ClientProvier />
              <div className="bg-[#ededed] dark:bg-[#343541] col-span-10 flex-1 transition-all duration-700">
                {children}
              </div>
            </div>
          )}
        </SessionProvider>
      </body>
    </html>
  );
}
