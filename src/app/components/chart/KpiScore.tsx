"use client";
import { 
  DocumentCheckIcon, ClockIcon,
  HeartIcon, ChevronDownIcon, ChevronUpIcon,
  DocumentTextIcon
} from "@heroicons/react/24/outline";

export const KpiScore = () => {
  return (
    <div className="mb-4">
      {/* <!-- Grid --> */}
      <div className="grid md:grid-cols-4 border border-gray-200 shadow-sm rounded-xl overflow-hidden">
        {/* <!-- Card --> */}
        <a className="block p-4 md:p-5 relative bg-white hover:bg-gray-50 focus:outline-none focus:bg-gray-50 before:absolute before:top-0 before:start-0 before:w-full before:h-px md:before:w-px md:before:h-full before:bg-gray-200 before:first:bg-transparent" href="#">
          <div className="flex md:flex flex-col lg:flex-row gap-y-3 gap-x-5">
            <DocumentCheckIcon className="size-5 text-gray-400" />

            <div className="grow">
              <p className="text-xs uppercase tracking-wide font-medium text-gray-800">
                Completion Rate
              </p>
              <h3 className="mt-1 text-xl sm:text-2xl font-semibold text-green-600">
                72.5%
              </h3>
              <div className="mt-1 flex justify-between items-center">
                <p className="text-sm text-gray-500">
                  dari <span className="font-semibold text-gray-800">70.1%</span>
                </p>
                <span className="ms-1 inline-flex items-center gap-1.5 py-1 px-2 rounded-md text-xs font-medium bg-gray-200 text-gray-800">
                  <ChevronUpIcon className="inline-block size-3 self-center" />
                  <span className="inline-block">
                    12.5%
                  </span>
                </span>
              </div>
            </div>
          </div>
        </a>
        {/* <!-- End Card --> */}

        {/* <!-- Card --> */}
        <a className="block p-4 md:p-5 relative bg-white hover:bg-gray-50 focus:outline-none focus:bg-gray-50 before:absolute before:top-0 before:start-0 before:w-full before:h-px md:before:w-px md:before:h-full before:bg-gray-200 before:first:bg-transparent" href="#">
          <div className="flex md:flex flex-col lg:flex-row gap-y-3 gap-x-5">
            {/* <svg className="shrink-0 size-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 22h14"/><path d="M5 2h14"/><path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22"/><path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2"/></svg> */}
            <ClockIcon className="size-5 text-gray-400" />
            <div className="grow">
              <p className="text-xs uppercase tracking-wide font-medium text-gray-800">
                Avg. Waktu Penyelesaian
              </p>
              <h3 className="mt-1 text-xl sm:text-2xl font-semibold text-blue-600">
                12 Jam
              </h3>
              <div className="mt-1 flex justify-between items-center">
                <p className="text-sm text-gray-500">
                  dari <span className="font-semibold text-gray-800">14.5 Jam</span>
                </p>
                <span className="ms-1 inline-flex items-center gap-1.5 py-1 px-2 rounded-md text-xs font-medium bg-gray-200 text-gray-800">
                  <ChevronUpIcon className="inline-block size-3 self-center" />
                  <span className="inline-block">
                    1.7%
                  </span>
                </span>
              </div>
            </div>
          </div>
        </a>
        {/* <!-- End Card --> */}

        {/* <!-- Card --> */}
        <a className="block p-4 md:p-5 relative bg-white hover:bg-gray-50 focus:outline-none focus:bg-gray-50 before:absolute before:top-0 before:start-0 before:w-full before:h-px md:before:w-px md:before:h-full before:bg-gray-200 before:first:bg-transparent" href="#">
          <div className="flex md:flex flex-col lg:flex-row gap-y-3 gap-x-5">
            {/* <svg className="shrink-0 size-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6"/><path d="m12 12 4 10 1.7-4.3L22 16Z"/></svg> */}
            <HeartIcon className="size-5 text-gray-400" />
            <div className="grow">
              <p className="text-xs uppercase tracking-wide font-medium text-gray-800">
                Rasio Penanganan
              </p>
              <h3 className="mt-1 text-xl sm:text-2xl font-semibold text-blue-600">
                1.22
              </h3>
              <div className="mt-1 flex justify-between items-center">
                <p className="text-sm text-gray-500">
                  dari <span className="font-semibold text-gray-800">1.14</span>
                </p>
                <span className="ms-1 inline-flex items-center gap-1.5 py-1 px-2 rounded-md text-xs font-medium bg-gray-200 text-gray-800">
                  <ChevronDownIcon className="inline-block size-3 self-center" />
                  <span className="inline-block">
                    4.4%
                  </span>
                </span>
              </div>
            </div>
          </div>
        </a>
        {/* <!-- End Card --> */}

        {/* <!-- Card --> */}
        <a className="block p-4 md:p-5 relative bg-white hover:bg-gray-50 focus:outline-none focus:bg-gray-50 before:absolute before:top-0 before:start-0 before:w-full before:h-px md:before:w-px md:before:h-full before:bg-gray-200 before:first:bg-transparent" href="#">
          <div className="flex md:flex flex-col lg:flex-row gap-y-3 gap-x-5">
            {/* <svg className="shrink-0 size-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12s2.545-5 7-5c4.454 0 7 5 7 5s-2.546 5-7 5c-4.455 0-7-5-7-5z"/><path d="M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/><path d="M21 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2"/><path d="M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2"/></svg> */}
            <DocumentTextIcon className="size-5 text-gray-400" />
            <div className="grow">
              <p className="text-xs uppercase tracking-wide font-medium text-gray-800">
                Pending &gt;24 Jam
              </p>
              <h3 className="mt-1 text-xl sm:text-2xl font-semibold text-red-600">
                210
              </h3>
              <div className="mt-1 flex justify-between items-center">
                <p className="text-sm text-gray-500">
                  from <span className="font-semibold text-gray-800">310</span>
                </p>
                <span className="ms-1 inline-flex items-center gap-1.5 py-1 px-2 rounded-md text-xs font-medium bg-gray-200 text-gray-800">
                  <ChevronDownIcon className="inline-block size-3 self-center" />
                  <span className="inline-block">
                    15.2%
                  </span>
                </span>
              </div>
            </div>
          </div>
        </a>
        {/* <!-- End Card --> */}
      </div>
      {/* <!-- End Grid --> */}
    </div>
  );
}