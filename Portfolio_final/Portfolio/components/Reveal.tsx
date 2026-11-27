// A fade-in as a block scrolls into view, done in CSS (see .reveal in globals.css).
// The content is visible in the server HTML: browsers without scroll-driven animations,
// visitors with reduced motion, printing, crawlers and link previews all see it as is.
type Props = React.HTMLAttributes<HTMLDivElement> & { delay?: number };

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function Reveal({ delay, className = "", children, ...rest }: Props) {
  return (
    <div className={`reveal ${className}`} {...rest}>
      {children}
    </div>
  );
}
