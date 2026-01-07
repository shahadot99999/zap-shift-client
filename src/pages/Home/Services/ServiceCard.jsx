const ServiceCard = ({ service}) => {

    const {icon: Icon, title, description}=service
  return (
    <div className="bg-base-100 rounded-xl shadow-md p-6 text-center hover:shadow-xl transition duration-300 text-gray-800">

      <div className="flex justify-center mb-4">
        <div className="w-14 h-14 flex items-center justify-center rounded-full bg-primary/10 text-primary text-2xl">
          <Icon />
        </div>
      </div>

      <h3 className="font-semibold text-lg mb-2 text-primary">
        {title}
      </h3>

      <p className="text-sm text-gray-500 leading-relaxed">
        {description}
      </p>

    </div>
  );
};

export default ServiceCard;
