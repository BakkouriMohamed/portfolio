import { STAGE_LAYERS, STAGE_SHOTS, type StageId } from "./stageShots";
import { WorkCarousel } from "./Work";

type Props = {
  openId: StageId | null;
};

export function Stage({ openId }: Props) {
  const active = openId ? STAGE_SHOTS[openId] : undefined;
  const workOn = openId === "work";
  const on = Boolean(active) || workOn;

  return (
    <aside
      className={`stage${on ? " stage--on" : ""}${workOn ? " stage--carousel" : ""}`}
      aria-hidden={workOn ? undefined : true}
      data-stage-panel={workOn ? "" : undefined}
    >
      {workOn ? (
        <WorkCarousel className="work-carousel--stage" />
      ) : (
        <div className={`stage__frame${active ? ` stage__frame--${active.kind}` : ""}`}>
          {STAGE_LAYERS.map((shot) => {
            const visible = on && active?.src === shot.src;
            return (
              <img
                key={shot.src}
                className={`stage__img${visible ? " stage__img--on" : ""}`}
                src={shot.src}
                alt=""
                decoding="async"
              />
            );
          })}
        </div>
      )}
    </aside>
  );
}
