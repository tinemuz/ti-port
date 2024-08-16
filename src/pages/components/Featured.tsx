export default function Featured() {
  return (
    <div className="">
      <div className="">
        {/* Section One */}
        <div className="grid h-5 grid-cols-3 border border-mgray">
          <div className="col-span-2"></div>
          <div className="border-l border-l-mgray"></div>
        </div>
        <div className="aspect-3/1 grid grid-cols-3 border border-b-0 border-t-0 border-mgray">
          <div className="col-span-2"></div>
          <div className="col-span-1 border-l border-l-mgray"></div>
        </div>
        {/* Section Two */}
        <div className="grid h-5 grid-cols-3 border border-mgray">
          <div className=""></div>
          <div className="border-l border-l-mgray"></div>
          <div className="border-l border-l-mgray"></div>
        </div>
        <div className="aspect-3/1 grid grid-cols-3 border border-t-0 border-mgray">
          <div className=""></div>
          <div className="border-l border-l-mgray"></div>
          <div className="border-l border-l-mgray"></div>
        </div>
      </div>
    </div>
  );
}
