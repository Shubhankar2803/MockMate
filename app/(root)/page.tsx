import InterviewCard from '@/components/InterviewCard'
import { Button } from '@/components/ui/button'
import { dummyInterviews } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Page = () => {
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
   {dummyInterviews.map((interview)=>(
    <InterviewCard  { ... interview} key={interview.id} />
   ))}
    </div>
</section>

<section className='flex flex-col gap-6 mt-8'>
  <h2>Take an interview</h2>

  <div className='interviews-section'>
  {dummyInterviews.map((interview)=>(
    <InterviewCard  { ... interview}  key={interview.id} />
   ))} 
   
  { /* <p>you haven't taken an interview yet</p> */}
   
    </div>
</section>
</> 

)
}

export default Page