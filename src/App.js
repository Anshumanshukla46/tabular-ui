import React, { useState } from 'react';
import './App.css';
import DeleteIcon from '@mui/icons-material/Delete';
import FlagIcon from '@mui/icons-material/Flag';
import Crop54Icon from '@mui/icons-material/Crop54';

const Table = () => {
  const [data, setData] = useState([
    { id: '#2378', summary: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam optio illo consequatur et maiores nobis nostrum voluptate ad, exercitationem quas vero odio magnam assumenda rerum rem?', assignedId: 'unassign', priority: 'high', dateSubmitted: '12 May 1298', status: 'open' },

    { id: '#1122378', summary: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam optio illo consequatur et maiores nobis nostrum voluptate ad, exercitationem quas vero odio magnam assumenda rerum rem?', assignedId: 'Makvin Mckinney', priority: 'low', dateSubmitted: '12 May 1298', status: 'closed' },

    { id: '#2980378', summary: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam optio illo consequatur et maiores nobis nostrum voluptate ad, exercitationem quas vero odio magnam assumenda rerum rem?', assignedId: 'Jane copper', priority: 'medium', dateSubmitted: '12 May 1298', status: 'open' },

    { id: '#237231868', summary: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam optio illo consequatur et maiores nobis nostrum voluptate ad, exercitationem quas vero odio magnam assumenda rerum rem?', assignedId: 'unassign', priority: 'high', dateSubmitted: '12 May 1298', status: 'in-progress' },

    { id: '#2123896378', summary: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam optio illo consequatur et maiores nobis nostrum voluptate ad, exercitationem quas vero odio magnam assumenda rerum rem?', assignedId: 'Annete black', priority: 'low', dateSubmitted: '12 May 1298', status: 'closed' },

    { id: '#9782378', summary: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam optio illo consequatur et maiores nobis nostrum voluptate ad, exercitationem quas vero odio magnam assumenda rerum rem?', assignedId: 'unassign', priority: 'medium', dateSubmitted: '12 May 1298', status: 'in-progress' },


    { id: '#1122378', summary: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam optio illo consequatur et maiores nobis nostrum voluptate ad, exercitationem quas vero odio magnam assumenda rerum rem?', assignedId: 'Makvin Mckinney', priority: 'high', dateSubmitted: '12 May 1298', status: 'closed' },

    { id: '#2980378', summary: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam optio illo consequatur et maiores nobis nostrum voluptate ad, exercitationem quas vero odio magnam assumenda rerum rem?', assignedId: 'Jane copper', priority: 'low', dateSubmitted: '12 May 1298', status: 'open' },

    { id: '#237231868', summary: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam optio illo consequatur et maiores nobis nostrum voluptate ad, exercitationem quas vero odio magnam assumenda rerum rem?', assignedId: 'unassign', priority: 'high', dateSubmitted: '12 May 1298', status: 'in-progress' },

  ]);

  const handlePriorityChange = (index, value) => {
    const updatedData = [...data];
    updatedData[index].priority = value;
    setData(updatedData);
  };


  const getFlagIcon = (priority) => {
    switch (priority) {
      case 'high':
        return <FlagIcon style={{ color: 'red' }} />;
      case 'medium':
        return <FlagIcon style={{ color: 'blue' }} />;
      case 'low':
        return <FlagIcon style={{ color: 'yellow' }} />;
      default:
        return null;
    }
  };


  const getStatusColor = (status) => {
    switch (status) {
      case 'open':
        return 'blue';
      case 'in-progress':
        return 'orange';
      case 'closed':
        return 'gray';
      default:
        return 'black';
    }
  };

  return (
    <table className="table">
      <thead>
        <tr className="header-row">
          <th><Crop54Icon /></th>
          <th>Request ID</th>
          <th>Request Summary</th>
          <th>Assigned ID</th>
          <th>Priority</th>
          <th>Date Submitted</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index} className="data-row">
            <td>
              <input type="checkbox" />
            </td>
            <td>{row.id}</td>
            <td className="summary-cell">{row.summary}</td>
            <td>{row.assignedId}</td>
            <td>
              <div className="custom-select">
                <div className={`priority-indicator ${row.priority}`}>
                  {getFlagIcon(row.priority)}
                </div>
                <select
                  value={row.priority}
                  onChange={(e) => handlePriorityChange(index, e.target.value)}
                >
                  <option value="high">High (24 hours)</option>
                  <option value="medium">Medium (48 hours)</option>
                  <option value="low">Low (72 hours)</option>
                </select>
              </div>
            </td>
            <td>{row.dateSubmitted}</td>

            <td>
              <div
                className="status-cell"
                style={{ backgroundColor: getStatusColor(row.status) }}
              >
                {row.status}
              </div>
            </td>

            <td>
              <button><DeleteIcon /></button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
