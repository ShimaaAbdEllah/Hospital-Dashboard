
export default function StatBlock({size, label, value, color, opacity = 0.3  ,icon ,clrs}) {
  const colors = {
    gray: [107, 114, 128],   
    red: [248, 113, 113],    
    green: [34, 197, 94],   
    yellow: [234, 179, 8],  
  };
console.log(clrs);

  const rgb = colors[color] || [229, 231, 235]; 

  return (
    <div
      className={`flex flex-row items-center rounded p-1  w-[${size}] rounded ${clrs}  justify-center align-center`}
      style={{
        backgroundColor:` ${!clrs && `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${opacity})`}`,
       width:size?size:'50%'
      }}

    >
      <div className={`flex items-center  ${rgb}} w-10 h-10 text-xl justify-center ${clrs} align-center rounded`} style={{
          backgroundColor: `${!clrs?'rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, 0.2)':``}`,  
        }}>{icon}</div>
     <div className="flex flex-col">
     <div className="text-[10px] text-gray-500 text-white">{label}</div>
     <div className="text-sm font-bold text-gray-800 text-white">{value}</div>
     </div>
    </div>
  );
}
