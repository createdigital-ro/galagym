import Image from "next/image";

type Memberships = {
  type: string;
  days: number;
  price: number;
  tag: string;
}[];

const Preturi = () => {
  const memberships = {
    unlimited: [
      { type: "Abonament", days: 30, price: 180, tag: "" },
      { type: "Abonament", days: 60, price: 320, tag: "" },
      { type: "Abonament", days: 90, price: 430, tag: "BEST DEAL" },
    ],
    limited: [
      { type: "1 Sedință", days: 30, price: 35, tag: "" },
      { type: "8 Sedințe", days: 30, price: 140, tag: "" },
      { type: "12 Sedințe", days: 30, price: 160, tag: "" },
    ],
    personalTrainer: [
      { type: "1 Sedință", days: 30, price: 60, tag: "" },
      { type: "8 Sedințe", days: 30, price: 440, tag: "" },
      { type: "12 Sedințe", days: 30, price: 600, tag: "POPULAR" },
    ],
  };
  return (
    <div>
      <Image
        src="/blob.svg"
        alt="Background element"
        width={100}
        height={100}
        className="hidden sm:block md:hidden lg:block absolute left-0 top-96 w-[90px] h-[400px] lg:w-[130px] xl:w-[200px] lg:h-[400px]"
      />
      <Image
        src="/lightning.svg"
        alt="Background element"
        width={130}
        height={130}
        className="hidden sm:block md:hidden lg:block absolute right-0 top-48 w-[90px] h-[400px] lg:w-[130px] xl:w-[200px] lg:h-[500px]"
      />
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center">
        Prețuri
      </h1>
      <div>
        <MembershipCategory
          title="Nelimitat"
          memberships={memberships.unlimited}
        />
        <MembershipCategory title="Sedințe" memberships={memberships.limited} />
        <div>
          <h3 className="font-bold mt-8 text-center text-3xl md:text-4xl lg:text-[2.40rem]">
            Ai nevoie de antrenamente{" "}
            <span className="bg-[#0f0f0f] text-yellow-400 px-1">
              personalizate
            </span>
            ?
          </h3>
          <MembershipCategory
            title="Antrenor personal"
            memberships={memberships.personalTrainer}
          />
        </div>
      </div>
    </div>
  );
};

export default Preturi;

const PriceContainer = ({
  type,
  price,
  days,
  tag,
}: {
  type: string;
  price: number;
  days: number;
  tag: string;
}) => {
  return (
    <div className="bg-[#0f0f0f] text-white rounded-md w-[200px] py-3 px-5 mx-auto shadow-[3px_3px] shadow-yellow-400 hover:scale-105 relative">
      {tag && (
        <span className="bg-yellow-400 rounded-full text-[#0f0f0f] text-[.60rem] px-2 font-bold absolute -top-2 right-3">
          {tag}!
        </span>
      )}
      <div className="flex flex-col leading-5">
        <p className="font-bold">{type}</p>
        <p>{days} de zile</p>
      </div>
      <p className="mt-8 font-bold">{price} lei</p>
    </div>
  );
};

const MembershipCategory = ({
  title,
  memberships,
}: {
  title: string;
  memberships: Memberships;
}) => {
  return (
    <div>
      <div className="lg:max-w-[700px] lg:mx-auto">
        <h3 className="text-center font-bold text-2xl mt-8 mb-2 lg:text-4xl lg:text-left lg:ml-3 md:text-3xl">
          {title}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 md:max-w-[700px] md:mx-auto gap-4">
          {memberships.map((m, index) => (
            <PriceContainer
              key={index}
              type={m.type}
              price={m.price}
              days={m.days}
              tag={m.tag}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
