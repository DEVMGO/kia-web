import { Fragment } from 'react'

// Components
import SectionOne from '../components/home/sectionOne';
import SectionTwo from '../components/home/sectionTwo';
import SectionThree from '../components/home/sectionThree';
import Portfolio from '../components/home/portfolio';
import Blog from '../components/home/blog';
import Moshavere from '../components/home/moshavere';
import AboutKiaWeb from '../components/home/aboutKiaWeb';


export default function Home() {
  return (
    <Fragment>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <Portfolio />
      <Blog />
      <Moshavere />
      <AboutKiaWeb />
    </Fragment>
  )
}

Home.layout = "L1";