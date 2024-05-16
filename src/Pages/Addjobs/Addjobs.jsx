import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from 'react-hook-form'
import axios from 'axios';
import { authContext } from '../../Provider/Provider';

const AddJobs = () => {
    const { user } = useContext(authContext)
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = data => {
        const { jobTitle, photoUrl, jobCategory, salaryRange, jobDescription,jobApplicantsNumber, jobPostingDate, applicationDeadline } = data;
        const newData = {
            pictureUrl: photoUrl,
            jobTitle: jobTitle,
            userName: user?.displayName,
            email: user?.email,
            jobCategory: jobCategory,
            salaryRange: salaryRange,
            jobDescription: jobDescription,
            jobPostingDate: new Date(jobPostingDate),
            applicationDeadline: new Date(applicationDeadline),
            jobApplicantsNumber: jobApplicantsNumber
        };
        
        axios.post('https://job-hunter-server-rho.vercel.app/jobs', newData)
            .then(response => {
                if (response.status >= 200 && response.status < 300) {
                    console.log('Response:', response.data);
                    toast.success('Success')
                    reset()
                } else {
                    console.error('Error:', response.statusText);
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
        console.log(newData)
    };
    console.log(errors);
    return (
        <div className='flex flex-col items-center justify-center'>
        <div className="flex flex-col items-center justify-center p-12">
          <div className="mx-auto w-full max-w-[550px] bg-white">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-5">
                <label for="jobTitle" className="mb-3 block text-base font-medium text-[#07074D]">
                  Job Title
                </label>
                <input {...register("jobTitle", { required: true })} type="text" name="jobTitle" placeholder='Job Title'
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
              </div>
            
              
              <div className="mb-5">
                <label for="jobCategory" className="mb-3 block text-base font-medium text-[#07074D]">
                  Job Category
                </label>
                <select {...register("jobCategory", { required: true })} className="select select-bordered w-full max-w-xs">
                  <option disabled defaultValue>Select Job Category</option>
                  <option value='On Site'>On Site</option>
                  <option value='Remote'>Remote</option>
                  <option value='Part-Time'>Part-Time</option>
                  <option value='Hybrid'>Hybrid</option>
                </select>
              </div>
              <div className="mb-5">
                <label for="salaryRange" className="mb-3 block text-base font-medium text-[#07074D]">
                  Salary Range
                </label>
                <input {...register("salaryRange", { required: true })} type="text" name="salaryRange" placeholder="Enter Salary Range"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
              </div>
              <div className="mb-5">
                <label for="jobDescription" className="mb-3 block text-base font-medium text-[#07074D]">
                  Job Description
                </label>
                <textarea {...register("jobDescription", { required: true })} name="jobDescription"
                  className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400" rows="5"></textarea>
              </div>
              <div className="mb-5">
                <label for="jobPostingDate" className="mb-3 block text-base font-medium text-[#07074D]">
                  Job Posting Date
                </label>
                <input {...register("jobPostingDate", { required: true })} type="date" name="jobPostingDate"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
              </div>
              <div className="mb-5">
                <label for="applicationDeadline" className="mb-3 block text-base font-medium text-[#07074D]">
                  Application Deadline
                </label>
                <input {...register("applicationDeadline", { required: true })} type="date" name="applicationDeadline"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
              </div>
              <div className="mb-5">
                <label for=" JobApplicants" className="mb-3 block text-base font-medium text-[#07074D]">
                  Job Applicants Number
                </label>
                <input {...register("jobApplicantsNumber", { required: true })} type="number" name="jobApplicantsNumber" 
                  className="w-full rounded-md border border-[#e0e0e0] bg-gray-100 py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
              </div>
              <div className="mb-5">
                <label for="photoUrl" className="mb-3 block text-base font-medium text-[#07074D]">
                  Photo URL
                </label>
                <input {...register("photoUrl", { required: true })} type="url" name="photoUrl" placeholder="Enter Photo URL"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
              </div>
              <div>
                <button type='submit'
                  className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                  Add Job
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      
    );
};

export default AddJobs;