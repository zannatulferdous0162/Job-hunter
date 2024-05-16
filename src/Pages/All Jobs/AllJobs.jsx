import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; 
import Loading from '../../Components/Loading/Loading';


const AllJobs = () => {
  const [jobs, setjobs] = useState([]);
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    axios.get('https://job-hunter-server-rho.vercel.app/jobs')
      .then(data => {
        setjobs(data.data)
        setLoading(false)
      })
  }, []);

  if (loading) {
    return <Loading></Loading>
  }

  return (
    <div>
      
      <div className='flex flex-col items-center'>
            
            <h2 className='py-5 text-3xl text-center'>All Jobs</h2>

            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        
        <th>Name</th>
        <th>category</th>
        <th>salary</th>
        <th>detils</th>
      </tr>
    </thead>
    <tbody>
      {
        jobs.map(job=>(
            <tr>
          
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={job.pictureUrl}alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                <div>
                  <div className="font-bold">{job.jobTitle}</div>
                </div>
              </div>
            </td>
            <td>
             {job.jobCategory}
              <br/>
            </td>
            <td>{job.salaryRange} Tk</td>
            <th>
<Link to={`/details/${job._id}`}>              <button className="btn btn-ghost btn-xs">View Detils</button></Link>
            </th>
            
          </tr>
        ))
      }
    
     
    </tbody>
  </table>
</div>

        </div>
    </div>
  );
};

export default AllJobs;