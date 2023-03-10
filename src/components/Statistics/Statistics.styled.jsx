import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;

  padding: 0;
  margin: 0;

  text-transform: capitalize;
  font-weight: bold;
`;

export const Item = styled.li`
  color: ${props => handleItemColor(props.name)};
`;

const handleItemColor = name => {
  switch (name) {
    case 'Good':
      return 'green';
    case 'Neutral':
      return 'grey';
    case 'Bad':
      return 'red';

    default:
      return 'black';
  }
};
