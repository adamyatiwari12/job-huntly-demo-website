import React from 'react'
import { ArrowRight } from 'lucide-react'
import FeaturedCard from './FeaturedCard';

const jobsData = [
  {
    logo: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/6b/47/00/6b470038-e1c7-c17e-8938-88354a5b14e9/AppIcon-1x_U007epad-0-1-85-220-0.png/512x512bb.jpg",
    title: "Email Marketing",
    company: "Revolut",
    location: "Madrid, Spain",
    description: "Revolut is looking for Email Marketing to help team ma ...",
    tags: [
      { label: "Marketing", type: "marketing" },
      { label: "Design", type: "design" },
    ],
  },
  {
    logo: "https://cdn.brandfetch.io/idY3kwH_Nx/w/400/h/400/theme/dark/icon.png?c=1bxid64Mup7aczewSAYMX&t=1691075441479",
    title: "Brand Designer",
    company: "Dropbox",
    location: "San Fransisco, US",
    description: "Dropbox is looking for Brand Designer to help the team t ...",
    tags: [
      { label: "Design", type: "design" },
      { label: "Business", type: "business" },
    ],
  },
  {
    logo: "https://logosandtypes.com/wp-content/uploads/2024/12/pitch.svg",
    title: "Email Marketing",
    company: "Pitch",
    location: "Berlin, Germany",
    description: "Pitch is looking for Customer Manager to join marketing t ...",
    tags: [{ label: "Marketing", type: "marketing" }],
  },
  {
    logo: "https://www.apkmirror.com/wp-content/themes/APKMirror/ap_resize/ap_resize.php?src=https%3A%2F%2Fdownloadr2.apkmirror.com%2Fwp-content%2Fuploads%2F2024%2F10%2F07%2F6721052c8a05b_com.blinkslabs.blinkist.android.png&w=192&h=192&q=100",
    title: "Visual Designer",
    company: "Blinkist",
    location: "Granada, Spain",
    description: "Blinkist is looking for Visual Designer to help team desi ...",
    tags: [{ label: "Design", type: "design" }],
  },
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7WlJim6yHUS-PvXkQ7FoBlhI9irri5bWceQ&s",
    title: "Product Designer",
    company: "ClassPass",
    location: "Manchester, UK",
    description: "ClassPass is looking for Product Designer to help us...",
    tags: [
      { label: "Marketing", type: "marketing" },
      { label: "Design", type: "design" },
    ],
  },
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk-gW4g-vk0VvSkSUys7a1Z8NmVXjq-iccSg&s",
    title: "Lead Designer",
    company: "Canva",
    location: "Ontario, Canada",
    description: "Canva is looking for Lead Engineer to help develop n ...",
    tags: [
      { label: "Design", type: "design" },
      { label: "Business", type: "business" },
    ],
  },
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaqVGwXfboLlsa3uQAI8Yim-rx9MrsRYED-w&s",
    title: "Brand Strategist",
    company: "GoDaddy",
    location: "Marseille, France",
    description: "GoDaddy is looking for Brand Strategist to join the team...",
    tags: [{ label: "Marketing", type: "marketing" }],
  },
  {
    logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/95417aa3fd607df261259e657f968287f947e5b2",
    title: "Data Analyst",
    company: "Twitter",
    location: "San Diego, US",
    description: "Twitter is looking for Data Analyst to help team desi ...",
    tags: [{ label: "Technology", type: "technology" }],
  },
];

const FeaturedJobs = () => {
  return (
    <div className="px-30 pt-25 pb-20 bg-white max-lg:px-10 max-sm:px-3">
      <div className='flex justify-between items-center '>
        <h2 className='text-5xl font-semibold leading-[52.8px] text-[#25324B] max-md:text-3xl'>Featured <span className="text-[#26A4FF]">Jobs</span></h2>
        <h4 className="text-[#4640DE] font-semibold mt-5 hidden lg:block">Show all jobs <span><ArrowRight className="inline"/></span></h4>
      </div>
      <div className="grid grid-cols-4 gap-8 mt-15 max-lg:overflow-y-auto max-lg:flex max-md:mt-8"> 
        {jobsData.map((job, index) => (
          <FeaturedCard
            key={index}
            logo={job.logo}
            title={job.title}
            company={job.company}
            location={job.location}
            description={job.description}
            tags={job.tags}
          />
        ))}
      </div>
      <h4 className="text-[#4640DE] font-semibold mt-7 hidden max-lg:block">Show all jobs <span><ArrowRight className="inline"/></span></h4>
    </div>
  )
}

export default FeaturedJobs