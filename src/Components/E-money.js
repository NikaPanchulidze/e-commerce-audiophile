export default function EMoney() {
  return (
    <>
      <div className="input-checkout e-Money-number">
        <span>e-Money/Number</span>
        <input
          type="text"
          placeholder="235423556"
          
          />
      </div>
      <div className="input-checkout e-Money-pin">
        <span>e-Money/PIN</span>
        <input
          type="text"
          placeholder="1234"
          
          />
      </div>
    </>
  );
}