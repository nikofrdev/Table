import classes from "./Button.module.scss";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};

export default function Button({ children, ...props }: ButtonProps) {
  return (
    <button {...props} className={classes.Btn}>
      {children}
    </button>
  );
}
