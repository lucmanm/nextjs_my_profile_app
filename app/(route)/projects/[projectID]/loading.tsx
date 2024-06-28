import { Skeleton } from "@/components/ui/skeleton";

const Loading = async () => {
  await new Promise((resolve) => {
    setTimeout(() => resolve, 10000);
  });

  return (
    <main className="container space-y-2 py-2 md:py-8">
      <Skeleton className="h-[250px] w-full rounded-md  object-none md:h-[500px] " />
      <div className="rounded-md  p-4 py-2 md:p-8 md:py-8">
        <Skeleton className="h1" />
        <Skeleton className="h2" />
        <div className="flex items-center gap-2">
          <Skeleton className="h-3 w-4 md:h-4 md:w-4" />
          <Skeleton className="h3" />
        </div>
        {/* <div className="flex gap-2 py-2">
          {project.teckStacks.map((item, id) => (
            <span
              key={id}
              className="rounded-full bg-slate-100 px-2 py-0.5 text-xs md:text-base"
            >
              {item}
            </span>
          ))}
        </div> */}
      </div>
    </main>
  );
};

export default Loading;
