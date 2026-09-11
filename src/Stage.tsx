import { STAGE_LAYERS, STAGE_SHOTS, type StageId } from "./stageShots";
import { WorkCarousel } from "./Work";

type Props = {
  openId: StageId | null;
};

export function Stage({ openId }: Props) {
  const active = openId ? STAGE_SHOTS[openId] : undefined;
  const workOn = openId === "work";
  const shotOn = Boolean(active);

  return (
    <aside
      className={`stage${shotOn || workOn ? " stage--on" : ""}${workOn ? " stage--carousel" : ""}`}
      aria-hidden={workOn ? undefined : true}
      data-stage-panel={workOn ? "" : undefined}
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
    </aside>
  );
}
