import React from 'react'
import { ArrowRight } from 'lucide-react'
import { FeaturedIcons } from './icons/FeaturedIcons';
import FeaturedCard from './FeaturedCard';

const FeaturedJobs = () => {

  const featured = [
          { icon: <FeaturedIcons.revolut/>, title: "Email Marketing", company: "Revolut",
            location: "Madrid, Spain",
            description: "Revolut is looking for Email Marketing to help team ma ...",
            tags: [
              { label: "Marketing", type: "marketing" as const },
              { label: "Design", type: "design" as const },
            ]},
          { icon: <FeaturedIcons.dropbox />, title: "Brand Designer",
            company: "Dropbox",
            location: "San Fransisco, US",
            description: "Dropbox is looking for Brand Designer to help the team t ...",
            tags: [
              { label: "Design", type: "design" as const },
              { label: "Business", type: "business" as const },
            ]},
          { icon: <FeaturedIcons.pitch />, title: "Email Marketing",
            company: "Pitch",
            location: "Berlin, Germany",
            description:
              "Pitch is looking for Customer Manager to join marketing t ...",
            tags: [{ label: "Marketing", type: "marketing" as const }]},
          { icon: <FeaturedIcons.blinkist />, title: "Visual Designer",
            company: "Blinkist",
            location: "Granada, Spain",
            description:
              "Blinkist is looking for Visual Designer to help team desi ...",
            tags: [{ label: "Design", type: "design" as const }]},
          { icon: <FeaturedIcons.classPass />, title: "Product Designer",
            company: "ClassPass",
            location: "Manchester, UK",
            description: "ClassPass is looking for Product Designer to help us...",
            tags: [
              { label: "Marketing", type: "marketing" as const },
              { label: "Design", type: "design" as const },
            ]},
          { icon: <FeaturedIcons.canva />, title: "Lead Designer",
            company: "Canva",
            location: "Ontario, Canada",
            description: "Canva is looking for Lead Engineer to help develop n ...",
            tags: [
              { label: "Design", type: "design" as const },
              { label: "Business", type: "business" as const },
            ]},
          {icon: <FeaturedIcons.goDaddy />, title: "Brand Strategist",
            company: "GoDaddy",
            location: "Marseille, France",
            description: "GoDaddy is looking for Brand Strategist to join the team...",
            tags: [{ label: "Marketing", type: "marketing" as const }]},
          { icon: <FeaturedIcons.twitter />, title: "Data Analyst",
            company: "Twitter",
            location: "San Diego, US",
            description: "Twitter is looking for Data Analyst to help team desi ...",
            tags: [{ label: "Technology", type: "technology" as const }]}
        ];

  return (
    <div className="px-30 pt-25 pb-20 bg-white">
      <div className='flex justify-between items-center'>
        <h2 className='text-5xl font-semibold leading-[52.8px] text-[#25324B]'>Featured <span className="text-[#26A4FF]">Jobs</span></h2>
        <h4 className="text-[#4640DE] font-semibold">Show all jobs <span><ArrowRight className="inline"/></span></h4>
      </div>
      <div className="grid grid-cols-4 gap-8 mt-15">
        {featured.map((elem,ind) => (
          <FeaturedCard key={ind}
          logo={elem.icon}
          title={elem.title}
          company={elem.company}
          location={elem.location}
          description={elem.description}
          tags={elem.tags} />
        ))}
      </div>
    </div>
  )
}

export default FeaturedJobs
