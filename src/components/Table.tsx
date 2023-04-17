import type { FC } from 'react';
import { useEffect, useState } from 'react';

import type { Publication } from '@/generated';
import { PublicationSortCriteria, usePublicationsQuery } from '@/generated';

const Table: FC = () => {
  const [newlyAddedItemIds, setNewlyAddedItemIds] = useState<string[]>([]);
  const [previousData, setPreviousData] = useState<any>(null);
  const { data, refetch } = usePublicationsQuery({
    variables: { request: { sortCriteria: PublicationSortCriteria.Latest, limit: 50 } }
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      refetch().then(({ data }) => {
        const newItems = data?.explorePublications.items.filter((item) => {
          return (
            !previousData?.explorePublications.items.some(
              (prevItem: Publication) => prevItem.id === item.id
            ) && !newlyAddedItemIds.includes(item.id)
          );
        });

        setNewlyAddedItemIds(newlyAddedItemIds.concat(newItems.map((item) => item.id)));

        setTimeout(() => {
          setNewlyAddedItemIds([]);
        }, 500);

        setPreviousData(data);
      });
    }, 5000);

    return () => clearInterval(intervalId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newlyAddedItemIds, previousData]);

  return (
    <>
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">Title</h1>
          <p className="mt-2 text-sm text-gray-700">Some copy here</p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <div>Stats here</div>
        </div>
      </div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-center text-sm font-semibold text-gray-900 sm:pl-6"
                    >
                      Post ID
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900">
                      User
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900">
                      App
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900">
                      Tags
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {data?.explorePublications.items.map((publication) => (
                    <tr
                      key={publication.id}
                      className={newlyAddedItemIds.includes(publication.id) ? 'bg-yellow-100' : ''}
                    >
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-center text-sm font-medium text-gray-900 sm:pl-6">
                        {publication.id}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-center text-sm text-gray-500">
                        {publication.id}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-center text-sm text-gray-500">
                        {publication.id}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-center text-sm text-gray-500">
                        {publication.id}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Table;
