import Link from "next/link"
import ThemeButton from "./ThemeButton"
export default function Navbar() {
  return (
    <div className="max-w-3xl px-4 sm:px-6 lg:px-8 mx-auto ">
        <div className="flex justify-between h-16">
            <div className="flex justify-between items-center w-full">
                <Link href="/">
                    <h1 className="text-2xl font-medium">
                        Bek <span className="text-teal-500">zod</span>
                    </h1>
                </Link>
                <ThemeButton/>
            </div>
        </div>
    </div>
  )
}
