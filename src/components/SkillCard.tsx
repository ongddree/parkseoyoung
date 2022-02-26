import styled from "@emotion/styled"
import {MEDIA_QUERY_END_POINT} from "@constants/."


interface SkillProps {
  title:string,
  itemSet : Array<{
    name : string,
    imgSrc : string,
  }>
}

export const SkillCard = ({title, itemSet}: SkillProps) => {
  return (
    <>
    <Container>
        <Title>{title}</Title>
        <List>
          {itemSet.map((skill, index)=>{
            return (
              <ListItem key={`${title}-${index}`}>
              <figure>
                <SkillIcon
                  src={skill.imgSrc}
                  alt={skill.name}
                />
                <SkillIconTit>{skill.name}</SkillIconTit>
              </figure>
            </ListItem>
            ); 
          })}
        </List>
    </Container>
    </>
  )
}

const Container = styled.section`
  padding: 30px;
  color: #000000;
  background-color: #ffffff;
  box-shadow: 4px 12px 30px 6px rgba(0, 0, 0, 0.224);
  text-align: center;
  border-radius: 30px;
  transition: all 0.2s;
  margin: 0 auto;
  &:hover {
    transform: translateY(-5px);
  }
  & + & {
    margin-top:40px;
  }
  @media only screen and (max-width: ${MEDIA_QUERY_END_POINT.XLARGE}) {
    width: 1300px;
  }
  @media only screen and (max-width: ${MEDIA_QUERY_END_POINT.LARGE}) {
    width: 800px;
  }
  @media only screen and (max-width: ${MEDIA_QUERY_END_POINT.TABLET}) {
    width: 700px;
  }
  @media only screen and (max-width: ${MEDIA_QUERY_END_POINT.MOBILE}) {
    width: 300px;
  }
`;

const Title = styled.h4`
  font-size: 30px;
  margin-bottom:20px;
  `;

const List = styled.ul`
  display: flex;
  gap: 25px;
  flex-wrap: wrap;
  justify-content:center;
  padding: 0 40px;
  margin: 0 auto;
  @media only screen and (max-width: ${MEDIA_QUERY_END_POINT.TABLET}) {
    gap: 15px;
  }
`;

const ListItem = styled.li`
  & + & {
    margin-left: 10px;  
  }
`;

const SkillIcon = styled.img`
  display: inline-block;
  height: 40px;
  @media(min-width: ${MEDIA_QUERY_END_POINT.TABLET}) {
    height: 90px;
  }

`;

const SkillIconTit = styled.figcaption`
  margin-top: 15px;
  font-size: 18px;
  font-family: "Quantico", sans-serif;
`;