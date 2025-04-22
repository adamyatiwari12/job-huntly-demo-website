import React from 'react'
import { ArrowRight } from 'lucide-react'
import LatestCard from './LatestCard';

const LatestJobs = () => {

    const jobs_data = [
        {
          companyLogo: <img src="/latest logos/Nomad.png" alt="Nomad"/>,
          title: "Social Media Assistant",
          company: "Nomad",
          location: "Paris, France",
          tags: ["Marketing","Design"],
        },
        {
          companyLogo: <img src="/latest logos/Netlify.png" alt="Netlify"/>,
          title: "Social Media Assistant",
          company: "Netlify",
          location: "Paris, France",
          tags: ["Marketing","Design"],
        },
        {
          companyLogo: <img src="/latest logos/Dropbox.png" alt="Dropbox"/>,
          title: "Brand Designer",
          company: "Dropbox",
          location: "San Fransisco, USA",
          tags: ["Marketing","Design"],
        },
        {
          companyLogo: <img src="/latest logos/Maze.png" alt="Maze"/>,
          title: "Brand Designer",
          company: "Maze",
          location: "San Fransisco, USA",
          tags: ["Marketing","Design"],
        },
        {
          companyLogo:<img src="/latest logos/Terraform.png" alt="Terraform"/>,
          title: "Interactive Developer",
          company: "Terraform",
          location: "Hamburg, Germany",
          tags: ["Marketing","Design"],
        },
        {
          companyLogo: <img src="/latest logos/Udacity.png" alt="Udacity"/>,
          title: "Interactive Developer",
          company: "Udacity",
          location: "Hamburg, Germany",
          tags: ["Marketing","Design"],
        },
        {
          companyLogo: <img src="/latest logos/Packer.png" alt="Packer"/>,
          title: "HR Manager",
          company: "Packer",
          location: "Lucern, Switzerland",
          tags: ["Marketing","Design"],
        },
        {
          companyLogo: <img src="/latest logos/Webflow.png" alt="Webflow"/>,
          title: "HR Manager",
          company: "Webflow",
          location: "Lucern, Switzerland",
          tags: ["Marketing","Design"],
        },
      ];

  return (
    <div className="px-30 py-20 bg-[#F8F8FD] max-md:px-10 max-sm:px-5">
    <div className='flex justify-between items-center z-[2]'>
      <h2 className='text-5xl font-semibold leading-[52.8px] text-[#25324B] max-md:text-3xl'>Latest <span className="text-[#26A4FF]">Jobs Open</span></h2>
      <h4 className="text-[#4640DE] font-semibold hidden lg:block">Show all jobs <span><ArrowRight className="inline"/></span></h4>
    </div>
    <div className="grid grid-cols-2 gap-8 mt-15 max-lg:grid-cols-1">
        {jobs_data.map((elem,ind)=>(
            <LatestCard
            key={ind}
            logo={elem.companyLogo}
            title={elem.title}
            company={elem.company}
            location={elem.location}
            tags={elem.tags}
            />
        ))}
    </div>
    </div>
  )
}

export default LatestJobs
