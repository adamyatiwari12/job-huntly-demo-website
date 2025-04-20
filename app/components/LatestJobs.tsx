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
    <div className="px-30 py-20 bg-[#F8F8FD]">
        {/* <div className='absolute z-[1] w-[860px] h-[794px]'
          dangerouslySetInnerHTML={{
            __html: `<svg id="I0:2037;292:8665" layer-name="Pattern" width="797" height="877" viewBox="0 0 797 877" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full"> <path opacity="0.6" d="M328.972 -72.173L615.806 -212.02L617.987 -3.74798L329.227 135.94L328.972 -72.173Z" fill="#F8F8FD" stroke="#CCCCF5" stroke-width="4"></path> <path d="M261.005 590.224L816.767 306.268L816.767 646.273L261.229 928.43L261.005 590.224Z" fill="#F8F8FD" stroke="#CCCCF5" stroke-width="4"></path> <path d="M2.00481 957.244L517.767 703.214L517.767 1013.25L2.22902 1265.48L2.00481 957.244Z" fill="#F8F8FD" stroke="#CCCCF5" stroke-width="4"></path> </svg>`,
          }}
        /> */}
    <div className='flex justify-between items-center z-[2]'>
      <h2 className='text-5xl font-semibold leading-[52.8px] text-[#25324B]'>Latest <span className="text-[#26A4FF]">Jobs Open</span></h2>
      <h4 className="text-[#4640DE] font-semibold">Show all jobs <span><ArrowRight className="inline"/></span></h4>
    </div>
    <div className="grid grid-cols-2 gap-8 mt-15">
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
