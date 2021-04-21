/* eslint-disable react/display-name */
import { BeakerIcon, InformationCircleIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import React from 'react'

import Layout from '../components/Layout'

const actions = [
  {
    title: 'Remdesivir',

    description: 'List of sources to potentially get remdesivir from.',
    icon: BeakerIcon,
    iconForeground: 'text-teal-700',
    iconBackground: 'bg-teal-50'
  },
  {
    title: 'Beds',

    description: 'List of sources to check for hospital bed avaliability from.',
    icon: ({ className }: { className: string }) => {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 512"
          fill="currentColor"
          className={className}>
          <path d="M176 256c44.11 0 80-35.89 80-80s-35.89-80-80-80-80 35.89-80 80 35.89 80 80 80zm352-128H304c-8.84 0-16 7.16-16 16v144H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v352c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16v-48h512v48c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V240c0-61.86-50.14-112-112-112z" />
        </svg>
      )
    },
    iconForeground: 'text-purple-700',
    iconBackground: 'bg-purple-50'
  },
  {
    title: 'Plasma',
    description:
      'List of potentially plasma donors and sources to get plasma from',
    icon: ({ className }: { className: string }) => {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 11 11"
          fill="currentColor"
          className={className}>
          <path d="M8.40515,4.64435H8.40643L5.5,1,2.59308,4.64435H2.59485A3.37087,3.37087,0,0,0,2,6.55859,3.464,3.464,0,0,0,5.5,9.98822,3.464,3.464,0,0,0,9,6.55859,3.37087,3.37087,0,0,0,8.40515,4.64435ZM8,7H6V9H5V7H3V6H5V4H6V6H8V7Z" />
        </svg>
      )
    },
    iconForeground: 'text-light-blue-700',
    iconBackground: 'bg-light-blue-50'
  },
  {
    title: 'Ventilator',
    description: 'List of potential sources to get ventilators from',
    icon: ({ className }: { className: string }) => {
      return (
        <svg viewBox="0 0 20 20" fill="currentColor" className={className}>
          <path d="M18.737,9.691h-5.462c-0.279,0-0.527,0.174-0.619,0.437l-1.444,4.104L8.984,3.195c-0.059-0.29-0.307-0.506-0.603-0.523C8.09,2.657,7.814,2.838,7.721,3.12L5.568,9.668H1.244c-0.36,0-0.655,0.291-0.655,0.655c0,0.36,0.294,0.655,0.655,0.655h4.8c0.281,0,0.532-0.182,0.621-0.45l1.526-4.645l2.207,10.938c0.059,0.289,0.304,0.502,0.595,0.524c0.016,0,0.031,0,0.046,0c0.276,0,0.524-0.174,0.619-0.437L13.738,11h4.999c0.363,0,0.655-0.294,0.655-0.655C19.392,9.982,19.1,9.691,18.737,9.691z"></path>
        </svg>
      )
    },
    iconForeground: 'text-yellow-700',
    iconBackground: 'bg-yellow-50'
  },
  {
    title: 'Oxygen',
    description: 'List of potential sources to get oxygen tanks from',

    icon: ({ className }: { className: string }) => {
      return (
        <svg
          viewBox="0 0 32.12 32.121"
          fill="currentColor"
          className={className}>
          <g>
            <g>
              <path d="M15.377,6.374c-6.926,0-12.56,5.633-12.56,12.56c0,6.926,5.634,12.561,12.56,12.561c6.925,0,12.561-5.636,12.561-12.561    C27.938,12.008,22.302,6.374,15.377,6.374z M15.377,29.239c-5.683,0-10.306-4.623-10.306-10.308    c0-5.682,4.623-10.305,10.306-10.305c5.684,0,10.307,4.624,10.307,10.305C25.684,24.616,21.061,29.239,15.377,29.239z" />
              <circle cx="3.381" cy="7.529" r="3.381" />
              <circle cx="26.663" cy="6.733" r="2.585" />
              <circle cx="30.5" cy="2.247" r="1.62" />
              <circle cx="9.721" cy="2.881" r="1.268" />
              <path d="M11.761,13.623c-1.572,0-2.798,0.44-3.678,1.32c-0.881,0.881-1.321,2.109-1.321,3.691c0,1.131,0.222,2.073,0.667,2.825    c0.444,0.755,1.024,1.304,1.74,1.652c0.715,0.346,1.619,0.521,2.711,0.521c1.074,0,1.971-0.201,2.691-0.604    c0.72-0.404,1.269-0.969,1.651-1.689c0.38-0.726,0.571-1.652,0.571-2.785c0-1.559-0.436-2.771-1.308-3.635    C14.614,14.054,13.372,13.623,11.761,13.623z M13.273,20.767c-0.353,0.418-0.85,0.627-1.492,0.627    c-0.626,0-1.119-0.213-1.482-0.641c-0.364-0.428-0.545-1.129-0.545-2.106c0-0.985,0.183-1.692,0.549-2.119    c0.365-0.427,0.849-0.642,1.453-0.642c0.628,0,1.127,0.211,1.496,0.631c0.367,0.42,0.552,1.086,0.552,1.998    C13.802,19.597,13.625,20.349,13.273,20.767z" />
              <path d="M20.087,21.708c0.121-0.098,0.36-0.312,0.72-0.561c0.603-0.426,1.019-0.836,1.248-1.19    c0.227-0.356,0.342-0.739,0.342-1.128c0-0.367-0.1-0.704-0.299-0.999c-0.201-0.297-0.474-0.519-0.82-0.659    c-0.35-0.144-0.836-0.217-1.463-0.217c-0.601,0-1.069,0.074-1.41,0.225c-0.338,0.148-0.603,0.364-0.787,0.646    c-0.186,0.28-0.314,0.671-0.384,1.173l1.783,0.146c0.049-0.361,0.146-0.614,0.291-0.758c0.144-0.142,0.329-0.213,0.557-0.213    c0.219,0,0.4,0.068,0.545,0.207s0.216,0.305,0.216,0.5c0,0.18-0.073,0.372-0.218,0.572c-0.147,0.201-0.48,0.494-1.002,0.881    c-0.854,0.635-1.435,1.102-1.745,1.564c-0.31,0.466-0.496,1.408-0.557,1.408h4.876v-1.127h-2.315    C19.824,22.179,19.966,21.806,20.087,21.708z" />
            </g>
          </g>
        </svg>
      )
    },
    iconForeground: 'text-rose-700',
    iconBackground: 'bg-rose-50'
  },
  {
    title: 'Other',
    description:
      'List of any other useful information that can assit covid patiences, regarding vaccines, ambunances, food,etc',

    icon: InformationCircleIcon,
    iconForeground: 'text-indigo-700',
    iconBackground: 'bg-indigo-50'
  }
]

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <div className="flex p-5 justify-center">
      <div className="max-w-5xl  rounded-lg bg-gray-200 overflow-hidden shadow divide-y divide-gray-200 sm:divide-y-0 sm:grid sm:grid-cols-2 sm:gap-px">
        {actions.map((action, actionIdx) => {
          const href = `resources/${action.title.toLowerCase()}`

          return (
            <div
              key={action.title}
              className={classNames(
                actionIdx === 0
                  ? 'rounded-tl-lg rounded-tr-lg sm:rounded-tr-none'
                  : '',
                actionIdx === 1 ? 'sm:rounded-tr-lg' : '',
                actionIdx === actions.length - 2 ? 'sm:rounded-bl-lg' : '',
                actionIdx === actions.length - 1
                  ? 'rounded-bl-lg rounded-br-lg sm:rounded-bl-none'
                  : '',
                'relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500'
              )}>
              <div>
                <span
                  className={classNames(
                    action.iconBackground,
                    action.iconForeground,
                    'rounded-lg inline-flex p-3 ring-4 ring-white'
                  )}>
                  <action.icon className="h-6 w-6" aria-hidden="true" />
                </span>
              </div>
              <div className="mt-8">
                <h3 className="text-lg font-medium">
                  <Link href={href} passHref>
                    <a href={href} className="focus:outline-none">
                      {/* Extend touch target to entire panel */}
                      <span className="absolute inset-0" aria-hidden="true" />
                      {action.title}
                    </a>
                  </Link>
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  {action.description}
                </p>
              </div>
              <span
                className="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400"
                aria-hidden="true">
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24">
                  <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
                </svg>
              </span>
            </div>
          )
        })}
      </div>
    </div>
  </Layout>
)

export default IndexPage
