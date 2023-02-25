import React, { useState } from "react";
import "./Table.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Table = () => {
   
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(5);
    
  const [data, setData] = useState([
    {paidBy: "John Doe", status: "Active", isActive: true,receipt:"1234",datePaid:"01/23/2023" ,gravesite:"01-1001-03.0",NoOfPayments:2,Total:650,key:"..."},
     { paidBy: "Jane Smith", status: "Inactive", isActive: true,receipt:"1233",datePaid:"01/23/2023",gravesite:"01-1001-03.0" ,NoOfPayments:2,Total:650,key:"..."},
    { paidBy: "Bob Johnson", status: "Active", isActive: true ,receipt:"1232",datePaid:"01/23/2023",gravesite:"01-1001-03.0",NoOfPayments:2,Total:650,key:"..."},
    { paidBy: "Mike Brown", status: "Inactive", isActive: true ,receipt:"1231",datePaid:"01/23/2023",gravesite:"01-1001-03.0",NoOfPayments:2,Total:650,key:"..."},
    {paidBy: "John Doe", status: "Active", isActive: true,receipt:"1234",datePaid:"01/23/2023" ,gravesite:"01-1001-03.0",NoOfPayments:2,Total:650,key:"..."},
     { paidBy: "Jane Smith", status: "Inactive", isActive: true,receipt:"1233",datePaid:"01/23/2023",gravesite:"01-1001-03.0" ,NoOfPayments:2,Total:650,key:"..."},
    { paidBy: "Bob Johnson", status: "Active", isActive: true ,receipt:"1232",datePaid:"01/23/2023",gravesite:"01-1001-03.0",NoOfPayments:2,Total:650,key:"..."},
    { paidBy: "Mike Brown", status: "Inactive", isActive: true ,receipt:"1231",datePaid:"01/23/2023",gravesite:"01-1001-03.0",NoOfPayments:2,Total:650,key:"..."},
    {paidBy: "John Doe", status: "Active", isActive: true,receipt:"1234",datePaid:"01/23/2023" ,gravesite:"01-1001-03.0",NoOfPayments:2,Total:650,key:"..."},
     { paidBy: "Jane Smith", status: "Inactive", isActive: true,receipt:"1233",datePaid:"01/23/2023",gravesite:"01-1001-03.0" ,NoOfPayments:2,Total:650,key:"..."},
    
  ]);

  const handleButtonClick = (index) => {
    const newData = [...data];
    newData[index].isActive = !newData[index].isActive;
    setData(newData);
  };

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    const filteredData = data.filter((row) =>
      row.paidBy.toLowerCase().includes(searchQuery.toLowerCase())
     
   
      

    );
    setData(filteredData);
  };

  
  const [editRow, setEditRow] = useState(null);

  return (
    <div>
      <Header />
      <table>
        <thead>
          <tr>
            <th className="payment">Payments</th>
            <th className="search">
              <input
                type="text"
                value={searchQuery}
                placeholder="Search Paid By..."
                onChange={(e) => setSearchQuery(e.target.value)}
                onClick={handleSearch}
              />
            </th>
            <th>
              <button className="filter">Filter</button>
            </th>
            <th>
              <button className="paymentType">+Payment</button>
            </th>
            <th></th>
          </tr>
          <tr>
            <th>
              <input type="checkbox" />
             Receipt
            </th>
            <th>Date Paid</th>
            <th>Grave Site</th>
            <th>Paid By</th>
            <th>No Of Payment</th>
            <th>Total</th>
            <th>key</th>


  
          </tr>
        </thead>
        <tbody>
          
          {data?.map((row, index) => (
            <tr key={index}>
              <td>
                <input type="checkbox" />{row.receipt}
             
              </td>
              <td>
                {row.isActive ? (
                  <button className="posted"
                    onClick={() => handleButtonClick(index)}
                    style={{ backgroundColor: "darkgreen" }}
                  >
                    Posted
                  </button>
                ) : (
                  <button className="unposted"
                    onClick={() => handleButtonClick(index)}
                    style={{ backgroundColor: "yellow",color:"black" }}
                  >
                    Unposted
                  </button>
                )}
              </td>
              <td>
                <p>
                    {row.gravesite}
                </p>
             
              </td> <td>
               
              <p>
                    {row.paidBy}
                </p>
              </td> <td>
                <p>{row.NoOfPayments}</p>
             
              </td>
              
              <td>
                <p>{row.Total}</p>
             
              </td> <td>
                <p>{row.key}</p>
             
              </td>
            </tr>
            
          ))}
          
        </tbody>
      </table>
      <Footer/>
    </div>
  );
};

export default Table;
