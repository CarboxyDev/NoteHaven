import { AcademicCapIcon, TrophyIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const GetStarted = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <h2
          id="get-started"
          className="mb-24 mr-auto font-secondary text-5xl font-semibold text-gray-700"
        >
          Get started in <span className="magic-text">an instant</span>
        </h2>
        <div className="grid w-full grid-cols-none grid-rows-2 gap-12 lg:grid-cols-2 lg:grid-rows-none ">
          <div className="group/teacher peer/teacher flex flex-col rounded-2xl border border-gray-200 bg-white px-12 py-10 peer-hover/student:bg-black">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/50">
              <TrophyIcon className="h-8 w-8 text-sky-600" />
            </div>
            <h2 className="mt-10 font-secondary text-3xl font-semibold text-gray-700">
              As a Teacher
            </h2>
            <p className="mb-12 mt-6 leading-relaxed text-gray-500">
              Become a teacher on our platform and share notes with students
              across the globe. You have the option to monetize or keep your
              notes free for everyone. As a teacher, you get to help make this
              world a better place by sharing your knowledge with others.
            </p>
            <Link href="/teacher" className="self-start">
              <button className="duration-400 mt-auto self-start rounded-lg bg-primary px-16 py-4 font-medium text-white shadow shadow-primary/50 transition delay-200 ease-in hover:bg-primary-400 hover:shadow-md hover:shadow-primary-400/50">
                Sign up
              </button>
            </Link>
          </div>
          <div className="group/student peer/student flex flex-col rounded-2xl border border-gray-200 bg-white px-12 py-10">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/50">
              <AcademicCapIcon className="h-8 w-8 text-sky-600" />
            </div>
            <h2 className="mt-10 font-secondary text-3xl font-semibold text-gray-700">
              As a Student
            </h2>
            <p className="mb-12 mt-6 leading-relaxed text-gray-500">
              Become a student and get access to high-quality notes from
              exceptionaly talented teachers. You can also bookmark notes and
              add reviews for notes. You can access free or paid notes according
              to your financial condition.
            </p>
            <Link href="/browse" className="mt-auto self-start">
              <button className="duration-400 rounded-lg bg-primary px-16 py-4 font-medium text-white shadow shadow-primary/50 transition delay-200 ease-in hover:bg-primary-400 hover:shadow-md hover:shadow-primary-400/50">
                View notes
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetStarted;
