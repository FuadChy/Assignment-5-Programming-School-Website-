import  technologies from '../../Data/Technologies.json'


const Technologies = () => {
    // console.log(technologies);
    return (
        <section  className="bg-gray-50 py-12">
            {/* central div */}
            <div className="container mx-auto max-w-6xl px-4">
                {/* explore part upper div */}
                <div className="mb-8 text-left">
                    <h2 className="text-3xl font-bold text-gray-900">Explore the <span className="bg-linear-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">Technologies</span></h2>
            <p>Pick one technology per category to build your ideal stack.</p>
                </div>
{/* all card div */}
<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
    {
technologies.map((technology) => (
// individual card div
  <div key={technology.id} className="flex h-full flex-col rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
   <div className="flex items-center gap-4">
  <img
    src={technology.icon}
    alt={technology.name}
    className="h-12 w-12"
  />

  <h3 className="text-xl font-semibold">
    {technology.name}
  </h3>
</div>
<div className="mt-2">
  <span className="rounded-full bg-pink-100 px-3 py-1 text-sm text-pink-600">
    {technology.badge}
  </span>
</div>
<p className="mt-3 text-gray-600">
  {technology.description}
</p>
<div className="mt-4 flex items-center justify-between">
  <span  className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-600">{technology.category}</span>
  <span className="text-sm text-gray-500">{technology.difficulty}</span>
</div>
<div className="mt-4">
  <span>⭐</span>
  <span className="ml-1">{technology.rating}</span>
</div>
<button
  type="button"
  className="mt-auto w-full rounded-lg bg-pink-600 px-4 py-2 font-medium text-white hover:bg-pink-700"
>
  Add to Stack
</button>
  </div>
))
}
</div>
            </div>
        </section>
    );
};

export default Technologies;