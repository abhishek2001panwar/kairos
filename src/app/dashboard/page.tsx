import React from 'react'

const page = () => {
  return (
           <div className="antialiased">
  {/* Navbar */}
  <nav className="bg-white shadow-sm px-4 py-3 fixed left-0 right-0 top-0 z-50">
    <div className="flex flex-wrap justify-between items-center">
      <div className="flex justify-start items-center">
        <button data-drawer-target="drawer-navigation" data-drawer-toggle="drawer-navigation" aria-controls="drawer-navigation" className="p-2 mr-2 text-acent1 rounded-lg cursor-pointer lg:hidden hover:bg-bgLight focus:bg-bgLight focus:ring-2 focus:ring-acent1">
          <svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
          </svg>
          <span className="sr-only">Toggle sidebar</span>
        </button>
        {/* Logo */}
        <a href="/" className="flex items-center justify-between mr-4">
          <img src="../assets/images/logo.png" className="mr-3 h-8 hidden md:inline" alt="Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap">Enjam</span>{/* Institute Short Name*/}
        </a>
        {/* Tab Name */}
        <h4 className="hidden lg:block text-base lg:text-2xl font-medium text-primary ml-5">Dashboard</h4>
      </div>
      {/* Institute Name */}
      <div className="hidden lg:inline">
        <h1 className="text-xl md:text-3xl lg:text-5xl font-medium text-primary">ABC Institue Dhaka</h1>
      </div>
      <div className="flex items-center gap-3 lg:order-2">
        {/* Notification icon */}
        <button type="button" data-dropdown-toggle="notification-dropdown" className="flex items-center justify-center relative w-9 h-9 rounded-xl text-acent1 bg-bgLight hover:bg-acent1 hover:text-white focus:bg-acent1 focus:text-white transition-all duration-200">
          <span className="absolute flex h-5 w-6 -top-2 -right-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-acent1 opacity-75" />
            <span className="relative flex items-center justify-center rounded-full h-6 w-6 bg-acent1 text-[9px] text-white">02</span>
          </span>
          <i className="text-lg fa-regular fa-bell" />
        </button>
        {/* Notification Dropdown menu */}
        <div className="hidden overflow-hidden z-50 my-4 max-w-sm text-base list-none bg-white divide-y divide-gray-100 shadow-lg dark:divide-gray-600 dark:bg-gray-700 rounded-xl" id="notification-dropdown">
          <h4 className="block py-2 px-4 text-base font-medium text-center text-white bg-acent1">Notifications</h4>
          <div>
            <a href="#" className="flex py-3 px-4 border-b border-gray-300 hover:bg-bgLight">
              <div className="flex-shrink-0">
                <img className="w-11 h-11 rounded-full object-cover" src="../assets/images/teachers/8.png" alt="Rubel Islam" />
              </div>
              <div className="pl-3 w-full">
                <div className="text-gray-500 font-normal text-sm mb-1.5 dark:text-gray-400">
                  New message from
                  <span className="font-semibold text-gray">Rubel Islam</span>: "Create a new class text for class 10."
                </div>
                <div className="text-xs font-medium text-primary">a few moments ago</div>
              </div>
            </a>
            <a href="#" className="flex py-3 px-4 border-b border-gray-300 hover:bg-bgLight">
              <div className="flex-shrink-0">
                <img className="w-11 h-11 rounded-full object-cover" src="../assets/images/teachers/8.png" alt="Rubel Islam" />
              </div>
              <div className="pl-3 w-full">
                <div className="text-gray-500 font-normal text-sm mb-1.5 dark:text-gray-400">
                  New message from
                  <span className="font-semibold text-gray">Rubel Islam</span>: "Create a new class text for class 10."
                </div>
                <div className="text-xs font-medium text-primary">a few moments ago</div>
              </div>
            </a>
            <a href="#" className="flex py-3 px-4 border-b border-gray-300 hover:bg-bgLight">
              <div className="flex-shrink-0">
                <img className="w-11 h-11 rounded-full object-cover" src="../assets/images/teachers/8.png" alt="Rubel Islam" />
              </div>
              <div className="pl-3 w-full">
                <div className="text-gray-500 font-normal text-sm mb-1.5 dark:text-gray-400">
                  New message from
                  <span className="font-semibold text-gray">Rubel Islam</span>: "Create a new class text for class 10."
                </div>
                <div className="text-xs font-medium text-primary">a few moments ago</div>
              </div>
            </a>
            <a href="#" className="flex py-3 px-4 hover:bg-bgLight">
              <div className="flex-shrink-0">
                <img className="w-11 h-11 rounded-full object-cover" src="../assets/images/teachers/8.png" alt="Rubel Islam" />
              </div>
              <div className="pl-3 w-full">
                <div className="text-gray-500 font-normal text-sm mb-1.5 dark:text-gray-400">
                  New message from
                  <span className="font-semibold text-gray">Rubel Islam</span>: "Create a new class text for class 10."
                </div>
                <div className="text-xs font-medium text-primary">a few moments ago</div>
              </div>
            </a>
          </div>
          <a href="#" className="block py-2 text-md font-medium text-center text-white bg-acent1 hover:bg-secondary">
            <div className="inline-flex items-center">
              <i className="fa-solid fa-eye mr-2 text-lg text-white" />
              View all
            </div>
          </a>
        </div>
        {/* End of the Notification */}
        {/* Setting */}
        <button type="button" data-dropdown-toggle="apps-dropdown" className="flex items-center justify-center relative w-9 h-9 rounded-xl text-acent1 bg-bgLight hover:bg-acent1 hover:text-white focus:bg-acent1 focus:text-white transition-all duration-200">
          <span className="absolute flex h-5 w-6 -top-2 -right-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-acent1 opacity-75" />
            <span className="relative flex items-center justify-center rounded-full h-6 w-6 bg-acent1 text-[9px] text-white">02</span>
          </span>
          <i className="fa-solid fa-gear text-lg" />
        </button>
        {/* Setting Dropdown menu */}
        <div className="hidden overflow-hidden z-50 my-4 max-w-sm text-base list-none bg-white divide-y divide-gray-100 shadow-lg dark:bg-gray-700 dark:divide-gray-600 rounded-xl" id="apps-dropdown">
          <h4 className="block py-2 px-4 text-base font-medium text-center text-white bg-acent1">Setting</h4>
          <div className="grid grid-cols-3 gap-4 p-4">
            <a href="#" className="block p-4 text-center rounded-lg hover:bg-bgLight transition-all">
              <i className="fa-solid fa-graduation-cap text-xl text-acent1" />
              <div className="text-sm text-gray-900">Student</div>
            </a>
            <a href="#" className="block p-4 text-center rounded-lg hover:bg-bgLight transition-all">
              <i className="fa-solid fa-chalkboard-user text-xl text-acent1" />
              <div className="text-sm text-gray-900">Teacher</div>
            </a>
            <a href="#" className="block p-4 text-center rounded-lg hover:bg-bgLight transition-all">
              <i className="fa-solid fa-users text-xl text-acent1" />
              <div className="text-sm text-gray-900">Staff</div>
            </a>
            <a href="#" className="block p-4 text-center rounded-lg hover:bg-bgLight transition-all">
              <i className="fa-solid fa-circle-user text-xl text-acent1" />
              <div className="text-sm text-gray-900">Profile</div>
            </a>
            <a href="#" className="block p-4 text-center rounded-lg hover:bg-bgLight transition-all">
              <i className="fa-solid fa-gear text-xl text-acent1" />
              <div className="text-sm text-gray-900">Settings</div>
            </a>
            <a href="#" className="block p-4 text-center rounded-lg hover:bg-bgLight transition-all">
              <i className="fa-solid fa-chart-simple text-xl text-acent1" />
              <div className="text-sm text-gray-900">Analysis</div>
            </a>
          </div>
        </div>
        {/* End of the Setting */}
        {/* User Profile */}
        <button type="button" className="flex mx-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="dropdown">
          <span className="sr-only">Open user menu</span>
          <img className="w-8 h-8 rounded-full object-cover" src="https://cdn.pixabay.com/photo/2015/04/13/12/07/business-720429_1280.jpg" alt="user photo" />
        </button>
        {/* Dropdown menu */}
        <div className="hidden z-50 my-4 w-56 text-base list-none bg-white divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600 rounded-xl" id="dropdown">
          <div className="py-3 px-4">
            <span className="block text-sm font-semibold text-gray-900">Adnan Kabir</span>
            <span className="block text-sm text-gray-900 truncate">Admin</span>
          </div>
          <ul className="py-1 text-gray-700" aria-labelledby="dropdown">
            <li>
              <a href="#" className="block py-2 px-4 text-sm hover:bg-bgLight">My profile</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-4 text-sm hover:bg-bgLight">Account settings</a>
            </li>
          </ul>
          <ul className="py-1 text-gray-700 dark:text-gray-300" aria-labelledby="dropdown">
            <li>
              <a href="#" className="flex items-center py-2 px-4 text-sm hover:bg-bgLight"><svg className="mr-2 w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                </svg>
                Shedule</a>
            </li>
            <li>
              <a href="#" className="flex justify-between items-center py-2 px-4 text-sm hover:bg-bgLight">
                <span className="flex items-center">
                  <i className="fa-solid fa-dollar-sign mr-2 text-md text-primary-600 dark:text-primary-500" />
                  Payments
                </span>
                <i className="fa-solid fa-chevron-right text-base text-gray-400" />
              </a>
            </li>
          </ul>
          <ul className="py-1 text-gray-700 dark:text-gray-300" aria-labelledby="dropdown">
            <li>
              <a href="#" className="block py-2 px-4 text-sm hover:bg-bgLight">Log out</a>
            </li>
          </ul>
        </div>
        {/* End of the user profile */}
      </div>
    </div>
  </nav>
  {/* End of the Navbar */}
  {/* Sidebar */}
  <aside className="scrollbar fixed top-0 left-0 z-40 w-72 lg:w-56 h-screen pt-14 transition-transform -translate-x-full bg-white border-r border-gray-200 lg:translate-x-0" aria-label="Sidenav" id="drawer-navigation">
    <div className="overflow-y-auto py-5 px-3 h-full bg-white">
      {/* Menu (It's for mobile) */}
      <ul className="space-y-0.5 inline lg:hidden">
        <li>
          <a href="index.html" className="flex items-center p-2 text-base font-medium text-primary rounded-lg hover:bg-acent1 group transition duration-75">
            <i className="fa-solid fa-house text-lg text-acent1 group-hover:text-white transition duration-75" />
            <span className="ml-3">Dashboard</span>
          </a>
        </li>
        <li>
          <button type="button" className="flex items-center p-2 w-full text-base font-medium text-primary rounded-lg transition duration-75 group hover:bg-acent1" aria-controls="dropdown-teacher" data-collapse-toggle="dropdown-teacher">
            <i className="fa-solid fa-chalkboard-user text-lg text-acent1 transition duration-75 group-hover:text-white" />
            <span className="flex-1 ml-3 text-left whitespace-nowrap">Teacher</span>
            <i className="fa-solid fa-chevron-down text-base font-bold" />
          </button>
          <ul id="dropdown-teacher" className="tabs hidden py-2 space-y-1 pl-2">
            <li>
              <a href="#" className="flex items-center p-2 text-sm font-medium text-primary rounded-lg hover:bg-acent1 hover:text-white group transition duration-75">Teacher</a>
            </li>
            <li data-tab-target="#add_teacher">
              <a href="#" className="flex items-center p-2 text-sm font-medium text-primary rounded-lg hover:bg-acent1 hover:text-white group transition duration-75">Add Teacher</a>
            </li>
            <li data-tab-target="#teacher_billing">
              <a href="#" className="flex items-center p-2 text-sm font-medium text-primary rounded-lg hover:bg-acent1 hover:text-white group transition duration-75">Teacher Billing</a>
            </li>
            <li data-tab-target="#upload_data">
              <a href="#" className="flex items-center p-2 text-sm font-medium text-primary rounded-lg hover:bg-acent1 hover:text-white group transition duration-75">Upload From Excel</a>
            </li>
            <li data-tab-target="#branch_transfer">
              <a href="#" className="flex items-center p-2 text-sm font-medium text-primary rounded-lg hover:bg-acent1 hover:text-white group transition duration-75">Branch Transfer</a>
            </li>
          </ul>
        </li>
        <li>
          <button type="button" className="flex items-center p-2 w-full text-base font-medium text-primary rounded-lg transition duration-75 group hover:bg-acent1" aria-controls="dropdown-student" data-collapse-toggle="dropdown-student">
            <i className="fa-solid fa-graduation-cap text-lg text-acent1 transition duration-75 group-hover:text-white" />
            <span className="flex-1 ml-3 text-left whitespace-nowrap">Student</span>
            <i className="fa-solid fa-chevron-down text-base font-bold" />
          </button>
          <ul id="dropdown-student" className="tabs hidden py-2 space-y-1 pl-2">
            <li data-tab-target="#student">
              <a href="#" className="flex items-center p-2 text-sm font-medium text-primary rounded-lg hover:bg-acent1 hover:text-white group transition duration-75">Students</a>
            </li>
            <li data-tab-target="#change_billing">
              <a href="#" className="flex items-center p-2 text-sm font-medium text-primary rounded-lg hover:bg-acent1 hover:text-white group transition duration-75">Change Billing</a>
            </li>
            <li data-tab-target="#upload_data">
              <a href="#" className="flex items-center p-2 text-sm font-medium text-primary rounded-lg hover:bg-acent1 hover:text-white group transition duration-75">Upload From Excel</a>
            </li>
            <li data-tab-target="#admit_tc_report">
              <a href="#" className="flex items-center p-2 text-sm font-medium text-primary rounded-lg hover:bg-acent1 hover:text-white group transition duration-75">Admit and TC Report</a>
            </li>
          </ul>
        </li>
        <li>
          <button type="button" className="flex items-center p-2 w-full text-base font-medium text-primary rounded-lg transition duration-75 group hover:bg-acent1" aria-controls="dropdown-attendance" data-collapse-toggle="dropdown-attendance">
            <i className="fa-solid fa-clipboard-user text-lg text-acent1 transition duration-75 group-hover:text-white" />
            <span className="flex-1 ml-3 text-left whitespace-nowrap">Attendance</span>
            <i className="fa-solid fa-chevron-down text-base font-bold" />
          </button>
          <ul id="dropdown-attendance" className="tabs hidden py-2 space-y-1 pl-2">
            <li data-tab-target="#attendance_default">
              <a href="#" className="flex items-center p-2 text-sm font-medium text-primary rounded-lg hover:bg-acent1 hover:text-white group transition duration-75">Attendanace Default</a>
            </li>
            <li data-tab-target="#attendance_report">
              <a href="#" className="flex items-center p-2 text-sm font-medium text-primary rounded-lg hover:bg-acent1 hover:text-white group transition duration-75">Attendanace Report</a>
            </li>
            <li data-tab-target="#student_absent_payment">
              <a href="#" className="flex items-center p-2 text-sm font-medium text-primary rounded-lg hover:bg-acent1 hover:text-white group transition duration-75">Student Absent Payment</a>
            </li>
            <li data-tab-target="#absent_find_sms">
              <a href="#" className="flex items-center p-2 text-sm font-medium text-primary rounded-lg hover:bg-acent1 hover:text-white group transition duration-75">Absent Fine SMS</a>
            </li>
            <li>
              <button type="button" className="flex items-center p-2 w-full text-sm font-medium text-primary rounded-lg transition duration-75 group hover:bg-acent1" aria-controls="other" data-collapse-toggle="other">
                <span className="flex-1 text-left whitespace-nowrap">Other</span>
                <i className="fa-solid fa-chevron-down text-base font-bold" />
              </button>
              <ul id="other" className="hidden space-y-1 pl-2">
                <li>
                  <a href="#" className="flex items-center p-2 text-sm font-medium text-primary rounded-lg hover:bg-acent1 hover:text-white group transition duration-75">Item</a>
                </li>
                <li>
                  <a href="#" className="flex items-center p-2 text-sm font-medium text-primary rounded-lg hover:bg-acent1 hover:text-white group transition duration-75">Item</a>
                </li>
                <li>
                  <a href="#" className="flex items-center p-2 text-sm font-medium text-primary rounded-lg hover:bg-acent1 hover:text-white group transition duration-75">Item</a>
                </li>
                <li>
                  <a href="#" className="flex items-center p-2 text-sm font-medium text-primary rounded-lg hover:bg-acent1 hover:text-white group transition duration-75">Item</a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <button type="button" className="flex items-center p-2 w-full text-base font-medium text-primary rounded-lg transition duration-75 group hover:bg-acent1" aria-controls="dropdown-exam" data-collapse-toggle="dropdown-exam">
            <i className="fa-solid fa-file-pen text-lg text-acent1 transition duration-75 group-hover:text-white" />
            <span className="flex-1 ml-3 text-left whitespace-nowrap">Exam</span>
            <i className="fa-solid fa-chevron-down text-base font-bold" />
          </button>
          <ul id="dropdown-exam" className="tabs hidden py-2 space-y-1 pl-2">
            <li data-tab-target="#all_exam">
              <a href="#" className="flex items-center p-2 text-sm font-medium text-primary rounded-lg hover:bg-acent1 hover:text-white group transition duration-75">Exam</a>
            </li>
            <li data-tab-target="#add_exam">
              <a href="#" className="flex items-center p-2 text-sm font-medium text-primary rounded-lg hover:bg-acent1 hover:text-white group transition duration-75">Add Exam</a>
            </li>
            <li data-tab-target="#exam_head">
              <a href="#" className="flex items-center p-2 text-sm font-medium text-primary rounded-lg hover:bg-acent1 hover:text-white group transition duration-75">Exam Head</a>
            </li>
            <li data-tab-target="#exam_sub_head">
              <a href="#" className="flex items-center p-2 text-sm font-medium text-primary rounded-lg hover:bg-acent1 hover:text-white group transition duration-75">Exam Sub-Head</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="subject.html" className="flex items-center p-2 text-base font-medium text-primary rounded-lg hover:bg-acent1 group transition duration-75">
            <i className="fa-solid fa-book text-lg text-acent1 group-hover:text-white transition duration-75" />
            <span className="ml-3">Subject</span>
          </a>
        </li>
        <li>
          <button type="button" className="flex items-center p-2 w-full text-base font-medium text-primary rounded-lg transition duration-75 group hover:bg-acent1" aria-controls="dropdown-result" data-collapse-toggle="dropdown-result">
            <i className="fa-solid fa-square-poll-vertical text-lg text-acent1 transition duration-75 group-hover:text-white" />
            <span className="flex-1 ml-3 text-left whitespace-nowrap">Result</span>
            <i className="fa-solid fa-chevron-down text-base font-bold" />
          </button>
          <ul id="dropdown-result" className="tabs hidden py-2 space-y-1 pl-2">
            <li data-tab-target="#mark_input">
              <a href="#" className="flex items-center p-2 text-sm font-medium text-primary rounded-lg hover:bg-acent1 hover:text-white group transition duration-75">Mark Input</a>
            </li>
            <li data-tab-target="#mark_view">
              <a href="#" className="flex items-center p-2 text-sm font-medium text-primary rounded-lg hover:bg-acent1 hover:text-white group transition duration-75">Mark View</a>
            </li>
            <li data-tab-target="#result_view">
              <a href="#" className="flex items-center p-2 text-sm font-medium text-primary rounded-lg hover:bg-acent1 hover:text-white group transition duration-75">Result</a>
            </li>
            <li data-tab-target="#">
              <a href="#" className="flex items-center p-2 text-sm font-medium text-primary rounded-lg hover:bg-acent1 hover:text-white group transition duration-75">Tabulation</a>
            </li>
            <li data-tab-target="#">
              <a href="#" className="flex items-center p-2 text-sm font-medium text-primary rounded-lg hover:bg-acent1 hover:text-white group transition duration-75">Result By Student ID</a>
            </li>
            <li data-tab-target="#">
              <a href="#" className="flex items-center p-2 text-sm font-medium text-primary rounded-lg hover:bg-acent1 hover:text-white group transition duration-75">Commnets Input</a>
            </li>
            <li data-tab-target="#mark_input_by_excel">
              <a href="#" className="flex items-center p-2 text-sm font-medium text-primary rounded-lg hover:bg-acent1 hover:text-white group transition duration-75">Mark Input By Excel</a>
            </li>
          </ul>
        </li>
        <li>
          <button type="button" className="flex items-center p-2 w-full text-base font-medium text-primary rounded-lg transition duration-75 group hover:bg-acent1" aria-controls="dropdown-analysis" data-collapse-toggle="dropdown-analysis">
            <i className="fa-solid fa-chart-simple text-lg text-acent1 transition duration-75 group-hover:text-white" />
            <span className="flex-1 ml-3 text-left whitespace-nowrap">Mark Analysis</span>
            <i className="fa-solid fa-chevron-down text-base font-bold" />
          </button>
          <ul id="dropdown-analysis" className="tabs hidden py-2 space-y-1 pl-2">
            <li data-tab-target="#analysis_default">
              <a href="#" className="flex items-center p-2 text-sm font-medium text-primary rounded-lg hover:bg-acent1 hover:text-white group transition duration-75">Analysis</a>
            </li>
            <li data-tab-target="#default_list">
              <a href="#" className="flex items-center p-2 text-sm font-medium text-primary rounded-lg hover:bg-acent1 hover:text-white group transition duration-75">Default List</a>
            </li>
            <li data-tab-target="#merit_list">
              <a href="#" className="flex items-center p-2 text-sm font-medium text-primary rounded-lg hover:bg-acent1 hover:text-white group transition duration-75">Merit List</a>
            </li>
            <li data-tab-target="#result_analysis">
              <a href="#" className="flex items-center p-2 text-sm font-medium text-primary rounded-lg hover:bg-acent1 hover:text-white group transition duration-75">Resilt Analysis</a>
            </li>
            <li data-tab-target="#segregation">
              <a href="#" className="flex items-center p-2 text-sm font-medium text-primary rounded-lg hover:bg-acent1 hover:text-white group transition duration-75">Segregation</a>
            </li>
          </ul>
        </li>
        <li>
          <button type="button" className="flex items-center p-2 w-full text-base font-medium text-primary rounded-lg transition duration-75 group hover:bg-acent1" aria-controls="dropdown-task" data-collapse-toggle="dropdown-task">
            <i className="fa-solid fa-thumbtack text-lg text-acent1 transition duration-75 group-hover:text-white" />
            <span className="flex-1 ml-3 text-left whitespace-nowrap">Task</span>
            <i className="fa-solid fa-chevron-down text-base font-bold" />
          </button>
          <ul id="dropdown-task" className="tabs hidden py-2 space-y-1 pl-2">
            <li data-tab-target="#home_work">
              <a href="#" className="flex items-center p-2 text-sm font-medium text-primary rounded-lg hover:bg-acent1 hover:text-white group transition duration-75">Home Work</a>
            </li>
            <li data-tab-target="#exam_routine">
              <a href="#" className="flex items-center p-2 text-sm font-medium text-primary rounded-lg hover:bg-acent1 hover:text-white group transition duration-75">Exam Routine</a>
            </li>
            <li data-tab-target="#class_routine">
              <a href="#" className="flex items-center p-2 text-sm font-medium text-primary rounded-lg hover:bg-acent1 hover:text-white group transition duration-75">Class Routine</a>
            </li>
            <li data-tab-target="#syllabus">
              <a href="#" className="flex items-center p-2 text-sm font-medium text-primary rounded-lg hover:bg-acent1 hover:text-white group transition duration-75">Sullabus</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="setting.html" className="flex items-center p-2 text-base font-medium text-primary rounded-lg hover:bg-acent1 group transition duration-75">
            <i className="fa-solid fa-gear text-lg text-acent1 transition duration-75 group-hover:text-white" />
            <span className="ml-3">Setting</span>
          </a>
        </li>
      </ul>
      {/* Menu (It's for Lablet and Desktop) */}
      <ul className="hidden lg:inline space-y-0.5">
        <li>
          <a href="index.html" className="flex items-center p-2 text-base font-medium text-primary rounded-lg hover:bg-acent1 group transition duration-75">
            <i className="fa-solid fa-house text-lg text-acent1 group-hover:text-white transition duration-75" />
            <span className="ml-3">Dashboard</span>
          </a>
        </li>
        <li>
          <a href="teacher.html" className="flex items-center p-2 w-full text-base font-medium text-primary rounded-lg transition duration-75 group hover:bg-acent1">
            <i className="fa-solid fa-chalkboard-user text-lg text-acent1 transition duration-75 group-hover:text-white" />
            <span className="flex-1 ml-3 text-left whitespace-nowrap">Teacher</span>
          </a>
        </li>
        <li>
          <a href="student.html" className="flex items-center p-2 w-full text-base font-medium text-primary rounded-lg transition duration-75 group hover:bg-acent1">
            <i className="fa-solid fa-graduation-cap text-lg text-acent1 transition duration-75 group-hover:text-white" />
            <span className="flex-1 ml-3 text-left whitespace-nowrap">Student</span>
          </a>
        </li>
        <li>
          <a href="attendance.html" type="button" className="flex items-center p-2 w-full text-base font-medium text-primary rounded-lg transition duration-75 group hover:bg-acent1">
            <i className="fa-solid fa-clipboard-user text-lg text-acent1 transition duration-75 group-hover:text-white" />
            <span className="flex-1 ml-3 text-left whitespace-nowrap">Attendance</span>
          </a>
        </li>
        <li>
          <a href="exam.html" className="flex items-center p-2 w-full text-base font-medium text-primary rounded-lg transition duration-75 group hover:bg-acent1">
            <i className="fa-solid fa-file-pen text-lg text-acent1 transition duration-75 group-hover:text-white" />
            <span className="flex-1 ml-3 text-left whitespace-nowrap">Exam</span>
          </a>
        </li>
        <li>
          <a href="subject.html" className="flex items-center p-2 text-base font-medium text-primary rounded-lg hover:bg-acent1 group transition duration-75">
            <i className="fa-solid fa-book text-lg text-acent1 group-hover:text-white transition duration-75" />
            <span className="ml-3">Subject</span>
          </a>
        </li>
        <li>
          <a href="result.html" className="flex items-center p-2 w-full text-base font-medium text-primary rounded-lg transition duration-75 group hover:bg-acent1">
            <i className="fa-solid fa-square-poll-vertical text-lg text-acent1 transition duration-75 group-hover:text-white" />
            <span className="flex-1 ml-3 text-left whitespace-nowrap">Result</span>
          </a>
        </li>
        <li>
          <a href="analysis.html" className="flex items-center p-2 w-full text-base font-medium text-primary rounded-lg transition duration-75 group hover:bg-acent1">
            <i className="fa-solid fa-chart-simple text-lg text-acent1 transition duration-75 group-hover:text-white" />
            <span className="flex-1 ml-3 text-left whitespace-nowrap">Mark Analysis</span>
          </a>
        </li>
        <li>
          <a href="task.html" className="flex items-center p-2 w-full text-base font-medium text-primary rounded-lg transition duration-75 group hover:bg-acent1">
            <i className="fa-solid fa-thumbtack text-lg text-acent1 transition duration-75 group-hover:text-white" />
            <span className="flex-1 ml-3 text-left whitespace-nowrap">Task</span>
          </a>
        </li>
        <li>
          <a href="setting.html" className="flex items-center p-2 text-base font-medium text-primary rounded-lg hover:bg-acent1 group transition duration-75">
            <i className="fa-solid fa-gear text-lg text-acent1 transition duration-75 group-hover:text-white" />
            <span className="ml-3">Setting</span>
          </a>
        </li>
      </ul>
    </div>
    <div className="hidden absolute bottom-0 left-0 justify-center p-4 space-x-4 w-full lg:flex bg-white z-20">
      <a href="setting.html" data-tooltip-target="tooltip-settings" className="inline-flex w-9 h-9 justify-center items-center bg-bgLight text-acent1 rounded-xl cursor-pointer hover:text-white hover:bg-acent1">
        <i className="fa-solid fa-gear text-md" />
      </a>
      <div id="tooltip-settings" role="tooltip" className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-acent1 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip">
        Settings page
        <div className="tooltip-arrow" data-popper-arrow />
      </div>
      <a href="#" data-tooltip-target="tooltip-tutorial" className="inline-flex w-9 h-9 justify-center items-center bg-bgLight text-acent1 rounded-xl cursor-pointer hover:text-white hover:bg-acent1">
        <i className="fa-solid fa-video text-md" />
      </a>
      <div id="tooltip-tutorial" role="tooltip" className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-acent1 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip">
        Tutorials
        <div className="tooltip-arrow" data-popper-arrow />
      </div>
      <a href="#" data-tooltip-target="tooltip-support" className="inline-flex w-9 h-9 justify-center items-center bg-bgLight text-acent1 rounded-xl cursor-pointer hover:text-white hover:bg-acent1">
        <i className="fa-solid fa-headset text-md" />
      </a>
      <div id="tooltip-support" role="tooltip" className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-acent1 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip">
        Support
        <div className="tooltip-arrow" data-popper-arrow />
      </div>
    </div>
  </aside>
  {/* End of the Sidebar */}
  <main className="flex flex-col gap-4 md:gap-5 px-4 lg:px-5 lg:ml-56 h-auto pt-20 pb-5">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
      <div className="border-2 border-dashed border-gray-300 rounded-lg dark:border-gray-600 h-32 md:h-64">
      </div>
      <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-32 md:h-64" />
      <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-32 md:h-64" />
      <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-32 md:h-64" />
    </div>
    <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-96 mb-4" />
    <div className="grid grid-cols-2 gap-4 mb-4">
      <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72" />
      <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72" />
      <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72" />
      <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72" />
    </div>
    <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-96 mb-4" />
    <div className="grid grid-cols-2 gap-4">
      <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72" />
      <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72" />
      <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72" />
      <div className="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72" />
    </div>
  </main>
</div>

  )
}

export default page