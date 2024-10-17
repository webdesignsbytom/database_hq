import React, { useEffect, useRef, useState } from 'react';

// Constants
import { CompanyName } from '../../utils/Constants';
// Icons
import ChecklistIcon from '../../assets/images/icons/checklist_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg';
import HomeIcon from '../../assets/images/icons/home_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg';
import DropdownIcon from '../../assets/images/icons/keyboard_arrow_down_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg';
import DashboardIcon from '../../assets/images/icons/dashboard_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg';
import CreateFolderIcon from '../../assets/images/icons/create_new_folder_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg';

// Type definitions for props and state
interface NavItemProps {
  item: NavOption;
}

interface NavOption {
  label: string;
  icon: string;
  subItems?: { label: string; link: string }[];
  handleComponentChange: () => void;
}

interface SideNavbarProps {
  handleComponentChange: (component: string) => void;
}

function SideNavbar({ handleComponentChange }: SideNavbarProps) {
  const toggleRef = useRef<HTMLButtonElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const [isClosed, setIsClosed] = useState(false);
  const [openedIndex, setOpenedIndex] = useState<number | null>(null);

  useEffect(() => {
    if (!isClosed && openedIndex !== null) {
      const menuId = `dropdown_button_${openedIndex}`;
      const menuSelected = document.getElementById(menuId);

      if (menuSelected) {
        const icon = menuSelected.querySelector('.down_icon img');
        if (icon) {
          icon.classList.toggle('rotate');
        }

        const menu = menuSelected.querySelector('ul');
        if (menu) {
          menu.classList.toggle('show');
        }
      }
    }
  }, [isClosed, openedIndex]);

  const toggleSidebar = () => {
    if (toggleRef.current) {
      toggleRef.current.classList.toggle('rotate');
    }
    if (navRef.current) {
      navRef.current.classList.toggle('close');
    }
    setIsClosed(!isClosed);
  };

  const toggleDropdownMenu = (menuId: string) => {
    const menuSelected = document.getElementById(menuId);
    if (menuSelected) {
      const icon = menuSelected.querySelector('.down_icon img');
      if (icon) {
        icon.classList.toggle('rotate');
      }

      const menu = menuSelected.querySelector('ul');
      if (menu) {
        menu.classList.toggle('show');
      }
    }
  };

  const toggleOpenFromMenu = (menuId: string, index: number) => {
    if (toggleRef.current) {
      toggleRef.current.classList.toggle('rotate');
    }
    if (navRef.current) {
      navRef.current.classList.toggle('close');
    }
    setOpenedIndex(index);
  };

  const navOptions: NavOption[] = [
    {
      label: 'Overview',
      icon: HomeIcon,
      handleComponentChange: () => handleComponentChange('overview'),
    },
    {
      label: 'Browser',
      icon: DashboardIcon,
      handleComponentChange: () => handleComponentChange('browser'),
    },
    {
      label: 'Backup',
      icon: CreateFolderIcon,
      handleComponentChange: () => handleComponentChange('backup'),
      subItems: [
        { label: 'Arm', link: '/robots/#arm' },
        { label: 'Mouse', link: '/robots/#mouse' },
        { label: 'Vehicle', link: '/robots/#vehicle' },
      ],
    },
    {
      label: 'Log',
      icon: ChecklistIcon,
      handleComponentChange: () => handleComponentChange('log'),
      subItems: [
        { label: 'Work', link: '#' },
        { label: 'Private', link: '#' },
        { label: 'Coding', link: '#' },
        { label: 'Gardening', link: '#' },
        { label: 'School', link: '#' },
      ],
    },
  ];

  return (
    <nav
      id='sidenav_container'
      ref={navRef}
      className='grid grid-rows-reg border-r-2 border-solid border-border-main-dark'
    >
      <section className='grid h-fit'>
        <div className='grid grid-cols-rev px-1 py-2 items-center'>
          <span className='logo pl-2 overflow-x-hidden truncate'>
            {CompanyName}
          </span>
          <button
            onClick={toggleSidebar}
            id='toggle-btn'
            ref={toggleRef}
            className='bg-none rounded-full hover:bg-hover-colour-dark mx-auto p-1'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              height='24px'
              viewBox='0 -960 960 960'
              width='24px'
              fill='#e8eaed'
            >
              <path d='m313-480 155 156q11 11 11.5 27.5T468-268q-11 11-28 11t-28-11L228-452q-6-6-8.5-13t-2.5-15q0-8 2.5-15t8.5-13l184-184q11-11 27.5-11.5T468-692q11 11 11 28t-11 28L313-480Zm264 0 155 156q11 11 11.5 27.5T732-268q-11 11-28 11t-28-11L492-452q-6-6-8.5-13t-2.5-15q0-8 2.5-15t8.5-13l184-184q11-11 27.5-11.5T732-692q11 11 11 28t-11 28L577-480Z' />
            </svg>
          </button>
        </div>
      </section>

      <section className='grid w-full h-full overflow-hidden'>
        <ul className='grid gap-2 w-full h-fit overflow-hidden'>
          {navOptions.map((item, index) => (
            <li key={index} className='text-nowrap cursor-pointer'>
              {isClosed ? (
                <div
                  onClick={() => {
                    setIsClosed(false);
                    item.handleComponentChange();
                  }}
                  className='grid items-center justify-center py-2 px-4 hover:brightness-125'
                >
                  <img
                    title={item.label}
                    src={item.icon}
                    alt={`${item.label} icon`}
                    className='w-6 h-6 min-w-6 min-h-6'
                  />
                </div>
              ) : (
                <button
                  onClick={item.handleComponentChange}
                  className='grid gap-2 grid-cols-a1a w-full py-2 pl-4 pr-2 hover:brightness-125'
                >
                  <div>
                    <img
                      src={item.icon}
                      alt={`${item.label} dropdown menu icon button`}
                      className='w-6 h-6 min-w-6 min-h-6'
                    />
                  </div>
                  <div className='text-start'>
                    <span>{item.label}</span>
                  </div>
                  {item.subItems && (
                    <div className='down_icon'>
                      <img
                        src={DropdownIcon}
                        alt='Dropdown menu down arrow icon'
                        className='w-6 h-6 min-w-6 min-h-6'
                      />
                    </div>
                  )}
                </button>
              )}
            </li>
          ))}
        </ul>
      </section>
    </nav>
  );
}

export default SideNavbar;
