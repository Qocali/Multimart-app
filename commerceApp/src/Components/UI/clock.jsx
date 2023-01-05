import React,{useEffect,useState} from 'react'

function clock() {
    const [days,setDays]=useState(0)
    const [hours,setHours]=useState(0)
    const [minutes,setMinutes]=useState(0)
    const [seconds,setSeconds]=useState(0)
let interval;
const countDown=()=>{
const destination=new Date("Dec 12,2022").getTime()
interval=setInterval(()=>{
    const now=new Date().getTime()
    const dif=destination-now;
   const days=Math.floor(dif/(1000*60*60*24))
   const hours=Math.floor(dif%(1000*60*60*24)/(1000*60*60))
   const minutes=Math.floor(dif%(1000*60*60)/(1000*60))
   const seconds=Math.floor(dif%(1000*60)/(1000))
   if(destination<0){
    clearInterval(interval.current)
   }
   else{
setDays(days)
setHours(hours)
setMinutes(minutes)
setSeconds(seconds)
   }
})
}
useEffect(()=>{
    countDown()
})
  return (
    <div className='d-flex' style={{marginLeft:'30px'}}>
    <div className='clock_wrapper d-flex  align-items-center gap-4 mb-2'>
        <div className='clock-data d-flex flex-col align-items-center gap-4 text-center'>
            <h1 className='text-white fs-1'>{days}</h1>
            <h3  className='text-white fs-5'>Days</h3>
        </div>
        <span  className='text-white fs-1 mb-10'>:</span>
    </div>
    <div className='clock_wrapper d-flex align-items-center gap-4 mb-2'>
        <div className='clock-data d-flex flex-col align-items-center gap-4 text-center'>
            <h1 className='text-white fs-1'>{hours}</h1>
            <h3  className='text-white fs-5'>Hours</h3>
        </div>
        <span  className='text-white fs-1 mb-10'>:</span>
    </div>
    <div className='clock_wrapper d-flex  align-items-center gap-4 mb-2'>
        <div className='clock-data d-flex flex-col align-items-center gap-4 text-center'>
            <h1 className='text-white fs-1'>{minutes}</h1>
            <h3  className='text-white fs-5'>Minutes</h3>
        </div>
        <span  className='text-white fs-1 d-block mb-10'>:</span>
    </div>
    <div className='clock_wrapper d-flex align-items-center gap-4 mb-2'>
        <div className='clock-data d-flex flex-col align-items-center gap-4 text-center'>
            <h1 className='text-white fs-1'>{seconds}</h1>
            <h3  className='text-white fs-5'>Seconds</h3>
        </div>
       
    </div>
    </div>
  )
}

export default clock