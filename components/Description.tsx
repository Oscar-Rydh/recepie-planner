export interface DescriptionProps {
  content: string;
}
export const Description = ({ content }: DescriptionProps) => (
  <div className="border rounded-lg shadow-md max-w-prose mx-4 p-4">
    <p>{content}</p>
  </div>
);
