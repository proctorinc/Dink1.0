import FundEntry from "./FundEntry";

const FundsList = ({ funds, unallocatedBalance }) => {
  const fundEntries = funds?.map((fund) => (
    <FundEntry key={fund._id} fund={fund} />
  ));

  const unallocatedFund = {
    _id: "unallocated",
    name: "Unallocated",
    initial_amount: unallocatedBalance,
  };

  return (
    <>
      <h3 className="text-3xl">Funds:</h3>
      <div className="flex flex-col gap-2 pt-5">
        <FundEntry fund={unallocatedFund} />
        {fundEntries}
      </div>
    </>
  );
};

export default FundsList;
