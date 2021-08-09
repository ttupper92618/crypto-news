type LoaderSize = "small" | "medium" | "large";

export interface LoadingProps {
  size?: LoaderSize;
  message?: string;
  show?: boolean;
}
