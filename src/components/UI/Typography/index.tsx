import clsx from "clsx"

type TextVariants = 'button_text' | 'button_big_text' | 'placeholder_text' | 'label_text' | 'title'

const commonTextCss = clsx("")
export const TextCss: Record<TextVariants, string> = {
  button_text: clsx("text-base font-normal"),
  button_big_text: clsx("text-4xl font-light"),
  label_text: clsx("text-lg font-medium"),
  placeholder_text: clsx("text-sm font-normal"),
  title: clsx("text-base font-bold")
}

type TextProps = React.ComponentProps<"span"> & {
  variant?: TextVariants
}
export function Text({ variant = "button_text", ...props }: TextProps) {
  return <span {...props} class={clsx(props.class)} />
}