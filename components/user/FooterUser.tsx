import Link from "next/link";

export default function footer() {
  return (
    <section className="py-6 px-16   border-t border-gray-200  main-bg">
      <div  className="userfooter-wrapper  font-light flex flex-col ml-auto lg:flex-row justify-between items-center ">

      <p className="text-white mb-6 lg:mb-0 flex items-center space-x-2">
      <span className="w-10">
              <img src="/assets/img/apple-touch-icon.png" alt="logo" />
            </span>
        <Link
          href="/"
          className="text-white font-bold"
        >
          Equityrise
        </Link>
      </p>

      <ul className="list-unstyled flex">
        <li className="mr-6">
          <Link
            className="text-white hover:text-gray-200 font-medium block text-sm"
            href="/about"
          >
            About Us
          </Link>
        </li>
        <li className="mr-6">
          <Link
            className="text-white hover:text-gray-200 font-medium block text-sm"
            href="/user/payments"
          >
            payment
          </Link>
        </li>
        <li className="mr-6">
          <Link
            className="text-white hover:text-gray-200 font-medium block text-sm"
            href="/user/withdrawals"
          >
            Withdrawals
          </Link>
        </li>
        <li>
          <Link
            className="text-white hover:text-gray-200 font-medium block text-sm"
            href="/contact"
          >
            Contact Us
          </Link>
        </li>
      </ul>
      </div>
    </section>
  )
}
