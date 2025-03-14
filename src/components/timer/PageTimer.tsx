import Icon from "../../icons/Icon";
import ContainerSection from "../ui/ContainerSection";
import Timer from "./Timer/Timer";

export function PageTimer() {
  return (
    <ContainerSection>
      <div className="grid grid-cols-3 gap-4">
        <Timer seconds={60} />
        <Timer seconds={60} />
        <Timer seconds={60} />
      </div>
      <Icon name="timer" />
    </ContainerSection>
  );
}
