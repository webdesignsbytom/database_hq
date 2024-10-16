import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// Analytics
import { usePageTracking } from '../../hooks/useAnalytics';
// Constants
import { CompanyName } from '../../utils/Constants';
// Components
import Navbar from '../../components/nav/Navbar';
import { HelmetItem } from '../../components/utils/HelmetItem';
import SideNavbar from '../../components/nav/SideNavbar';
// Models
import { databasesArray } from '../../models/instances/InstanceModels';
import InstanceOverview from '../../components/instances/InstanceOverview';
import InstanceBrowser from '../../components/instances/InstanceBrowser';

const InstanceOverviewPage: React.FC = () => {
  usePageTracking();

  const { id } = useParams<{ id: string }>(); // Get the instance ID from the URL

  const [instance, setInstance] = useState<null | (typeof databasesArray)[0]>(
    null
  ); // State to hold the instance data
  const [loading, setLoading] = useState(true); // State to handle loading state
  const [activeComponent, setActiveComponent] = useState<string>('overview');

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

  const handleComponentChange = (component: string) => {
    console.log(`Switching to component: ${component}`);
    setActiveComponent(component);
  };

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
          <main role='main' className='grid overflow-hidden w-full h-full'>
            <div className='grid h-full bg-blue-300 grid-cols-reg overflow-hidden'>
              <nav className='grid bg-slate-400 w-full h-full overflow-hidden'>
                <SideNavbar handleComponentChange={handleComponentChange} />
              </nav>

              <section className='grid h-full w-full overflow-y-auto bg-green-300'>
                {/* Toggle between InstanceData and InstanceBrowser */}
                {activeComponent === 'overview' && (
                  <InstanceOverview
                    name={instance.name}
                    host={instance.host}
                    plan={instance.plan}
                    datacenter={instance.datacenter}
                    user={instance.user}
                    password={instance.password}
                    url={instance.url}
                    createdAt={instance.createdAt}
                    databaseSize={instance.databaseSize}
                  />
                )}

                {activeComponent === 'browser' && (
                  <InstanceBrowser tables={instance.tables} />
                )}
              </section>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default InstanceOverviewPage;
