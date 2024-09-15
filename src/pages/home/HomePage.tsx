import React from 'react';
// Analytics
import { usePageTracking } from '../../hooks/useAnalytics';
// Components
import Navbar from '../../components/nav/Navbar';
import { HelmetItem } from '../../components/utils/HelmetItem';
// Constants
import { CompanyName } from '../../utils/Constants';
import { ButtonStyle } from '../../utils/Styles';
import { databasesArray } from '../../models/instances/InstanceModels';

const HomePage: React.FC = () => {
  usePageTracking();

  const openDatabaseInstance = () => {
    console.log('open');
  }

  return (
    <>
      {/* Tab Data */}
      <HelmetItem PageName={'Home'} desc={`Home page of ${CompanyName}.`} />

      <div className='grid min-h-screen h-full'>
        <div className='grid grid-rows-reg'>
          <Navbar />

          {/* Main page content */}
          <main role='main'>
            <div className='grid grid-rows-reg h-full'>
              <header className='grid bg-slate-300 p-2'>
                <div className='flex justify-between'>
                  <div className='grid items-center'>
                    <h3 className='font-bold'>INSTANCES</h3>
                  </div>
                  <div className='pr-4'>
                    <button className={ButtonStyle}>
                      Create New Instance +
                    </button>
                  </div>
                </div>
              </header>

              <section className='grid h-fit mt-4'>
                <div className='bg-white container mx-auto border border-black border-solid rounded overflow-hidden shadow-xl'>
                  <div className='grid'>
                    <div className='grid'>
                      <table className='min-w-full table-auto text-sm'>
                        <thead>
                          <tr className='bg-gray-200'>
                            <th className='py-2 pl-1 text-left'>Name</th>
                            <th className='py-2 text-left'>Host</th>
                            <th className='py-2 text-left'>Plan</th>
                            <th className='py-2 text-left'>Datacenter</th>
                            <th className='py-2 text-left'>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {databasesArray.map((instance) => (
                            <tr key={instance.id} onClick={openDatabaseInstance} className='bg-white border-b cursor-pointer hover:bg-slate-300'>
                              <td className='py-2 pl-1'>{instance.name}</td>
                              <td className='py-2'>{instance.host}</td>
                              <td className='py-2'>{instance.plan}</td>
                              <td className='py-2'>
                                {instance.datacenter}
                              </td>
                              <td className='py-2'>{instance.actions}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default HomePage;
