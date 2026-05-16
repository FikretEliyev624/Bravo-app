import SectionHeader from '../ui/SectionHeader'

export default function MyCouponsSection() {
  return (
    <section className="space-y-3">
      <SectionHeader href="/coupons" title="My coupons" />
      <article className="mx-[var(--page-padding-x)] rounded-[var(--radius-lg)] bg-[var(--gray-100)] px-6 py-8 text-center">
        <h3 className="text-[15px] font-semibold text-[var(--gray-900)]">No coupons yet</h3>
        <p className="mt-2 text-[13px] text-[var(--gray-600)]">Your coupons will appear here after you join a campaign.</p>
      </article>
    </section>
  )
}
