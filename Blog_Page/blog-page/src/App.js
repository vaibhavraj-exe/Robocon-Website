import './App.css';

function App() {
  return (
    <div>


      <nav className="bg-white px-2 sm:px-4 py-2.5 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600 dark-background">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <a href="#" className="flex items-center">
            <svg width="276" height="72" viewBox="0 0 276 72" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-logo" >
              <path d="M0.696 22V17.136H15.192C15.9173 17.136 16.5467 16.9973 17.08 16.72C17.6133 16.4213 17.88 15.9413 17.88 15.28C17.88 14.7253 17.6773 14.3093 17.272 14.032C16.8667 13.7547 16.376 13.5733 15.8 13.488H8.376C7.33067 13.488 6.36 13.36 5.464 13.104C4.568 12.8267 3.77867 12.4213 3.096 11.888C2.43467 11.3547 1.89067 10.704 1.464 9.936C1.03733 9.14667 0.781333 8.25067 0.696 7.248V6.32C0.824 5.31733 1.09067 4.432 1.496 3.664C1.92267 2.87467 2.46667 2.224 3.128 1.712C3.78933 1.17867 4.55733 0.773332 5.432 0.495998C6.328 0.218665 7.30933 0.079998 8.376 0.079998H23.864V4.944H9.368C8.64267 4.944 8.01333 5.09333 7.48 5.392C6.94667 5.66933 6.68 6.13867 6.68 6.8C6.68 7.35467 6.872 7.78133 7.256 8.08C7.66133 8.37867 8.152 8.56 8.728 8.624H16.184C17.2293 8.624 18.2 8.76267 19.096 9.04C19.992 9.296 20.7707 9.69067 21.432 10.224C22.1147 10.736 22.6587 11.3867 23.064 12.176C23.4907 12.944 23.7573 13.8293 23.864 14.832V15.76C23.736 16.7627 23.4587 17.6587 23.032 18.448C22.6267 19.216 22.0933 19.8667 21.432 20.4C20.7707 20.912 19.992 21.3067 19.096 21.584C18.2 21.8613 17.2293 22 16.184 22H0.696ZM27.2585 22V8.624H41.7545C42.4798 8.624 43.1092 8.48533 43.6425 8.208C44.1758 7.90933 44.4425 7.44 44.4425 6.8C44.4425 6.13867 44.1758 5.66933 43.6425 5.392C43.1092 5.09333 42.4798 4.944 41.7545 4.944H27.2585V0.079998H42.7465C43.7918 0.079998 44.7625 0.218665 45.6585 0.495998C46.5545 0.773332 47.3332 1.17867 47.9945 1.712C48.6558 2.224 49.1892 2.87467 49.5945 3.664C50.0212 4.432 50.2985 5.31733 50.4265 6.32V7.248C50.2345 9.296 49.4238 10.8533 47.9945 11.92C46.5652 12.9653 44.6238 13.488 42.1705 13.488L50.5225 22H43.3225L34.7465 13.488H33.1465V22H27.2585ZM67.805 22L59.709 8.4V22H53.821V0.079998H60.925L69.149 13.776L77.373 0.079998H84.477V22H78.589V8.4L70.493 22H67.805ZM1.544 72V51.936H23.288C24.376 51.936 25.32 51.728 26.12 51.312C26.92 50.864 27.32 50.16 27.32 49.2C27.32 48.208 26.92 47.504 26.12 47.088C25.32 46.64 24.376 46.416 23.288 46.416H1.544V39.12H24.776C26.344 39.12 27.8 39.328 29.144 39.744C30.488 40.16 31.656 40.768 32.648 41.568C33.64 42.336 34.44 43.312 35.048 44.496C35.688 45.648 36.104 46.976 36.296 48.48V49.872C36.008 52.944 34.792 55.28 32.648 56.88C30.504 58.448 27.592 59.232 23.912 59.232L36.44 72H25.64L12.776 59.232H10.376V72H1.544ZM41.3878 49.872V61.248C41.3878 62.976 41.6598 64.512 42.2038 65.856C42.7798 67.2 43.5638 68.336 44.5558 69.264C45.5798 70.16 46.7958 70.848 48.2038 71.328C49.6118 71.776 51.1638 72 52.8598 72H64.6198C66.3158 72 67.8678 71.776 69.2758 71.328C70.6838 70.848 71.8998 70.16 72.9238 69.264C73.9478 68.336 74.7318 67.2 75.2758 65.856C75.8518 64.512 76.1398 62.976 76.1398 61.248V49.872C76.1398 48.144 75.8518 46.624 75.2758 45.312C74.7318 43.968 73.9478 42.848 72.9238 41.952C71.8998 41.024 70.6838 40.32 69.2758 39.84C67.8678 39.36 66.3158 39.12 64.6198 39.12H52.8598C51.1638 39.12 49.6118 39.36 48.2038 39.84C46.7958 40.32 45.5798 41.024 44.5558 41.952C43.5638 42.848 42.7798 43.968 42.2038 45.312C41.6598 46.624 41.3878 48.144 41.3878 49.872ZM67.3078 60.528C67.3078 61.904 66.9398 62.944 66.2038 63.648C65.4998 64.352 64.4758 64.704 63.1318 64.704H54.3958C53.0518 64.704 52.0118 64.352 51.2758 63.648C50.5718 62.944 50.2198 61.904 50.2198 60.528V50.592C50.2198 49.216 50.5718 48.176 51.2758 47.472C52.0118 46.768 53.0518 46.416 54.3958 46.416H63.1318C64.4758 46.416 65.4998 46.768 66.2038 47.472C66.9398 48.176 67.3078 49.216 67.3078 50.592V60.528ZM81.2315 72V51.936H103.888C104.752 51.84 105.488 51.568 106.096 51.12C106.704 50.672 107.008 50.032 107.008 49.2C107.008 48.208 106.608 47.504 105.807 47.088C105.008 46.64 104.064 46.416 102.976 46.416H81.2315V39.12H104.464C106.032 39.12 107.488 39.328 108.832 39.744C110.176 40.16 111.344 40.768 112.336 41.568C113.328 42.336 114.128 43.312 114.736 44.496C115.376 45.648 115.792 46.976 115.984 48.48V49.872C115.728 52.208 114.944 54.128 113.632 55.632C114.912 57.136 115.696 59.008 115.984 61.248V62.64C115.824 64.144 115.424 65.488 114.784 66.672C114.176 67.824 113.36 68.8 112.336 69.6C111.344 70.4 110.176 71.008 108.832 71.424C107.488 71.808 106.032 72 104.464 72H81.2315ZM103.888 59.232H90.0635V64.704H102.976C104.064 64.704 105.008 64.496 105.807 64.08C106.608 63.632 107.008 62.928 107.008 61.968C107.008 61.136 106.704 60.512 106.096 60.096C105.488 59.648 104.752 59.36 103.888 59.232ZM121.075 49.872V61.248C121.075 62.976 121.347 64.512 121.891 65.856C122.467 67.2 123.251 68.336 124.243 69.264C125.267 70.16 126.483 70.848 127.891 71.328C129.299 71.776 130.851 72 132.547 72H144.307C146.003 72 147.555 71.776 148.963 71.328C150.371 70.848 151.587 70.16 152.611 69.264C153.635 68.336 154.419 67.2 154.963 65.856C155.539 64.512 155.827 62.976 155.827 61.248V49.872C155.827 48.144 155.539 46.624 154.963 45.312C154.419 43.968 153.635 42.848 152.611 41.952C151.587 41.024 150.371 40.32 148.963 39.84C147.555 39.36 146.003 39.12 144.307 39.12H132.547C130.851 39.12 129.299 39.36 127.891 39.84C126.483 40.32 125.267 41.024 124.243 41.952C123.251 42.848 122.467 43.968 121.891 45.312C121.347 46.624 121.075 48.144 121.075 49.872ZM146.995 60.528C146.995 61.904 146.627 62.944 145.891 63.648C145.187 64.352 144.163 64.704 142.819 64.704H134.083C132.739 64.704 131.699 64.352 130.963 63.648C130.259 62.944 129.907 61.904 129.907 60.528V50.592C129.907 49.216 130.259 48.176 130.963 47.472C131.699 46.768 132.739 46.416 134.083 46.416H142.819C144.163 46.416 145.187 46.768 145.891 47.472C146.627 48.176 146.995 49.216 146.995 50.592V60.528ZM186.839 60.528V59.28H195.671V61.248C195.671 62.976 195.383 64.512 194.807 65.856C194.263 67.2 193.479 68.336 192.455 69.264C191.431 70.16 190.215 70.848 188.807 71.328C187.399 71.776 185.847 72 184.151 72H172.391C170.695 72 169.143 71.776 167.735 71.328C166.327 70.848 165.111 70.16 164.087 69.264C163.095 68.336 162.311 67.2 161.735 65.856C161.191 64.512 160.919 62.976 160.919 61.248V49.872C160.919 48.144 161.191 46.624 161.735 45.312C162.311 43.968 163.095 42.848 164.087 41.952C165.111 41.024 166.327 40.32 167.735 39.84C169.143 39.36 170.695 39.12 172.391 39.12H184.151C185.847 39.12 187.399 39.36 188.807 39.84C190.215 40.32 191.431 41.024 192.455 41.952C193.479 42.848 194.263 43.968 194.807 45.312C195.383 46.624 195.671 48.144 195.671 49.872V51.84H186.839V50.592C186.839 49.216 186.471 48.176 185.735 47.472C185.031 46.768 184.007 46.416 182.663 46.416H173.927C172.583 46.416 171.543 46.768 170.807 47.472C170.103 48.176 169.751 49.216 169.751 50.592V60.528C169.751 61.904 170.103 62.944 170.807 63.648C171.543 64.352 172.583 64.704 173.927 64.704H182.663C184.007 64.704 185.031 64.352 185.735 63.648C186.471 62.944 186.839 61.904 186.839 60.528ZM200.763 49.872V61.248C200.763 62.976 201.035 64.512 201.579 65.856C202.155 67.2 202.939 68.336 203.931 69.264C204.955 70.16 206.171 70.848 207.579 71.328C208.987 71.776 210.539 72 212.235 72H223.995C225.691 72 227.243 71.776 228.651 71.328C230.059 70.848 231.275 70.16 232.299 69.264C233.323 68.336 234.107 67.2 234.651 65.856C235.227 64.512 235.515 62.976 235.515 61.248V49.872C235.515 48.144 235.227 46.624 234.651 45.312C234.107 43.968 233.323 42.848 232.299 41.952C231.275 41.024 230.059 40.32 228.651 39.84C227.243 39.36 225.691 39.12 223.995 39.12H212.235C210.539 39.12 208.987 39.36 207.579 39.84C206.171 40.32 204.955 41.024 203.931 41.952C202.939 42.848 202.155 43.968 201.579 45.312C201.035 46.624 200.763 48.144 200.763 49.872ZM226.683 60.528C226.683 61.904 226.315 62.944 225.579 63.648C224.875 64.352 223.851 64.704 222.507 64.704H213.771C212.427 64.704 211.387 64.352 210.651 63.648C209.947 62.944 209.595 61.904 209.595 60.528V50.592C209.595 49.216 209.947 48.176 210.651 47.472C211.387 46.768 212.427 46.416 213.771 46.416H222.507C223.851 46.416 224.875 46.768 225.579 47.472C226.315 48.176 226.683 49.216 226.683 50.592V60.528ZM275.359 72H266.431L249.439 51.6V72H240.607V39.12H249.583L266.527 59.52V39.12H275.359V72Z" fill="white" />
              <path d="M125.708 4.944H117.068V22H111.18V4.944H102.54V0.079998H125.708V4.944ZM129.102 22V8.624H150.03V13.488H134.99V17.136H150.03V22H129.102ZM150.03 4.944H129.102V0.079998H150.03V4.944ZM161.159 22V17.136H167.047V22H161.159ZM169.735 22L164.103 5.392L158.471 22H152.615L160.135 0.079998H168.071L175.623 22H169.735ZM192.211 22L184.115 8.4V22H178.227V0.079998H185.331L193.555 13.776L201.779 0.079998H208.883V22H202.995V8.4L194.899 22H192.211Z" fill="#C20000" />
            </svg>
          </a>
          <div className="flex md:order-2">
            <img src={require('./assets/images/logo_gif.gif')} style={{width:"100px"}} />
            <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
            </button>
          </div>
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-stickY">
            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 dark-background">
              <li>
                <a href="#" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Home</a>
              </li>
              <li>
                <a href="#" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Team</a>
              </li>
              <li>
                <a href="#" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Alumni</a>
              </li>
              <li>
                <a href="#" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Projects & Achievements</a>
              </li>
              <li>
                <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">Category <svg className="w-4 h-4 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
                {/* <!-- Dropdown menu --> */}
                <div id="dropdownNavbar" className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                  <ul className="py-1 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                    <li>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                    </li>
                    <li aria-labelledby="dropdownNavbarLink">
                      <button id="doubleDropdownButton" data-dropdown-toggle="doubleDropdown" data-dropdown-placement="right-start" type="button" className="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Category<svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg></button>
                      <div id="doubleDropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700">
                        <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="doubleDropdownButton">
                          <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Overview</a>
                          </li>
                          <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">My downloads</a>
                          </li>
                          <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Billing</a>
                          </li>
                          <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Rewards</a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                    </li>
                  </ul>
                  <div className="py-1">
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Sign out</a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>


    </div>
  );
}

export default App;
