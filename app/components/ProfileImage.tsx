import Image from 'next/image'

export default function ProfileImage() {
  return (
    <Image
      src="/profile.jpg"
      alt="Ife Akande - Data Engineer and ML Solutions Architect"
      width={320}
      height={320}
      priority
      quality={75}
      loading="eager"
      className="rounded-full"
    />
  )
} 