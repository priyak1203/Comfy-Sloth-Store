import styled from 'styled-components';
import { useFilterContext } from '../context/filter_context';

const Filters = () => {
  const {
    filters: { text },
    updateFilters,
  } = useFilterContext();

  return (
    <Wrapper>
      <div>
        <form onSubmit={(e) => e.preventDefault()}>
          {/* search input start */}
          <div className="form-control">
            <input
              type="text"
              name="text"
              placeholder="search"
              className="search-input"
              value={text}
              onChange={updateFilters}
            />
          </div>
          {/* search input end */}
        </form>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .form-control {
    margin-bottom: 1.25rem;
  }

  .search-input {
    padding: 0.5rem;
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    letter-spacing: var(--spacing);
    outline: none;
  }

  .search-input::placeholder {
    text-transform: capitalize;
  }
`;

export default Filters;
