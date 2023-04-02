import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import {
  TwitterIcon,
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'

import {
  Bars3Icon,
  MinusSmallIcon,
  PlusSmallIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import {
  ArrowPathIcon,
  ComputerDesktopIcon,
  CheckIcon,
  MusicalNoteIcon,
  PaintBrushIcon,
  Cog6ToothIcon,
  FingerPrintIcon,
  LockClosedIcon,
  MicrophoneIcon,
  ServerIcon,
} from '@heroicons/react/20/solid'
import room1 from '@/images/room1.jpeg'
import room2 from '@/images/room2.jpeg'
import room3 from '@/images/room3.jpeg'
import room5 from '@/images/room5.jpeg'

import { formatDate } from '@/lib/formatDate'
// import LandingIntro from '@/components/LandingIntro.jsx'
import CamImage from '@/images/CamImage.jpeg'
import studioRoom from '@/images/studio-room.jpeg'
import { MobileNavigation, ProfilePhoto } from '@/components/Header'

function MailIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function BriefcaseIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function ArrowDownIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-sky-500 transition group-hover:fill-sky-600 dark:fill-sky-400 dark:group-hover:fill-sky-600" />
    </Link>
  )
}

function Newsletter() {
  return (
    <form
      action="/thank-you"
      className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
    >
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <MailIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Stay up to date</span>
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        Get notified when I publish something new, and unsubscribe at any time.
      </p>
      <div className="mt-6 flex">
        <input
          type="email"
          placeholder="Email address"
          aria-label="Email address"
          required
          className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
        />
        <Button type="submit" className="ml-4 flex-none">
          Join
        </Button>
      </div>
    </form>
  )
}

