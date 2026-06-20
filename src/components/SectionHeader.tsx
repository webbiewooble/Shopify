interface SectionHeaderProps {
  title: string;
}

export default function SectionHeader({ title }: SectionHeaderProps) {
  return (
    <div className="flex flex-col items-center justify-center my-12 md:my-16">
      <h2 className="text-2xl md:text-3xl font-serif text-[#111] uppercase tracking-wide mb-4">
        {title}
      </h2>
      <div className="w-12 h-[1px] bg-black"></div>
    </div>
  );
}
