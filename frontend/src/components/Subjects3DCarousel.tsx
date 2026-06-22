import { ArrowRight } from "lucide-react";
import { useEffect, useMemo, useState, type CSSProperties } from "react";
import { Link } from "react-router-dom";
import { SUBJECTS, type SubjectCard } from "../data/subjects";
import { fetchSubjects } from "../services/adminService";

interface Subjects3DCarouselProps {
  subjects?: SubjectCard[];
}

const CAROUSEL_RADIUS = 350;
const ROTATION_DURATION = 45;

export default function Subjects3DCarousel({
  subjects: subjectsProp,
}: Subjects3DCarouselProps) {
  const [subjects, setSubjects] = useState<SubjectCard[]>(
    subjectsProp ?? SUBJECTS,
  );

  useEffect(() => {
    if (subjectsProp) {
      setSubjects(subjectsProp);
      return;
    }

    let cancelled = false;

    void fetchSubjects()
      .then((apiList) => {
        if (cancelled || apiList.length === 0) return;

        const merged = SUBJECTS.map((local) => {
          const remote = apiList.find((item) => item.slug === local.slug);
          if (!remote) return local;
          return {
            ...local,
            name: remote.name_kg || local.name,
          };
        });

        setSubjects(merged);
      })
      .catch(() => {
        setSubjects(SUBJECTS);
      });

    return () => {
      cancelled = true;
    };
  }, [subjectsProp]);

  const angleStep = useMemo(
    () => 360 / Math.max(subjects.length, 1),
    [subjects.length],
  );

  return (
    <div className="gallery-scene mx-auto mt-12 w-full max-w-5xl">
      <div
        className="gallery-ring"
        style={
          {
            "--gallery-duration": `${ROTATION_DURATION}s`,
          } as CSSProperties
        }
      >
        {subjects.map((subject, index) => {
          const Icon = subject.icon;
          const rotateY = index * angleStep;

          return (
            <div
              key={subject.id}
              className="gallery-card"
              style={
                {
                  "--card-rotate-y": `${rotateY}deg`,
                  "--gallery-radius": `${CAROUSEL_RADIUS}px`,
                } as CSSProperties
              }
            >
              <Link
                to={`/subjects/${subject.slug}`}
                className="gallery-card-inner group block h-full w-full"
              >
                <div
                  className={`mb-3 inline-flex rounded-xl p-2.5 ${subject.bgLight} ${subject.bgDark}`}
                >
                  <Icon className={`h-5 w-5 ${subject.color}`} />
                </div>
                <h3 className="text-sm font-bold text-white">{subject.name}</h3>
                <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-slate-400">
                  {subject.description}
                </p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-[10px] font-medium text-slate-500">
                    {subject.topicsCount} тема
                  </span>
                  <span className="flex items-center gap-0.5 text-[10px] font-semibold text-cyan-400 opacity-0 transition-opacity group-hover:opacity-100">
                    Баштоо
                    <ArrowRight className="h-3 w-3" />
                  </span>
                </div>
              </Link>
            </div>
          );
        })}
      </div>

      <p className="mt-6 text-center text-xs text-slate-500 dark:text-slate-400">
        Каруселге чычканды жакындатып токтотуп, предметти тандаңыз
      </p>
    </div>
  );
}
