type Memberships = {
  type: string;
  days: number;
  price: number;
}[];

const Preturi = () => {
  const memberships = {
    unlimited: [
      { type: "Abonament", days: 30, price: 180 },
      { type: "Abonament", days: 60, price: 320 },
      { type: "Abonament", days: 90, price: 430 },
    ],
    limited: [
      { type: "1 Sedință", days: 30, price: 35 },
      { type: "8 Sedințe", days: 30, price: 140 },
      { type: "12 Sedințe", days: 30, price: 160 },
    ],
    personalTrainer: [
      { type: "1 Sedință", days: 30, price: 60 },
      { type: "8 Sedințe", days: 30, price: 440 },
      { type: "12 Sedințe", days: 30, price: 600 },
    ],
  };
  return (
    <div>
      <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-center">
        Preturi
      </h1>
      <div>
        <MembershipCategory
          title="Nelimitat"
          memberships={memberships.unlimited}
        />
        <MembershipCategory title="Sedințe" memberships={memberships.limited} />
        <div>
          <h3>
            Ai nevoie de antrenamente <span>personalizate</span>?
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
}: {
  type: string;
  price: number;
  days: number;
}) => {
  return (
    <div>
      <div>
        <p>{type}</p>
        <p>{days} de zile</p>
      </div>
      <p>{price} lei</p>
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
      <h3>{title}</h3>
      {memberships.map((m, index) => (
        <PriceContainer
          key={index}
          type={m.type}
          price={m.price}
          days={m.days}
        />
      ))}
    </div>
  );
};
