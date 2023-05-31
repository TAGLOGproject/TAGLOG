import { OperationVariables, Query, QueryResult } from 'react-apollo';
import { GET_TODOS } from '../todo';

export default function Todos() {
  return (
    <Query query={GET_TODOS}>
      {(result: QueryResult<any, OperationVariables>) => {
        const { loading, error, data } = result;
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error! {error.message}</p>;

        return (
          <ul>
            {data?.todos.map((todo: any) => (
              <li key={todo.id}>
                {todo.text} - {todo.completed ? 'Completed' : 'Pending'}
              </li>
            ))}
          </ul>
        );
      }}
    </Query>
  );
}
