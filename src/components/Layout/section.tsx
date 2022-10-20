import clsx from "clsx"

type SectionProps = React.ComponentProps<"section"> & {
  dir?: ""
}

export default function Section(props: SectionProps) {

  return <section {...props} class={clsx(props.class, "flex flex-col gap-4 items-center justify-center")} />
}