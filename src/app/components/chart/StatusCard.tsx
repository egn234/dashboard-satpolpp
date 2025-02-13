"use client";

import { useEffect, useState } from "react";
import { ArrowTrendingDownIcon, ArrowTrendingUpIcon, MinusIcon } from "@heroicons/react/16/solid";

interface Data {
  pending: {
    total: number;
    totalLastWeek: number;
    differencePercentage: number;
  };
  processing: {
    total: number;
    totalLastWeek: number;
    differencePercentage: number;
  };
  done: {
    total: number;
    totalLastWeek: number;
    differencePercentage: number;
  };
}

export const StatusCard = () => {
  const [data, setData] = useState<Data | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/datacount");
      const data = await response.json();
      setData(data);
    };
    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  const handleTrending = (percent: number) => {
    if (percent > 0) {
      return (
        <span className="text-green-600">
          <ArrowTrendingUpIcon className="inline-block size-5 self-center mr-1" />
          <span className="inline-block text-sm">
            { percent }%
          </span>
        </span>
      )
    } else if (percent < 0) {
      return (
        <span className="text-red-600">
          <ArrowTrendingDownIcon className="inline-block size-5 self-center mr-1" />
          <span className="inline-block text-sm">
            { percent }%
          </span>
        </span>
      )
    } else {
      return (
        <span className="text-gray-600">
          <MinusIcon className="inline-block size-5 self-center mr-1" />
          <span className="inline-block text-sm">
            { percent }%
          </span>
        </span>
      )
    }
  }

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
      {/* <!-- Card --> */}
      <div className="flex flex-col gap-y-3 lg:gap-y-5 p-4 md:p-5 bg-white border shadow rounded-xl">
        <div className="inline-flex justify-center items-center">
          <span className="size-2 inline-block bg-yellow-500 rounded-full me-2"></span>
          <span className="text-xs font-semibold uppercase text-gray-600">Laporan Masuk</span>
        </div>
        <div className="text-center">
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-800">
            { data.pending.total }
          </h3>
        </div>
  
        <dl className="flex justify-center items-center divide-x divide-gray-200">
          <dt className="pe-3">
            { handleTrending(data.pending.differencePercentage) }
            <span className="block text-sm text-gray-500">perubahan</span>
          </dt>
          <dd className="text-start ps-3">
            <span className="text-sm font-semibold text-gray-800">
              { data.pending.totalLastWeek }
            </span>
            <span className="block text-sm text-gray-500">minggu lalu</span>
          </dd>
        </dl>
      </div>
      {/* <!-- End Card --> */}
    
      {/* <!-- Card --> */}
      <div className="flex flex-col gap-y-3 lg:gap-y-5 p-4 md:p-5 bg-white border shadow rounded-xl">
        <div className="inline-flex justify-center items-center">
          <span className="size-2 inline-block bg-red-500 rounded-full me-2"></span>
          <span className="text-xs font-semibold uppercase text-gray-600">Laporan Ongoing</span>
        </div>
  
        <div className="text-center">
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-800">
            { data.processing.total }
          </h3>
        </div>
  
        <dl className="flex justify-center items-center divide-x divide-gray-200">
          <dt className="pe-3">
            { handleTrending(data.processing.differencePercentage) }
            <span className="block text-sm text-gray-500">perubahan</span>
          </dt>
          <dd className="text-start ps-3">
            <span className="text-sm font-semibold text-gray-800">
              { data.processing.totalLastWeek }
            </span>
            <span className="block text-sm text-gray-500">minggu lalu</span>
          </dd>
        </dl>
      </div>
      {/* <!-- End Card --> */}

      {/* <!-- Card --> */}
      <div className="flex flex-col gap-y-3 lg:gap-y-5 p-4 md:p-5 bg-white border shadow rounded-xl">
        <div className="inline-flex justify-center items-center">
          <span className="size-2 inline-block bg-green-500 rounded-full me-2"></span>
          <span className="text-xs font-semibold uppercase text-gray-600">Laporan Selesai</span>
        </div>
  
        <div className="text-center">
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-800">
            { data.done.total }
          </h3>
        </div>
  
        <dl className="flex justify-center items-center divide-x divide-gray-200">
          <dt className="pe-3">
            { handleTrending(data.done.differencePercentage) }
            <span className="block text-sm text-gray-500">perubahan</span>
          </dt>
          <dd className="text-start ps-3">
            <span className="text-sm font-semibold text-gray-800">
              { data.done.totalLastWeek }
            </span>
            <span className="block text-sm text-gray-500">minggu lalu</span>
          </dd>
        </dl>
      </div>
      {/* <!-- End Card --> */}
    </div>
  );
}
