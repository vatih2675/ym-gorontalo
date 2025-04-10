import { dataBpjph } from "../constants/data";
import BpjphDetail from "./BpjphDetail";

const Bpjph = () => {
  return (
    <section className="w-full p-24 text-gray-700 flex flex-wrap justify-evenly items-center gap-10">
      {dataBpjph.map((bpj, index) => (
        <BpjphDetail key={index} bpj={bpj} />
      ))}
    </section>
  );
};

export default Bpjph;
