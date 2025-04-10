import NextLink from 'next/link'
import Image from 'next/image'

const Logo = () => {
  return (
    <NextLink
      href="/"
      className="group flex items-center h-[30px] p-[10px] text-[18px] font-bold no-underline"
    >
      <Image
        src="/apple-touch-icon.png"
        width={25}
        height={25}
        alt="logo"
        className="transition-transform duration-500 group-hover:rotate-360"
      />
      <span className="pl-3 font-bold leading-[20px] font-sans">
        <h1>Stephen LH Chan</h1>
      </span>
    </NextLink>
  )
}

export default Logo
