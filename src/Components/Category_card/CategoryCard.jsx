import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Loading from '../Loading/Loading';
const CategoryCar = () => {
    const [jobs,setJobs]=useState([])
    const [loading,setLoading]=useState(true)
  
    useEffect(()=>{
        axios.get('https://job-hunter-server-rho.vercel.app/jobs')
        .then(data=>{
            console.log(data.data)
            setJobs(data.data)
            setLoading(false)
        })
    },[])
    if (loading) {
      return (
      <Loading></Loading>
      )
  }
    return (
        <div className='my-10'>
          <Tabs>
    <TabList>
      <Tab>On Site</Tab>
      <Tab>Remote</Tab>
      <Tab>Part-Time</Tab>
      <Tab>Hybrid</Tab>
    </TabList>

    <TabPanel>
    <div className='grid lg:grid-cols-3 gap-3'>
            {
             jobs?.filter(job=>job.jobCategory=='On Site').map(blogs=>(
                <div key={blogs._id} className="card  bg-base-100 shadow-xl">
                <figure><img className='h-[200px]' src={blogs.pictureUrl} alt={blogs.jobTitle}/></figure>
                <div className="card-body">
                  <h2 className="card-title">{blogs.jobTitle}</h2>
                  <p>{blogs.short_description}</p>
                  <p className='font-bold'>Category:{blogs.jobCategory}</p>
                  <p className='font-bold'>Salary:{blogs.salaryRange}</p>
                
                  <div className="card-actions justify-end">
             <Link to={`/details/${blogs._id}`}><button className="btn btn-primary">View Deatils</button></Link>
                  </div>
                </div>
              </div>
             ))
            }
           </div>
    </TabPanel>
    <TabPanel>
    <div className='grid lg:grid-cols-3 gap-3'>
            {
             jobs?.filter(job=>job.jobCategory==='Remote').map(blogs=>(
                <div key={blogs._id} className="card  bg-base-100 shadow-xl">
                <figure><img className='h-[200px]' src={blogs.pictureUrl} alt={blogs.jobTitle}/></figure>
                <div className="card-body">
                  <h2 className="card-title">{blogs.jobTitle}</h2>
                  <p>{blogs.short_description}</p>
                  <p className='font-bold'>Salary:{blogs.salaryRange}</p>
                
                  <div className="card-actions justify-end">
             <Link to={`/details/${blogs._id}`}><button className="btn btn-primary">View Deatils</button></Link>
                  </div>
                </div>
              </div>
             ))
            }
           </div>
    </TabPanel>
    <TabPanel>
    <div className='grid lg:grid-cols-3 gap-3'>
            {
            jobs?.filter(job=>job.jobCategory==='Part-Time').map(blogs=>(
                <div key={blogs._id} className="card  bg-base-100 shadow-xl">
                <figure><img className='h-[200px]' src={blogs.pictureUrl} alt={blogs.Post_Title}/></figure>
                <div className="card-body">
                  <h2 className="card-title">{blogs.jobTitle}</h2>
                  <p>{blogs.short_description}</p>
                  <p className='font-bold'>Salary:{blogs.salaryRange}</p>
                
                  <div className="card-actions justify-end">
             <Link to={`/details/${blogs._id}`}><button className="btn btn-primary">View Deatils</button></Link>
                  </div>
                </div>
              </div>
             ))
            }
           </div>
    </TabPanel>
    <TabPanel>
    <div className='grid lg:grid-cols-3 gap-3'>
            {
             jobs?.filter(job=>job.jobCategory==='Hybrid').map(blogs=>(
                <div key={blogs._id} className="card  bg-base-100 shadow-xl">
                <figure><img className='h-[200px]' src={blogs.pictureUrl} alt={blogs.jobTitle}/></figure>
                <div className="card-body">
                  <h2 className="card-title">{blogs.jobTitle}</h2>
              
                  <p className='font-bold'>Salary:{blogs.salaryRange}</p>
                
                  <div className="card-actions justify-end">
             <Link to={`/details/${blogs._id}`}><button className="btn btn-primary">View Deatils</button></Link>
                  </div>
                </div>
              </div>
             ))
            }
           </div>
    </TabPanel>
  </Tabs>  
        </div>
    );
};

export default CategoryCard;