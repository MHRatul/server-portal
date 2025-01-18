import Header from '../components/Header';
import BalanceCard from '../components/BalanceCard';
import ServicesList from '../components/ServicesList';

export default function Home() {
  return (
    <div className="bg-blue-50 min-h-screen">
      <Header />
      <div className="max-w-md mx-auto">
        <BalanceCard />
        <ServicesList />
      </div>
    </div>
  );
}
