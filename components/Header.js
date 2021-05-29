import { useRouter } from 'next/router';
import Image from 'next/image';
// Hero Icons
import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from '@heroicons/react/outline'
// Components
import HeaderItem from './HeaderItem';
//Utils
import requests from '../utils/requests'

function Header() {
  const router = useRouter();
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeaderItem title="HOME" Icon={HomeIcon} />
        <HeaderItem title="TRENDING" Icon={LightningBoltIcon} />
        <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} />
        <HeaderItem title="COLLECTIONS" Icon={CollectionIcon} />
        <HeaderItem title="SEARCH" Icon={SearchIcon} />
        <HeaderItem title="ACCOUNT" Icon={UserIcon} />
      </div>
      <Image 
        className="object-contain"
        src='https://links.papareact.com/ua6'
        width={200}
        height={100}
      />
    </header>
  )
}

export default Header;
