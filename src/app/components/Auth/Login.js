import Link from "next/link";
import SelectMenus from "../SelectMenus";
import ButtonGoggle from "../micro/ButtonGoggle";
import Input from "../micro/Input";
import PasswordInput from "../micro/PasswordInput";

export default function Login() {
  return (
    <main className="w-full h-auto mt-20 mb-40 flex flex-col items-center justify-cente sm:px-4">
      <div className="w-5/6 space-y-6 text-gray-600 sm:max-w-xl">
        <div className="w-full bg-white shadow p-4 py-6 sm:p-6 sm:rounded-lg">
          <div className="text-center mb-10">
            <div className="mt-5 space-y-2">
              <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">
                Masuk Ke Akun
              </h3>
              <p className="">Yuk, lanjutin belajarmu di videobelajar.</p>
            </div>
          </div>
          <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
            <Input label="Email" type="email" required={true} />
            <PasswordInput label="Password" required={true} />
            {/* <div className="flex flex-row gap-2">
              <SelectMenus />
              <Input type="tel" />
            </div> */}

            <button className="w-full px-4 py-2 text-white font-medium bg-green-500 rounded-lg duration-150">
              Masuk
            </button>
            <Link href="/register">
              <button className="w-full px-4 py-2 mt-5 text-green-400 font-medium bg-green-100 rounded-lg duration-150">
                Daftar
              </button>
            </Link>
          </form>

          <div className="mt-5">
            <div className="relative mt-10 mb-10">
              <span className="block w-full h-px bg-gray-300"></span>
              <p className="inline-block w-fit text-sm bg-white px-2 absolute -top-2 inset-x-0 mx-auto">
                Atau
              </p>
            </div>
            <ButtonGoggle />
          </div>
        </div>
      </div>
    </main>
  );
}
