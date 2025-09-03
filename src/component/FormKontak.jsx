import { OctagonAlert } from "lucide-react";
import React from "react";
import { useForm } from "react-hook-form";

export const FormKontak = ({ Submits }) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  return (
    <div>
      <form
        method="POST"
        className=" bg-white px-5"
        onSubmit={handleSubmit(Submits)}
      >
        <div className="mx-auto w-full lg:mr-0 ">
          <div className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
            <div className="col-span-full">
              <label
                htmlFor="first-name"
                className="block text-sm/6 font-semibold text-gray-900"
              >
                Nama Lengkap
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  autoComplete="given-name"
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-1 focus:-outline-offset-2 focus:outline-sky-600"
                  {...register("nama", { required: true })}
                />
              </div>
              {errors.nama && (
                <span className="flex text-xs mt-2">
                  {" "}
                  <OctagonAlert className="text-rose-700 me-1 size-4" />
                  Field wajib diisi !!
                </span>
              )}
            </div>
            <div className="sm:col-span-1">
              <label
                htmlFor="last-name"
                className="block text-sm/6 font-semibold text-gray-900"
              >
                Email
              </label>
              <div className="mt-2.5">
                <input
                  type="email"
                  autoComplete="family-name"
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-1 focus:-outline-offset-2 focus:outline-sky-600"
                  {...register("email", { required: true })}
                />
              </div>
              {errors.email && (
                <span className="flex text-xs mt-2">
                  {" "}
                  <OctagonAlert className="text-rose-700 me-1 size-4" />
                  Field wajib diisi !!
                </span>
              )}
            </div>
            <div className="sm:col-span-1">
              <label
                htmlFor="email"
                className="block text-sm/6 font-semibold text-gray-900"
              >
                Telpon / HP
              </label>
              <div className="mt-2.5">
                <input
                  type="number"
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-1 focus:-outline-offset-2 focus:outline-sky-600"
                  {...register("kontak")}
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm/6 font-semibold text-gray-900">
                Nama Perusahaan
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-1 focus:-outline-offset-2 focus:outline-sky-600"
                  {...register("perusahaan", { required: true })}
                />
              </div>
              {errors.perusahaan && (
                <span className="flex text-xs mt-2">
                  {" "}
                  <OctagonAlert className="text-rose-700 me-1 size-4" />
                  Field wajib diisi !!
                </span>
              )}
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="phone-number"
                className="block text-sm/6 font-semibold text-gray-900"
              >
                Subjek
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-1 focus:-outline-offset-2 focus:outline-sky-600"
                  {...register("subjek", { required: true })}
                />
              </div>
              {errors.subjek && (
                <span className="flex text-xs mt-2">
                  {" "}
                  <OctagonAlert className="text-rose-700 me-1 size-4" />
                  Field wajib diisi !!
                </span>
              )}
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm/6 font-semibold text-gray-900"
              >
                Pesan
              </label>
              <div className="mt-2.5">
                <textarea
                  rows={4}
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-1 focus:-outline-offset-2 focus:outline-sky-600"
                  defaultValue={""}
                  {...register("pesan", { required: true })}
                />
              </div>
              {errors.pesan && (
                <span className="flex text-xs mt-2">
                  {" "}
                  <OctagonAlert className="text-rose-700 me-1 size-4" />
                  Field wajib diisi !!
                </span>
              )}
            </div>
          </div>
          <div className="mt-8 flex justify-end">
            <button
              type="submit"
              className=" text-rose-50 border px-8 py-1.5 rounded cursor-pointer bg-rose-700/85  "
            >
              Send message
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
