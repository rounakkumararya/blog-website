import { Link } from "react-router-dom";

export default function PostCard({ post }) {
  return (
    <div className="group m-1 relative w-full border shadow-lg h-[350px] overflow-hidden rounded-lg sm:w-[350px] transition-all">
      <Link to={`/post/${post.slug}`}>
        <img
          src={post.image}
          alt="post cover"
          className="h-[230px] w-full  object-cover group-hover:h-[180px] transition-all duration-300 z-20"
        />
      </Link>
      <div className="p-3 flex flex-col gap-2">
        <p className="text-lg font-semibold line-clamp-2">{post.title}</p>
        <div className="flex justify-between text-gray-500">
          <span className="text-xs">
            {new Date(post.createdAt).toLocaleDateString("en-GB")}
          </span>
          <span className="italic text-xs">{post.category}</span>
        </div>
        <Link
          to={`/post/${post.slug}`}
          className="z-10 group-hover:bottom-0 absolute bottom-[-200px] left-0 right-0 text-white bg-orange-400 hover:bg-yellow-300  transition-all duration-300 text-center py-2 rounded-md !rounded-tl-none m-2"
        >
          Read article
        </Link>
      </div>
    </div>
  );
}
