import Navbar from '@/components/Navbar';
import PlanCard from '@/components/PlanCard';

export default function Plans() {
  return (
    <>
      <Navbar />

      <section className="grid md:grid-cols-3 gap-6 p-10">
        <PlanCard title="3 Months" />
        <PlanCard title="6 Months" />
        <PlanCard title="12 Months" />
      </section>
    </>
  );
}