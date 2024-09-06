export default function Slide3({ opacity }) {
  return (
    <div
      className="fader__slide absolute top-0 h-full w-full"
      style={{ opacity: opacity }}
    >
      <div className="mx-auto flex h-full w-full max-w-[1480px] items-center justify-between bg-blue-200">
        <div className="max-w-[450px]">
          <h2 className="hosp-h2 text-pine-green">Proven ROAS</h2>
          <p className="hosp-h3 my-[40px] text-pine-green">
            Achieve up to 20x return on Meta and Google Ads with our data-driven
            strategies.
          </p>
          <p className="hosp-p text-black">
            Diam vel pretium id sit porta sit rutrum. Facilisis aliquet integer
            ac sit. Volutpat elit lorem quis.
          </p>
        </div>
      </div>
    </div>
  );
}
