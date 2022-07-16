import { Button } from "@startupsquare/ds";
import { RiAddBoxLine } from "react-icons/ri";

export default function ClickUpUiSection() {
  return (
    <div className="flex flex-col-reverse md:flex-row md:space-y-0 space-y-8 md:space-x-20 px-8 md:px-16 py-8 bg-red-50 md:py-20 overflow-hidden rounded-xl shadow-lg">
      <div className="flex flex-col space-y-8 w-1/2 text-left">
        <div className="flex space-x-8">
          {["Awards", "Incubation", "Investmets", "Innovation"].map((tab) => {
            return (
              <span
                className={`${
                  tab === "Awards" ? "border-red-400" : "border-transparent"
                } border-b-2 font-medium flex space-x-2 items-center py-1 cursor-pointer hover:text-red-500 text-blue-gray-800 text-md capitalize`}
              >
                <RiAddBoxLine size={14} />
                <span className="">{tab}</span>
              </span>
            );
          })}
        </div>
        <h2 className="text-blue-gray-700 text-4xl font-bold">
          For Universities, Awards organisers:
        </h2>
        <div className="space-y-2">
          <p className="text-blue-gray-500">
            from your program landing page to organising your ceremony day
          </p>
        </div>
        <div className="flex">
          <Button intent="danger">Get Started</Button>
        </div>
      </div>
      <div className="flex flex-col space-y-2 w-1/2">
        <div className="shadow-primary overflow-hidden rounded-lg">
          <video
            autoPlay={true}
            className="lazy loaded"
            loop={true}
            height="650"
            muted={true}
            playsInline={true}
            poster="https://clickup.com/images/poster-images/videos/main/views.png"
            width="980"
          >
            <source
              data-src="https://clickup.com/videos/main/views.mp4"
              type="video/mp4"
              src="https://clickup.com/videos/main/views.mp4"
            />
          </video>
        </div>
      </div>
    </div>
  );
}
