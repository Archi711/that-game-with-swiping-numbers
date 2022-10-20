import clsx from "clsx"
import React from "preact/compat"

type ButtonVariant = "outlined"
export const ButtonCss: Record<ButtonVariant, string> = {
  outlined: clsx("hover:brightness-125", "flex flex-row gap-4 px-4 py-2.5 justify-center items-center",
    "border rounded-xl border-[var(--secondary-font-color)]")
}

type ButtonProps = React.ComponentProps<"button">
export default function Button(props: ButtonProps) {


  return <button {...props} class={clsx(props.class)} />
}