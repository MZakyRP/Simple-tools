function BorderOptions({ useSides, useHorizontal }: any) {
  const [sides, setSides] = useSides;
  const [isHorizontal, setIsHorizontal] = useHorizontal;

  function axisHandler() {
    isHorizontal ? setIsHorizontal(false) : setIsHorizontal(true);
  }

  return (
    <section>
      <h2>Select amount of partial sides</h2>
      <div className="border-options__buttons">
        <button onClick={() => setSides(4)}>4</button>
        <button onClick={() => setSides(2)}>2</button>
        <button onClick={() => setSides(1)}>1</button>
        {sides === 2
          ? <button onClick={axisHandler}>{isHorizontal ? "Vertical" : "Horizontal"}</button>
          : null
        }
      </div>
    </section>
  );
}

export default BorderOptions;