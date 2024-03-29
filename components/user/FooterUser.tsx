import Link from "next/link";

export default function footer() {
  return (
    <section className="py-6 px-16   border-t border-gray-200  main-bg">
      <div  className="userfooter-wrapper  font-light flex flex-col ml-auto lg:flex-row justify-between items-center ">

      <p className="text-white mb-6 lg:mb-0">
        Copyright &copy; {new Date().getFullYear()}{' '}
        <Link
          href="/"
          className="text-light-blue-500 hover:text-light-blue-700"
        >
          Cryptonomize
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
