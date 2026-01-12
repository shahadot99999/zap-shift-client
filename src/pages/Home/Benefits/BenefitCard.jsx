const BenefitCard = ({ benefit }) => {
  const { image, title, description } = benefit;

  return (
    <div className="card bg-base-100 shadow-sm hover:shadow-md transition">
      <div className="card-body p-6">

        <div className="flex items-center gap-6">

          {/* Left image */}
          <img
            src={image}
            alt={title}
            className="w-20 h-20 object-contain"
          />

          {/* Vertical Divider */}
          <div className="divider divider-horizontal"></div>

          {/* Right content */}
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-1">{title}</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              {description}
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default BenefitCard;
