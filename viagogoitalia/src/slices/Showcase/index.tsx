import Bounded from "@/components/Bounded";
import ButtonLink from "@/components/ButtonLink";
import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import clsx from "clsx";
import { PiArrowsClockwise, PiGear, PiPhoneCallFill } from "react-icons/pi";
import AnimatedContent from "./AnimatedContent";

const icons = {
  phone: <PiPhoneCallFill/>,
  gear: <PiGear />,
  cycle: <PiArrowsClockwise />,
  
};

/**
 * Props for `Showcase`.
 */
export type ShowcaseProps = SliceComponentProps<Content.ShowcaseSlice>;

/**
 * Component for "Showcase" Slices.
 */
const Showcase = ({ slice }: ShowcaseProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative"
    >
      <div className="glow absolute -z-20 aspect-square w-full max-w-xl rounded-full bg-white/20 blur-3xl filter" />

      <AnimatedContent>
        <PrismicRichText
          field={slice.primary.heading}
          components={{
            heading2: ({ children }) => (
              <h2 className="text-balance text-center text-5xl font-medium md:text-7xl">
                {children}
              </h2>
            ),
          }}
        />
      </AnimatedContent>
      <div className="mt-16 grid items-center gap-8 rounded-xl border border-white/20  bg-gradient-to-b from-yellow-50/15 to-yellow-50/5 px-8 py-8 backdrop-blur-sm lg:grid-cols-3 lg:gap-0 lg:py-12">
        <div>
          <div className="w-fit rounded-lg bg-yellow-400/80 p-4 text-3xl">
            <>{slice.primary.icon && icons[slice.primary.icon]}</>
          </div>
          <div className="mt-6 text-2xl font-normal">
            <PrismicRichText field={slice.primary.subheading} />
          </div>

          <div className="prose prose-invert mt-4 max-w-xl">
            <PrismicRichText field={slice.primary.body} />
          </div>

          <ButtonLink field={slice.primary.button_link} className="mt-6">
            {slice.primary.button_text || "Learn More"}
          </ButtonLink>
        </div>

        <PrismicNextImage
          field={slice.primary.image}
          className={clsx(
            "opacity-96 shadow-2xl lg:col-span-2 lg:pt-0",
            slice.variation === "reverse"
              ? "lg:order-1 lg:translate-x-[15%]"
              : "lg:-order-1 lg:translate-x-[-15%]",
          )}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </Bounded>
  );
};

export default Showcase;
