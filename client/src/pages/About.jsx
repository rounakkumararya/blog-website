import aboutImg from "../assets/about/about.jpg";

export default function About() {
  return (
    <div className="min-h-screen items-center justify-center">
      <img
        className="object-cover  min-h-[80%]  min-w-full  rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 "
        src={aboutImg}
        alt=""
      />
      <div className="max-w-2xl mx-auto p-3 text-center">
        <div>
          <h1 className="text-3xl font font-semibold text-center my-7">
            BlogHive
          </h1>
          <div className="text-md text-gray-500 flex flex-col gap-6">
            <p>
              Welcome to BlogHive! This blog was created by Rounak kumar arya as
              a personal project to share his thoughts and ideas with the world.
              I am a passionate developer who loves to write about technology,
              coding, and everything in between.
            </p>

            <p>
              On this blog, you'll find weekly articles and tutorials on topics
              such as web development, software engineering, and programming
              languages. I am always learning and exploring new technologies, so
              be sure to check back often for new content!
            </p>

            <p>
              We encourage you to leave comments on our posts and engage with
              other readers. You can like other people's comments and reply to
              them as well. We believe that a community of learners can help
              each other grow and improve.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
