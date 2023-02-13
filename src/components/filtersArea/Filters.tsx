import Filter from "./Filter";

type FilterButtonType = {
  category: string;
  name: string;
  color: string;
};

const filtersColor: FilterButtonType[] = [
  {
    category: "Water",
    name: "Água",
    color: "#1052ED",
  },
  {
    category: "Electric",
    name: "Elétrico",
    color: "#A7A700",
  },
  {
    category: "Fire",
    name: "Fogo",
    color: "#A80409",
  },
  {
    category: "Grass",
    name: "Grama",
    color: "#008A37",
  },
  {
    category: "Ice",
    name: "Gelo",
    color: "#3B82A4",
  },
  {
    category: "Bug",
    name: "Inseto",
    color: "#1E4F29",
  },
  {
    category: "Normal",
    name: "Normal",
    color: "#7A535E",
  },
  {
    category: "Psychic",
    name: "Psíquico",
    color: "#A31A64",
  },
  {
    category: "Rock",
    name: "Pedra",
    color: "#5A1E0D",
  },
  {
    category: "Ground",
    name: "Terra",
    color: "#9A5808",
  },
];

const Filters = () => {
  return (
    <>
      <p className="filters-title">Filtros</p>
      <div className="filters-div">
        {filtersColor.map((filter: FilterButtonType, idx: number) => {
          return (
            <span key={idx} className="filter-button-span">
              <Filter
                key={idx}
                color={filter.color}
                name={filter.name}
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
