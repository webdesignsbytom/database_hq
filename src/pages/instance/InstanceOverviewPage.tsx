import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// Analytics
import { usePageTracking } from '../../hooks/useAnalytics';
import Navbar from '../../components/nav/Navbar';
import { HelmetItem } from '../../components/utils/HelmetItem';
import { CompanyName } from '../../utils/Constants';
import { databasesArray } from '../../models/instances/InstanceModels';

const InstanceOverviewPage: React.FC = () => {
  usePageTracking();
  const { id } = useParams<{ id: string }>(); // Get the instance ID from the URL

  const [instance, setInstance] = useState<null | (typeof databasesArray)[0]>(
    null
  ); // State to hold the instance data
  const [loading, setLoading] = useState(true); // State to handle loading state

  useEffect(() => {
    // Simulate fetching instance data from databasesArray or an API
    const fetchInstanceData = () => {
      setLoading(true);
      const foundInstance = databasesArray.find((db) => db.id === id);
      setInstance(foundInstance || null);
      setLoading(false);
    };

    fetchInstanceData();
  }, [id]); // Run this effect whenever the `id` changes

  if (loading) {
    return <div>Loading...</div>; // Show a loading state while fetching data
  }

  if (!instance) {
    return <div>Instance not found</div>; // Show an error if no instance is found
  }

  return (
    <>
      {/* Tab Data */}
      <HelmetItem
        PageName={'Instance overview'}
        desc={`Instance overview page of ${CompanyName}.`}
      />

      <div className='grid min-h-screen h-full max-h-screen overflow-hidden'>
        <div className='grid grid-rows-reg max-h-screen overflow-hidden'>
          <Navbar />

          {/* Main page content */}
          <main role='main'>
            <div className='grid h-full bg-blue-300 grid-cols-reg'>
              <nav className='grid bg-red-300 w-full h-full'>
                <div className='p-1 w-full h-full'>
                  <ul>
                    <li className='px-1 hover:bg-slate-300 cursor-pointer'>Details</li>
                    <li className='px-1 hover:bg-slate-300 cursor-pointer'>Browser</li>
                    <li className='px-1 hover:bg-slate-300 cursor-pointer'>Backup</li>
                    <li className='px-1 hover:bg-slate-300 cursor-pointer'>Log</li>
                  </ul>
                </div>
              </nav>

              {/* Data section */}
              <section>
                <h1 className='text-2xl font-bold'>{instance.name}</h1>
                <p>
                  <strong>Host:</strong> {instance.host}
                </p>
                <p>
                  <strong>Plan:</strong> {instance.plan}
                </p>
                <p>
                  <strong>Datacenter:</strong> {instance.datacenter}
                </p>
              </section>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default InstanceOverviewPage;
