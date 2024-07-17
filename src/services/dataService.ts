import { GraphQLClient, gql } from "graphql-request";

const url = import.meta.env.VITE_API_BASE_URL;
const client = new GraphQLClient(`${url}graphql`);


export const getEmployees = async () => {
  const query = gql`
    query {
      getEmployees {
        id
        name
      }
    }
  `;
  return await client.request(query);
};

export const getTasks = async () => {
  const query = gql`
    query {
      getTasks {
        id
        name
      }
    }
  `;
  return await client.request(query);
}

export const getEmployeeTask = async () => {
  const query = gql`
    query {
      getEmployeeTask {
        id,
        taskId,
        employeeId
      }
    }
  `;
  return await client.request(query);
}
