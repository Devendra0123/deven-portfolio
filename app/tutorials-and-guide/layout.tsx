import "../globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Header/Navbar";
import MessageSection from "@/components/Sections/MessageSecton";
import { sanityFetch } from "@/utils/sanity/client";
import TechnologyDropdown from "@/components/TutorialComponents/TechnologyDropdown";
import { TechnologyProps } from "@/types";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data = await sanityFetch<TechnologyProps[]>({
    query: `*[_type == "technology"]`,
    tags: [],
  });

  return (
    <html lang="en">
      <body className="relative w-full overflow-x-hidden bg-[#F0F7FF] py-[30px] font-poppins flex flex-col items-center">
        <Navbar />
        <div>
          <TechnologyDropdown data={data} />
          {children}
        </div>
        <MessageSection />
      </body>
    </html>
  );
}
