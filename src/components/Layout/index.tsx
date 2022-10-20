import clsx from "clsx"
type LayoutProps = React.ComponentProps<"div">
export default function Layout(props: LayoutProps) {

  return <div {...props} class={clsx(props.class, "flex flex-col gap-4 items-center justify-center w-screen h-screen")} />
}