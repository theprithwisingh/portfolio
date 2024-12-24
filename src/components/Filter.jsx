// import React, { useState } from 'react';

// const Filter = ({ categories, onFilter }) => {
//   const [selectedCategory, setSelectedCategory] = useState('');

//   const handleFilterChange = (e) => {
//     const category = e.target.value;
//     setSelectedCategory(category);
//     onFilter(category);
//   };

//   return (
//     <div className='mb-5'>
//       <select 
//         value={selectedCategory} 
//         onChange={handleFilterChange} 
//         className='border p-2 rounded'>
//         <option value=''>All Categories</option>
//         {categories.map((category, index) => (
//           <option key={index} value={category}>
//             {category}
//           </option>
//         ))}
//       </select>
//     </div>
//   );
// };

// export default Filter;


import React from 'react';

const Filter = ({ categories, selectedCategory, onCategoryChange }) => {
  return (
    <div className="filter-container mb-5 flex gap-3 flex-wrap">
      {categories.map((category, index) => (
        <button
          key={index}
          onClick={() => onCategoryChange(category)}
          className={`px-2 py-1 rounded-md text-[11px] font-semibold transition ${
            selectedCategory === category ? 'bg-[#0BDA51] text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Filter;
