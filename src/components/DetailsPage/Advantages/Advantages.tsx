
const advantages = [
  {
    title: "Reduced Water Usage",
    description:
      "Walk-in showers use up to 50% less water, compared to other types of tubs and showers, which helps you save money on your utility bill.",
  },
  {
    title: "Easy to Clean",
    description:
      "Walk-in showers minimize mold and mildew growth. Since water doesn’t remain on the bathroom floor, but runs into the shower drain. This also makes cleanup and maintenance a breeze.",
  },
  {
    title: "Comfortable Bath Experience",
    description:
      "A walk-in shower is much more comfortable than a standard bath – you’ll enjoy the unrestricted movement of your arms and legs.",
  },
  {
    title: "Long-Term Durability",
    description:
      "Since walk-in showers employ fewer components than a standard bathtub or shower, there are fewer potential points of failure.",
  },
  {
    title: "Custom Features",
    description:
      "Our walk-in showers are custom-fitted to your requirements and come with anti-slip flooring, shower seats, and handy grab bars!",
  },
  {
    title: "Dementia-Friendly",
    description:
      "A walk-in shower is simple to use, allowing for easy temperature adjustments, and is comfortable for those with dementia.",
  },
];

const Advantages = () => {
  return (
    <div className="my-10 bg-[#ecf1f4] py-12">
      <div className="w-full lg:w-[1180px] mx-auto ">
      <h1 className="text-4xl font-semibold mb-6 text-center">Advantages Of Walk-In Showers</h1>
      <div className="">
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((advantage, index) => (
            <li key={index} className="flex flex-col md:flex-row md:items-start gap-4">
              <p className="bg-[#d9d9d9] p-[13px] rounded-full mt-1 md:mt-0" />
              <div>
                <h2 className="text-xl font-bold mb-2 text-gray-800">{advantage.title}</h2>
                <p className="text-gray-600 text-lg">{advantage.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      </div>
    </div>
  );
};

export default Advantages;
