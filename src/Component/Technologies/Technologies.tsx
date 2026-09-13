import technologies from "../../Data/Technologies.json";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

type Technology = {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: string;
  rating: number;
  difficulty: string;
  badge: string;
};

const Technologies = () => {
  const [selectedTechnologies, setSelectedTechnologies] = useState<
    Technology[]
  >([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  // Add technology to stack
  const addTechnology = (technology: Technology) => {
    const alreadyAdded = selectedTechnologies.some(
      (item) => item.id === technology.id,
    );

    if (alreadyAdded) {
      toast.warning("This technology is already in your stack!");
      return;
    }

    setSelectedTechnologies([...selectedTechnologies, technology]);

    toast.success(`${technology.name} added to your stack!`);
  };

  // Remove technology from stack
  const removeTechnology = (id: string) => {
    const technology = selectedTechnologies.find((item) => item.id === id);

    const updatedTechnologies = selectedTechnologies.filter(
      (technology) => technology.id !== id,
    );

    setSelectedTechnologies(updatedTechnologies);

    if (technology) {
      toast.info(`${technology.name} removed from your stack.`);
    }
  };

  // Remove all technologies
  const removeAllTechnologies = () => {
    setSelectedTechnologies([]);
    toast.info("All technologies removed from your stack.");
  };
  if (loading) {
    return (
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto max-w-6xl px-4">
          <p className="text-center text-gray-600">Loading technologies...</p>
        </div>
      </section>
    );
  }
  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto max-w-6xl px-4">
        {/* Section heading */}
        <div className="mb-8 text-left">
          <h2 className="text-3xl font-bold text-gray-900">
            Explore the{" "}
            <span className="bg-linear-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>

          <p className="mt-2 text-gray-600">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        {/* Technologies and Your Stack */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          {/* Technologies */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {technologies.map((technology) => (
                <div
                  key={technology.id}
                  className="flex h-full flex-col rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
                >
                  {/* Icon and name */}
                  <div className="flex items-center gap-4">
                    <img
                      src={technology.icon}
                      alt={technology.name}
                      className="h-12 w-12"
                    />

                    <h3 className="text-xl font-semibold">{technology.name}</h3>
                  </div>

                  {/* Badge */}
                  <div className="mt-2">
                    <span className="rounded-full bg-pink-100 px-3 py-1 text-sm text-pink-600">
                      {technology.badge}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="mt-3 text-gray-600">{technology.description}</p>

                  {/* Category and difficulty */}
                  <div className="mt-4 flex items-center justify-between">
                    <span className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-600">
                      {technology.category}
                    </span>

                    <span className="text-sm text-gray-500">
                      {technology.difficulty}
                    </span>
                  </div>

                  {/* Rating */}
                  <div className="mt-4">
                    <span>⭐</span>
                    <span className="ml-1">{technology.rating}</span>
                  </div>

                  {/* Add button */}
                  <button
                    type="button"
                    onClick={() => addTechnology(technology)}
                    disabled={selectedTechnologies.some(
                      (item) => item.id === technology.id,
                    )}
                    className="mt-auto w-full rounded-lg bg-pink-600 px-4 py-2 font-medium text-white hover:bg-pink-700 disabled:cursor-not-allowed disabled:bg-gray-400"
                  >
                    {selectedTechnologies.some(
                      (item) => item.id === technology.id,
                    )
                      ? "✓ Added to Stack"
                      : "Add to Stack"}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Your Stack */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Your Stack</h2>

            <p className="mt-2 text-gray-500">
              {selectedTechnologies.length} technologies selected
            </p>

            <div className="mt-6 rounded-xl border border-gray-200 bg-white p-6">
              {selectedTechnologies.length === 0 ? (
                <p className="text-center text-gray-500">
                  Your stack is empty.
                </p>
              ) : (
                <div className="space-y-4">
                  {selectedTechnologies.map((technology) => (
                    <div
                      key={technology.id}
                      className="flex items-center justify-between gap-3"
                    >
                      {/* Icon and information */}
                      <div className="flex items-center gap-3">
                        <img
                          src={technology.icon}
                          alt={technology.name}
                          className="h-8 w-8"
                        />

                        <div>
                          <p className="font-medium text-gray-900">
                            {technology.name}
                          </p>

                          <p className="text-sm text-gray-500">
                            {technology.category}
                          </p>
                        </div>
                      </div>

                      {/* Remove button */}
                      <button
                        type="button"
                        onClick={() => removeTechnology(technology.id)}
                        className="text-gray-400 hover:text-red-500"
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Remove All button */}
            <button
              type="button"
              onClick={removeAllTechnologies}
              disabled={selectedTechnologies.length === 0}
              className="mt-4 w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-600 hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Remove All
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
