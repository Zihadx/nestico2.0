interface Advantage {
  title: string;
  description: string;
}

interface Project {
  id: string;
  title: string;
  description: string;
  advantages: Advantage[];
}

interface AdvantagesProps {
  allData: Project[];
  projectId: string;
}

const Advantages = ({ allData, projectId }: AdvantagesProps) => {
  const project = allData.find((item) => item.id === projectId);

  if (!project) {
    console.warn(`Project with ID "${projectId}" not found.`);
    return null;
  }

  const { title, advantages } = project;

  return (
    <div className="my-10 bg-[#ecf1f4] py-12 px-2">
      <div className="w-full lg:w-[1180px] mx-auto">
        <h1 className="text-4xl font-semibold mb-6 text-center">
          Advantages Of {title}
        </h1>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((advantage, index) => (
            <li key={index} className="flex flex-col md:flex-row md:items-start gap-4">
              <p className="hidden lg:block bg-[#d9d9d9] p-[13px] rounded-full mt-1 md:mt-0" />
              <div>
                <h2 className="text-xl font-bold mb-2 text-gray-800">
                  {advantage.title}
                </h2>
                <p className="text-gray-600 text-lg">{advantage.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Advantages;
