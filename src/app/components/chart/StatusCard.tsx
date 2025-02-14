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

  const renderCard = (color: string, title: string, total: number, differencePercentage: number, totalLastWeek: number) => (
    <div className="flex flex-col gap-y-3 lg:gap-y-5 p-4 md:p-5 bg-white border shadow rounded-xl">
      <div className="inline-flex justify-center items-center">
        <span className={`size-2 inline-block ${color} rounded-full me-2`}></span>
        <span className="text-xs font-semibold uppercase text-gray-600">{title}</span>
      </div>
      <div className="text-center">
        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-800">
          {total}
        </h3>
      </div>
      <dl className="flex justify-center items-center divide-x divide-gray-200">
        <dt className="pe-3">
          {handleTrending(differencePercentage)}
          <span className="block text-sm text-gray-500">perubahan</span>
        </dt>
        <dd className="text-start ps-3">
          <span className="text-sm font-semibold text-gray-800">
            {totalLastWeek}
          </span>
          <span className="block text-sm text-gray-500">minggu lalu</span>
        </dd>
      </dl>
    </div>
  );

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
      {renderCard("bg-yellow-500", "Total Laporan Publik", data.pending.total, data.pending.differencePercentage, data.pending.totalLastWeek)}
      {renderCard("bg-yellow-500", "Total Laporan Bidang", data.pending.total, data.pending.differencePercentage, data.pending.totalLastWeek)}
      {renderCard("bg-red-500", "Sedang Ditangani", data.processing.total, data.processing.differencePercentage, data.processing.totalLastWeek)}
      {renderCard("bg-green-500", "Selesai", data.done.total, data.done.differencePercentage, data.done.totalLastWeek)}
    </div>
  );
}
