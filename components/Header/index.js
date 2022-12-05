import Logo from './Logo'

const styles = {
  wrapper: 'flex items-center space-x-10',
  container: 'flex flex-1 justify-between',
  navBar: 'flex items-center space-x-2',
  navItem:
    'cursor-pointer hover:text-[#1D1D1D] hover:bg-[#F2F2F2] transition duration-300 rounded-md px-4 py-2',
  menuBox: 'relative inline-block text-left',
  menuButton:
    'flex items-center rounded-full  text-white hover:text-gray-200 focus:outline-none',
  menuIcon: 'h-5 w-5',
  menuItems:
    'absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none',
  menuItemsContainer: 'py-1',
  menuItem: 'block w-full px-4 py-2 text-left text-sm',
  buttonActive: 'bg-gray-100 text-gray-900',
  buttonInactive: 'text-gray-700',
}

const transitions = {
  menuEnter: 'transition ease-out duration-100',
  menuEnterFrom: 'transform opacity-0 scale-95',
  menuEnterTo: 'transform opacity-100 scale-100',
  menuLeave: 'transition ease-in duration-75',
  menuLeaveFrom: 'transform opacity-100 scale-100',
  menuLeaveTo: 'transform opacity-0 scale-95',
}

const Header = () => {

  return (
    <header className={styles.wrapper}>
      {/* Your Collection logo can go inside this component */}
      <Logo />

      <div className={styles.container}>
        <ul className={styles.navBar}>
          <li className={styles.navItem}>Products</li>
          <li className={styles.navItem}>Marketplace</li>
          <li className={styles.navItem}>Gallery</li>
        </ul>
        {/* Wallet connect button goes here!  */}
        <button className='bg-gray-100 text-gray-900'>Connect Wallet</button>
      </div>
    </header>
  )
}

export default Header
