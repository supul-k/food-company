import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import HeroSection from '../components/about/HeroSection';
import VisionMission from '../components/about/VisionMission';
import StorySection from '../components/about/StorySection';
import StatsSection from '../components/about/StatsSection';
import OperationsSection from '../components/about/OperationsSection';
import ChairmanMessage from '../components/about/ChairmanMessage';
import TimelineSection from '../components/about/TimelineSection';
import CSRProjects from '../components/about/CSRProjects';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Sustenance Lanka',
  alternates: {
    canonical: '/about',
  },
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        {/* <div className="w-500 mx-auto"> */}
          <HeroSection />
          <VisionMission />
          <StorySection />
          <StatsSection />
          <OperationsSection />
          <ChairmanMessage />
          <TimelineSection />
           {/* <TeamSection />      */}
          <CSRProjects />
        {/* </div> */}
      </main>
      <Footer />
    </>
  );
}