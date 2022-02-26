import styled from "@emotion/styled";

interface StrengthProps {
  title: string,
  itemSet: Array<{content:string}>,
}

export const StrengthCard = ({title, itemSet}:  StrengthProps) => {
  return(
    <Container>
      <Title>{title}</Title>
      <List>
      {itemSet.map((item,index) => {
          return(
            <ListItem key={`${title}-${index}`}>
              &#9679; {item.content}
            </ListItem>
          )
      })}
      </List>
    </Container>
  );
}

const Container = styled.article`
  color: #000000;
  background-color: #ffffff;
  -webkit-box-shadow: 4px 12px 30px 6px rgba(0, 0, 0, 0.224);
  box-shadow: 4px 12px 30px 6px rgba(0, 0, 0, 0.224);
  border-radius: 30px;
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
  padding: 20px;
  text-align: left;
  font-size: 20px;
  line-height: 1.5;
  &:hover {
    transform: translateY(-5px);
  }
`;

const Title = styled.h3`
  font-size: 30px;
  font-weight: 700;
  border-bottom: 1px solid #aaa;
  margin-bottom: 10px;
`;

const List = styled.ul``;

const ListItem = styled.li``;