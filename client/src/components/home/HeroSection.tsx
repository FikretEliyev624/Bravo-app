import BarcodeDisplay from '../ui/BarcodeDisplay'

export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden px-[var(--page-padding-x)] pb-7 pt-5"
      style={{
        background:
          'linear-gradient(145deg, var(--bravo-green-900) 0%, var(--bravo-green-800) 55%, var(--bravo-green-700) 100%)'
      }}
    >
      <div
        aria-hidden="true"
        className="absolute -bottom-8 -right-6 h-36 w-36 bg-[var(--bravo-green-800)] opacity-20"
        style={{ borderRadius: '50% 30% 50% 30%' }}
      />
      <div className="relative z-10 w-full">
        <h1 className="mb-4 text-[26px] leading-8">
          <span className="font-normal text-[rgb(255_255_255_/_85%)]">Salam, </span>
          <span className="font-bold text-[var(--white)]">Tunar</span>
        </h1>
        <BarcodeDisplay code="23202650388" />
      </div>
    </section>
  )
}
