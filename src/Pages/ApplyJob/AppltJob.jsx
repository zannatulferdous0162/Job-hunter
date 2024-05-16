import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; 
import { authContext } from '../../Provider/Provider';
import Loading from '../../Components/Loading/Loading';


const Apply = () => {
 
  const [loading, setLoading] = useState(true);
  const {user}=useContext(authContext)
  const token = localStorage.getItem('web-token');
  useEffect(() => {
    if (user?.email) {
      axios.get(`https://job-hunter-server-rho.vercel.app/apply?email=${user?.email}`,{
        headers: {
          authorize: `Bearer ${token}`
        }
      })
        .then(data => {
          console.log(data.data)
          setjobs(data.data)
          setLoading(false)
        })
        .catch(error => {
          console.error('Error fetching data:', error);
          setLoading(false);
        });
    }
  }, [user?.email]);

if (loading) {
    return <Loading></Loading>
}
  return (
    <div>
      
      <div className='flex flex-col items-center'>
            
            <h2 className='py-5 text-3xl text-center'>Apply Jobs</h2>

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

export default Apply;