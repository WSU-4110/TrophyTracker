/**
 * Renders a section title with an optional subtitle, title, and paragraph.
 * @param {Object} props - The component props.
 * @param {string} [props.subtitle] - The subtitle of the section title.
 * @param {string} props.title - The title of the section title.
 * @param {string} props.paragraph - The paragraph of the section title.
 * @param {string} [props.width='635px'] - The width of the section title.
 * @param {boolean} [props.center] - Determines if the section title should be centered.
 * @returns {JSX.Element} The rendered section title component.
 */
const SectionTitle = ({
  subtitle,
  title,
  paragraph,
  width = "635px",
  center,
}: {
  subtitle?: string;
  title: string;
  paragraph: string;
  width?: string;
  center?: boolean;
}) => {
  return (
    <div className="-mx-4 flex flex-wrap">
      <div
        className={`wow fadeInUp w-full px-4 ${
          center ? "mx-auto text-center" : ""
        }`}
        data-wow-delay=".1s"
        style={{ maxWidth: width }}
      >
        {subtitle && (
          <span className="mb-2 block text-lg font-semibold text-primary">
            {subtitle}
          </span>
        )}
        <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px] md:leading-[1.2]">
          {title}
        </h2>
        <p className="text-base leading-relaxed text-body-color dark:text-dark-6 sm:leading-relaxed">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SectionTitle;
