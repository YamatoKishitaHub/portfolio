type HeadingProps = {
  label: string;
  h2?: boolean;
};

const Heading = ({ label, h2 }: HeadingProps) => {
  if (h2) {
    return (
      <h2 className="mb-2 text-center text-xl lg:text-2xl text-slate-500">
        &mdash;	{label} &mdash;
      </h2>
    );
  } else {
    return (
      <h1 className="mb-2 text-center text-2xl lg:text-3xl">
        &mdash;	{label} &mdash;
      </h1>
    )
  }
};

export default Heading;
