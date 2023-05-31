import { gql } from 'apollo-boost';

const GET_TODOS = gql`
  {
    todos {
      id
      text
      completed
    }
  }
`;

const CREATE_TODOS = gql`
  {
    todos {
      id
      text
      completed
    }
  }
`;

export { GET_TODOS, CREATE_TODOS };
