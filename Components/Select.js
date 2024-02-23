import React from "react";

export default function Select({ onSelect, darkMode }) {
  const selectHandler = (e) => {
    const regionName = e.target.value;
    onSelect(regionName);
  };
  return (
    <>
      <div className=" filter  ">
        <div className={`select  `}>
          <select className={`country `} onChange={selectHandler}>
            <option className="option ">Filter by Region</option>
            <option className="option" value="Africa">
              Africa
            </option>
            <option className="option" value="America">
              America
            </option>
            <option className="option" value="Asia">
              Asia
            </option>
            <option className="option" value="Europe">
              Europe
            </option>
            <option className="option" value="Oceania">
              Oceania
            </option>
          </select>
        </div>
      </div>
    </>
  );
}
