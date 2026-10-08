type DeviceMockupProps = {
  src: string;
  alt: string;
  deviceType: "macbook" | "iphone";
};

export function DeviceMockup({ src, alt, deviceType }: DeviceMockupProps) {
  if (deviceType === "iphone") {
    return (
      <div className="relative mx-auto w-full max-w-[280px]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-6 top-8 -z-10 h-[78%] rounded-full blur-3xl"
          style={{ background: "rgba(90, 120, 190, 0.22)" }}
        />
        <div className="relative rounded-[44px] bg-[#1c1c1e] p-[11px] shadow-[0_28px_70px_rgba(0,0,0,0.5),inset_0_0_0_1px_rgba(255,255,255,0.14)]">
          <div className="pointer-events-none absolute inset-[6px] rounded-[40px] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]" />
          <div className="relative overflow-hidden rounded-[34px] bg-black">
            <div className="absolute left-1/2 top-[10px] z-10 h-[22px] w-[92px] -translate-x-1/2 rounded-full bg-black shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]" />
            <img
              src={src}
              alt={alt}
              draggable={false}
              className="block aspect-[9/19.5] w-full bg-black object-contain"
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative mx-auto w-full max-w-4xl">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-10 top-6 -z-10 h-[70%] rounded-full blur-3xl"
        style={{ background: "rgba(90, 120, 190, 0.2)" }}
      />
      <div className="relative rounded-t-2xl bg-[#1c1c1e] px-[10px] pb-[10px] pt-[14px] shadow-[0_24px_60px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.12)]">
        <div className="absolute left-1/2 top-[5px] z-10 h-[7px] w-16 -translate-x-1/2 rounded-full bg-black shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]" />
        <div className="overflow-hidden rounded-[10px] bg-black">
          <img
            src={src}
            alt={alt}
            draggable={false}
            className="block aspect-[16/10] w-full bg-black object-contain"
          />
        </div>
      </div>
      <div className="relative h-[14px] rounded-b-xl bg-gradient-to-b from-[#3a3a3c] via-[#2c2c2e] to-[#1a1a1c] shadow-[inset_0_1px_0_rgba(255,255,255,0.16)]">
        <div className="absolute left-1/2 top-0 h-[6px] w-[18%] -translate-x-1/2 rounded-b-md bg-[#0c0c0e]" />
      </div>
      <div
        aria-hidden="true"
        className="mx-auto mt-px h-[7px] w-[46%] rounded-b-xl bg-[#2a2a2c]"
        style={{ boxShadow: "0 18px 36px rgba(0, 0, 0, 0.45)" }}
      />
    </div>
  );
}
