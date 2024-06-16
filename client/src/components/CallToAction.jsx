import { Button } from "flowbite-react";

export default function CallToAction() {
  return (
    <div className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
      <div className="flex-1 justify-center flex flex-col">
        <h2 className="text-2xl">Want to hire me for web dev projects?</h2>
        <p className="text-gray-500 my-2">
          Checkout my Linkedin profile to reach me!!
        </p>
        <Button
          gradientDuoTone="purpleToPink"
          className="rounded-tl-xl rounded-bl-none"
        >
          <a href="" target="_blank" rel="noopener noreferrer">
            Click here!
          </a>
        </Button>
      </div>
      <div className="p-7 flex-1">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMgGyaZxWO_9A1WQCWAU4nj7jOlx_TaQ94VQ&s" />
      </div>
    </div>
  );
}
