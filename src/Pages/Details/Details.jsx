import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { authContext } from '../../Provider/Provider';
import { toast } from 'react-toastify';
import axios from 'axios';

const Detils = () => {
    const data=useLoaderData()
    const {user}=useContext(authContext)
    const apply=()=>{
        const newApply = {
            pictureUrl: data.pictureUrl,
            jobTitle: data.jobTitle,
            userName: user?.displayName,
            email: user?.email,
            jobCategory: data.jobCategory,
            salaryRange: data.salaryRange,
            jobDescription: data.jobDescription,
            jobPostingDate: data.jobPostingDate,
            applicationDeadline: data.applicationDeadline,
            jobApplicantsNumber: data.jobApplicantsNumber
        };
        axios.post('http://localhost:5000/applys', newApply)
            .then(response => {
                if (response.status >= 200 && response.status < 300) {
                    console.log('Response:', response.data);
                    toast.success('Success')
                   
                } else {
                    console.error('Error:', response.statusText);
                }
            })
    }
    console.log(data)
    return (
        <div>
            <div>
        <div className="hero min-h-screen bg-base-200">
<div className="hero-content flex-col lg:flex-row">
 <img src={data.pictureUrl}className="w-[300px] rounded-lg shadow-2xl" />
 <div>
   <h1 className="text-5xl font-bold">{data.jobTitle}</h1>
   <p className="py-2 text-xl">Category: {data.jobCategory}</p>
   <p className="py-2 text-xl">Description: {data.jobDescription}</p>
  
   <p className="py-2 text-xl">Salary: {data.salaryRange}</p>
   <p className="py-2 text-xl">Need: {data.jobApplicantsNumber}</p>

   <p className="py-2 text-xl text-red-500 font-bold flex items-center gap-1">Posting Date: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg> 
{data.jobPostingDate} 
</p>
   <p className="py-2 text-xl text-red-500 font-bold flex items-center gap-1">Apply  Date Line: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>
{data.applicationDeadline} 
</p>
<button className='btn btn-success text-white' onClick={apply}>Apply Now</button>
 </div>
</div>
</div> 
     </div>
        </div>
    );
};

export default Detils;