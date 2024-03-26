import Link from "next/link";

/**
 * Renders a breadcrumb component with the specified page name and optional page description.
 * @param {Object} props - The component props.
 * @param {string} props.pageName - The name of the current page.
 * @param {string} [props.pageDescription] - The description of the current page (optional).
 * @returns {JSX.Element} The breadcrumb component.
 */
const Breadcrumb = ({
  pageName,
  pageDescription,
}: {
  pageName: string;
  pageDescription?: string;
}) => {
  return (
    <>
      {/* Breadcrumb container */}
      <div className="relative z-10 overflow-hidden pb-[60px] pt-[120px] dark:bg-dark md:pt-[130px] lg:pt-[160px]">
        {/* Breadcrumb separator */}
        <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-stroke/0 via-stroke to-stroke/0 dark:via-dark-3"></div>
        <div className="container">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4">
              <div className="text-center">
                {/* Page name */}
                <h1 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px] md:leading-[1.2]">
                  {pageName}
                </h1>
                {/* Page description */}
                <p className="mb-5 text-base text-body-color dark:text-dark-6">
                  {pageDescription}
                </p>

                {/* Breadcrumb links */}
                <ul className="flex items-center justify-center gap-[10px]">
                  {/* Home link */}
                  <li>
                    <Link
                      href="/"
                      className="flex items-center gap-[10px] text-base font-medium text-dark dark:text-white"
                    >
                      Home
                    </Link>
                  </li>
                  {/* Current page link */}
                  <li>
                    <p className="flex items-center gap-[10px] text-base font-medium text-body-color">
                      <span className="text-body-color dark:text-dark-6">
                        {" "}
                        /{" "}
                      </span>
                      {pageName}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Breadcrumb;
