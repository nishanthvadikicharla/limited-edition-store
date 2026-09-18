interface Props {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}

export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
}: Props) {
  return (
    <div className="max-w-3xl">

      {eyebrow && (
        <p className="mb-3 uppercase tracking-[4px] text-[#6C8C5C] text-sm font-semibold">
          {eyebrow}
        </p>
      )}

      <h2
        className="
        text-5xl
        md:text-6xl
        font-bold
        leading-tight
        text-[#1B1B1B]
        "
      >
        {title}
      </h2>

      {subtitle && (
        <p className="mt-6 text-lg text-gray-600 leading-8">
          {subtitle}
        </p>
      )}

    </div>
  );
}