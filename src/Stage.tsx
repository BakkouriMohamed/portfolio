import { MethodStage } from "./Method";
import { PathStage } from "./Path";
import { ProofStage } from "./Proof";
import { STAGE_LAYERS, STAGE_SHOTS, type StageId } from "./stageShots";
import { WorkCarousel } from "./Work";

type Props = {
  openId: StageId | null;
};

export function Stage({ openId }: Props) {
  const active = openId ? STAGE_SHOTS[openId] : undefined;
  const workOn = openId === "work";
  const resultsOn = openId === "results";
  const methodOn = openId === "method";
  const pathOn = openId === "path";
  const panelOn = workOn || resultsOn || methodOn || pathOn;
  const shotOn = Boolean(active);

  return (
    <aside
      className={[
        "stage",
        shotOn || panelOn ? "stage--on" : "",
        workOn ? "stage--carousel" : "",
        resultsOn ? "stage--metrics" : "",
        methodOn ? "stage--method" : "",
        pathOn ? "stage--path" : "",
      ]
        .filter(Boolean)
        .join(" ")}
      aria-hidden={panelOn ? undefined : true}
      data-stage-panel={panelOn ? "" : undefined}
    >
      <div className="stage__frame">
        {STAGE_LAYERS.map((shot) => {
          const visible = shotOn && active?.src === shot.src;
          return (
            <img
              key={shot.src}
              className={`stage__img stage__img--${shot.kind}${visible ? " stage__img--on" : ""}`}
              src={shot.src}
              alt=""
              decoding="async"
            />
          );
        })}
      </div>
      {workOn ? <WorkCarousel className="work-carousel--stage" /> : null}
      {resultsOn ? <ProofStage /> : null}
      {methodOn ? <MethodStage /> : null}
      {pathOn ? <PathStage /> : null}
    </aside>
  );
}
