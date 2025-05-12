import StatBlock from "./StatBlock";
import { FaBed } from "react-icons/fa";
export default function ICUProgressGroup({ icuData  ,color}) {
  const colors = {
    ICU: "bg-yellow-500/30",
    CCU: "bg-red-500/30",
    NuroICU: "bg-green-500/30",
  };

  const colorss = {
    gray: [107, 114, 128],   
    red: [248, 113, 113],    
    green: [34, 197, 94],    
    yellow: [234, 179, 8],   
  };

  return (
    <div className="space-y-3">
      {icuData.map((item) => (
        <div key={item.label} className="flex items-center justify-between gap-2">
      <div className={`flex-1 rounded p-2 text-white ${colors[item.label]} rounded w-65` } >

            <div className="flex justify-between text-xs text-white mb-1">
              <span>{item.label}</span>
              <span>{item.rate}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className={`${colors[item.label]} h-2 rounded-full`}
                style={{ width: `${item.rate}%` }}
              ></div>
            </div>
          </div>

          <div className="flex gap-1">
            <StatBlock size={'50%'} label="Total" value={item.total}  icon={<FaBed className="text-white" />} color={color} />
            <StatBlock size={'50%'} label="Vacant" value={item.vacant} clrs={colors[item.label]} icon={<FaBed className="text-white" />  } color={color}/>
          </div>
        </div>
      ))}
    </div>
  );
}
