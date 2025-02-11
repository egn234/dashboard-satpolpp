import { ArrowTrendingUpIcon, ArrowDownCircleIcon } from '@heroicons/react/24/outline';

export default function StatusCard() {
  return (
    <div className="rounded-sm border border-stroke bg-white p-4 shadow-default md:p-6 xl:p-7.5">
      <div className='flex items-end justify-between'>
        <div>
          <h3 className='mb-4 text-4xl font-bold text-black'>197</h3>
          <p className='font-medium'>Aduan Masuk</p>
          <span className='mt-2 flex items-center gap-2'>
            <span className='flex items-center gap-1 rounded-md bg-green-600 p-1 text-xs font-medium text-white'>
              <ArrowTrendingUpIcon className='size-4' />
              <span>+2.5%</span>
            </span>
            <span className='text-sm font-medium text-gray-500'>Since last month</span>
          </span>
        </div>
      </div>
    </div>
  );
}
