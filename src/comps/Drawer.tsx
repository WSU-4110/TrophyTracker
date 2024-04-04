import {
  Accordion,
  AccordionContent,
  AccordionPanel,
  AccordionTitle,
} from "flowbite-react";

interface DrawerProps {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

const Drawer = ({ title, icon, children }: DrawerProps) => (
  <Accordion collapseAll>
    <AccordionPanel>
      <AccordionTitle>
        <div className="flex items-center gap-2">
          {icon}
          {title}
        </div>
      </AccordionTitle>
      <AccordionContent>{children}</AccordionContent>
    </AccordionPanel>
  </Accordion>
);

export default Drawer;
