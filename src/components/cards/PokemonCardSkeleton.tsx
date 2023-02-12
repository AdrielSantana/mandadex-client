import { Card, Placeholder } from "react-bootstrap";

const PokemonCardSkeleton = () => {
  return (
    <>
      <span className="card-container">
        <Card>
          <Placeholder animation="wave" className="pokemon-background-skeleton" />
          <Placeholder animation="wave" className="pokemon-name-skeleton" />
          <Placeholder animation="wave" className="pokemon-category-skeleton" />
          <Placeholder animation="wave" className="favorite-icon-skeleton" />
        </Card>
      </span>
    </>
  );
};

export default PokemonCardSkeleton;
