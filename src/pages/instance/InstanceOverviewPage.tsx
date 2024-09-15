import { FC } from 'react';
// Analytics
import { usePageTracking } from '../../hooks/useAnalytics';
import Navbar from '../../components/nav/Navbar';
import { HelmetItem } from '../../components/utils/HelmetItem';
import { CompanyName } from '../../utils/Constants';

const InstanceOverviewPage: FC = () => {
  usePageTracking();

  return (
    <>
      {/* Tab Data */}
      <HelmetItem
        PageName={'Instance overview'}
        desc={`Instance overview page of ${CompanyName}.`}
      />

      <div className='grid min-h-screen h-full'>
        <div className='grid grid-rows-reg'>
          <Navbar />

          {/* Main page content */}
          <main role='main'>instance</main>
        </div>
      </div>
    </>
  );
};

export default InstanceOverviewPage;
