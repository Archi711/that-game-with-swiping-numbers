import clsx from 'clsx'
import { ButtonCss } from '../Button'
type LinkProps = React.ComponentProps<"a">
export default function Link(props: LinkProps) {

  return <a {...props} class={clsx(props.class, ButtonCss.outlined)} />
}