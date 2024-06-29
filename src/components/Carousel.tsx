import {
  Carousel as CNCarousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Icon, { iconName } from "./icon";
import AutoScroll from "embla-carousel-auto-scroll";

export default function Carousel() {
  return (
    <CNCarousel opts={{ loop: true }} plugins={[AutoScroll({ speed: 1 })]}>
      <CarouselContent>
        {iconName.map((icon) => (
          <CarouselItem className="basis-auto" key={icon}>
            <Icon className="w-10 h-10" name={icon} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </CNCarousel>
  );
}
