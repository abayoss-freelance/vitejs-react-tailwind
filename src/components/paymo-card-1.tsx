export default function Paymo() {
  return (
    <div
      className="flex flex-col-reverse grid grid-cols-2 overflow-hidden rounded-xl shadow-lg w-2/3"
      style={{ background: "#83FAD2" }}
    >
      <div className="flex flex-col mb-8 space-y-2 text-left mt-20 ml-8 justify-end">
        <h2 className="text-blue-gray-800 text-4xl font-bold">
          Subtasks, multiple assignees, alerts & more
        </h2>
        <div className="space-y-2 text-blue-gray-600 flex">
          <p className="">
            Break big tasks into manageable sub-tasks, prioritize, and automate
            work.
            <span className="ml-1 text-bleu-gray-600 underline cursor-pointer flex-shrink-0">
              learn more
            </span>
          </p>
        </div>
      </div>
      <div className="flex flex-col space-y-2 mb-20 -mt-3">
        <div className="">
          <img
            src="https://www.paymoapp.com/_next/static/media/910.7fa43322.webp"
            className=""
          />
        </div>
      </div>
    </div>
  );
}
