import { GanttChartSquare, Blocks, Gem } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
type Props = {};

const servicesData = [
  {
    icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
    title: "Web Development",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum incidunt optio sapiente ratione ",
  },
  {
    icon: <Blocks size={72} strokeWidth={0.8} />,
    title: "Graphic Design",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum incidunt optio sapiente ratione ",
  },
  {
    icon: <Gem size={72} strokeWidth={0.8} />,
    title: "Graphic Design",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum incidunt optio sapiente ratione ",
  },
];

const Services = (props: Props) => {
  return (
    <section className="mb-12 xl:mb-36">
        <div className="container mx-auto">
            <h2 className="section-title mb-12 xl:mb-24 text-center mx-auto">
                My Services
            </h2>

            <div className="grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8">
                {
                    servicesData.map((data)=>{
                        return (
                            <Card key={data.title} className="w-full max-w-[424px] flex flex-col pt-16 pb-18 justify-center items-center relative ">
                                <CardHeader className="text-primary absolute -top-[60px]">
                                    <div className="w-[140px] h-[80px] dark:bg-background flex justify-center items-center rounded-full border bg-background text-card-foreground">{data.icon}</div>
                                </CardHeader>
                                <CardContent className="text-center">
                                    <CardTitle className="mb-4">{data.title}</CardTitle>
                                    <CardDescription className="text-lg">{data.description}</CardDescription>
                                </CardContent>
                            </Card>
                        )
                    })
                }
            </div>

        </div>

    </section>
  );
};

export default Services;
