import styled from 'styled-components';
import { FaCheck } from 'react-icons/fa';
import { useFilterContext } from '../context/filter_context';
import { getUniqueValues } from '../utils/helpers';

const Filters = () => {
  const {
    filters: { text, category, company, color },
    all_products,
    updateFilters,
  } = useFilterContext();

  const categories = getUniqueValues(all_products, 'category');
  const companies = getUniqueValues(all_products, 'company');
  const colors = getUniqueValues(all_products, 'colors');

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
          {/* categories start */}
          <div className="form-control">
            <h5>category</h5>
            <div>
              {categories.map((c, index) => {
                return (
                  <button
                    key={index}
                    type="button"
                    name="category"
                    onClick={updateFilters}
                    className={`${c === category ? 'active' : null}`}
                  >
                    {c}
                  </button>
                );
              })}
            </div>
          </div>
          {/* categories end */}
          {/* companies start */}
          <div className="form-control">
            <h5>company</h5>
            <select
              name="company"
              className="company"
              value={company}
              onChange={updateFilters}
            >
              {companies.map((c, index) => {
                return (
                  <option key={index} value={c}>
                    {c}
                  </option>
                );
              })}
            </select>
          </div>
          {/* companies end */}
          {/* colors start */}
          <div className="form-control">
            <h5>colors</h5>
            <div className="colors">
              {colors.map((c, index) => {
                if (c === 'all') {
                  return (
                    <button
                      key={index}
                      type="button"
                      name="color"
                      onClick={updateFilters}
                      data-color="all"
                      className={`${
                        c === color ? 'all-btn active' : 'all-btn'
                      }`}
                    >
                      {c}
                    </button>
                  );
                }
                return (
                  <button
                    key={index}
                    type="button"
                    name="color"
                    onClick={updateFilters}
                    style={{ background: c }}
                    data-color={c}
                    className={`${
                      c === color ? 'color-btn active' : 'color-btn'
                    }`}
                  >
                    {c === color ? <FaCheck /> : null}
                  </button>
                );
              })}
            </div>
          </div>
          {/* colors end */}
        </form>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .form-control {
    margin-bottom: 1.25rem;
    h5 {
      margin-bottom: 0.5rem;
    }
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

  button {
    display: block;
    margin: 0.25em 0;
    padding: 0.25rem 0;
    text-transform: capitalize;
    background: transparent;
    border: none;
    border-bottom: 1px solid transparent;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-5);
    cursor: pointer;
  }

  .active {
    border-color: var(--clr-grey-5);
  }

  .company {
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    padding: 0.25rem;
  }
  .colors {
    display: flex;
    align-items: center;
  }

  .color-btn {
    display: inline-block;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: #222;
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.5rem;
      color: var(--clr-white);
    }
  }

  .all-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.5rem;
    opacity: 0.5;
  }

  .active {
    opacity: 1;
  }
`;

export default Filters;
