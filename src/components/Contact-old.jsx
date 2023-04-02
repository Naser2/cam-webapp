import { SocialMediaHandles } from '@/pages'
import { Popover, Transition } from '@headlessui/react'
import {
  ChevronDownIcon,
  EnvelopeIcon,
  PhoneIcon,
} from '@heroicons/react/20/solid'
import { Fragment, useState } from 'react'
import { CloseIcon } from './Header'

const contacts = [
  {
    name: 'Cell',
    description: 'camengineerr@gmail.com',
    href: '##',
    icon: PhoneIcon,
  },
  {
    name: 'Email',
    description: 'camengineerr@gmail.com',
    href: '##',
    icon: EnvelopeIcon,
  },
]

export default function Contact() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div
      className={`${
        isOpen
          ? 'relative max-w-md px-4'
          : 'relative bottom-4  right-10  max-w-sm px-4'
      }`}
    >
      <Popover className="relative">
        <>
          <Popover.Button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className={`
                ${isOpen ? '' : 'text-opacity-90'}
                group flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20`}
          >
            <span>Contact</span>
            <ChevronDownIcon
              className={`${isOpen ? '' : 'text-opacity-70'}
                  ml-2 h-5 w-5 text-orange-300 transition duration-150 ease-in-out group-hover:text-opacity-80`}
              aria-hidden="true"
            />
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className=" absolute z-10 mx-4 mt-3  w-screen max-w-sm transform content-center justify-center bg-gray-100 px-4 sm:px-0 lg:max-w-3xl">
              <Transition.Child
                as={Fragment}
                enter="duration-150 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-150 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Popover.Panel
                  focus
                  className="fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-white  ring-1 ring-zinc-900/5 dark:bg-zinc-900 dark:ring-zinc-800"
                >
                  <div id="body" className="p-8">
                    <div className="flex flex-row-reverse items-center justify-between">
                      <Popover.Button
                        aria-label="Close menu"
                        className="-m-1 p-1"
                      >
                        <CloseIcon className="h-6 w-6 text-zinc-500 dark:text-zinc-400" />
                      </Popover.Button>
                      <h2 className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                        Contact
                      </h2>
                    </div>
                    <nav className="mt-6">
                      {contacts.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="group flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                        >
                          <div className="flex h-5 w-5 shrink-0 items-center justify-center text-slate-300 group-hover:text-indigo-600 sm:h-10 sm:h-12 sm:w-10 sm:w-12 ">
                            <item.icon aria-hidden="true" />
                          </div>
                          <div className="ml-4">
                            <p className="text-sm font-medium text-gray-900 dark:text-gray-300">
                              {item.name}
                            </p>
                            <p className="text-sm group-hover:text-indigo-600  dark:text-indigo-400">
                              {item.description}
                            </p>
                          </div>
                        </a>
                      ))}
                    </nav>
                  </div>
                  <div id="footer" className="rounded-b-lg px-4">
                    <div className="mb-4 rounded-b-lg rounded-b bg-gray-200 px-4 py-4">
                      <a
                        href="##"
                        className="flow-root rounded-md  transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                      >
                        <span className="flex items-center">
                          <h2 className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                            Contact
                          </h2>
                        </span>
                        <SocialMediaHandles />
                      </a>
                    </div>
                  </div>
                </Popover.Panel>
              </Transition.Child>
            </Popover.Panel>
          </Transition>
        </>
      </Popover>
    </div>
  )
}

function IconOne() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <path
        d="M24 11L35.2583 17.5V30.5L24 37L12.7417 30.5V17.5L24 11Z"
        stroke="#FB923C"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.7417 19.8094V28.1906L24 32.3812L31.2584 28.1906V19.8094L24 15.6188L16.7417 19.8094Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.7417 22.1196V25.882L24 27.7632L27.2584 25.882V22.1196L24 20.2384L20.7417 22.1196Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
    </svg>
  )
}

function IconTwo() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <path
        d="M28.0413 20L23.9998 13L19.9585 20M32.0828 27.0001L36.1242 34H28.0415M19.9585 34H11.8755L15.9171 27"
        stroke="#FB923C"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.804 30H29.1963L24.0001 21L18.804 30Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
    </svg>
  )
}

function IconThree() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <rect x="13" y="32" width="2" height="4" fill="#FDBA74" />
      <rect x="17" y="28" width="2" height="8" fill="#FDBA74" />
      <rect x="21" y="24" width="2" height="12" fill="#FDBA74" />
      <rect x="25" y="20" width="2" height="16" fill="#FDBA74" />
      <rect x="29" y="16" width="2" height="20" fill="#FB923C" />
      <rect x="33" y="12" width="2" height="24" fill="#FB923C" />
    </svg>
  )
}
