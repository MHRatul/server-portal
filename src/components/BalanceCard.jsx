const BalanceCard = () => (
    <div className="bg-white shadow-md rounded-md p-4 text-center mt-4">
      <h2 className="text-lg font-semibold">Welcome, <span className="text-green-600">seba</span></h2>
      <p className="text-blue-600 font-bold">Your Balance: 180.00</p>
      <button className="mt-3 bg-green-600 text-white px-4 py-2 rounded-md">
        Recharge
      </button>
    </div>
  );

  export default BalanceCard;
