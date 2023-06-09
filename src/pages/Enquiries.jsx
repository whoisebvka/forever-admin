import React, { useEffect } from 'react';
import { Space, Table, Tag } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { CiEdit } from "react-icons/ci";
import { AiOutlineDelete } from "react-icons/ai";
import { getEnquiries } from '../features/enquiry/enquirySlice';


const columns = [
  {
    title: 'No.',
    dataIndex: 'key',
  },
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Email',
    dataIndex: 'email',
  },
  {
    title: 'Mobile',
    dataIndex: 'mobile',
  },
  {
    title: 'Status',
    dataIndex: 'status',
  },
  {
    title: 'Action',
    dataIndex: 'action',
  },
];



const Enquiries = () => {

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getEnquiries())
  }, []);


  const enquiryState = useSelector((state) => state.enquiry.enquiries);

  const data1 = [];
  for (let i = 0; i < enquiryState.length; i++) {
    data1.push({
      key: i + 1,
      name: enquiryState[i].name,
      email: enquiryState[i].email,
      mobile: enquiryState[i].mobile,
      status: <>
                <select name="" className='form-control form-select' id="">
                  <option value="">Set Status</option>
                </select>
              </> ,
      action:  <>
                  <Link className='ms-3 fs-5 text-danger' to="/"><AiOutlineDelete /></Link> 
              </> 
    });
  }

  return (
    <div>
      <h3 className="mb-4 title">Enquiries</h3>
      <div>
        <Table 
          columns={columns} 
          dataSource={data1} 
        />
      </div>
    </div>
  )
}

export default Enquiries