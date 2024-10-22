import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@saasfly/ui/accordion";

export function Questions() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>How does W3W.delivery work?</AccordionTrigger>
        <AccordionContent>
          W3W.delivery partnered with What3Words to pinpoint 3 workd delivery
          address locations accurately. Businesses subscribe to the pricing tier
          that best aligns with their delivery and marketing needs. Then we create
          a branded Discord to streamline your proof of delivery (pic, video or
          live stream) content in real time.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>What is the benefit of using influencers for deliveries?</AccordionTrigger>
        <AccordionContent>
          Influencers bring a personal touch to the delivery experience. They create
          authentic content that resonates with their followers, helping to build
          brand loyalty and increase visibility in the competitive social media landscape.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>What type of content will be created for each delivery?</AccordionTrigger>
        <AccordionContent>
          Each delivery will feature a variety of engaging content, including
          photos, videos, and live streams. Our content-creating drivers capture
          moments of your customers receiving or unboxing your products, generating
          valuable social media content. Customers also have the chance to win a
          delivery from local influencers, driving organic product sales. W3W.delivery
          shares and documents these experiences across all our social platforms,
          amplifying your brand's visibility.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
