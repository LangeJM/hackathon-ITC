const TitleBanner = () => {
  return (
    <header style={{ backgroundColor: "#D9CDB8" }} className="p-3">
      <h1 style={{ display: "inline", paddingRight: "20%" }}>Vacci-Nation</h1>
      <span style={{ fontStyle: "italic" }}>
        Real-time information about sentiment towards Covid19 vaccinations
      </span>
    </header>
  );
};

export default TitleBanner;
