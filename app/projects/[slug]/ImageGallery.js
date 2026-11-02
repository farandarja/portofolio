"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { COLORS } from "../../../lib/theme";

const arrowStyle = {
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  width: 36,
  height: 36,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "rgba(10,11,15,0.65)",
  border: `1px solid ${COLORS.borderStrong}`,
  color: COLORS.text,
  cursor: "pointer",
  zIndex: 2,
};

export default function ImageGallery({ images }) {
  const [index, setIndex] = useState(0);

  if (!images || images.length === 0) return null;

  const prev = () => setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === images.length - 1 ? 0 : i + 1));

  return (
    <div style={{ marginTop: 40 }}>
      <div
        style={{
          position: "relative",
          width: "100%",
          aspectRatio: "16 / 10",
          overflow: "hidden",
          border: `1px solid ${COLORS.border}`,
          background: COLORS.surfaceAlt,
        }}
      >
        {/* Blurred copy fills the empty space beside portrait screenshots */}
        <div
          style={{
            position: "absolute",
            inset: -20,
            backgroundImage: `url('${images[index]}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(24px) brightness(0.45)",
          }}
        />

        {/* Actual screenshot, fully visible (contain = no cropping/zoom) */}
        <img
          src={images[index]}
          alt={`Screenshot ${index + 1}`}
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            objectFit: "contain",
            display: "block",
          }}
        />

        {images.length > 1 && (
          <>
            <button onClick={prev} aria-label="Previous screenshot" style={{ ...arrowStyle, left: 12 }}>
              <ChevronLeft size={18} strokeWidth={1.5} />
            </button>
            <button onClick={next} aria-label="Next screenshot" style={{ ...arrowStyle, right: 12 }}>
              <ChevronRight size={18} strokeWidth={1.5} />
            </button>

            <div
              style={{
                position: "absolute",
                bottom: 10,
                left: "50%",
                transform: "translateX(-50%)",
                display: "flex",
                gap: 6,
                zIndex: 2,
              }}
            >
              {images.map((_, i) => (
                <div
                  key={i}
                  style={{
                    width: 6,
                    height: 6,
                    background: i === index ? COLORS.accent : "rgba(237,235,230,0.35)",
                    transition: "background 0.2s ease",
                  }}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {images.length > 1 && (
        <p
          style={{
            marginTop: 10,
            fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
            fontSize: 12,
            color: COLORS.textFaint,
          }}
        >
          {index + 1} / {images.length}
        </p>
      )}
    </div>
  );
}