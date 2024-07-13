import React from "react";
import { useForm } from "react-hook-form";
import { IoCartOutline } from "react-icons/io5";

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="p-10 shadow-lg rounded-lg bg-white font-roboto mr-10">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className="text-2xl font-medium mb-4">Buy Numbers</h1>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="server"
          >
            Select Server
          </label>
          <select
            id="server"
            name="server"
            {...register("server", { required: "Please select a server" })}
            className={`block appearance-none w-full bg-white border ${
              errors.server ? "border-red-500" : "border-gray-400"
            } hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline`}
            defaultValue=""
          >
            <option value="" disabled>
              Select Server
            </option>
            <option value="server_club1">Server Club 1</option>
            <option value="server_club2">Server Club 2</option>
            <option value="server_club3">Server Club 3</option>
            <option value="international_service">International Service</option>
          </select>
          {errors.server && (
            <p className="text-red-500 text-xs mt-2">{errors.server.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="service"
          >
            Select Service
          </label>
          <select
            id="service"
            name="service"
            {...register("service", { required: "Please select a service" })}
            className={`block appearance-none w-full bg-white border ${
              errors.service ? "border-red-500" : "border-gray-400"
            } hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline`}
            defaultValue=""
          >
            <option value="" disabled>
              Select Service
            </option>
            <option value="whatsapp">WhatsApp</option>
            <option value="facebook">Facebook</option>
            <option value="other">Other</option>
          </select>
          {errors.service && (
            <p className="text-red-500 text-xs mt-2">
              {errors.service.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className=" flex items-center gap-4 bg-indigo-500 font-roboto hover:bg-blue-700 text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          <IoCartOutline size={30} />
          Buy Numbers
        </button>
      </form>
    </div>
  );
}
