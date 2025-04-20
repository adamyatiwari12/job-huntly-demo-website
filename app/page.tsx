import Image from "next/image";
import Header from "./components/Header";
import { Pattern } from "./components/Pattern";
import DiscoverJobs from "./components/DiscoverJobs";
import JobSearch from "./components/JobSearch";
import ExploreCategory from "./components/ExploreCategory";
import FeaturedJobs from "./components/FeaturedJobs";
import LatestJobs from "./components/LatestJobs";
import Footer from "./components/Footer/Footer";
import GrowSection from "./components/GrowSection";

export default function Home() {
  return (
    <div className="bg-[#F8F8FD]">
      <Pattern />
      <Header/>
      <main className="px-[6rem] flex justify-between relative z-1">
        <div>
        <DiscoverJobs/>
        <JobSearch/>
        </div>
        <div>
          <img src="/Hero Image.png" alt="Image" height={100} width={100} className="h-full w-full" />
        </div>
        
      </main>
      <section>
        <GrowSection/>
        <ExploreCategory/>
        <img src="/Stats.png" alt="Image" height={100} width={100} className="h-full w-full" />
      </section>
      <FeaturedJobs/>
      <LatestJobs/>
      <Footer/>
    </div>
  );
}
