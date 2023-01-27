import { SectionTitle } from './Title.styled';

export const Title = ({ title, children }) => {
  return (
    <section>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </section>
  );
};
