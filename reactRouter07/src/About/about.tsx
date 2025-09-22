
function about() {
  return (
    <div className="w-full flex justify-center items-center px-4 py-8">
      <div className="w-1/2">
        <div className="w-full flex justify-center items-center">
          <h1 className="text-4xl font-serif font-bold text-red-400 m-auto">
            Welcome to the About Page!
          </h1>
        </div>
        <div>
          <p className="font-mono text-center w-3/4 m-auto mt-10">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium
            non pariatur repudiandae magni error similique soluta quidem
            accusamus autem velit ex nemo sit rem quam ipsam harum aliquid, est
            et!
          </p>
        </div>
      </div>
      <div className="w-1/2 flex justify-start items-center">
        <div className="w-full flex justify-center items-center">
          <img
            src="https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg"
            className="w-1/2"
            alt="Landing Page Image"
          />
        </div>
      </div>
    </div>
  );
}

export default about