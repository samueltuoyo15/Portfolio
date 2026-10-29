import { ImageResponse } from "next/og";

export const alt = "Samuel Tuoyo, Full Stack Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    background: "#0b1020",
                    color: "white",
                    padding: "64px",
                    fontFamily: "Arial, sans-serif",
                }}
            >
                <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            fontSize: 20,
                            letterSpacing: 4,
                            color: "#a5b4fc",
                            textTransform: "uppercase",
                        }}
                    >
                        samueltuoyo.com
                    </div>
                    <div style={{ display: "flex", fontSize: 72, fontWeight: 700, marginTop: 44 }}>
                        Samuel Tuoyo
                    </div>
                    <div style={{ display: "flex", fontSize: 36, color: "#facc15", marginTop: 8 }}>
                        Full Stack Engineer
                    </div>
                    <div
                        style={{
                            display: "flex",
                            maxWidth: 720,
                            fontSize: 27,
                            lineHeight: 1.4,
                            color: "#d1d5db",
                            marginTop: 28,
                        }}
                    >
                        Building software that helps companies earn more, serve customers better,
                        and save time.
                    </div>
                    <div style={{ display: "flex", gap: 14, marginTop: "auto" }}>
                        {["NGN 1M+ processed", "Paying users", "250+ developers"].map((proof) => (
                            <div
                                key={proof}
                                style={{
                                    display: "flex",
                                    border: "1px solid #374151",
                                    borderRadius: 999,
                                    padding: "11px 18px",
                                    fontSize: 18,
                                    color: "#e5e7eb",
                                }}
                            >
                                {proof}
                            </div>
                        ))}
                    </div>
                </div>

                <div
                    style={{
                        width: 290,
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: 36,
                        background: "#5D5FEF",
                        marginLeft: 48,
                    }}
                >
                    <div style={{ display: "flex", fontSize: 100, fontWeight: 800 }}>ST</div>
                    <div
                        style={{
                            display: "flex",
                            textAlign: "center",
                            fontSize: 18,
                            lineHeight: 1.6,
                            color: "#e0e7ff",
                            marginTop: 26,
                            padding: "0 30px",
                        }}
                    >
                        Myhappr · SendLiberty · Dokugen · Pulse
                    </div>
                </div>
            </div>
        ),
        size,
    );
}
