const services = [
    { name: 'Nagad Biometric', price: '100 TK', color: 'red' },
    { name: 'Nagad Agent Biometric', price: '180 TK', color: 'blue' },
    { name: 'All Sim Biometric', price: '80 TK', color: 'teal' },
    { name: 'Server Copy', price: '7 TK', color: 'pink', premium: true },
    { name: 'SIGN to NID', price: '4 TK', color: 'yellow' },
    { name: 'Auto NID', price: '15 TK', color: 'purple' },
    { name: 'Tin Certificate', price: '20 TK', color: 'gray' },
    { name: 'Rocket Statement', price: 'OFF TK', color: 'green' },
    { name: 'GP Recharge Statement', price: '50 TK', color: 'blue' },
  ];

  const ServicesList = () => (
    <div className="mt-4">
      <h3 className="bg-blue-700 text-white text-center py-2">Available Services</h3>
      <div className="bg-white shadow-md rounded-md p-4">
        {services.map((service, index) => (
          <div key={index} className="flex justify-between items-center py-2 border-b">
            <span className="flex items-center">
              <span
                className={`w-4 h-4 rounded-full bg-${service.color}-500 inline-block mr-2`}
              ></span>
              {service.name}
            </span>
            <span
              className={`text-sm font-semibold ${
                service.premium ? 'text-red-500' : ''
              }`}
            >
              {service.price} {service.premium && 'Premium'}
            </span>
          </div>
        ))}
      </div>
    </div>
  );

  export default ServicesList;
