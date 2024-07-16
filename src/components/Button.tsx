import { ReactNode } from "react";

type buttonProps = {
  variant?: string;
  onClick?: () => void;
  children: ReactNode;
};

export default function Button({
  variant,
  onClick,
  children,
}: buttonProps): JSX.Element {
  let className: string;
  
  switch (variant) {
    case "danger":
      className = "bg-red-700 hover:bg-red-900";
      break;
    case "warning":
      className = "bg-yellow-700 hover:bg-yellow-900";
      break;
    default:
      className = "bg-green-800 hover:bg-green-900";
      break;
  }
  return (
    <button
      className={`${className} text-white px-4 py-3 mt-4 rounded-md capitalize transition-colors
      `}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
