import React, { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
// Icons
import { IoMdMenu } from 'react-icons/io';
// Images
import LogoWhite from '../../assets/images/logos/tech-design-tavistock-logo-white.svg';
// Context
import { useUser } from '../../context/UserContext';
// Constants
import {
  ADMIN_PAGE_URL,
  CompanyName,
  HOME_PAGE_URL,
  LOGIN_PAGE_URL,
} from '../../utils/Constants';
import InstancesDropdown from '../../utils/user/InstancesDropdown';

const Navbar: React.FC = () => {
  const { user } = useUser();
  const [isPhoneNavOpen, setIsPhoneNavOpen] = useState<boolean>(false);
  const [selectedInstance, setSelectedInstance] = useState<string>('all_instances');

  const togglePhoneNav = () => {
    setIsPhoneNavOpen(!isPhoneNavOpen);
  };

  return (
    <nav
      role='navigation'
      aria-label='Main Navigation'
      className='relative grid bg-nav-background'
    >
      <div className='grid grid-cols-3 px-4 py-4'>
        <section className='grid'>
          <div className='grid h-fit items-center'>
            <NavLink to={HOME_PAGE_URL}>
              <div className='flex gap-2'>
                <div>
                  <img
                    src={LogoWhite}
                    alt={`${CompanyName} business logo - White Logo`}
                    className='w-10 h-10 cursor-pointer active:scale-95'
                    loading='lazy'
                  />
                </div>
                <div className='grid items-center'>
                  <span className='text-xl font-bold text-orange-600'>
                    {CompanyName}
                  </span>
                </div>
              </div>
            </NavLink>
          </div>
        </section>

        {/* Drop down of instances */}
        <section className='grid justify-center'>
          <InstancesDropdown
            selectedInstance={selectedInstance}
            setSelectedInstance={setSelectedInstance}
          />
        </section>

        <section className='grid justify-end'>
          {/* Mobile screen */}
          <section className='grid md:hidden items-center justify-end h-full'>
            <button
              onClick={togglePhoneNav}
              aria-label='Toggle navigation menu'
              className='grid w-fit h-fit items-center justify-center text-4xl text-white dark:text-dark-text-light active:brightness-90'
            >
              <IoMdMenu className='active:scale-90 duration-300' />
            </button>
          </section>

          {/* Large screen */}
          <ul className='hidden md:grid grid-flow-col gap-6 items-center text-orange-600'>
            <NavItem url={HOME_PAGE_URL} title={'Home'} />
            <NavItem url={LOGIN_PAGE_URL} title={'Login'} />
            {user?.role === ('ADMIN' || 'DEVELOPER') && (
              <NavItem url={ADMIN_PAGE_URL} title={'Admin'} />
            )}
          </ul>
        </section>
      </div>

      {/* Phone navbar when active */}
      {isPhoneNavOpen && (
        <div
          className={`grid z-40 absolute top-[100%] bg-nav-background h-fit w-full pb-6`}
        >
          <ul className='grid gap-6 items-center justify-center text-center text-orange-600'>
            <NavItem url={HOME_PAGE_URL} title={'Home'} />
            <NavItem url={LOGIN_PAGE_URL} title={'Login'} />
            {user?.role === ('ADMIN' || 'DEVELOPER') && (
              <NavItem url={ADMIN_PAGE_URL} title={'Admin'} />
            )}
          </ul>
        </div>
      )}
    </nav>
  );
};

interface NavItemProps {
  url: string;
  title: string;
}

const NavItem: React.FC<NavItemProps> = ({ url, title }) => {
  return (
    <li className='active:scale-90'>
      <NavLink
        to={url}
        aria-label={`${title} page navigation tab`}
        className={`text-lg font-semibold font-poppins hover:brightness-90 duration-200 active:scale-75`}
        style={({ isActive }) => {
          return isActive ? { color: 'white' } : {};
        }}
      >
        {title}
      </NavLink>
    </li>
  );
};

export default Navbar;
