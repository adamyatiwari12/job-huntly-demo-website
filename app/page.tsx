import Image from "next/image";
import Header from "./components/Header";
import { Pattern } from "./components/Pattern";
import DiscoverJobs from "./components/DiscoverJobs";
import JobSearch from "./components/JobSearch";
import ExploreCategory from "./components/ExploreCategory";
import FeaturedJobs from "./components/FeaturedJobs";
import LatestJobs from "./components/LatestJobs";

export default function Home() {
  return (
    <div className="bg-[#F8F8FD]">
      <Pattern />
      <Header/>
      <main className="px-[6rem] flex justify-between">
        <div>
        <DiscoverJobs/>
        <JobSearch/>
        </div>
        <div className="lg:bg-[url('https://s3-alpha-sig.figma.com/img/849d/9766/51c585cf41e864d6b53eba0a93aec63f?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=pSEIAIbkJrUcAdNgzwz024DJ9~CAkmgPvM08IqxJ~VHzJas9853EjKTZJ1VgRmLWrNyRNcqyxRBH5zYJzJz1LN9cs1yjW9km6Vomsr774~pIFwuBhFCB8b9jd8G-ugF4dcFJ9dNP37M6heJgl8ZQueToMNRKpP4NiW-PQV0BawfpZQ-mJszcEbF8b5IKTWadgHmIjAkIIpcyGAsnrh77g6Iv200HFXmJgl6xOjv6AKxtM~s-3rqV5qoNb2fRSdMxoL~QhzH0uliTR813m-9yy8X-kjkbRfkbFY4StCx~da4Rp1KgeK0qbFebMNiP306MyGTayP~7htnVY0GHtYzwQw__')] bg-cover  h-[715px] w-[600px] z-10"></div>
      </main>
      <section>
        <ExploreCategory/>
        <img src="https://media-hosting.imagekit.io/a0694d5de7a64f5b/Screenshot%202025-04-02%20at%2011.16.02%E2%80%AFAM.png?Expires=1838181125&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=NFTZ6DU5Z5jdljjk1FYLvwO0vynuh4-NXlsHjFkd4cxKxDFP-exT6mw-qp0YCMq5fKy45bg6vNyn0GZL4NfF30uP0MVrBvlCj3Vm20R3kqUGrVELj8mDUClRq5yPVXZwjpJH06Ao2rXM5nRUQSAb4GBLM9LeRdFfDwwqCPUUPtdmroJS1MWbtoTnT9rWZmZgz0juCD0oVxvqS8OpQhpW5SNTfGtT~hNwTzHJRfEv8VuN99EfNRGyawV046jxZQ1S6IEor6OOWwwSUOG92AlWfXjeLuqjwPyQBBFjoYKd0X2-tDBxUtQIgNpJDPLRZtevhQzfo~9tpKKxANEeihFcKQ__" alt="Image" className="h-full w-full"/>
      </section>
      <FeaturedJobs/>
      <LatestJobs/>
    </div>
  );
}
