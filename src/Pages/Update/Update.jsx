import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useLoaderData } from 'react-router-dom';
import { authContext } from '../../Provider/Provider';


const UpdateJob = () => {
    const { user } = useContext(authContext);
    const data = useLoaderData();
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = (formData) => {
        const { jobTitle, photoUrl, jobCategory,jobApplicantsNumber, salaryRange, jobDescription, jobPostingDate, applicationDeadline } = formData;
        const updatedData = {
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

        axios.patch(`https://job-hunter-server-rho.vercel.app/jobs/${data._id}`, updatedData)
            .then(response => {
                if (response.data.modifiedCount === 1) {
                    toast.success('Job updated successfully!');
                    reset();
                } else {
                    toast.warning('No changes made to the job.');
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
            console.table(updatedData)
    };

    return (
        <div className='flex flex-col items-center justify-center'>
            <div className="flex flex-col items-center justify-center p-12">
                <div className="mx-auto w-full max-w-[550px] bg-white">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-5">
                            <label htmlFor="jobTitle" className="mb-3 block text-base font-medium text-[#07074D]">
                                Job Title
                            </label>
                            <input defaultValue={data.jobTitle} {...register("jobTitle", { required: true })} type="text" name="jobTitle" placeholder='Job Title'
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                        </div>

                        <div className="mb-5">
                            <label htmlFor="userName" className="mb-3 block text-base font-medium text-[#07074D]">
                                Logged In User Name
                            </label>
                            <input value={user?.displayName || ''} readOnly
                                className="w-full rounded-md border border-[#e0e0e0] bg-gray-100 py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                        </div>

                        <div className="mb-5">
                            <label htmlFor="email" className="mb-3 block text-base font-medium text-[#07074D]">
                                Email
                            </label>
                            <input value={user?.email || ''} readOnly
                                className="w-full rounded-md border border-[#e0e0e0] bg-gray-100 py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                        </div>

                        <div className="mb-5">
                            <label htmlFor="jobCategory" className="mb-3 block text-base font-medium text-[#07074D]">
                                Job Category
                            </label>
                            <select defaultValue={data.jobCategory} {...register("jobCategory", { required: true })} className="select select-bordered w-full max-w-xs">
                                <option disabled>Select Job Category</option>
                                <option value='On Site'>On Site</option>
                                <option value='Remote'>Remote</option>
                                <option value='Part-Time'>Part-Time</option>
                                <option value='Hybrid'>Hybrid</option>
                            </select>
                        </div>

                        <div className="mb-5">
                            <label htmlFor="salaryRange" className="mb-3 block text-base font-medium text-[#07074D]">
                                Salary Range
                            </label>
                            <input defaultValue={data.salaryRange} {...register("salaryRange", { required: true })} type="text" name="salaryRange" placeholder="Enter Salary Range"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                        </div>

                        <div className="mb-5">
                            <label htmlFor="jobDescription" className="mb-3 block text-base font-medium text-[#07074D]">
                                Job Description
                            </label>
                            <textarea defaultValue={data.jobDescription} {...register("jobDescription", { required: true })} name="jobDescription"
                                className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400" rows="5"></textarea>
                        </div>

                        <div className="mb-5">
                            <label htmlFor="jobPostingDate" className="mb-3 block text-base font-medium text-[#07074D]">
                                Job Posting Date
                            </label>
                            <input defaultValue={data.jobPostingDate} {...register("jobPostingDate", { required: true })} type="date" name="jobPostingDate"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                        </div>

                        <div className="mb-5">
                            <label htmlFor="applicationDeadline" className="mb-3 block text-base font-medium text-[#07074D]">
                                Application Deadline
                            </label>
                            <input defaultValue={data.applicationDeadline} {...register("applicationDeadline", { required: true })} type="date" name="applicationDeadline"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                        </div>

                        <div className="mb-5">
                            <label htmlFor="jobApplicantsNumber" className="mb-3 block text-base font-medium text-[#07074D]">
                                Job Applicants Number
                            </label>
                            <input type="number" {...register("jobApplicantsNumber", { required: true })} name="jobApplicantsNumber" defaultValue={data.jobApplicantsNumber}
                                className="w-full rounded-md border border-[#e0e0e0] bg-gray-100 py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                        </div>

                        <div className="mb-5">
                            <label htmlFor="photoUrl" className="mb-3 block text-base font-medium text-[#07074D]">
                                Photo URL
                            </label>
                            <input defaultValue={data.pictureUrl} {...register("photoUrl", { required: true })} type="url" name="photoUrl" placeholder="Enter Photo URL"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                        </div>

                        <div>
                            <button type='submit'
                                className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                                Update Job
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateJob;
