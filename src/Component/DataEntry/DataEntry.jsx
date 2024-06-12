import React, { useState } from 'react';

import { whitevariationSvg, FolderSvg,CircleSvg, GreenSvg, Co2, PiechartSvg, AddIcon, User, Leftarrow, Layer1, Layer2, Layer3, ReducedEmission } from "./../../assets";

const DataEntry = () => {
    const [formData, setFormData] = useState({
        year: '',
    });


    const [rows, setRows] = useState([
        { Description:'', EmissionReduced:'', FacilityId: '', Facility:''},
        { Description:'', EmissionReduced:'', FacilityId: '', Facility:''},
    ]);

 
    const yearRanges = [
        '2022-2023',
        '2021-2022',
        '2020-2021',
        '2019-2020',
        '2018-2019',
        '2017-2018',
    ];




      
      const handleYearChange = (event) => {
        const yearValue = event.target.value;
        setFormData(prevData => ({
            ...prevData,
            year: yearValue
        }));
    };
    

  const rowCount = rows.length;

      
      // const handleInputChange = (index, key, value) => {
      //     const newRows = [...rows];
      //     newRows[index][key] = value;
      //     setRows(newRows);
      // };
      
    //   


      const renderDynamicRows = () => {
        return rows.map((rowData, index) => (
            <div className='row-bar' key={index}>
                <div className="data-row">
                    <input type="text" placeholder="Description of Emission reduction activity" className="mobile-combustion-data-entry-child1-vehicle" value={rowData.Description}  />
                    
                    <input className="mobile-combustion-data-entry-child3-consumption" type="text" placeholder="Less Emissions in MTCO2 " value={rowData.EmissionReduced}  />
                    
                    <input className="mobile-combustion-data-entry-child4-si" type="text" placeholder="Facility ID" value={rowData.FacilityId} />
                    <input className="mobile-combustion-data-entry-child2-fuel" type="text" placeholder="Facility Name" value={rowData.Facility}  />

                    <button className="offsets-page-child15" >
                    <img className="add-3-icon" alt="" src={AddIcon}/>
                    <b className="add-entry2">ADD ENTRY</b>
                    
                    </button>
                    <div className="line-div" />
                    
                </div>
            </div>
        ));
    };

    const addRow = () => {
        setRows([...rows,  { Description:'', EmissionReduced:'', FacilityId: '', Facility:''}]);
    };

    return (
        <div className="mobile-combustion-data-entry">
           
        <form >
      <div className="mobile-combustion-data-entry-child" />
      <img
        className="white-variation-11"
        alt=""
        src={whitevariationSvg}
      />
      <div className="mobile-combustion-data-entry-item" />
      <img className="user-5-11" alt="" src={User}/>
      <img
        className="data-management-1-icon1"
        alt=""
        src={GreenSvg}
      />
      <img
        className="data-management-4-icon1"
        alt=""
        src={PiechartSvg}
      />
      <img
        className="data-management-2-icon1"
        alt=""
        src={CircleSvg}
      />
      <div className="co2-group">
        <img className="co21" alt="" src={Co2} />
      </div>
      <div className="dropdown-box1">
        <div className="">
          <div className="menu-label2">
            <div className="menu-label3">
            <select
                             value={formData.selectedYear}
                             onChange={handleYearChange}
                              className="year-dropdown header1"
                            >
                         <option value="">Reporting Year</option>
                            {yearRanges.map((year) => (
                                 <option key={year} value={year}>
                                       {year}
                         </option>
                        ))}
                        </select>
            </div>
          </div>
         
          
        </div>
      </div>
      <div className="reporting-year2">Reporting Year</div>
      <img
        className="data-management-3-icon1"
        alt=""
        src={FolderSvg}
      />
      <img
        className="left-arrow-in-circular-button-icon1"
        alt=""
        src={Leftarrow}
      />

      <div className="select-month">SI Units</div>
      
      <div className="type-of-electricity2">Description</div>
      
     
      <div className="fuel1">EMISSIONS REDUCED</div>

      <div className="Units">FACILITY ID</div>
      <b className="type-of-offset">FACILITY</b>
      
      <b className="offsets">OFFSETS</b>
      <div className="offsets-page-child24" />
      <img
        className="data-management-5-icon"
        alt=""
        src={ReducedEmission}
      />

      <img className="vector-icon" alt="" src={Layer1}/>
      <img
        className="mobile-combustion-data-entry-child13"
        alt=""
        src={Layer2}
      />
      <img
        className="mobile-combustion-data-entry-child14"
        alt=""
        src={Layer3}
      />
      <div className="ellipse-div" />
      <div className="mobile-combustion-data-entry-child15" />
      <div className="mobile-combustion-data-entry-child16" />

      <div className="div">-2356</div>
      <div className="mtco2">MTCO2</div>

      <div className={`dynamic-rows-container ${rowCount > 0 ? 'scrollable' : ''}`}>
        <div>
          <div className="dynamic-rows">{renderDynamicRows()}</div>
        </div>
      </div>
      <buton className="mobile-combustion-data-entry-child12" onClick={addRow}>
        <img className="add-6-icon" alt="" src={AddIcon}/>
        <b className="add-data">ADD ROW</b>
      </buton>
    </form>
    </div>
    );
};

export default DataEntry;
