import { Link } from "react-router-dom"

const VideosLeatestSection = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-12 gap-5 max-w-7xl mx-auto my-30 p-0 md:p-5'>

      <div className='col-span-4 flex flex-col space-y-5'>
        <div>
          <h1 className="text-xl font-bold text-yellow-400"> Latest Video</h1>
          <span className="block border-t-2 p-2 border-t-yellow-400 h-2 w-30 "></span>
        </div>
        <h1 className="text-5xl font-bold">
          Let's Check Our <span className="text-yellow-400">Latest</span> Video
        </h1>
        <p>There are many variations of passages available but the majority have suffered alteration in some form by injected humour look even slightly believable.</p>
         <Link to="/video-gallery" className="bg-yellow-400 px-4 py-2 w-fit rounded-2xl hover:bg-yellow-500 text-white "> Learn More</Link>
      </div>

    <div className="col-span-8">
      <iframe
        width="100%"
        height="400"
        src="https://www.youtube.com/embed/8PgJKpLmQWw?rel=0&modestbranding=1&showinfo=0&controls=1"
        title="School Video Tour"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="rounded-tl-[70px] rounded-tr-[70px] rounded-br-[70px]"
      ></iframe>
    </div>
    </div>
  )
}

export default VideosLeatestSection