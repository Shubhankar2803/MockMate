import InterviewCard from '@/components/InterviewCard'
import { Button } from '@/components/ui/button'
import { getCurrentUser } from '@/lib/actions/auth.actions'
import { getInterview, getLatestInterviews } from '@/lib/actions/general.actions'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const Page = async () => {
  const user=await getCurrentUser();

  const [userInterviews,latestInterviews] = await Promise.all([
    await getInterview(user?.id!),
    await getLatestInterviews({userId:user?.id!})
    
  ])
  

  const hasPastInterviews=userInterviews?.length>0;
  const hasUpcomingInterviews=latestInterviews?.length>0;
  return (
<>
<section className='card-cta'>
  <div className='fex flex-cols gap-6 max-w-lg'>

    <h2>
      Prepare for your interviews efficiently by practicing with AI and getting precise feedback.
    </h2>

    <Button asChild className='btn-primary max-sm:w-full'>
      <Link href="/interview">Start an interview</Link>

    </Button>
  </div>

  <Image src="/robot.png" alt="robo" width={400} height={400} className="max-sm:hidden" />

</section>

<section className='flex flex-col gap-6 mt-8'>
  <h2>Your Interviews</h2>
   <div className='interviews-section'>
   {
    hasPastInterviews ?(
      userInterviews?.map((interview)=>(
            <InterviewCard  { ... interview} key={interview.id} />

      ))
    ):(<p>You haven't taken an interview yet</p>)

   }
    </div>
</section>

<section className='flex flex-col gap-6 mt-8'>
  <h2>Take an interview</h2>

  <div className='interviews-section'>
  {
    hasUpcomingInterviews ?(
      latestInterviews?.map((interview)=>(
            <InterviewCard  { ... interview} key={interview.id} />

      ))
    ):(<p>There are no  new interviews available. </p>)

   }
   
  { /*  */}
   
    </div>
</section>
</> 

)
}

export default Page