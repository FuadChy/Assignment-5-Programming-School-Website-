import logo from "../../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-white">
      {/* Footer Content */}
      <div className="mx-auto max-w-6xl px-6 py-10">
        {/* Top Part of Footer */}
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          {/* Logo and Description */}
          <div className="max-w-md">
            {/* Logo */}
            <img src={logo} alt="Dev Stack" className="h-8 w-auto" />

            {/* Description */}
            <p className="mt-4 text-sm leading-6 text-gray-500">
              Curated tools, technologies, and resources for developers building
              <br />
              modern software.
            </p>

            {/* Social Links */}
            <div className="mt-5 flex gap-5">
              <a href="#" className="text-sm text-gray-500 hover:text-gray-900">
                GitHub
              </a>

              <a href="#" className="text-sm text-gray-500 hover:text-gray-900">
                Twitter
              </a>

              <a href="#" className="text-sm text-gray-500 hover:text-gray-900">
                LinkedIn
              </a>
            </div>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            {/* Product */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900">Product</h3>

              <div className="mt-4 space-y-3">
                <a
                  href="#"
                  className="block text-sm text-gray-500 hover:text-gray-900"
                >
                  Home
                </a>

                <a
                  href="#"
                  className="block text-sm text-gray-500 hover:text-gray-900"
                >
                  Technologies
                </a>

                <a
                  href="#"
                  className="block text-sm text-gray-500 hover:text-gray-900"
                >
                  Projects
                </a>
              </div>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900">Company</h3>

              <div className="mt-4 space-y-3">
                <a
                  href="#"
                  className="block text-sm text-gray-500 hover:text-gray-900"
                >
                  About
                </a>

                <a
                  href="#"
                  className="block text-sm text-gray-500 hover:text-gray-900"
                >
                  Contact
                </a>

                <a
                  href="#"
                  className="block text-sm text-gray-500 hover:text-gray-900"
                >
                  Careers
                </a>
              </div>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900">Legal</h3>

              <div className="mt-4 space-y-3">
                <a
                  href="#"
                  className="block text-sm text-gray-500 hover:text-gray-900"
                >
                  Privacy Policy
                </a>

                <a
                  href="#"
                  className="block text-sm text-gray-500 hover:text-gray-900"
                >
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Part */}
        <div className="mt-10 border-t border-gray-200 pt-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            {/* Copyright */}
            <p className="text-sm text-gray-400">
              © 2026 Dev Stack. All rights reserved.
            </p>

            {/* Privacy and Terms */}
            <div className="flex gap-5">
              <a href="#" className="text-sm text-gray-400 hover:text-gray-700">
                Privacy
              </a>

              <a href="#" className="text-sm text-gray-400 hover:text-gray-700">
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
