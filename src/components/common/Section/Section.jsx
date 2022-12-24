import { Title, SectionWrapper } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <SectionWrapper>
          <Title>{title}</Title>
          {children}
    </SectionWrapper>
  );
};

