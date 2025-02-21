import Link from "next/link";

interface GetStartedProps {
  path: string;
  extraStyle?: string;
}

const GetStarted: React.FC<GetStartedProps> = ({ path, extraStyle }) => {
  return (
    <div className="flex justify-center w-full"> {/* Centering Wrapper */}
      <Link href={path}>
        <button
          className={`px-10 py-5 text-2xl font-bold rounded-lg bg-green-500 hover:bg-green-600 text-white transition-colors ${extraStyle}`}
        >
          Get Started
        </button>
      </Link>
    </div>
  );
};

export default GetStarted;