const rooms = [
  {
    name: 'coach alexis image',
    size: '3.9 MB',
    source: room1,
    current: true,
  },
  {
    name: 'coach alexis image',
    size: '3.9 MB',
    source: room2,
    current: true,
  },
  {
    name: 'coach alexis image',
    size: '3.9 MB',
    source: room3,
    current: true,
  },
  {
    name: 'coach alexis image',
    size: '3.9 MB',
    source: room5,
    current: true,
  },
  // More files...
]
const inspiredFiles = [
  {
    name: 'coach alexis image',
    size: '3.9 MB',
    source: room1,
    current: true,
  },
  {
    name: 'coach alexis image',
    size: '3.9 MB',
    source: room5,
    current: true,
  },
]
function Rooms() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="mx-4 mt-16  sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[room1, room2, room3, room5].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl'
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
export const SocialMediaHandles = () => (
  <Container className="mt-4 md:mt-8">
    <div className="max-w-2xl">
      <div className="mt-6 flex gap-6 ">
        <SocialLink
          href="https://twitter.com"
          aria-label="Follow on Twitter"
          icon={TwitterIcon}
        />
        <SocialLink
          href="https://instagram.com"
          aria-label="Follow on Instagram"
          icon={InstagramIcon}
        />
        <SocialLink
          href="https://github.com"
          aria-label="Follow on GitHub"
          icon={GitHubIcon}
        />
        <SocialLink
          href="https://linkedin.com"
          aria-label="Follow on LinkedIn"
          icon={LinkedInIcon}
        />
      </div>
    </div>
  </Container>
)
const features = [
  {
    name: 'Setup.',
    description:
      ' I setup space that is ideal for the type of sound being produced. This may include setting up and checking the equipment, testing sound quality before recording begins and creating a professional atmosphere.',
    icon: Cog6ToothIcon,
  },
  {
    name: 'Recording.',
    description:
      "During the recording phase, I capture the best sound and this can include instruments, vocals, or other sounds. I use top quality microphones like 'Neuman Tlm Condenser.' and ...",
    icon: MicrophoneIcon,
  },
  {
    name: 'Editing.',
    description:
      'In the editing phase, I remove unwanted sounds like clicks or pops to make a more enhanced track and get the desired result.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Mixing.',
    description:
      'In the mixing stage, I add additional effects to the track like panning, delay, reverberation, leveling dynamics, compression and equalization to achieve the artists vision for the recording',
    icon: PaintBrushIcon,
  },
  {
    name: 'Mastering.',
    description:
      'In the mastering stage,I may meet with artists to preview the track and make final adjustments before mastering or condensing multiple tracks into one and producing the finished result.',
    icon: MusicalNoteIcon,
  },
]
export default function Home({ rooms }) {
  return (
    <>
      <Head>
        <title>Cam Duncan - Studio Engineer based in NYC</title>
        <meta
          name="description"
          content="I’m Cam, a studio Engineer  based in New York City."
        />
      </Head>
      <div className="max-w-10xl hero_hero__KMqi3 mx-auto -mt-20 lg:-mt-40">
        <div className=" relative min-h-[600px] overflow-hidden bg-gray-900  shadow-xl sm:min-h-[940px] ">
          <Image
            width={CamImage.width}
            height={CamImage.height}
            className="min-h-2xl absolute inset-0 h-full w-full object-cover brightness-150 saturate-0 "
            srcset="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Froom5.7ce85778.jpeg&amp;w=16&amp;q=75 16w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Froom5.7ce85778.jpeg&amp;w=32&amp;q=75 32w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Froom5.7ce85778.jpeg&amp;w=48&amp;q=75 48w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Froom5.7ce85778.jpeg&amp;w=64&amp;q=75 64w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Froom5.7ce85778.jpeg&amp;w=96&amp;q=75 96w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Froom5.7ce85778.jpeg&amp;w=128&amp;q=75 128w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Froom5.7ce85778.jpeg&amp;w=256&amp;q=75 256w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Froom5.7ce85778.jpeg&amp;w=384&amp;q=75 384w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Froom5.7ce85778.jpeg&amp;w=640&amp;q=75 640w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Froom5.7ce85778.jpeg&amp;w=750&amp;q=75 750w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Froom5.7ce85778.jpeg&amp;w=828&amp;q=75 828w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Froom5.7ce85778.jpeg&amp;w=1080&amp;q=75 1080w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Froom5.7ce85778.jpeg&amp;w=1200&amp;q=75 1200w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Froom5.7ce85778.jpeg&amp;w=1920&amp;q=75 1920w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Froom5.7ce85778.jpeg&amp;w=2048&amp;q=75 2048w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Froom5.7ce85778.jpeg&amp;w=3840&amp;q=75 3840w"
            src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Froom5.7ce85778.jpeg&amp;w=3840&amp;q=75"
            alt=""
          />
          <div className="absolute inset-0 bg-gray-900/90 mix-blend-multiply" />
          <div
            className="absolute -left-80 -top-56 transform-gpu blur-3xl"
            aria-hidden="true"
          >
            <div
              className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-r from-[#ff4694] to-[#776fff] opacity-[0.45]"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
          <div
            className="hidden md:absolute md:bottom-16 md:left-[50rem] md:transform-gpu md:blur-3xl"
            aria-hidden="true"
          >
            <div
              className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-r from-[#ff4694] to-[#776fff] opacity-25"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
          <div
            className=" align-center justify-content-center relative mx-auto max-w-4xl justify-center
            px-6 py-40 sm:px-10 sm:py-64 md:px-12 lg:px-14 "
          >
            <figure>
              <blockquote className="mt-6 text-lg font-semibold text-white sm:inline-flex sm:text-xl sm:leading-8">
                <figure className="relative isolate pt-6 sm:pt-12">
                  <svg
                    viewBox="0 0 162 128"
                    fill="none"
                    aria-hidden="true"
                    className="absolute left-0 top-0 -z-10 h-32 stroke-white/20"
                  >
                    <path
                      id="b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb"
                      d="M65.5697 118.507L65.8918 118.89C68.9503 116.314 71.367 113.253 73.1386 109.71C74.9162 106.155 75.8027 102.28 75.8027 98.0919C75.8027 94.237 75.16 90.6155 73.8708 87.2314C72.5851 83.8565 70.8137 80.9533 68.553 78.5292C66.4529 76.1079 63.9476 74.2482 61.0407 72.9536C58.2795 71.4949 55.276 70.767 52.0386 70.767C48.9935 70.767 46.4686 71.1668 44.4872 71.9924L44.4799 71.9955L44.4726 71.9988C42.7101 72.7999 41.1035 73.6831 39.6544 74.6492C38.2407 75.5916 36.8279 76.455 35.4159 77.2394L35.4047 77.2457L35.3938 77.2525C34.2318 77.9787 32.6713 78.3634 30.6736 78.3634C29.0405 78.3634 27.5131 77.2868 26.1274 74.8257C24.7483 72.2185 24.0519 69.2166 24.0519 65.8071C24.0519 60.0311 25.3782 54.4081 28.0373 48.9335C30.703 43.4454 34.3114 38.345 38.8667 33.6325C43.5812 28.761 49.0045 24.5159 55.1389 20.8979C60.1667 18.0071 65.4966 15.6179 71.1291 13.7305C73.8626 12.8145 75.8027 10.2968 75.8027 7.38572C75.8027 3.6497 72.6341 0.62247 68.8814 1.1527C61.1635 2.2432 53.7398 4.41426 46.6119 7.66522C37.5369 11.6459 29.5729 17.0612 22.7236 23.9105C16.0322 30.6019 10.618 38.4859 6.47981 47.558L6.47976 47.558L6.47682 47.5647C2.4901 56.6544 0.5 66.6148 0.5 77.4391C0.5 84.2996 1.61702 90.7679 3.85425 96.8404L3.8558 96.8445C6.08991 102.749 9.12394 108.02 12.959 112.654L12.959 112.654L12.9646 112.661C16.8027 117.138 21.2829 120.739 26.4034 123.459L26.4033 123.459L26.4144 123.465C31.5505 126.033 37.0873 127.316 43.0178 127.316C47.5035 127.316 51.6783 126.595 55.5376 125.148L55.5376 125.148L55.5477 125.144C59.5516 123.542 63.0052 121.456 65.9019 118.881L65.5697 118.507Z"
                    />
                    <use href="#b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb" x={86} />
                  </svg>

                  <h2 className="hero_hero__KMqi3 px-6  font-bold italic tracking-tight text-sky-400 sm:text-zinc-100 sm:dark:text-indigo-500">
                    &quot; A passion for music and audio production. &quot;{' '}
                  </h2>
                </figure>
                {/* <h2 class="utils_appear__u0bLv utils_appear-third__JahUD utils_show-on-mobile__TvSSi hero_description__39JUn">
                  An interactive online experience by the community, free for
                  everyone.
                </h2> */}
                <div id="headIcon" className="sm:mt-20">
                  <ProfilePhoto />
                </div>
              </blockquote>
            </figure>
          </div>
        </div>
      </div>
      <div id="separator" className="h-4 bg-sky-400"></div>

      <div className="relative z-10 mt-0 bg-gray-900 pb-20  sm:pb-24 xl:pb-0">
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute left-[calc(50%-19rem)] top-[calc(50%-36rem)]  transform-gpu  blur-3xl">
            <div
              className="aspect-[1097/1023] w-[68.5625rem] bg-gradient-to-r from-[#ff4694] to-[#776fff]  opacity-25"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
        </div>

        <Container>
          <figcaption className="mx-0 px-2 pt-6  text-base sm:hidden">
            <div className="text-4xl font-bold tracking-tight text-zinc-100 dark:text-zinc-100  sm:text-5xl">
              Cam Duncan
            </div>
            <div className="mt-1 text-gray-400">Recording Engineer</div>
          </figcaption>
        </Container>
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-x-8 gap-y-10 px-6 pt-10 sm:gap-y-8 lg:px-8 xl:flex-row xl:items-stretch">
          <div className="mt-0 w-full max-w-2xl  sm:-mt-8 xl:-mb-8 xl:w-96 xl:flex-none">
            <div className="relative aspect-[1/1] h-full sm:aspect-[1/1] sm:aspect-[2/1] md:-mx-8  xl:aspect-auto">
              <Image
                width={CamImage.width}
                height={CamImage.height}
                className="absolute  inset-0 h-full w-full rounded-2xl bg-gray-800 object-cover shadow-2xl"
                src={CamImage.src}
                alt=""
              />
            </div>
          </div>
          <div className="z-10 w-full max-w-2xl xl:max-w-none xl:flex-auto xl:px-16 xl:py-24">
            <div className="grid grid-cols-2 px-4 sm:-mt-36 lg:-mt-20 lg:px-0">
              <figcaption className="sr-only mx-0 text-base sm:not-sr-only ">
                <div className="text-4xl font-bold tracking-tight text-zinc-200 dark:text-zinc-100 sm:text-5xl ">
                  Cam Duncan
                </div>
                <div className="mt-1 text-gray-400 sm:text-xl sm:text-indigo-600">
                  Recording Engineer
                </div>
              </figcaption>
              <div id="headshot" className="sm:-ml-24 sm:hidden lg:-ml-40">
                {/* <ProfilePhoto /> */}
              </div>
            </div>
            <figure className="relative isolate pt-6 sm:pt-12">
              <svg
                viewBox="0 0 162 128"
                fill="none"
                aria-hidden="true"
                className="absolute left-0 top-0 -z-10 h-32 stroke-white/20"
              >
                <path
                  id="b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb"
                  d="M65.5697 118.507L65.8918 118.89C68.9503 116.314 71.367 113.253 73.1386 109.71C74.9162 106.155 75.8027 102.28 75.8027 98.0919C75.8027 94.237 75.16 90.6155 73.8708 87.2314C72.5851 83.8565 70.8137 80.9533 68.553 78.5292C66.4529 76.1079 63.9476 74.2482 61.0407 72.9536C58.2795 71.4949 55.276 70.767 52.0386 70.767C48.9935 70.767 46.4686 71.1668 44.4872 71.9924L44.4799 71.9955L44.4726 71.9988C42.7101 72.7999 41.1035 73.6831 39.6544 74.6492C38.2407 75.5916 36.8279 76.455 35.4159 77.2394L35.4047 77.2457L35.3938 77.2525C34.2318 77.9787 32.6713 78.3634 30.6736 78.3634C29.0405 78.3634 27.5131 77.2868 26.1274 74.8257C24.7483 72.2185 24.0519 69.2166 24.0519 65.8071C24.0519 60.0311 25.3782 54.4081 28.0373 48.9335C30.703 43.4454 34.3114 38.345 38.8667 33.6325C43.5812 28.761 49.0045 24.5159 55.1389 20.8979C60.1667 18.0071 65.4966 15.6179 71.1291 13.7305C73.8626 12.8145 75.8027 10.2968 75.8027 7.38572C75.8027 3.6497 72.6341 0.62247 68.8814 1.1527C61.1635 2.2432 53.7398 4.41426 46.6119 7.66522C37.5369 11.6459 29.5729 17.0612 22.7236 23.9105C16.0322 30.6019 10.618 38.4859 6.47981 47.558L6.47976 47.558L6.47682 47.5647C2.4901 56.6544 0.5 66.6148 0.5 77.4391C0.5 84.2996 1.61702 90.7679 3.85425 96.8404L3.8558 96.8445C6.08991 102.749 9.12394 108.02 12.959 112.654L12.959 112.654L12.9646 112.661C16.8027 117.138 21.2829 120.739 26.4034 123.459L26.4033 123.459L26.4144 123.465C31.5505 126.033 37.0873 127.316 43.0178 127.316C47.5035 127.316 51.6783 126.595 55.5376 125.148L55.5376 125.148L55.5477 125.144C59.5516 123.542 63.0052 121.456 65.9019 118.881L65.5697 118.507Z"
                />
                <use href="#b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb" x={86} />
              </svg>
              <blockquote className="text-xl font-semibold leading-8 text-white sm:text-2xl sm:leading-9">
                <p>
                  I am a professional studio engineer who works in the field of
                  audio recording and production. My main responsibility is to
                  operate and maintain the equipment used in a recording studio,
                  ensuring that the sound quality is of the highest standard. I
                  worked closely with artists and producers to capture the best
                  possible performances, mixing and editing audio tracks to
                  create a finished product that meets the artistic vision of
                  the project. I also have a strong understanding of acoustics
                  and the ability to troubleshoot technical issues that may
                  arise during a recording session. I possess excellent
                  communication skills, attention to detail, and a passion for
                  music and audio production.
                </p>
              </blockquote>
              {/* <figcaption className="mt-8 text-base">
                <div className="font-semibold text-white">Judith Black</div>
                <div className="mt-1 text-gray-400">CEO of Tuple</div>
              </figcaption> */}
            </figure>
          </div>
        </div>
      </div>
      <div className="mt-10 sm:mt-56">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="leading-12 text-base text-6xl font-extrabold text-indigo-600">
              Everything you need
            </h2>
            <p className="mt-2 text-5xl font-bold tracking-tight text-gray-900 dark:text-slate-200 sm:text-5xl">
              Studio Space ?
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-slate-200">
              I work with Quad Studdio where we have access to some of the best
              recording studio spaces. Here are some of the spaces bellow.
            </p>
          </div>
        </div>
        <div className="relative mx-4 overflow-hidden pt-16 sm:mx-auto">
          <div className="mx-auto">
            <Image
              src={studioRoom.src}
              alt="App screenshot"
              className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-gray-900/10"
              width={2432}
              height={1442}
            />
            <div className="relative" aria-hidden="true">
              <div className="absolute -inset-x-20 bottom-0  bg-gradient-to-t from-indigo-500  pt-[6%] dark:from-slate-900 sm:pt-[7%]" />
            </div>
          </div>
        </div>
        <Rooms />
        <Container className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:pt-10 sm:text-5xl">
              Areas Of Expertise
            </h1>
          </div>

          <div className="mx-auto mt-16 max-w-7xl px-0 sm:mt-20 md:mt-24 lg:px-8">
            <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900 dark:text-slate-200">
                    <feature.icon
                      className="absolute left-1 top-1 h-5 w-5 text-sky-500"
                      aria-hidden="true"
                    />
                    {feature.name}
                  </dt>{' '}
                  <dd className="inline dark:text-slate-300">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </div>

      {/* Testimonial section */}

      <Container className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
        <div className="mb-4 max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:pt-10 sm:text-5xl">
            Booking Policy
          </h1>
          <p className="mt-6 pb-6 text-base text-zinc-600 dark:text-zinc-400">
            There is a 4-hour booking minimum for any of our studios All
            sessions booked require a 50% deposit Deposits are refunded if a
            client cancels at least 48 hours before session start time We accept
            payment in the form of cash and /or credit card We also accept
            Zelle, Cashapp, Venmo, Apple Pay and Paypal as other forms of
            payment Major labels with Quad accounts will need a PO to hold the
            time
          </p>
        </div>
        <MobileNavigation />
      </Container>
    </>
  )
}

// export async function getStaticProps() {
//   if (process.env.NODE_ENV === 'production') {
//     await generateRssFeed()
//   }

//   return {
//     props: {
//       articles: (await getAllArticles())
//         .slice(0, 4)
//         .map(({ component, ...meta }) => meta),
//     },
//   }
// }