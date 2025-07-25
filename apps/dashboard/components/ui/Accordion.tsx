"use client";

import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "lucide-react";
import * as React from "react";
import { cn } from "@/lib/utils";

const Accordion = AccordionPrimitive.Root;

function AccordionItem({ className, ...props }: React.ComponentProps<typeof AccordionPrimitive.Item>) {
 return <AccordionPrimitive.Item className={cn("border-b border-neutral-800", className)} {...props} />;
}

function AccordionTrigger({ className, children, ...props }: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
 return (
  <AccordionPrimitive.Header className="flex">
   <AccordionPrimitive.Trigger
    className={cn("flex w-full items-center justify-between p-6 py-4 font-medium cursor-pointer text-white duration-200 [&[data-state=open]>svg]:rotate-180", className)}
    {...props}
   >
    {children}
    <ChevronDownIcon className="size-4 duration-200" />
   </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
 );
}

function AccordionContent({ className, children, ...props }: React.ComponentProps<typeof AccordionPrimitive.Content>) {
 return (
  <AccordionPrimitive.Content
   className="overflow-hidden transform-gpu transition-all px-6 pb-3 text-neutral-400 data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
   {...props}
  >
   <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
 );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
