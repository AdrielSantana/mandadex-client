import Filter from "./Filter";

type FilterType = {
  category: string;
  color: string;
};

const filters: FilterType[] = [
  {
    category: "Água",
    color: "#1052ED",
  },
  {
    category: "Elétrico",
    color: "#A7A700",
  },
  {
    category: "Fogo",
    color: "#A80409",
  },
  {
    category: "Grama",
    color: "#008A37",
  },
  {
    category: "Gelo",
    color: "#3B82A4",
  },
  {
    category: "Inseto",
    color: "#1E4F29",
  },
  {
    category: "Normal",
    color: "#7A535E",
  },
  {
    category: "Psíquico",
    color: "#A31A64",
  },
  {
    category: "Pedra",
    color: "#5A1E0D",
  },
  {
    category: "Terra",
    color: "#9A5808",
  },
];

const Filters = () => {
  return (
    <>
      <p className="filters-title">Filtros</p>
      <div className="filters-div">
        {filters.map((filter: FilterType, idx: number) => {
          return (
            <span key={idx} className="filter-button-span">
              <Filter
                key={idx}
                color={filter.color}
                category={filter.category}
              />
            </span>
          );
        })}
      </div>
    </>
  );
};

export default Filters;
