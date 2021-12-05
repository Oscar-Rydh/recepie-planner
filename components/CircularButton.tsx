import { IconType } from "react-icons/lib";
import { IconRenderer } from "./IconRenderer";

export interface CircularButtonProps {
  count?: number;
  Icon: IconType;
  onClick(): void;
}
export const CircularButton = ({
  count,
  Icon,
  onClick,
}: CircularButtonProps) => {
  console.log(count > 0);
  return (
    <button onClick={() => onClick()}>
      <div className="flex justify-center items-center relative rounded-full bg-white w-24 h-24">
        <div>
          <IconRenderer size={"2em"} Icon={Icon} />
        </div>
        {count > 0 && (
          <div className="flex bg-gray-400 rounded-full absolute top-0 right-0 p-2">
            {count}
          </div>
        )}
      </div>
    </button>
  );
};
