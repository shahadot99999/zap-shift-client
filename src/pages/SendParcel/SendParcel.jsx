import { useForm } from "react-hook-form";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useLoaderData } from 'react-router';



const SendParcel = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const serviceCenters = useLoaderData();

  const parcelType = watch("type");

  const senderRegion = watch("senderRegion");
  const receiverRegion = watch("receiverRegion");

  // ✅ Unique regions from data
  const regions = [...new Set(serviceCenters.map((item) => item.district))];

  // ✅ Filter centers by region
  const senderCenters = serviceCenters.filter(
    (item) => item.district === senderRegion
  );

  const receiverCenters = serviceCenters.filter(
    (item) => item.district === receiverRegion
  );

  const calculateCost = (data) => {
    let cost = 50;

    if (data.type === "non-document") {
      cost += Number(data.weight || 0) * 10;
    }

    if (data.senderServiceCenter !== data.receiverServiceCenter) {
      cost += 30;
    }

    return cost;
  };

  const onSubmit = (data) => {
    const cost = calculateCost(data);

    toast(
      (t) => (
        <div className="flex flex-col gap-2">
          <span className="font-semibold">
            Delivery Cost: ৳{cost}
          </span>
          <button
            className="btn btn-sm btn-primary"
            onClick={() => {
              const parcelData = {
                ...data,
                cost,
                creation_date: new Date(),
              };

              console.log("Saved to DB:", parcelData);

              toast.success("Parcel Confirmed!");
              reset();
              toast.dismiss(t.id);
            }}
          >
            Confirm
          </button>
        </div>
      ),
      { duration: 5000 }
    );
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <Toaster />

      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold">Send a Parcel</h1>
        <p className="text-gray-500">
          Door to Door Delivery Service
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

        {/* Parcel Info */}
        <div className="card bg-base-100 shadow-md p-5">
          <h2 className="text-xl font-semibold mb-4">Parcel Info</h2>

          <div className="grid md:grid-cols-2 gap-4">
            <select
              className="select select-bordered w-full"
              {...register("type", { required: true })}
            >
              <option value="">Select Type</option>
              <option value="document">Document</option>
              <option value="non-document">Non-Document</option>
            </select>

            {/* ✅ Updated Title → Parcel Name */}
            <input
              className="input input-bordered w-full"
              placeholder="Describe your parcel..."
              {...register("parcelName", { required: true })}
            />

            {parcelType === "non-document" && (
              <input
                type="number"
                className="input input-bordered w-full"
                placeholder="Weight (kg)"
                {...register("weight")}
              />
            )}
          </div>
        </div>

        {/* Sender + Receiver */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* Sender */}
          <div className="card bg-base-100 shadow-md p-5">
            <h2 className="text-xl font-semibold mb-4">Sender Info</h2>

            {/* ✅ Forced single column */}
            <div className="flex flex-col gap-4">
              <input
                className="input input-bordered"
                defaultValue="Logged User"
                {...register("senderName", { required: true })}
              />

              <input
                className="input input-bordered"
                placeholder="Contact"
                {...register("senderContact", { required: true })}
              />

              <select
                className="select select-bordered"
                {...register("senderRegion", { required: true })}
              >
                <option value="">Select Region</option>
                {regions.map((region) => (
                  <option key={region}>{region}</option>
                ))}
              </select>

              <select
                className="select select-bordered"
                {...register("senderRegion", { required: true })}
              >
                <option value="">Select Service Center</option>
                {regions.map((region) => (
                  <option key={region}>{region}</option>
                ))}
              </select>

              <input
                className="input input-bordered"
                placeholder="Address"
                {...register("senderAddress", { required: true })}
              />

              <textarea
                className="textarea textarea-bordered"
                placeholder="Pickup Instruction"
                {...register("pickupInstruction", { required: true })}
              />
            </div>
          </div>

          {/* Receiver */}
          <div className="card bg-base-100 shadow-md p-5">
            <h2 className="text-xl font-semibold mb-4">Receiver Info</h2>

            {/* ✅ Forced single column */}
            <div className="flex flex-col gap-4">
              <input
                className="input input-bordered"
                placeholder="Name"
                {...register("receiverName", { required: true })}
              />

              <input
                className="input input-bordered"
                placeholder="Contact"
                {...register("receiverContact", { required: true })}
              />

              <select
                className="select select-bordered"
                {...register("receiverRegion", { required: true })}
              >
                <option value="">Select Region</option>
                {regions.map((region) => (
                  <option key={region}>{region}</option>
                ))}
              </select>

              <select
                className="select select-bordered"
                {...register("receiverRegion", { required: true })}
              >
                <option value="">Select Service Center</option>
                {regions.map((region) => (
                  <option key={region}>{region}</option>
                ))}
              </select>

              <input
                className="input input-bordered"
                placeholder="Address"
                {...register("receiverAddress", { required: true })}
              />

              <textarea
                className="textarea textarea-bordered"
                placeholder="Delivery Instruction"
                {...register("deliveryInstruction", { required: true })}
              />
            </div>
          </div>

        </div>

        <button className="btn btn-primary  text-black">
          Submit Parcel
        </button>
      </form>
    </div>
  );
};

export default SendParcel;