import {
  AcademicCapIcon,
  PencilIcon,
  TrophyIcon,
} from "@heroicons/react/24/solid";
import Button from "./Button";

const GetStarted = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <h2 className="mb-24 mr-auto font-secondary text-5xl font-semibold text-gray-700">
          Get started in <span className="magic-text">an instant</span>
        </h2>
        <div className="grid w-full grid-cols-2 gap-12 ">
          <div className="group/teacher peer/teacher rounded-2xl border border-gray-200 bg-white px-12 py-10 peer-hover/student:bg-black">
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-primary/50">
              <TrophyIcon className="h-12 w-12 text-sky-600" />
            </div>
            <h2 className="mt-16 font-secondary text-4xl font-semibold text-gray-700">
              As a Teacher
            </h2>
            <p className="mb-16 mt-12 leading-relaxed text-gray-500">
              Become a teacher on our platform and share notes with students
              across the globe. You have the option to monetize or keep your
              notes free for everyone. As a teacher, you get to help make this
              world a better place by sharing your knowledge with others.
            </p>
            <button className="duration-400 mt-auto flex self-start rounded-lg bg-primary px-16 py-4 font-medium text-white shadow-md shadow-primary/50 transition-colors delay-200 ease-in hover:bg-primary-400 hover:shadow-xl hover:shadow-primary-400/50">
              Sign up
            </button>
          </div>
          <div className="group/student peer/student flex flex-col rounded-2xl border border-gray-200 bg-white px-12 py-10">
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-primary/50">
              <AcademicCapIcon className="h-12 w-12 text-sky-600" />
            </div>
            <h2 className="mt-16 font-secondary text-4xl font-semibold text-gray-700">
              As a Student
            </h2>
            <p className="mb-16 mt-12 leading-relaxed text-gray-500">
              Become a student and get access to high-quality notes from
              exceptionaly talented teachers. You can also bookmark notes and
              add reviews for notes. You can access free or paid notes according
              to your financial condition.
            </p>
            <button className="duration-400 mt-auto self-start rounded-lg bg-primary px-16 py-4 font-medium text-white shadow-md shadow-primary/50 transition-colors delay-200 ease-in hover:bg-primary-400 hover:shadow-xl hover:shadow-primary-400/50">
              View notes
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetStarted;
