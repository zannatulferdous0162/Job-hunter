import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { authContext } from '../../Provider/Provider';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'


const MyList = () => {
  const { user } = useContext(authContext)
  const [datas, setDatas] = useState([])
  const token = localStorage.getItem('web-token');
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    if (user?.email) {
      axios.get(`https://job-hunter-server-rho.vercel.app/job?email=${user?.email}`, {
        headers: {
          authorize: `Bearer ${token}`
        }
      })
        .then(data => {
          console.log(data.data)
          setDatas(data.data)
          setLoading(false)
        })
        .catch(error => {
          console.error('Error fetching data:', error);
          setLoading(false);
        });
    }
  }, [user?.email]);


  if (loading) {
    return (
      <>loading </>
    )
  }

  const handeldelete = (id, setBlogs) => {

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`https://job-hunter-server-rho.vercel.app/job/${id}`)
          .then(response => {
            console.log('Response:', response.data);
            if (response.data.acknowledged && response.data.deletedCount === 1) {
              Swal.fire({
                title: "Deleted!",
                text: "Product has been deleted.",
                icon: "success"

              });
              setDatas(prevDatas => prevDatas.filter(item => item._id !== id));
            } else {
              Swal.fire({
                title: "Error!",
                text: "Failed to delete the file.",
                icon: "error"
              });
            }
          })
          .catch(error => {
            console.error('Error:', error);
            Swal.fire({
              title: "Error!",
              text: "An error occurred while deleting the file.",
              icon: "error"
            });
          });
      }
    });
  };

  return (
    <div className='flex flex-col items-center'>

      

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>

              <th>Name</th>
              <th>category</th>
              <th>salary</th>
              <th>Coustomize</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {
              datas.map(job => (
                <tr>

                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={job.pictureUrl} alt="Avatar Tailwind CSS Component" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{job.jobTitle}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {job.jobCategory}
                    <br />
                  </td>
                  <td>{job.salaryRange} Tk</td>
                  <th>
                    <Link to={`/my-profile/update/${job._id}`}>              <button className="btn btn-ghost btn-xs">Update</button></Link>
                  </th>
                  <th>
                    <button onClick={() => handeldelete(job._id, setDatas)} className="btn btn-ghost btn-xs">Delete</button>
                  </th>
                </tr>
              ))
            }


          </tbody>
        </table>
      </div>

    </div>
  );
};

export default MyList;