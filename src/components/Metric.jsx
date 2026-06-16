export default function Metric({ label, value }) {

    return (
  
      <div className="flex items-center justify-between rounded-xl border border-[#f4efe7]/10 bg-[#080a0f]/70 px-4 py-3">
  
        <span className="text-sm text-[#a9a092]">{label}</span>
  
        <span className="text-sm font-semibold text-[#f4efe7]">{value}</span>
  
      </div>
  
    );
  
  }